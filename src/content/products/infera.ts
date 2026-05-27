/**
 * Infera — AI-Powered Sales Intelligence Platform.
 *
 * Single source of truth: `docs/brochures/infera-brochure.md` (drafted
 * from the client-supplied "Cloud Catalyst" description). Cloud Catalyst
 * is the underlying product; the Infizia website brand is Infera —
 * same pattern as Convenor (Talent Talker) / Performix (Workmates) /
 * Meetrix (SpeakMates). Once the design team produces the brochure
 * PDF, drop it at `web/public/brochures/infera.pdf`.
 *
 * Brand accent: cyan — fresh, signal-toned, distinct from brand-teal's
 * mint-green and brand-blue's saturated navy. Reads as "intelligence,
 * fresh data, live signal" — fits the sales-intelligence narrative.
 *
 * Bespoke visual: InferaIntelligenceBrief — the multi-agent intelligence
 * pipeline as a composed scene with a topic prompt + 6 agent panels
 * materializing in parallel.
 * Mid-page: InferaReportsChat — the conversational-search idiom with a
 * reports archive list and a chat panel showing plain-English questions
 * answered across the rep's own data.
 *
 * Voice rule: business-first. No technology / vendor names exposed in
 * any user-facing string here. No cloud-vendor lock-in either —
 * funding programs are framed as "cloud-native funding programs"
 * generically, not AWS-specific. Implementation can swap providers
 * (or expand to Google Cloud / Azure partnerships) without touching
 * this content.
 */

import {
  Award,
  Brain,
  Briefcase,
  Building2,
  Cloud,
  Layers,
  MessageCircleQuestion,
  Network,
  Search,
  Target,
  TrendingUp,
  Users,
  Wand2,
} from "lucide-react";

import type { StandardProductContent } from "./types";

export const inferaContent: StandardProductContent = {
  slug: "infera",
  name: "Infera",
  vertical: "Intelligence & Research",
  accent: "cyan",

  tagline: "Walk into every customer meeting fully briefed.",

  positioning:
    "Infera is an AI-powered Sales Intelligence Platform that runs deep research on any prospect, automatically. A sales rep enters a company name and domain. Within minutes, a multi-agent AI pipeline produces a complete intelligence brief: company profile, tech stack, decision makers with engagement strategies, competitive gaps, GenAI opportunities, a phased cloud adoption roadmap, matched cloud-native funding programs, and ready-to-send outreach emails. Every report stored, searchable, and exportable — with conversational search across all your past research.",

  problem: {
    kicker: "The challenge",
    title: "Sales teams lose meetings to research drag.",
    body: "Every customer meeting starts with the same painful loop: hours of Googling, LinkedIn scrolling, news scanning, and tech-stack guessing. Insights stay scattered across browser tabs and Slack threads. Most reps walk in under-briefed — wrong decision-maker priority, no read on the prospect's tech posture, no specific angle to lead with. Funding programs that could unlock budget get missed because nobody has time to map them per prospect. And last quarter's research on a similar prospect is unrecoverable when this quarter's rep needs it. Infera turns one company name into a complete sales-ready brief — and remembers everything for the next meeting.",
  },

  features: {
    kicker: "Capabilities",
    title: "From a company name to a sales-ready brief.",
    lede: "A multi-agent AI pipeline turns one input into eight outputs — company profile, decision makers, tech stack, GenAI opportunities, cloud roadmap, cloud-native funding match, outreach emails, and a searchable archive of everything you've ever analysed.",
    items: [
      {
        icon: Wand2,
        title: "Type a name. Get a deep-research brief.",
        body: "Enter a company name and domain. In minutes, Infera runs deep research across the public web and returns a complete sales-ready intelligence brief. No more hours lost to pre-meeting prep.",
      },
      {
        icon: Users,
        title: "Decision-maker playbook per contact",
        body: "Every key decision maker gets a psychology-aware engagement strategy and a tailored outreach email — ready to send.",
      },
      {
        icon: Cloud,
        title: "Cloud posture + GenAI opportunities",
        body: "Infera reads the prospect's tech footprint and surfaces where AI fits, what to migrate, and the phased roadmap that turns it into a real pitch.",
      },
      {
        icon: Award,
        title: "Cloud-native funding, matched per prospect",
        body: "Infera maps every prospect against cloud-native funding programs — across AWS, Google Cloud, Azure, and ecosystem partners — and surfaces the ones they qualify for, with talking points your rep can lead with.",
      },
      {
        icon: MessageCircleQuestion,
        title: "Chat with all your past research",
        body: "Ask plain-English questions across every report your team has ever run. Compare prospects, pull answers, find decision makers — instantly, grounded in your own analysis.",
      },
      {
        icon: Search,
        title: "Reports stored, searchable, exportable",
        body: "Every report saved automatically. Search across the archive, re-open any time, export to PDF in one click.",
      },
      {
        icon: Layers,
        title: "Built for sales teams, not solo reps",
        body: "Full user management, activity tracking, admin analytics — your sales org runs on Infera, not just individual SDRs.",
      },
    ],
  },

  useCases: {
    kicker: "Who it's for",
    title: "Built for everyone whose meeting starts with research drag.",
    lede: "Wherever a sales team needs to walk into customer meetings fully briefed — context, decision-maker priorities, funding angles, tailored pitch — Infera collapses hours of prep into minutes.",
    items: [
      {
        icon: Briefcase,
        title: "Field & enterprise account executives",
        body: "Reps walking into high-stakes customer meetings who need full context — cloud posture, decision-maker priorities, funding angles, and a tailored pitch — in the time it used to take to Google the company name.",
      },
      {
        icon: TrendingUp,
        title: "SDR & outbound prospecting teams",
        body: "High-velocity outbound where research drag kills throughput. One company name in, a complete intelligence brief and ready-to-send outreach emails out — every rep, every prospect, in minutes instead of hours.",
      },
      {
        icon: Target,
        title: "Sales engineers & solution consultants",
        body: "Pre-sales teams that need cloud adoption roadmaps, GenAI opportunity mapping, and matched funding programs to build a credible technical story for every customer engagement.",
      },
    ],
  },
};

