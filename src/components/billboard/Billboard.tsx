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
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${billboard?.poster})` }}
      >
        <div className="h-full w-full flex flex-col items-center justify-center  text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {billboard?.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
