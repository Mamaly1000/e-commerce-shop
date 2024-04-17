"use client";
import { Dialog, Transition } from "@headlessui/react";

import { FC, Fragment, ReactNode } from "react";
import IconButton from "../ui/icon-button";
import { X } from "lucide-react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}
const Modal: FC<ModalProps> = ({ children, onClose, open }) => {
  return (
    <Transition show={open} appear as={Fragment}>
      <Dialog className="relative z-10" open={open} onClose={onClose}>
        <div className="fixed inset-0  bg-[#121212] bg-opacity-50" />
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-3xl overflow-hidden rounded-lg text-left align-middle ">
                <div className="relative flex w-full items-center overflow-hidden bg-white dark:bg-[#121212] px-4 pb-8 pt-14 shadow-2xl sm:p-6 sm:pt-8 md:p-6 lg:p-8">
                  <div className="absolute right-4 top-4 ">
                    <IconButton icon={<X size={15} />} onClick={onClose} />
                  </div>
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
export default Modal;
