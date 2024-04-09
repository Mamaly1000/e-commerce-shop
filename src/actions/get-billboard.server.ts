"use server";

import { Billboard } from "@/types/Types";

const billboardUrl = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;
export async function getBillboard(id: string): Promise<Billboard> {
  const res = await fetch(`${billboardUrl}/${id}`);
  return res.json();
}
