"use client";

import { ShoppingCart } from "lucide-react";

import Currency from "@/components/ui/Currency";
import Button from "@/components/ui/Button";
import { Product } from "@/types/Types";
import useCart from "@/hooks/use-cart";

interface InfoProps {
  data: Product;
}

const ProductInfo: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();

  const onAddToCart = () => {
    cart.addItem(data);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white capitalize">
        {data.name}
      </h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900 dark:text-white">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black dark:text-white">Size:</h3>
          <div>{data?.size?.value}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black dark:text-white">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-500 dark:border-gray-700 "
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button
          onClick={onAddToCart}
          className="flex items-center gap-x-2 bg-black dark:bg-white text-white dark:text-black"
        >
          Add To Cart
          <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
