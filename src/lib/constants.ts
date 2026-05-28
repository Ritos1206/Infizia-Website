/**
 * Infizia — Site-wide constants
 * Single source of truth for nav, products, solutions, services.
 * Update PROJECT_STATUS.md in parallel when changing this file.
 */

import type { ProductAccent } from "@/lib/product-accents";

export const SITE = {
  name: "Infizia",
  tagline: "Infinite Intelligence",
  parent: "Contezza Technosolutions Pvt. Ltd.",
  domain: "infizia.in",
  url: "https://infizia.in",
  email: "sales@infizia.in",
  description:
    "Infizia builds agentic AI products and the platforms they run on — autonomous systems that perceive, reason, and act across the enterprise. We also deliver trusted Red Hat stack implementations across RHEL, OpenShift, Ansible, and OpenShift AI.",
  short:
    "Agentic AI products, autonomous systems, and Red Hat stack implementations. Engineered for the enterprise.",
} as const;

/* ============================================================================
   Products
   ============================================================================ */

export type Product = {
  slug: string;
  name: string;
  shortName?: string;
  vertical: ProductVertical;
  blurb: string;
  flagship?: boolean;
  /**
   * `true` when the product has a dedicated, hand-built page under
   * `/products/<slug>/page.tsx`. The dynamic `[slug]` route excludes these
   * so Next.js doesn't double-prerender. Currently true for the three
   * subscription products: EyeCON, VitaCare, EyePOS.
   */
  bespokePage?: boolean;
};

export type ProductVertical =
  | "Healthcare"
  | "HR & Workforce"
  | "Customer Support"
  | "Education"
  | "E-Commerce"
  | "Finance & Operations"
  | "Intelligence & Research"
  | "Industrial Intelligence & IoT"
  | "Media & Publishing"
  | "Sales";

export const PRODUCTS: Product[] = [
  {
    slug: "eyecon",
    name: "EyeCON",
    vertical: "Sales",
    flagship: true,
    bespokePage: true,
    blurb:
      "All-in-one mobile-first AI sales platform that unifies company research, calling, and meeting intelligence around a single Lead record.",
  },
  {
    slug: "vitacare",
    name: "VitaCare",
    vertical: "Healthcare",
    flagship: true,
    bespokePage: true,
    blurb:
      "AI-powered digital clinic platform for individual doctors — appointments, telehealth, electronic health records, digital prescriptions, automated reminders, and an AI call receptionist.",
  },
  {
    slug: "convenor",
    name: "Convenor",
    vertical: "HR & Workforce",
    bespokePage: true,
    blurb:
      "AI-driven hiring platform spanning resume screening, candidate ranking, and onboarding workflows.",
  },
  {
    slug: "performix",
    name: "Performix",
    vertical: "HR & Workforce",
    bespokePage: true,
    blurb:
      "Smart employee assessment, rewards, and feedback system with structured multi-level approvals.",
  },
  {
    slug: "meetrix",
    name: "Meetrix",
    vertical: "HR & Workforce",
    bespokePage: true,
    blurb:
      "AI-powered meeting intelligence — real-time transcripts, automated summaries, and actionable insights.",
  },
  {
    slug: "intellix",
    name: "Intellix",
    vertical: "Customer Support",
    bespokePage: true,
    blurb:
      "AI-powered Voice and Chat Assistant Platform that unifies outbound + inbound calls, multilingual chat, knowledge base, and database queries on one dashboard.",
  },
  {
    slug: "learnova",
    name: "Learnova",
    vertical: "Education",
    bespokePage: true,
    blurb:
      "AI course generator that turns any topic into a complete, personalized learning experience — courses, practice questions, live quizzes, mock tests, and real-time doubt resolution.",
  },
  {
    slug: "lms",
    name: "LMS",
    vertical: "Education",
    bespokePage: true,
    blurb:
      "Comprehensive e-learning platform for educators and institutions — courses, live classes, AI-driven recommendations, quizzes, certifications, and community on one platform.",
  },
  {
    slug: "ecommerce",
    name: "Custom E-Commerce",
    shortName: "E-Commerce",
    vertical: "E-Commerce",
    bespokePage: true,
    blurb:
      "Fully customizable, scalable AI-powered commerce platform for D2C brands, aggregators, and niche marketplaces — storefront to delivery, with intelligent automation built in.",
  },
  {
    slug: "documind",
    name: "DocuMind",
    vertical: "Finance & Operations",
    bespokePage: true,
    blurb:
      "AI-powered intelligent document processing — every invoice, form, and contract read, validated against your business rules, and auto-posted to your ERP.",
  },
  {
    slug: "eyepos",
    name: "EyePOS",
    vertical: "Finance & Operations",
    flagship: true,
    bespokePage: true,
    blurb:
      "Unified point-of-sale, inventory, and accounting platform for multi-location retail, wholesale, and service businesses — GST-compliant and real-time.",
  },
  {
    slug: "infera",
    name: "Infera",
    vertical: "Intelligence & Research",
    bespokePage: true,
    blurb:
      "AI-powered sales intelligence — type a company name, get a deep-research brief in minutes: decision makers, cloud roadmap, cloud-native funding match, and ready-to-send outreach.",
  },
  {
    slug: "opssight",
    name: "OpsSight",
    vertical: "Industrial Intelligence & IoT",
    bespokePage: true,
    blurb:
      "AI-driven industrial intelligence — real-time visibility across every sensor, AI anomaly detection, predictive maintenance, and contextual decision support. Mining-first, extends to manufacturing and utilities.",
  },
  {
    slug: "enews",
    name: "E-News",
    vertical: "Media & Publishing",
    bespokePage: true,
    blurb:
      "Digital publishing platform for blogs, news portals, and e-newspapers — newsroom workspace, editorial workflows, cross-channel publishing, audience engagement, and subscriber monetisation on one platform.",
  },
];

