"use client";
import { store_with_analytic } from "@/types/Types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import placeholder from "../../../public/images/placeholder-removebg-preview.png";
import CountUp from "react-countup";
import { Box, DollarSignIcon } from "lucide-react";
import { cn } from "@/libs/utils";

const MarketCard = ({
  market,
  index,
}: {
  index: number;
  market: store_with_analytic;
}) => {
  return (
    <Link
      href={`/store/${market.id}`}
      className={cn(`min-h-[350px] max-h-[350px]
       bg-white dark:bg-black
        hover:bg-gray-100/70 dark:hover:bg-gray-700/10
         flex relative flex-col items-start justify-between p-0
          rounded-lg drop-shadow-2xl transition-all `)}
    >
      <div className="w-full min-h-[50%] max-h-[50%] relative aspect-video overflow-hidden drop-shadow-2xl rounded-t-lg">
        <Image
          src={
            !!market.background_Image
              ? market.background_Image
              : placeholder.src
          }
          alt={market.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex items-start justify-between min-h-[50%] max-h-[50%] flex-col gap-2 p-5">
        <div className="flex items-start justify-start gap-3 flex-col w-full">
          <div className="flex items-center justify-start gap-3 w-full">
            <Image
              src={!!market.logo ? market.logo : placeholder.src}
              alt={market.name}
              width={30}
              height={30}
              className="object-contain"
            />
            <h2 className="text-lg capitalize font-bold text-black dark:text-white">
              {market.name}
            </h2>
          </div>
          <p className="text-sm line-clamp-3 w-full text-left capitalize text-gray-400 dark:text-gray-300">
            {market.description}
          </p>
        </div>
        <div className="flex items-center w-full justify-start gap-5 text-[13px]">
          <div className="flex items-center justify-center gap-1 text-gray-600 dark:text-gray-300 capitalize">
            revenue:
            <div className=" flex items-center justify-start gap-1 font-semibold text-black dark:text-white">
              <DollarSignIcon className="w-3 h-3" />
              {market && (
                <CountUp
                  decimals={0}
                  decimal=","
                  useEasing
                  end={market.total_revenue}
                />
              )}
            </div>
          </div>
          <div className="flex items-center justify-center gap-1 text-gray-600 dark:text-gray-300 capitalize">
            products sales:
            <div className=" flex items-center justify-start gap-1 font-semibold text-black dark:text-white">
              <Box className="w-3 h-3" />
              {market && (
                <CountUp
                  decimal=","
                  useEasing
                  end={market.total_sell_products}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MarketCard;
