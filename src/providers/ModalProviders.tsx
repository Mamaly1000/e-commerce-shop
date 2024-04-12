"use client";
import CheckoutForm from "@/components/forms/CheckoutForm";
import PreviewModal from "@/components/modal/PreviewModal";
import React, { useEffect, useState } from "react";

const ModalProviders = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return null;
  }
  return (
    <>
      <PreviewModal />
      <CheckoutForm />
    </>
  );
};

export default ModalProviders;
