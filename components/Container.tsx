import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

function Container({ children, className }: Props) {
  return <div className={cn(" mx-12 px-4 mt-10", className)}>{children}</div>;
}

export default Container;
