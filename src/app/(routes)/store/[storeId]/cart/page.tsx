import { getCategories } from "@/actions/get-categories.server";
import { getStoreById } from "@/actions/get-store.server";
import CartClient from "@/components/cart/CartClient";
import React from "react";

const CartPage = async ({ params }: { params: { storeId?: string } }) => {
  const store = await getStoreById(params.storeId);
  const categories = await getCategories({
    storeId: params.storeId,
  });
  return <CartClient categories={categories} store={store} />;
};

export default CartPage;
