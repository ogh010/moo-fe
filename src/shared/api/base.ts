import axios from "axios";

/**
 * baseUrl : 기본 URL
 * JWT 토큰 자동 헤더 추가 : 토큰이 있으면 헤더에 추가
 * 인터셉터 : 요청과 응답을 가로채서 처리
 * 타임아웃 : 요청 타임아웃 설정
 * retry : 요청 실패 시 재시도 설정
 * 로그설정 : 요청과 응답을 로깅
 */

// base.ts 파일은 모든 api 요청에 공통적으로 사용되는 설정을 담당
// 역할 : axios 인스턴스 생성 및 전역 설정 (인터셉터, 에러 핸들링)

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // 로컬 백엔드 서버
  timeout: 10000, // 10초 타임아웃
  headers: {
    // 기본 헤더 설정
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    // config : 요청 설정 객체
    // config.method : 요청 메서드 (GET, POST, PUT, DELETE 등)
    // config.url : 요청 URL
    // config.headers : 요청 헤더
    // config.data : 요청 데이터
    // config.params : 요청 파라미터
    // config.timeout : 요청 타임아웃
    console.log("🚀 api 요청 : ", config.method?.toUpperCase(), config.url); // 요청 메서드와 경로 출력

    // jwt 토큰 자동 추가
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error("요청 인터셉터 에러 : ", error);
    return Promise.reject(error);
    // Promise : 비동기 작업의 결과를 나타내는 객체
    // Promise.reject : 에러를 다시 던지는 함수
  }
);

// resultCode 기반 처리
axiosInstance.interceptors.response.use(
  (response) => {
    // response : 응답 객체

    return response;
  },
  (error) => {
    console.error("api 오류", error.response.status, error.message);
    // error.response.status : 응답 상태 코드
    // error.message : 응답 메시지
    // error.response.data : 응답 데이터
    // error.response.headers : 응답 헤더
    // error.response.config : 요청 설정 객체
    // error.response.config.method : 요청 메서드
    // error.response.config.url : 요청 URL

    const { status } = error.response;

    switch (status) {
      case 400:
        console.log("잘못된 요청", error.response?.data);
        break;
      case 401:
        console.log("인증 실패 - 로그인이 필요합니다", error.response?.data);
        alert(error.response.data.resultMsg);
        break;
      case 403:
        console.log("권한 없음", error.response?.data);
        alert(error.response.data.resultMsg);
        break;
      case 404:
        console.log("페이지를 찾을 수 없습니다", error.response?.data);
        alert(error.response.data.resultMsg);
        break;
      case 500:
        console.log("서버 오류", error.response?.data);
        alert(error.response.data.resultMsg);
        break;
      default:
        console.log("알 수 없는 오류", error.response?.data);
        alert(error.response.data.resultMsg);
    }

    return Promise.reject(error);
  }
);
