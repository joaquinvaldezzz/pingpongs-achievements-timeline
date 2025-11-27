import { Keyboard as KeyboardPrimitive } from "react-aria-components";
import { twMerge } from "tailwind-merge";

type KeyboardProps = React.ComponentProps<typeof KeyboardPrimitive>;

function Keyboard({ className, ...props }: KeyboardProps) {
  return (
    <KeyboardPrimitive
      className={twMerge(
        "forced-colors:group-focus:text-[HighlightText hidden font-mono text-[0.80rem]/6 text-current/60 group-hover:text-fg group-focus:text-fg group-focus:opacity-90 group-disabled:opacity-50 lg:inline",
        className,
      )}
      data-slot="keyboard"
      {...props}
    />
  );
}

export { Keyboard };
export type { KeyboardProps };
