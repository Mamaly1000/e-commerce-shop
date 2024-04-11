"use client";
import CartItem from "@/components/cards/CartItem";
import NoResults from "@/components/ui/NoResults";
import Summary from "@/components/ui/Summary";
import Container from "@/containers/Container";
import useCart from "@/hooks/use-cart";
import React, { useEffect, useState } from "react";

const CartPage = () => {
  const cart = useCart();
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black capitalize">
            shopping cart
          </h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && (
                <NoResults
                  title="cart is empty"
                  description="no ites added to cart."
                />
              )}
              <ul>
                {cart.items.map((item) => (
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

export default CartPage;
