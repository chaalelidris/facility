"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface SelectBoxProps {
  options: { value: string; label: string; icon?: React.ReactNode }[];
  defaultValue?: "en" | "fr" | "ar" | string;
  placeholder?: string;
  className?: string;
}

const SelectBox = ({
  options,
  defaultValue,
  placeholder = "Select an option",
  className,
}: SelectBoxProps) => {
  return (
    <div className={cn("", className)}>
      <Select defaultValue={defaultValue}>
        <SelectTrigger className="rounded-full flex-shrink-0 ">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.icon && (
                <span className="inline mr-2">{option.icon}</span>
              )}
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectBox;
