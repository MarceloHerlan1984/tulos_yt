import React from "react";
import { Tooltip, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import Link from "next/link";
import { Facebook, Instagram, Mail, MailIcon, Youtube } from "lucide-react";
import { TooltipContent } from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const socialLink = [
  {
    title: "Youtube",
    href: "/",
    icon: <Youtube className="w-6 h-6" />,
  },
  {
    title: "Facebook",
    href: "/",
    icon: <Facebook className="w-6 h-6" />,
  },
  {
    title: "Instagram",
    href: "/",
    icon: <Instagram className="w-6 h-6" />,
  },
  {
    title: "Gmail",
    href: "/",
    icon: <MailIcon className="w-6 h-6" />,
  },
];
function SocialMedia({ className, iconClassName, tooltipClassName }: Props) {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3  mt-7 mx-auto", className)}>
        {socialLink?.map((item, i) => (
          <Tooltip key={i}>
            <TooltipTrigger asChild>
              <Link
                href={item.href}
                className={cn(
                  "p-2 border rounded-full hover:text-white  hover:border-white hoverEffect"
                )}
              >
                {item.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "bg-white p-1 text-darkColor font-semibold text-sm rounded-sm",
                tooltipClassName
              )}
            >
              {item.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}

export default SocialMedia;
