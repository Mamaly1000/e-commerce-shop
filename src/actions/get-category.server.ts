"use server";
import { Category } from "@/types/Types";

export async function getCategory({
  id,
  storeId,
}: {
  id: string;
  storeId: string;
}): Promise<Category> {
  const categoriesURL = `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/categories`;
  const headers = new Headers();
  headers.append("Cache-Control", "no-store");

  const res = await fetch(`${categoriesURL}/${id}`, { headers });

  return res.json() as Promise<Category>;
}
