import { Product } from "@/types/Types";
import { create } from "zustand";

interface PreviewModalStore {
  isOpen: boolean;
  data?: Product;
  onOpen: (data: Product) => void;
  onClose: () => void;
}
export const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onClose: () => set({ isOpen: false, data: undefined }),
  onOpen: (data) => set({ isOpen: true, data }),
}));
