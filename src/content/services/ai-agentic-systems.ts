/**
 * Enterprise Agentic AI Solutions service — content brief.
 *
 * Source of truth: corporate deck page 4 description —
 * "Infizia builds agentic AI products and the platforms they run on —
 * autonomous systems that perceive, reason, and act across your
 * enterprise."
 *
 * Brand accent: violet (intelligence, autonomy). Bespoke hero idiom:
 * Agent Trio Loop — three agents (Perceive · Reason · Act) connected
 * in a triangular cycle with signals flowing between them and a
 * "current task" surface in the centre.
 */

import {
  Activity,
  Bot,
  Brain,
  BrainCircuit,
  Building2,
  Cpu,
  Database,
  Eye,
  FileSearch,
  Gauge,
  GitBranch,
  Globe,
  Hammer,
  HelpingHand,
  LineChart,
  Lock,
  Network,
  Repeat,
  ScrollText,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Telescope,
  TrendingUp,
  Users,
  Wand2,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";

import type { ServiceContent } from "./types";

export const aiAgenticSystemsContent: ServiceContent = {
  slug: "ai-agentic-systems",
  name: "Enterprise Agentic AI Solutions",
  shortLabel: "Agentic AI",
  accent: "violet",

  tagline: "Autonomous systems that perceive, reason, and act.",

  positioning:
    "Most AI in the enterprise is still a chat box pinned to the side of an existing tool. Agentic AI is different — purpose-built systems that watch what's happening, reason about what to do next, and take action across the workflow without a human in the loop on every step. Infizia builds these agents and the platforms they run on, with the governance, observability, and safety controls the enterprise needs to trust them in production.",

  pain: {
    kicker: "What's slowing you down",
    title: "Pilot AI is everywhere. Production AI is rare.",
    lede: "The gap between a working demo and an autonomous system the business actually trusts is wider than most teams expect — and most projects die in it.",
    items: [
      {
        icon: Bot,
        title: "Chatbots stuck at FAQ",
        body: "Pilot deployments answer routine questions but never act on anything. Without tool-use, structured outputs, and reliable handoffs, AI never crosses from \"interesting\" to \"essential\".",
      },
      {
        icon: ScrollText,
        title: "No audit trail when things go wrong",
        body: "When the agent makes a wrong call, nobody can reconstruct why. The reasoning, the inputs, the tool calls — all lost. Compliance and risk teams refuse to sign off.",
      },
      {
        icon: GitBranch,
        title: "Every team builds their own stack",
        body: "Sales builds an agent on one platform, ops on another, support on a third. No shared memory, no shared tools, no shared evaluation harness. Enterprise AI becomes shadow AI.",
      },
      {
        icon: Lock,
        title: "Data leaves the building",
        body: "The easy path to AI sends every customer record, every internal doc, and every prompt to a third-party model. Procurement, legal, and security all push back — and rightfully so.",
      },
    ],
  },

  capabilities: {
    kicker: "What we deliver",
    title: "From the agent runtime to the action.",
    lede: "We design, build, and run agentic systems end to end — the agents themselves, the platform they live on, and the governance that makes them safe to deploy.",
    items: [
      {
        icon: BrainCircuit,
        title: "Multi-agent system design",
        body: "Domain-mapped agents — research agent, planner agent, executor agent — designed around your actual workflow rather than retrofitted to a chat UI.",
      },
      {
        icon: Wrench,
        title: "Tool-use & action layer",
        body: "Agents that don't just talk — they call APIs, write to systems of record, schedule tasks, and trigger workflows. Every action audited and reversible.",
      },
      {
        icon: Database,
        title: "RAG & grounded answers",
        body: "Retrieval pipelines tied to your documents, your CRM, your tickets, and your knowledge base — so the agent answers with cited evidence, not hallucination.",
      },
      {
        icon: Cpu,
        title: "Agent runtime platform",
        body: "Containerised, observable, scalable runtime for agents — message queues, memory stores, evaluation harnesses, and prompt versioning all wired in.",
      },
      {
        icon: ShieldCheck,
        title: "Governance & safety",
        body: "Approval gates for high-risk actions, role-based access on tools, content filters, hallucination detection, and full audit logs for compliance review.",
      },
      {
        icon: Activity,
        title: "Observability & evaluation",
        body: "Production dashboards on every agent — task success rate, tool-call accuracy, latency, cost per task. Continuous evaluation, not one-time benchmarks.",
      },
    ],
  },

  engagement: {
    kicker: "How we work together",
    title: "Four ways to start the engagement.",
    lede: "Right shape for the right stage — discovery workshop, proof-of-value, full rollout, or platform retainer.",
    items: [
      {
        icon: Telescope,
        label: "Discovery Workshop",
        duration: "1–2 weeks",
        body: "Joint sessions to identify the highest-value agentic use cases, build a prioritisation matrix, and write a proof-of-value proposal.",
      },
      {
        icon: Sparkles,
        label: "Proof of Value",
        duration: "4–8 weeks",
        body: "Production-grade pilot on one well-scoped use case — measurable outcome, real data, real users. Build conviction with results, not slides.",
      },
      {
        icon: Hammer,
        label: "Full Rollout",
        duration: "Quarterly milestones",
        body: "End-to-end build of the agent platform + first 2-3 production agents, with the runtime, observability, and governance layers in place.",
      },
      {
        icon: HelpingHand,
        label: "Platform Retainer",
        duration: "Monthly",
        body: "Ongoing operations of your agentic platform — new agents, evaluation runs, model updates, safety tuning, and platform-team coverage.",
      },
    ],
  },

  useCases: {
    kicker: "Where we deliver",
    title: "Wherever a workflow is too complex for rules.",
    lede: "Agentic AI shines when the work involves judgment, context, and tool use — three things that no static automation handles well.",
    items: [
      {
        icon: Target,
        title: "Sales & customer-facing agents",
        body: "Pre-call research, conversation summarisation, follow-up drafting, multilingual chat — agents that close the loop on high-volume customer interactions.",
      },
      {
        icon: Workflow,
        title: "Operations & back-office agents",
        body: "Invoice processing, claim handling, ticket triage, exception management — agents that read documents, decide what to do, and take action across systems.",
      },
      {
        icon: Building2,
        title: "Knowledge & decision-support agents",
        body: "Research, briefing, and decision-support agents grounded in your internal knowledge — for analysts, executives, and specialist teams who need fast, cited answers.",
      },
    ],
  },

  outcomes: {
    kicker: "What changes",
    title: "Tasks closed, not just answered.",
    lede: "The shift from chatbot to agent shows up in the work that actually completes — tickets resolved, briefs written, follow-ups sent, decisions supported.",
    items: [
      {
        icon: Zap,
        metric: "60-80% task automation",
        body: "Routine, judgment-based tasks completed end-to-end by agents — freeing the team to handle the cases that genuinely need a human.",
      },
      {
        icon: Eye,
        metric: "100% audit coverage",
        body: "Every reasoning step, every tool call, every output logged. Compliance and risk teams sign off because the trail is complete.",
      },
      {
        icon: TrendingUp,
        metric: "3-5× throughput",
        body: "The same headcount handles multiples of the volume — because the agents take the routine load and surface only the genuinely complex cases.",
      },
      {
        icon: Repeat,
        metric: "Owned platform · own data",
        body: "Agents run on your infrastructure, against your data, on your governance terms. No data leaves the building unless the policy says it can.",
      },
    ],
  },
};

/**
 * 3 nodes for the bespoke AgentTrioLoop hero — Perceive · Reason · Act.
 * Plus a centre "current task" tile.
 */
export const AGENTIC_TRIO_NODES = [
  {
    id: "perceive",
    label: "Perceive",
    detail: "Reads docs · CRM · web · APIs",
    icon: Eye,
  },
  {
    id: "reason",
    label: "Reason",
    detail: "Plans · evaluates · cites",
    icon: Brain,
  },
  {
    id: "act",
    label: "Act",
    detail: "Calls tools · writes back · routes",
    icon: Hammer,
  },
] as const;

export const AGENTIC_BADGES = [
  { icon: Sparkles, label: "Multi-agent · production-grade" },
  { icon: ShieldCheck, label: "Audit-ready governance" },
  { icon: Database, label: "Grounded in your data" },
  { icon: Network, label: "Tool-use · action layer" },
  { icon: Activity, label: "Observability · evaluation" },
  { icon: Globe, label: "Run on your infrastructure" },
  { icon: Users, label: "Multi-team · multi-domain" },
  { icon: FileSearch, label: "Cited · explainable answers" },
  { icon: LineChart, label: "Continuous quality measurement" },
  { icon: Wand2, label: "Replaces rules · learns context" },
  { icon: Search, label: "RAG · structured retrieval" },
  { icon: Gauge, label: "Latency budgets enforced" },
  { icon: Lock, label: "Data residency · always" },
  { icon: BrainCircuit, label: "Reasoning · transparent" },
  { icon: Workflow, label: "End-to-end task automation" },
  { icon: Repeat, label: "Self-improving with feedback" },
  { icon: Building2, label: "Enterprise-ready · day one" },
  { icon: Cpu, label: "Container-native runtime" },
] as const;
