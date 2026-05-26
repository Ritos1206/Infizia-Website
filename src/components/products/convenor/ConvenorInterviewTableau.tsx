"use client";

import { motion } from "framer-motion";
import {
  Activity,
  CheckCircle2,
  Clock,
  Languages,
  Mic,
  ScanLine,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Convenor — "AI Interview Live" tableau.
 *
 * Replaces the static 11-tile capability grid. Instead of labelled boxes,
 * this is a single composed scene that *shows* Convenor's capabilities in
 * action — every panel demonstrates a real product feature in context:
 *
 *   • Candidate tile (face-detection frame, identity-verified pill)
 *     → Identity verification + AI-based proctoring
 *   • AI Interviewer card (animated avatar + current question)
 *     → AI-generated interview questions
 *   • Live transcription ribbon (autoscrolling diarized text)
 *     → Live transcription + summarization
 *   • Scoring panel (per-question score bars filling in)
 *     → Automated scoring
 *   • Action chips (multi-language, recording, invite sent, scheduled)
 *     → Multi-language support + manual proctoring + automated invitations
 *     + analytics trail
 *
 * RESPONSIVE STRATEGY (iPhone SE 375 → Nest Hub Max 1280):
 *   • <640px:   single column, stacked vertically — candidate, AI question,
 *               transcript, scoring, chips
 *   • 640–1023: 2-col grid — left col is candidate + AI question stacked,
 *               right col is transcript + scoring stacked, chips full-width
 *   • ≥1024px:  3-col layout — left (candidate + AI), middle (transcript),
 *               right (scoring + chips)
 *
 * Brand accent: indigo (text-brand-indigo, bg-brand-indigo/X, border…/X).
 */
export function ConvenorInterviewTableau() {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 lg:py-32">
      {/* Tinted backdrop with subtle indigo glow */}
      <div className="absolute inset-0 -z-10 bg-bg-surface/40" />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-indigo/[0.06] blur-3xl" />
      </div>

      <Container>
        <SectionHeader
          kicker="In the room"
          title="How Convenor runs an interview."
          lede="The bot reads the JD, asks the questions, watches the room, transcribes every answer, scores them in real time — all before a human ever joins. This is what your HR sees while it's happening."
        />

        <Reveal delay={0.1}>
          <div className="mt-10 sm:mt-12 lg:mt-14">
            {/* ── Live Interview Tableau ─────────────────────────────────── */}
            <div
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-bg-elevated/60 p-3 backdrop-blur-md sm:p-4 lg:p-5"
              style={{
                boxShadow:
                  "0 24px 60px -12px rgba(0,0,0,0.4), 0 0 60px -20px rgba(129,140,248,0.18)",
              }}
            >
              {/* Tableau chrome: simulates an interview-platform UI bar */}
              <TableauChrome />

              {/* Main grid */}
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-12">
                {/* Left column — Candidate + AI Bot stack
                    (full-width on mobile, 1 col of 2 on sm, 4 cols of 12 on lg) */}
                <div className="flex flex-col gap-3 sm:col-span-1 lg:col-span-4">
                  <CandidateTile />
                  <AIInterviewerCard />
                </div>

                {/* Middle column — Live Transcript
                    (full-width on mobile, 1 col on sm, 5 cols on lg) */}
                <div className="sm:col-span-1 lg:col-span-5">
                  <LiveTranscriptPanel />
                </div>

                {/* Right column — Scoring panel + Activity chips
                    (full-width on mobile, full-width 2-col span on sm, 3 cols on lg) */}
                <div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-3">
                  <ScoringPanel />
                  <ActivityChips />
                </div>
              </div>
            </div>

            {/* Footer caption */}
            <p className="mt-6 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-text-faint">
              <span className="text-brand-indigo">●</span> Live ·
              identity ✓ · proctoring on · scoring 7.8/10 average
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Tableau chrome — top bar that frames the whole scene                        */
/* ───────────────────────────────────────────────────────────────────────── */

function TableauChrome() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 px-2 pb-3 sm:px-3">
      <div className="flex items-center gap-2 sm:gap-3">
        <span className="flex h-2 w-2 items-center justify-center">
          <span className="absolute h-2 w-2 animate-ping rounded-full bg-red-500/60" />
          <span className="relative h-1.5 w-1.5 rounded-full bg-red-500" />
        </span>
        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-white">
          Recording
        </span>
        <span className="hidden text-text-faint sm:inline">·</span>
        <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint sm:inline">
          Convenor.live
        </span>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1.5 rounded-full border border-brand-indigo/30 bg-brand-indigo/10 px-2 py-1">
          <Sparkles className="h-3 w-3 text-brand-indigo" />
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-brand-indigo-soft">
            AI Interviewer
          </span>
        </div>
        <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-text-faint sm:inline">
          12:48
        </span>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Candidate tile — face-detection frame + identity badge                      */
/* ───────────────────────────────────────────────────────────────────────── */

function CandidateTile() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-bg-base to-bg-surface">
      {/* Soft ambient indigo glow inside the tile */}
      <div className="pointer-events-none absolute inset-0 bg-brand-indigo/[0.04]" />

      {/* Subtle scan-line motion */}
      <motion.div
        aria-hidden
        animate={{ y: [-12, 200, -12] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-transparent via-brand-indigo/10 to-transparent"
      />

      {/* Centered candidate "video" — abstract avatar silhouette */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-indigo/40 to-brand-blue/30 sm:h-20 sm:w-20">
          <UserRound
            className="h-8 w-8 text-white/80 sm:h-10 sm:w-10"
            strokeWidth={1.4}
          />
        </div>
      </div>

      {/* Face-detection bounding box (centered on the avatar) */}
      <FaceDetectionFrame />

      {/* Top-left: name + verified badge */}
      <div className="absolute left-2 top-2 flex flex-wrap items-center gap-1.5">
        <span className="rounded-md bg-bg-base/80 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-white backdrop-blur-md">
          Priya S.
        </span>
        <span className="inline-flex items-center gap-1 rounded-md bg-brand-green/15 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-brand-green backdrop-blur-md">
          <ShieldCheck className="h-2.5 w-2.5" />
          ID ✓
        </span>
      </div>

      {/* Bottom-right: proctoring pill */}
      <div className="absolute bottom-2 right-2 inline-flex items-center gap-1.5 rounded-md border border-brand-indigo/30 bg-bg-base/80 px-1.5 py-0.5 backdrop-blur-md">
        <ScanLine className="h-2.5 w-2.5 text-brand-indigo" />
        <span className="font-mono text-[9px] uppercase tracking-wider text-brand-indigo-soft">
          Proctoring
        </span>
      </div>
    </div>
  );
}

function FaceDetectionFrame() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: [0.95, 1, 0.97, 1] }}
      transition={{
        opacity: { duration: 0.4 },
        scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
      }}
      className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-20 -translate-x-1/2 -translate-y-1/2 sm:h-28 sm:w-24"
      aria-hidden
    >
      {/* 4 corner brackets */}
      <span className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-brand-indigo" />
      <span className="absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-brand-indigo" />
      <span className="absolute left-0 bottom-0 h-3 w-3 border-l-2 border-b-2 border-brand-indigo" />
      <span className="absolute right-0 bottom-0 h-3 w-3 border-r-2 border-b-2 border-brand-indigo" />
    </motion.div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* AI Interviewer card — animated avatar + current question                    */
/* ───────────────────────────────────────────────────────────────────────── */

function AIInterviewerCard() {
  return (
    <div className="relative rounded-xl border border-brand-indigo/20 bg-brand-indigo/5 p-3 sm:p-4">
      {/* Header: AI Interviewer pill + Q3/8 progress */}
      <div className="flex items-center justify-between gap-2">
        <div className="inline-flex items-center gap-1.5">
          <motion.span
            aria-hidden
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-brand-indigo"
          />
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-brand-indigo-soft">
            Asking · Q3 of 8
          </span>
        </div>
        <span className="font-mono text-[9px] uppercase tracking-wider text-text-faint">
          0:42
        </span>
      </div>

      {/* Question text */}
      <p className="mt-2.5 text-[12px] leading-snug text-white sm:text-[13px]">
        &ldquo;Walk me through how you&apos;d design a rate limiter for a
        public API that handles 10K req/sec.&rdquo;
      </p>

      {/* Footer: badges (auto-generated, JD-anchored) */}
      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <span className="inline-flex items-center gap-1 rounded-md border border-brand-indigo/20 bg-brand-indigo/[0.08] px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-brand-indigo">
          <Sparkles className="h-2.5 w-2.5" />
          Auto-generated
        </span>
        <span className="rounded-md border border-white/10 bg-white/[0.02] px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-text-secondary">
          JD: Backend Eng
        </span>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Live transcription panel — diarized speaker bubbles, autoscroll feel        */
/* ───────────────────────────────────────────────────────────────────────── */

const TRANSCRIPT_LINES = [
  {
    speaker: "AI",
    role: "interviewer",
    text: "How would you handle backpressure when downstream services slow down?",
  },
  {
    speaker: "Priya",
    role: "candidate",
    text: "I'd start with a token-bucket on the gateway, then…",
  },
  {
    speaker: "Priya",
    role: "candidate",
    text: "…queue overflow goes to a dead-letter, alerted on threshold.",
  },
  {
    speaker: "AI",
    role: "interviewer",
    text: "Good. What about idempotency on retries?",
  },
];

function LiveTranscriptPanel() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-white/10 bg-bg-base/60 p-3 sm:p-4">
      {/* Panel header */}
      <div className="flex items-center justify-between border-b border-white/5 pb-2">
        <div className="inline-flex items-center gap-1.5">
          <Mic className="h-3 w-3 text-brand-indigo" />
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white">
            Live Transcript
          </span>
        </div>
        <span className="inline-flex items-center gap-1 rounded-md bg-brand-indigo/10 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-brand-indigo-soft">
          <Languages className="h-2.5 w-2.5" />
          EN-IN
        </span>
      </div>

      {/* Scrolling transcript area */}
      <div className="mt-3 flex flex-1 flex-col gap-2 overflow-hidden">
        {TRANSCRIPT_LINES.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: i * 0.4 }}
            className="flex items-start gap-2"
          >
            {/* Speaker label pill */}
            <span
              className={
                line.role === "interviewer"
                  ? "shrink-0 rounded-md border border-brand-indigo/30 bg-brand-indigo/10 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-brand-indigo"
                  : "shrink-0 rounded-md border border-brand-green/30 bg-brand-green/10 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-brand-green"
              }
            >
              {line.speaker}
            </span>
            {/* Line text */}
            <p
              className={
                line.role === "interviewer"
                  ? "min-w-0 flex-1 text-[11px] leading-snug text-text-secondary sm:text-xs"
                  : "min-w-0 flex-1 text-[11px] leading-snug text-white sm:text-xs"
              }
            >
              {line.text}
            </p>
          </motion.div>
        ))}

        {/* Typing indicator (current speaker still talking) */}
        <div className="mt-1 flex items-center gap-2">
          <span className="rounded-md border border-brand-green/30 bg-brand-green/10 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-brand-green">
            Priya
          </span>
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                aria-hidden
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
                className="h-1 w-1 rounded-full bg-brand-green"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Scoring panel — per-question scores, current one filling in                 */
