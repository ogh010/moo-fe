import { axiosInstance } from "@/shared/api/base";
import type {
  UserCreateRequest,
  UserCreateResponse,
  UserLoginRequest,
  UserLoginResponse,
} from "@/entities/user/types";

export const userApi = {
  // 회원가입 api
  create: async (userData: UserCreateRequest): Promise<UserCreateResponse> => {
    try {
      const res = await axiosInstance.post("/user/create", userData);
      return res.data;
    } catch (error) {
      console.error("회원가입 실패", error);
      throw error;
    }
  },
  // 로그인 api
  login: async (req: UserLoginRequest): Promise<UserLoginResponse> => {
    try {
      const res = await axiosInstance.post("/user/login", req);
      return res.data;
    } catch (error) {
      console.error("로그인 실패", error);
      throw error;
    }
  },
};
