import { getBillboard } from "@/actions/get-billboard.server";
import { getProducts } from "@/actions/get-products.server";
import Billboard from "@/components/billboard/Billboard";
import ProductsList from "@/components/lists/ProductsList";
import Container from "@/containers/Container";
import { Product } from "@/types/Types";
import React from "react";

export const revalidate = 0;
const HomePage = async ({ params }: { params: { searchparams: any } }) => {
  const products = (await getProducts({
    ...params.searchparams,
    isFeatured: true,
  })) as Product[];
  const billboard = await getBillboard("34fa7482-0fa6-47c8-af6e-5d0a0ad1f032");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard billboard={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductsList title="Featured products" products={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