export const FLAGSHIP_PRODUCTS = PRODUCTS.filter((p) => p.flagship);
export const NON_FLAGSHIP_PRODUCTS = PRODUCTS.filter((p) => !p.flagship);

/* ============================================================================
   Solutions
   ============================================================================ */

export type Solution = {
  slug: string;
  name: string;
  /** Long-form vertical name (e.g., "Industrial Intelligence & IoT") */
  verticalLabel?: string;
  emoji: string;
  blurb: string;
  /** Brand accent — pulls from the same palette as products. Phase 5. */
  accent?: ProductAccent;
  /**
   * `true` when the solution has a dedicated, hand-built page under
   * `/solutions/<slug>/page.tsx`. The dynamic `[slug]` route excludes
   * these so Next.js doesn't double-prerender. All 10 verticals have
   * bespoke pages as of Phase 5.
   */
  bespokePage?: boolean;
};

export const SOLUTIONS: Solution[] = [
  {
    slug: "sales",
    name: "Sales",
    verticalLabel: "Sales",
    emoji: "📈",
    accent: "teal",
    bespokePage: true,
    blurb:
      "One Lead record · pre-call intelligence · every conversation captured · same-day follow-up. The full sales motion on one mobile-first stack.",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    verticalLabel: "Healthcare",
    emoji: "🏥",
    accent: "green",
    bespokePage: true,
    blurb:
      "Patient-first clinics and hospitals — appointments, telehealth, prescriptions, AI receptionists, and digital records on one platform.",
  },
  {
    slug: "hr-workforce",
    name: "HR & Workforce",
    verticalLabel: "HR & Workforce",
    emoji: "🧑‍💼",
    accent: "indigo",
    bespokePage: true,
    blurb:
      "Hire, onboard, perform, and meet — the full employee lifecycle on one connected stack of AI-driven HR products.",
  },
  {
    slug: "customer-support",
    name: "Customer Support",
    verticalLabel: "Customer Support",
    emoji: "📞",
    accent: "rose",
    bespokePage: true,
    blurb:
      "Voice, chat, and knowledge-base AI that handles the high-volume questions — and escalates the rest cleanly to your team.",
  },
  {
    slug: "education",
    name: "Education",
    verticalLabel: "Education",
    emoji: "🎓",
    accent: "fuchsia",
    bespokePage: true,
    blurb:
      "From a single topic to a full learning experience — AI course generation, structured assessments, and an enterprise LMS.",
  },
  {
    slug: "ecommerce",
    name: "E-Commerce",
    verticalLabel: "E-Commerce",
    emoji: "🛒",
    accent: "lime",
    bespokePage: true,
    blurb:
      "D2C brands and marketplaces — branded storefronts, multi-vendor catalogues, AI personalisation, and WhatsApp commerce.",
  },
  {
    slug: "finance-operations",
    name: "Finance & Operations",
    verticalLabel: "Finance & Operations",
    emoji: "💼",
    accent: "sky",
    bespokePage: true,
    blurb:
      "Document AI, invoice processing, GST-compliant POS, and back-office automation — paperwork to ledger, without the typing.",
  },
  {
    slug: "intelligence-research",
    name: "Intelligence & Research",
    verticalLabel: "Intelligence & Research",
    emoji: "🧠",
    accent: "cyan",
    bespokePage: true,
    blurb:
      "Company intelligence, prospect research, and decision-grade briefs — built from your data, your CRM, and the open web.",
  },
  {
    slug: "industrial-iot",
    name: "Industrial Intelligence & IoT",
    verticalLabel: "Industrial Intelligence & IoT",
    emoji: "🏭",
    accent: "emerald",
    bespokePage: true,
    blurb:
      "Sensor-driven anomaly detection, predictive maintenance, and contextual decision support for mines, plants, and utilities.",
  },
  {
    slug: "media-publishing",
    name: "Media & Publishing",
    verticalLabel: "Media & Publishing",
    emoji: "📰",
    accent: "purple",
    bespokePage: true,
    blurb:
      "Newsroom workspace, editorial workflows, cross-channel publishing, and subscriber monetisation on one platform.",
  },
];

