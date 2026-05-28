/**
 * Enterprise Web & App Development service — content brief.
 *
 * Source of truth: corporate deck page 4 description —
 * "Custom software solutions to optimize workflows, increase productivity,
 * and enhance business efficiency."
 *
 * Brand accent: blue (engineering, foundation). Bespoke hero idiom:
 * Multi-Surface Sync Frame — one product surface rendering across 4
 * device frames (mobile · tablet · web · kiosk) with shared state
 * syncing between them.
 */

import {
  Boxes,
  ClipboardCheck,
  CloudCog,
  Code2,
  Compass,
  Cpu,
  Database,
  GanttChartSquare,
  Gauge,
  Globe,
  Layers,
  LayoutGrid,
  LifeBuoy,
  LineChart,
  Monitor,
  Package,
  PenTool,
  Rocket,
  ScrollText,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Tablet,
  TimerReset,
  TrendingUp,
  Wrench,
} from "lucide-react";

import type { ServiceContent } from "./types";

export const webAppDevelopmentContent: ServiceContent = {
  slug: "web-app-development",
  name: "Enterprise Web & App Development",
  shortLabel: "Web & App",
  accent: "blue",

  tagline: "Custom software that fits the business — not the other way around.",

  positioning:
    "Off-the-shelf platforms force the business to bend around their assumptions. Enterprise web and app development from Infizia inverts that — software shaped exactly to your workflows, your data, your team's reality. Web, mobile, tablet, kiosk — one product surface that syncs across every channel the customer touches and every desk the employee works on.",

  pain: {
    kicker: "What's slowing you down",
    title: "Generic platforms cap how far you can go.",
    lede: "When the business grows past what an off-the-shelf platform was designed to do, every workaround compounds — until the cost of running on it is bigger than the cost of replacing it.",
    items: [
      {
        icon: Boxes,
        title: "Three vendor tools, one workflow",
        body: "Sales lives in one tool, ops in another, finance in a third. Every cross-team workflow becomes an integration project that nobody owns end to end.",
      },
      {
        icon: Smartphone,
        title: "Mobile feels like an afterthought",
        body: "Field teams, store managers, and on-the-go decision makers get a stripped-down mobile view that's missing half the desktop functionality — so the work happens twice.",
      },
      {
        icon: Layers,
        title: "Custom logic gets buried in plugins",
        body: "Every business-specific rule ends up as a plugin, a Zap, or a workaround. After 18 months, the platform is held together by tribal knowledge and a team afraid to touch it.",
      },
      {
        icon: TimerReset,
        title: "Releases take quarters",
        body: "A change that should ship in a week takes three — because the change request has to negotiate four vendor roadmaps. By the time it lands, the requirement has moved.",
      },
    ],
  },

  capabilities: {
    kicker: "What we deliver",
    title: "From the data model to the device.",
    lede: "We design, build, and operate end-to-end web and mobile platforms — not just front-ends, not just back-ends, the full vertical slice.",
    items: [
      {
        icon: PenTool,
        title: "Product design & UX",
        body: "Discovery, journey mapping, design systems, and high-fidelity prototypes. Every screen tested against real workflows before a line of production code lands.",
      },
      {
        icon: Code2,
        title: "Custom web platforms",
        body: "Server-rendered, performance-first, SEO-grade web platforms that hold up at enterprise scale — admin consoles, customer portals, marketplaces, dashboards.",
      },
      {
        icon: Smartphone,
        title: "Native & cross-platform mobile",
        body: "iOS and Android apps with native performance and a shared design system — built for daily-use enterprise scenarios, not weekend marketing experiments.",
      },
      {
        icon: Database,
        title: "API & data architecture",
        body: "Domain-modelled APIs, event-driven backends, and clean data contracts that let the front-end, mobile, and integration partners all read from the same truth.",
      },
      {
        icon: ShieldCheck,
        title: "Security & compliance baked in",
        body: "Authentication, authorization, audit logging, encryption, and compliance scaffolding (SOC 2, ISO, GDPR) wired in from day one — not bolted on at the end.",
      },
      {
        icon: Wrench,
        title: "Run, maintain, and evolve",
        body: "Post-launch retainer support — monitoring, incident response, minor releases, and a steady cadence of feature work. The platform keeps moving with the business.",
      },
    ],
  },

  engagement: {
    kicker: "How we work together",
    title: "Four ways to start the engagement.",
    lede: "Right shape for the right stage. We meet you where the conversation actually is — discovery, fixed-scope build, retainer, or assessment of an existing system.",
    items: [
      {
        icon: Compass,
        label: "Discovery & Advisory",
        duration: "2–4 weeks",
        body: "Joint workshops to map workflows, scope the platform, and write the build brief. Ends with a fixed-scope proposal you can take to the board.",
      },
      {
        icon: Rocket,
        label: "Implementation Project",
        duration: "Fixed scope",
        body: "End-to-end delivery — design, build, test, launch. Defined milestones, defined cost, defined success criteria.",
      },
      {
        icon: LifeBuoy,
        label: "Managed Engineering",
        duration: "Monthly retainer",
        body: "Ongoing engineering capacity — bug fixes, minor releases, performance work, and a steady pipeline of feature work month after month.",
      },
      {
        icon: ClipboardCheck,
        label: "Audit & Modernisation",
        duration: "3–6 weeks",
        body: "We audit your existing platform — code, infra, security, performance — and deliver a modernisation roadmap with effort estimates and risk analysis.",
      },
    ],
  },

  useCases: {
    kicker: "Where we deliver",
    title: "Built for the businesses that need their own software.",
    lede: "Wherever the standard platform stops being enough — D2C brands, regulated sectors, multi-location operators — the same playbook scales.",
    items: [
      {
        icon: Globe,
        title: "Customer-facing platforms",
        body: "Branded storefronts, marketplaces, customer portals — performance-first, conversion-optimised, and shaped to your category instead of a template.",
      },
      {
        icon: GanttChartSquare,
        title: "Operations & back-office systems",
        body: "Custom workflow tools, admin consoles, ticketing, and dashboards. The bespoke kind, designed around your actual operating model.",
      },
      {
        icon: ScrollText,
        title: "Regulated & specialist sectors",
        body: "Healthcare, financial services, legal, public sector — where compliance, audit, and data residency aren't optional. We build with those constraints first.",
      },
    ],
  },

  outcomes: {
    kicker: "What changes",
    title: "Faster releases. Cleaner data. Lower TCO.",
    lede: "Custom software is an investment — and it pays back in release velocity, data quality, and the ability to ship a competitive feature without negotiating a vendor roadmap.",
    items: [
      {
        icon: TrendingUp,
        metric: "+3× release velocity",
        body: "Weekly to fortnightly releases on a domain-modelled platform — versus the quarterly cycle that off-the-shelf platforms force.",
      },
      {
        icon: Gauge,
        metric: "<200ms response",
        body: "Performance budgets enforced from day one. Server-rendered, edge-cached, and observed in production — no surprise slowdowns at scale.",
      },
      {
        icon: LineChart,
        metric: "−40% total cost",
        body: "Three vendor licences + integration glue + workaround tax adds up. Custom software collapses the per-seat sprawl into one owned asset.",
      },
      {
        icon: Sparkles,
        metric: "Owned, not rented",
        body: "Source code, IP, and infrastructure stay yours. The platform is a balance-sheet asset, not a recurring vendor dependency.",
      },
    ],
  },
};

/** Sample surfaces rendered by the bespoke MultiSurfaceFrame hero. */
export const WEBAPP_HERO_SURFACES = [
  { id: "web", label: "Web · Admin", icon: Monitor, role: "Manager" },
  { id: "tablet", label: "Tablet · POS", icon: Tablet, role: "Cashier" },
  { id: "mobile", label: "Mobile · Field", icon: Smartphone, role: "Field rep" },
  { id: "kiosk", label: "Kiosk · Lobby", icon: LayoutGrid, role: "Customer" },
] as const;

export const WEBAPP_BADGES = [
  { icon: Sparkles, label: "Owned · IP transfer at launch" },
  { icon: ShieldCheck, label: "Compliance-grade by default" },
  { icon: CloudCog, label: "Cloud-native · multi-region" },
  { icon: Cpu, label: "Mobile + web + kiosk" },
  { icon: Package, label: "Design system shipped" },
] as const;
