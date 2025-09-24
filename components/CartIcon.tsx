"use client";
import useCartStore from "@/store";
import { Carrot, ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";

function CartIcon() {
  const { addItem, getItemCount, items } = useCartStore();

  return (
    <Link href={"/cart"} className="group relative">
      <ShoppingBag className="w-6 h-6 cursor-pointer" />
      <span className="absolute -top-1 -right-1 bg-black text-white h-3 w-3 rounded-full text-xs font-semibold flex items-center justify-center">
        {items.length ? items.length : 0}
      </span>
    </Link>
  );
}

export default CartIcon;
