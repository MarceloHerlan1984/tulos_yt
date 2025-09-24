"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function HeaderMenu() {
  const data = [
    { title: "About", href: "/about" },
    { title: "Lessons", href: "/lessons" },
    { title: "Parties", href: "/parties" },
    { title: "Online", href: "/online" },
  ];

  const pathname = usePathname();

  return (
    <div className="hidden md:flex flex-1 items-center justify-start tracking-tight capitalize gap-5 text-sm">
      {data.map((item, i) => (
        <Link
          href={item?.href}
          key={i}
          className={`hover:text-darkColor hoverEffect relative group ${pathname === item?.href && "font-bold"}`}
        >
          {item?.title}
          <span
            className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-darkColor hoverEffect group-hover:w-1/2 group-hover:left-0 ${pathname === item?.href && "w-1/2 font-bold"}}`}
          />
          <span
            className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-darkColor hoverEffect group-hover:w-1/2 group-hover:right-0 ${pathname === item?.href && "w-1/2 font-bold"}`}
          />
        </Link>
      ))}
    </div>
  );
}

export default HeaderMenu;
