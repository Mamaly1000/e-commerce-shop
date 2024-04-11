"use client";
import { usePreviewModal } from "@/hooks/use-preview-modal";
import React from "react";
import Modal from "./Modal";
import Gallery from "../ui/Gallery";
import ProductInfo from "../ui/ProductInfo";

const PreviewModal = () => {
  const { onClose, data, isOpen, onOpen } = usePreviewModal();

  if (!data) {
    return null;
  }

  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="grid w-full grid-cols-1 gap-x-6 items-start gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery images={data.images || []} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <ProductInfo data={data} />
        </div>
      </div>
    </Modal>
  );
};

export default PreviewModal;
