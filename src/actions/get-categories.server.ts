"use server";
import { Category } from "@/types/Types";

const categoriesURL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export async function getCategories() {
  const res = await fetch(categoriesURL, { cache: "no-cache" });

  if (!res.ok) {
    return [];
  }

  return res.json() as Promise<Category[]>;
}
