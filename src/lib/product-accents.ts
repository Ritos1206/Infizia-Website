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
  | "violet"
  | "rose"
  | "fuchsia"
  | "orange"
  | "lime"
  | "cyan"
  | "sky"
  | "emerald";

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
  rose: {
    text: "text-brand-rose",
    bg: "bg-brand-rose",
    bgSoft: "bg-brand-rose/10",
    border: "border-brand-rose/30",
    glow: "bg-brand-rose/[0.10]",
    shadow: "shadow-glow-rose",
    topLine: "from-brand-rose/60 via-brand-rose/0 to-brand-rose/0",
    hoverBorder: "hover:border-brand-rose/40",
    stepPill: "bg-brand-rose/15 text-brand-rose border-brand-rose/30",
    progressFrom: "from-brand-rose",
    progressTo: "to-brand-violet",
  },
  fuchsia: {
    text: "text-brand-fuchsia",
    bg: "bg-brand-fuchsia",
    bgSoft: "bg-brand-fuchsia/10",
    border: "border-brand-fuchsia/30",
    glow: "bg-brand-fuchsia/[0.10]",
    shadow: "shadow-glow-fuchsia",
    topLine: "from-brand-fuchsia/60 via-brand-fuchsia/0 to-brand-fuchsia/0",
    hoverBorder: "hover:border-brand-fuchsia/40",
    stepPill: "bg-brand-fuchsia/15 text-brand-fuchsia border-brand-fuchsia/30",
    progressFrom: "from-brand-fuchsia",
    progressTo: "to-brand-violet",
  },
  orange: {
    text: "text-brand-orange",
    bg: "bg-brand-orange",
    bgSoft: "bg-brand-orange/10",
    border: "border-brand-orange/30",
    glow: "bg-brand-orange/[0.10]",
    shadow: "shadow-glow-orange",
    topLine: "from-brand-orange/60 via-brand-orange/0 to-brand-orange/0",
    hoverBorder: "hover:border-brand-orange/40",
    stepPill: "bg-brand-orange/15 text-brand-orange border-brand-orange/30",
    progressFrom: "from-brand-orange",
    progressTo: "to-brand-amber",
  },
  lime: {
    text: "text-brand-lime",
    bg: "bg-brand-lime",
    bgSoft: "bg-brand-lime/10",
    border: "border-brand-lime/30",
    glow: "bg-brand-lime/[0.10]",
    shadow: "shadow-glow-lime",
    topLine: "from-brand-lime/60 via-brand-lime/0 to-brand-lime/0",
    hoverBorder: "hover:border-brand-lime/40",
    stepPill: "bg-brand-lime/15 text-brand-lime border-brand-lime/30",
    progressFrom: "from-brand-lime",
    progressTo: "to-brand-green",
  },
  cyan: {
    text: "text-brand-cyan",
    bg: "bg-brand-cyan",
    bgSoft: "bg-brand-cyan/10",
    border: "border-brand-cyan/30",
    glow: "bg-brand-cyan/[0.10]",
    shadow: "shadow-glow-cyan",
    topLine: "from-brand-cyan/60 via-brand-cyan/0 to-brand-cyan/0",
    hoverBorder: "hover:border-brand-cyan/40",
    stepPill: "bg-brand-cyan/15 text-brand-cyan border-brand-cyan/30",
    progressFrom: "from-brand-cyan",
    progressTo: "to-brand-sky",
  },
  sky: {
    text: "text-brand-sky",
    bg: "bg-brand-sky",
    bgSoft: "bg-brand-sky/10",
    border: "border-brand-sky/30",
    glow: "bg-brand-sky/[0.10]",
    shadow: "shadow-glow-sky",
    topLine: "from-brand-sky/60 via-brand-sky/0 to-brand-sky/0",
    hoverBorder: "hover:border-brand-sky/40",
    stepPill: "bg-brand-sky/15 text-brand-sky border-brand-sky/30",
    progressFrom: "from-brand-sky",
    progressTo: "to-brand-cyan",
  },
  emerald: {
    text: "text-brand-emerald",
    bg: "bg-brand-emerald",
    bgSoft: "bg-brand-emerald/10",
    border: "border-brand-emerald/30",
    glow: "bg-brand-emerald/[0.10]",
    shadow: "shadow-glow-emerald",
    topLine: "from-brand-emerald/60 via-brand-emerald/0 to-brand-emerald/0",
    hoverBorder: "hover:border-brand-emerald/40",
    stepPill: "bg-brand-emerald/15 text-brand-emerald border-brand-emerald/30",
    progressFrom: "from-brand-emerald",
    progressTo: "to-brand-green",
  },
};
