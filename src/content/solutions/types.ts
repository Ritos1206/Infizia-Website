/**
 * Phase 5 — Shared content shape for industry solution pages.
 *
 * Each of the 10 verticals (sales, healthcare, hr-workforce,
 * customer-support, education, ecommerce, finance-operations,
 * intelligence-research, industrial-iot, media-publishing) supplies one
 * `SolutionContent` object. The page composes:
 *   1. SolutionHero        — bespoke per-vertical visual idiom
 *   2. SolutionPulse       — 4 industry-reality stats
 *   3. SolutionPainPoints  — 4 problem cards
 *   4. SolutionStack       — mapped Infizia products (D-57 card standard)
 *   5. SolutionUseCases    — 3 buyer personas
 *   6. SolutionOutcomes    — 4 measurable outcome tiles
 *   7. SolutionCTA         — Book a Demo + Corporate Brochure
 *
 * Voice rule (D-40): business-first language only. NO technology / vendor /
 * stack names exposed in any user-facing string here.
 */

import type { LucideIcon } from "lucide-react";
import type { ProductAccent } from "@/lib/product-accents";

/** A single industry-reality stat shown in the SolutionPulse strip. */
export type SolutionStat = {
  /** Headline value, e.g., "37%", "1 in 4", "₹14L", "120+" */
  value: string;
  /** One-line context for the stat */
  label: string;
  /** Source attribution / framing — kept generic so we don't cite specific reports */
  caption?: string;
};

/** A single pain-point card. */
export type SolutionPain = {
  /** Lucide icon for the card */
  icon: LucideIcon;
  /** Short headline of the pain (3-7 words) */
  title: string;
  /** 1-2 sentence body */
  body: string;
};

/** A buyer persona / use-case card. */
export type SolutionUseCase = {
  icon: LucideIcon;
  /** Persona / role name (e.g., "Mid-size hospitals") */
  title: string;
  /** What this persona gets from the solution (1-2 sentences) */
  body: string;
};

/** A single outcome tile (the post-deployment business result). */
export type SolutionOutcome = {
  icon: LucideIcon;
  /** Headline metric (e.g., "40% fewer no-shows", "3× faster ramp") */
  metric: string;
  /** Body explaining how the outcome is achieved */
  body: string;
};

/**
 * Mapped Infizia product reference. The page renders a D-57-standard card
 * for each entry, linking to `/products/<productSlug>`.
 *
 * `role` is a one-line description of WHY this product fits this vertical
 * (different from the product's own blurb — solution-specific framing).
 */
export type SolutionStackEntry = {
  /** Slug of the product in lib/constants.ts PRODUCTS */
  productSlug: string;
  /** Why this product fits this vertical (1 sentence) */
  role: string;
};

export type SolutionContent = {
  slug: string;
  /** Display name (e.g., "Healthcare", "HR & Workforce") */
  name: string;
  /** Long-form vertical name shown in the hero kicker */
  verticalLabel: string;
  /** Brand accent for this vertical */
  accent: ProductAccent;

  /** One short tagline shown right under the solution name in the hero */
  tagline: string;

  /** 2–3 sentence positioning paragraph for the hero */
  positioning: string;

  /** Industry-reality stat strip (4 items) */
  pulse: {
    kicker: string;
    title: string;
    lede?: string;
    items: SolutionStat[];
  };

  /** Pain-points section (4 cards) */
  pain: {
    kicker: string;
    title: string;
    lede: string;
    items: SolutionPain[];
  };

  /** Mapped Infizia products that solve this vertical (2–4 entries) */
  stack: {
    kicker: string;
    title: string;
    lede: string;
    entries: SolutionStackEntry[];
  };

  /** Buyer / persona cards (3) */
  useCases: {
    kicker: string;
    title: string;
    lede: string;
    items: SolutionUseCase[];
  };

  /** Outcome tiles (4) */
  outcomes: {
    kicker: string;
    title: string;
    lede: string;
    items: SolutionOutcome[];
  };
};
