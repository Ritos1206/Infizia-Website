/**
 * /technology/agentic-architecture — Phase 7 · 2 of 5
 *
 * Brand accent: indigo (#818CF8). Same accent as Convenor and the
 * HR & Workforce solution — reinforces the link: Convenor's interview
 * agent IS this architecture in practice.
 *
 * Voice rule (D-40): technical concepts (agent loop, tool calling,
 * memory, function calling) allowed; specific vendor product names NOT
 * exposed.
 */

import {
  Network,
  Brain,
  Wrench,
  ShieldCheck,
  Activity,
  Database,
  Workflow,
  Eye,
  GitBranch,
  Repeat,
  AlertTriangle,
  Clock,
  HelpCircle,
  Briefcase,
  ScanFace,
  HeartPulse,
  Award,
  Gauge,
  TrendingDown,
} from "lucide-react";
import type { TechnologyContent } from "./types";

export const agenticArchitectureContent: TechnologyContent = {
  slug: "agentic-architecture",
  name: "Agentic Architecture",
  shortLabel: "Agents",
  accent: "indigo",

  tagline: "Software that perceives, reasons, and acts — with audit trails.",

  positioning:
    "Agents are not chatbots with tool buttons bolted on. A production-grade agent observes, reasons with structured prompts, calls tools to gather context, decides on an action, and writes a complete trace of what it did and why. Infizia covers the full stack — observation pipelines, reasoning loops, tool registries, memory, guardrails, and the observability layer that lets you debug a decision a week later.",

  pain: {
    kicker: "Why teams stall here",
    title: "Most agents look magical in a demo and fragile in production.",
    lede: "The hard part is not the LLM call. It is everything around it.",
    items: [
      {
        icon: AlertTriangle,
        title: "Agents loop forever or stop too early",
        body: "Without explicit reasoning steps and termination conditions, agents either thrash through 30 tool calls for a simple question or quit before the task is actually done.",
      },
      {
        icon: HelpCircle,
        title: "No memory between turns or sessions",
        body: "The agent forgets what it did 2 minutes ago, let alone last week. Customers repeat themselves, context gets re-fetched on every call, and personalization breaks.",
      },
      {
        icon: Wrench,
        title: "Tools are wired ad-hoc, not as a registry",
        body: "Each new tool is a one-off integration. No schema validation, no rate limiting, no fallback. Adding a 6th tool is harder than the first 5 combined.",
      },
      {
        icon: Eye,
        title: "When something goes wrong, nobody can explain why",
        body: "The agent did something unexpected and there is no trace, no log of which tools fired in what order, no reasoning steps captured. Debugging is guesswork.",
      },
    ],
  },

  capabilities: {
    kicker: "What we deliver",
    title: "From observation to action — every step captured.",
    lede: "Six capabilities that turn a single LLM call into a system you can ship and operate.",
    items: [
      {
        icon: Eye,
        title: "Observation pipelines",
        body: "Webhooks, schedules, user events, sensor signals — agents trigger on real-world inputs, not just chat. Each input arrives with context already attached.",
      },
      {
        icon: Brain,
        title: "Structured reasoning loops",
        body: "ReAct-style observe → think → act loops with explicit termination conditions. Each step is logged with timestamp, agent identity, and decision.",
      },
      {
        icon: Wrench,
        title: "Tool registries with schemas",
        body: "Every tool declares its input schema, output schema, rate limits, and fallback. Agents pick from a catalog, not a tangle of one-off integrations.",
      },
      {
        icon: Database,
        title: "Memory stores — short and long",
        body: "Conversation memory for the current session, vector memory for cross-session recall, structured memory for facts and relationships. All scoped per-user with TTLs.",
      },
      {
        icon: ShieldCheck,
        title: "Guardrails & human-in-the-loop",
        body: "Action allowlists, approval gates for risky operations, refund/payment thresholds, refusal policies. The agent asks for human approval where it should.",
      },
      {
        icon: Activity,
        title: "Observability spine",
        body: "Every reasoning step, tool call, response, and outcome is traced — replayable and queryable. Debug an agent's decision a week later from the trace alone.",
      },
    ],
  },

  patterns: {
    kicker: "How we engage",
    title: "Four patterns we apply to agentic builds.",
    lede: "Each pattern matches a different business shape — start with one, compose them as you scale.",
    items: [
      {
        icon: Repeat,
        label: "Single-agent loop",
        tag: "Observe → act",
        body: "One focused agent with a tight tool registry and clear termination. Best for vertical workflows like 'screen this resume' or 'qualify this lead'.",
      },
      {
        icon: Network,
        label: "Multi-agent mesh",
        tag: "Specialist teams",
        body: "Multiple specialist agents with clear roles, shared memory, and a coordinator. Each agent handles one slice; results fuse at the output.",
      },
      {
        icon: GitBranch,
        label: "Routed workflows",
        tag: "Deterministic + LLM",
        body: "Hard-coded steps for the deterministic parts (validation, math, lookups), LLM calls only where reasoning is required. Cheaper, faster, easier to audit.",
      },
      {
        icon: Workflow,
        label: "Event-driven agents",
        tag: "Always on",
        body: "Agents triggered by webhook, schedule, or sensor signal — not just user chat. Disk-full alerts, anomaly signals, scheduled reports all run autonomously.",
      },
    ],
  },

  useCases: {
    kicker: "Where it ships",
    title: "Inside the products that act, not just talk.",
    lede: "Four products already running on this architecture — same mesh shape, different domains.",
    items: [
      {
        icon: ScanFace,
        title: "AI hiring agent end-to-end",
        body: "Screen resumes, score against the JD, run the AI interview, transcribe + score answers, and shortlist — all on one orchestrated agent flow with full audit trail.",
        poweredProducts: ["Convenor"],
      },
      {
        icon: Briefcase,
        title: "Sales intelligence agent grid",
        body: "Six parallel agents per prospect — company profile, tech stack, decision makers, GenAI opportunities, cloud roadmap, funding match — fused into one outreach-ready brief.",
        poweredProducts: ["Infera", "EyeCON"],
      },
      {
        icon: HeartPulse,
        title: "Clinic operations agent",
        body: "AI receptionist answers calls, books appointments, sends Rx + reminders, manages cancellations + waitlist — every patient-affecting event gets the right action.",
        poweredProducts: ["VitaCare", "Intellix"],
      },
    ],
  },

  outcomes: {
    kicker: "What changes when this works",
    title: "Autonomous workflows. Auditable decisions.",
    lede: "Outcomes Infizia teams have measured across multi-agent rollouts.",
    items: [
      {
        icon: Award,
        metric: "60–80%",
        body: "Of routine workflows handled end-to-end without human touch — across hiring, support, and operations.",
      },
      {
        icon: Clock,
        metric: "−72%",
        body: "Median resolution time on agent-routed tickets vs. human-only baseline, with quality scores held constant.",
      },
      {
        icon: Gauge,
        metric: "100%",
        body: "Of agent decisions captured in the observability spine — every tool call, prompt, and outcome replayable.",
      },
      {
        icon: TrendingDown,
        metric: "−85%",
        body: "Cost per task on routed workflows vs. naive single-agent loops with no termination conditions or caching.",
      },
    ],
  },
};
