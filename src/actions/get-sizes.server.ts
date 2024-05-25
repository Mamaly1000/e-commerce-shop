"use server";
import { Size } from "@/types/Types";

export async function getSizes({
  storeId,
}: {
  storeId: String;
}): Promise<Size[]> {
  const sizesUrl = `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/sizes`;
  const headers = new Headers();
  headers.append("Cache-Control", "no-store");

  const res = await fetch(sizesUrl, { headers });

  return res.json();
}
