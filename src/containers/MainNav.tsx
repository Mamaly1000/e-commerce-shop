"use client";
import DropDown from "@/components/ui/DropDown";
import { cn } from "@/libs/utils";
import { Category } from "@/types/Types";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React, { FC } from "react";

interface props {
  data?: Category[];
}

const MainNav: FC<props> = ({ data = [] }) => {
  const pathname = usePathname();
  const params = useParams();
  const routes = data.map((route) => ({
    href: `/store/${params?.storeId}/category/${route.id}`,
    label: route.name,
    active: pathname.endsWith(`/category/${route.id}`),
  }));

  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 relative z-10">
      {routes.length <= 3 &&
        routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-black capitalize",
              route.active ? "text-black" : "text-neutral-500"
            )}
          >
            {route.label}
          </Link>
        ))}
      {routes.length > 3 && <DropDown routes={routes} />}
    </nav>
  );
};

export default MainNav;
