"use client";

import { useMemo, useState, useCallback, memo, useEffect } from "react";
import { productCategories } from "@/constants/navigation.constant"; // List of categories
import CategoryFilterCard from "@/components/category-filter-card";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import InputIcon from "@/components/inputs/Input-icon";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

// Memoized CategoryFilterCard to prevent unnecessary re-renders
const MemoizedCategoryFilterCard = memo(CategoryFilterCard);

const FiltersSidebar = () => {
  const [priceRange, setPriceRange] = useState<[number, number]>([
    10000, 50000,
  ]);

  // Ensure priceRange is always valid
  useEffect(() => {
    if (!Array.isArray(priceRange) || priceRange.length !== 2) {
      setPriceRange([10000, 50000]); // Reset to default if invalid
    }
  }, [priceRange]);

  // Memoize the list of categories
  const categories = useMemo(
    () => productCategories.map((category) => category.label),
    []
  );

  // Handle price range change
  const handlePriceRangeChange = useCallback((value: [number, number]) => {
    setPriceRange(value);
  }, []);

  // Scroll categories down
  const scrollCategoriesDown = () => {
    const container = document.querySelector(".category-list");
    if (container) {
      container.scrollBy({ top: 100, behavior: "smooth" });
      if (
        container.scrollTop >=
        container.scrollHeight - container.clientHeight
      ) {
        container.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="bg-white px-4 rounded-xl">
      <div className="space-y-4">
        {/* Sidebar Header */}
        <h2 className="text-lg font-semibold uppercase">Our Categories</h2>
        <Separator className="w-4/5 bg-secondary" />

        {/* Category Filters */}
        <div className="relative">
          <div className="h-64 overflow-y-scroll space-y-3 scrollbar-hidden category-list">
            {categories.map((category) => (
              <MemoizedCategoryFilterCard key={category} label={category} />
            ))}
          </div>
          <div className="flex justify-center w-full">
            <Button
              variant="ghost"
              className="absolute -bottom-5 w-8 h-8 bg-black/40 hover:bg-black/45 rounded-full text-white hover:text-white hover:scale-105 transition-transform"
              onClick={scrollCategoriesDown}
            >
              <ChevronDown size={10} />
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-4 mt-6">
        {/* Sidebar Header */}
        <h2 className="text-lg font-semibold uppercase">Price Range</h2>
        <Separator className="w-4/5 bg-secondary" />

        {/* Price Filters */}
        <Slider
          value={priceRange}
          onValueChange={handlePriceRangeChange}
          min={10000}
          max={100000}
          step={1000}
          minStepsBetweenThumbs={1}
          className="w-full"
        />

        {/* Min and Max Inputs */}
        <div className="flex items-center gap-2">
          <span className="uppercase text-muted-foreground">Min:</span>
          <InputIcon
            type="number"
            value={String(priceRange[0])}
            textRight="DZD"
            className="flex-grow"
            onChange={(e) => {
              const newValue = parseInt(e.target.value, 10); // Parse input as integer
              const sanitizedValue = isNaN(newValue) ? 0 : newValue; // Handle NaN
              setPriceRange([sanitizedValue, priceRange[1]]); // Update state
            }}
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="uppercase text-muted-foreground">Max:</span>
          <InputIcon
            type="number"
            value={String(priceRange[1])}
            textRight="DZD"
            className="flex-grow"
            onChange={(e) => {
              const newValue = parseInt(e.target.value, 10); // Parse input as integer
              const sanitizedValue = isNaN(newValue) ? 0 : newValue; // Handle NaN
              setPriceRange([priceRange[0], sanitizedValue]); // Update state
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FiltersSidebar;
