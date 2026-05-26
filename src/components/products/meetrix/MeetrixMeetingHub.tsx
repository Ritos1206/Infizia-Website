"use client";

import { motion } from "framer-motion";
import {
  CheckSquare,
  FileText,
  Languages,
  Mail,
  MessageCircle,
  Mic,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Meetrix — "What One Meeting Becomes" infographic.
 *
 * Sits between Features and Use Cases. Hub-and-spoke visual:
 *   • Centre — a single meeting card (the "input")
 *   • Spokes — 6 outputs that come out of one Meetrix capture
 *
 * Visually distinct from the live transcript hero:
 *   • Hero = a single live moment (transcript streaming in)
 *   • This = a *systems* view of everything that one meeting becomes
 *
 * RESPONSIVE STRATEGY:
 *   • <768px:   Centre card on top, 2-col grid of 6 output cards below
 *   • 768–1023: Centre card on top, 3-col grid of 6 output cards below
 *   • ≥1024px:  True hub-and-spoke — centre card middle, 6 cards
 *               positioned around it with connector lines (3 left, 3 right)
 */
export function MeetrixMeetingHub() {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 lg:py-32">
      {/* Tinted backdrop with violet wash */}
      <div className="absolute inset-0 -z-10 bg-bg-surface/40" />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-violet/[0.08] blur-3xl" />
      </div>

      <Container>
        <SectionHeader
          kicker="One input · six outputs"
          title="What one meeting becomes."
          lede="Record once. Meetrix turns the same thirty minutes of audio into six different things — every one of them ready to share, search, or act on."
        />

        {/* ── Layout 1: Mobile + tablet (stacked) ────────────────────── */}
        <div className="lg:hidden">
          <Reveal delay={0.05}>
            <div className="mt-12 sm:mt-14">
              <CentreMeetingCard />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
              {OUTPUTS.map((o, i) => (
                <OutputCard key={o.title} output={o} index={i} />
              ))}
            </div>
          </Reveal>
        </div>

        {/* ── Layout 2: Desktop (true hub-and-spoke) ─────────────────── */}
        <div className="relative mt-14 hidden lg:block">
          <SpokeLines />

          <div className="grid grid-cols-12 items-center gap-6">
            {/* Left column — 3 outputs stacked */}
            <div className="col-span-4 flex flex-col gap-4">
              {OUTPUTS.slice(0, 3).map((o, i) => (
                <OutputCard
                  key={o.title}
                  output={o}
                  index={i}
                  align="right"
                />
              ))}
            </div>

            {/* Centre column — meeting card */}
            <div className="col-span-4">
              <Reveal delay={0.15}>
                <CentreMeetingCard />
              </Reveal>
            </div>

            {/* Right column — 3 outputs stacked */}
            <div className="col-span-4 flex flex-col gap-4">
              {OUTPUTS.slice(3, 6).map((o, i) => (
                <OutputCard
                  key={o.title}
                  output={o}
                  index={i + 3}
                  align="left"
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Centre meeting card — the "input"                                            */
/* ───────────────────────────────────────────────────────────────────────── */

function CentreMeetingCard() {
  return (
    <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border border-brand-violet/30 bg-bg-elevated/80 p-5 backdrop-blur-md shadow-glow-violet sm:p-6">
      {/* Pulsing violet glow */}
      <div className="pointer-events-none absolute -inset-2 -z-10 rounded-3xl bg-brand-violet/[0.10] blur-2xl" />

      {/* Recording state */}
      <div className="flex items-center gap-2">
        <span className="flex h-2 w-2 items-center justify-center">
          <span className="absolute h-2 w-2 animate-ping rounded-full bg-red-500/60" />
          <span className="relative h-1.5 w-1.5 rounded-full bg-red-500" />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white">
          Recording · 32 min
        </span>
      </div>

      <div className="mt-4 flex items-start gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand-violet/30 bg-brand-violet/15 text-brand-violet">
          <Mic className="h-5 w-5" strokeWidth={1.7} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-display text-lg font-semibold text-white">
            Q3 strategy sync
          </p>
          <p className="mt-0.5 text-xs text-text-muted">
            4 speakers · code-mixed EN-IN/HI · in progress
          </p>
        </div>
      </div>

      {/* Mini waveform */}
      <div className="mt-4 flex h-8 items-end gap-0.5">
        {Array.from({ length: 32 }, (_, i) => {
          const h = 20 + ((i * 7919) % 70);
          return (
            <motion.span
              key={i}
              animate={{
                scaleY: [0.5, 1, 0.6, 1.1, 0.7],
              }}
              transition={{
                duration: 1.6 + (i % 4) * 0.2,
                repeat: Infinity,
                delay: i * 0.04,
                ease: "easeInOut",
              }}
              style={{ height: `${h}%` }}
              className="w-[3px] origin-bottom rounded-sm bg-brand-violet/60"
            />
          );
        })}
      </div>

      <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-brand-violet">
        Becomes →
      </p>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Output card — one of the 6 spokes                                            */
/* ───────────────────────────────────────────────────────────────────────── */

type Output = {
  icon: LucideIcon;
  title: string;
  body: string;
  meta: string;
};

const OUTPUTS: Output[] = [
  {
    icon: FileText,
    title: "Diarized transcript",
    body: "Every line tagged with speaker + timestamp. Color-coded bubbles in the UI.",
    meta: "Speaker by speaker",
  },
  {
    icon: Sparkles,
    title: "AI summary + decisions",
    body: "Generated in seconds — section cards covering decisions, blockers, and outcomes.",
    meta: "Generated in seconds",
  },
  {
    icon: CheckSquare,
    title: "Action items + owners",
    body: "Extracted automatically with owner + due date. Ready to drop into a tracker.",
    meta: "3 items typical",
  },
  {
    icon: Mail,
    title: "Follow-up email",
    body: "One-tap subject + body draft pulled straight from the meeting analysis.",
    meta: "One-tap send",
  },
  {
    icon: Languages,
    title: "18-language translation",
    body: "Per-entry translation keeps speaker segregation intact across all 18 supported languages.",
    meta: "Speaker-preserved",
  },
  {
    icon: MessageCircle,
    title: "Chat with the meeting",
    body: "Ask anything — every answer cites a timestamp from the actual conversation. Works for long meetings and short.",
    meta: "Cited timestamps",
  },
];

function OutputCard({
  output,
  index,
  align = "left",
}: {
  output: Output;
  index: number;
  align?: "left" | "right";
}) {
  const Icon = output.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.4,
        delay: 0.2 + index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-bg-elevated/60 p-3.5 backdrop-blur-md transition-colors hover:border-brand-violet/40 sm:p-4 ${align === "right" ? "lg:text-right" : ""}`}
    >
      {/* Soft hover glow */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-violet/[0.10] blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />

      <div
        className={`relative flex items-start gap-3 ${align === "right" ? "lg:flex-row-reverse" : ""}`}
      >
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-brand-violet/30 bg-brand-violet/10 text-brand-violet">
          <Icon className="h-4 w-4" strokeWidth={1.7} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-display text-sm font-semibold text-white">
            {output.title}
          </p>
          <p className="mt-1 text-[11px] leading-snug text-text-muted sm:text-xs">
            {output.body}
          </p>
          <p
            className={`mt-2 inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.03] px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-text-secondary ${align === "right" ? "lg:flex-row-reverse" : ""}`}
          >
            {output.meta}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Spoke connector lines — desktop only                                         */
/* ───────────────────────────────────────────────────────────────────────── */

function SpokeLines() {
  // Decorative SVG layer beneath the cards on lg+. Rough sketch:
  // diagonal lines from the centre card to each of the 6 output cards.
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1000 600"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="spoke-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(167,139,250,0.4)" />
          <stop offset="100%" stopColor="rgba(167,139,250,0)" />
        </linearGradient>
        <linearGradient id="spoke-grad-rev" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0%" stopColor="rgba(167,139,250,0.4)" />
          <stop offset="100%" stopColor="rgba(167,139,250,0)" />
        </linearGradient>
      </defs>

      {/* Left side — 3 lines from centre to each left card */}
      <g stroke="url(#spoke-grad-rev)" strokeWidth="1" fill="none">
        <motion.line
          x1="500"
          y1="300"
          x2="200"
          y2="100"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.4 }}
        />
        <motion.line
          x1="500"
          y1="300"
          x2="180"
          y2="300"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.5 }}
        />
        <motion.line
          x1="500"
          y1="300"
          x2="200"
          y2="500"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.6 }}
        />
      </g>

      {/* Right side — 3 lines from centre to each right card */}
      <g stroke="url(#spoke-grad)" strokeWidth="1" fill="none">
        <motion.line
          x1="500"
          y1="300"
          x2="800"
          y2="100"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.7 }}
        />
        <motion.line
          x1="500"
          y1="300"
          x2="820"
          y2="300"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.8 }}
        />
        <motion.line
          x1="500"
          y1="300"
          x2="800"
          y2="500"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.9 }}
        />
      </g>
    </svg>
  );
}
