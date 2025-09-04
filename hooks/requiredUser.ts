"use client";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export const requiredUser = () => {
  const { user } = useUser();

  if (!user) {
    redirect("/");
  }
};
