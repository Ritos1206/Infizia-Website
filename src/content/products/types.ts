/**
 * Shared content shape for flagship product pages.
 *
 * Each flagship product (EyeCON, VitaCare) supplies a `FlagshipProductContent`
 * object that drives every section of its page. This is also the canonical
 * source for the matching PPT/brochure deck — keep DEVLOG.md in sync.
 */

import type { LucideIcon } from "lucide-react";
import type { ProductAccent } from "@/lib/product-accents";

export type FlagshipFeature = {
  /** Lucide icon component for the feature card */
  icon: LucideIcon;
  /** Headline of the feature (3–6 words) */
  title: string;
  /** Body copy — 1–2 sentences, business language only */
  body: string;
};

export type FlagshipFlowStep = {
  /** Step number as a 2-digit string ("01", "02", …) */
  n: string;
  /** Step title (3–6 words) */
  title: string;
  /** What happens in this step (1 sentence, plain English) */
  body: string;
  /** Lucide icon for the step badge */
  icon: LucideIcon;
};

export type FlagshipUseCase = {
  /** Buyer persona name */
  title: string;
  /** Why EyeCON/VitaCare maps to this persona */
  body: string;
  /** Lucide icon for the persona card */
  icon: LucideIcon;
};

export type FlagshipCaseStudy = {
  /** Short framing line — e.g., "A 30-rep B2B SaaS team replaced four tools with EyeCON." */
  intro: string;
  /** 2–4 stat cards — value + label */
  stats: { value: string; label: string }[];
};

/**
 * Slimmer content shape for non-flagship product pages (Phase 4).
 *
 * Drops the flagship-only sections (`flow`, `caseStudy`) since standard
 * products express their narrative through their bespoke visual rather than
 * a scroll-pinned 5-step flow + a case study.
 *
 * The features list reuses `FlagshipFeature` (icon + title + body) — the
 * shape is identical; only the count is typically smaller (5–8 items).
 *
 * Each standard product also surfaces its own bespoke visual element via
 * the page composition; the content type doesn't constrain that.
 */
export type StandardProductContent = {
  slug: string;
  name: string;
  vertical: string;
  accent: ProductAccent;

  /** One short tagline shown in the hero */
  tagline: string;

  /** 2–3 sentence positioning paragraph */
  positioning: string;

  /** Problem statement — 3–4 sentences, sets up the wedge */
  problem: {
    kicker: string;
    title: string;
    body: string;
  };

  /** Features grid — 5–8 features */
  features: {
    kicker: string;
    title: string;
    lede: string;
    items: FlagshipFeature[];
  };

  /** Use case / target buyer cards (2–3) */
  useCases: {
    kicker: string;
    title: string;
    lede: string;
    items: FlagshipUseCase[];
  };
};

export type FlagshipProductContent = {
  slug: string;
  name: string;
  vertical: string;
  accent: ProductAccent;

  /** One short tagline shown right under the product name in the hero */
  tagline: string;

  /** 2–3 sentence positioning paragraph */
  positioning: string;

  /** Problem statement — 3–4 sentences, sets up the wedge */
  problem: {
    kicker: string;
    title: string;
    body: string;
  };

  /** 5-step canonical flow — drives the scroll-animated journey section */
  flow: {
    kicker: string;
    title: string;
    lede: string;
    steps: FlagshipFlowStep[];
  };

  /** Features grid — 6 or 7 features, business language */
  features: {
    kicker: string;
    title: string;
    lede: string;
    items: FlagshipFeature[];
  };

  /** Use case / target buyer cards (3) */
  useCases: {
    kicker: string;
    title: string;
    lede: string;
    items: FlagshipUseCase[];
  };

  /** Mini case study */
  caseStudy: FlagshipCaseStudy;
};
