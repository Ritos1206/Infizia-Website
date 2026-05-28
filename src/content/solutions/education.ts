/**
 * Education solution — content brief.
 *
 * Brand accent: fuchsia (matches Learnova). The hero idiom is a knowledge
 * tree — root = topic, branches = modules, leaves = lessons + practice +
 * quizzes + mock test. Branches grow on viewport-enter to reinforce the
 * Learnova "topic in, complete course out" narrative at the vertical
 * level.
 *
 * Mapped products:
 *   • Learnova (anchor — AI course generator)
 *   • LMS (institution-wide delivery + community + certificates)
 *   • Meetrix (live class capture, tutor 1:1s, parent-teacher meetings)
 */

import {
  Activity,
  Award,
  BarChart3,
  BookOpen,
  Brain,
  Building2,
  ClipboardCheck,
  GraduationCap,
  Layers,
  ListChecks,
  MessageCircleQuestion,
  Network,
  ScrollText,
  Sparkles,
  TrendingUp,
  Trophy,
  UserCheck,
  Users,
  Users2,
} from "lucide-react";

import type { SolutionContent } from "./types";

export const educationContent: SolutionContent = {
  slug: "education",
  name: "Education",
  verticalLabel: "Education",
  accent: "fuchsia",

  tagline: "Type a topic. Grow a complete learning experience.",

  positioning:
    "Education today still treats learners as identical — same course, same pace, same content. The reality is that no two learners want the same path, and most institutions don't have the manpower to build personalised tracks at scale. Infizia's education stack flips that: type a topic and a complete course grows around it — modules, lessons, practice questions, live quizzes, and mock tests — adapting continuously as the learner progresses, and rolled out across an institution-grade LMS that handles cohorts, certificates, and community in one place.",

  pulse: {
    kicker: "Industry pulse",
    title: "Why most online learning still doesn't stick.",
    lede: "Generic content + passive video + once-a-month assessments produce predictable outcomes. The numbers haven't moved in a decade.",
    items: [
      {
        value: "5%",
        label: "average completion rate for self-paced online courses",
        caption: "Industry baseline · 2024",
      },
      {
        value: "3 weeks",
        label: "to author a single structured course manually",
        caption: "Subject expert · per topic",
      },
      {
        value: "1×/term",
        label: "is when most learners get a real assessment",
        caption: "Once a term, always too late",
      },
      {
        value: "65%",
        label: "of learner doubts go unanswered for 24+ hours",
        caption: "On forum / email channels",
      },
    ],
  },

  pain: {
    kicker: "What's slowing you down",
    title: "One-size-fits-all is the only size on offer.",
    lede: "Learners aren't lazy — they're stuck on courses that weren't built for them, with assessments that arrive too late, and doubts that wait days for a reply.",
    items: [
      {
        icon: Layers,
        title: "Generic, passive content",
        body: "Most online courses are video + PDF for everyone — no adaptation to level, pace, or goal. Engagement and completion fall off a cliff in week two.",
      },
      {
        icon: ListChecks,
        title: "Assessments arrive too late",
        body: "Practice questions, quizzes, and mock tests show up monthly or termly — far too late to actually steer the learner before the gap widens.",
      },
      {
        icon: MessageCircleQuestion,
        title: "Doubts go unanswered",
        body: "Forums and emails buffer questions for hours or days. By the time a tutor replies, the learner has already moved on — or given up.",
      },
      {
        icon: Building2,
        title: "Institutions can't scale authoring",
        body: "Building bespoke courses for every cohort takes weeks per topic. The result: a static catalogue, identical for every learner, refreshed once a year.",
      },
    ],
  },

  stack: {
    kicker: "The Infizia stack for education",
    title: "Three products. One learning record per learner.",
    lede: "Learnova generates the content, LMS delivers it across the institution, Meetrix captures every physical classroom session that needs to live in the learner's record.",
    entries: [
      {
        productSlug: "learnova",
        role: "Anchor — type a topic and Learnova generates a multi-module course, MCQs, live quizzes, mock tests, and doubt-solving — all adaptive to the learner.",
      },
      {
        productSlug: "lms",
        role: "Institution-grade LMS for delivery — cohorts, live classes, certificates, community, role-based dashboards for learners / instructors / admins.",
      },
      {
        productSlug: "meetrix",
        role: "Captures in-person lectures, classroom sessions, and physical workshops — recordings, transcripts, and summaries stored against the right cohort so absent learners and revising students never miss content.",
      },
    ],
  },

  useCases: {
    kicker: "Who it's for",
    title: "Wherever someone needs to learn — or to teach at scale.",
    lede: "The same generation-and-delivery stack scales from one independent learner with one topic to a 50,000-seat institution.",
    items: [
      {
        icon: GraduationCap,
        title: "Independent learners & exam aspirants",
        body: "One Learnova subscription replaces the course bank, the practice book, the mock test series, and the tutor-on-call — each one personalised, on demand.",
      },
      {
        icon: Users,
        title: "Coaching institutes & tutors",
        body: "Generate course content, MCQ banks, and full mock tests in minutes, not weeks. Deliver them at scale through LMS with quizzes, certificates, and community.",
      },
      {
        icon: Building2,
        title: "Universities & corporate L&D",
        body: "Roll out role-specific or course-specific learning tracks for thousands of learners. Adaptive paths, live class capture, and audited completion at scale.",
      },
    ],
  },

  outcomes: {
    kicker: "What changes",
    title: "Personalised at scale. Measured continuously.",
    lede: "These shifts don't take a year of curriculum redesign — they show up the first week the stack is live.",
    items: [
      {
        icon: Sparkles,
        metric: "3 weeks → 3 minutes",
        body: "Authoring a structured multi-module course collapses from weeks of subject-expert effort to a single topic prompt and an instant generated outline.",
      },
      {
        icon: TrendingUp,
        metric: "4× completion",
        body: "Adaptive content + per-topic MCQs + live quizzes lift completion rates dramatically over the static-video baseline.",
      },
      {
        icon: MessageCircleQuestion,
        metric: "<10 sec doubt resolution",
        body: "Learners ask in plain language and get step-by-step answers grounded in the course they're studying. No queue, no waiting.",
      },
      {
        icon: Award,
        metric: "1:1 personalisation",
        body: "Every learner gets a course tuned to their level + a mock test pattern that simulates their actual exam — without anyone authoring it for them by hand.",
      },
    ],
  },
};

