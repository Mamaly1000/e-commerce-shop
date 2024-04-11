"use client";
import { Product } from "@/types/Types";
import Image from "next/image";
import React from "react";
import IconButton from "../ui/icon-button";
import { X } from "lucide-react";
import Currency from "../ui/Currency";

const CartItem = ({
  data,
  onRemove,
}: {
  data: Product;
  onRemove: (id: string) => void;
}) => {
  return (
    <li className="flex py-6 border-b">
      <div className="relative h-16 w-16 rounded-md overflow-hidden drop-shadow-2xl aspect-video">
        <Image
          src={data.images[0].url}
          alt={data.name}
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0 ">
          <IconButton
            icon={<X size={15} />}
            onClick={() => onRemove(data.id)}
          />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{data.name}</p>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data.color.name}</p>
            <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">
              {data.size.name}
            </p>
          </div>
          <Currency value={data.price} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
