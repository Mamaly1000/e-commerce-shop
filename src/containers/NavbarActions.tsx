"use client";
import Button from "@/components/ui/Button";
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
    <section className="ml-auto flex  items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag size={20} color={"white"} />
        <span className="text-sm font-medium text-white ml-2">
          {cart.items.length}
        </span>
      </Button>
    </section>
  );
};

export default NavbarActions;
