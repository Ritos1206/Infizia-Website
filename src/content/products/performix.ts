/**
 * Performix — AI-driven Employee Assessment & Performance Reviews.
 *
 * Single source of truth: `docs/brochures/performix-brochure.md`.
 *
 * Vertical: HR & Workforce.
 * Brand accent: amber — distinct from the indigo (Convenor) and the
 * flagship trio (teal / green / blue). Performance-review warmth + decision
 * tone (D-34 framework: each non-flagship product gets its own accent).
 * Bespoke visual: PerformixDashboardVisual — radar chart + KPI tiles +
 * 3-tier workflow strip (distinct from Convenor's resume + interview-tableau).
 *
 * Voice rule: business-first. No technology / vendor names exposed in any
 * user-facing string here. Implementation can swap providers without
 * touching this content.
 */

import {
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  FileBarChart2,
  Layers,
  Scale,
  Sparkles,
  ThumbsUp,
  Trophy,
  Users,
  UserSearch,
  Workflow,
} from "lucide-react";

import type { StandardProductContent } from "./types";

export const performixContent: StandardProductContent = {
  slug: "performix",
  name: "Performix",
  vertical: "HR & Workforce",
  accent: "amber",

  tagline: "Fair assessments. Audited every step.",

  positioning:
    "Performix is a 3-tier performance assessment and rewards platform that runs the full review cycle on a workflow that goes User → Manager → Reviewer — with role-scoped data visibility, structured comment validation, peer voting and recognition, and admin-level analytics across every team. Replace the year-end review chaos of spreadsheets, PDFs, and 1:1 emails with a workflow-enforced assessment that captures evidence, justification, and peer signal in one place — auditable enough to stand behind when bonuses get decided.",

  problem: {
    kicker: "The challenge",
    title: "Annual reviews quietly fall apart on spreadsheets and email.",
    body: "Single-tier reviews carry unconscious bias. Email threads lose context and audit trail. \"Good job\" passes as a review when no one enforces minimum substance. HR finds out who hasn't submitted only after the cycle closes. Peer recognition rarely makes it into the formal record. Performix replaces all of that with a 3-tier workflow that enforces structured comments, role-scoped visibility, and live submission tracking — so every assessment carries a justified score and a defensible paper trail.",
  },

  features: {
    kicker: "Capabilities",
    title: "Every assessment — structured, justified, auditable.",
    lede: "From self-assessment through manager review to reviewer sign-off — Performix enforces fairness at every transition and surfaces what HR needs to know in real time.",
    items: [
      {
        icon: Layers,
        title: "3-tier review workflow",
        body: "User → Manager → Reviewer. Each stage can approve, reject, or send back. Drafts auto-save at every tier and restore on revisit. Every transition is logged on an audit trail.",
      },
      {
        icon: Scale,
        title: "Structured comment validation",
        body: "Minimum-character rules per role and per stage. Whitespace-padding detection so a string of spaces can't pad a 100-char field. Per-question comments mandatory when manager rating drops below 3.",
      },
      {
        icon: ThumbsUp,
        title: "Peer voting & recognition",
        body: "Same-team or cross-team nominations with required reasons. One vote per voter per team. Self-vote blocked at the system level. Deadline-enforced. Voter name + employee ID captured on every nomination reason.",
      },
      {
        icon: UserSearch,
        title: "Real-time team tracker",
        body: "Managers see live submission status, self rating, and voting status per team member — searchable by name or ID, filterable by submission stage and voting state. HR knows who's pending the moment they're pending.",
      },
      {
        icon: BarChart3,
        title: "Admin team analytics",
        body: "Every team in one dashboard: strength, not-submitted, manager-pending, review-pending, review-done, rejected, votes cast/pending. Sortable + filterable by status. Surfaces bottlenecks before they cost you a bonus cycle.",
      },
      {
        icon: FileBarChart2,
        title: "Final result + exports",
        body: "Calculated final score per employee with full self / manager / reviewer trail. Per-submission PDF export including nomination reasons. Reviewer CSV export including the reviewer comment column — ready to feed compensation review.",
      },
    ],
  },

  useCases: {
    kicker: "Who it's for",
    title: "For the teams whose decisions need to be defensible.",
    lede: "Performix fits any organisation that pays based on performance and needs the trail to back it up.",
    items: [
      {
        icon: Trophy,
        title: "HR-led annual review cycles",
        body: "Replace spreadsheets-and-email with a workflow-enforced assessment that captures evidence, justification, and peer signal in one auditable place.",
      },
      {
        icon: Workflow,
        title: "Multi-tier organisations",
        body: "Companies with manager-then-reviewer approval models who need both layers to sign off — with role-scoped data so reviewers don't anchor to manager ratings prematurely.",
      },
      {
        icon: Users,
        title: "Performance-bonus eligible teams",
        body: "Engineering, sales, ops teams where final bonus decisions need a defensible audit trail showing self-rating + manager-rating + reviewer-rating + peer nominations on every employee.",
      },
    ],
  },
};

/**
 * Closing pills surfaced near the page CTA — echoes the brochure's "what
 * you get" outcome list.
 */
export const PERFORMIX_OUTCOME_PILLS = [
  { icon: Scale, label: "Fair multi-tier reviews" },
  { icon: ClipboardCheck, label: "Defensible scoring trail" },
  { icon: Sparkles, label: "Live HR visibility" },
  { icon: CheckCircle2, label: "Compensation-ready exports" },
] as const;
