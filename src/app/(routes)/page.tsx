import getStores from "@/actions/get-stores-server";
import MarketList from "@/components/lists/MarketList";
import HeroSection from "@/components/ui/HeroSection";
import Container from "@/containers/Container";
import React from "react";

export const revalidate = 0;
const HomePage = async ({}: {
  searchParams: {
    colorId?: string;
    sizeId?: string;
  };
}) => {
  const stores = await getStores();

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <HeroSection stores={stores} />
        <hr className="w-full border-gray-700 border-[1px]" />
        <MarketList
          className="bg-inherit relative z-10 p-2 md:p-0"
          title="featured markets"
          markets={stores}
        />
      </div>
    </Container>
  );
};

export default HomePage;
