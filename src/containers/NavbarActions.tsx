"use client";
import Button from "@/components/ui/Button";
import { ShoppingBag } from "lucide-react";
import React from "react";

const NavbarActions = () => {
  return (
    <section className="ml-auto flex  items-center gap-x-4">
      <Button className="flex items-center rounded-full bg-black px-4 py-2">
        <ShoppingBag size={20} color={"white"} />
        <span className="text-sm font-medium text-white ml-2">0</span>
      </Button>
    </section>
  );
};

export default NavbarActions;
