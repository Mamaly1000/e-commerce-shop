"use client";
import { store_with_analytic } from "@/types/Types";
import { Box, DollarSignIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useParams, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import CountUp from "react-countup";
import placeholder from "../../../public/images/placeholder-removebg-preview.png";
import { cn } from "@/libs/utils";

const HeroSection = ({ stores = [] }: { stores?: store_with_analytic[] }) => {
  const router = useRouter();
  const params = useParams();

  const [currentStore, setCurrentStore] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStore((prev) => (prev === stores.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={cn(`
       min-w-full max-w-full 
         min-h-[400px] lg:min-h-[600px]
       py-10 relative mb-10 lg:mb-0 z-0
      flex flex-col lg:flex-row items-center justify-between gap-10  
      `)}
    >
      <div className="min-w-[90%] max-w-[90%] md:min-w-[60%] md:max-w-[60%] lg:min-w-[40%] lg:max-w-[40%] min-h-[150px] flex flex-col items-center justify-center pt-10  lg:justify-start gap-5 relative z-20   ps-0 md:ps-10 2xl:ps-0 ">
        <div className="flex items-center justify-start gap-3 w-full relative">
          <div className="relative text-nowrap whitespace-nowrap flex items-center justify-start w-[60px] h-[60px]">
            {stores.map((s, i) => (
              <AnimatePresence key={s.id}>
                {currentStore == i && (
                  <motion.div
                    initial={{ opacity: i === currentStore ? 1 : 0 }}
                    exit={{ opacity: 0 }}
                    animate={{ opacity: i === currentStore ? 1 : 0 }}
                    key={s.id}
                    className="aspect-video rounded-full drop-shadow-2xl w-[60px] h-[60px] dark:bg-gray-800 bg-gray-100 overflow-hidden flex items-center justify-center p-2 absolute"
                  >
                    <Image
                      alt={s?.name}
                      src={!!s?.logo ? s.logo : placeholder.src}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            ))}
          </div>
          <div className="relative w-fit text-nowrap whitespace-nowrap flex items-center justify-start">
            {stores.map((s, i) => (
              <AnimatePresence initial key={s.id} mode="wait">
                {currentStore === i && (
                  <motion.h1
                    key={s.id}
                    initial={{ opacity: 0, translateY: -100 }}
                    exit={{ opacity: 0, translateY: -100 }}
                    animate={{
                      opacity: i === currentStore ? 1 : 0,
                      translateY: i === currentStore ? 0 : -100,
                    }}
                    className="text-6xl capitalize text-black dark:text-white font-bold whitespace-nowrap absolute"
                  >
                    {s?.name}
                  </motion.h1>
                )}
              </AnimatePresence>
            ))}
          </div>
        </div>
        <div className="w-full relative flex items-start justify-start min-h-[100px] overflow-hidden">
          {stores.map((s, i) => (
            <AnimatePresence key={s.id} mode="wait" initial>
              {currentStore === i && (
                <motion.p
                  key={s.id}
                  initial={{ opacity: 0, translateX: 100 }}
                  animate={{
                    opacity: i === currentStore ? 1 : 0,
                    translateX: i === currentStore ? 0 : 100,
                  }}
                  className="text-[18px] capitalize w-full max-w-full line-clamp-4  text-gray-800 dark:text-gray-300 text-left absolute"
                >
                  {s?.description}
                </motion.p>
              )}
            </AnimatePresence>
          ))}
        </div>
        <div className="flex items-center w-full justify-start gap-5 text-sm">
          <div className="flex items-center justify-center gap-1 text-gray-600 dark:text-gray-300 capitalize">
            revenue:
            <div className=" flex items-center justify-start gap-1 font-semibold text-black dark:text-white">
              <DollarSignIcon className="w-4 h-4" />
              {stores.map(
                (s, i) =>
                  currentStore === i && (
                    <CountUp
                      key={s.id}
                      decimals={0}
                      decimal=","
                      useEasing
                      end={s?.total_revenue}
                    />
                  )
              )}
            </div>
          </div>
          <div className="flex items-center justify-center gap-1 text-gray-600 dark:text-gray-300 capitalize">
            products sells:
            <div className=" flex items-center justify-start gap-1 font-semibold text-black dark:text-white">
              <Box className="w-4 h-4" />
              {stores.map(
                (s, i) =>
                  currentStore === i && (
                    <CountUp
                      key={s.id}
                      decimal=","
                      useEasing
                      end={s?.total_sell_products}
                    />
                  )
              )}
            </div>
          </div>
        </div>
        {!params?.storeId && (
          <div className="flex items-center justify-start gap-5 w-full">
            <Button
              onClick={() =>
                router.push(
                  `/store/${stores.find((_s, i) => i === currentStore)?.id}`
                )
              }
              className="bg-black dark:bg-white text-white dark:text-black capitalize"
            >
              explore market
            </Button>
          </div>
        )}
      </div>
      <div
        className={cn(
          `min-w-full lg:min-w-[55%] lg:max-w-[55%] 
          min-h-[100px] md:min-h-[200px] 
          z-10 opacity-30 lg:opacity-100 
          flex items-center justify-center absolute lg:relative`
        )}
      >
        {stores.map((s, i) => (
          <AnimatePresence key={s.id} mode="wait" initial>
            {currentStore === i && (
              <motion.div
                initial={{ opacity: 0, translateX: 100 }}
                exit={{ opacity: 0, translateX: 100 }}
                animate={{
                  opacity: i === currentStore ? 1 : 0,
                  translateX: i === currentStore ? 0 : 100,
                }}
                className={cn(
                  `aspect-video 
                  bg-gray-100 dark:bg-gray-800 
                  rounded-lg drop-shadow-2xl 
                  w-[90%] h-[300px]

                  overflow-hidden absolute`
                )}
              >
                <Image
                  fill
                  src={
                    !!s?.background_Image ? s.background_Image : placeholder.src
                  }
                  alt={s?.name}
                />
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
