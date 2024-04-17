"use client";
import { Color, Size } from "@/types/Types";
import React, { useState } from "react";
import Button from "./Button";
import { Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";
import IconButton from "./icon-button";
import Filter from "./Filter";

const MobileFilters = ({
  colors,
  sizes,
}: {
  colors: Color[];
  sizes: Size[];
}) => {
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button
        onClick={onOpen}
        className="lg:hidden flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black"
      >
        Filters <Plus size={20} />
      </Button>
      <Dialog
        open={open}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-[#121212] bg-opacity-75" />

        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel
            className="relative ml-auto flex h-full w-full max-w-xs flex-col verya
           bg-white dark:bg-[#121212] py-4 pb-6 shadow-xl"
          >
            <div className="flex items-center justify-end px-4 ">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>
            <div className="p-4">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
