"use client";

import {
  FieldError as FieldErrorPrimitive,
  Label as LabelPrimitive,
  Text,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

import { cx } from "@/lib/primitive";

import type { FieldErrorProps, LabelProps, TextProps } from "react-aria-components";

export const labelStyles = tv({
  base: "text-base/6 text-fg select-none group-disabled:opacity-50 in-disabled:opacity-50 sm:text-sm/6",
});

export const descriptionStyles = tv({
  base: "block text-sm/6 text-muted-fg group-disabled:opacity-50 in-disabled:opacity-50",
});

export const fieldErrorStyles = tv({
  base: "block text-sm/6 text-danger-subtle-fg group-disabled:opacity-50 in-disabled:opacity-50 forced-colors:text-[Mark]",
});

export const fieldStyles = tv({
  base: [
    "w-full",
    "[&>[data-slot=label]+[data-slot=control]]:mt-2",
    "[&>[data-slot=label]+[data-slot=control]]:mt-2",
    "[&>[data-slot=label]+[slot='description']]:mt-1",
    "[&>[slot='description']+[data-slot=control]]:mt-2",
    "[&>[data-slot=control]+[slot=description]]:mt-2",
    "[&>[data-slot=control]+[slot=errorMessage]]:mt-2",
    "*:data-[slot=label]:font-medium",
  ],
});

function Label({ className, ...props }: LabelProps) {
  return <LabelPrimitive data-slot="label" {...props} className={labelStyles({ className })} />;
}

function Description({ className, ...props }: TextProps) {
  // eslint-disable-next-line jsx-a11y/heading-has-content
  return <Text className={descriptionStyles({ className })} slot="description" {...props} />;
}

function FieldError({ className, ...props }: FieldErrorProps) {
  return <FieldErrorPrimitive className={cx(fieldErrorStyles(), className)} {...props} />;
}

function Fieldset({ className, ...props }: React.ComponentProps<"fieldset">) {
  return (
    <fieldset
      className={twMerge("*:data-[slot=text]:mt-1 [&>*+[data-slot=control]]:mt-6", className)}
      {...props}
    />
  );
}

function Legend({ className, ...props }: React.ComponentProps<"legend">) {
  return (
    <legend
      className={twMerge("text-base/6 font-semibold data-disabled:opacity-50", className)}
      data-slot="legend"
      {...props}
    />
  );
}

export { Description, FieldError, Fieldset, Label, Legend };
