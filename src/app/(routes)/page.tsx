import { getBillboard } from "@/actions/get-billboard.server";
import { getColors } from "@/actions/get-colors.server";
import { getProducts } from "@/actions/get-products.server";
import { getSizes } from "@/actions/get-sizes.server";
import Billboard from "@/components/billboard/Billboard";
import ProductsList from "@/components/lists/ProductsList";
import Filter from "@/components/ui/Filter";
import MobileFilters from "@/components/ui/MobileFilters";
import Container from "@/containers/Container";
import { Product } from "@/types/Types";
import React from "react";

export const revalidate = 0;
const HomePage = async ({
  searchParams,
}: {
  searchParams: {
    colorId?: string;
    sizeId?: string;
  };
}) => {
  const products = (await getProducts({
    ...searchParams,
    isFeatured: true,
  })) as Product[];
  const billboard = await getBillboard("34fa7482-0fa6-47c8-af6e-5d0a0ad1f032");
  const sizes = await getSizes();
  const colors = await getColors();
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard billboard={billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24 ">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors} />
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
            <div className="lg:col-span-4 mt-6 lg:mt-0">
              <ProductsList
                containerClassName="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
                products={products}
                title="related items"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
