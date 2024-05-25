"use client";
import { useStore } from "@/hooks/use-store";
import React from "react";

const Footer = () => {
  const { store } = useStore();
  const date = new Date();
  return (
    store && (
      <footer className="bg-white dark:bg-[#121212] border-t border-gray-500 dark:border-gray-700">
        <div className="mx-auto py-10">
          <p className="text-center text-black dark:text-white text-xs">
            &copy; {date.getFullYear()} Prisma {store?.name},Inc. All rights
            reserved.
          </p>
        </div>
      </footer>
    )
  );
};

export default Footer;
