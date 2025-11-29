"use client";

import { ComputerDesktopIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeSwitcher({
  intent = "outline",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    let nextTheme: string;
    if (theme === "light") {
      nextTheme = "dark";
    } else if (theme === "dark") {
      nextTheme = "system";
    } else {
      nextTheme = "light";
    }
    setTheme(nextTheme);
  };

  const getThemeIcon = () => {
    switch (theme) {
      case "light":
        return <SunIcon />;
      case "dark":
        return <MoonIcon />;
      default:
        return <ComputerDesktopIcon />;
    }
  };

  return (
    <Button aria-label="Switch theme" intent={intent} size="sq-sm" onPress={toggleTheme} {...props}>
      {getThemeIcon()}
    </Button>
  );
}
