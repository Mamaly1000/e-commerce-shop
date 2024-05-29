import { cn } from "@/libs/utils";
import { store_with_analytic } from "@/types/Types";
import React from "react";
import MarketCard from "../cards/MarketCard";

const MarketList = ({
  markets,
  className,
  title,
}: {
  title?: string;
  className?: string;
  markets: store_with_analytic[];
}) => {
  return (
    <section
      className={cn(
        "min-w-full max-w-full flex items-start justify-start gap-5 py-10 px-5 flex-col",
        className
      )}
    >
      {title && <h3 className="text-xl capitalize font-bold ">{title}</h3>}
      <div className="min-w-full max-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pb-10">
        {markets.map((market, i) => {
          return <MarketCard key={market.id} market={market} index={i} />;
        })}
      </div>
    </section>
  );
};

export default MarketList;
