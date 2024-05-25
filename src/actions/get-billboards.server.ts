"use server";

import { Billboard } from "@/types/Types";

export default async function getBillboards({
  storeId,
}: {
  storeId: string;
}): Promise<Billboard[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/billboards`,
    { cache: "no-cache" }
  );
  if (!response.ok) {
    return [];
  }
  return response.json();
}
