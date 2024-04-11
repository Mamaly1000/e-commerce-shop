"use client";
import { cn } from "@/libs/utils";
import { Product } from "@/types/Types";
import React, { FC } from "react";
import NoResults from "@/components/ui/NoResults";
import ProductCard from "../cards/ProductCard";

interface props {
  title?: string;
  className?: string;
  products?: Product[];
  containerClassName?: string;
}

const ProductsList: FC<props> = ({
  className,
  products = [],
  title,
  containerClassName,
}) => {
  return (
    <section className={cn(`space-y-4`, className)}>
      <h3 className="font-bold text-3xl">{title}</h3>
      <NoResults
        show={!products.length && !!title}
        title="no results"
        description="looks like there is no products here."
      />
      {products.length > 0 && (
        <section
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
            containerClassName
          )}
        >
          {products.map((p, i) => (
            <ProductCard key={p.id} data={p} index={i} />
          ))}
        </section>
      )}
    </section>
  );
};

export default ProductsList;
