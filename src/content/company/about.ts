/**
 * /company/about content
 *
 * Brand positioning sourced from the consistent "About Infizia" + 
 * "Mission & Vision" slides shared across all 14 product brochures
 * (slides 2 + 3 of every brochure are product-agnostic per D-32 /
 * D-44). Mission + Vision quoted verbatim from those slides, with
 * casing normalized for web (the all-caps in brochure decks is for
 * slide design, not for body copy).
 */

import {
  Brain,
  Network,
  Cloud,
  Server,
  Sparkles,
  Building2,
  Layers,
  Compass,
} from "lucide-react";
import type { CapabilityPillar, Milestone } from "./types";

export const ABOUT_HERO_KICKER = "About Infizia";

export const ABOUT_HEADLINE = "Empowering businesses with";
export const ABOUT_HEADLINE_HIGHLIGHT = "infinite intelligence.";

/** Brand positioning paragraph — verbatim from brochure About slide */
export const ABOUT_POSITIONING =
  "Infizia is a forward-thinking technology solutions provider specialising in AI-powered web and mobile platforms — empowering businesses with custom digital solutions that enhance their online presence and streamline operations for greater efficiency and scalability.";

export const ABOUT_POSITIONING_2 =
  "We go beyond traditional development by integrating emerging technologies like agentic AI, RAG systems, voice intelligence, and blockchain — offering secure, intelligent, future-ready ecosystems that combine the rigor of enterprise engineering with the agility of modern AI.";

/** Mission + Vision — sourced from brochure Mission & Vision slide */
export const MISSION = {
  title: "Mission",
  statement:
    "To empower businesses with cutting-edge digital solutions that drive efficiency, engagement, and growth.",
};

export const VISION = {
  title: "Vision",
  statement:
    "To be a globally recognised technology company known for excellence in AI-native applications — delivering high-impact solutions that transform businesses with infinite intelligence.",
};

/** 4 capability pillars — the anchors of Infizia's identity */
export const CAPABILITY_PILLARS: CapabilityPillar[] = [
  {
    icon: Brain,
    label: "AI",
    title: "AI engineering practice",
    body: "Foundation models, fine-tuning, prompt engineering, and inference at production scale — the language layer behind every Infizia product.",
    chips: [
      "LLM & GenAI",
      "RAG systems",
      "Voice & conversational AI",
      "Multi-language",
    ],
  },
  {
    icon: Network,
    label: "Agentic AI",
    title: "Autonomous agent systems",
    body: "Software that observes, reasons, and acts — with memory, safety controls, and audit trails wired in from day one. Not chatbots; systems that ship work.",
    chips: [
      "Multi-agent meshes",
      "Tool registries",
      "Memory + guardrails",
      "Observability",
    ],
  },
  {
    icon: Cloud,
    label: "Google Cloud",
    title: "Cloud-native infrastructure",
    body: "Multi-region edge delivery, managed Kubernetes, data platforms, and AI services on Google Cloud — production substrate engineered for enterprise scale.",
    chips: ["GKE", "Vertex AI", "BigQuery", "Multi-region"],
  },
  {
    icon: Server,
    label: "Red Hat",
    title: "Red Hat stack delivery",
    body: "RHEL, OpenShift, Ansible, and OpenShift AI implemented at production grade — assessment, build, run, and training across the full open hybrid cloud stack.",
    chips: ["RHEL", "OpenShift", "Ansible", "OpenShift AI"],
  },
];

/** Timeline milestones — Contezza 2012 → Infizia today */
export const MILESTONES: Milestone[] = [
  {
    year: "2012",
    title: "Contezza Techno Solution founded",
    body: "Incorporated on 02 Dec 2012 under the Companies Act of India as Contezza Techno Solution Pvt. Ltd. — building enterprise software, web, and mobile platforms for Indian and global clients.",
  },
  {
    year: "2017",
    title: "Enterprise software practice expands",
    body: "Multi-vertical engineering practice scales — web, mobile, custom platforms — built for clients across India and abroad. The bench of senior engineers and the partnerships that anchor today's stack take shape.",
  },
  {
    year: "2022",
    title: "Cloud-native + AI engineering deepens",
    body: "Kubernetes, container platforms, the Red Hat partnership, and the early AI engineering practice — laying the groundwork for the AI-native sub-brand that follows.",
  },
  {
    year: "2026",
    title: "Infizia launches · 14 AI-native products live",
    body: "Infizia launches as the AI-native sub-brand of Contezza — shipping 14 AI-native products across 10 industry verticals, all on one cognitive stack, with a Red Hat practice and Google Cloud capability behind it.",
  },
];

/** Contezza parentage paragraph — for the dedicated section */
export const CONTEZZA_PARENTAGE = {
  title: "A unit of Contezza Techno Solution Pvt. Ltd.",
  paragraph:
    "Infizia launched in 2026 as the AI-native sub-brand of Contezza Techno Solution Pvt. Ltd. — a private company incorporated on 02 Dec 2012 under the Companies Act of India, registered at the Registrar of Companies. Contezza has spent over a decade building enterprise software, web platforms, and cloud infrastructure for Indian and international clients. Infizia carries that engineering rigor forward into agentic AI and autonomous systems, while the parent group continues to deliver the broader services portfolio.",
  legalName: "CONTEZZA TECHNO SOLUTION PRIVATE LIMITED",
  cin: "U74999WB2012PTC183340",
  facts: [
    {
      icon: Building2,
      label: "Legal name",
      value: "CONTEZZA TECHNO SOLUTION PRIVATE LIMITED",
    },
    {
      icon: Compass,
      label: "Incorporated",
      value: "02 Dec 2012 · Companies Act of India",
    },
    {
      icon: Layers,
      label: "Classification",
      value: "Private company · Non-government · Registrar of Companies",
    },
    {
      icon: Sparkles,
      label: "CIN",
      value: "U74999WB2012PTC183340",
    },
  ],
};
