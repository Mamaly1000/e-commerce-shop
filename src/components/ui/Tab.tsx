"use client";
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import darkLogo from "../../../public/images/dark-logo.svg";
import { useParams, useRouter } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
export const SlideTabsExample = () => {
  const params = useParams();

  return (
    !params?.storeId && (
      <div className="w-full flex items-center justify-center p-2 py-5 bg-inherit sticky top-0 left-0 right-0 z-30">
        <SlideTabs />
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
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-black dark:border-white bg-white dark:bg-inherit p-1"
    >
      <Image
        src={logo.src}
        alt="shopspot logo"
        width={100}
        height={20}
        className="object-contain mx-3 hidden dark:block"
      />
      <Image
        src={darkLogo.src}
        alt="shopspot logo"
        width={100}
        height={20}
        className="object-contain mx-3 block dark:hidden"
      />
      <Tab setPosition={setPosition} onClick={() => router.push("/")}>
        Home
      </Tab>
      <Tab setPosition={setPosition}>About us</Tab>
      <Tab setPosition={setPosition}>contact</Tab>
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
}: {
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
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
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
