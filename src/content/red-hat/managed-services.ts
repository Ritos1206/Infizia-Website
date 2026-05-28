/**
 * /red-hat/managed-services — Red Hat Managed Services page content.
 *
 * Source: `Infizia_Services.docx` Section 5 (Managed Services).
 * Hero idiom: Operations Bridge — KPI strip + tier ladder + 24-hour
 * incident timeline.
 *
 * Tier table (verbatim from docx):
 *   Foundation     — RHEL operations (≤200 nodes) · 4hr response · Rs 1.5L/mo
 *   Standard       — RHEL + Ansible operations · 2hr response · Rs 3L/mo
 *   Enterprise     — Full stack (RHEL + OpenShift + Ansible) · 1hr / 24×7 · Rs 6L/mo
 *   AI Platform    — OpenShift AI + MLOps operations · Custom SLA · On request
 */

import {
  Activity,
  BellRing,
  BrainCircuit,
  ClipboardCheck,
  GitMerge,
  Layers,
  Network,
  Repeat,
  ShieldCheck,
  Sparkles,
  TimerReset,
  TrendingDown,
  Users,
} from "lucide-react";

import type { RedHatManagedServicesContent } from "./types";

export const managedServicesContent: RedHatManagedServicesContent = {
  kicker: "Service · Managed Services",
  title: "Operations excellence.\nWithout building the team.",
  tagline:
    "Foundation to AI Platform tiers. Named engineers. SLA-backed monitoring. Monthly service reviews. Across the full Red Hat stack.",
  positioning:
    "Most enterprises don't want to build a 12-person Red Hat operations team — they want the outcomes that team would deliver. Managed Services from Infizia gives you a dedicated service delivery manager, named engineers across RHEL, Ansible, OpenShift, and OpenShift AI, SLA-backed incident response, and proactive maintenance — all on a fixed monthly retainer scaled to your stack.",

  tiers: {
    kicker: "Tiers · Pick the scope that matches your stack",
    title: "Four tiers. Same accountable team.",
    lede: "Each tier carries a defined scope, a defined response SLA, and a defined starting price. Mix and match nodes, products, and incident windows to land on the tier that fits — or move up as your stack grows.",
    items: [
      {
        icon: Layers,
        tier: "Foundation",
        scope: "RHEL operations (up to 200 nodes)",
        sla: "4-hour response",
        startingAt: "Rs 1.5L / month",
        stack: ["RHEL"],
      },
      {
        icon: Network,
        tier: "Standard",
        scope: "RHEL + Ansible operations",
        sla: "2-hour response",
        startingAt: "Rs 3L / month",
        stack: ["RHEL", "Ansible"],
      },
      {
        icon: ShieldCheck,
        tier: "Enterprise",
        scope: "Full stack (RHEL + OpenShift + Ansible)",
        sla: "1-hour · 24×7",
        startingAt: "Rs 6L / month",
        stack: ["RHEL", "OpenShift", "Ansible"],
        highlight: true,
      },
      {
        icon: BrainCircuit,
        tier: "AI Platform",
        scope: "OpenShift AI + MLOps operations",
        sla: "Custom SLA",
        startingAt: "On request",
        stack: ["OpenShift AI", "MLOps"],
      },
    ],
  },

  inclusions: {
    kicker: "What's included",
    title: "What every managed contract delivers.",
    lede: "Regardless of tier, every managed engagement includes the same governance baseline: named delivery manager, monthly service review, SLA-backed incident response, and proactive maintenance.",
    items: [
      {
        icon: Users,
        title: "Named engineering team",
        body: "Dedicated service delivery manager + named engineers across the products in your tier. Same humans, every ticket — no faceless support pool.",
      },
      {
        icon: BellRing,
        title: "SLA-backed monitoring",
        body: "24×7 monitoring of every node and cluster in scope. Response SLAs aligned to your tier — 4-hour, 2-hour, 1-hour, or custom.",
      },
      {
        icon: ClipboardCheck,
        title: "Monthly service reviews",
        body: "A structured monthly review covering uptime, incidents, change activity, capacity trends, security posture, and the next 30-day plan.",
      },
      {
        icon: Repeat,
        title: "Proactive maintenance",
        body: "Patch cycles, upgrade waves, capacity tuning, and compliance drift remediation — scheduled and executed on your behalf.",
      },
      {
        icon: ShieldCheck,
        title: "Compliance reporting",
        body: "CIS, STIG, PCI, ISO, NIST, CIS Kubernetes — controls measured continuously, drift remediated automatically, audit reports generated on demand.",
      },
      {
        icon: GitMerge,
        title: "Defined escalation paths",
        body: "Known faces, known phone numbers, known on-call rotations — for both severity-1 incidents and ongoing change conversations.",
      },
    ],
  },

  outcomes: {
    kicker: "What changes",
    title: "Outcomes a 12-engineer team would deliver.",
    lede: "On a fixed monthly retainer, with named accountability, proactive maintenance, and the full Red Hat stack covered.",
    items: [
      {
        icon: Activity,
        metric: "99.95%+ uptime",
        body: "Across the supported tier. Continuous monitoring, proactive remediation, and rapid incident response — all baked in.",
      },
      {
        icon: TimerReset,
        metric: "MTTR in minutes",
        body: "1-hour SLA on Enterprise tier · 24×7. Most incidents acknowledged within 5 minutes and remediated within the hour.",
      },
      {
        icon: TrendingDown,
        metric: "−50% operations headcount",
        body: "Customers running Foundation through AI Platform tiers typically run with half the in-house Red Hat headcount they would otherwise need.",
      },
      {
        icon: Sparkles,
        metric: "One throat to choke",
        body: "RHEL, OpenShift, Ansible, OpenShift AI — one accountable team across the stack. No vendor finger-pointing on incident calls.",
      },
    ],
  },
};
