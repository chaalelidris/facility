import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface InputIconProps {
  textRight?: string;
  iconLeft?: React.ElementType;
  iconRight?: React.ElementType;
  placeholder?: string;
  isButtonRight?: boolean;
  buttonRightOnClick?: () => void;
  className?: string;
  type?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputIcon = ({
  textRight,
  iconLeft: IconLeft,
  iconRight: IconRight,
  isButtonRight,
  placeholder,
  className,
  type = "text",
  value,
  onChange,
}: InputIconProps) => {
  return (
    <div className={cn("relative", className)}>
      {IconLeft && (
        <IconLeft
          className="absolute left-3 top-2.5 h-5 w-5 fill-muted-foreground"
          variant="Outline"
        />
      )}
      <Input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className={cn(
          " border border-gray-200 !rounded-full focus-visible:ring-primary",
          { "pr-10": IconRight || isButtonRight || textRight },
          { "pl-10": IconLeft }
        )}
      />
      {!isButtonRight && IconRight && (
        <IconRight
          className="absolute right-3 top-2.5 h-5 w-5 fill-muted-foreground"
          variant="Outline"
        />
      )}

      {isButtonRight && IconRight && (
        <Button
          variant="ghost"
          className="absolute right-2 top-1 bottom-1 w-auto h-auto rounded-full"
        >
          <IconRight
            className="h-5 w-5 fill-muted-foreground"
            variant="Outline"
          />
        </Button>
      )}

      {textRight && (
        <span className="absolute right-3 top-3 text-muted-foreground text-xs">
          {textRight}
        </span>
      )}
    </div>
  );
};

export default InputIcon;
