import { create } from "zustand";

type Test = {
  count: number;
  increase: () => void;
};

export const useStore = create<Test>()((set) => ({
  count: 1,
  increase: () => set((state) => ({ count: state.count + 1 })),
}));
