/**
 * Sales solution — content brief.
 *
 * Brand accent: teal (matches the EyeCON flagship, which anchors this
 * vertical). The hero idiom is a stage velocity track — a horizontal
 * 5-stage pipeline with multiple deal cards positioned at different
 * stages, each with a fading velocity trail. Argues "the pipeline is a
 * living thing — every deal moving at its own speed, every signal
 * captured on the same record".
 *
 * Mapped products:
 *   • EyeCON (anchor — mobile-first AI sales platform, single Lead record)
 *   • Infera (pre-call intelligence brief on every prospect)
 *   • Meetrix (every sales call captured: transcript + summary + actions)
 *   • Intellix (when sales also operates inbound — qualifying inbound
 *     leads via voice + chat before the rep ever picks up)
 */

import {
  Activity,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Brain,
  BrainCircuit,
  Briefcase,
  Building2,
  CalendarClock,
  CheckCircle2,
  Compass,
  Database,
  FileSearch,
  GitBranch,
  Handshake,
  LineChart,
  Mail,
  Mic,
  Phone,
  Repeat,
  Search,
  Sparkles,
  Target,
  Timer,
  TrendingUp,
  UserCheck,
  Users,
  Wand2,
  Workflow,
  Zap,
} from "lucide-react";

import type { SolutionContent } from "./types";

export const salesContent: SolutionContent = {
  slug: "sales",
  name: "Sales",
  verticalLabel: "Sales",
  accent: "teal",

  tagline: "One Lead record. Every signal. Every conversation. Every decision.",

  positioning:
    "Modern sales is buried under tooling — a CRM that nobody updates, a dialer that lives in another tab, a research tool that opens 14 browser windows, a notes app that never makes it back into the system, and a meeting recorder whose transcripts are read once and forgotten. The rep is supposed to hold all of it together in their head between calls. Infizia consolidates the entire sales motion onto one record — research, calling, conversation capture, qualification, and follow-up — so context follows the rep instead of the rep chasing the context.",

  pulse: {
    kicker: "Industry pulse",
    title: "Where deals quietly slip through.",
    lede: "Most lost deals don't lose at the close — they lose at the first under-briefed conversation, the missed follow-up, or the call note that never made it back into the CRM.",
    items: [
      {
        value: "65%",
        label: "of a rep's day spent on non-selling work",
        caption: "Industry baseline · 2024",
      },
      {
        value: "5+",
        label: "tools the average rep juggles per deal",
        caption: "CRM · dialer · research · notes · meeting recorder",
      },
      {
        value: "3 hrs",
        label: "to research one prospect manually",
        caption: "Senior SDR · per account",
      },
      {
        value: "<30%",
        label: "of call notes ever land back in the CRM",
        caption: "Free-text fields · stale by Friday",
      },
    ],
  },

  pain: {
    kicker: "What's slowing you down",
    title: "Four frictions every sales floor lives with.",
    lede: "Tooling sprawl, under-briefed calls, lost notes, and slow follow-up — the universal four-pack that turns good reps into administrators.",
    items: [
      {
        icon: GitBranch,
        title: "The stack lives in five tabs",
        body: "CRM, dialer, research, notes, meeting recorder — each doing one slice. The rep's job becomes glue, not selling. Context drifts every time a deal moves between tools.",
      },
      {
        icon: Search,
        title: "Reps walk into calls under-briefed",
        body: "Pre-call research takes hours and rarely happens at scale. Reps open the call already missing the prospect's tech roadmap, recent funding, or who actually decides — and the prospect can tell.",
      },
      {
        icon: Mic,
        title: "Calls evaporate after they end",
        body: "A discovery call generates 30 minutes of substance. Without capture, the only artefact is whatever the rep types into the CRM later — usually 4 lines, usually wrong.",
      },
      {
        icon: CalendarClock,
        title: "Follow-up slips by 24 hours",
        body: "By the time the post-call email goes out, the prospect has moved on. The drafts that should send same-day get composed manually, late, and watered down.",
      },
    ],
  },

  stack: {
    kicker: "The Infizia stack for sales",
    title: "Four products. One Lead record.",
    lede: "EyeCON unifies the rep's day. Infera surfaces the brief before the call. Meetrix captures the conversation. Intellix qualifies the inbound. Same record from first signal to closed-won.",
    entries: [
      {
        productSlug: "eyecon",
        role: "Anchor — all-in-one mobile-first AI sales platform that unifies company research, calling, and meeting intelligence around a single Lead record.",
      },
      {
        productSlug: "infera",
        role: "Multi-agent intelligence brief on every prospect — decision makers, tech stack, cloud roadmap, funding match, ready-to-send outreach. Generated before the first call.",
      },
      {
        productSlug: "meetrix",
        role: "Captures every discovery, demo, and stakeholder call — transcripts, summaries, action items wired straight back to the same Lead record.",
      },
      {
        productSlug: "intellix",
        role: "Multilingual voice + chat assistant on the inbound side — qualifies tier-1 leads, answers FAQs, books demos, and routes the rest to a human rep with full context attached.",
      },
    ],
  },

  useCases: {
    kicker: "Who it's for",
    title: "From the founder's first 5 deals to the regional sales floor.",
    lede: "Wherever revenue is built one conversation at a time, the same four-product stack scales — what changes is which surface the rep lives on and how the inbound funnel is wired.",
    items: [
      {
        icon: Target,
        title: "Outbound B2B sales teams",
        body: "Reps walk into every call fully briefed (Infera), record and summarise every conversation (Meetrix), and run their entire day from one mobile-first surface (EyeCON) — without ever opening five tabs.",
      },
      {
        icon: Handshake,
        title: "Inside sales & SaaS account execs",
        body: "Inbound demos qualified by Intellix before they hit a calendar. Discovery + demo + technical calls captured by Meetrix. The whole funnel converges on one Lead record the AE actually wants to open.",
      },
      {
        icon: Briefcase,
        title: "Founder-led & high-velocity sales",
        body: "Founders selling first deals, AEs running 30 conversations a week — same stack, same record. No \"the founder owns the CRM update because nobody else has time\" problem.",
      },
    ],
  },

  outcomes: {
    kicker: "What changes",
    title: "More selling. Less admin. Cleaner pipeline.",
    lede: "Each shift compounds: faster prep + captured calls + faster follow-up = more pipeline coverage from the same headcount.",
    items: [
      {
        icon: Sparkles,
        metric: "5× pre-call brief speed",
        body: "Multi-agent research brief on every prospect — decision makers, cloud roadmap, funding match — generated in minutes, not the rep's weekend.",
      },
      {
        icon: Mic,
        metric: "100% calls captured",
        body: "Every discovery, demo, and stakeholder call produces a transcript + summary + action items, attached to the right Lead record automatically.",
      },
      {
        icon: Wand2,
        metric: "Same-day follow-up",
        body: "Post-call email drafts, action items, and next-step proposals composed from the actual call content — and ready before the rep gets back to their desk.",
      },
      {
        icon: TrendingUp,
        metric: "+40% rep productivity",
        body: "When the stack moves with the rep on mobile and the record updates itself, the time freed up goes back into actual selling — not CRM hygiene.",
      },
    ],
  },
};

