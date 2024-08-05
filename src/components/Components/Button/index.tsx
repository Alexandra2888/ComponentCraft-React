import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const buttonStyles = cva(
  [
    "w-full",
    "rounded-md",
    "font-semibold",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
    "transition-colors",
  ],
  {
    variants: {
      variant: {
        solid: "",
        outline: "border-2",
        ghost: "transition-colors duration-300",
      },
      size: {
        sm: "px-4 py-2 text-xs",
        md: "px-4 py-2 text-base",
        xl: "px-6 py-2 text-lg",
      },
      colorscheme: {
        primary: "",
        secondary: "",
        success: "",
        danger: "",
        warning: "",
        info: "",
        dark: "",
        light: "",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        colorscheme: "primary",
        className: "bg-primary-500 text-white hover:bg-primary-600",
      },
      {
        variant: "solid",
        colorscheme: "secondary",
        className: "bg-gray-600 text-white hover:bg-gray-700",
      },
      {
        variant: "solid",
        colorscheme: "success",
        className: "bg-green-600 text-white hover:bg-green-700",
      },
      {
        variant: "solid",
        colorscheme: "danger",
        className: "bg-red-600 text-white hover:bg-red-700",
      },
      {
        variant: "solid",
        colorscheme: "warning",
        className: "bg-yellow-600 text-white hover:bg-yellow-700",
      },
      {
        variant: "solid",
        colorscheme: "info",
        className: "bg-cyan-600 text-white hover:bg-cyan-700",
      },
      {
        variant: "solid",
        colorscheme: "light",
        className: "bg-gray-100 text-black hover:bg-gray-200",
      },
      {
        variant: "solid",
        colorscheme: "dark",
        className: "bg-black text-white hover:bg-gray-800",
      },

      {
        variant: "outline",
        colorscheme: "primary",
        className:
          "text-primary-600 border-primary-500 bg-transparent hover:bg-primary-100",
      },
      {
        variant: "outline",
        colorscheme: "secondary",
        className:
          "text-gray-600 border-gray-500 bg-transparent hover:bg-gray-100",
      },
      {
        variant: "outline",
        colorscheme: "success",
        className:
          "text-green-600 border-green-500 bg-transparent hover:bg-green-100",
      },
      {
        variant: "outline",
        colorscheme: "danger",
        className:
          "text-red-600 border-red-500 bg-transparent hover:bg-red-100",
      },
      {
        variant: "outline",
        colorscheme: "warning",
        className:
          "text-yellow-600 border-yellow-500 bg-transparent hover:bg-yellow-100",
      },
      {
        variant: "outline",
        colorscheme: "info",
        className:
          "text-cyan-600 border-cyan-500 bg-transparent hover:bg-cyan-100",
      },
      {
        variant: "outline",
        colorscheme: "light",
        className:
          "text-black  bg-transparent hover:bg-gray-200 border-gray-100",
      },

      {
        variant: "outline",
        colorscheme: "dark",
        className: "text-black border-black bg-transparent hover:bg-gray-200",
      },

      {
        variant: "ghost",
        colorscheme: "primary",
        className: "text-primary-600 bg-transparent hover:bg-primary-100",
      },
      {
        variant: "ghost",
        colorscheme: "secondary",
        className: "text-gray-600 bg-transparent hover:bg-gray-100",
      },
      {
        variant: "ghost",
        colorscheme: "success",
        className: "text-green-600 bg-transparent hover:bg-green-100",
      },
      {
        variant: "ghost",
        colorscheme: "danger",
        className: "text-red-600 bg-transparent hover:bg-red-100",
      },
      {
        variant: "ghost",
        colorscheme: "warning",
        className: "text-yellow-600 bg-transparent hover:bg-yellow-100",
      },
      {
        variant: "ghost",
        colorscheme: "info",
        className: "text-cyan-600 bg-transparent hover:bg-cyan-100",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      colorscheme: "primary",
    },
  }
);

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, colorscheme, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonStyles({ variant, size, colorscheme, className }))}
        {...props}
      />
    );
  }
);
