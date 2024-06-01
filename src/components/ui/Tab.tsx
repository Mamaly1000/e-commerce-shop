"use client";
import React, {
  Dispatch,
  Fragment,
  ReactNode,
  SetStateAction,
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import darkLogo from "../../../public/images/dark-logo.svg";
import { useParams, usePathname, useRouter } from "next/navigation";
import { LucideMenu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/libs/utils";
import useScroll from "@/hooks/useScroll";
import { Menu, Transition } from "@headlessui/react";

const routes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "about us",
  },
];

export const SlideTabsExample = () => {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const formattedRoutes = routes.map((r) => ({
    ...r,
    isActive: pathname.match(r.href) && pathname.endsWith(r.href),
  }));
  return (
    !params?.storeId && (
      <div
        className={cn(
          `w-full flex items-center justify-center
            sticky top-0 left-0 right-0 z-30 
             border-b-[1px] border-neutral-700 transition-all
             bg-white dark:bg-[#121212] p-2`
        )}
      >
        <SlideTabs />
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className=" flex items-center justify-center lg:hidden w-full rounded-md p-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 bg-opacity-100 dark:bg-opacity-90 text-black dark:text-white capitalize">
              <LucideMenu className="h-5 w-5" aria-hidden="true" />
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
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 dark:divide-gray-600 rounded-md bg-white dark:bg-[#121212] shadow-lg ring-1 ring-black/5 focus:outline-none">
              <div className="px-1 py-1 space-y-1">
                {formattedRoutes.map((route) => (
                  <Menu.Item key={route.href}>
                    {() => (
                      <button
                        className={`${
                          route.isActive
                            ? "bg-[#121212] dark:bg-white text-white dark:text-black"
                            : "text-gray-900 dark:text-white"
                        } group flex hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all w-full items-center rounded-md px-2 py-2 text-sm capitalize`}
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
      </div>
    )
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const router = useRouter();
  const { scrolled } = useScroll({ maxPosition: 20 });
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className={cn(
        `
       relative mx-auto p-1 bg-transparent
       flex rounded-full items-center
     border-black dark:border-white transition-all duration-[2000] w-[100%]`
      )}
    >
      <div className="relative aspect-video w-[100px] md:w-[100px] lg:w-[120px] h-[20px] md:h-[50px] flex items-center justify-center mx-3">
        <Image
          src={logo.src}
          alt="shopspot logo"
          fill
          className="object-contain hidden dark:block"
        />
        <Image
          src={darkLogo.src}
          alt="shopspot logo"
          fill
          className="object-contain block dark:hidden"
        />
      </div>
      {routes.map((r) => (
        <Tab
          pcOnly
          key={r.href}
          setPosition={setPosition}
          onClick={() => router.push(r.href)}
        >
          {r.label}
        </Tab>
      ))}
      <Tab
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        setPosition={setPosition}
      >
        <div className="flex items-center justify-center  m-auto">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </div>
      </Tab>
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({
  children,
  setPosition,
  onClick,
  pcOnly = false,
}: {
  pcOnly?: boolean;
  onClick?: () => void;
  children: ReactNode;
  setPosition: Dispatch<SetStateAction<Position>>;
}) => {
  const ref = useRef<null | HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      onClick={onClick}
      className={cn(
        `relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base`,
        pcOnly && "hidden lg:block"
      )}
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-black dark:bg-white md:h-12"
    />
  );
};

type Position = {
  left: number;
  width: number;
  opacity: number;
};
