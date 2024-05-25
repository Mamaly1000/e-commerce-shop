import { Category, store_with_analytic } from "@/types/Types";
import { create } from "zustand";

type storeType = store_with_analytic & { categories: Category[] };

interface UseStoreStore {
  store?: storeType;
  setStore: (store: storeType) => void;
}
export const useStore = create<UseStoreStore>((set) => ({
  setStore: (store) => set({ store }),
  store: undefined,
}));
