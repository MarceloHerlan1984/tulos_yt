"use client";
import { requiredUser } from "@/hooks/requiredUser";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

function OrdersPage() {
  requiredUser();

  return <div>orderspage</div>;
}

export default OrdersPage;
