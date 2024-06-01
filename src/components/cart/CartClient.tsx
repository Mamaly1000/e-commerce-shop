"use client";
import Container from "@/containers/Container";
import useCart from "@/hooks/use-cart";
import React, { useEffect, useState } from "react";
import NoResults from "../ui/NoResults";
import CartItem from "../cards/CartItem";
import Summary from "../ui/Summary";
import { useParams } from "next/navigation";

const CartClient = () => {
  const [mounted, setMounted] = useState(false);
  const cart = useCart();
  const params = useParams();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-[#121212]">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black capitalize dark:text-white">
            shopping cart
          </h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.filter((item) => item.storeId === params?.storeId)
                .length === 0 && (
                <NoResults
                  title="cart is empty"
                  description="no ites added to cart."
                />
              )}
              <ul>
                {cart.items
                  .filter((item) => item.storeId === params?.storeId)
                  .map((item) => (
                    <CartItem
                      onRemove={(id) => cart.removeItem(id)}
                      key={item.id}
                      data={item}
                    />
                  ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartClient;
