"use client";

import { TextField as TextFieldPrimitive } from "react-aria-components";

import { cx } from "@/lib/primitive";

import type { TextFieldProps } from "react-aria-components";

import { fieldStyles } from "./field";

export function TextField({ className, ...props }: TextFieldProps) {
  return (
    <TextFieldPrimitive className={cx(fieldStyles(), className)} data-slot="control" {...props} />
  );
}

export default TextField;
