/**
 * Intelligence & Research solution — content brief.
 *
 * Brand accent: cyan (matches Infera). The hero idiom is an insight
 * constellation — a dark canvas with a "star map" of discovered
 * insights about a target company. Stars connect via faint lines that
 * suggest patterns: decision-makers connect to hiring signals, funding
 * events connect to cloud-roadmap signals, etc.
 *
 * Mapped products:
 *   • Infera (anchor — multi-agent intelligence brief on any company)
 *   • Meetrix (every prospect call captured as transcript + summary,
 *     wired into the same Infera brief)
 *   • Intellix (DB-grounded chat assistant for sellers and researchers
 *     to query the intelligence on demand)
 */

import {
  Activity,
  BadgeCheck,
  BarChart3,
  BrainCircuit,
  Building2,
  Cloud,
  Compass,
  DollarSign,
  Eye,
  FileSearch,
  Handshake,
  Layers,
  LineChart,
  Mail,
  MessageCircle,
  Network,
  Search,
  Sparkles,
  Target,
  Telescope,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";

import type { SolutionContent } from "./types";

export const intelligenceResearchContent: SolutionContent = {
  slug: "intelligence-research",
  name: "Intelligence & Research",
  verticalLabel: "Intelligence & Research",
  accent: "cyan",

  tagline: "From a company name to a complete strategic brief.",

  positioning:
    "Sales intelligence and strategic research today is a research analyst opening 14 browser tabs, copying findings into a Google Doc, and emailing it three days later. By that time, the prospect is already on a call with someone else. Infizia turns that workflow into a multi-agent intelligence engine: type a company name and within minutes you have a complete brief — decision makers, tech stack, cloud roadmap, funding match, and ready-to-send outreach drafts — all grounded in the open web and your own data.",

  pulse: {
    kicker: "Industry pulse",
    title: "Where strategic time gets eaten alive.",
    lede: "Every minute a researcher spends opening another tab is a minute the deal moves further from being won.",
    items: [
      {
        value: "3 hrs",
        label: "average time to research one prospect manually",
        caption: "Senior SDR · industry baseline",
      },
      {
        value: "12+",
        label: "tabs the typical researcher opens per company",
        caption: "LinkedIn · website · news · funding · jobs · etc.",
      },
      {
        value: "0",
        label: "of those tabs share a common record back to the CRM",
        caption: "It's all copy-paste",
      },
      {
        value: "85%",
        label: "of researched briefs are never reused or referenced again",
        caption: "Buried in a doc · forgotten",
      },
    ],
  },

  pain: {
    kicker: "What's slowing you down",
    title: "Four frictions every researcher knows by heart.",
    lede: "Research today is a manual scrap-collection job. Every detail is in a different place, and none of it persists where the team can use it.",
    items: [
      {
        icon: Search,
        title: "14 tabs to research one company",
        body: "Website, LinkedIn, news, funding, job board, GitHub, glassdoor — all opened, scraped by eye, and copied into a Google Doc. By the time the brief is ready, the moment has passed.",
      },
      {
        icon: Layers,
        title: "Briefs are static documents",
        body: "A finished research brief is a dead artefact. The next researcher repeats the same work because there's no live record that updates as the target's signals change.",
      },
      {
        icon: Mail,
        title: "Outreach drafts are written from scratch",
        body: "Even after the research is done, the actual email is composed by hand — generic, template-driven, and rarely tied back to the specific signals the brief surfaced.",
      },
      {
        icon: MessageCircle,
        title: "Team can't query their own intel",
        body: "When a sales rep wants to know \"who's the IT decision maker at X\", they ping the research team. Because there's no chat-grounded interface to the intel itself.",
      },
    ],
  },

  stack: {
    kicker: "The Infizia stack for intelligence",
    title: "Three products. One living intel record.",
    lede: "Infera does the research. Meetrix captures every prospect call. Intellix turns it all into a queryable, conversational interface for the rest of the team.",
    entries: [
      {
        productSlug: "infera",
        role: "Anchor — type a company name, get a multi-agent brief in minutes: decision makers, tech stack, cloud roadmap, funding match, and ready-to-send outreach.",
      },
      {
        productSlug: "meetrix",
        role: "Captures every prospect call — transcript, summary, action items — and wires it back into the same Infera record so the next reach-out builds on the last one.",
      },
      {
        productSlug: "intellix",
        role: "Conversational chat over your own intel — sellers and researchers ask plain-English questions and get cited answers from the company's own briefs and call records.",
      },
    ],
  },

  useCases: {
    kicker: "Who it's for",
    title: "Wherever finding the truth fast is the whole job.",
    lede: "Sales, strategy, partnerships, M&A — all of them need the same thing: a fast, structured, queryable view of a target company.",
    items: [
      {
        icon: Target,
        title: "B2B sales & SDR teams",
        body: "Every prospect gets a complete brief before the first outreach. Every call is captured. Every follow-up cites the signals that triggered it. Researchers shift from typists to strategists.",
      },
      {
        icon: Handshake,
        title: "Partnerships, alliances & BD",
        body: "Quickly profile potential partners — capabilities, cloud strategy, recent moves, decision makers. Decide who to engage in days, not weeks.",
      },
      {
        icon: Compass,
        title: "Strategy & M&A research",
        body: "Build comparison briefs across a market segment fast. Flag movement: hiring, funding, technology shifts. Turn raw signals into a clean comparison the deal team can use.",
      },
    ],
  },

  outcomes: {
    kicker: "What changes",
    title: "Every minute back is a minute closer to the deal.",
    lede: "These shifts compound: faster research → more outreach → richer follow-ups → more pipeline. The whole team operates a tempo higher.",
    items: [
      {
        icon: Sparkles,
        metric: "3 hrs → 5 minutes",
        body: "Manual prospecting collapses from a multi-hour exercise to a single prompt. The researcher checks the brief; they don't build it from scratch.",
      },
      {
        icon: TrendingUp,
        metric: "5× outreach volume",
        body: "Every brief comes with ready-to-send outreach drafts grounded in actual signals. Reps go from 3-4 personalised emails a day to 20+ — without losing quality.",
      },
      {
        icon: BrainCircuit,
        metric: "Live intel record",
        body: "The brief updates as new signals arrive — funding rounds, hires, tech moves. Stale research is replaced by a record that stays current automatically.",
      },
      {
        icon: MessageCircle,
        metric: "Self-serve intelligence",
        body: "Sellers and strategists ask plain-English questions over the team's own intel — \"who's the cloud lead at X\", \"what's their current roadmap\" — and get cited answers in seconds.",
      },
    ],
  },
};

/**
 * Sample insight nodes rendered by the InsightConstellation hero. Each
 * node = a discovered signal about the target company. Typed by category
 * so the hero can color-code them and connect related nodes with faint
 * lines.
 */
export const INTEL_CONSTELLATION_NODES = [
  {
    id: "n1",
    category: "Decision maker",
    label: "VP · Engineering",
    icon: Users,
    x: 100,
    y: 80,
  },
  {
    id: "n2",
    category: "Decision maker",
    label: "CIO · just hired",
    icon: BadgeCheck,
    x: 380,
    y: 60,
  },
  {
    id: "n3",
    category: "Tech stack",
    label: "Modernising backend",
    icon: Layers,
    x: 60,
    y: 200,
  },
  {
    id: "n4",
    category: "Cloud roadmap",
    label: "Multi-cloud · in flight",
    icon: Cloud,
    x: 240,
    y: 130,
  },
  {
    id: "n5",
    category: "Funding",
    label: "Series C · Q3",
    icon: DollarSign,
    x: 420,
    y: 200,
  },
  {
    id: "n6",
    category: "Hiring",
    label: "Platform team · +14",
    icon: TrendingUp,
    x: 200,
    y: 280,
  },
  {
    id: "n7",
    category: "GenAI",
    label: "RAG pilot · public",
    icon: Sparkles,
    x: 350,
    y: 290,
  },
  {
    id: "n8",
    category: "Intent signal",
    label: "Hiring AI lead",
    icon: Eye,
    x: 90,
    y: 320,
  },
] as const;

/** Lines connecting related insights — drawn faint, animated draw-in */
export const INTEL_CONSTELLATION_EDGES = [
  ["n1", "n4"],
  ["n4", "n2"],
  ["n4", "n7"],
  ["n3", "n6"],
  ["n6", "n8"],
  ["n5", "n2"],
  ["n5", "n4"],
  ["n7", "n8"],
] as const;

export const INTEL_BADGES = [
  { icon: Telescope, label: "Multi-agent · parallel research" },
  { icon: FileSearch, label: "Cited sources · grounded answers" },
  { icon: Network, label: "Living intel record" },
  { icon: Workflow, label: "Outreach drafts · ready" },
  { icon: Activity, label: "Signal feed · auto-refresh" },
  { icon: Building2, label: "From SMB to enterprise targets" },
  { icon: BarChart3, label: "Comparison briefs across markets" },
  { icon: LineChart, label: "Pipeline · uplift measurable" },
] as const;
