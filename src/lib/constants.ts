/**
 * Infizia — Site-wide constants
 * Single source of truth for nav, products, solutions, services.
 * Update PROJECT_STATUS.md in parallel when changing this file.
 */

export const SITE = {
  name: "Infizia",
  tagline: "Infinite Intelligence",
  parent: "Contezza Technosolutions Pvt. Ltd.",
  domain: "infizia.com",
  url: "https://infizia.com",
  email: "sales@infizia.com",
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
    name: "Learnova AI",
    shortName: "Learnova",
    vertical: "Education",
    blurb:
      "AI course generator that turns any document, video, or web content into structured learning paths and assessments.",
  },
  {
    slug: "lms",
    name: "LMS",
    vertical: "Education",
    blurb:
      "Scalable learning management system for enterprises, institutions, and training organizations.",
  },
  {
    slug: "ecommerce",
    name: "Custom E-Commerce",
    shortName: "E-Commerce",
    vertical: "E-Commerce",
    blurb:
      "Multi-vendor commerce platform with native WhatsApp integration and an AI engagement chatbot.",
  },
  {
    slug: "documind",
    name: "DocuMind AI",
    shortName: "DocuMind",
    vertical: "Finance & Operations",
    blurb:
      "Intelligent document processing for invoices, forms, contracts — automating extraction and validation.",
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
    name: "Infera AI",
    shortName: "Infera",
    vertical: "Intelligence & Research",
    blurb:
      "AI company intelligence — deep business insights and competitive analysis from minimal inputs.",
  },
  {
    slug: "opssight",
    name: "OpsSight AI",
    shortName: "OpsSight",
    vertical: "Industrial Intelligence & IoT",
    blurb:
      "AI industrial intelligence with IoT sensor monitoring, anomaly detection, and decision support — initial focus on mining.",
  },
  {
    slug: "enews",
    name: "E-News Portal",
    vertical: "Media & Publishing",
    blurb:
      "Digital publishing platform purpose-built for blogs, news portals, and e-newspaper management.",
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
  emoji: string;
  blurb: string;
};

export const SOLUTIONS: Solution[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    emoji: "🏥",
    blurb:
      "Clinic operations, patient experience, AI receptionists, and digital prescriptions.",
  },
  {
    slug: "hr-workforce",
    name: "HR & Workforce",
    emoji: "🧑‍💼",
    blurb:
      "Hiring, onboarding, performance, and meeting intelligence — unified.",
  },
  {
    slug: "customer-support",
    name: "Customer Support",
    emoji: "📞",
    blurb:
      "AI call centers and conversation automation for high-volume support.",
  },
  {
    slug: "education",
    name: "Education",
    emoji: "🎓",
    blurb:
      "AI course generation, structured assessments, and enterprise LMS.",
  },
  {
    slug: "ecommerce",
    name: "E-Commerce",
    emoji: "🛒",
    blurb:
      "Multi-vendor storefronts with WhatsApp commerce and AI engagement.",
  },
  {
    slug: "finance-operations",
    name: "Finance & Operations",
    emoji: "💼",
    blurb:
      "Document AI, invoice processing, and back-office automation.",
  },
  {
    slug: "intelligence-research",
    name: "Intelligence & Research",
    emoji: "🧠",
    blurb:
      "Company intelligence, market research, and competitive analysis at speed.",
  },
  {
    slug: "industrial-iot",
    name: "Industrial Intelligence & IoT",
    emoji: "🏭",
    blurb:
      "Sensor-driven anomaly detection and smart decision support for industrial ops.",
  },
  {
    slug: "media-publishing",
    name: "Media & Publishing",
    emoji: "📰",
    blurb:
      "Editorial workflows, scheduling, and audience engagement for digital media.",
  },
];

/* ============================================================================
   Services
   ============================================================================ */

export type Service = {
  slug: string;
  name: string;
  blurb: string;
};

export const SERVICES: Service[] = [
  {
    slug: "web-app-development",
    name: "Web & Application Development",
    blurb:
      "Enterprise-grade web and mobile platforms engineered for scale and reliability.",
  },
  {
    slug: "ai-agentic-systems",
    name: "AI Products & Agentic Systems",
    blurb:
      "Production-ready agentic architectures, RAG pipelines, and AI products tailored to your data.",
  },
  {
    slug: "erp-automation",
    name: "ERP & Automation",
    blurb:
      "Enterprise systems and workflow automation that wire your operations end to end.",
  },
  {
    slug: "blockchain",
    name: "Blockchain & ICO Listing",
    blurb:
      "Token engineering, smart contracts, and listing-ready blockchain infrastructure.",
  },
  {
    slug: "multi-cloud",
    name: "Multi-Cloud & Infrastructure",
    blurb:
      "Hybrid- and multi-cloud architecture across AWS, Azure, GCP, and private cloud.",
  },
];

/* ============================================================================
   Red Hat (separate top-level entity — Premier Partner)
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
