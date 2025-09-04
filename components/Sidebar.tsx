"use client";

import React from "react";
import { motion } from "motion/react";
import Logo from "./Logo";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialMedia from "./SocialMedia";
import { useOutsideClick } from "@/hooks/useOutsideClick";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const data = [
  { title: "About", href: "/" },
  { title: "Lessons", href: "/lessons" },
  { title: "Parties", href: "/parties" },
  { title: "Online", href: "/online" },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);

  return (
    <div
      className={`fixed inset-y-0 left-0 z-70 bg-darkColor/80 shadow-2xl hoverEffect w-full ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <motion.div
        className="min-w-72 max-w-96 bg-darkColor text-white/90 h-full p-10  flex flex-col gap-6 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        ref={sidebarRef}
      >
        <div className="flex  mx-auto items-center justify-between">
          <button onClick={onClose}>
            <Logo className="text-white">Amor Del Tango</Logo>
          </button>

          <button className="hover:text-red-400 hoverEffect" onClick={onClose}>
            <X className="h-6 w-6 right-0 cursor-pointer" />
          </button>
        </div>
        <div>
          <div className=" flex flex-col gap-3 tracking-wide mx-auto items-center text-white/70 ">
            {data.map((item, i) => (
              <Link
                href={item?.href}
                key={i}
                className={`hover:text-white hoverEffect relative group ${pathname === item?.href && "text-white font-bold"}`}
              >
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
        <SocialMedia></SocialMedia>
      </motion.div>
    </div>
  );
};

export default Sidebar;
