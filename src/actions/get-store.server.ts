"use server";

import { Store } from "@/types/Types";

export const getStoreById = async (): Promise<Store | null> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    return null;
  }
  return res.json();
};
