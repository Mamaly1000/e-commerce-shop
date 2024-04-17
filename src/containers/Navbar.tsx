import React from "react";
import Container from "./Container";
import Link from "next/link";
import NavbarActions from "./NavbarActions";
import { getCategories } from "@/actions/get-categories.server";
import MainNav from "./MainNav";
import { getStoreById } from "@/actions/get-store.server";
export default async function Navbar() {
  const categories = await getCategories();
  const store = await getStoreById();
  return (
    <div className="border-b border-gray-500 dark:border-gray-700 relative z-20">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center z-10">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">{store?.name}</p>
          </Link>
          <MainNav data={categories as any} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
}
