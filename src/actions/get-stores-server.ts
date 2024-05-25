"use server";

import { store_with_analytic } from "@/types/Types";

const stores_url = process.env.NEXT_PUBLIC_API_URL! + "/stores";

export default async function getStores(): Promise<store_with_analytic[]> {
  const response = await fetch(stores_url, {
    method: "GET",
    cache: "no-cache",
  });
  if (!response.ok) {
    return [];
  }
  return response.json();
}
