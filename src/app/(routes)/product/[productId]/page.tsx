import { getProducts } from "@/actions/get-products.server";
import ProductsList from "@/components/lists/ProductsList";
import Gallery from "@/components/ui/Gallery";
import ProductInfo from "@/components/ui/ProductInfo";
import Container from "@/containers/Container";
import { Product } from "@/types/Types";
import React from "react";

export const revalidate = 0;
const SingleProductPage = async ({
  params,
}: {
  params: { productId?: string };
}) => {
  const product = (await getProducts({
    id: params.productId,
  })) as Product;
  const suggestedProducts = (await getProducts({
    categoryId: product?.categoryId,
  })) as Product[];

  return (
    <section className="bg-white dark:bg-[#121212]">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product?.images || []} />
            <div className="mt-10 px-4 sm:mt-16 lg:mt-0">
              <ProductInfo data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductsList
            products={suggestedProducts.filter((p) => p.id !== product.id)}
            title="related products"
          />
        </div>
      </Container>
    </section>
  );
};

export default SingleProductPage;
