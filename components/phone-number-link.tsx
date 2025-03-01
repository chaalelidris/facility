import { cn } from "@/lib/utils";
import { Call } from "iconsax-react";
import Link from "next/link";
import React from "react";

interface PhoneNumberLinkProps {
  className?: string;
}

const PhoneNumberLink = ({ className }: PhoneNumberLinkProps) => {
  return (
    <div className={cn("", className)}>
      <Link
        href={"/"}
        className="flex items-center text-primary font-semibold text-sm hover:cursor-pointer hover:text-primary/90"
      >
        <Call className="h-4 w-4 fill-primary mr-2 " variant="Outline" /> +123
        456 789
      </Link>
    </div>
  );
};

export default PhoneNumberLink;
