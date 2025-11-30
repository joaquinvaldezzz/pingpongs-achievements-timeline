"use client";

import { useEffect, useState } from "react";
import { ComputerDesktopIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeSwitcher({
  intent = "outline",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const themeMap: Record<string, string> = {
      light: "dark",
      dark: "system",
      system: "light",
    };
    const nextTheme = themeMap[theme ?? "system"] || "light";
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
      {mounted ? getThemeIcon() : <ComputerDesktopIcon />}
    </Button>
  );
}
