"use client";
import React, { useEffect, useState } from "react";
import Currency from "./Currency";
import Button from "./Button";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import useCart from "@/hooks/use-cart";
import { toast } from "react-toastify";
import axios from "axios";
import { useCheckout } from "@/hooks/use-checkout";

const Summary = () => {
  const searchParams = useSearchParams();
  const [isLoading, setLoading] = useState(false);
  const cart = useCart();
  const router = useRouter();
  const params = useParams();
  const removeAll = cart.removeAll;
  const totalPrice = cart.items
    .filter((item) => item.storeId === params?.storeId)
    .reduce((acc, current) => {
      return (acc += Number(current.price));
    }, 0);
  const { onOpen } = useCheckout();
  const onCheckout = async () => {
    try {
      if (!params?.storeId) {
        throw new Error("store id is not valid");
      }
      setLoading(true);
      await axios
        .post(
          `${process.env.NEXT_PUBLIC_API_URL}/${params?.storeId}/checkout`,
          {
            productIds: cart.items
              .filter((i) => i.storeId === params?.storeId)
              .map((i) => i.id),
            status: "PENDING",
          }
        )
        .then((res) => {
          toast.info(res.data.message);
          router.push(res.data.url);
          onOpen(res.data.orderId);
        });
    } catch (error) {
      console.log(error);
      toast.error("something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchParams.get("COMPLETED")) {
      router.push(`/store/${params?.storeId}/cart`);
      removeAll();
    }
    if (searchParams.get("CANCELED")) {
      router.push(`/store/${params?.storeId}/cart`);
    }
  }, [removeAll, searchParams]);

  return (
    <section className="mt-16 rounded-lg bg-gray-50 dark:bg-black px-4 py-6 sm:p-6 lg:col-span-5 lg:m-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900 dark:text-white">
        Order Summary
      </h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-500 dark:border-gray-700200 pt-4">
          <div className="text-base font-medium text-gray-900 dark:text-white">
            Order total
          </div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        disabled={
          isLoading ||
          cart.items.filter((item) => item.storeId === params?.storeId)
            .length === 0
        }
        onClick={onCheckout}
        className="w-full mt-6 bg-black dark:bg-white text-white dark:text-black"
      >
        Checkout
      </Button>
    </section>
  );
};

export default Summary;
