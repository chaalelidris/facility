"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";

interface ProductCardProps {
  children: React.ReactNode;
  autoplay?: number;
}

export default function ClientCarousel({
  children,
  autoplay,
}: ProductCardProps) {
  return (
    <Carousel
      plugins={
        autoplay
          ? [
              Autoplay({
                delay: autoplay,
              }),
            ]
          : []
      }
    >
      <CarouselContent className="py-4">{children}</CarouselContent>
      <CarouselPrevious className="carousel-prev-md lg:carousel-prev-lg" />
      <CarouselNext className="carousel-next-md lg:carousel-next-lg" />
    </Carousel>
  );
}
