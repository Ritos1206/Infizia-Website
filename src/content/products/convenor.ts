/**
 * Convenor — AI-driven Hiring Platform.
 *
 * Single source of truth: web/public/brochures/convenor.pdf
 *
 * Content extracted directly from the brochure PDF (15 slides covering cover,
 * overview, challenge, solution, capabilities matrix, 11 key features, closing
 * pills). No supplementary markdown brief — the PDF IS the canonical content.
 *
 * Vertical: HR & Workforce.
 * Brand accent: indigo — distinct from teal/green/blue/red-hat (D-34).
 * Bespoke visual: Resume-AI Extraction Overlay (alternative to a hiring
 * pipeline slider — picked for visual diversity vs the device-mockup heroes
 * of EyeCON / VitaCare / EyePOS).
 */

import {
  BarChart3,
  Brain,
  ClipboardCheck,
  FileScan,
  Globe2,
  Headphones,
  Mail,
  ScanFace,
  ShieldCheck,
  UserCheck,
  Users,
} from "lucide-react";

import type { StandardProductContent } from "./types";

export const convenorContent: StandardProductContent = {
  slug: "convenor",
  name: "Convenor",
  vertical: "HR & Workforce",
  accent: "indigo",

  // Cover-line of the brochure: "Convenor : AI powered HRMS automation system"
  tagline: "AI-powered HRMS automation. Hiring on autopilot.",

  // Cover lede + Overview slide collapsed into a single positioning paragraph.
  positioning:
    "Convenor is an AI-driven hiring platform that automates resume analysis and conducts unbiased AI-led video interviews — so HR teams stop drowning in screening work and find the best-fit candidate faster. Powered by AI and custom-trained interview bots, Convenor handles the entire top-of-funnel — sourcing through shortlisting through structured first-round interviews — and only forwards the candidates worth your team's time.",

  // Challenge slide — 5 traditional bottlenecks from the brochure.
  problem: {
    kicker: "The challenge",
    title: "Traditional hiring is slow, biased, and runs on manual labour.",
    body: "Resume screening eats days. Shortlists carry unconscious bias. Interview scheduling drags out for weeks. Soft-skill insights are limited to a single subjective conversation. And the first round of every interview is still a manual exercise that ties up senior HR time on candidates who shouldn't have made it that far. Convenor automates every one of these bottlenecks.",
  },

  // Capabilities matrix slide — 8 features in a tidy grid (the brochure
  // lists 11; we keep all 11 condensed into 8 clear feature cards by merging
  // related ones — proctoring is one card with both AI + manual aspects;
  // transcription + scoring are merged into a single "interview intelligence" card).
  features: {
    kicker: "Capabilities",
    title: "Next-gen recruitment, end to end.",
    lede: "Every step of the hiring funnel — automated, observable, and auditable. Convenor's AI does the screening grunt work; your HR team owns the final call.",
    items: [
      {
        icon: FileScan,
        title: "AI-powered resume screening",
        body: "Convenor reads each resume, matches skills and experience against the job description, and shortlists best-fit candidates automatically — drastically cutting manual screening effort.",
      },
      {
        icon: Mail,
        title: "Automated interview invitations",
        body: "Once shortlisted, candidates are emailed interview invites automatically. No back-and-forth, no scheduling spreadsheets.",
      },
      {
        icon: ScanFace,
        title: "Identity & document verification",
        body: "Face recognition and ID-proof verification confirm the legitimacy of every candidate before the interview begins — protecting both sides of the table.",
      },
      {
        icon: Brain,
        title: "AI-generated interview questions",
        body: "The bot reads the job description and the candidate's stated skill set, then generates relevant, role-specific questions on the fly — no boilerplate scripts.",
      },
      {
        icon: ShieldCheck,
        title: "AI + manual proctoring",
        body: "Generative AI watches facial expressions and movement during the interview, warns on suspicious activity, and removes repeat offenders. Screen-share and full recording are available for admin review.",
      },
      {
        icon: Headphones,
        title: "Live transcription, scoring & summary",
        body: "Every answer is transcribed live, scored by AI against the question, and summarized for later review — so HR sees the substance, not just the recording.",
      },
      {
        icon: Users,
        title: "Live 1:1 round with HR",
        body: "Only candidates who clear the AI round move forward to a live 1:1 with HR. Senior interviewer time goes to candidates who deserve it.",
      },
      {
        icon: BarChart3,
        title: "Analytics dashboard",
        body: "Admin-level reporting on funnel health, candidate scoring distributions, and workforce decisions — to administer existing teams and plan new hires.",
      },
    ],
  },

  // Use cases — the brochure doesn't have an explicit "who it's for" slide,
  // so we synthesize three buyer personas grounded in the product's stated
  // capabilities (high-volume hiring, multi-language global teams, lean HR
  // teams that need to outsource the first round).
  useCases: {
    kicker: "Who it's for",
    title: "Built for the teams whose calendar is interviews.",
    lede: "Wherever hiring volume outruns HR bandwidth, Convenor closes the gap — without compromising fairness or candidate experience.",
    items: [
      {
        icon: ClipboardCheck,
        title: "High-volume hiring teams",
        body: "Talent acquisition at scale — graduate batches, BPO floors, retail expansion — where hundreds of resumes per role make manual screening impossible.",
      },
      {
        icon: Globe2,
        title: "Global / distributed recruiting",
        body: "Multi-language interview support and 24×7 AI availability mean teams in different time zones get screened on the same standard, in their own language.",
      },
      {
        icon: UserCheck,
        title: "Lean HR teams",
        body: "Small HR functions that need to outsource the first round — Convenor handles initial screening end to end, and only senior interviewers see the final shortlist.",
      },
    ],
  },
};
