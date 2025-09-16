import { Product } from "@/sanity.types";
import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface Props {
  product: Product;
  className?: string;
}
function AddToCartButton({ product, className }: Props) {
  return (
    <div>
      <Button
        className={cn(
          "w-full bg-transparent text-darkColor shadow-none border border-darkColor/30 font-semibold tracking-wide hover:text-white hoverEffect"
        )}
      >
        BUY
      </Button>
    </div>
  );
}

export default AddToCartButton;
