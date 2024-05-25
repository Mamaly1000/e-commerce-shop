"use client";
import { useStore } from "@/hooks/use-store";
import { Category, store_with_analytic } from "@/types/Types";
import { useEffect } from "react";

interface ContainerProps {
  children: React.ReactNode;
  store?: store_with_analytic | null;
  categories?: Category[];
}

const Container: React.FC<ContainerProps> = ({
  children,
  store,
  categories = [],
}) => {
  const { setStore } = useStore();
  useEffect(() => {
    if (!!store) {
      setStore({ ...store, categories });
    }
  }, [store]);
  return <div className="mx-auto max-w-7xl">{children}</div>;
};

export default Container;
