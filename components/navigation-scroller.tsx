"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ArrowButton from "./buttons/arrow-button";
import { Item } from "@/types/item.type";

interface NavigationScrollerProps {
  items: Item[];
}

const NavigationScroller = ({ items }: NavigationScrollerProps) => {
  const searchParams = useSearchParams();
  const scrollRef = useRef<HTMLDivElement>(null);

  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  // Function to handle scroll events and update button states
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      // Update state based on scroll position
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  // Add scroll event listener on mount and clean up on unmount
  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Initialize button states on component mount
  useEffect(() => {
    if (scrollRef.current) {
      const { scrollWidth, clientWidth } = scrollRef.current;
      setIsAtStart(true);
      setIsAtEnd(scrollWidth <= clientWidth); // Disable right button if no overflow
    }
  }, []);

  return (
    <div className="relative flex items-center justify-between overflow-hidden">
      {/* Left Arrow Button */}
      <div className="hover:scale-110 transition-all">
        <ArrowButton
          direction="left"
          onClick={() => scroll("left")}
          disabled={isAtStart}
        />
      </div>

      <div
        ref={scrollRef}
        className="flex items-center overflow-x-scroll scrollbar-hidden relative"
      >
        {/* Navigation Items */}
        <ul className="flex">
          {items.map((item) => {
            const isActive = item.name === searchParams.get("c");

            return (
              <li
                key={item.id}
                className="relative flex items-center justify-center flex-shrink-0"
              >
                <Link
                  href={item.href || "#"}
                  className={cn(
                    "flex text-muted-foreground group-hover:text-primary text-sm px-4 py-6",
                    isActive && "font-semibold text-primary"
                  )}
                >
                  {item.icon}
                  {item.label}
                </Link>
                {isActive && (
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 right-0 h-1.5 w-full transition-colors duration-300 group-hover:bg-primary bg-primary"
                    )}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Right Arrow Button */}
      <div className="hover:fill-primary hover:scale-110 transition-all">
        <ArrowButton
          direction="right"
          onClick={() => scroll("right")}
          disabled={isAtEnd}
        />
      </div>
    </div>
  );
};

export default NavigationScroller;
