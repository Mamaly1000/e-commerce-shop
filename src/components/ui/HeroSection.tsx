"use client";
import { store_with_analytic } from "@/types/Types";
import { Box, DollarSignIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import placeholder from "../../../public/images/placeholder-removebg-preview.png";
import { cn } from "@/libs/utils";

const HeroSection = ({ stores }: { stores?: store_with_analytic[] }) => {
  const [store, setStore] = useState<store_with_analytic>(stores![0]);
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    if (!!!store.logo || store.logo === "") {
      setStore({ ...store, logo: placeholder.src });
    }
    if (!!!store.background_Image || store.background_Image === "") {
      setStore({ ...store, background_Image: placeholder.src });
    }
  }, [store.logo, store.background_Image]);

  if (stores && store && stores.length > 0) {
    setInterval(() => {
      const index = stores?.findIndex((s) => s.id == store.id);
      const nextIndex = index === stores?.length - 1 ? 0 : index + 1;
      setStore(stores[nextIndex]);
    }, 10000);
  }

  return (
    <section
      className={cn(`
       min-w-full max-w-full 
         min-h-[400px] lg:min-h-[600px]
       py-10 relative mb-10 lg:mb-0 z-0
      flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden
      `)}
    >
      <div className="min-w-[90%] max-w-[90%] md:min-w-[60%] md:max-w-[60%] lg:min-w-[40%] lg:max-w-[40%] min-h-[200px] flex flex-col items-center justify-center pt-10  lg:justify-start gap-5 relative z-20   ps-0 md:ps-10 2xl:ps-0 ">
        <div className="flex items-center justify-start gap-3 w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={store.id}
            className="aspect-video rounded-full drop-shadow-2xl w-[60px] h-[60px] dark:bg-gray-800 bg-gray-100 overflow-hidden flex items-center justify-center p-2 relative"
          >
            {store && (
              <Image
                onError={() => {
                  setStore({ ...store, logo: placeholder.src });
                }}
                alt={store?.name}
                src={store?.logo}
                width={40}
                height={40}
                className="object-cover"
              />
            )}
          </motion.div>
          <motion.h1
            key={store.name}
            initial={{ opacity: 0, translateY: -100 }}
            animate={{ opacity: 1, translateY: 0 }}
            className="text-6xl capitalize text-black dark:text-white font-bold"
          >
            {store?.name}
          </motion.h1>
        </div>
        <motion.p
          key={store.description}
          initial={{ opacity: 0, translateX: 100 }}
          animate={{ opacity: 1, translateX: 0 }}
          className="text-[18px] capitalize w-full max-w-full line-clamp-4  text-gray-800 dark:text-gray-300 text-left"
        >
          {store?.description}
        </motion.p>
        <div className="flex items-center w-full justify-start gap-5 text-sm">
          <div className="flex items-center justify-center gap-1 text-gray-600 dark:text-gray-300 capitalize">
            revenue:
            <div className=" flex items-center justify-start gap-1 font-semibold text-black dark:text-white">
              <DollarSignIcon className="w-4 h-4" />
              {store && (
                <CountUp
                  decimals={0}
                  decimal=","
                  useEasing
                  end={store?.total_revenue}
                />
              )}
            </div>
          </div>
          <div className="flex items-center justify-center gap-1 text-gray-600 dark:text-gray-300 capitalize">
            products sells:
            <div className=" flex items-center justify-start gap-1 font-semibold text-black dark:text-white">
              <Box className="w-4 h-4" />
              {store && (
                <CountUp
                  decimal=","
                  useEasing
                  end={store?.total_sell_products}
                />
              )}
            </div>
          </div>
        </div>
        {!params?.storeId && (
          <div className="flex items-center justify-start gap-5 w-full">
            <Button
              onClick={() => router.push(`/store/${store?.id}`)}
              className="bg-black dark:bg-white text-white dark:text-black capitalize"
            >
              explore market
            </Button>
          </div>
        )}
      </div>
      <div className="min-w-full lg:min-w-[55%] min-h-[200px] lg:max-w-[55%] absolute z-10 lg:relative opacity-50 lg:opacity-100">
        <motion.div
          initial={{ opacity: 0, translateX: 100 }}
          animate={{ opacity: 1, translateX: 0 }}
          key={store.id}
          className="relative aspect-video w-full max-w-full bg-gray-100 dark:bg-gray-800 rounded-lg drop-shadow-2xl lg:h-[500px] overflow-hidden"
        >
          {store && (
            <Image
              fill
              onError={() => {
                setStore({ ...store, background_Image: placeholder.src });
              }}
              src={store?.background_Image}
              alt={store?.name}
            />
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
