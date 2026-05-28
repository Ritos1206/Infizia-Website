/**
 * Tier 5 — Red Hat micro-section content shape (7 pages).
 *
 * Single source of truth: `Infizia_Services.docx`. Per the workflow rule
 * locked in Phase 6 — every Red Hat page pulls its services, version
 * tables, managed-services tier table, training course table, and
 * engagement models from the docx.
 *
 * Design language differs from products / solutions / services pages:
 *   • Full-width hero (no copy-left / visual-right split).
 *   • Brand-redhat (`#EE0000`) only — D-04 limits this color to /red-hat.
 *   • One bespoke hero idiom per page (7 total, all new).
 *   • Mid-page sections use the docx's actual data tables where
 *     applicable (RHEL versions, managed tiers, training catalogue).
 *
 * Voice rule (D-40): business-first language. Vendor / tooling names
 * are PRESERVED inside Red Hat content (RHEL, OpenShift, Ansible,
 * Tekton, ArgoCD, Quay, Vault, ACS, NVIDIA, Granite, Llama, Mistral,
 * MLflow, KServe etc.) because this micro-section IS the Red Hat
 * practice — buyers (infrastructure / DevOps / SRE / data-science
 * teams) come here specifically to see those names. The voice rule
 * applies elsewhere on the site.
 */

import type { LucideIcon } from "lucide-react";

/** A friction the buyer feels before this engagement starts. */
export type RedHatPain = {
  icon: LucideIcon;
  title: string;
  body: string;
};

/** A delivered service / capability. The 5 services per page from the docx. */
export type RedHatService = {
  icon: LucideIcon;
  /** e.g., "RHEL Assessment & Readiness Review" */
  title: string;
  /** Short blurb from the docx. */
  body: string;
  /** Optional badge — duration, scope, or qualifier. */
  badge?: string;
  /** Optional bullet list of deliverables / activities / standards. */
  bullets?: string[];
};

/** Engagement model — Assessment / Implementation / Managed / Training. */
export type RedHatEngagementModel = {
  icon: LucideIcon;
  label: string;
  duration: string;
  body: string;
  /** Slug of the buyer this model targets (informational only). */
  targets?: string;
};

/** Outcome tile — measurable change after Infizia ships. */
export type RedHatOutcome = {
  icon: LucideIcon;
  metric: string;
  body: string;
};

/** Use case row — used by OpenShift AI industry table. */
export type RedHatIndustryUseCase = {
  icon: LucideIcon;
  industry: string;
  useCase: string;
  platform: string;
};

/** RHEL version table row. */
export type RedHatRhelVersion = {
  version: string;
  status: "Current" | "Active" | "Extended" | "Ended";
  fullSupport: string;
  maintenance: string;
};

/** Managed-services tier card. */
export type RedHatManagedTier = {
  icon: LucideIcon;
  tier: string;
  scope: string;
  sla: string;
  startingAt: string;
  /** Stack scope chips. */
  stack: string[];
  highlight?: boolean;
};

/** Training course row. */
export type RedHatTrainingCourse = {
  icon: LucideIcon;
  course: string;
  duration: string;
  format: string;
  price: string;
  audience: string;
};

/** OpenShift "6 R's" assessment grid card. */
export type RedHatSixR = {
  /** Single letter — R, R, R, R, R, R. */
  letter: string;
  label: string;
  body: string;
};

/** OpenShift DevSecOps pipeline stage. */
export type RedHatPipelineStage = {
  icon: LucideIcon;
  label: string;
  tooling: string;
};

/** Ansible playbook category bucket. */
export type RedHatPlaybookCategory = {
  icon: LucideIcon;
  category: string;
  body: string;
  examples: string[];
};

/** Standards / compliance baseline (RHEL hardening). */
export type RedHatStandard = {
  code: string;
  full: string;
};

/** A pillar card on the overview page (one of the 6 capabilities). */
export type RedHatPillar = {
  slug: string;
  /** Display label, kept short — "RHEL", "OpenShift", … */
  label: string;
  /** Long-form name — "Red Hat Enterprise Linux", … */
  fullName: string;
  /** Primary buyer audience — pulled from docx Table 0. */
  buyer: string;
  /** Short blurb. */
  body: string;
  icon: LucideIcon;
};

