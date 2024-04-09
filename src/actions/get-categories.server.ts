"use server";
import { Category } from "@/types/Types";

const categoriesURL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export async function getCategories() {
  const headers = new Headers();
  headers.append("Cache-Control", "no-store");

  const res = await fetch(categoriesURL, { headers });

  if (!res.ok) {
    return [];
  }

  return res.json() as Promise<Category[]>;
}
