"use client";
import React, { useEffect } from "react";
import Currency from "./Currency";
import Button from "./Button";
import { useSearchParams } from "next/navigation";
import useCart from "@/hooks/use-cart";
import { toast } from "react-toastify";
import axios from "axios";

const Summary = () => {
  const searchParams = useSearchParams();
  const cart = useCart();
  const removeAll = cart.removeAll;
  const totalPrice = cart.items.reduce((acc, current) => {
    return (acc += Number(current.price));
  }, 0);

  const onCheckout = async () => {
    try {
      await axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
          productIds: cart.items.map((i) => i.id),
        })
        .then((res) => {
          window.location = res.data.url;
        });
    } catch (error) {
      console.log(error);
      toast.error("something went wrong!");
    }
  };

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed!");
      removeAll();
    }
    if (searchParams.get("canceled")) {
      toast.success("something went wrong!");
    }
  }, [removeAll, searchParams]);

  return (
    <section className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:m-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button onClick={onCheckout} className="w-full mt-6">
        Checkout
      </Button>
    </section>
  );
};

export default Summary;
