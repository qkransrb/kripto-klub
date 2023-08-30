"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

import { cn } from "@/lib/utils";
import Search from "@/components/search";

const Navbar = () => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        label: "Komunitas",
        href: "/komunitas",
        active: pathname.includes("/komunitas"),
      },
      {
        label: "Berita",
        href: "/berita",
        active: pathname.includes("/berita"),
      },
      {
        label: "Informasi Pasar",
        href: "/informasi-pasar",
        active: pathname.includes("/informasi-pasar"),
      },
    ],
    [pathname]
  );

  return (
    <>
      <nav className="bg-transparent flex-1">
        <ul className="flex items-center gap-x-10">
          {routes.map((route) => (
            <li key={route.href}>
              <Link
                href={route.href}
                className={cn(
                  "hover:text-brand-red transition-colors",
                  route.active && "text-brand-red font-semibold"
                )}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <section className="flex items-center gap-x-2.5">
        <Link
          href="/sign-in"
          className="w-[90px] h-10 rounded-sm bg-brand-red text-brand-white font-semibold text-sm flex items-center justify-center hover:bg-brand-red/80 transition-colors"
        >
          Masuk
        </Link>
        <Search />
      </section>
    </>
  );
};

export default Navbar;
