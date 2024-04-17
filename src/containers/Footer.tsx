import { getStoreById } from "@/actions/get-store.server";
import React from "react";

const Footer = async () => {
  const store = await getStoreById();
  const date = new Date();
  return (
    <footer className="bg-white dark:bg-[#121212] border-t border-gray-500 dark:border-gray-700">
      <div className="mx-auto py-10">
        <p className="text-center text-black dark:text-white text-xs">
          &copy; {date.getFullYear()} Prisma {store?.name},Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
