"use client";
import { Billboard as BillboardType } from "@/types/Types";
import React, { FC } from "react";

interface props {
  billboard?: BillboardType;
}

const Billboard: FC<props> = ({ billboard }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover "
        style={{ backgroundImage: `url(${billboard?.poster})` }}
      >
        <div className="h-full w-full flex flex-col items-center justify-center  text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl bg-white/20 dark:bg-black/50 min-w-full max-w-full px-5 md:px-10 h-full flex items-center justify-center">
            {billboard?.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
