"use server";
import { Size } from "@/types/Types";

const sizesUrl = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

export async function getSizes(): Promise<Size[]> {
  const headers = new Headers();
  headers.append("Cache-Control", "no-store");

  const res = await fetch(sizesUrl, { headers });

  return res.json();
}
