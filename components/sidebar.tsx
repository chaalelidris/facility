"use client";

import Link from "next/link";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import Logo from "@/components/logo";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import PhoneNumberLink from "./phone-number-link";
import { Separator } from "./ui/separator";
import { Navigation } from "@/types/item.type";

interface SidebarProps {
  navigation: Navigation[];
  children: React.ReactNode;
}

export function Sidebar({ navigation, children }: SidebarProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
      <SheetTrigger className="lg:hidden">
        <Menu className="h-8 w-8" />
      </SheetTrigger>
      <SheetContent
        data-sidebar="sidebar"
        data-mobile="true"
        className="bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
      >
        <SheetHeader>
          <SheetTitle className="flex flex-row items-center justify-between p-6 pb-0">
            <div className="-m-1.5 p-1.5">
              <Logo src="/images/logo-inline.svg" className="!h-16 w-auto" />
            </div>
            <SheetClose className="-m-2.5 rounded-md p-2.5 text-muted-foreground">
              <X aria-hidden="true" className="size-6" />
            </SheetClose>
          </SheetTitle>
          <SheetDescription className="px-6 text-sm text-muted-foreground">
            Explore our products and services
          </SheetDescription>
        </SheetHeader>

        <div className="px-6 mt-6 flow-root pb-6">
          {children}
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </Link>
              ))}
              <Separator className="" />
              <PhoneNumberLink className="flex-shrink-0 my-2" />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
