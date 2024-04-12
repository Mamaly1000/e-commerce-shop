"use client";
import useCart from "@/hooks/use-cart";
import { useCheckout } from "@/hooks/use-checkout";
import React, { useState } from "react";
import Modal from "../modal/Modal";
import Input from "../ui/Input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../ui/Button";
import { DollarSignIcon, List } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  phone: z.string().min(11).max(11),
  address_country: z
    .string({ required_error: "this field is required" })
    .min(5),
  address_province: z
    .string({ required_error: "this field is required" })
    .min(5),
  address_city: z.string({ required_error: "this field is required" }).min(5),
  address_postal_code: z.string().min(8).max(8),
  card_number: z.string().min(12).max(12),
});

type formvalue = z.infer<typeof formSchema>;

const CheckoutForm = () => {
  const router = useRouter();

  const [isLoading, setLoading] = useState(false);

  const cart = useCart();
  const totalPrice = cart.items.reduce((acc, current) => {
    return (acc += Number(current.price));
  }, 0);

  const { isOpen, onClose, orderId } = useCheckout();

  const form = useForm<formvalue>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address_city: "",
      address_country: "",
      address_postal_code: "",
      address_province: "",
      card_number: "",
      phone: "",
    },
  });
  const submitPayment = form.handleSubmit(async (vals: formvalue) => {
    const address = [
      vals.address_country,
      vals.address_province,
      vals.address_city,
    ]
      .filter((item) => !!item)
      .join(", ");
    try {
      setLoading(true);
      await axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
          status: "COMPLETED",
          orderId,
          address,
          phone: vals.phone,
        })
        .then((res) => {
          toast.success(res.data.message);
          router.push(res.data.url);
          onClose();
        });
    } catch (error) {
      console.log(error);
      toast.error("something went wrong!");
    } finally {
      setLoading(false);
    }
  });
  const cancelPayment = async () => {
    try {
      setLoading(true);
      await axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
          status: "CANCELED",
          orderId,
        })
        .then((res) => {
          toast.info(res.data.message);
          router.push(res.data.url);
          onClose();
        });
    } catch (error) {
      console.log(error);
      toast.error("something went wrong!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Modal open={isOpen} onClose={() => cancelPayment()}>
      <form
        onSubmit={submitPayment}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 min-w-full items-start place-content-start"
      >
        <div className="col-span-full flex flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-3xl capitalize w-fit flex items-center">
              <DollarSignIcon className="text-green-500" size={30} />
              {totalPrice}
            </h3>{" "}
            total price
          </div>
          <div className="text-[13px] sm:text-sm font-bold capitalize min-w-full max-w-full text-left leading-normal flex items-center justify-start gap-2 line-clamp-2 whitespace-nowrap overflow-hidden">
            <span className="font-semibold flex items-center gap-1 whitespace-nowrap">
              <List size={13} /> Shipping Information :
            </span>
            {cart.items.map((item) => item.name).join(" ,")}
          </div>
        </div>
        <Input
          label="card number"
          register={form.register}
          errors={form.formState.errors}
          type="number"
          id="card_number"
          min={0}
          disabled={isLoading}
        />
        <Input
          label="phone number"
          register={form.register}
          errors={form.formState.errors}
          type="number"
          id="phone"
          min={0}
          disabled={isLoading}
        />
        <Input
          label="postal code"
          register={form.register}
          errors={form.formState.errors}
          type="number"
          id="address_postal_code"
          min={0}
          disabled={isLoading}
        />
        <Input
          disabled={isLoading}
          label="your country"
          register={form.register}
          errors={form.formState.errors}
          id="address_country"
        />
        <Input
          disabled={isLoading}
          label="your province"
          register={form.register}
          errors={form.formState.errors}
          id="address_province"
        />
        <Input
          disabled={isLoading}
          label="your city"
          register={form.register}
          errors={form.formState.errors}
          id="address_city"
        />
        <div className="col-span-full min-w-full capitalize max-w-full grid grid-cols-2 md:grid-cols-3  gap-2">
          <Button disabled={isLoading} type="submit">
            submit payment
          </Button>
          <Button
            disabled={isLoading}
            onClick={cancelPayment}
            type="button"
            className="bg-red-600"
          >
            cancel payment
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default CheckoutForm;
