import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import type { Metadata } from "next";
import type { ReactNode } from "react";

import "../styles/main.css";

export const baseURL = "https://pingpongs-timeline.vercel.app/";
export const title = "Achievements Timeline";
export const description = "Pingpong's Achievements Timeline since Graduation 2025.";

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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-w-80 bg-background text-foreground antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
