/**
 * /red-hat/ansible — Ansible Automation Platform page content.
 *
 * Source: `Infizia_Services.docx` Section 3 (Ansible).
 * Hero idiom: Automation Orchestra — playbook → execution wave →
 * results matrix, with EDA trigger panel.
 */

import {
  Activity,
  AlertTriangle,
  Boxes,
  ClipboardCheck,
  Cloud,
  Code2,
  Compass,
  FileSearch,
  GraduationCap,
  HeadphonesIcon,
  Network,
  Rocket,
  Server,
  ShieldCheck,
  Siren,
  TimerReset,
  TrendingDown,
  TrendingUp,
  Zap,
} from "lucide-react";

import type { RedHatServicePageContent } from "./types";

export const ansibleContent: RedHatServicePageContent = {
  slug: "ansible",
  name: "Ansible Automation Platform",
  shortLabel: "Ansible",
  kicker: "Service · Ansible Automation Platform",
  title: "Automate everything.\nBreak nothing.",
  tagline:
    "Ansible is the most widely adopted IT automation platform in the world. We're among the most experienced teams at deploying it at enterprise scale.",
  positioning:
    "Most teams know what they want to automate — patching, provisioning, compliance, incident response. The hard part is doing it at the scale of a regulated enterprise: HA control planes, RBAC tied to AD, secrets via Vault, ITSM tied to ServiceNow, observability into Splunk, and a content library your team can actually own. We deploy AAP that way, and we hand it over.",
  primaryCtaLabel: "Get an Automation Assessment",
  secondaryCtaLabel: "Corporate Brochure",

  pain: {
    kicker: "What's slowing you down",
    title: "Automation that lives in three engineers' heads is not automation.",
    lede: "Scripts in Git, runbooks in Confluence, and tribal knowledge in Slack threads — that's the state of automation in most enterprises. None of it scales, and none of it survives the engineer leaving.",
    items: [
      {
        icon: AlertTriangle,
        title: "Scripts that nobody owns",
        body: "Bash scripts, PowerShell scripts, Python utilities — scattered across repositories, on jump boxes, on engineers' laptops. Half of them stop working when someone updates the OS.",
      },
      {
        icon: ClipboardCheck,
        title: "Compliance enforced manually",
        body: "Audit comes around every quarter. The team scrambles to apply CIS controls by hand on whatever sample of nodes they can reach. The drift report is bigger every cycle.",
      },
      {
        icon: TimerReset,
        title: "Provisioning that takes a week",
        body: "New VM? File a ticket. Wait for storage. Wait for network. Wait for the OS team. Wait for hardening. Wait for monitoring. By the time the dev team gets the VM, the requirement has changed.",
      },
      {
        icon: Siren,
        title: "Ops alerts that wake humans",
        body: "Disk full at 03:00 — page the on-call. Service down — page the on-call. Most of those alerts have a deterministic remediation that nobody's automated yet.",
      },
    ],
  },

  services: {
    kicker: "What we deliver",
    title: "Five services that take Ansible from \"some scripts\" to \"the platform\".",
    lede: "Discovery and ROI quantification, AAP deployment with all the enterprise integrations, production-grade content development, Event-Driven Ansible, and full hand-off so your team owns it after we leave.",
    items: [
      {
        icon: FileSearch,
        title: "Automation Discovery & Roadmap",
        body: "Interview operations teams, audit manual runbooks, and identify the highest-value automation opportunities — quantified by time saved, risk reduced, and compliance improved.",
        badge: "2–3 weeks",
        bullets: [
          "Manual task inventory and automation scoring",
          "Automation ROI projection (hours saved per year)",
          "Ansible adoption roadmap (90-day · 6-month · 12-month)",
          "Build-vs-buy analysis for content collections",
        ],
      },
      {
        icon: Server,
        title: "Ansible Automation Platform Deployment",
        body: "Production-ready AAP — on-premise, cloud, or hybrid — with HA, RBAC, and ITSM integration. Plus all the enterprise integrations: ServiceNow, Splunk, Vault, AD, Jira, PagerDuty.",
        bullets: [
          "Single-node (small teams · PoC)",
          "Cluster HA (enterprise production)",
          "Automation Mesh (multi-site · edge)",
          "Containerised AAP on OpenShift",
          "ServiceNow · Splunk · Vault · AD · Jira · PagerDuty integrations",
        ],
      },
      {
        icon: Code2,
        title: "Playbook & Role Development",
        body: "Production-quality playbooks, roles, and collections written to Ansible Best Practices — full documentation, Molecule testing, and Git repository structure with branching standards.",
        bullets: [
          "Infrastructure automation (provisioning · upgrades · networking)",
          "Security & compliance (CIS · STIG · CVE patching · firewall)",
          "Application deployment (middleware · DBs · containers · config)",
          "Cloud automation (EC2 / Azure VM / VPC / S3 / IAM)",
          "Network automation (Cisco · Juniper · F5 · compliance auditing)",
        ],
      },
      {
        icon: Zap,
        title: "Event-Driven Ansible (EDA)",
        body: "Move beyond scheduled automation to reactive automation. Respond to infrastructure events, alerts, and service requests in real time — without human intervention.",
        bullets: [
          "Auto-remediation of monitoring alerts (disk full → cleanup; service down → restart)",
          "Auto-scaling infrastructure in response to load",
          "Automatic ITSM ticket creation and resolution",
          "Security incident response (quarantine compromised host)",
          "Webhook-triggered deployments from CI/CD",
        ],
      },
      {
        icon: GraduationCap,
        title: "Training & Content Hand-off",
        body: "We don't build black boxes. Every engagement includes knowledge transfer — playbook documentation, training sessions, Molecule testing setup, and a structured content hand-off so your team owns and extends the automation.",
        bullets: [
          "Playbook and role documentation (README, variable refs)",
          "Internal team training (beginner to advanced)",
          "Molecule testing framework setup",
          "Git repository structure and branching standards",
        ],
      },
    ],
  },

  engagement: {
    kicker: "How we engage",
    title: "Four entry points into the Ansible practice.",
    lede: "Discovery to roadmap, deployment to managed operations, training to full content hand-off — pick the engagement model that matches the maturity of your automation programme.",
    items: [
      {
        icon: Compass,
        label: "Assessment & Roadmap",
        duration: "2–3 weeks",
        body: "Manual task inventory, ROI projection, and a phased adoption roadmap with quick-win playbooks identified for the first sprint.",
      },
      {
        icon: Rocket,
        label: "AAP Implementation",
        duration: "Fixed scope",
        body: "Production-grade AAP with HA + RBAC + ITSM integration, plus the first wave of production playbooks against your highest-ROI use cases.",
      },
      {
        icon: HeadphonesIcon,
        label: "Managed Automation",
        duration: "24×7 retainer",
        body: "AAP operations + content lifecycle management + EDA rule maintenance — included in Standard tier and above.",
      },
      {
        icon: GraduationCap,
        label: "Ansible Training",
        duration: "3-day cohort",
        body: "Ansible for Enterprise Automation course — on-site or virtual, full lab environment, group discounts for 5+ attendees.",
      },
    ],
  },

  outcomes: {
    kicker: "What changes",
    title: "Hours back. Drift gone. Pages silenced.",
    lede: "Manual operations work converts to maintained playbooks. Drift remediation runs on a schedule. Common alerts auto-remediate before the on-call sees the page.",
    items: [
      {
        icon: TrendingUp,
        metric: "+5,000 hrs / yr saved",
        body: "Typical first-year ROI from automating the top-20 manual tasks identified in discovery — measured in engineer-hours converted to playbook runs.",
      },
      {
        icon: TrendingDown,
        metric: "−80% drift findings",
        body: "CIS / STIG controls enforced via scheduled Ansible runs — drift detected and remediated automatically, not manually after the audit.",
      },
      {
        icon: TimerReset,
        metric: "Provisioning in minutes",
        body: "End-to-end VM / container / cloud-resource provisioning from a single ServiceNow ticket — automation mesh handles the multi-site orchestration.",
      },
      {
        icon: Activity,
        metric: "Self-healing operations",
        body: "Event-Driven Ansible turns the noisiest 30% of alerts into auto-remediation — the on-call team only sees the ones that genuinely need a human.",
      },
    ],
  },

  extras: {
    playbookCategories: [
      {
        icon: Server,
        category: "Infrastructure",
        body: "OS provisioning, in-place upgrades, storage and network configuration, certificate management.",
        examples: [
          "OS provisioning (bare metal · VMware · cloud)",
          "RHEL in-place upgrades (Leapp)",
          "Storage and network configuration",
          "NTP · DNS · certificate management",
        ],
      },
      {
        icon: ShieldCheck,
        category: "Security & Compliance",
        body: "CIS Benchmark enforcement, DISA STIG remediation, CVE-driven vulnerability patching, firewall and SSH key rotation.",
        examples: [
          "CIS Benchmark enforcement",
          "DISA STIG automated remediation",
          "Vulnerability patching (CVE-driven)",
          "Firewall rules · SSH key rotation",
        ],
      },
      {
        icon: Boxes,
        category: "Application Deployment",
        body: "Middleware installation, database provisioning, container image push to Quay, configuration management for microservices.",
        examples: [
          "Middleware (JBoss · Tomcat · Apache)",
          "Databases (PostgreSQL · MySQL · Oracle)",
          "Container image push to Quay",
          "Configuration management for microservices",
        ],
      },
      {
        icon: Cloud,
        category: "Cloud Automation",
        body: "EC2 / Azure VM lifecycle, VPC / VNet provisioning, S3 + IAM management, multi-cloud resource tagging and inventory.",
        examples: [
          "EC2 / Azure VM lifecycle management",
          "VPC / VNet provisioning",
          "S3 bucket and IAM policy management",
          "Multi-cloud resource tagging and inventory",
        ],
      },
      {
        icon: Network,
        category: "Network Automation",
        body: "Cisco IOS / NX-OS configuration, Juniper Junos automation, F5 load balancer policy, network compliance auditing.",
        examples: [
          "Cisco IOS / NX-OS configuration",
          "Juniper Junos automation",
          "F5 load balancer policy management",
          "Network compliance auditing",
        ],
      },
    ],
  },
};
