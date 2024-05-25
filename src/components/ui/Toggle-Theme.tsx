"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button1";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, Transition } from "@headlessui/react";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium   focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 bg-opacity-100 dark:bg-opacity-90 bg-[#121212] text-white dark:bg-white dark:text-black">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Menu.Button>
      </div>
      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 dark:divide-gray-600 rounded-md bg-white dark:bg-[#121212] shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              <button
                className={`${
                  resolvedTheme === "dark"
                    ? "bg-[#121212] dark:bg-white text-white dark:text-black"
                    : "text-gray-900 dark:text-white"
                } group flex w-full items-center rounded-md px-2 py-2 text-sm capitalize`}
                onClick={() => setTheme("dark")}
              >
                dark
              </button>
            </Menu.Item>
            <Menu.Item>
              <button
                className={`${
                  resolvedTheme === "light"
                    ? "bg-[#121212] dark:bg-white text-white dark:text-black"
                    : "text-gray-900 dark:text-white"
                } group flex w-full items-center rounded-md px-2 py-2 text-sm capitalize`}
                onClick={() => setTheme("light")}
              >
                light
              </button>
            </Menu.Item>
            <Menu.Item>
              <button
                className={`${
                  resolvedTheme === "system"
                    ? "bg-[#121212] dark:bg-white text-white dark:text-black"
                    : "text-gray-900 dark:text-white"
                } group flex w-full items-center rounded-md px-2 py-2 text-sm capitalize`}
                onClick={() => setTheme("system")}
              >
                system
              </button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
