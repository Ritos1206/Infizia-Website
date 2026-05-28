/**
 * /red-hat — Overview page content.
 *
 * Source: `Infizia_Services.docx` (Services Overview + Engagement Models).
 * Headline pulled verbatim: "The Full Red Hat Stack. One Trusted Partner."
 *
 * Six pillars match REDHAT_SERVICES in `lib/constants.ts`:
 *   RHEL · OpenShift · Ansible · OpenShift AI · Managed Services · Training
 *
 * Buyer audiences from docx Table 0 (Services Overview):
 *   RHEL → Infrastructure Teams
 *   OpenShift → Application & DevOps Teams
 *   Ansible → Ops & SRE Teams
 *   OpenShift AI → Data Science & AI Teams
 *
 * Per D-69, the website does NOT telegraph "Premier Partner". The docx
 * states it; the site copy stays neutral.
 */

import {
  Activity,
  Award,
  BrainCircuit,
  Compass,
  GraduationCap,
  Handshake,
  HeadphonesIcon,
  Layers,
  Network,
  Rocket,
  Server,
  ShieldCheck,
} from "lucide-react";

import type { RedHatOverviewContent } from "./types";

export const redHatOverviewContent: RedHatOverviewContent = {
  kicker: "Red Hat Stack · Implementation Practice",
  title: "The full Red Hat stack.\nOne trusted partner.",
  tagline:
    "Assessment. Implementation. Managed Services. Training. Across every Red Hat product family.",
  positioning:
    "Red Hat's portfolio is powerful — but only as powerful as the partner who implements it. Infizia delivers deep specialisation across every major Red Hat product family: RHEL standardisation, OpenShift container platforms, Ansible automation at scale, and OpenShift AI for production model serving — designed, deployed, and operated by an accountable engineering team.",

  pillars: [
    {
      slug: "rhel",
      label: "RHEL",
      fullName: "Red Hat Enterprise Linux",
      buyer: "Infrastructure Teams",
      body: "OS standardisation, migration, hardening, and lifecycle management for mission-critical workloads.",
      icon: Server,
    },
    {
      slug: "openshift",
      label: "OpenShift",
      fullName: "OpenShift Container Platform",
      buyer: "Application & DevOps Teams",
      body: "Enterprise Kubernetes — production-hardened, security-first, multi-cloud, and edge-ready.",
      icon: Layers,
    },
    {
      slug: "ansible",
      label: "Ansible",
      fullName: "Ansible Automation Platform",
      buyer: "Ops & SRE Teams",
      body: "IT automation, compliance, configuration management, and event-driven operations at scale.",
      icon: Network,
    },
    {
      slug: "openshift-ai",
      label: "OpenShift AI",
      fullName: "Red Hat AI / OpenShift AI",
      buyer: "Data Science & AI Teams",
      body: "MLOps, model serving, GPU workloads, LLM fine-tuning, and AI governance on infrastructure you own.",
      icon: BrainCircuit,
    },
    {
      slug: "managed-services",
      label: "Managed",
      fullName: "Managed Services",
      buyer: "CIO / Head of Infrastructure",
      body: "24×7 SLA-backed operations, named engineers, monthly service reviews, and proactive maintenance.",
      icon: HeadphonesIcon,
    },
    {
      slug: "training",
      label: "Training",
      fullName: "Training & Enablement",
      buyer: "Internal Capability Teams",
      body: "RHEL · Ansible · OpenShift · OpenShift AI courses with lab environments and bootcamp formats.",
      icon: GraduationCap,
    },
  ],

  engagement: {
    kicker: "How we work together",
    title: "Four engagement models. One accountable team.",
    lede: "Right shape for the right stage of adoption — assessment when you're evaluating, implementation when you're rolling out, managed services when you're scaling, training when you're building internal capability.",
    items: [
      {
        icon: Compass,
        label: "Assessment & Advisory",
        duration: "2–4 weeks",
        body: "For teams evaluating Red Hat products. Joint workshops, current-state inventory, target architecture, and a phased roadmap with effort and TCO estimates.",
        targets: "Evaluation",
      },
      {
        icon: Rocket,
        label: "Implementation Projects",
        duration: "Fixed scope",
        body: "Fixed-scope delivery engagements with milestones, validation gates, and sign-off. End-to-end across the chosen Red Hat product family.",
        targets: "Build",
      },
      {
        icon: HeadphonesIcon,
        label: "Managed Services",
        duration: "24×7 retainer",
        body: "Ongoing SLA-backed operations and support — named engineers, defined response times, monthly service reviews, proactive maintenance.",
        targets: "Run",
      },
      {
        icon: GraduationCap,
        label: "Training & Enablement",
        duration: "2–4 day cohorts",
        body: "Upskilling internal teams on RHEL administration, Ansible automation, OpenShift, and OpenShift AI — with full lab environments.",
        targets: "Enable",
      },
    ],
  },

  outcomes: {
    kicker: "Why teams pick Infizia",
    title: "One partner across the full stack.",
    lede: "Most Red Hat customers run two or three of the four product families — and pay two or three different partners to support them. Infizia consolidates that into one accountable team across the whole stack.",
    items: [
      {
        icon: Handshake,
        metric: "One accountable team",
        body: "RHEL, OpenShift, Ansible, and OpenShift AI under one engagement — no finger-pointing across vendor boundaries when something breaks.",
      },
      {
        icon: ShieldCheck,
        metric: "Compliance baked in",
        body: "CIS · DISA STIG · PCI-DSS · ISO 27001 · NIST 800-53 — controls applied consistently across every layer, automated via Ansible roles.",
      },
      {
        icon: Activity,
        metric: "24×7 backed by SLAs",
        body: "Foundation to AI Platform tiers — 4-hour to 1-hour response, monthly service reviews, named delivery managers, defined escalation paths.",
      },
      {
        icon: Award,
        metric: "Certified Red Hat partner",
        body: "Engineers certified across the Red Hat exam catalogue — RHCSA, RHCE, OpenShift Specialists, Ansible Specialists.",
      },
    ],
  },
};
