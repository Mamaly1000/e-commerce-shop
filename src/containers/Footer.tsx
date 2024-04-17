"use client";
import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="bg-white dark:bg-[#121212] border-t">
      <div className="mx-auto py-10">
        <p className="text-center text-black text-xs">
          &copy; {date.getFullYear()} Prisma Store,Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
