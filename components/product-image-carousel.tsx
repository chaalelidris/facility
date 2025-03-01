"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ImageCarouselProps {
  images: string[];
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row gap-4 max-w-md lg:max-w-full m-auto">
      {/* Thumbnails Column */}
      <div className="flex lg:flex-col gap-4 p-1 order-last lg:order-first overflow-x-auto lg:overflow-y-auto lg:max-h-[400px] scrollbar-hidden">
        {images.map((image, index) => (
          <Card
            key={index}
            className={cn(
              "relative h-14 w-14 flex-shrink-0 cursor-pointer",
              index === selectedImage && "ring-2 ring-primary"
            )}
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={image}
              alt={`Product thumbnail ${index + 1}`}
              fill
              className="object-cover rounded-sm"
              sizes="64px"
              loading="eager"
            />
          </Card>
        ))}
      </div>
      {/* Main Image Preview */}
      <div className="relative aspect-square bg-muted rounded-xl flex-1">
        <Image
          src={images[selectedImage]}
          alt="Main product preview"
          fill
          className="object-contain rounded-xl"
          sizes="(max-width: 1024px) 100vw, 75vw"
          priority
        />
      </div>
    </div>
  );
}
