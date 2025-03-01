"use client";

import { Item } from "@/types/item.type";
import CategoryCard from "../category-card";

interface CategoriesSectionProps {
  categories: Item[];
}

const CategoriesSection = ({ categories }: CategoriesSectionProps) => {
  return (
    <div>
      {/* <div className="sticky top-40 z-10 max-w-max mx-auto p-1 grid grid-cols-2 bg-secondary rounded-lg mb-6 ">
          <div
            className={cn(
              "col-span-1 cursor-pointer rounded-lg w-full h-full py-4 px-6 transition-colors",
              activeSection === "products"
                ? "bg-white ring-2 ring-primary"
                : "bg-transparent hover:bg-primary/10"
            )}
            onClick={() => scrollToSection("products")}
          >
            <div className="flex flex-col items-center justify-center h-full ">
              <h2 className="text-2xl mx-auto font-semibold text-primary">
                Products
              </h2>
              <p className="text-accent-foreground">Achat par facilité</p>
            </div>
          </div>
          <div
            className={cn(
              "col-span-1 cursor-pointer rounded-lg w-full h-full py-4 px-6 transition-colors",
              activeSection === "categories"
                ? "bg-white ring-2 ring-primary"
                : "bg-transparent hover:bg-primary/10"
            )}
            onClick={() => scrollToSection("categories")}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <h2 className="text-2xl font-semibold text-primary">categories</h2>
              <p>Service de qualité</p>
            </div>
          </div>
        </div> */}
      <div className="max-w-8xl mx-auto">
        <div className="w-full rounded-l grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category, index) => (
            <div key={index} className="">
              <CategoryCard
                key={category.id}
                imageUrl={category.imageUrl}
                label={category.label}
                href={category.href}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
