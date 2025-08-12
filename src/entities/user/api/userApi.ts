import { axiosInstance } from "@/shared/api/axios";
import type { UserCreateRequest, UserCreateResponse } from "../types/types";
import type { ApiResponse } from "@/shared/api/types";

// 아래 코드 한줄씩 문법 위주로 설명해줘
// create 메서드 추가 시 메서드 이름과 매개변수 타입 정의
// create 는 메서드이름
// 왼쪽 항 : 메서드 이름
// 오른쪽 항 : 메서드 구현
// 메서드 구현 시 메서드 이름과 매개변수 타입 정의
// 메서드 이름과 매개변수 타입 정의 시 메서드 이름과 매개변수 타입 정의
// create 메서드 추가 시 메서드 이름과 매개변수 타입 정의
// async 는 비동기 함수 선언
// userData : userCreateRequest 타입의 매개변수
// Promise<ApiResponse<UserCreateResponse>> : 비동기 함수의 반환 타입
// ApiResponse<UserCreateResponse> : 응답 타입
// UserCreateResponse : 응답 데이터 타입
// 응답 타입은 응답 데이터 타입을 포함하는 객체
// 응답 데이터 타입은 응답 데이터를 포함하는 객체
// 응답 데이터 타입은 응답 데이터를 포함하는 객체
export const userApi = {
  create: async (
    userData: UserCreateRequest // 매개변수 타입 정의, 요청 데이터 타입 정의
  ): Promise<ApiResponse<UserCreateResponse>> => {
    // 비동기 함수의 반환 타입 정의, 응답 데이터 정의
    try {
      const res = await axiosInstance.post("/user/create", userData);
      return res.data;
    } catch (error) {
      console.error("회원가입 실패", error);
      throw error;
    }
  },
};
