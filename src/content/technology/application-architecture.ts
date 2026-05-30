/**
 * /technology/application-architecture — Phase 7 · 5 of 5
 *
 * Brand accent: sky (#38BDF8). Same accent as DocuMind, Finance & Ops
 * solution, and Google Cloud service — sky reads as "infrastructure
 * foundation" — the production substrate every AI workload runs on.
 *
 * Voice rule (D-40): technical concepts (microservices, event-driven,
 * CQRS, observability, blue/green) allowed; specific vendor product
 * names (specific cloud SKUs, message brokers) NOT exposed.
 */

import {
  Network,
  Database,
  Activity,
  ShieldCheck,
  GitBranch,
  Cloud,
  Workflow,
  Boxes,
  Zap,
  Lock,
  AlertTriangle,
  HelpCircle,
  Wallet,
  Clock,
  Award,
  TrendingDown,
  Gauge,
  Server,
  RefreshCw,
  Globe2,
} from "lucide-react";
import type { TechnologyContent } from "./types";

export const applicationArchitectureContent: TechnologyContent = {
  slug: "application-architecture",
  name: "Application Architecture",
  shortLabel: "App Arch",
  accent: "sky",

  tagline: "The production substrate every AI workload actually runs on.",

  positioning:
    "AI features ship inside applications, and applications survive on architecture. Infizia covers multi-region edge delivery, API gateways with auth and rate limits, microservice meshes, event-driven flows, the polyglot data layer, observability across the whole stack, and the deploy pipeline that takes code from a commit to production safely.",

  pain: {
    kicker: "Why teams stall here",
    title: "AI demos turn into 3 AM pages.",
    lede: "What works in a notebook does not survive scale, traffic spikes, region failures, or audit reviews.",
    items: [
      {
        icon: AlertTriangle,
        title: "Single-region deploys hit availability limits",
        body: "All traffic terminates in one region. Latency hurts users abroad, and a regional outage takes the whole product offline. Tier-1 customers walk.",
      },
      {
        icon: Wallet,
        title: "Synchronous everything blows the cost budget",
        body: "Every request stacks ASR + LLM + RAG + post-processing serially. Compute scales with peak — not average — and the bill follows.",
      },
      {
        icon: HelpCircle,
        title: "No observability, no debugging at 3 AM",
        body: "Something is slow. Where? Edge? API? LLM? DB? Without traces and metrics, the team is reading raw logs at 3 AM and guessing.",
      },
      {
        icon: Lock,
        title: "Audit and compliance bolted on later",
        body: "Auth, RBAC, audit logs, data residency, and PII handling get squeezed in after launch — costing months of refactor and a delayed enterprise deal.",
      },
    ],
  },

  capabilities: {
    kicker: "What we deliver",
    title: "From edge to data — production-grade end-to-end.",
    lede: "Six capabilities that turn an AI prototype into a system that runs at enterprise scale.",
    items: [
      {
        icon: Globe2,
        title: "Multi-region edge delivery",
        body: "CDN at the edge for static and cached content, regional routing for API calls, healthy failover. Customers in any geo get sub-100ms responses.",
      },
      {
        icon: ShieldCheck,
        title: "API gateway + auth + rate limits",
        body: "OAuth/SAML for enterprise sign-on, per-tenant rate limits, schema validation at the edge, and structured 4xx errors that clients can act on.",
      },
      {
        icon: Network,
        title: "Service mesh + microservices",
        body: "Independently deployable services with explicit contracts, retries, circuit breakers, and bulkheads. One service failure does not cascade.",
      },
      {
        icon: Workflow,
        title: "Event-driven async flows",
        body: "Long-running AI work (transcription, generation, indexing) runs on durable queues with idempotent handlers. Frontend stays snappy; backend processes when ready.",
      },
      {
        icon: Database,
        title: "Polyglot data layer",
        body: "Relational for transactions, document for flexibility, cache for hot reads, vector for semantic search, blob for large files. Right tool, every time.",
      },
      {
        icon: Activity,
        title: "Observability spine",
        body: "Distributed tracing, metrics, structured logs, and SLO dashboards across every service. A 3 AM page becomes 'find the trace, fix the trace'.",
      },
    ],
  },

  patterns: {
    kicker: "How we engage",
    title: "Four architectural patterns we apply to every build.",
    lede: "Each pattern handles a different shape of scale or constraint.",
    items: [
      {
        icon: Boxes,
        label: "Modular monolith",
        tag: "Start fast",
        body: "Single deployable, modular internal boundaries. Best for early teams — scales to mid-size traffic, keeps the team velocity high without microservice overhead.",
      },
      {
        icon: Network,
        label: "Microservice mesh",
        tag: "Scale split",
        body: "Independently scalable services with explicit contracts. Used when teams or traffic patterns demand isolation — search, AI inference, billing each own their own.",
      },
      {
        icon: Zap,
        label: "Event-driven async",
        tag: "Decouple time",
        body: "Producers emit events; consumers process at their own pace. Buffers traffic spikes, decouples failures, and keeps the user-facing path fast.",
      },
      {
        icon: GitBranch,
        label: "Blue/green + canary",
        tag: "Ship safely",
        body: "Two-color deploys with traffic-shifting canaries. Bad releases get caught at 5% traffic, not 100% — rollback is instant.",
      },
    ],
  },

  useCases: {
    kicker: "Where it ships",
    title: "The platform every Infizia product runs on.",
    lede: "Three places where this stack is the product, not just the plumbing.",
    items: [
      {
        icon: Cloud,
        title: "Multi-tenant SaaS platforms",
        body: "Per-tenant data isolation, per-tenant rate limits, region-aware data residency. The same code serves Acme and NimbusCo without their data ever crossing.",
        poweredProducts: ["EyeCON", "VitaCare", "EyePOS"],
      },
      {
        icon: Server,
        title: "Async AI workload pipelines",
        body: "Transcription, generation, embedding, indexing — all running on durable queues with retries and idempotent handlers. UI stays snappy; AI work catches up.",
        poweredProducts: ["Meetrix", "DocuMind", "Infera"],
      },
      {
        icon: RefreshCw,
        title: "High-availability inbound + outbound",
        body: "Voice + chat + email landing on a single resilient surface with multi-region failover. Calls and tickets do not drop, even during regional outages.",
        poweredProducts: ["Intellix", "VitaCare"],
      },
    ],
  },

  outcomes: {
    kicker: "What changes when this works",
    title: "Calmer ops. Cleaner releases. Compliance-ready.",
    lede: "Outcomes Infizia teams have measured across platform-level engagements.",
    items: [
      {
        icon: Award,
        metric: "99.97%",
        body: "Uptime across multi-region deployments — measured against real traffic, not just synthetic checks.",
      },
      {
        icon: Clock,
        metric: "p95 < 350ms",
        body: "API latency at the gateway under normal traffic — including auth, rate limit, schema validation, and routing.",
      },
      {
        icon: TrendingDown,
        metric: "−54%",
        body: "Compute cost after async decoupling and right-sized data tier — vs. naive synchronous-everything baseline.",
      },
      {
        icon: Gauge,
        metric: "< 4 min",
        body: "MTTR (mean time to resolution) on production incidents with full trace + metric coverage in place.",
      },
    ],
  },
};
