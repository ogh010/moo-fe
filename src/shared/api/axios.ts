import axios from "axios";

/**
 * baseUrl
 * JWT 토큰 자동 헤더 추가
 * 인터셉터
 * 타임아웃, retry, 로그설정
 */

// axiosInstance 인스턴스 생성
// axios.create 메서드는 새로운 axios 인스턴스를 생성하는 함수
export const axiosInstance = axios.create({
  // baseURL: "https://jsonplaceholder.typicode.com", // todo
  baseURL: "http://localhost:8080", // 로컬 백엔드 서버
  timeout: 10000, // 10초 타임아웃
  headers: {
    // 기본 헤더 설정
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    // 로딩 상태는 컴포넌트에서 관리!!
    console.log("🚀 api 요청 : ", config.method?.toUpperCase(), config.url); // 요청 메서드와 경로 출력
    // config : 요청 설정 객체
    // config.method : 요청 메서드 (GET, POST, PUT, DELETE 등)
    // config.url : 요청 URL
    // config.headers : 요청 헤더
    // config.data : 요청 데이터
    // config.params : 요청 파라미터
    // config.timeout : 요청 타임아웃

    // jwt 토큰 자동 추가
    const token = localStorage.getItem("accessToken");
    // 토큰이 있으면 헤더에 추가
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error("요청 인터셉터 에러 : ", error);
    // console.log와 error차이
    // console.log는 디버깅 목적으로 사용
    // error는 에러 처리 목적으로 사용
    // 따라서 에러 처리 시 console.error 사용
    return Promise.reject(error);
  }
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("api 응답 : ", response.status, response.config.url);
    // response : 응답 객체
    // response.status : 응답 상태 코드
    // response.config.url : 요청 URL
    // response.data : 응답 데이터
    // response.headers : 응답 헤더
    // response.config : 요청 설정 객체
    // response.config.method : 요청 메서드
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

    // error.reponse?.status 와 error.response.status 차이
    // error.reponse?.status 은 응답 상태 코드가 없을 경우 undefined를 반환
    // error.response.status 은 응답 상태 코드가 없을 경우 에러를 발생시킴
    // 따라서 응답 상태 코드가 없을 경우 error.reponse?.status 사용
    const { status } = error.response;

    switch (status) {
      case 400:
        console.log("잘못된 요청", error.response?.data);
        break;
      case 401:
        console.log("인증 실패 - 로그인이 필요합니다", error.response?.data);
        break;
      case 403:
        console.log("권한 없음", error.response?.data);
        break;
      case 404:
        console.log("페이지를 찾을 수 없습니다", error.response?.data);
        break;
      case 500:
        console.log("서버 오류", error.response?.data);
        break;
      default:
        console.log("알 수 없는 오류", error.response?.data);
    }

    return Promise.reject(error); // 에러를 다시 던짐
    // Promise.reject 란 에러를 다시 던지는 함수
    // 에러를 다시 던지면 에러 핸들러에서 처리할 수 있음
    // 에러 핸들러에서 처리할 수 있음
  }
);
