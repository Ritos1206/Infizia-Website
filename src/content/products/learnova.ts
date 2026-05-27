/**
 * Learnova — AI Course Generator (Education vertical).
 *
 * Single source of truth: `web/public/brochures/learnova.pdf` (production
 * brochure, 11 slides — content extracted directly from there). Convenor
 * pattern (D-35) — when the production PDF is the canonical deliverable,
 * we don't write a separate brochure markdown.
 *
 * Brand accent: fuchsia — distinct from violet (Meetrix), rose (Intellix),
 * indigo (Convenor), amber (Performix), and the flagship trio
 * (teal / green / blue). Education needs vibrancy — fuchsia opens up the
 * magenta zone in the palette no other product occupies.
 *
 * Bespoke visual: LearnovaCourseComposer — topic input materializes a full
 * course outline module-by-module with floating generation chips.
 * Mid-page: LearnovaLearningPath — winding 4-station journey from topic
 * to mastery.
 *
 * Voice rule: business-first. No technology / vendor names exposed in any
 * user-facing string here. Implementation can swap providers without
 * touching this content.
 */

import {
  Brain,
  Building2,
  GraduationCap,
  ListChecks,
  MessageCircleQuestion,
  ScrollText,
  SlidersHorizontal,
  Sparkles,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

import type { StandardProductContent } from "./types";

export const learnovaContent: StandardProductContent = {
  slug: "learnova",
  name: "Learnova",
  vertical: "Education",
  accent: "fuchsia",

  tagline: "Learn smarter, not harder.",

  positioning:
    "Learnova is an intelligent, all-in-one educational platform that turns any topic into a complete, personalized learning experience. Type a topic and Learnova generates a full multi-module course, auto-generated practice questions, live quizzes, and full-length mock tests around it — with real-time doubt resolution, course summarization, and adaptive assessments built in. The result is a comprehensive, interactive, learner-shaped journey that reshapes itself as the learner progresses.",

  problem: {
    kicker: "The challenge",
    title: "Online learning fights every learner with the same five problems.",
    body: "Generic, one-size-fits-all courses don't bend to the learner's level, pace, or goal. Personalization is shallow — content doesn't adapt as the learner progresses, struggles, or accelerates. Interactivity is low — passive video + PDF format with no live questioning or checks for understanding. And building a course manually is a multi-week effort, so most topics never get one. Learnova replaces all of it with one platform that generates the course, the practice, the quizzes, the mock tests, and the doubt-solving — and adapts every piece to the learner.",
  },

  features: {
    kicker: "Capabilities",
    title: "From a single topic to a complete learning journey.",
    lede: "Every piece of a learner's path — course, practice, quizzes, mock tests, doubt-solving, summaries — generated on demand and continuously adapted to the learner.",
    items: [
      {
        icon: Sparkles,
        title: "Topic to course, on demand",
        body: "Type any topic and Learnova generates a multi-module course tuned to the learner's level, complete with explanations, examples, and worked problems.",
      },
      {
        icon: ListChecks,
        title: "Practice questions, auto-generated",
        body: "Every topic and subtopic ships with its own MCQ bank — hints, step-by-step explanations, and instant evaluation built in.",
      },
      {
        icon: Zap,
        title: "Live quizzes for engagement",
        body: "Real-time quiz sessions with customizable difficulty — equally good for self-assessment, group study, or classroom drills.",
      },
      {
        icon: MessageCircleQuestion,
        title: "Doubt-solving in plain language",
        body: "Learners ask anything in natural language and get step-by-step answers grounded in the course they're studying. No queue, no waiting.",
      },
      {
        icon: ScrollText,
        title: "Concise course summaries",
        body: "One-tap summaries of any course or topic — built for rapid revision before exams or check-ins.",
      },
      {
        icon: Trophy,
        title: "Mock tests that simulate the real thing",
        body: "Full-length, AI-curated mock exams that simulate real test patterns and adapt to the learner's performance over time.",
      },
      {
        icon: SlidersHorizontal,
        title: "Adaptive progress tracking",
        body: "The system learns the learner — reshaping content, difficulty, and recommendations as their performance shifts.",
      },
    ],
  },

  useCases: {
    kicker: "Who it's for",
    title: "Built for everyone whose job is to learn — or to teach.",
    lede: "Wherever someone needs a complete learning track around a specific topic, Learnova replaces weeks of manual authoring with on-demand generation that adapts to the learner.",
    items: [
      {
        icon: GraduationCap,
        title: "Independent learners & exam aspirants",
        body: "Students preparing for entrance exams, certifications, or self-paced upskilling who want a personalized course + practice + mock-test bundle around any topic on demand.",
      },
      {
        icon: Users,
        title: "Educators, tutors & coaching institutes",
        body: "Instructors and coaching centres that need to produce course content, practice sets, and mock tests at scale — without weeks of manual authoring per topic.",
      },
      {
        icon: Building2,
        title: "Corporate L&D & training teams",
        body: "Workforce learning teams rolling out role-specific upskilling tracks fast — one topic in, a complete tracked learning path out.",
      },
    ],
  },
};

/**
 * Closing pills surfaced near the page CTA — echoes the brochure's
 * outcome line.
 */
export const LEARNOVA_OUTCOME_PILLS = [
  { icon: Sparkles, label: "One topic in, a complete course out" },
  { icon: ListChecks, label: "Practice + mock tests, auto-built" },
  { icon: MessageCircleQuestion, label: "Doubts answered in seconds" },
  { icon: Brain, label: "Adaptive — every learner, their own path" },
] as const;

/**
 * The four phases of a Learnova learner's journey — drives the mid-page
 * "Learning Path" section.
 *
 * Each phase represents what's active for the learner at that point in
 * their journey: the features they're using, the day range they're in,
 * and the milestone they're heading toward.
 */
export const LEARNOVA_JOURNEY_PHASES = [
  {
    n: "01",
    label: "Generate",
    day: "Day 1",
    icon: Sparkles,
    title: "Topic in, course out",
    body: "Type a topic. Learnova generates a multi-module course tuned to the learner's level — modules, lessons, examples, and worked problems, in seconds.",
    activities: [
      "Topic prompt",
      "Multi-module course",
      "Lessons + examples",
    ],
    state: "done" as const,
  },
  {
    n: "02",
    label: "Practice",
    day: "Day 1 — Day 7",
    icon: ListChecks,
    title: "Auto-generated MCQs + live quizzes",
    body: "Every topic and subtopic ships with its own MCQ bank. Live quiz sessions add real-time engagement — customizable difficulty, instant evaluation, hints when stuck.",
    activities: [
      "MCQs per topic",
      "Live quizzes",
      "Hints + explanations",
    ],
    state: "done" as const,
  },
  {
    n: "03",
    label: "Resolve",
    day: "Ongoing",
    icon: MessageCircleQuestion,
    title: "Doubt-solving + summaries on demand",
    body: "Stuck on a concept? Ask in plain language and Learnova answers step-by-step, grounded in the course you're on. Need to revise fast? Get a concise summary in one tap.",
    activities: [
      "Natural-language Q&A",
      "Step-by-step answers",
      "One-tap summaries",
    ],
    state: "live" as const,
  },
  {
    n: "04",
    label: "Master",
    day: "Day 14+",
    icon: Trophy,
    title: "Mock tests + adaptive feedback",
    body: "Full-length mock tests simulate the real exam. Performance reshapes the path — remedial content where it's needed, faster ramps where it's earned.",
    activities: [
      "Full-length mock tests",
      "Adaptive feedback",
      "Mastery dashboard",
    ],
    state: "upcoming" as const,
  },
] as const;

/**
 * Sample course outline rendered by the LearnovaCourseComposer hero. A
 * fictional but realistic ML-fundamentals track that demonstrates the
 * generation idiom — modules, lesson counts, MCQ counts, mock test.
 */
export const LEARNOVA_SAMPLE_COURSE = {
  topic: "Machine Learning Fundamentals",
  modules: [
    {
      n: "01",
      title: "Foundations",
      lessons: 3,
      mcqs: 12,
    },
    {
      n: "02",
      title: "Supervised Learning",
      lessons: 5,
      mcqs: 18,
    },
    {
      n: "03",
      title: "Unsupervised Learning",
      lessons: 4,
      mcqs: 14,
    },
    {
      n: "04",
      title: "Deep Learning Basics",
      lessons: 6,
      mcqs: 20,
    },
  ],
  mockTest: {
    duration: "45 min",
    questions: 50,
  },
} as const;
