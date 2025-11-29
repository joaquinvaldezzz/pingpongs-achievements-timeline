"use client";

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";

import type { ThemeProviderProps } from "next-themes";

function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider storageKey="intentui-theme" enableSystem {...props}>
      {children}
    </NextThemesProvider>
  );
}

export { ThemeProvider, useTheme };
