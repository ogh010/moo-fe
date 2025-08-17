import { userApi } from "@/entities/user/api/userApi";
import type {
  UserCreateRequest,
  UserCreateResponse,
} from "@/entities/user/types";
import { useLoadingStore } from "@/shared/model/loadingStore";

export const useUserCreate = () => {
  const { setLoading } = useLoadingStore();
  const createUser = async (
    userData: UserCreateRequest
  ): Promise<UserCreateResponse> => {
    try {
      console.log("createUser 시작 - 로딩 시작");
      setLoading(true);

      const response = await userApi.create(userData);

      return response;
    } catch (err: any) {
      return err;
    } finally {
      console.log("createUser 완료 - 로딩 종료");
      setLoading(false);
    }
  };

  return {
    createUser,
  };
};
