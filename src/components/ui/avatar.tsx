import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface AvatarProps extends React.ComponentPropsWithoutRef<typeof Image> {
  initials?: string;
  isSquare?: boolean;
  size?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl";
}

function Avatar({
  src = "",
  isSquare = false,
  size = "md",
  initials = undefined,
  alt = "",
  className = undefined,
  width,
  height,
  ...props
}: AvatarProps & React.ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={twMerge(
        "relative isolate inline-grid size-(--avatar-size) shrink-0 align-middle outline-1 -outline-offset-1 outline-fg/(--ring-opacity) [--avatar-radius:20%] [--ring-opacity:20%] *:col-start-1 *:row-start-1 *:size-(--avatar-size)",
        size === "xs" && "[--avatar-size:--spacing(5)]",
        size === "sm" && "[--avatar-size:--spacing(6)]",
        size === "md" && "[--avatar-size:--spacing(8)]",
        size === "lg" && "[--avatar-size:--spacing(10)]",
        size === "xl" && "[--avatar-size:--spacing(12)]",
        size === "2xl" && "[--avatar-size:--spacing(14)]",
        size === "3xl" && "[--avatar-size:--spacing(16)]",
        size === "4xl" && "[--avatar-size:--spacing(20)]",
        size === "5xl" && "[--avatar-size:--spacing(24)]",
        size === "6xl" && "[--avatar-size:--spacing(28)]",
        size === "7xl" && "[--avatar-size:--spacing(32)]",
        size === "8xl" && "[--avatar-size:--spacing(36)]",
        size === "9xl" && "[--avatar-size:--spacing(32)]",
        isSquare
          ? "rounded-(--avatar-radius) *:rounded-(--avatar-radius)"
          : "rounded-full *:rounded-full",
        className,
      )}
      data-slot="avatar"
    >
      {initials ? (
        <svg
          className="font-md size-full fill-current p-[5%] text-[48px]/none uppercase select-none"
          aria-hidden={alt ? undefined : "true"}
          viewBox="0 0 100 100"
        >
          {alt ? <title>{alt}</title> : null}
          <text
            alignmentBaseline="middle"
            dominantBaseline="middle"
            dy=".125em"
            textAnchor="middle"
            x="50%"
            y="50%"
          >
            {initials}
          </text>
        </svg>
      ) : null}
      {src ? (
        <Image
          className="size-full object-cover object-center"
          width={width}
          src={src}
          alt={alt}
          height={height}
          fill
          {...props}
        />
      ) : null}
    </span>
  );
}

export { Avatar };
export type { AvatarProps };