/**
 * The 6 intelligence agents shown materializing in the hero visual.
 * Each agent represents one parallel-processing track in the
 * multi-agent pipeline.
 */
export const INFERA_AGENTS = [
  {
    n: "01",
    label: "Company profile",
    icon: Building2,
    body: "Founding · funding · headcount · key markets · recent moves",
    chip: "8 fields",
  },
  {
    n: "02",
    label: "Tech stack",
    icon: Network,
    body: "Cloud · data stack · CRM · martech · prod systems · gaps",
    chip: "27 signals",
  },
  {
    n: "03",
    label: "Decision makers",
    icon: Users,
    body: "5 key contacts · roles · priorities · engagement angle",
    chip: "5 contacts",
  },
  {
    n: "04",
    label: "GenAI opportunities",
    icon: Brain,
    body: "Where AI fits · expected ROI · phased pilot path",
    chip: "3 use cases",
  },
  {
    n: "05",
    label: "Cloud roadmap",
    icon: Cloud,
    body: "What to migrate first · phased plan · win at each stage",
    chip: "3 phases",
  },
  {
    n: "06",
    label: "Funding match",
    icon: Award,
    body: "Cloud-native funding programs matched · qualification · talking points",
    chip: "₹40L · 3 progs",
  },
] as const;

/**
 * Sample reports + chat conversation rendered in the mid-page section.
 */
export const INFERA_SAMPLE_REPORTS = [
  { name: "Annapurna Finance", vertical: "Fintech", date: "12 May" },
  { name: "Vidyamitra EdTech", vertical: "EdTech", date: "08 May" },
  { name: "Hanuman Logistics", vertical: "Supply chain", date: "04 May" },
  { name: "Skill Sphere", vertical: "EdTech", date: "01 May" },
  { name: "GreenGrid Energy", vertical: "Energy", date: "27 Apr" },
  { name: "Bharat Bazaar", vertical: "D2C retail", date: "22 Apr" },
  { name: "PharmaPath", vertical: "Healthcare", date: "16 Apr" },
  { name: "TerraTrans", vertical: "Mobility", date: "10 Apr" },
] as const;

export const INFERA_CHAT_THREAD = [
  {
    sender: "user" as const,
    text: "Which of my companies has the best GenAI opportunity?",
  },
  {
    sender: "infera" as const,
    text: "Vidyamitra EdTech ranks highest. Strong existing cloud footprint, structured data, and a recent ₹120 Cr Series B. Cited from your 08 May report — pages 3 and 7.",
    citations: ["Vidyamitra EdTech · 08 May", "Skill Sphere · 01 May"],
  },
  {
    sender: "user" as const,
    text: "Compare the two EdTech companies I analysed.",
  },
] as const;

export const INFERA_CHAT_SUGGESTIONS = [
  "Who's the CFO at Annapurna Finance?",
  "Which prospects qualify for cloud-native funding?",
  "Show me all fintech companies I analysed last month",
  "Compare Vidyamitra and Skill Sphere",
] as const;

/**
 * Closing pills surfaced near the page CTA.
 */
export const INFERA_OUTCOME_PILLS = [
  { icon: Wand2, label: "One company name → a complete brief" },
  { icon: Users, label: "Every decision maker, fully briefed" },
  { icon: Award, label: "Cloud-native funding, matched and ready" },
  { icon: MessageCircleQuestion, label: "Chat with all your research" },
] as const;