/**
 * Stage labels rendered as columns by the bespoke StageVelocityTrack
 * hero. Each stage is tagged with the Infizia product surfacing
 * intelligence at that stage.
 */
export const SALES_PIPELINE_STAGES = [
  {
    n: "01",
    label: "Lead",
    icon: Sparkles,
    handler: "Intellix",
    detail: "Inbound qualified",
  },
  {
    n: "02",
    label: "Researched",
    icon: FileSearch,
    handler: "Infera",
    detail: "Brief generated",
  },
  {
    n: "03",
    label: "Engaged",
    icon: Phone,
    handler: "EyeCON",
    detail: "Discovery call",
  },
  {
    n: "04",
    label: "Qualified",
    icon: BadgeCheck,
    handler: "Meetrix",
    detail: "Calls captured",
  },
  {
    n: "05",
    label: "Closing",
    icon: Handshake,
    handler: "EyeCON",
    detail: "Same-day follow-up",
  },
] as const;

/**
 * Sample deal cards positioned at different stages on the velocity
 * track. The 'stageIndex' (0–4) maps to one of the 5 stages above.
 *
 * Exactly one deal is marked `isMoving:true` — that card carries the
 * animated translateX motion + velocity trail in the hero, while the
 * others sit static at their stages so the viewer reads the snapshot.
 */
export const SALES_DEAL_CARDS = [
  {
    id: "d1",
    account: "Aria Skincare",
    value: "₹4.8 L",
    daysInStage: 2,
    stageIndex: 0,
    isMoving: false,
  },
  {
    id: "d2",
    account: "NimbusCo",
    value: "₹38 L",
    daysInStage: 4,
    stageIndex: 1,
    isMoving: false,
  },
  {
    id: "d3",
    account: "Brew Lab",
    value: "₹12 L",
    daysInStage: 1,
    stageIndex: 2,
    isMoving: true,
  },
  {
    id: "d4",
    account: "Maison Wear",
    value: "₹22 L",
    daysInStage: 6,
    stageIndex: 3,
    isMoving: false,
  },
  {
    id: "d5",
    account: "Pack & Go",
    value: "₹18 L",
    daysInStage: 3,
    stageIndex: 4,
    isMoving: false,
  },
] as const;

export const SALES_BADGES = [
  { icon: Database, label: "Single Lead record" },
  { icon: Brain, label: "Pre-call intelligence" },
  { icon: Mic, label: "Every call captured" },
  { icon: Mail, label: "Same-day follow-up" },
  { icon: Activity, label: "Pipeline · live" },
  { icon: BarChart3, label: "Conversion at every stage" },
  { icon: Workflow, label: "From inbound to closed" },
  { icon: Repeat, label: "Mobile-first · works offline" },
  { icon: LineChart, label: "Rep productivity uplift" },
  { icon: Compass, label: "Coaching from real calls" },
  { icon: UserCheck, label: "Multi-stakeholder map" },
  { icon: Users, label: "Founder to floor" },
  { icon: Building2, label: "B2B · SaaS · services" },
  { icon: BrainCircuit, label: "Recommended next steps" },
  { icon: ArrowRight, label: "Same record · every stage" },
  { icon: Zap, label: "Less admin · more selling" },
  { icon: CheckCircle2, label: "Ready-to-send outreach" },
  { icon: Timer, label: "Hours back, every week" },
] as const;
