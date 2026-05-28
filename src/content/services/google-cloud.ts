/**
 * Google Cloud & Infrastructure service — content brief.
 *
 * Source of truth: corporate deck page 4 description —
 * "Comprehensive cloud management ensuring performance, scalability,
 * and cost efficiency across Google Cloud (GCP)."
 *
 * Brand accent: sky (cloud, infrastructure). Bespoke hero idiom:
 * Regional Topology Map — 3 GCP regions arranged horizontally
 * (asia-south1 · us-central1 · europe-west1) each carrying a stack
 * of compute / storage / network services, with traffic indicators
 * flowing between regions.
 */

import {
  Activity,
  AlarmClock,
  BarChart3,
  Building2,
  CheckCircle2,
  Cloud,
  CloudCog,
  Cog,
  Compass,
  Cpu,
  Database,
  DollarSign,
  Gauge,
  GitMerge,
  Globe,
  HardDrive,
  HelpingHand,
  Layers,
  LineChart,
  Lock,
  Network,
  Rocket,
  Search,
  ServerCog,
  ShieldCheck,
  Signal,
  Sparkles,
  Telescope,
  TrendingDown,
  TrendingUp,
  Zap,
} from "lucide-react";

import type { ServiceContent } from "./types";

export const googleCloudContent: ServiceContent = {
  slug: "google-cloud",
  name: "Google Cloud & Infrastructure",
  shortLabel: "Google Cloud",
  accent: "sky",

  tagline: "Performance. Scalability. Cost efficiency. Across every region.",

  positioning:
    "Cloud done right is invisible — performance is fast, scale is automatic, and the bill at the end of the month is exactly what was forecast. Cloud done wrong is the opposite — over-provisioned services nobody owns, latency hot-spots in regions nobody monitors, and surprise charges that swallow the year's savings. Infizia delivers comprehensive Google Cloud management — architecture, migration, optimisation, and operations — across GCP and the broader cloud surface, so the infrastructure stays calm while the business scales.",

  pain: {
    kicker: "What's slowing you down",
    title: "Cloud bills grow faster than the business does.",
    lede: "Most cloud spend isn't waste — it's drift. A workload sized for peak that never returns to baseline. A region nobody decommissioned. A pipeline that retries on every minor failure.",
    items: [
      {
        icon: DollarSign,
        title: "The cloud bill keeps surprising",
        body: "Every month brings a number nobody predicted. Without tagging, budgets, and rightsizing, the spend grows faster than the revenue — and finance has no levers to pull.",
      },
      {
        icon: Globe,
        title: "Single-region by default",
        body: "Production runs in one region because the migration ran out of time before multi-region landed. Latency hurts users in other geographies, and a regional outage takes the business offline.",
      },
      {
        icon: AlarmClock,
        title: "Manual scaling, manual everything",
        body: "Capacity changes go through a ticket. New environments take weeks to spin up. The team firefights provisioning instead of building product.",
      },
      {
        icon: ShieldCheck,
        title: "Compliance is a quarterly fire drill",
        body: "Audit comes around and the team scrambles to gather evidence. Without continuous compliance, IAM hygiene, and security monitoring, every audit becomes a project unto itself.",
      },
    ],
  },

  capabilities: {
    kicker: "What we deliver",
    title: "From the architecture board to the audit log.",
    lede: "End-to-end Google Cloud delivery — design the right architecture, migrate cleanly, optimise continuously, and operate around the clock.",
    items: [
      {
        icon: Compass,
        title: "Cloud architecture & design",
        body: "Multi-region, multi-environment GCP architectures designed for your workload mix — compute, data, AI, application, and edge — with cost and performance modelled upfront.",
      },
      {
        icon: GitMerge,
        title: "Migration & modernisation",
        body: "Application portfolio assessment, workload re-platforming, and phased migration from on-prem or other clouds to GCP — with rollback plans and parallel-run validation.",
      },
      {
        icon: Cog,
        title: "Infrastructure as code",
        body: "Every resource versioned, every change reviewable, every environment reproducible — Terraform, Cloud Build, and GitOps wired into the day-one delivery pipeline.",
      },
      {
        icon: BarChart3,
        title: "FinOps & cost optimisation",
        body: "Tagging strategy, budget controls, rightsizing, committed-use planning, and continuous cost reviews — typically uncovering 25-40% of spend that can be reclaimed safely.",
      },
      {
        icon: Lock,
        title: "Security & compliance",
        body: "IAM hygiene, VPC service controls, KMS, audit logging, and continuous compliance against ISO / SOC 2 / GDPR — so audits become a query, not a quarter.",
      },
      {
        icon: ServerCog,
        title: "Day-2 operations & SRE",
        body: "24x7 monitoring, incident response, capacity planning, and reliability engineering — keeping the platform running while the team focuses on product.",
      },
    ],
  },

  engagement: {
    kicker: "How we work together",
    title: "Four ways to start the engagement.",
    lede: "From a foundations review to fully managed cloud operations — the right shape for the right stage.",
    items: [
      {
        icon: Telescope,
        label: "Cloud Assessment",
        duration: "2–4 weeks",
        body: "Architecture, security, and FinOps audit of your current GCP footprint — prioritised remediation roadmap with ROI estimates per recommendation.",
      },
      {
        icon: Rocket,
        label: "Migration Project",
        duration: "Quarterly milestones",
        body: "End-to-end migration to GCP — from initial application portfolio scoring to full production cutover, with parallel-run validation and rollback.",
      },
      {
        icon: HelpingHand,
        label: "Managed Cloud Ops",
        duration: "Monthly retainer",
        body: "24x7 operations, incident response, FinOps reviews, security monitoring, and platform reliability work — your cloud team without the headcount.",
      },
      {
        icon: Search,
        label: "FinOps Engagement",
        duration: "Outcome-based",
        body: "Pure cost-optimisation engagement — typically uncovering 25-40% reclaimable spend in the first quarter, paid against measured savings.",
      },
    ],
  },

  useCases: {
    kicker: "Where we deliver",
    title: "Wherever the cloud needs to behave like infrastructure, not a science project.",
    lede: "From the start-up's first multi-region rollout to the enterprise's GCP modernisation — the same playbook scales to the operating model.",
    items: [
      {
        icon: Building2,
        title: "Mid-market & enterprise GCP",
        body: "Multi-region, multi-account GCP estates with proper landing-zone design, IAM hygiene, FinOps controls, and continuous compliance — operated 24x7.",
      },
      {
        icon: Cloud,
        title: "Cloud-native start-ups",
        body: "Day-one cloud architecture done right — Terraform from the start, multi-environment, cost-aware, secure by default. The cloud foundation that scales without rewriting.",
      },
      {
        icon: Database,
        title: "Data & AI workloads",
        body: "BigQuery analytics, Vertex AI pipelines, GKE-based AI training, and hybrid data residency — designed for the modern data + AI workload mix.",
      },
    ],
  },

  outcomes: {
    kicker: "What changes",
    title: "Calmer infrastructure. Predictable bills. Faster ship.",
    lede: "Done right, cloud becomes invisible — the team builds product instead of fighting tickets.",
    items: [
      {
        icon: TrendingDown,
        metric: "−25% to −40% cloud cost",
        body: "FinOps engagement typically reclaims a quarter to two-fifths of monthly spend in the first quarter — without touching availability or performance.",
      },
      {
        icon: Gauge,
        metric: "<100ms global p99",
        body: "Multi-region GCP architecture brings p99 latency under 100ms for global users — measured at the edge, not just the load balancer.",
      },
      {
        icon: Zap,
        metric: "Provision in minutes",
        body: "Infrastructure-as-code pipelines spin up new environments — dev, staging, prod, ephemeral — in minutes instead of weeks of ticket queues.",
      },
      {
        icon: ShieldCheck,
        metric: "Audit-ready by default",
        body: "Continuous compliance scanning + audit logs + IAM hygiene means the next audit is a query against the platform, not a fire drill.",
      },
    ],
  },
};

