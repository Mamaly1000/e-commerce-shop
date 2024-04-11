"use client";
import React, { useEffect, useState } from "react";

const ModalProviders = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return null;
  }
  return <></>;
};

export default ModalProviders;
