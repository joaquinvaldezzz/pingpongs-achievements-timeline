import localFont from "next/font/local";

import { cn } from "@/lib/utils";

import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Providers } from "./providers";

import "../styles/main.css";

export const baseURL = "https://pingpongs-timeline.vercel.app/";
export const title = "OT7 Pingpongs' Achievements Timeline";
export const description =
  "Track the academic and professional accomplishments of OT7 Pingpongs with this achievement timeline.";

export const metadata: Metadata = {
  metadataBase: new URL(baseURL),
  title: {
    default: title,
    template: "%s | 0T7 Pingpongs",
  },
  description,
  applicationName: "OT7 Pingpongs' Achievements Timeline",
  authors: [{ name: "John Joaquin A. Valdez" }],
  creator: "John Joaquin A. Valdez",
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
    <html className={cn(inter.variable)} lang="en" suppressHydrationWarning>
      <body className="min-w-80 bg-background text-pretty text-foreground slashed-zero antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
