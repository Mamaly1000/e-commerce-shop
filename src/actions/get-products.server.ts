"use server";
import qs from "query-string";
import { Product } from "@/types/Types";
const productsUrl = `${process.env.NEXT_PUBLIC_API_URL}/products`;
export async function getProducts({
  id,
  categoryId,
  colorId,
  sizeId,
  isFeatured,
}: {
  id?: string;
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}): Promise<Product[] | Product> {
  const url = id
    ? `${productsUrl}/${id}`
    : qs.stringifyUrl({
        url: productsUrl,
        query: {
          categoryId,
          colorId,
          sizeId,
          isFeatured,
        },
      });

  const res = await fetch(url, { cache: "no-cache" });
  return id
    ? (res.json() as Promise<Product>)
    : (res.json() as Promise<Product[]>);
}
