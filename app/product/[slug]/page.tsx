import Container from "@/components/Container";
import ImageView from "@/components/ui/ImageView";
import { getProductBySlug } from "@/sanity/helpers/queries";
import { notFound } from "next/navigation";
import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import PriceView from "@/components/PriceView";
import AddToCartButton from "@/components/AddToCartButton";
import {
  BoxIcon,
  BusFrontIcon,
  FileQuestionIcon,
  Heart,
  ListOrdered,
  ShareIcon,
} from "lucide-react";
import ProductCarecteristics from "@/components/ProductCarecteristics";

async function SingleProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  console.log(slug);

  const product = await getProductBySlug(slug);
  console.log(product);

  if (!product) {
    return notFound();
  }

  return (
    <>
      <Container className="flex flex-col md:flex-row gap-10 mb-40">
        {product?.images?.[0] && <ImageView images={product.images} />}

        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <div>
            <h2 className="text-4xl font-bold mb-2">{product?.name}</h2>
            <PriceView price={product?.price} className="text-lg font-bold" />
          </div>
          <p className="text-sm text-gray-700 tracking-wide gap-5">
            {product?.description}
          </p>
          <div className="flex items-center gap-2.5 lg:gap-5">
            <AddToCartButton
              product={product}
              className="bg-darkColor/80 text-white hover:bg-darkColor hoverEffect w-full"
            />
            <button className=" border-2 border-darkColor/40 text-darkColor px-2.5 py-1.5 rounded-full hover:border-darkColor hoverEffect">
              <Heart className="w-5 h-5 " />
            </button>
          </div>
          <ProductCarecteristics product={product} />
          <div className="flex flex-wrap items-center justify-between gap-2 border-b-gray-200 py-5 -mt-2">
            <div className="flex items-center gap-2 text-sm text-black hover:text-red-600 hoverEffect">
              <FileQuestionIcon className="w-5h-5 " />
              <p>Ask a question</p>
            </div>

            <div className="flex items-center gap-2 text-sm text-black hover:text-red-600 hoverEffect">
              <ShareIcon className="w-5h-5 " />
              <p>Share</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default SingleProductPage;
