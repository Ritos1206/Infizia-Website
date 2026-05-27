/**
 * LMS — Comprehensive E-Learning Platform (Education vertical).
 *
 * Single source of truth: `web/public/brochures/lms.pdf` (production
 * brochure, 15 slides — content extracted directly from there). Convenor
 * pattern (D-35 / D-49 / Learnova) — when the production PDF is the
 * canonical deliverable, no separate brochure markdown is written.
 *
 * Brand accent: orange — distinct from amber's golden-yellow (Performix)
 * and from every other shipped accent. Warm "classroom & community" tone
 * fits the institutional / multi-user nature of an LMS — rooms full of
 * learners, instructors, live cohorts.
 *
 * Bespoke visual: LMSActivityHub — institutional dashboard chrome
 * showing simultaneous activities (live class · quiz · certificate ·
 * course progress · community thread · offline sync).
 * Mid-page: LMSThreePerspectives — three side-by-side mini-UI mockups
 * showing how one platform serves three audiences (Instructor /
 * Student / Admin).
 *
 * Voice rule: business-first. No technology / vendor names exposed in
 * any user-facing string here. Implementation can swap providers
 * without touching this content.
 */

import {
  Award,
  BarChart3,
  Bell,
  BookOpen,
  Building2,
  CheckCircle2,
  Compass,
  GraduationCap,
  Layers,
  MessagesSquare,
  Monitor,
  Package,
  ScreenShare,
  Shield,
  Sparkles,
  Users,
  Video,
  Wifi,
} from "lucide-react";

import type { StandardProductContent } from "./types";

export const lmsContent: StandardProductContent = {
  slug: "lms",
  name: "LMS",
  vertical: "Education",
  accent: "orange",

  tagline: "One platform. Every learner. Every cohort. Every course.",

  positioning:
    "LMS is a comprehensive, scalable e-learning platform built for educators, institutions, and organizations to deliver engaging, interactive, personalized education online. Course management, live classes, AI-driven recommendations, community discussions, automated quizzes and certifications — all on one unified platform that runs at any institutional scale, from a single instructor to a multi-campus university.",

  problem: {
    kicker: "The challenge",
    title: "Education runs on five fragmented tools.",
    body: "Educators juggle multiple platforms — one for course delivery, another for quizzes, a third for live classes, a fourth for community, and a fifth for certificates. Engagement suffers because traditional online courses lack interactivity and personalization. Course and assessment management is manual and slow. There's no unified dashboard to track learner progress in real time, and scaling training across large or remote audiences is operationally hard. LMS unifies all of it on one platform — institutional-grade, multi-user, and scaled to thousands of learners.",
  },

  features: {
    kicker: "Capabilities",
    title: "Everything an institution needs to run learning at scale.",
    lede: "Course delivery, live classes, AI-driven recommendations, quizzes, certificates, community, and offline access — all on one unified platform.",
    items: [
      {
        icon: BookOpen,
        title: "Course creation & management",
        body: "Instructors build structured courses with videos, PDFs, and interactive materials. Milestones and learning paths give granular progress control over every cohort.",
      },
      {
        icon: Compass,
        title: "AI-based content recommendation",
        body: "Recommends relevant modules and learning paths based on the learner's activity, interests, and performance — personalising the experience without manual curation.",
      },
      {
        icon: Video,
        title: "Live video classes & interactive tools",
        body: "Built-in support for live lectures with screen sharing and whiteboards. Integrates with Zoom, Google Meet, and Microsoft Teams when institutions prefer their existing stack.",
      },
      {
        icon: Award,
        title: "Automated quizzes & certifications",
        body: "Auto-generated quizzes with instant grading. Digital certificates issued on course completion with customizable templates — no manual processing.",
      },
      {
        icon: MessagesSquare,
        title: "Discussion forums & community",
        body: "Group discussions, Q&A threads, and peer interaction built in. Learners learn collaboratively and get feedback in real time, in the same place they study.",
      },
      {
        icon: Wifi,
        title: "Multi-device & offline access",
        body: "Fully responsive across web and mobile. Offline mode lets learners download content and continue studying without an internet connection.",
      },
    ],
  },

  useCases: {
    kicker: "Who it's for",
    title: "Built for everyone running learning at scale.",
    lede: "Wherever an institution needs to deliver, manage, and certify learning across many people and many courses, LMS replaces the patchwork of tools with one platform.",
    items: [
      {
        icon: GraduationCap,
        title: "Universities & schools",
        body: "Institutions consolidating courses, live classes, assessments, and certifications across departments, campuses, or remote cohorts on one platform.",
      },
      {
        icon: Users,
        title: "Coaching institutes & EdTech companies",
        body: "Online and hybrid coaching businesses scaling beyond what spreadsheets and standalone tools can handle — courses, live cohorts, quizzes, and certificates in one workflow.",
      },
      {
        icon: Building2,
        title: "Corporate L&D & compliance training",
        body: "Workforce learning teams running role-based upskilling, onboarding, and compliance programs across thousands of employees with auto-tracking and certification.",
      },
    ],
  },
};

