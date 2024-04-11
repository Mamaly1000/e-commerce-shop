"use server";
import { Category } from "@/types/Types";

const categoriesURL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export async function getCategory(id: string): Promise<Category> {
  const headers = new Headers();
  headers.append("Cache-Control", "no-store");

  const res = await fetch(`${categoriesURL}/${id}`, { headers });

  return res.json() as Promise<Category>;
}
