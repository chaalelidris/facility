import { CountdownTimer } from "@/components/countdown-timer";
import { ProductCard } from "@/components/product-card";
import AdditionalServicesSection from "@/components/sections/additional-services-section";
import { useMemo } from "react";
import HeroSection from "@/components/sections/hero-section";
import { CarouselItem } from "@/components/ui/carousel";
import CategoriesSection from "@/components/sections/categories-section";
import PromoBanner from "@/components/sections/promo-banner";
import Link from "next/link";
import CoverflowSwiper from "@/components/carousel/coverflow-swiper";
import InfiniteScroller from "@/components/infinite-scroller";
import { Product } from "../types/product.type";
import { Item } from "../types/item.type";
import ClientCarousel from "@/components/carousel/client-carousel";
import GridSwiper from "@/components/carousel/grid-swiper";
import CategoryCard from "@/components/category-card";
import {
  brands,
  productCategories,
  servicesCategories,
} from "../constants/navigation.constant";

// todo: fetch products from the server
export const products: Product[] = [
  {
    id: "1",
    imageUrl: "/images/products/tv.png",
    title: "TV Samsung",
    price: "25 000",
  },
  {
    id: "2",
    imageUrl: "/images/products/laptop1.avif",
    title: "Dell Laptop",
    price: "35 000",
  },
  {
    id: "3",
    imageUrl: "/images/products/phone1.png",
    title: "iPhone 14",
    price: "45 000",
  },
  {
    id: "4",
    imageUrl: "/images/products/speaker1.png",
    title: "Bose Speaker",
    price: "15 000",
  },
  {
    id: "5",
    imageUrl: "/images/products/watch1.png",
    title: "Smart Watch",
    price: "10 000",
  },
  {
    id: "6",
    imageUrl: "/images/products/camera1.png",
    title: "Canon Camera",
    price: "30 000",
  },
];
export default function Home() {
  const tvImageUrl = useMemo(() => "/images/products/tv.png", []);
  const categories: Item[] = useMemo(() => productCategories, []);
  const services: Item[] = useMemo(() => servicesCategories, []);
  const partneredBrands: Item[] = useMemo(() => brands, []);

  return (
    <>
      <HeroSection />

      {/* Top Products Section */}
      <section className="py-6 md:py-8 mx-4">
        <div className="max-w-8xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">TOP PRODUCTS</h2>
          <ClientCarousel>
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                className="basis-1/2 md:basis-1/3 lg:basis-1/6"
              >
                <ProductCard
                  id={product.id}
                  imageUrl={product.imageUrl}
                  title={product.title}
                  price={product.price}
                />
              </CarouselItem>
            ))}
          </ClientCarousel>
        </div>
      </section>

      {/* Services Section */}
      <section className="ring-1 ring-gray-200 py-12 max-w-8xl mx-4 2xl:mx-auto px-8 rounded-xl">
        <div className="flex flex-col items-center gap-4 py-8">
          <h2 className="uppercase text-2xl md:text-3xl lg:text-3xl">
            our <span className="text-black font-bold">services</span>
          </h2>
          <p className="font-semibold text-accent-foreground text-sm lg:text-lg text-center">
            We offer the following services, you can access them from the menu
            or by browsing the services listed below
          </p>
        </div>
        <CoverflowSwiper>
          {services.map((service) => (
            <CategoryCard
              key={service.id}
              label={service.label}
              imageUrl={service.imageUrl || ""}
            />
          ))}
        </CoverflowSwiper>
      </section>

      {/* Super Deals Section */}
      <section className="py-8 mx-4">
        <div className="max-w-8xl mx-auto flex flex-col items-center gap-4">
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            <h2 className="text-2xl font-bold">SUPPER DEALS</h2>
            <div className="flex items-center justify-between gap-4 w-full md:w-auto">
              <div className="flex justify-center ring-1 ring-gray-200 rounded-full">
                <CountdownTimer
                  endTime={new Date(
                    new Date().getTime() + 5 * 60 * 60 * 1000
                  ).toISOString()}
                />
              </div>
              <Link
                href="/super-deals"
                className="underline text-gray-500 hover:text-gray-700"
              >
                View All
              </Link>
            </div>
          </div>
          <div className="w-full bg-secondary px-10 py-7 rounded-xl">
            <ClientCarousel autoplay={2000}>
              {products.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
                >
                  <ProductCard
                    id={product.id}
                    imageUrl={product.imageUrl}
                    title={product.title}
                    price={product.price}
                    imageClassName="bg-background"
                    buttonClassName="bg-background"
                  />
                </CarouselItem>
              ))}
            </ClientCarousel>
          </div>
        </div>
      </section>

      {/* Promo Banner Section */}
      <section className="py-8">
        <PromoBanner imageUrl={tvImageUrl} />
      </section>

      {/* New Products Section */}
      <section className="py-8">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between w-full mb-4">
            <h2 className="text-2xl font-bold uppercase">new products</h2>
            <div className="flex items-center gap-4">
              <Link
                href="/new-products"
                className="underline text-gray-500 hover:text-gray-700"
              >
                View All
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center gap-10">
            <div className="w-full py-7  grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-1 border border-accent rounded-xl p-8 lg:p-12 w-80 mx-auto md:w-full">
                <ProductCard
                  id={products[0].id}
                  imageUrl={products[0].imageUrl}
                  title={products[0].title}
                  price={products[0].price}
                />
              </div>
              <div className="col-span-2">
                <GridSwiper>
                  {products.map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      imageUrl={product.imageUrl}
                      title={product.title}
                      price={product.price}
                    />
                  ))}
                  {products.reverse().map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      imageUrl={product.imageUrl}
                      title={product.title}
                      price={product.price}
                    />
                  ))}
                </GridSwiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnered Brands Section */}
      <section className="py-8">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-4 uppercase">
            partnered brands
          </h2>
          <InfiniteScroller items={partneredBrands} />
        </div>
      </section>

      {/* Promo Banner Section 2 */}
      <section className="py-8">
        <PromoBanner imageUrl={tvImageUrl} />
      </section>

      {/* Categories Section */}
      <section className="bg-gradient-to-b from-sky-200/20 to-white py-12 max-w-8xl mx-auto px-8">
        <div className="flex flex-col items-center gap-4 py-8">
          <h2 className="text-4xl italic font-semibold uppercase">
            SHOP BY <span className="text-primary font-bold">category</span>
          </h2>
          <p className="font-semibold text-accent-foreground">
            You can shop by the following categories
          </p>
        </div>
        <CategoriesSection categories={categories} />
      </section>

      {/* Infinite Products  */}
      <section className="py-8">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-4">More To Love</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                imageUrl={product.imageUrl}
                title={product.title}
                price={product.price}
              />
            ))}
            {products.reverse().map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                imageUrl={product.imageUrl}
                title={product.title}
                price={product.price}
              />
            ))}
            {products.reverse().map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                imageUrl={product.imageUrl}
                title={product.title}
                price={product.price}
              />
            ))}
            {products.reverse().map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                imageUrl={product.imageUrl}
                title={product.title}
                price={product.price}
              />
            ))}
            {products.reverse().map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                imageUrl={product.imageUrl}
                title={product.title}
                price={product.price}
              />
            ))}
            {products.reverse().map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                imageUrl={product.imageUrl}
                title={product.title}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <AdditionalServicesSection />
    </>
  );
}