/** Section heading shape — kicker + title + lede repeated across the page. */
export type RedHatSectionHeading = {
  kicker: string;
  title: string;
  lede: string;
};

/* ============================================================================
   Per-page content shapes
   ============================================================================ */

/** Overview page (/red-hat) — hub. */
export type RedHatOverviewContent = {
  /** Hero kicker — e.g., "Red Hat Stack Implementation". */
  kicker: string;
  /** Hero title (split over two lines via `<br />` rendered in component). */
  title: string;
  /** Hero tagline / sub-headline. */
  tagline: string;
  /** Positioning paragraph. */
  positioning: string;

  /** 6 pillar cards — one per /red-hat/* sub-page. */
  pillars: RedHatPillar[];

  /** 4 engagement models from the docx. */
  engagement: RedHatSectionHeading & {
    items: RedHatEngagementModel[];
  };

  /** Why-Infizia outcome tiles. */
  outcomes: RedHatSectionHeading & {
    items: RedHatOutcome[];
  };
};

/** Service-page content (RHEL / OpenShift / Ansible / OpenShift AI). */
export type RedHatServicePageContent = {
  slug: "rhel" | "openshift" | "ansible" | "openshift-ai";
  /** "Red Hat Enterprise Linux" etc. */
  name: string;
  /** Short label — "RHEL", "OpenShift", … */
  shortLabel: string;
  /** Hero kicker — "Service · Red Hat Enterprise Linux". */
  kicker: string;
  /** Headline above the bespoke hero canvas. */
  title: string;
  /** Tagline — "The Enterprise OS Standard — Deployed Right." */
  tagline: string;
  /** Positioning paragraph. */
  positioning: string;
  /** Primary CTA label (e.g., "Request a RHEL Assessment"). */
  primaryCtaLabel: string;
  /** Secondary CTA label (e.g., "Download RHEL Migration Guide"). */
  secondaryCtaLabel: string;

  /** 4 frictions the buyer is currently paying for. */
  pain: RedHatSectionHeading & { items: RedHatPain[] };

  /** 5 service cards — what we deliver. */
  services: RedHatSectionHeading & { items: RedHatService[] };

  /** 4 engagement-model cards. */
  engagement: RedHatSectionHeading & { items: RedHatEngagementModel[] };

  /** 4 outcome tiles. */
  outcomes: RedHatSectionHeading & { items: RedHatOutcome[] };

  /** Optional page-specific extras. */
  extras?: {
    /** RHEL version table. */
    rhelVersions?: RedHatRhelVersion[];
    /** RHEL standards (CIS / STIG / PCI / ISO / NIST). */
    standards?: RedHatStandard[];
    /** OpenShift 6 R's. */
    sixRs?: RedHatSixR[];
    /** OpenShift DevSecOps pipeline. */
    pipeline?: RedHatPipelineStage[];
    /** Ansible playbook categories. */
    playbookCategories?: RedHatPlaybookCategory[];
    /** OpenShift AI foundation models. */
    foundationModels?: { name: string; family: string }[];
    /** OpenShift AI industry use case atlas. */
    industryUseCases?: RedHatIndustryUseCase[];
  };
};

/** Managed-services page (/red-hat/managed-services). */
export type RedHatManagedServicesContent = {
  kicker: string;
  title: string;
  tagline: string;
  positioning: string;

  /** Tier table — 4 cards. */
  tiers: RedHatSectionHeading & { items: RedHatManagedTier[] };

  /** What's included in any managed contract. */
  inclusions: RedHatSectionHeading & {
    items: { icon: LucideIcon; title: string; body: string }[];
  };

  /** Outcome tiles. */
  outcomes: RedHatSectionHeading & { items: RedHatOutcome[] };
};

/** Training page (/red-hat/training). */
export type RedHatTrainingContent = {
  kicker: string;
  title: string;
  tagline: string;
  positioning: string;

  /** Course catalogue — 6 rows. */
  catalogue: RedHatSectionHeading & { items: RedHatTrainingCourse[] };

  /** Format / delivery / discount info row. */
  formats: RedHatSectionHeading & {
    items: { icon: LucideIcon; title: string; body: string }[];
  };

  /** Outcome tiles. */
  outcomes: RedHatSectionHeading & { items: RedHatOutcome[] };
};
