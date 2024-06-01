import { getCategories } from "@/actions/get-categories.server";
import { getCategory } from "@/actions/get-category.server";
import { getColors } from "@/actions/get-colors.server";
import { getProducts } from "@/actions/get-products.server";
import { getSizes } from "@/actions/get-sizes.server";
import { getStoreById } from "@/actions/get-store.server";
import Billboard from "@/components/billboard/Billboard";
import ProductsList from "@/components/lists/ProductsList";
import Filter from "@/components/ui/Filter";
import MobileFilters from "@/components/ui/MobileFilters";
import Container from "@/containers/Container";
import { Product } from "@/types/Types";
import React from "react";

export const revalidate = 0;
const CategoryPage = async ({
  params,
  searchParams,
}: {
  searchParams: {
    colorId?: string;
    sizeId?: string;
  };
  params: { categoryId: string; storeId: string };
}) => {
  const products = (await getProducts({
    categoryId: params.categoryId,
    ...searchParams,
    storeId: params.storeId,
  })) as Product[];
  const categories = await getCategories({ storeId: params.storeId });
  const store = await getStoreById(params.storeId);
  const sizes = await getSizes({ storeId: params.storeId });
  const colors = await getColors({ storeId: params.storeId });
  const category = await getCategory({
    storeId: params.storeId,
    id: params.categoryId,
  });
  return (
    <section className="bg-white dark:bg-[#121212] ">
      <Container
        className="flex items-start justify-start gap-10 flex-col mt-10"
        categories={categories}
        store={store as any}
      >
        <Billboard billboards={[category.billboard]} />
        <hr className="max-w-full mx-auto border-gray-700 border-[1px]" />
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
      </Container>
    </section>
  );
};

export default CategoryPage;
