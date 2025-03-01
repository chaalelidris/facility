"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: string;
  imageUrl: string;
  title: string;
  price: string;
  imageClassName?: string;
  buttonClassName?: string;
}

export function ProductCard({
  id,
  imageUrl,
  title,
  price,
  imageClassName,
  buttonClassName,
}: ProductCardProps) {
  const navigation = useRouter();
  return (
    <div
      className="group space-y-4 hover:cursor-pointer hover:scale-105 transition-transform"
      onClick={() => navigation.push(`/product/${id}`)}
    >
      <div
        className={cn(
          "relative flex items-center justify-center rounded-xl overflow-hidden bg-secondary aspect-square",
          imageClassName
        )}
      >
        <Image
          src={imageUrl}
          alt={title}
          width={743}
          height={567}
          className="aspect-square w-auto object-cover rounded-lg"
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="overflow-hidden text-accent-foreground">
          <h3 className="font-normal text-sm">{title}</h3>
          <p className="font-bold ">{price} DZ</p>
        </div>
        <div
          className={cn(
            "bg-secondary text-accent-foreground group-hover:text-white p-2 rounded-full group-hover:bg-primary",
            buttonClassName
          )}
        >
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}
