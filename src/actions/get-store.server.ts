"use server";

import { Store, store_with_analytic } from "@/types/Types";

export const getStoreById = async (
  id?: string
): Promise<store_with_analytic | null> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL + `/${id}`}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    return null;
  }
  return res.json();
};
