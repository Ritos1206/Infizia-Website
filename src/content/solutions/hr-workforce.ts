/**
 * HR & Workforce solution — content brief.
 *
 * Brand accent: indigo (matches the Convenor product, the anchor for this
 * vertical). The full HR vertical of the Infizia catalogue lives here —
 * Convenor (hire), Performix (assess), Meetrix (every meeting that
 * supports the people function). The hero idiom — a circular lifecycle
 * orbit — visualises the truth that people don't move through HR
 * linearly; they cycle through hire / onboard / perform / develop on a
 * continuous loop.
 */

import {
  Award,
  Briefcase,
  Building2,
  Calendar,
  ClipboardCheck,
  Compass,
  GraduationCap,
  HeartHandshake,
  LayoutGrid,
  MessagesSquare,
  Repeat,
  Sparkles,
  Target,
  Timer,
  TrendingDown,
  TrendingUp,
  UserPlus,
  Users,
  Workflow,
} from "lucide-react";

import type { SolutionContent } from "./types";

export const hrWorkforceContent: SolutionContent = {
  slug: "hr-workforce",
  name: "HR & Workforce",
  verticalLabel: "HR & Workforce",
  accent: "indigo",

  tagline: "Hire. Onboard. Assess. Repeat — on autopilot.",

  positioning:
    "HR isn't a sequence of one-time events — it's a continuous lifecycle that loops through every employee, every quarter. Most teams run it on five different tools that don't talk to each other: a job-board scraper, a spreadsheet of resumes, a meeting-notes app, an annual-review form, and a chat group for everything else. Infizia replaces all of them with three connected products that share one source of truth on every person from the first interview to the latest review.",

  pulse: {
    kicker: "Industry pulse",
    title: "The lifecycle that never stops looping.",
    lede: "Hiring, onboarding, assessment, and development happen in parallel for every person on the payroll — and most HR teams are running them on tools that don't share a single record.",
    items: [
      {
        value: "23 days",
        label: "average time-to-hire across mid-market roles",
        caption: "Industry baseline · 2025",
      },
      {
        value: "5+",
        label: "tools the typical HR team juggles per cycle",
        caption: "ATS · spreadsheet · forms · chat · email",
      },
      {
        value: "42%",
        label: "of new hires never get a structured first 90 days",
        caption: "When onboarding is ad-hoc",
      },
      {
        value: "1×/yr",
        label: "is when most teams still review performance",
        caption: "Once a year · always too late",
      },
    ],
  },

  pain: {
    kicker: "What's slowing you down",
    title: "Four frictions every HR team is paying for.",
    lede: "These show up everywhere — the start-up of 30 and the firm of 3,000 — and they all trace back to the same root: HR runs on disconnected tools.",
    items: [
      {
        icon: ClipboardCheck,
        title: "Resume screening is manual",
        body: "Recruiters skim hundreds of resumes by hand for every role. Match-scoring, JD-fit ranking, and short-listing all happen in someone's head — and bias creeps in invisibly.",
      },
      {
        icon: MessagesSquare,
        title: "Interview notes get lost",
        body: "Interviews happen on video calls that rarely get recorded — and when they do, the notes scatter across five different inboxes. Hiring panels disagree on what was even said.",
      },
      {
        icon: Calendar,
        title: "Reviews happen once a year",
        body: "Performance is judged in a single cycle in the last week of the year, on a form most managers fill in the night before. Self-rating, peer feedback, and manager input never line up.",
      },
      {
        icon: TrendingDown,
        title: "Onboarding leaks talent",
        body: "Forty percent of new hires don't get a real first 90 days. By the time the manager realises, the new hire is already mentally checked out — or applying somewhere else.",
      },
    ],
  },

  stack: {
    kicker: "The Infizia stack for HR",
    title: "Three products. One employee record.",
    lede: "Convenor brings them in, Performix grows them, Meetrix captures every conversation that holds the lifecycle together. Same record, all the way through.",
    entries: [
      {
        productSlug: "convenor",
        role: "Anchor — resume screening, AI-powered interviews, candidate ranking, and onboarding workflows on one platform.",
      },
      {
        productSlug: "performix",
        role: "Smart performance assessment with structured multi-level approvals — reviews that happen continuously, not annually.",
      },
      {
        productSlug: "meetrix",
        role: "Captures every interview, 1:1, and review meeting — transcripts, summaries, and action items wired into the right person's record.",
      },
    ],
  },

  useCases: {
    kicker: "Who it's for",
    title: "Built for the people who actually run people ops.",
    lede: "Whether your HR team is one person or one floor, the same three-product stack scales — what changes is how it's configured.",
    items: [
      {
        icon: UserPlus,
        title: "Talent acquisition teams",
        body: "Convenor ranks every applicant against the JD before a recruiter ever opens a resume. Meetrix captures every interview so panels make decisions on actual evidence.",
      },
      {
        icon: Target,
        title: "People & performance leaders",
        body: "Performix turns the once-a-year review ritual into a continuous, audited assessment loop — self / peer / manager / skip-level — with no spreadsheet drama.",
      },
      {
        icon: Building2,
        title: "Mid-market & enterprise HR",
        body: "Standardise hiring, onboarding, and reviews across teams and locations. One employee record, one audit trail, one set of dashboards.",
      },
    ],
  },

  outcomes: {
    kicker: "What changes",
    title: "Compounding gains across the lifecycle.",
    lede: "Each product unlocks gains on its own — but when they share one record, the multiplier shows up everywhere.",
    items: [
      {
        icon: Timer,
        metric: "−60% time-to-shortlist",
        body: "AI-ranked candidates land in the recruiter's inbox the day a role opens. Manual resume reading is gone.",
      },
      {
        icon: Sparkles,
        metric: "100% interviews captured",
        body: "Every interview produces a transcript, summary, and action items — automatically attached to the right candidate.",
      },
      {
        icon: TrendingUp,
        metric: "4× review frequency",
        body: "Continuous, structured assessments replace the annual ritual. Managers and reviewers know where every person stands, every quarter.",
      },
      {
        icon: HeartHandshake,
        metric: "30% lower 90-day attrition",
        body: "Structured onboarding plays from day one — Convenor's templates make sure every new hire gets the same first 90 days.",
      },
    ],
  },
};

/**
 * Four lifecycle phases rendered by the bespoke HRLifecycleOrbit hero.
 * Each phase = a stage in the continuous people lifecycle + the Infizia
 * product driving it.
 */
export const HR_ORBIT_PHASES = [
  {
    n: "01",
    label: "Hire",
    icon: UserPlus,
    handler: "Convenor",
    detail: "Resume → ranking → interviews",
  },
  {
    n: "02",
    label: "Onboard",
    icon: Compass,
    handler: "Convenor",
    detail: "First 90 days · structured plays",
  },
  {
    n: "03",
    label: "Perform",
    icon: Award,
    handler: "Performix",
    detail: "Continuous assessment cycles",
  },
  {
    n: "04",
    label: "Develop",
    icon: GraduationCap,
    handler: "Meetrix",
    detail: "1:1s · feedback · skip-levels",
  },
] as const;

export const HR_BADGES = [
  { icon: Repeat, label: "Continuous lifecycle" },
  { icon: Workflow, label: "Audited workflows" },
  { icon: Briefcase, label: "Mid-market to enterprise" },
  { icon: LayoutGrid, label: "One employee record" },
  { icon: Users, label: "Three products · one stack" },
] as const;
