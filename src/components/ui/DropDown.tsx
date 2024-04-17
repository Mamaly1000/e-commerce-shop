"use client";
import { Menu, Transition } from "@headlessui/react";
import { BoxSelect, ChevronDownIcon, CircleEllipsis } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { Fragment } from "react";

const DropDown = ({
  routes = [],
}: {
  routes: {
    href: string;
    label: string;
    active: boolean;
  }[];
}) => {
  const router = useRouter();
  const activeRoute = routes.find((route) => route.active);
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium   focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 bg-opacity-100 dark:bg-opacity-90 bg-[#121212] text-white dark:bg-white dark:text-black">
          {activeRoute ? activeRoute.label : routes[0]?.label}
          <ChevronDownIcon
            className="-mr-1 ml-2 h-5 w-5  "
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 dark:divide-gray-600 rounded-md bg-white dark:bg-[#121212] shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="px-1 py-1 ">
            {routes.map((route) => (
              <Menu.Item key={route.href}>
                {() => (
                  <button
                    className={`${
                      route.active
                        ? "bg-[#121212] dark:bg-white text-white dark:text-black"
                        : "text-gray-900 dark:text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm capitalize`}
                    onClick={() => router.push(route.href)}
                  >
                    {route.label}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropDown;
