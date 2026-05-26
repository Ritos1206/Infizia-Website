/**
 * Per-product brand accent system.
 *
 * Tailwind v4 uses runtime classes, so dynamic class names like `bg-${accent}`
 * don't work — we map each accent to a full set of static class strings.
 *
 * Add new accents here and they become available across all product page
 * components.
 */

export type ProductAccent =
  | "teal"
  | "green"
  | "blue"
  | "indigo"
  | "amber"
  | "violet";

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
  indigo: {
    text: "text-brand-indigo",
    bg: "bg-brand-indigo",
    bgSoft: "bg-brand-indigo/10",
    border: "border-brand-indigo/30",
    glow: "bg-brand-indigo/[0.10]",
    shadow: "shadow-glow-indigo",
    topLine: "from-brand-indigo/60 via-brand-indigo/0 to-brand-indigo/0",
    hoverBorder: "hover:border-brand-indigo/40",
    stepPill: "bg-brand-indigo/15 text-brand-indigo border-brand-indigo/30",
    progressFrom: "from-brand-indigo",
    progressTo: "to-brand-blue",
  },
  amber: {
    text: "text-brand-amber",
    bg: "bg-brand-amber",
    bgSoft: "bg-brand-amber/10",
    border: "border-brand-amber/30",
    glow: "bg-brand-amber/[0.10]",
    shadow: "shadow-glow-amber",
    topLine: "from-brand-amber/60 via-brand-amber/0 to-brand-amber/0",
    hoverBorder: "hover:border-brand-amber/40",
    stepPill: "bg-brand-amber/15 text-brand-amber border-brand-amber/30",
    progressFrom: "from-brand-amber",
    progressTo: "to-brand-indigo",
  },
  violet: {
    text: "text-brand-violet",
    bg: "bg-brand-violet",
    bgSoft: "bg-brand-violet/10",
    border: "border-brand-violet/30",
    glow: "bg-brand-violet/[0.10]",
    shadow: "shadow-glow-violet",
    topLine: "from-brand-violet/60 via-brand-violet/0 to-brand-violet/0",
    hoverBorder: "hover:border-brand-violet/40",
    stepPill: "bg-brand-violet/15 text-brand-violet border-brand-violet/30",
    progressFrom: "from-brand-violet",
    progressTo: "to-brand-indigo",
  },
};
