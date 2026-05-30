/**
 * Phase 7 — Shared content shape for technology pillar pages.
 *
 * Each of the 5 bespoke technology pillar pages (llm-genai,
 * agentic-architecture, rag, voice-ai, application-architecture)
 * supplies one `TechnologyContent` object.
 *
 * The page composes:
 *   1. TechHero          — bespoke per-pillar visual idiom
 *   2. TechPainPoints    — 4 frictions before this pillar gets engaged
 *   3. TechCapabilities  — 6 capability cards (what we build with this pillar)
 *   4. TechPatterns      — 4 architectural patterns / approaches
 *   5. TechUseCases      — 3 use cases tied back to actual products
 *                          (Infera / Intellix / VitaCare / etc.)
 *   6. TechOutcomes      — 4 measurable outcome tiles
 *   7. TechCTA           — Talk to an Architect + Corporate Brochure
 *
 * Voice rule (D-40): business-first language only. Technical concepts
 * (RAG, vector embeddings, agent loops, microservices, observability)
 * are allowed since the buyer here is a CTO / architect / dev lead and
 * expects technical depth. Specific vendor product names (OpenAI,
 * Anthropic, Pinecone, etc.) are NOT exposed — implementation can
 * swap providers without touching this content.
 */

import type { LucideIcon } from "lucide-react";
import type { ProductAccent } from "@/lib/product-accents";

export type TechPain = {
  icon: LucideIcon;
  title: string;
  body: string;
};

export type TechCapability = {
  icon: LucideIcon;
  title: string;
  body: string;
};

export type TechPattern = {
  icon: LucideIcon;
  /** e.g., "Hybrid Retrieval" */
  label: string;
  /** Short tag — e.g., "Vector + keyword" */
  tag: string;
  /** 1-2 sentence description */
  body: string;
};

export type TechUseCase = {
  icon: LucideIcon;
  title: string;
  /** Short body */
  body: string;
  /** Which Infizia products use this pillar — surfaced as accent chips */
  poweredProducts: string[];
};

export type TechOutcome = {
  icon: LucideIcon;
  metric: string;
  body: string;
};

export type TechnologyContent = {
  slug: string;
  /** Display name (e.g., "LLM & Generative AI") */
  name: string;
  /** Short label for hero kicker (e.g., "LLM · GenAI") */
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
    items: TechPain[];
  };

  /** Capabilities section — 6 things this pillar delivers */
  capabilities: {
    kicker: string;
    title: string;
    lede: string;
    items: TechCapability[];
  };

  /** Patterns / approaches section */
  patterns: {
    kicker: string;
    title: string;
    lede: string;
    items: TechPattern[];
  };

  /** Use cases tied back to products */
  useCases: {
    kicker: string;
    title: string;
    lede: string;
    items: TechUseCase[];
  };

  /** Outcome tiles */
  outcomes: {
    kicker: string;
    title: string;
    lede: string;
    items: TechOutcome[];
  };
};
