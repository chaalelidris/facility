"use client";

import { useState } from "react";
import { Star, StarOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductRatingProps {
  rating: number;
  reviews: number;
  variant?: "default" | "compact";
  onRatingChange?: (rating: number) => void;
  readonly?: boolean;
}

export function ProductRating({
  rating,
  reviews,
  variant = "default",
  onRatingChange,
  readonly = false,
}: ProductRatingProps) {
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const isInteractive = !!onRatingChange;

  const currentRating = hoverRating || rating;
  const fullStars = Math.floor(currentRating);
  const hasHalfStar = currentRating % 1 >= 0.5;

  const handleClick = (index: number) => {
    if (readonly || !onRatingChange) return;
    onRatingChange(index + 1);
  };

  const handleMouseEnter = (index: number) => {
    if (readonly || !isInteractive) return;
    setHoverRating(index + 1);
  };

  const handleMouseLeave = () => {
    if (readonly || !isInteractive) return;
    setHoverRating(null);
  };

  return (
    <div className="flex items-center gap-2">
      <div
        role="radiogroup"
        aria-label="Product rating"
        className={cn("flex items-center", {
          "gap-1": variant === "compact",
          "gap-0.5": variant === "default",
        })}
      >
        {Array.from({ length: 5 }).map((_, index) => {
          const isFilled = index < fullStars;
          const isHalf = index === fullStars && hasHalfStar;
          const isActive = index <= (hoverRating ?? rating - 1);

          return (
            <Button
              key={index}
              variant="ghost"
              size={variant === "compact" ? "icon" : "default"}
              className={cn(
                "relative h-fit w-fit p-0.5",
                isInteractive && "cursor-pointer",
                readonly && "cursor-default"
              )}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              disabled={readonly || !isInteractive}
              aria-label={`Rate ${index + 1} out of 5`}
              tabIndex={readonly ? -1 : 0}
            >
              <div className="relative">
                {/* Empty Star */}
                <StarOff
                  className={cn(
                    "h-5 w-5",
                    variant === "default" && "h-6 w-6",
                    isActive ? "text-yellow-500/30" : "text-muted-foreground/30"
                  )}
                  aria-hidden
                />

                {/* Filled/Half Star */}
                <div
                  className={cn(
                    "absolute inset-0 overflow-hidden",
                    isHalf ? "w-1/2" : "w-full"
                  )}
                >
                  {isFilled || isHalf ? (
                    <Star
                      className={cn(
                        "h-5 w-5 fill-yellow-500 stroke-yellow-600",
                        variant === "default" && "h-6 w-6",
                        isActive && "opacity-100",
                        !isActive && "opacity-50"
                      )}
                      aria-hidden
                    />
                  ) : null}
                </div>
              </div>
            </Button>
          );
        })}
      </div>

      {variant === "default" && (
        <div className="flex items-center gap-2 text-sm">
          <span className="font-medium text-foreground">
            {rating.toFixed(1)}
          </span>
          <span className="text-muted-foreground">
            ({reviews.toLocaleString()} {reviews === 1 ? "review" : "reviews"})
          </span>
        </div>
      )}
    </div>
  );
}
