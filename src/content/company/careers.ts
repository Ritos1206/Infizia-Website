/**
 * /company/careers content
 *
 * Subject to OD-10 — open roles list pending from client. Until that
 * lands, the page reads as "we are growing, drop us a line, we will
 * reach out when a relevant role opens" — no fake openings, no
 * placeholder job titles.
 */

import {
  Sparkles,
  Brain,
  Users,
  TrendingUp,
  Heart,
  Target,
} from "lucide-react";
import type { WhyJoin } from "./types";

export const CAREERS_HERO = {
  kicker: "Careers · Infizia",
  headline: "Build the team that builds",
  highlight: "the future.",
  positioning:
    "We are an engineering-first team building AI-native products at production scale — across sales, healthcare, hiring, support, education, retail, and beyond. If you want to work on real problems, with real users, and ship real software — we should talk.",
};

/** 4 reasons to consider joining — derived from how Infizia ships */
export const WHY_JOIN: WhyJoin[] = [
  {
    icon: Brain,
    title: "Real AI work, not hype",
    body: "Agentic systems, RAG pipelines, voice AI, model fine-tuning — shipping in production for real customers, not stuck in a sandbox demo.",
  },
  {
    icon: Target,
    title: "Outcomes you can measure",
    body: "Every product page on this site has a 'what changes when this works' section. We hold ourselves to those numbers, and we expect the team to as well.",
  },
  {
    icon: Users,
    title: "Small teams, big surfaces",
    body: "14 products, 10 industries, 1 cognitive stack — and a team small enough that what you ship genuinely shapes the platform.",
  },
  {
    icon: Heart,
    title: "Engineering rigor, design quality",
    body: "Code that holds up. UI that does not embarrass anyone. Documentation that future contributors can actually read. Craftsmanship is not optional.",
  },
];

/** Open-role placeholder content — replaces with real list when OD-10 closes */
export const OPEN_ROLES_PLACEHOLDER = {
  title: "No open roles listed right now.",
  body: "We hire when the work demands it — usually for senior engineers, product designers, and AI specialists. If your background fits the practice (AI, agentic systems, full-stack web/mobile, Red Hat, Google Cloud), drop us a line and we will reach out when something opens up.",
  ctaLabel: "Send us your details",
  ctaHref: "/contact/sales",
  trackedDisciplines: [
    "AI & ML engineering",
    "Full-stack web · TypeScript",
    "Mobile · React Native",
    "Cloud platform · GCP / Red Hat",
    "Product design",
    "Technical writing",
  ],
};

export const CAREERS_FOOTER = {
  icon: TrendingUp,
  note: "We hire for fit — not just headcount. The bar is high; the work is too.",
};

// Re-export Sparkles as the value-icon for the CTA decoration
export { Sparkles };
