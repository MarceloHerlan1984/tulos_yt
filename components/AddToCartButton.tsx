"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import useCartStore from "@/store";
import { Product } from "@/sanity.types";

interface Props {
  product: Product;
  className?: string;
}

export function AddToCartButton({ product, className }: Props) {
  const { addItem, getItemCount } = useCartStore();
  const itemCount = getItemCount(product?._id);

  // Estado local para controlar si se está agregando al carrito
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = async () => {
    setIsLoading(true);

    try {
      // Simulamos delay si quieres mostrar efecto de carga
      await new Promise((resolve) => setTimeout(resolve, 200));

      addItem(product);
      toast.success("Added to Cart!");
    } catch (error) {
      toast.error("Failed to add product.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <Button
        onClick={handleAddToCart}
        disabled={isLoading} // aquí deshabilitamos el botón
        className={cn(
          "w-full bg-transparent text-darkColor shadow-none border border-darkColor/30 font-semibold tracking-wide hover:text-white hoverEffect",
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        )}
      >
        {isLoading ? "Adding..." : "BUY"} {/* texto dinámico mientras carga */}
      </Button>
    </div>
  );
}

export default AddToCartButton;
