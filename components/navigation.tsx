"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavigationItem {
  name: string;
  href: string;
}

interface NavigationProps {
  navigation: NavigationItem[];
  className?: string;
}

const Navigation = ({ navigation, className }: NavigationProps) => {
  const pathname = usePathname();

  return (
    <nav className={cn("", className)} aria-label="Primary Navigation">
      {navigation.map((item) => (
        <Link
          key={`nav-${item.name}`}
          href={item.href}
          className={cn(
            "text-muted-foreground hover:text-primary group-hover:text-primary text-sm px-2",
            { "text-primary font-semibold": pathname === item.href }
          )}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
