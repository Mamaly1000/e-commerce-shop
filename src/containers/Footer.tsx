"use client";
import { useStore } from "@/hooks/use-store";
import React from "react";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { cn } from "@/libs/utils";

const Footer = () => {
  const { store } = useStore();
  const date = new Date();
  const router = useRouter();
  const params = useParams();
  return (
    <footer className="bg-white dark:bg-[#121212] border-t border-gray-500 dark:border-gray-700">
      <div className="mx-auto py-10">
        <p className={cn("text-center  text-black dark:text-white")}>
          &copy; {date.getFullYear()}
          <span
            className={cn(
              "mx-1 font-bold",
              params?.storeId ? "text-black dark:text-white" : "text-green-500"
            )}
          >
            {params?.storeId ? store?.name || "ShopSpot" : "ShopSpot"}
          </span>
          ,Inc. All rights reserved.
        </p>
      </div>
      {params?.storeId && (
        <motion.button
          onClick={() => router.push("/")}
          className="fixed bottom-[83%] z-10 left-[93%] lg:bottom-5 lg:left-5 rounded-full w-[40px] h-[40px] bg-black text-white dark:bg-white hover:scale-110 hover:bg-green-500 dark:hover:bg-green-500 dark:hover:text-white transition-all duration-300 dark:text-black drop-shadow-2xl flex items-center justify-center gap-1"
        >
          <Home className="w-4 h-4" />
        </motion.button>
      )}
    </footer>
  );
};

export default Footer;
