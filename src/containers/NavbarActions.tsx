"use client";
import Button from "@/components/ui/Button";
import { ModeToggle } from "@/components/ui/Toggle-Theme";
import useCart from "@/hooks/use-cart";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const NavbarActions = () => {
  const [isMount, setMount] = useState(false);

  const cart = useCart();
  const router = useRouter();

  useEffect(() => {
    setMount(true);
  }, []);
  if (!isMount) {
    return null;
  }

  return (
    <section className="ml-auto flex  items-center gap-x-4 relative z-20">
      <ModeToggle />
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-opacity-100 dark:bg-opacity-90 bg-[#121212] text-white dark:bg-white dark:text-black px-4 py-2 "
      >
        <ShoppingBag size={20} />
        <span className="text-sm font-medium ml-2">{cart.items.length}</span>
      </Button>
    </section>
  );
};

export default NavbarActions;
