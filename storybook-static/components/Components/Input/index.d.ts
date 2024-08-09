import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from '../../../../node_modules/react';

declare const inputStyles: (props?: import('class-variance-authority/types').ClassProp | undefined) => string;
type InputProps = ComponentProps<"input"> & VariantProps<typeof inputStyles> & {
    src?: string;
    id: string;
};
export declare const Input: import('../../../../node_modules/react').ForwardRefExoticComponent<Omit<InputProps, "ref"> & import('../../../../node_modules/react').RefAttributes<HTMLInputElement>>;
export {};
