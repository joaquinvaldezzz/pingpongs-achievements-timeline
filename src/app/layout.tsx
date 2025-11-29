import localFont from "next/font/local";

import type { Metadata } from "next";
import type { ReactNode } from "react";

import "../styles/main.css";

import { cn } from "@/lib/utils";

export const baseURL = "https://pingpongs-timeline.vercel.app/";
export const title = "Achievements Timeline";
export const description = "Pingpongs' Achievements Timeline since Graduation 2025.";

export const metadata: Metadata = {
  metadataBase: new URL(baseURL),
  title: {
    default: title,
    template: "%s | John Joaquin Valdez",
  },
  description,
  openGraph: {
    title,
    description,
    url: baseURL,
    siteName: title,
    locale: "en-US",
    type: "website",
  },
};

const inter = localFont({
  src: [
    {
      path: "./fonts/InterVariable.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./fonts/InterVariable-Italic.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-inter",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className={cn(inter.variable)} lang="en">
      <body className="min-w-80 bg-background text-balance text-foreground slashed-zero antialiased">
        {children}
      </body>
    </html>
  );
}
