import { userApi } from "@/entities/user/api/userApi";
import { UserLoginRequest, UserLoginResponse } from "@/entities/user/types";
import { useLoadingStore } from "@/shared/model/loadingStore";

// 로그인 커스텀 훅
export const useUserLogin = () => {
  const { setLoading } = useLoadingStore();
  const loginUser = async (
    req: UserLoginRequest
  ): Promise<UserLoginResponse> => {
    // 로딩바 호출
    setLoading(true);
    try {
      const response = await userApi.login(req);

      return response;
    } catch (error: any) {
      return error;
    } finally {
      setLoading(false);
    }
  };

  return {
    loginUser,
  };
};
