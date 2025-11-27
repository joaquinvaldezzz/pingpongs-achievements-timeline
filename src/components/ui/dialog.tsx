"use client";

import { useEffect, useRef } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import {
  Heading,
  Button as PrimitiveButton,
  Dialog as PrimitiveDialog,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

import { cx } from "@/lib/primitive";

import type { HeadingProps, TextProps } from "react-aria-components";
import type { ButtonProps } from "./button";

import { Button } from "./button";

function Dialog({
  role = "dialog",
  className,
  ...props
}: React.ComponentProps<typeof PrimitiveDialog>) {
  return (
    <PrimitiveDialog
      className={twMerge(
        "peer/dialog group/dialog relative flex max-h-[inherit] flex-col overflow-hidden outline-hidden [--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]",
        className,
      )}
      data-slot="dialog"
      role={role}
      {...props}
    />
  );
}

function DialogTrigger({ className, ...props }: ButtonProps) {
  return <PrimitiveButton className={cx("cursor-pointer", className)} {...props} />;
}

interface DialogTitleProps extends HeadingProps {
  ref?: React.Ref<HTMLHeadingElement>;
}
function DialogTitle({ className, ref = undefined, ...props }: DialogTitleProps) {
  return (
    <Heading
      className={twMerge("text-lg/6 font-semibold text-balance text-fg sm:text-base/6", className)}
      ref={ref}
      slot="title"
      {...props}
    />
  );
}

interface DialogDescriptionProps extends TextProps {
  ref?: React.Ref<HTMLDivElement>;
}
function DialogDescription({ className, ref = undefined, ...props }: DialogDescriptionProps) {
  return (
    <p
      className={twMerge(
        "text-base/6 text-pretty text-muted-fg group-disabled:opacity-50 sm:text-sm/6",
        className,
      )}
      data-slot="description"
      ref={ref}
      {...props}
    />
  );
}

interface DialogHeaderProps extends Omit<React.ComponentProps<"div">, "title"> {
  title?: string;
  description?: string;
}

function DialogHeader({ className, ...props }: DialogHeaderProps) {
  const headerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (header == null) {
      return undefined;
    }

    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        header.parentElement?.style.setProperty(
          "--dialog-header-height",
          `${entry.target.clientHeight}px`,
        );
      });
    });

    observer.observe(header);
    return () => observer.unobserve(header);
  }, []);

  return (
    <div
      className={twMerge(
        "relative space-y-1 p-(--gutter) pb-[calc(var(--gutter)---spacing(3))]",
        className,
      )}
      data-slot="dialog-header"
      ref={headerRef}
    >
      {props.title ? <DialogTitle>{props.title}</DialogTitle> : null}
      {props.description ? <DialogDescription>{props.description}</DialogDescription> : null}
      {!props.title && typeof props.children === "string" ? (
        <DialogTitle {...props} />
      ) : (
        props.children
      )}
    </div>
  );
}

type DialogBodyProps = React.ComponentProps<"div">;

function DialogBody({ className, ref, ...props }: DialogBodyProps) {
  return (
    <div
      className={twMerge(
        "isolate flex max-h-[calc(var(--visual-viewport-height)-var(--visual-viewport-vertical-padding)-var(--dialog-header-height,0px)-var(--dialog-footer-height,0px))] flex-1 flex-col overflow-auto px-(--gutter) py-1",
        "**:data-[slot=dialog-footer]:px-0 **:data-[slot=dialog-footer]:pt-0",
        className,
      )}
      data-slot="dialog-body"
      ref={ref}
      {...props}
    />
  );
}

type DialogFooterProps = React.ComponentProps<"div">;

function DialogFooter({ className, ...props }: DialogFooterProps) {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = footerRef.current;

    if (footer == null) {
      return undefined;
    }

    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        footer.parentElement?.style.setProperty(
          "--dialog-footer-height",
          `${entry.target.clientHeight}px`,
        );
      });
    });

    observer.observe(footer);
    return () => {
      observer.unobserve(footer);
    };
  }, []);
  return (
    <div
      className={twMerge(
        "isolate mt-auto flex flex-col-reverse justify-end gap-3 p-(--gutter) pt-[calc(var(--gutter)---spacing(3))] group-not-has-data-[slot=dialog-body]/dialog:pt-0 group-not-has-data-[slot=dialog-body]/popover:pt-0 sm:flex-row",
        className,
      )}
      data-slot="dialog-footer"
      ref={footerRef}
      {...props}
    />
  );
}

function DialogClose({ intent = "plain", ref, ...props }: ButtonProps) {
  return <Button intent={intent} ref={ref} slot="close" {...props} />;
}

interface CloseButtonIndicatorProps extends Omit<ButtonProps, "children"> {
  className?: string;
  isDismissable?: boolean | undefined;
}

function DialogCloseIcon({ className = undefined, ...props }: CloseButtonIndicatorProps) {
  return props.isDismissable ? (
    <PrimitiveButton
      className={cx(
        "close absolute top-1 right-1 z-50 grid size-8 place-content-center rounded-xl hover:bg-secondary focus:bg-secondary focus:outline-hidden focus-visible:ring-1 focus-visible:ring-primary sm:top-2 sm:right-2 sm:size-7 sm:rounded-md",
        className,
      )}
      aria-label="Close"
      slot="close"
    >
      <XMarkIcon className="size-4" />
    </PrimitiveButton>
  ) : null;
}

export {
  Dialog,
  DialogBody,
  DialogClose,
  DialogCloseIcon,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
};
export type {
  CloseButtonIndicatorProps,
  DialogBodyProps,
  DialogDescriptionProps,
  DialogFooterProps,
  DialogHeaderProps,
  DialogTitleProps,
};
