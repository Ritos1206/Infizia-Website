/**
 * Per-product brand accent system.
 *
 * Tailwind v4 uses runtime classes, so dynamic class names like `bg-${accent}`
 * don't work — we map each accent to a full set of static class strings.
 *
 * Add new accents here and they become available across all product page
 * components.
 */

export type ProductAccent = "teal" | "green" | "blue";

export type AccentTheme = {
  /** Solid text color (e.g., headings, link arrows) */
  text: string;
  /** Solid background (rare — usually used for small dots) */
  bg: string;
  /** Soft tinted background (10% opacity) */
  bgSoft: string;
  /** Tinted border */
  border: string;
  /** Ambient glow blob backdrop */
  glow: string;
  /** Box shadow ring (matches design system tokens) */
  shadow: string;
  /** Top-edge gradient line for cards */
  topLine: string;
  /** Hover ring color */
  hoverBorder: string;
  /** Numeric step pill */
  stepPill: string;
  /** Glow on scrolled-progress fill */
  progressFrom: string;
  progressTo: string;
};

export const ACCENTS: Record<ProductAccent, AccentTheme> = {
  teal: {
    text: "text-brand-teal",
    bg: "bg-brand-teal",
    bgSoft: "bg-brand-teal/10",
    border: "border-brand-teal/30",
    glow: "bg-brand-teal/[0.08]",
    shadow: "shadow-glow-teal",
    topLine: "from-brand-teal/60 via-brand-teal/0 to-brand-teal/0",
    hoverBorder: "hover:border-brand-teal/40",
    stepPill: "bg-brand-teal/15 text-brand-teal border-brand-teal/30",
    progressFrom: "from-brand-teal",
    progressTo: "to-brand-blue",
  },
  green: {
    text: "text-brand-green",
    bg: "bg-brand-green",
    bgSoft: "bg-brand-green/10",
    border: "border-brand-green/30",
    glow: "bg-brand-green/[0.08]",
    shadow: "shadow-glow-green",
    topLine: "from-brand-green/60 via-brand-green/0 to-brand-green/0",
    hoverBorder: "hover:border-brand-green/40",
    stepPill: "bg-brand-green/15 text-brand-green border-brand-green/30",
    progressFrom: "from-brand-green",
    progressTo: "to-brand-teal",
  },
  blue: {
    text: "text-brand-blue",
    bg: "bg-brand-blue",
    bgSoft: "bg-brand-blue/10",
    border: "border-brand-blue/30",
    glow: "bg-brand-blue/[0.08]",
    shadow: "shadow-glow-blue",
    topLine: "from-brand-blue/60 via-brand-blue/0 to-brand-blue/0",
    hoverBorder: "hover:border-brand-blue/40",
    stepPill: "bg-brand-blue/15 text-brand-blue border-brand-blue/30",
    progressFrom: "from-brand-blue",
    progressTo: "to-brand-teal",
  },
};
