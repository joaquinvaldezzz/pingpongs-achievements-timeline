import { IBM_Plex_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import type { Metadata } from "next";
import type { ReactNode } from "react";

import "../styles/main.css";

export const baseURL = "https://joaquinvaldez-me.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(baseURL),
  title: {
    default: "John Joaquin Valdez",
    template: "%s | John Joaquin Valdez",
  },
  description: "I'm cooking something, hold on.",
  openGraph: {
    title: "John Joaquin Valdez",
    description: "I'm cooking something, hold on.",
    url: baseURL,
    siteName: "John Joaquin Valdez",
    locale: "en-US",
    type: "website",
  },
};

const ibmPlexSans = IBM_Plex_Sans({
  weight: "variable",
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className={ibmPlexSans.variable} lang="en">
      <body className="min-w-80 bg-background text-foreground antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
