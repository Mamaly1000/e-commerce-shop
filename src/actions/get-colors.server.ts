"use server";
import { Color } from "@/types/Types";

const colorsUrl = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

export async function getColors(): Promise<Color[]> {
  const headers = new Headers();
  headers.append("Cache-Control", "no-store");

  const res = await fetch(colorsUrl, { headers });

  return res.json();
}