/* ───────────────────────────────────────────────────────────────────────── */

const SCORES = [
  { q: "Q1 · System design", score: 8, state: "done" as const },
  { q: "Q2 · Concurrency", score: 9, state: "done" as const },
  { q: "Q3 · Rate limiting", score: 7, state: "live" as const },
];

function ScoringPanel() {
  return (
    <div className="rounded-xl border border-white/10 bg-bg-base/60 p-3 sm:p-4">
      <div className="flex items-center justify-between border-b border-white/5 pb-2">
        <div className="inline-flex items-center gap-1.5">
          <Activity className="h-3 w-3 text-brand-indigo" />
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white">
            AI Score
          </span>
        </div>
        <span className="font-mono text-[9px] uppercase tracking-wider text-text-faint">
          /10
        </span>
      </div>

      <div className="mt-3 flex flex-col gap-2.5">
        {SCORES.map((s, i) => (
          <motion.div
            key={s.q}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.12 }}
          >
            <div className="flex items-center justify-between text-[10px]">
              <span className="truncate text-text-muted">{s.q}</span>
              <span
                className={
                  s.state === "live"
                    ? "font-mono tabular-nums text-brand-indigo"
                    : "font-mono tabular-nums text-white"
                }
              >
                {s.score}
                {s.state === "live" && (
                  <span className="ml-0.5 animate-pulse text-brand-indigo">
                    _
                  </span>
                )}
              </span>
            </div>
            <div className="mt-1 h-1 overflow-hidden rounded-full bg-white/[0.05]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.score * 10}%` }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.7,
                  delay: 0.3 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={
                  s.state === "live"
                    ? "h-full rounded-full bg-gradient-to-r from-brand-indigo to-brand-blue"
                    : "h-full rounded-full bg-white/30"
                }
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Average / shortlist hint */}
      <div className="mt-3 flex items-center justify-between border-t border-white/5 pt-2.5">
        <span className="font-mono text-[9px] uppercase tracking-wider text-text-faint">
          Avg
        </span>
        <span className="font-display text-base font-semibold text-white sm:text-lg">
          8.0
          <span className="ml-1 text-[10px] font-normal text-brand-indigo">
            shortlist
          </span>
        </span>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Activity chips — small footer pills surfacing remaining capabilities        */
/* ───────────────────────────────────────────────────────────────────────── */

const CHIPS = [
  { icon: Languages, label: "Multi-lang" },
  { icon: Mic, label: "Recorded" },
  { icon: CheckCircle2, label: "Invite sent" },
  { icon: Clock, label: "Scheduled" },
] as const;

function ActivityChips() {
  return (
    <div className="rounded-xl border border-white/10 bg-bg-base/40 p-2.5 sm:p-3">
      <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-text-faint">
        Trail
      </p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {CHIPS.map((c) => {
          const Icon = c.icon;
          return (
            <span
              key={c.label}
              className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.03] px-1.5 py-1"
            >
              <Icon className="h-2.5 w-2.5 text-brand-indigo" />
              <span className="font-mono text-[9px] uppercase tracking-wider text-text-secondary">
                {c.label}
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
