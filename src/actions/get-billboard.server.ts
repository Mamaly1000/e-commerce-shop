"use server";

import { Billboard } from "@/types/Types";

export async function getBillboard({
  id,
  storeId,
}: {
  id: string;
  storeId: string;
}): Promise<Billboard> {
  const billboardUrl = `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/billboards`;
  const res = await fetch(`${billboardUrl}/${id}`);
  return res.json();
}
