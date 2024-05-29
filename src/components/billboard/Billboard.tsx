"use client";
import { Billboard as BillboardType } from "@/types/Types";
import { AnimatePresence, motion } from "framer-motion";
import React, { FC, useEffect, useState } from "react";

interface props {
  billboards?: BillboardType[];
}

const Billboard: FC<props> = ({ billboards = [] }) => {
  const [currentBillboard, setCurrentBillboard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBillboard((prev) =>
        prev === billboards.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <motion.div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden  relative flex items-center justify-center min-w-[90%] max-w-[90%] mx-auto min-h-[300px] md:min-h-[400px]">
      {billboards.map((b, i) => (
        <AnimatePresence key={b.id} initial mode="wait">
          {currentBillboard === i && (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, translateX: 100, scale: 0.9 }}
              exit={{ opacity: 0, translateX: -100, scale: 0.9 }}
              animate={{ opacity: 1, translateX: 0, scale: 1 }}
              className="rounded-xl min-w-full aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover absolute"
              style={{ backgroundImage: `url(${b?.poster})` }}
            >
              <div className="h-full w-full flex flex-col items-center justify-center  text-center gap-y-8">
                <div className="font-bold text-3xl sm:text-5xl lg:text-6xl bg-white/20 dark:bg-black/50 min-w-full max-w-full px-5 md:px-10 h-full flex items-center justify-center">
                  {b?.label}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      ))}
    </motion.div>
  );
};

export default Billboard;
