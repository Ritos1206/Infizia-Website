/**
 * Phase 6 — Shared content shape for service pages.
 *
 * Each of the 4 bespoke service pages (web-app-development,
 * ai-agentic-systems, blockchain, google-cloud) supplies one
 * `ServiceContent` object. The Red Hat Stack card on the services
 * catalog redirects to `/red-hat` instead of carrying a service page
 * (per the corporate deck: Red Hat is its own pillar).
 *
 * The page composes:
 *   1. ServiceHero          — bespoke per-service visual idiom
 *   2. ServicePainPoints    — 4 frictions
 *   3. ServiceCapabilities  — 6 capability cards (what we deliver)
 *   4. ServiceEngagement    — 4 engagement models (how we work)
 *   5. ServiceUseCases      — 3 buyer / industry personas
 *   6. ServiceOutcomes      — 4 measurable result tiles
 *   7. ServiceCTA           — Book a Demo + Corporate Brochure
 *
 * Voice rule (D-40): business-first language only. No vendor names
 * exposed in any user-facing string.
 */

import type { LucideIcon } from "lucide-react";
import type { ProductAccent } from "@/lib/product-accents";

export type ServicePain = {
  icon: LucideIcon;
  title: string;
  body: string;
};

export type ServiceCapability = {
  icon: LucideIcon;
  title: string;
  body: string;
};

export type ServiceEngagementModel = {
  icon: LucideIcon;
  /** e.g., "Discovery & Advisory" */
  label: string;
  /** Typical duration / shape of the engagement */
  duration: string;
  /** 1-2 sentence description */
  body: string;
};

export type ServiceUseCase = {
  icon: LucideIcon;
  title: string;
  body: string;
};

export type ServiceOutcome = {
  icon: LucideIcon;
  metric: string;
  body: string;
};

export type ServiceContent = {
  slug: string;
  /** Display name (e.g., "Enterprise Web & App Development") */
  name: string;
  /** Short label for hero kicker (e.g., "Web & App") */
  shortLabel: string;
  /** Brand accent for the page */
  accent: ProductAccent;

  /** One short tagline in the hero */
  tagline: string;

  /** 2-3 sentence positioning paragraph */
  positioning: string;

  /** Pain points section */
  pain: {
    kicker: string;
    title: string;
    lede: string;
    items: ServicePain[];
  };

  /** Capabilities section — 6 things this service delivers */
  capabilities: {
    kicker: string;
    title: string;
    lede: string;
    items: ServiceCapability[];
  };

  /** Engagement-models section */
  engagement: {
    kicker: string;
    title: string;
    lede: string;
    items: ServiceEngagementModel[];
  };

  /** Use cases / industries */
  useCases: {
    kicker: string;
    title: string;
    lede: string;
    items: ServiceUseCase[];
  };

  /** Outcome tiles */
  outcomes: {
    kicker: string;
    title: string;
    lede: string;
    items: ServiceOutcome[];
  };
};
