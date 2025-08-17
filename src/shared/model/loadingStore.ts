import { create } from "zustand";

type LoadingState = {
  loading: boolean;
  setLoading: (value: boolean) => void;
};

/**
 * 전역 로딩 상태 관리
 */
export const useLoadingStore = create<LoadingState>((set) => ({
  loading: false,
  setLoading: (value: boolean) => {
    set({ loading: value });
  },
}));
