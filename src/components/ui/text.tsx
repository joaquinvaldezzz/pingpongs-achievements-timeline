import { twMerge } from "tailwind-merge";

export function Text({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={twMerge("text-base/6 text-muted-fg sm:text-sm/6", className)}
      data-slot="text"
      {...props}
    />
  );
}

export default Text;
