import { cn } from "@/lib/utils";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";

interface ArrowButtonProps {
  direction: "left" | "right";
  onClick: () => void;
  disabled?: boolean; // Add a disabled prop for better control
}

const ArrowButton = ({ direction, onClick, disabled }: ArrowButtonProps) => {
  const Icon = direction === "left" ? ArrowLeft2 : ArrowRight2;

  return (
    <button
      onClick={onClick}
      aria-label={`Scroll ${direction === "left" ? "Left" : "Right"}`}
      className={cn(
        "z-10 p-2 bg-transparent transition-colors group",
        disabled && "cursor-not-allowed opacity-50"
      )}
      disabled={disabled}
    >
      <Icon
        className={cn(
          "fill-secondary-foreground w-6 h-6 group-hover:fill-primary group-hover:scale-110 transition-all",
          disabled && "fill-muted-foreground"
        )}
        variant="Outline"
      />
    </button>
  );
};

export default ArrowButton;
