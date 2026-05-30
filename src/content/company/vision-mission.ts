/**
 * /company/vision-mission content
 *
 * Mission + Vision sourced from the standard "Mission & Vision" slide
 * shared across all 14 product brochures. Values are derived from the
 * brand voice principles (D-16, D-40) and the engineering posture
 * Infizia applies across products / solutions / services.
 */

import {
  Eye,
  Target,
  Compass,
  Briefcase,
  Sparkles,
  ShieldCheck,
  Users,
  TrendingUp,
} from "lucide-react";
import type { Value } from "./types";
import { MISSION, VISION } from "./about";

export { MISSION, VISION };

/** Mission deep-dive — what we do today */
export const MISSION_DETAIL = {
  kicker: "Mission · today",
  title: "Why we build what we build.",
  paragraphs: [
    "Every Infizia product starts with one question: does this drive efficiency, engagement, or growth for the business that uses it? If a feature does not move one of those three needles, it does not ship.",
    "That filter shapes our roadmap. The 14 products in the catalogue each compress a real workflow — sales, hiring, clinical visits, retail counter, support calls, document piles, factory floors. Not vague AI; specific business outcomes, measured.",
  ],
  pillars: [
    {
      icon: TrendingUp,
      title: "Efficiency",
      body: "Compress hours of manual work into minutes — across hiring, support, ops, billing, and reporting.",
    },
    {
      icon: Users,
      title: "Engagement",
      body: "Keep customers, patients, learners, and employees in conversation — voice, chat, WhatsApp, email — fluent in their language.",
    },
    {
      icon: Briefcase,
      title: "Growth",
      body: "Insights, intelligence, and automation that compound — so each product gets sharper as the business scales.",
    },
  ],
};

/** Vision deep-dive — where we are going */
export const VISION_DETAIL = {
  kicker: "Vision · forward",
  title: "Where we are going.",
  paragraphs: [
    "Infizia exists to be a globally recognised technology company built on AI-native applications — not as a wrapper over someone else's models, but as an engineering practice that owns the full stack from data layer up to autonomous agents.",
    "That means shipping products that hold up at production scale, supporting the partners who carry them (Google Cloud, Red Hat), and staying model-agnostic so the platform can evolve as the field shifts. The infinite intelligence in the tagline is not a marketing line; it is the architectural posture.",
  ],
  pillars: [
    {
      icon: Sparkles,
      title: "AI-native",
      body: "Built for AI from the data model up — not retrofitted onto legacy applications.",
    },
    {
      icon: Eye,
      title: "Globally recognised",
      body: "Engineering and design quality that holds up against any market — not just the Indian one.",
    },
    {
      icon: ShieldCheck,
      title: "Trustworthy at scale",
      body: "Audit trails, guardrails, and observability wired in from day one — production-grade by default.",
    },
  ],
};

/** Values — the principles that shape engineering and design decisions */
export const VALUES: Value[] = [
  {
    icon: Target,
    title: "Business-first",
    body: "We never lead with technology. Every product page, every feature, every line of copy describes what changes for the business — not which model or vendor sits underneath.",
  },
  {
    icon: ShieldCheck,
    title: "Trust by design",
    body: "Every model call has a contract. Every agent decision has a trace. Every customer record has tenant isolation. Compliance is not bolted on — it is wired in.",
  },
  {
    icon: Compass,
    title: "Vendor-agnostic",
    body: "We commit to engineering, not to providers. Cloud-native funding, model-agnostic inference, polyglot data — the platform evolves as the field shifts, without rewrite.",
  },
  {
    icon: Sparkles,
    title: "Ship, then refine",
    body: "Real users beat staged demos. We launch, measure, and iterate — guided by what production traffic teaches us, not what a pitch deck promised.",
  },
];
