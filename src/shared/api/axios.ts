import axios from "axios";
import { useLoadingStore } from "../model/loadingStore";

/**
 * baseUrl
 * JWT 토큰 자동 헤더 추가
 * 인터셉터
 * 타임아웃, retry, 로그설정
 */
export const axiosInstanse = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // todo
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터
axiosInstanse.interceptors.request.use(
  (config) => {
    // 로딩바
    const { loading, setLoading } = useLoadingStore.getState();
    setLoading(true);
    console.log(loading);
    // 로딩바
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
axiosInstanse.interceptors.response.use(
  (response) => {
    // 로딩바
    const { loading, setLoading } = useLoadingStore.getState();
    setLoading(false);
    console.log(loading);
    // 로딩바
    return response;
  },
  (error) => {
    // 로딩바
    const { loading, setLoading } = useLoadingStore.getState();
    setLoading(false);
    console.log(loading);
    // 로딩바
    const { status } = error.response;
    if (status === 401) {
      alert("로그인이 필요합니다");
      window.location.href = "/login";
    }
  }
);
