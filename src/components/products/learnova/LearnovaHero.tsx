"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Download,
  ListChecks,
  Sparkles,
  Trophy,
  Wand2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { GridBackground } from "@/components/motion/GridBackground";
import { LEARNOVA_SAMPLE_COURSE } from "@/content/products/learnova";

/**
 * Learnova — bespoke hero (custom layout, NOT using ProductHero).
 *
 * Concept: "Live Studio" — break the standard asymmetric copy-left /
 * visual-right split that every other product page uses. Instead, the
 * page itself feels like opening Learnova:
 *
 *   ┌──────────────────────────────────────────────────────────────┐
 *   │  ⬡ Education · Learnova                                      │   ← kicker (centered)
 *   │                                                              │
 *   │                    L E A R N O V A                           │   ← massive name (centered)
 *   │             Learn smarter, not harder.                       │   ← tagline (centered)
 *   │   <positioning paragraph, narrower max-width, centered>      │
 *   │                                                              │
 *   │  ┌───────────────── STUDIO BAR ─────────────────────────┐    │   ← full-width bar
 *   │  │ ⬡ Topic: Machine Learning Fundamentals_  ▸ Generate │    │
 *   │  └─────────────────────────────────────────────────────┘    │
 *   │                                                              │
 *   │  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌──────────────────────┐    │   ← horizontal modules row
 *   │  │ M01 │ │ M02 │ │ M03 │ │ M04 │ │  🏆 Final Mock Test │    │   + mock-test card
 *   │  └─────┘ └─────┘ └─────┘ └─────┘ └──────────────────────┘    │
 *   │                                                              │
 *   │       [ Book a Demo ▸ ]   [ ↓ View Brochure ]                │   ← CTAs (centered)
 *   │       Pricing — Custom · book a demo for a quote             │
 *   └──────────────────────────────────────────────────────────────┘
 *
 * The vertical flow (kicker → name → tagline → positioning → studio →
 * modules → CTAs) tells the same story the product tells: type a topic,
 * watch the course materialize. Floating chips orbit the modules row.
 *
 * This pattern is reserved for Learnova — the rest of the catalogue
 * keeps the standard ProductHero split.
 *
 * RESPONSIVE STRATEGY:
 *   • <640px:  modules collapse to 2-col grid; mock-test card spans full
 *              width below them; floating chips hidden.
 *   • 640px+:  4 modules + mock-test in one horizontal row (5 cells).
 *   • lg+:     larger spacing, brighter glow, all floating chips visible.
 */
