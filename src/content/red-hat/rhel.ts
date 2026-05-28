/**
 * /red-hat/rhel — Red Hat Enterprise Linux page content.
 *
 * Source: `Infizia_Services.docx` Section 1 (RHEL).
 * Hero idiom: Lifecycle Timeline River — version bands flowing along
 * a 2024 → 2035 axis with a "today" cursor.
 */

import {
  AlertTriangle,
  Cloud,
  Compass,
  FileSearch,
  GanttChartSquare,
  GraduationCap,
  HeadphonesIcon,
  PackageCheck,
  Repeat,
  Rocket,
  ShieldCheck,
  TimerReset,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

import type { RedHatServicePageContent } from "./types";

export const rhelContent: RedHatServicePageContent = {
  slug: "rhel",
  name: "Red Hat Enterprise Linux",
  shortLabel: "RHEL",
  kicker: "Service · Red Hat Enterprise Linux",
  title: "The enterprise OS standard.\nDeployed right.",
  tagline:
    "RHEL is the most trusted Linux platform in the world. We make sure you adopt, harden, and maintain it the way mission-critical workloads demand.",
  positioning:
    "Out-of-the-box RHEL is not production-hardened. CIS, STIG, PCI-DSS, ISO, NIST — every regulatory framework needs a different baseline applied consistently across thousands of nodes. Infizia delivers RHEL standardisation end to end: assessment, migration, hardening, patch management, and cloud — automated through Leapp, Satellite, OpenSCAP, and Ansible STIG roles.",
  primaryCtaLabel: "Request a RHEL Assessment",
  secondaryCtaLabel: "Corporate Brochure",

  pain: {
    kicker: "What's slowing you down",
    title: "Linux without governance is technical debt waiting to compound.",
    lede: "Every CentOS server still in production, every un-hardened RHEL image, every manually-applied patch — they're all working today and a finding tomorrow. RHEL governance is not optional.",
    items: [
      {
        icon: AlertTriangle,
        title: "CentOS / Oracle / SLES drift",
        body: "Production fleets running mixed Linux distros that the security team has to audit one server at a time. Standardising on RHEL is months of work nobody has time for.",
      },
      {
        icon: ShieldCheck,
        title: "Hardening done case-by-case",
        body: "CIS, STIG, PCI controls applied manually per server. Six months later the audit team finds drift on 30% of nodes. The next audit cycle starts with the same finding.",
      },
      {
        icon: TimerReset,
        title: "Patch cycles that take quarters",
        body: "CVE triage, change windows, and rolling updates negotiated server-by-server. Critical CVEs land while the patching backlog still has the previous quarter's tickets open.",
      },
      {
        icon: GanttChartSquare,
        title: "End-of-life dates that surprise you",
        body: "RHEL 7 ELS expires in June 2028. RHEL 6 already ended. The server that's been running fine for 5 years is suddenly out of support — with no migration plan written down anywhere.",
      },
    ],
  },

  services: {
    kicker: "What we deliver",
    title: "Five services that take RHEL from \"installed\" to \"governed\".",
    lede: "Each service is a fixed-scope engagement with defined deliverables and sign-off criteria — pulled directly from the Infizia services catalog.",
    items: [
      {
        icon: FileSearch,
        title: "RHEL Assessment & Readiness Review",
        body: "Evaluate your current OS landscape — Windows Server, CentOS, Ubuntu, or legacy UNIX — and deliver a detailed migration roadmap with risk analysis, effort estimation, and TCO projections.",
        badge: "2–4 weeks",
        bullets: [
          "Current State Infrastructure Inventory",
          "RHEL Compatibility Matrix",
          "Migration Priority Matrix (by workload criticality)",
          "TCO & ROI Analysis Report",
        ],
      },
      {
        icon: Rocket,
        title: "RHEL Deployment & Migration",
        body: "End-to-end migration of your server fleet to RHEL — bare metal, VMware, or cloud (AWS · Azure · GCP). Automated via Leapp Upgrade Framework, Ansible playbooks, and custom validation scripts.",
        bullets: [
          "CentOS 7/8 → RHEL 8/9",
          "Oracle Linux → RHEL",
          "SLES / Ubuntu → RHEL",
          "RHEL 7/8 → RHEL 9 (in-place)",
          "AIX / Solaris → RHEL (re-platform)",
        ],
      },
      {
        icon: ShieldCheck,
        title: "Security Hardening & Compliance",
        body: "Industry-standard security baselines and compliance configurations tailored to your regulatory framework — automated via OpenSCAP, SCAP Security Guide, Ansible STIG roles, and Red Hat Insights.",
        bullets: [
          "CIS RHEL Benchmark (Level 1 & 2)",
          "DISA STIG for RHEL 8 / 9",
          "PCI-DSS hardening controls",
          "ISO 27001 technical controls",
          "NIST 800-53 / RMF alignment",
        ],
      },
      {
        icon: Repeat,
        title: "Patch Management & Lifecycle Operations",
        body: "Structured patching program from CVE triage to zero-downtime rolling updates — Red Hat Satellite Server deployment, canary rollouts, and subscription optimisation.",
        bullets: [
          "Red Hat Satellite Server deployment",
          "Patch baseline (critical · important · moderate)",
          "Canary / staged rollout strategies",
          "CVE impact assessment and exception management",
          "Subscription management and license optimisation",
        ],
      },
      {
        icon: Cloud,
        title: "RHEL on Cloud (AWS · Azure · GCP · Private)",
        body: "Architect and deploy RHEL-based environments on cloud with proper subscription management, image hardening, and CI/CD integration — across all major hyperscalers and private virtualisation.",
        bullets: [
          "AWS EC2 (RHEL AMIs · BYOS · PAYG)",
          "Azure Virtual Machines",
          "Google Compute Engine",
          "VMware vSphere (private cloud)",
          "OpenStack / KVM environments",
        ],
      },
    ],
  },

  engagement: {
    kicker: "How we engage",
    title: "Four ways to start the RHEL conversation.",
    lede: "From a 2-week readiness review to a multi-quarter migration to ongoing managed operations — pick the shape that matches the stage of your RHEL journey.",
    items: [
      {
        icon: Compass,
        label: "Assessment & Advisory",
        duration: "2–4 weeks",
        body: "Current-state inventory, RHEL compatibility scoring, migration priority matrix, and TCO/ROI report. Outputs a phased plan with effort and risk per wave.",
      },
      {
        icon: Rocket,
        label: "Implementation Project",
        duration: "Fixed scope",
        body: "End-to-end fleet migration — pre-migration mapping, OS conversion or fresh install, app compatibility testing, post-migration validation, rollback plan.",
      },
      {
        icon: HeadphonesIcon,
        label: "Managed RHEL Operations",
        duration: "24×7 retainer",
        body: "Foundation tier (≤200 nodes) and up — patch management, compliance reporting, incident response, monthly service reviews. SLA-backed.",
      },
      {
        icon: GraduationCap,
        label: "Training & Enablement",
        duration: "3-day cohort",
        body: "RHEL Administration Fundamentals course — on-site or virtual, full lab environments, group discounts for 5+ attendees.",
      },
    ],
  },

  outcomes: {
    kicker: "What changes",
    title: "Standardised. Hardened. Governed.",
    lede: "RHEL stops being a server-by-server problem and becomes one auditable platform — patched on a calendar, hardened to a baseline, and tracked on one dashboard.",
    items: [
      {
        icon: TrendingDown,
        metric: "−70% audit findings",
        body: "Hardening applied consistently via OpenSCAP and Ansible STIG roles — the same baseline on every node, drift detected automatically.",
      },
      {
        icon: TimerReset,
        metric: "Zero-downtime patching",
        body: "Canary rollouts and rolling updates via Red Hat Satellite — critical CVEs patched within the maintenance window, not the quarter.",
      },
      {
        icon: PackageCheck,
        metric: "One platform, every server",
        body: "CentOS, Oracle Linux, SLES, Ubuntu, AIX, Solaris — all consolidated onto a governed RHEL fleet on a defined timeline.",
      },
      {
        icon: TrendingUp,
        metric: "−25% subscription cost",
        body: "Subscription analysis and license optimisation — most fleets discover unused entitlements within the first 30 days of managed operations.",
      },
    ],
  },

  extras: {
    rhelVersions: [
      {
        version: "RHEL 9.x",
        status: "Current",
        fullSupport: "May 2032",
        maintenance: "2035",
      },
      {
        version: "RHEL 8.x",
        status: "Active",
        fullSupport: "May 2029",
        maintenance: "2032",
      },
      {
        version: "RHEL 7.x",
        status: "Extended",
        fullSupport: "June 2028 (ELS)",
        maintenance: "—",
      },
      {
        version: "RHEL 6.x",
        status: "Ended",
        fullSupport: "June 2024 (ELS ended)",
        maintenance: "—",
      },
    ],

    standards: [
      { code: "CIS", full: "CIS RHEL Benchmark · Level 1 & 2" },
      { code: "STIG", full: "DISA STIG · RHEL 8 & 9" },
      { code: "PCI", full: "PCI-DSS hardening controls" },
      { code: "ISO", full: "ISO 27001 technical controls" },
      { code: "NIST", full: "NIST 800-53 · RMF alignment" },
    ],
  },
};