/**
 * Closing pills surfaced near the page CTA — echoes the brochure's
 * "why institutions need this LMS" themes.
 */
export const LMS_OUTCOME_PILLS = [
  { icon: Layers, label: "One centralized learning hub" },
  { icon: Sparkles, label: "AI-driven personalization" },
  { icon: BarChart3, label: "Real-time analytics & progress" },
  { icon: Wifi, label: "Multi-device · works offline" },
] as const;

/**
 * Live activity feed shown in the LMSActivityHub hero visual. Mix of
 * activity types (live class · quiz · certificate · course progress ·
 * community · offline sync) demonstrating the platform's institutional
 * scale + multi-modal nature at a glance.
 */
export const LMS_ACTIVITY_FEED = [
  {
    type: "live-class",
    icon: Video,
    title: "Algebra 102 · Live class",
    meta: "Dr. Mehta · 78 attending",
    status: "Live",
    statusTone: "live" as const,
    timestamp: "10:24",
  },
  {
    type: "quiz",
    icon: CheckCircle2,
    title: "Chemistry quiz · auto-graded",
    meta: "32 submissions · avg 8.4/10",
    status: "Done",
    statusTone: "done" as const,
    timestamp: "11:08",
  },
  {
    type: "certificate",
    icon: Award,
    title: "Certificate issued · Sarah J.",
    meta: "Python Bootcamp · 12 modules",
    status: "Issued",
    statusTone: "done" as const,
    timestamp: "11:12",
  },
  {
    type: "community",
    icon: MessagesSquare,
    title: "Forum · 12 new replies",
    meta: "Calculus · Peer discussion",
    status: "Active",
    statusTone: "live" as const,
    timestamp: "11:15",
  },
  {
    type: "offline",
    icon: Wifi,
    title: "Offline sync · 3 modules",
    meta: "Linear Algebra · ready offline",
    status: "Ready",
    statusTone: "done" as const,
    timestamp: "11:18",
  },
  {
    type: "course-progress",
    icon: Sparkles,
    title: "Recommendation · 247 learners",
    meta: "Path updated · adaptive",
    status: "Updated",
    statusTone: "done" as const,
    timestamp: "11:21",
  },
] as const;

/**
 * Three audience perspectives shown in the LMSThreePerspectives mid-page
 * section. Each perspective gets its own card with role label, an icon,
 * a short positioning line, and a list of UI elements that audience sees.
 */
export const LMS_PERSPECTIVES = [
  {
    role: "Instructor",
    icon: ScreenShare,
    title: "Build, teach, grade — all in one workspace.",
    description:
      "Course builder, live class controls, quiz and certificate management, and learner analytics — without switching tools.",
    surface: [
      { icon: BookOpen, label: "Course Builder", value: "12 modules" },
      { icon: Video, label: "Live Class", value: "Now · 78 in" },
      { icon: CheckCircle2, label: "Auto-grader", value: "32 quizzes" },
      { icon: BarChart3, label: "Cohort metrics", value: "+8% wk-on-wk" },
    ],
  },
  {
    role: "Student",
    icon: Monitor,
    title: "Learn, attend, ask, certify — without leaving the app.",
    description:
      "My courses, today's live class, recommended next module, community Q&A, and certificates earned — one continuous experience across web and mobile.",
    surface: [
      { icon: BookOpen, label: "My Courses", value: "5 active" },
      { icon: Bell, label: "Live in 12 min", value: "Algebra 102" },
      { icon: MessagesSquare, label: "Community", value: "12 new" },
      { icon: Award, label: "Certificates", value: "3 earned" },
    ],
  },
  {
    role: "Admin",
    icon: Shield,
    title: "Run the institution at a glance.",
    description:
      "Cohort enrolment, live engagement metrics, certificate issuance, and platform-wide analytics — all the levers an institution-scale operation needs.",
    surface: [
      { icon: Users, label: "Active learners", value: "1,247" },
      { icon: Package, label: "Courses live", value: "84" },
      { icon: Award, label: "Certs / week", value: "326" },
      { icon: BarChart3, label: "Engagement", value: "94%" },
    ],
  },
] as const;
