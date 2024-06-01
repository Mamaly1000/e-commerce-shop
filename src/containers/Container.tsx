"use client";
import { useStore } from "@/hooks/use-store";
import { cn } from "@/libs/utils";
import { Category, store_with_analytic } from "@/types/Types";
import { useEffect } from "react";

interface ContainerProps {
  children: React.ReactNode;
  store?: store_with_analytic | null;
  categories?: Category[];
  className?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  store,
  categories = [],
  className,
}) => {
  const { setStore } = useStore();
  useEffect(() => {
    if (!!store) {
      setStore({ ...store, categories });
    }
  }, [store]);
  return <div className={cn("mx-auto max-w-7xl", className)}>{children}</div>;
};

export default Container;
