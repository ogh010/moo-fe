import { create } from "zustand";
import { persist } from "zustand/middleware";

type Test = {
  count: number;
  increase: () => void;
};

export const useStore = create<Test>()(
  persist(
    (set) => ({
      count: 1,
      increase: () => set((state) => ({ count: state.count + 1 })),
    }),
    {
      name: "test", // 로컬스토리지 key
    }
  )
);