export function LearnovaHero({
  brochureHref = "/brochures/learnova.pdf",
}: {
  brochureHref?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-28 lg:pb-32">
      <GridBackground />

      {/* Ambient fuchsia + violet glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/3 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-brand-fuchsia/[0.10] blur-[120px]" />
        <div className="absolute top-1/3 -right-40 h-[400px] w-[400px] rounded-full bg-brand-violet/[0.08] blur-[100px]" />
        <div className="absolute bottom-0 -left-40 h-[400px] w-[400px] rounded-full bg-brand-fuchsia/[0.06] blur-[100px]" />
      </div>

      <Container>
        {/* ─────────────────────  CENTERED COPY STACK  ───────────────────── */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          {/* Kicker */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-fuchsia/30 bg-brand-fuchsia/10 px-3 py-1.5"
          >
            <Sparkles className="h-3 w-3 text-brand-fuchsia" />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-fuchsia">
              Education · Learnova
            </span>
          </motion.div>

          {/* Massive product name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 font-display text-[3.5rem] font-semibold leading-[0.95] tracking-tight text-white md:text-7xl lg:text-[6.5rem]"
          >
            Learnova
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 font-display text-2xl font-medium leading-tight tracking-tight text-brand-fuchsia md:text-3xl lg:text-4xl"
          >
            Learn smarter, not harder.
          </motion.p>

          {/* Positioning paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-7 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg"
          >
            Type a topic and Learnova generates a complete, personalized learning
            experience — full courses, practice questions, live quizzes, mock tests,
            and real-time doubt resolution. Every piece adapts to the learner.
          </motion.p>
        </div>

        {/* ─────────────────────  STUDIO BAR  ───────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-12 w-full max-w-3xl md:mt-16"
        >
          <StudioBar />
        </motion.div>

        {/* ─────────────────────  HORIZONTAL MODULES ROW + FLOATING CHIPS ───────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="relative mx-auto mt-5 w-full max-w-5xl"
        >
          <ModulesRow />

          {/* Floating "+ 64 MCQs auto-generated" — top-left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -10, y: -6 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="absolute -top-3 left-2 hidden items-center gap-1.5 rounded-full border border-brand-fuchsia/40 bg-bg-base/90 px-2.5 py-1.5 backdrop-blur-md sm:inline-flex"
          >
            <ListChecks className="h-3 w-3 text-brand-fuchsia" />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-fuchsia-soft">
              + 64 MCQs auto-generated
            </span>
          </motion.div>

          {/* Floating "Adaptive · personalised" — top-right (lg+ only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 10, y: -6 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5, delay: 1.55 }}
            className="absolute -top-3 right-2 hidden items-center gap-1.5 rounded-full border border-brand-violet/40 bg-bg-base/90 px-2.5 py-1.5 backdrop-blur-md lg:inline-flex"
          >
            <Brain className="h-3 w-3 text-brand-violet" />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-violet-soft">
              Adaptive · personalised
            </span>
          </motion.div>

          {/* Floating "Mock test ready" — bottom centre */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.7 }}
            className="absolute -bottom-3 left-1/2 hidden -translate-x-1/2 items-center gap-1.5 rounded-full border border-brand-fuchsia/40 bg-bg-base/90 px-2.5 py-1.5 backdrop-blur-md sm:inline-flex"
          >
            <Trophy className="h-3 w-3 text-brand-fuchsia" />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-fuchsia-soft">
              Mock test ready
            </span>
          </motion.div>
        </motion.div>

        {/* ─────────────────────  CTAs (centered)  ───────────────────── */}
        <div className="mx-auto mt-14 flex max-w-3xl flex-col items-center text-center md:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.85 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <ButtonLink href="/contact/demo" variant="primary" size="lg">
              Book a Demo
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink
              href={brochureHref}
              variant="outline"
              size="lg"
              external={/\.(pdf|pptx?)$/i.test(brochureHref)}
            >
              <Download className="h-4 w-4" />
              View Brochure
            </ButtonLink>
          </motion.div>

          {/* Pricing pill */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2 }}
            className="mt-7 flex items-center gap-3 text-xs text-text-faint"
          >
            <span className="font-mono uppercase tracking-[0.18em]">
              Pricing
            </span>
            <span className="h-px w-8 bg-white/10" />
            <span>Custom pricing — book a demo for a tailored quote</span>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Studio bar — full-width topic prompt with chrome + Generate button         */
/* ───────────────────────────────────────────────────────────────────────── */

function StudioBar() {
  const text = LEARNOVA_SAMPLE_COURSE.topic;
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-bg-elevated/80 backdrop-blur-md shadow-glow-fuchsia">
      {/* Top hairline shimmer */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brand-fuchsia/0 via-brand-fuchsia/80 to-brand-fuchsia/0"
      />

      {/* Chrome row */}
      <div className="flex items-center justify-between border-b border-white/5 px-3 py-2 sm:px-4">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2 items-center justify-center">
            <span className="absolute h-2 w-2 animate-ping rounded-full bg-brand-fuchsia/60" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-brand-fuchsia" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white">
            Learnova.studio
          </span>
        </div>
        <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-fuchsia/30 bg-brand-fuchsia/10 px-2 py-0.5">
          <Wand2 className="h-3 w-3 text-brand-fuchsia" />
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-brand-fuchsia-soft">
            Generating
          </span>
        </div>
      </div>

      {/* Prompt body — topic + Generate button */}
      <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:gap-4 sm:p-5">
        <div className="flex flex-1 items-center gap-2.5">
          <Sparkles className="h-4 w-4 shrink-0 text-brand-fuchsia" />
          <div className="min-w-0 flex-1">
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-text-faint">
              Topic
            </p>
            <div className="mt-0.5 flex items-center gap-1">
              <p className="truncate font-display text-base font-medium text-white sm:text-lg">
                {text}
              </p>
              <motion.span
                aria-hidden
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.1, repeat: Infinity }}
                className="inline-block h-4 w-[2px] rounded-sm bg-brand-fuchsia"
              />
            </div>
          </div>
        </div>

        {/* Generate button */}
        <div className="flex shrink-0 items-center gap-2">
          <span className="inline-flex h-9 items-center gap-1.5 rounded-full border border-brand-fuchsia/40 bg-brand-fuchsia/15 px-3.5 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-fuchsia-soft sm:h-10 sm:px-4">
            <Wand2 className="h-3 w-3" />
            Generate course
          </span>
        </div>
      </div>

      {/* Progress bar — fills on viewport-enter */}
      <div className="h-1 bg-white/[0.05]">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: 1.6,
            delay: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-full bg-gradient-to-r from-brand-fuchsia via-brand-violet to-brand-fuchsia"
        />
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Modules row — 4 module cards + mock-test card in a horizontal grid          */
/* ───────────────────────────────────────────────────────────────────────── */

function ModulesRow() {
  const modules = LEARNOVA_SAMPLE_COURSE.modules;
  const mock = LEARNOVA_SAMPLE_COURSE.mockTest;
  return (
    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-5 sm:gap-3">
      {modules.map((m, i) => (
        <motion.div
          key={m.n}
          initial={{ opacity: 0, y: 14, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.45,
            delay: 0.85 + i * 0.16,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group relative overflow-hidden rounded-xl border border-white/10 bg-bg-elevated/40 p-3 backdrop-blur-md transition-colors hover:border-brand-fuchsia/30 sm:p-3.5"
        >
          {/* Module accent bar (left edge) */}
          <span
            aria-hidden
            className="absolute inset-y-2 left-0 w-[2px] rounded-r-full bg-brand-fuchsia/50"
          />

          <div className="flex items-start justify-between gap-2 pl-2">
            <div className="min-w-0 flex-1">
              <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-brand-fuchsia">
                Module {m.n}
              </p>
              <p className="mt-0.5 line-clamp-2 font-display text-[13px] font-semibold leading-tight text-white sm:text-sm">
                {m.title}
              </p>
            </div>
            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-brand-fuchsia/70" />
          </div>

          {/* Stats strip */}
          <div className="mt-2.5 flex flex-wrap items-center gap-1.5 pl-2">
            <span className="rounded border border-white/10 bg-white/[0.03] px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-text-secondary">
              {m.lessons} lessons
            </span>
            <span className="rounded border border-brand-fuchsia/20 bg-brand-fuchsia/[0.06] px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-brand-fuchsia-soft">
              {m.mcqs} MCQs
            </span>
          </div>
        </motion.div>
      ))}

      {/* Final mock-test card — last cell, brighter */}
      <motion.div
        initial={{ opacity: 0, y: 14, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.85 + modules.length * 0.16,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative col-span-2 overflow-hidden rounded-xl border border-brand-fuchsia/40 bg-gradient-to-br from-brand-fuchsia/[0.12] via-brand-fuchsia/[0.06] to-transparent p-3 backdrop-blur-md sm:col-span-1 sm:p-3.5"
      >
        {/* Top hairline shimmer */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brand-fuchsia/0 via-brand-fuchsia/80 to-brand-fuchsia/0"
        />

        <div className="flex items-start gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-brand-fuchsia/40 bg-brand-fuchsia/15">
            <Trophy
              className="h-4 w-4 text-brand-fuchsia"
              strokeWidth={1.8}
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-brand-fuchsia">
              Final
            </p>
            <p className="mt-0.5 font-display text-[13px] font-semibold leading-tight text-white sm:text-sm">
              Mock test
            </p>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
          <span className="rounded border border-brand-fuchsia/20 bg-brand-fuchsia/[0.06] px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-brand-fuchsia-soft">
            {mock.questions} q
          </span>
          <span className="rounded border border-white/10 bg-white/[0.03] px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-text-secondary">
            {mock.duration}
          </span>
        </div>
      </motion.div>
    </div>
  );
}
