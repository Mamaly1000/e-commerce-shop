"use client";
import { Billboard as BillboardType } from "@/types/Types";
import { motion } from "framer-motion";
import React, { FC, useEffect, useState } from "react";

interface props {
  billboards?: BillboardType[];
}

const Billboard: FC<props> = ({ billboards = [] }) => {
  const [currentBillboard, setBillboard] = useState(billboards[0]);

  if (billboards.length > 1) {
    setInterval(() => {
      const currentIndex = billboards.findIndex(
        (b) => b.id === currentBillboard.id
      );
      const nextIndex =
        currentIndex === billboards.length - 1 ? 0 : currentIndex + 1;
      setBillboard(billboards.at(nextIndex)!);
    }, 5000);
  }
  return (
    <motion.div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden  ">
      <motion.div
        key={currentBillboard.id}
        initial={{ opacity: 0, translateX: 100 }}
        animate={{ opacity: 1, translateX: 0 }}
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover "
        style={{ backgroundImage: `url(${currentBillboard?.poster})` }}
      >
        <div className="h-full w-full flex flex-col items-center justify-center  text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl bg-white/20 dark:bg-black/50 min-w-full max-w-full px-5 md:px-10 h-full flex items-center justify-center">
            {currentBillboard?.label}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Billboard;
