"use client";
import Image from "next/image";
import { ArrowRight, Edit } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useModals } from "@/hooks/use-modals";
import React from "react";

interface InfoCardProps {
  id: string;
  title: string;
  variant: "product" | "address";
  imageUrl?: string;
  icon?: React.ReactNode;
  subtitle?: string;
  // Optionally override the default onClick behavior.
  onClick?: () => void;
  imageClassName?: string;
  buttonClassName?: string;
}

export function InfoCard({
  id,
  imageUrl,
  icon,
  title,
  subtitle,
  variant,
  onClick,
  imageClassName,
  buttonClassName,
}: InfoCardProps) {
  const { closeModal } = useModals();
  const navigation = useRouter();

  // Default click behavior, which you can override via the onClick prop.
  const handleClick = () => {
    closeModal("accountModal");
    if (onClick) {
      onClick();
    } else {
      if (variant === "product") {
        navigation.push(`/product/${id}`);
      } else if (variant === "address") {
        navigation.push(`/address/${id}/edit`);
      }
    }
  };

  return (
    <div className="group hover:cursor-pointer" onClick={handleClick}>
      <div
        className={cn(
          "relative flex items-center justify-between rounded-lg overflow-hidden bg-secondary py-4",
          imageClassName
        )}
      >
        <div className="flex items-center">
          {variant === "product" && imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              width={743}
              height={567}
              className="aspect-video w-auto h-20 object-contain"
            />
          ) : (
            <div className="w-20 h-20 flex items-center justify-center">
              {icon}
            </div>
          )}
          <div>
            <h4 className="font-medium">{title}</h4>
            {variant === "product" ? (
              <p className="font-semibold text-sm">{subtitle} DZ</p>
            ) : (
              <p className="text-sm text-muted-foreground">{subtitle}</p>
            )}
          </div>
        </div>
        <div
          className={cn(
            "bg-primary text-white group-hover:text-white p-2 rounded-full group-hover:bg-primary/90 mx-6",
            buttonClassName
          )}
        >
          {variant === "product" ? (
            <ArrowRight className="h-4 w-4" />
          ) : (
            <Edit className="h-4 w-4" />
          )}
        </div>
      </div>
    </div>
  );
}