/* ============================================================================
   Services
   ============================================================================ */

export type Service = {
  slug: string;
  name: string;
  blurb: string;
  /** Brand accent for service-page styling. Phase 6. */
  accent?: ProductAccent;
  /**
   * `true` when the service has a dedicated, hand-built page under
   * `/services/<slug>/page.tsx`. The dynamic `[slug]` route excludes
   * these so Next.js doesn't double-prerender.
   */
  bespokePage?: boolean;
  /**
   * If set, the service's index/menu cards link to this path instead of
   * `/services/<slug>` and no service page is generated. Used for the
   * Red Hat Stack card on the services catalog — it appears alongside
   * the other service lines (per the corporate deck) but routes the
   * user to the dedicated `/red-hat` micro-section. D-69.
   */
  redirectsTo?: string;
};

/**
 * Service catalog — mirrors the corporate deck (page 4) exactly. Five
 * cards, in the same order: Web & App Development, Agentic AI,
 * Blockchain, Red Hat Stack, Google Cloud & Infrastructure.
 *
 * The Red Hat Stack card has `redirectsTo: "/red-hat"` — it appears in
 * the services catalog (so the deck's 5-pillar story stays intact) but
 * links to the dedicated micro-section instead of carrying its own
 * service page. Per D-04, brand-redhat color stays only inside
 * `/red-hat/*` content.
 */
export const SERVICES: Service[] = [
  {
    slug: "web-app-development",
    name: "Enterprise Web & App Development",
    accent: "blue",
    bespokePage: true,
    blurb:
      "Custom software solutions to optimize workflows, increase productivity, and enhance business efficiency. Web and mobile platforms engineered for enterprise scale and reliability.",
  },
  {
    slug: "ai-agentic-systems",
    name: "Enterprise Agentic AI Solutions",
    accent: "violet",
    bespokePage: true,
    blurb:
      "Infizia builds agentic AI products and the platforms they run on — autonomous systems that perceive, reason, and act across your enterprise.",
  },
  {
    slug: "blockchain",
    name: "Blockchain Development & ICO Listing",
    accent: "amber",
    bespokePage: true,
    blurb:
      "Powerful blockchain development solutions with secure, decentralized technologies along with ICO listing — smart contracts, dApps, and token engineering for trustworthy ecosystems.",
  },
  {
    slug: "redhat-stack",
    name: "Red Hat Stack",
    redirectsTo: "/red-hat",
    blurb:
      "Enterprise-grade Red Hat stack: RHEL, OpenShift, Ansible, OpenShift AI, and JBoss — delivering scalable, secure, cloud-native infrastructure for mission-critical workloads. Assessment, implementation, managed services, and training across the full stack.",
  },
  {
    slug: "google-cloud",
    name: "Google Cloud & Infrastructure",
    accent: "sky",
    bespokePage: true,
    blurb:
      "Comprehensive cloud management ensuring performance, scalability, and cost efficiency across Google Cloud (GCP) — from architecture to migration to ongoing optimisation.",
  },
];

/* ============================================================================
   Red Hat (separate top-level entity)
   ============================================================================ */

export type RedHatService = {
  slug: string;
  name: string;
  shortName?: string;
  blurb: string;
};

