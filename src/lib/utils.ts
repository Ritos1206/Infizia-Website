import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** Class-name composer for Tailwind. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format a number with thousands separators. */
export function formatNumber(n: number, locale = "en-US") {
  return new Intl.NumberFormat(locale).format(n);
}

/** Slugify a string for use in URLs. */
export function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
