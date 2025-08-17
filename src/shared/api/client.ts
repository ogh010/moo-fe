// client.ts
// 역할 : http 메소드별 공통 함수 제공 (get, post )

import { axiosInstance } from "./base";
import { AxiosRequestConfig } from "axios";

// 모든 메서드는 공통적으로 응답 데이터의 타입을 반환
// async<T> 란 비동기 함수 선언

// 공통 HTTP 메서드 함수들
export const apiClient = {
  get: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const response = await axiosInstance.get<T>(url, config);
    return response.data;
  },

  post: async <T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    const response = await axiosInstance.post<T>(url, data, config);
    return response.data;
  },
};
