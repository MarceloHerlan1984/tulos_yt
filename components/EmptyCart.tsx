import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { ShoppingBagIcon } from "lucide-react";
import Link from "next/link";

function EmptyCart() {
  return (
    <div className="py-10 md:py-20 bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full space-y-8"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="w-48 h-48 mx-auto relative"
        >
          <Image
            src="/emptyCart.png"
            className="drop-shadow-2xl object-contain"
            width={250}
            height={250}
            alt="image"
          />
          <motion.div className="absolute -top-4 -right-4 bg-blue-500 rounded-full p-2">
            <ShoppingBagIcon size={24} className="text-white" />
          </motion.div>
        </motion.div>
        <div className="text-center space-y-4">
          <h2 className="font-bold uppercase">Your Cart is Empty</h2>
        </div>

        <div>
          <Link
            href={"/"}
            className="block bg-darkColor/5 border border-darkColor/20 text-center py-2.5 rounded-full text-sm font-semibold tracking-wide hover:border-darkColor hover:bg-darkColor hoverEffect hover:text-white"
          >
            Discover Courses
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default EmptyCart;
