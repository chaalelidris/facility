import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  return (
    <Link href="/">
      <Image
        src={src}
        alt="Facility Logo"
        width={120}
        height={40}
        className={cn("", className)}
        priority
      />
    </Link>
  );
}
