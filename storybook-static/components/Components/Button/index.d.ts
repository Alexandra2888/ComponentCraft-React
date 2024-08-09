import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from '../../../../node_modules/react';

declare const buttonStyles: (props?: ({
    variant?: "solid" | "outline" | "ghost" | null | undefined;
    size?: "sm" | "md" | "xl" | null | undefined;
    colorscheme?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "dark" | "light" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;
export declare const Button: import('../../../../node_modules/react').ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & import('../../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
export {};