/**
 * 3 regions rendered in the bespoke RegionalTopologyMap hero. Each
 * region carries a small stack of GCP service tiles. Traffic indicators
 * connect the regions to argue "multi-region · always".
 */
export const GCP_REGIONS = [
  {
    id: "asia-south1",
    label: "asia-south1",
    location: "Mumbai",
    services: [
      { name: "Compute Engine", icon: Cpu },
      { name: "Cloud Storage", icon: HardDrive },
      { name: "Cloud SQL", icon: Database },
    ],
    isPrimary: false,
  },
  {
    id: "us-central1",
    label: "us-central1",
    location: "Iowa",
    services: [
      { name: "GKE", icon: Layers },
      { name: "BigQuery", icon: Database },
      { name: "Vertex AI", icon: Sparkles },
    ],
    isPrimary: true,
  },
  {
    id: "europe-west1",
    label: "europe-west1",
    location: "Belgium",
    services: [
      { name: "Cloud Run", icon: Rocket },
      { name: "Spanner", icon: Database },
      { name: "Cloud CDN", icon: Network },
    ],
    isPrimary: false,
  },
] as const;

export const GCP_BADGES = [
  { icon: Sparkles, label: "GCP-native · multi-region" },
  { icon: ShieldCheck, label: "Compliance-ready · day one" },
  { icon: BarChart3, label: "FinOps · continuous reviews" },
  { icon: Cog, label: "Terraform · GitOps · IaC" },
  { icon: ServerCog, label: "24x7 · managed ops" },
  { icon: Activity, label: "SRE · reliability engineering" },
  { icon: CloudCog, label: "Hybrid · multi-cloud aware" },
  { icon: Signal, label: "Latency budgets enforced" },
  { icon: TrendingUp, label: "Auto-scale · auto-heal" },
  { icon: Lock, label: "VPC SC · KMS · IAM hygiene" },
  { icon: LineChart, label: "Cost forecasts · accurate" },
  { icon: CheckCircle2, label: "Continuous compliance scan" },
] as const;
