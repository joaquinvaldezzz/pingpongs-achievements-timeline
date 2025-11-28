import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import type { ClassValue } from "clsx";
import type { ReactNode } from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(timestamp: string) {
  const date = new Date(timestamp);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

interface Achievement {
  title: string;
  content: ReactNode[];
}

export async function getAchievements(): Promise<Achievement[]> {
  try {
    const achievementModule = await import("../app/achievements.mdx");
    const component = achievementModule.default({});
    const children = Array.isArray(component.props.children)
      ? component.props.children
      : [component.props.children];

    const achievements: Achievement[] = [];
    let currentTitle: string | null = null;
    let currentContent: ReactNode[] = [];

    children.forEach((child: ReactNode) => {
      // Skip whitespace-only strings
      if (typeof child === "string" && child.trim() === "") {
        return;
      }

      // Check if it's an h2 heading
      if (
        typeof child === "object" &&
        child !== null &&
        "type" in child &&
        child.type === "h2" &&
        "props" in child
      ) {
        // Save previous achievement if exists
        if (currentTitle !== null) {
          achievements.push({
            title: currentTitle,
            content: currentContent,
          });
        }

        // Start new achievement
        currentTitle = (child as { props: { children: string } }).props.children;
        currentContent = [];
      } else if (currentTitle !== null) {
        // Add content to current achievement
        currentContent.push(child);
      }
    });

    // Add last achievement
    if (currentTitle !== null) {
      achievements.push({
        title: currentTitle,
        content: currentContent,
      });
    }

    return achievements;
  } catch {
    return [];
  }
}