export const REDHAT_SERVICES: RedHatService[] = [
  {
    slug: "rhel",
    name: "Red Hat Enterprise Linux",
    shortName: "RHEL",
    blurb:
      "OS standardization, migration, hardening, and lifecycle management for mission-critical workloads.",
  },
  {
    slug: "openshift",
    name: "OpenShift Container Platform",
    shortName: "OpenShift",
    blurb:
      "Enterprise Kubernetes — production-hardened, security-first, multi-cloud, and edge-ready.",
  },
  {
    slug: "ansible",
    name: "Ansible Automation Platform",
    shortName: "Ansible",
    blurb:
      "IT automation, compliance, configuration management, and event-driven operations at scale.",
  },
  {
    slug: "openshift-ai",
    name: "Red Hat AI / OpenShift AI",
    shortName: "OpenShift AI",
    blurb:
      "MLOps, model serving, GPU workloads, LLM fine-tuning, and AI governance on infrastructure you own.",
  },
  {
    slug: "managed-services",
    name: "Managed Services",
    blurb:
      "24×7 operations, SLA-backed monitoring, and proactive maintenance across the Red Hat stack.",
  },
  {
    slug: "training",
    name: "Training & Enablement",
    blurb:
      "RHEL, Ansible, OpenShift, and OpenShift AI courses — with lab environments and bootcamp formats.",
  },
];

/* ============================================================================
   Technology focus areas
   ============================================================================ */

export type TechArea = {
  slug: string;
  name: string;
  blurb: string;
};

export const TECHNOLOGY: TechArea[] = [
  {
    slug: "llm-genai",
    name: "LLM & Generative AI",
    blurb:
      "Foundation models, fine-tuning, prompt engineering, and inference at scale.",
  },
  {
    slug: "agentic-architecture",
    name: "Agentic Architecture",
    blurb:
      "Multi-agent systems that observe, reason, and act with safety controls and audit trails.",
  },
  {
    slug: "rag",
    name: "RAG Systems",
    blurb:
      "Retrieval-augmented generation grounded in your proprietary data, documents, and knowledge.",
  },
  {
    slug: "voice-ai",
    name: "Voice & Conversational AI",
    blurb:
      "Real-time transcription, voice agents, and natural multi-turn dialogue.",
  },
  {
    slug: "application-architecture",
    name: "Application Architecture",
    blurb:
      "Cloud-native, event-driven, and resilient systems designed for enterprise scale.",
  },
];

/* ============================================================================
   Company
   ============================================================================ */

export const COMPANY = [
  { slug: "about", name: "About Infizia", path: "/company/about" },
  { slug: "contezza", name: "About Contezza", path: "/company/contezza" },
  { slug: "vision-mission", name: "Vision & Mission", path: "/company/vision-mission" },
  { slug: "careers", name: "Careers", path: "/company/careers" },
] as const;

/* ============================================================================
   Top-level navigation
   ============================================================================ */

export const NAV = [
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/solutions" },
  { label: "Services", href: "/services" },
  { label: "Red Hat", href: "/red-hat", accent: true },
  { label: "Technology", href: "/technology" },
  { label: "Resources", href: "/resources" },
  { label: "Company", href: "/company/about" },
] as const;

/* ============================================================================
   Footer link groups
   ============================================================================ */

export const FOOTER_LINKS = {
  Products: PRODUCTS.slice(0, 8).map((p) => ({
    label: p.shortName ?? p.name,
    href: `/products/${p.slug}`,
  })),
  Solutions: SOLUTIONS.map((s) => ({
    label: s.name,
    href: `/solutions/${s.slug}`,
  })),
  "Red Hat": REDHAT_SERVICES.map((r) => ({
    label: r.shortName ?? r.name,
    href: `/red-hat/${r.slug}`,
  })),
  Company: [
    { label: "About Infizia", href: "/company/about" },
    { label: "About Contezza", href: "/company/contezza" },
    { label: "Vision & Mission", href: "/company/vision-mission" },
    { label: "Careers", href: "/company/careers" },
    { label: "Blog", href: "/resources/blog" },
    { label: "Case Studies", href: "/resources/case-studies" },
    { label: "Contact", href: "/contact" },
    { label: "Book a Demo", href: "/contact/demo" },
  ],
} as const;

/* ============================================================================
   Tech partners (for marquee)
   ============================================================================ */

export const TECH_PARTNERS = [
  "Red Hat",
  "AWS",
  "Microsoft Azure",
  "Google Cloud",
  "OpenAI",
  "Anthropic",
  "NVIDIA",
  "Databricks",
  "MongoDB",
  "PostgreSQL",
  "Kubernetes",
  "Docker",
] as const;

/* ============================================================================
   Impact metrics (placeholder — update with real numbers)
   ============================================================================ */

export const IMPACT_METRICS = [
  { value: 99.9, suffix: "%", label: "Uptime SLA" },
  { value: 250, suffix: "+", label: "Enterprise Deployments" },
  { value: 40, suffix: "%", label: "Avg. Efficiency Gain" },
  { value: 15, suffix: "ms", label: "Inference Latency" },
] as const;