/**
 * Knowledge-tree branch structure for the bespoke hero. Each branch
 * grows from the central topic node into typed leaves: module / lesson /
 * MCQ / quiz / mock test.
 */
export const EDUCATION_TREE_BRANCHES = [
  {
    label: "Module 01 — Foundations",
    icon: BookOpen,
    leaves: [
      { type: "Lesson", count: 3 },
      { type: "MCQ", count: 12 },
    ],
  },
  {
    label: "Module 02 — Core",
    icon: Brain,
    leaves: [
      { type: "Lesson", count: 5 },
      { type: "MCQ", count: 18 },
    ],
  },
  {
    label: "Module 03 — Applied",
    icon: Network,
    leaves: [
      { type: "Lesson", count: 4 },
      { type: "Live quiz", count: 1 },
    ],
  },
  {
    label: "Module 04 — Mastery",
    icon: Trophy,
    leaves: [
      { type: "Mock test", count: 1 },
      { type: "MCQ", count: 22 },
    ],
  },
] as const;

export const EDUCATION_BADGES = [
  { icon: Sparkles, label: "Topic in, course out" },
  { icon: Activity, label: "Adaptive · per learner" },
  { icon: ClipboardCheck, label: "MCQs + mock tests built in" },
  { icon: BarChart3, label: "Per-learner mastery dashboard" },
  { icon: UserCheck, label: "Role-based · learner / tutor / admin" },
  { icon: Users2, label: "Cohorts · classes · certificates" },
  { icon: ScrollText, label: "Course summaries on demand" },
] as const;
