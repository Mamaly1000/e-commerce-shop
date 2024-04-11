"use client";
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
    </>
  );
};

export default ModalProviders;
