"use client";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useMemo } from "react";

const HeroSection = () => {
  const saleImageUrl = useMemo(() => "https://shorturl.at/Bhnx6", []);
  const newArrivalsImageUrl = useMemo(() => "https://shorturl.at/7UrOf", []);
  const freeShippingImageUrl = useMemo(() => "https://shorturl.at/Ovkit", []);
  const bannerImage = useMemo(
    () =>
      "https://www.smithstv.co.uk/media/absolute_advancedslider/image/LGSBHPbanner.jpg",
    []
  );

  return (
    <section>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="max-w-screen-2xl mx-auto"
      >
        <CarouselContent className="relative h-80 sm:h-[350px] ">
          <CarouselItem>
            <div className="bg-secondary">
              <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center p-5 sm:py-12 lg:py-24 relative place-items-center lg:place-items-start">
                  <div className="flex flex-col items-center lg:items-start gap-4">
                    <h1 className="text-3xl md:text-4xl text-secondary-foreground text-center lg:text-start">
                      GET YOUR <span className="font-bold">SPECIAL</span>
                      <br />
                      SALE UP TO <span className="font-bold">50%</span> OFF
                    </h1>
                    <Link
                      href="/shop"
                      className="inline-flex items-center gap-1 group"
                    >
                      <span className="bg-primary text-white px-6 py-3 rounded-full group-hover:bg-primary/90">
                        Shop Now
                      </span>
                      <div className="bg-primary text-white flex items-center justify-center p-3 rounded-full group-hover:bg-primary/90">
                        <ArrowRight className="size-5" />
                      </div>
                    </Link>
                  </div>

                  <Image
                    src={saleImageUrl}
                    alt="Sale Banner"
                    width={743}
                    height={567}
                    className="h-56 sm:h-[300px] lg:h-[300px] lg:absolute w-auto lg:bottom-4 lg:right-4 object-contain"
                  />
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <section className="bg-primary">
              <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center p-5 sm:py-12 lg:py-24 relative place-items-center lg:place-items-start">
                  <div className="flex flex-col items-center lg:items-start gap-4">
                    <h1 className="text-3xl md:text-4xl text-white text-center lg:text-start">
                      NEW ARRIVALS
                      <br />
                      Discover the{" "}
                      <span className="font-bold">Latest Trends</span>
                    </h1>
                    <Link
                      href="/new-arrivals"
                      className="inline-flex items-center gap-1 group"
                    >
                      <span className="bg-white text-primary px-6 py-3 rounded-full group-hover:bg-white/90">
                        Explore Now
                      </span>
                      <div className="bg-white text-primary flex items-center justify-center p-3 rounded-full group-hover:bg-white/90">
                        <ArrowRight className="size-5" />
                      </div>
                    </Link>
                  </div>

                  <Image
                    src={newArrivalsImageUrl}
                    alt="New Arrivals"
                    width={743}
                    height={567}
                    className="h-56 sm:h-[300px] lg:h-[300px] lg:absolute w-auto lg:bottom-4 lg:right-4 object-contain"
                  />
                </div>
              </div>
            </section>
          </CarouselItem>
          <CarouselItem>
            <section className="bg-[#d1f7ff]">
              <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center p-5 sm:py-12 lg:py-24 relative place-items-center lg:place-items-start">
                  <div className="flex flex-col items-center lg:items-start gap-4">
                    <h1 className="text-3xl md:text-4xl text-gray-800 text-center lg:text-start">
                      FREE SHIPPING
                      <br />
                      On Orders Over <span className="font-bold">5000 DZD</span>
                    </h1>
                    <Link
                      href="/shop"
                      className="inline-flex items-center gap-1 group"
                    >
                      <span className="bg-gray-800 text-white px-6 py-3 rounded-full group-hover:bg-gray-700">
                        Shop Now
                      </span>
                      <div className="bg-gray-800 text-white flex items-center justify-center p-3 rounded-full group-hover:bg-gray-700">
                        <ArrowRight className="size-5" />
                      </div>
                    </Link>
                  </div>

                  <Image
                    src={freeShippingImageUrl}
                    alt="Free Shipping"
                    width={743}
                    height={567}
                    className="h-56 sm:h-[300px] lg:h-[300px] lg:absolute w-auto lg:bottom-4 lg:right-4 object-contain"
                  />
                </div>
              </div>
            </section>
          </CarouselItem>
          <CarouselItem>
            <div className="flex items-center justify-center h-96">
              <Link
                href="/shop"
                className="w-full h-full flex justify-center items-center"
              >
                <Image
                  src={bannerImage}
                  alt="New Arrivals"
                  width={743}
                  height={567}
                  className="w-full h-72 object-contain"
                />
              </Link>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="carousel-prev-md lg:carousel-prev-lg" />
        <CarouselNext className="carousel-next-md lg:carousel-next-lg" />
      </Carousel>
    </section>
  );
};

export default HeroSection;
