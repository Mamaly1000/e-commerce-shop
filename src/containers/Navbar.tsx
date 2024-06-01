"use client";
import React from "react";
import Container from "./Container";
import Link from "next/link";
import NavbarActions from "./NavbarActions";
import MainNav from "./MainNav";
import { useStore } from "@/hooks/use-store";
import Image from "next/image";
import placeholder from "../../public/images/placeholder-removebg-preview.png";
import { useParams } from "next/navigation";

export default function Navbar() {
  const { store } = useStore();
  const params = useParams();
  return (
    store &&
    params?.storeId && (
      <div className="border-b border-gray-500 dark:border-gray-700 relative z-[31]">
        <Container>
          <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center z-10">
            <Link
              href={`/store/${store.id}`}
              className="ml-4 flex lg:ml-0 gap-x-2 items-center justify-start"
            >
              <Image
                src={!!store.logo ? store.logo : placeholder.src}
                alt={store.name}
                width={30}
                height={30}
                className="object-contain"
              />
              <p className="font-bold text-xl">{store?.name}</p>
            </Link>
            <MainNav data={(store?.categories || []) as any} />
            <NavbarActions />
          </div>
        </Container>
      </div>
    )
  );
}
