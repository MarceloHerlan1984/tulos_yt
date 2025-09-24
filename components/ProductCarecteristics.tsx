import { Product } from "@/sanity.types";
import React from "react";
import { Accordion, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { AccordionContent } from "@radix-ui/react-accordion";

function ProductCarecteristics({ product }: { product: Product }) {
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>{product?.name}: Characteristics</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-1">
            <p className="flex items-center justify-between ">
              Level:{" "}
              <span className="font-semibold tracking-wide">
                {product?.status}
              </span>
            </p>
            <p className="flex items-center justify-between ">
              Spots:{" "}
              <span className="font-semibold tracking-wide">
                {product.stock && product.stock > 0 ? "Available" : "Sold Out"}
              </span>
            </p>
            <p className="flex items-center justify-between ">
              Registration Starts{" "}
              <span className="font-semibold tracking-wide">
                {new Date(product?._createdAt).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default ProductCarecteristics;
