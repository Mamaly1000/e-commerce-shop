"use server";
import { Color } from "@/types/Types";

export async function getColors({
  storeId,
}: {
  storeId: String;
}): Promise<Color[]> {
  const headers = new Headers();
  headers.append("Cache-Control", "no-store");
  const colorsUrl = `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/colors`;

  const res = await fetch(colorsUrl, { headers });

  return res.json();
}
