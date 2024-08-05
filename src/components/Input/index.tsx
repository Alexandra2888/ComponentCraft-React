import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const inputStyles = cva([
  "w-full",
  "border",
  "border-gray-200",
  "p-2",
  "rounded-lg",
  "transition-all",
  "duration-100",
  "outline-none",
  "focus:outline-primary-500",
  "focus:border-transparent",
  "placeholder:text-gray-400",
  "placeholder:text-sm",
]);

type InputProps = ComponentProps<"input"> &
  VariantProps<typeof inputStyles> & {
    src?: string;
  };

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, src, ...props }, ref) => {
    return (
      <input
        ref={ref}
        autoComplete="off"
        className={cn(inputStyles({ className }))}
        src={src}
        {...props}
      />
    );
  }
);
