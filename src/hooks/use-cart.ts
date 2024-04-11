import { Product } from "@/types/Types";
import { toast } from "react-toastify";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
interface CartStore {
  items: Product[];
  addItem: (item: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}
const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((i) => i.id === data.id);
        if (existingItem) {
          return toast.warning("Item already in cart.");
        }
        set({ items: [...get().items, data] });
        toast.success("Item added to cart.");
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((i) => i.id !== id)] });
        toast.success("Item removed from cart.");
      },
      removeAll: () => {
        set({ items: [] });
        toast.success("cart cleared");
      },
    }),
    {
      name: "prisma-store-cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
export default useCart;
