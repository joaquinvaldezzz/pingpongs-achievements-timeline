"use client";

import {
  Button,
  composeRenderProps,
  OverlayArrow,
  Tooltip as TooltipPrimitive,
  TooltipTrigger as TooltipTriggerPrimitive,
} from "react-aria-components";
import { tv } from "tailwind-variants";

import { cn } from "@/lib/utils";

import type { TooltipProps as TooltipPrimitiveProps } from "react-aria-components";
import type { VariantProps } from "tailwind-variants";

const tooltipStyles = tv({
  base: [
    "group origin-(--trigger-anchor-point) rounded-lg border border-(--tooltip-border) px-2.5 py-1.5 text-sm/6 will-change-transform [--tooltip-border:var(--color-muted-fg)]/30 dark:shadow-none *:[strong]:font-medium",
  ],
  variants: {
    inverse: {
      true: ["border-transparent bg-fg text-bg", "**:[.text-muted-fg]:text-bg/60"],
      false: "bg-overlay text-overlay-fg",
    },
    isEntering: {
      true: [
        "animate-in fade-in",
        "placement-left:slide-in-from-right-1 placement-right:slide-in-from-left-1 placement-top:slide-in-from-bottom-1 placement-bottom:slide-in-from-top-1",
      ],
    },
    isExiting: {
      true: [
        "animate-in direction-reverse fade-in",
        "placement-left:slide-out-to-right-1 placement-right:slide-out-to-left-1 placement-top:slide-out-to-bottom-1 placement-bottom:slide-out-to-top-1",
      ],
    },
  },
  defaultVariants: {
    inverse: false,
  },
});

type TooltipProps = React.ComponentProps<typeof TooltipTriggerPrimitive>;

function Tooltip(props: TooltipProps) {
  return <TooltipTriggerPrimitive {...props} />;
}

interface TooltipContentProps
  extends Omit<TooltipPrimitiveProps, "children">, VariantProps<typeof tooltipStyles> {
  arrow?: boolean;
  children?: React.ReactNode;
}

function TooltipContent({
  offset = 10,
  arrow = true,
  inverse,
  children = undefined,
  ...props
}: TooltipContentProps) {
  return (
    <TooltipPrimitive
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tooltipStyles({
          ...renderProps,
          inverse,
          className,
        }),
      )}
      offset={offset}
    >
      {arrow ? (
        <OverlayArrow className="group">
          <svg
            // inverse
            className={cn(
              "block group-placement-left:-rotate-90 group-placement-right:rotate-90 group-placement-bottom:rotate-180 forced-colors:fill-[Canvas] forced-colors:stroke-[ButtonBorder]",
              inverse ? "fill-fg stroke-transparent" : "fill-overlay stroke-(--tooltip-border)",
            )}
            width={12}
            height={12}
            viewBox="0 0 12 12"
          >
            <path d="M0 0 L6 6 L12 0" />
          </svg>
        </OverlayArrow>
      ) : null}
      {children}
    </TooltipPrimitive>
  );
}

const TooltipTrigger = Button;

export { Tooltip, TooltipContent, TooltipTrigger };
export type { TooltipContentProps, TooltipProps };
