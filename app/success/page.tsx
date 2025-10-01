"use client";
import useCartStore from "@/store";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { motion } from "motion/react";
import { Check, Home, Package, ShoppingBag } from "lucide-react";
import Link from "next/link";

function SuccessPage() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("orderNumber");
  const sessionId = searchParams.get("session_id");
  const { resetCart } = useCartStore();
  const router = useRouter();

  useEffect(() => {
    if (!orderNumber && !sessionId) {
      router.push("/");
    } else {
      resetCart();
    }
  }, [orderNumber, sessionId, resetCart]);

  return (
    <div className="py-10 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-2xl px-8 py-12 max-w-xl w-full text-center"
      >
        <motion.div className="flex w-24 h-24 bg-black rounded-full items-center justify-center mx-auto mb-8 shadow-lg">
          <Check className="text-white w-12 h-12" />
        </motion.div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Order Confirmed!
        </h1>
        <div className="space-y-4 mb-8 text-left ">
          <p className="text-gray-700">
            You will shortly receive an email with our bank account details for
            completing the payment.
          </p>
          <p className="text-gray-700">
            Order Number:{" "}
            <span className="text-black font-semibold">{orderNumber}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href={"/"}
            className="flex items-center justify-center px-4 py-3 font-semibold bg-white text-black border-black rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-md"
          >
            <Home />
            Home
          </Link>
          <Link
            href={"/orders"}
            className="flex items-center justify-center px-4 py-3 font-semibold bg-white text-black border-black rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-md"
          >
            <Package />
            Orders
          </Link>
          <Link
            href={"/lessons"}
            className="flex items-center justify-center px-4 py-3 font-semibold bg-white text-black border-black rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-md"
          >
            <ShoppingBag />
            Lessons
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default SuccessPage;
