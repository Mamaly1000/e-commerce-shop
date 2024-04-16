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
        <Menu.Button className="inline-flex bg-black w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
          {activeRoute ? activeRoute.label : routes[0]?.label}
          <ChevronDownIcon
            className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
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
        <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="px-1 py-1 ">
            {routes.map((route) => (
              <Menu.Item key={route.href}>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-black text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
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
