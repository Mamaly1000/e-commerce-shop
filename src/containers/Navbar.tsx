import React from "react";
import Container from "./Container";
import Link from "next/link";
import NavbarActions from "./NavbarActions";
import { getCategories } from "@/actions/get-categories.server";
import MainNav from "./MainNav";
export default async function Navbar() {
  const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <MainNav data={categories as any} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
}
