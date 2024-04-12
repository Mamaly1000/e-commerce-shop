import { create } from "zustand";

interface useCheckoutStore {
  isOpen: boolean;
  onOpen: (orderId: string) => void;
  onClose: () => void;
  orderId?: string;
}
export const useCheckout = create<useCheckoutStore>((set) => ({
  isOpen: false,
  orderId: undefined,
  onClose: () => set({ isOpen: false, orderId: undefined }),
  onOpen: (orderId) => set({ orderId, isOpen: true }),
}));
