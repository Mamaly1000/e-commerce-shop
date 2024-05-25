import getBillboards from "@/actions/get-billboards.server";
import { getCategories } from "@/actions/get-categories.server";
import { getColors } from "@/actions/get-colors.server";
import { getProducts } from "@/actions/get-products.server";
import { getSizes } from "@/actions/get-sizes.server";
import { getStoreById } from "@/actions/get-store.server";
import Billboard from "@/components/billboard/Billboard";
import ProductsList from "@/components/lists/ProductsList";
import Filter from "@/components/ui/Filter";
import HeroSection from "@/components/ui/HeroSection";
import MobileFilters from "@/components/ui/MobileFilters";
import Container from "@/containers/Container";
import { Product } from "@/types/Types";

const StorePage = async ({
  searchParams,
  params,
}: {
  params: { storeId: string };
  searchParams: {
    colorId?: string;
    sizeId?: string;
  };
}) => {
  const store = await getStoreById(params.storeId);
  const products = (await getProducts({
    ...searchParams,
    isFeatured: true,
    storeId: params.storeId,
  })) as Product[];
  const billboards = await getBillboards({
    storeId: params.storeId,
  });
  const categories = await getCategories({ storeId: params.storeId });
  const sizes = await getSizes({ storeId: params.storeId });
  const colors = await getColors({ storeId: params.storeId });
  return (
    <Container categories={categories} store={store as any}>
      <div className="space-y-10 pb-10">
        <HeroSection stores={store ? [store] : []} />
        <Billboard billboards={billboards} />
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
export default StorePage;
