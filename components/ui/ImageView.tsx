"use client";

import {
  internalGroqTypeReferenceTo,
  SanityImageCrop,
  SanityImageHotspot,
} from "@/sanity.types";
import React, { useState } from "react";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface Props {
  images?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }>;
}

function ImageView({ images = [] }: Props) {
  const [active, setActive] = useState(images[0]);

  return (
    <div className="w-full md:w-1/2 space-y-2 md:space-y-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={active?._key}
          className="w-full "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          <Image
            src={urlFor(active).url()}
            alt="produc"
            width={700}
            height={700}
            priority
            className="rounded-lg max-h-[550px] min-h-[450px] object-contain"
          />
        </motion.div>
      </AnimatePresence>
      <div className="grid grid-cols-4 gap-2 h-20 md:h-28">
        {images?.map((image, i) => (
          <button
            onClick={() => setActive(image)}
            key={i}
            className={`border  rounded-md overflow-hidden ${active?._key === image?._key ? "ring-fuchsia-500 " : "ring-0"}`}
          >
            <Image
              src={urlFor(image).url()}
              alt="image"
              width={150}
              height={150}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ImageView;
