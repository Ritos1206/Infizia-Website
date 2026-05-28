/**
 * /red-hat/openshift — OpenShift Container Platform page content.
 *
 * Source: `Infizia_Services.docx` Section 2 (OpenShift).
 * Hero idiom: Cluster Topology Mosaic — multi-zone cluster blueprint
 * with master HA + worker nodes + edge SNO + animated pod migration.
 */

import {
  Compass,
  GanttChartSquare,
  GitBranch,
  GraduationCap,
  HeadphonesIcon,
  Layers,
  Package,
  PlayCircle,
  Rocket,
  Scan,
  Server,
  ShieldCheck,
  Shuffle,
  TimerReset,
  TrendingDown,
  TrendingUp,
  Vault,
  Workflow,
  Wrench,
} from "lucide-react";

import type { RedHatServicePageContent } from "./types";

export const openshiftContent: RedHatServicePageContent = {
  slug: "openshift",
  name: "OpenShift Container Platform",
  shortLabel: "OpenShift",
  kicker: "Service · OpenShift Container Platform",
  title: "Enterprise Kubernetes.\nWithout the complexity.",
  tagline:
    "OpenShift is Red Hat's enterprise Kubernetes platform — production-hardened, security-first, and built to run the most demanding containerised applications in the world.",
  positioning:
    "Vanilla Kubernetes leaves the hard parts to you — networking, storage, secrets, identity, supply-chain security, multi-cluster operations. OpenShift folds those into a single supported platform, and Infizia takes care of the rest: cluster design across single-DC, multi-zone, air-gapped, hybrid-cloud, or edge SNO topologies — and the DevSecOps pipeline that lights up around it.",
  primaryCtaLabel: "Request an OpenShift Assessment",
  secondaryCtaLabel: "Corporate Brochure",

  pain: {
    kicker: "What's slowing you down",
    title: "Kubernetes is easy to spin up. Hard to run for five years.",
    lede: "The first cluster is a weekend project. The fiftieth is a platform team, a security audit, a compliance attestation, and a 24×7 operations contract — and none of those are what most teams signed up for.",
    items: [
      {
        icon: Layers,
        title: "Cluster sprawl, no standard",
        body: "Three teams, three flavours of Kubernetes, three different ingress patterns, three secret managers, three monitoring stacks. Cross-cluster work becomes an integration project.",
      },
      {
        icon: ShieldCheck,
        title: "DevSecOps gates that don't actually gate",
        body: "Image scanning runs but nothing fails the build. Vulnerabilities ship to production. The first time anyone notices is when the auditor asks for the SBOM that was never generated.",
      },
      {
        icon: TimerReset,
        title: "Cluster upgrades that nobody owns",
        body: "Quarterly upgrades become annual events because the team is afraid of breakage. Two majors behind, then three — and then the security team mandates a migration.",
      },
      {
        icon: GanttChartSquare,
        title: "Migration roadmaps stuck on slide 4",
        body: "The 100-app legacy portfolio gets a Containerise Everything mandate but no priority order, no app-fit analysis, and no realistic effort estimate. Six months later, three apps are containerised.",
      },
    ],
  },

  services: {
    kicker: "What we deliver",
    title: "Five services that take OpenShift from PoC to production-platform.",
    lede: "Strategy, architecture, containerisation methodology, DevSecOps pipeline, and Day-2 operations — covered as separate fixed-scope services or stitched into a single multi-quarter engagement.",
    items: [
      {
        icon: Compass,
        title: "Container Strategy & Readiness Assessment",
        body: "Application portfolio analysis, target architecture, network and storage design, DevOps toolchain integration plan, and an estimated timeline + cost of adoption.",
        badge: "Strategy",
        bullets: [
          "Application portfolio analysis (containerisation readiness scoring)",
          "Target OpenShift architecture design",
          "Network and storage design recommendations",
          "DevOps toolchain integration plan",
          "Estimated timeline and cost of adoption",
        ],
      },
      {
        icon: Server,
        title: "Cluster Design & Deployment",
        body: "Production-grade clusters tailored to scale, topology, and compliance — single-DC HA, multi-zone, air-gapped, hybrid-cloud, or edge SNO. On bare metal, VMware, OpenStack, AWS, Azure, GCP, IBM Cloud / IBM Power.",
        bullets: [
          "Single-Datacenter Clusters (3-master HA)",
          "Multi-Zone / Multi-Region clusters",
          "Disconnected / Air-gapped (defence, regulated)",
          "Hybrid-cloud (on-prem + ROSA / ARO)",
          "Edge clusters with Single Node OpenShift (SNO)",
        ],
      },
      {
        icon: Package,
        title: "Application Containerisation & Migration",
        body: "Assess, containerise, and migrate existing applications to OpenShift — including legacy Java/J2EE monoliths, .NET applications, and database workloads. Methodology built around the 6 R's framework.",
        bullets: [
          "Application portfolio scoring (6 R's)",
          "Lift-and-shift containerisation for quick wins",
          "Refactoring guidance for cloud-native maturity",
          "Helm chart / Operator packaging",
          "Integration testing on OpenShift",
        ],
      },
      {
        icon: Workflow,
        title: "DevSecOps Pipeline Implementation",
        body: "End-to-end CI/CD with security gates baked in at every stage — OpenShift Pipelines (Tekton), GitOps (ArgoCD), image vulnerability scanning (Quay + Clair), secrets management (Vault / Sealed Secrets), runtime security (ACS / StackRox).",
        bullets: [
          "OpenShift Pipelines (Tekton)",
          "OpenShift GitOps (ArgoCD)",
          "Quay with Clair (image vulnerability scanning)",
          "SonarQube / SAST (code quality gates)",
          "Vault / Sealed Secrets (secrets management)",
          "OpenShift Advanced Cluster Security (ACS / StackRox)",
        ],
      },
      {
        icon: Wrench,
        title: "Day-2 Operations & Managed Services",
        body: "Cluster health monitoring 24×7, quarterly cluster upgrades (zero-downtime rolling), capacity planning, incident response with defined SLAs, etcd backup and DR, and compliance reporting against CIS Kubernetes Benchmark and NIST.",
        bullets: [
          "Cluster health monitoring (24×7)",
          "Quarterly cluster upgrades (zero-downtime rolling)",
          "Capacity planning and right-sizing",
          "Incident response with defined SLAs",
          "Etcd backup and disaster recovery",
          "Compliance reporting (CIS Kubernetes · NIST)",
        ],
      },
    ],
  },

  engagement: {
    kicker: "How we engage",
    title: "Four entry points into the OpenShift practice.",
    lede: "From a portfolio assessment that sets up your roadmap, to a fixed-scope cluster build, to ongoing managed operations and OpenShift training for your platform team.",
    items: [
      {
        icon: Compass,
        label: "Assessment & Advisory",
        duration: "3–6 weeks",
        body: "Application portfolio readiness scoring, target architecture, sizing, and a phased adoption roadmap with risk and effort per wave.",
      },
      {
        icon: Rocket,
        label: "Implementation Project",
        duration: "Fixed scope",
        body: "Cluster build + DevSecOps pipeline + first 5–10 applications containerised — milestoned, validated, and signed off as a single engagement.",
      },
      {
        icon: HeadphonesIcon,
        label: "Day-2 Managed Operations",
        duration: "24×7 retainer",
        body: "Cluster health monitoring, quarterly upgrades, capacity planning, etcd backup, incident response — all SLA-backed.",
      },
      {
        icon: GraduationCap,
        label: "OpenShift Training",
        duration: "3–4 day cohorts",
        body: "OpenShift for Administrators (4 days) and OpenShift for Developers (3 days) — both on-site or virtual, full lab environments, group discounts for 5+.",
      },
    ],
  },

  outcomes: {
    kicker: "What changes",
    title: "One platform. One pipeline. One operations contract.",
    lede: "Cluster sprawl collapses into a single OpenShift platform. Three pipelines collapse into one Tekton + ArgoCD chain. Three on-call rotations collapse into one managed operations contract.",
    items: [
      {
        icon: TrendingDown,
        metric: "−60% mean time to deploy",
        body: "GitOps-driven promotion via ArgoCD — code-merge to production in minutes instead of the multi-day change-window cycle.",
      },
      {
        icon: ShieldCheck,
        metric: "Security gates that gate",
        body: "Quay + Clair scans block vulnerable images at push time. ACS enforces runtime policy. SBOM generated for every release, automatically.",
      },
      {
        icon: TimerReset,
        metric: "Zero-downtime upgrades",
        body: "Quarterly cluster upgrades on a rolling cadence — no app team has to coordinate a maintenance window.",
      },
      {
        icon: TrendingUp,
        metric: "Multi-cloud portability",
        body: "Same OpenShift platform on bare metal, VMware, AWS (ROSA), Azure (ARO), GCP — workloads move between them without rewrites.",
      },
    ],
  },

  extras: {
    sixRs: [
      {
        letter: "R",
        label: "Retain",
        body: "Keep on-prem unchanged — workloads with regulatory or hardware constraints that don't benefit from containerisation.",
      },
      {
        letter: "R",
        label: "Retire",
        body: "Decommission — duplicate or end-of-life apps that the migration project surfaces as no longer needed.",
      },
      {
        letter: "R",
        label: "Rehost",
        body: "Lift-and-shift containerisation — fastest path to OpenShift, ideal for stateless monoliths.",
      },
      {
        letter: "R",
        label: "Replatform",
        body: "Targeted refactor — externalise state, swap session storage, rewire config — to take advantage of OpenShift primitives.",
      },
      {
        letter: "R",
        label: "Refactor",
        body: "Decompose to cloud-native services — Helm-charted, Operator-packaged, fully observable.",
      },
      {
        letter: "R",
        label: "Rebuild",
        body: "Greenfield rewrite — for the small set of apps where the existing implementation is the constraint, not the scope.",
      },
    ],

    pipeline: [
      { icon: GitBranch, label: "Source", tooling: "Git · Branching · Code Review" },
      { icon: PlayCircle, label: "Build & Test", tooling: "Tekton (OpenShift Pipelines)" },
      { icon: Scan, label: "Scan & Sign", tooling: "Quay + Clair · SBOM · SAST" },
      { icon: Vault, label: "Secrets", tooling: "Vault · Sealed Secrets" },
      { icon: Shuffle, label: "GitOps Deploy", tooling: "ArgoCD · OpenShift GitOps" },
      { icon: ShieldCheck, label: "Runtime", tooling: "ACS / StackRox" },
    ],
  },
};
