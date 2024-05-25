"use server";
import { Category } from "@/types/Types";

export async function getCategories({ storeId }: { storeId: string }) {
  const categoriesURL = `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/categories`;
  const res = await fetch(categoriesURL, { cache: "no-cache" });

  if (!res.ok) {
    return [];
  }

  return res.json() as Promise<Category[]>;
}
