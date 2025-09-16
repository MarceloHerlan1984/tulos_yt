import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PriceView from "./PriceView";
import AddToCartButton from "./AddToCartButton";

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="rounded-lg group text-sm ">
      <div className="">
        {product?.images && (
          <>
            <Link href={`/product/${product?.slug?.current}`}>
              {" "}
              <Image
                src={urlFor(product?.images[0]).url()}
                width={500}
                height={350}
                alt="prodcut"
                priority
                className={`w-full rounded-md  object-contain  group-hover:scale-105 hoverEffect`}
              />
            </Link>
            <div className="mt-2 px-2 flex flex-col gap-1.5 ">
              <h2 className="font-semibold line-clamp-1">{product?.name}</h2>
              <p>{product?.intro}</p>
              <PriceView price={product?.price} />
              <AddToCartButton product={product} />
            </div>
          </>
        )}
      </div>{" "}
    </div>
  );
}

export default ProductCard;
