"use server";

import { Category } from "@/types/Types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

async function getCategories(): Promise<Category[]> {
  const res = await fetch(url);
  return res.json() || [];
}
export default getCategories;
