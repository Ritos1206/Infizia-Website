"use client";

import { motion } from "framer-motion";
import { CheckCircle2, FileText, Sparkles, TrendingUp } from "lucide-react";

/**
 * Convenor — bespoke hero visual.
 *
 * Concept: AI-driven resume extraction overlay (the alternative to a hiring
 * pipeline slider — D-34 picked the alternative idiom for visual diversity
 * across products).
 *
 * What it shows:
 *  - A faux-resume document on the left (3:4 portrait card)
 *  - Indigo scan-line that sweeps top → bottom continuously
 *  - 4 skill chips that "extract" from the document (offset-fly to the right
 *    side) with JD-match percentages — one of Convenor's flagship features
 *  - Right-side structured-data panel: match score donut, extracted counts
 *    (skills / experience / education), and a "best-match" callout
 *  - Pulsing "Analyzing…" badge in the document header
 *
 * Distinct from EyeCON (phone), VitaCare (calendar), EyePOS (counter):
 * this is a document-as-hero, not a device-frame mockup.
 *
 * Indigo accent throughout (brand-indigo / -soft / /20 etc.).
 */
export function ConvenorResumeVisual() {
  return (
    <div className="relative isolate mx-auto w-full max-w-[520px]">
      {/* Ambient indigo glow behind the whole composition */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-12 -z-10 rounded-[40px] bg-brand-indigo/[0.08] blur-3xl"
      />

      <div className="grid grid-cols-12 gap-3">
        {/* ── Resume document (left, taller) ──────────────────────────── */}
        <div className="relative col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-bg-elevated/80 backdrop-blur-md shadow-glow-indigo"
          >
            {/* Document chrome */}
            <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
              <div className="flex items-center gap-2">
                <FileText className="h-3.5 w-3.5 text-brand-indigo" />
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
                  resume.pdf
                </span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full border border-brand-indigo/30 bg-brand-indigo/10 px-2 py-0.5">
                <motion.span
                  aria-hidden
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                  className="h-1.5 w-1.5 rounded-full bg-brand-indigo"
                />
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-brand-indigo">
                  Analyzing
                </span>
              </div>
            </div>

            {/* Document body — fake resume layout */}
            <div className="relative px-5 py-5">
              {/* Top: name + role + meta */}
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 shrink-0 rounded-full bg-gradient-to-br from-brand-indigo to-brand-blue" />
                <div className="min-w-0 flex-1">
                  <p className="font-display text-sm font-semibold text-white">
                    Priya Sharma
                  </p>
                  <p className="mt-0.5 text-[11px] text-text-muted">
                    Senior Backend Engineer · 6 yrs
                  </p>
                </div>
              </div>

              {/* Section: Skills (highlighted — these get "extracted") */}
              <DocSection label="SKILLS" delay={0.0}>
                <div className="flex flex-wrap gap-1.5">
                  {["Node.js", "Python", "AWS", "PostgreSQL", "Kubernetes"].map(
                    (s) => (
                      <span
                        key={s}
                        className="rounded-md border border-brand-indigo/20 bg-brand-indigo/5 px-1.5 py-0.5 text-[9px] text-text-secondary"
                      >
                        {s}
                      </span>
                    ),
                  )}
                </div>
              </DocSection>

              {/* Section: Experience (line bars to suggest paragraphs) */}
              <DocSection label="EXPERIENCE" delay={0.1}>
                <Bar w="92%" />
                <Bar w="78%" />
                <Bar w="86%" />
                <Bar w="60%" />
              </DocSection>

              {/* Section: Education */}
              <DocSection label="EDUCATION" delay={0.2}>
                <Bar w="70%" />
                <Bar w="48%" />
              </DocSection>

              {/* Section: Projects */}
              <DocSection label="PROJECTS" delay={0.3}>
                <Bar w="84%" />
                <Bar w="66%" />
              </DocSection>

              {/* The scan-line overlay — sweeps top to bottom continuously */}
              <motion.div
                aria-hidden
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: [0, 320], opacity: [0, 1, 0] }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-transparent via-brand-indigo/20 to-transparent"
                style={{
                  boxShadow: "0 0 24px 4px rgba(129, 140, 248, 0.3)",
                }}
              />
            </div>
          </motion.div>

          {/* Floating "JD match" badge anchored to the doc bottom-left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="absolute -bottom-3 -left-3 flex items-center gap-2 rounded-full border border-brand-indigo/40 bg-bg-base/90 px-2.5 py-1.5 backdrop-blur-md"
          >
            <Sparkles className="h-3 w-3 text-brand-indigo" />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-indigo-soft">
              JD match
            </span>
            <span className="font-display text-xs font-semibold text-white">
              87%
            </span>
          </motion.div>
        </div>

        {/* ── Right side: extracted skill chips + structured data panel ─── */}
        <div className="relative col-span-5 flex flex-col gap-3">
          {/* Skill chips — staggered fly-in from left, suggesting extraction */}
          <div className="flex flex-col gap-1.5">
            <ExtractedChip name="Node.js" match={94} delay={0.5} />
            <ExtractedChip name="AWS" match={91} delay={0.65} />
            <ExtractedChip name="Python" match={88} delay={0.8} />
            <ExtractedChip name="Kubernetes" match={82} delay={0.95} />
          </div>

          {/* Structured data panel */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.4 }}
            className="rounded-xl border border-white/10 bg-bg-surface/80 p-3 backdrop-blur-md"
          >
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-text-faint">
              Extracted
            </p>

            {/* Donut score */}
            <div className="mt-2.5 flex items-center gap-3">
              <ScoreDonut value={87} />
              <div className="min-w-0">
                <p className="font-display text-2xl font-semibold leading-none text-white">
                  87
                  <span className="ml-0.5 text-sm text-text-muted">/100</span>
                </p>
                <p className="mt-1 text-[10px] text-brand-indigo">
                  Strong match
                </p>
              </div>
            </div>

            {/* Counts */}
            <div className="mt-3 grid grid-cols-3 gap-1.5 text-center">
              <Count value="12" label="Skills" />
              <Count value="6 yr" label="Exp." />
              <Count value="M.Tech" label="Edu." />
            </div>

            {/* Best-match callout */}
            <div className="mt-3 flex items-start gap-2 rounded-lg border border-brand-indigo/20 bg-brand-indigo/5 p-2.5">
              <TrendingUp className="h-3.5 w-3.5 shrink-0 text-brand-indigo" />
              <div className="min-w-0">
                <p className="text-[10px] font-medium text-white">
                  Top strength
                </p>
                <p className="text-[10px] leading-snug text-text-muted">
                  Backend systems · Cloud infra
                </p>
              </div>
            </div>
          </motion.div>

          {/* Footer pill — "Shortlisted" decision marker */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 1.1 }}
            className="flex items-center gap-1.5 rounded-full border border-brand-green/30 bg-brand-green/10 px-2.5 py-1.5"
          >
            <CheckCircle2 className="h-3 w-3 text-brand-green" />
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-brand-green">
              Shortlisted
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */

function DocSection({
  label,
  children,
  delay = 0,
}: {
  label: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.35 + delay }}
      className="mt-3.5"
    >
      <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-text-faint">
        {label}
      </p>
      <div className="mt-1.5 flex flex-col gap-1.5">{children}</div>
    </motion.div>
  );
}

function Bar({ w }: { w: string }) {
  return (
    <div className="h-1.5 rounded-full bg-white/[0.04]">
      <div className="h-full rounded-full bg-white/10" style={{ width: w }} />
    </div>
  );
}

function ExtractedChip({
  name,
  match,
  delay,
}: {
  name: string;
  match: number;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center justify-between gap-2 rounded-lg border border-brand-indigo/30 bg-brand-indigo/[0.08] px-2 py-1.5"
    >
      <span className="truncate text-[10px] font-medium text-white">{name}</span>
      <span className="shrink-0 font-mono text-[9px] tabular-nums text-brand-indigo-soft">
        {match}%
      </span>
    </motion.div>
  );
}

function ScoreDonut({ value }: { value: number }) {
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const dash = (value / 100) * circumference;
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      className="shrink-0"
      aria-hidden
    >
      <circle
        cx="24"
        cy="24"
        r={radius}
        fill="none"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="3.5"
      />
      <motion.circle
        cx="24"
        cy="24"
        r={radius}
        fill="none"
        stroke="var(--color-brand-indigo)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: circumference - dash }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        transform="rotate(-90 24 24)"
      />
    </svg>
  );
}

function Count({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.02] py-1.5">
      <p className="font-display text-xs font-semibold text-white">{value}</p>
      <p className="mt-0.5 font-mono text-[8px] uppercase tracking-wider text-text-faint">
        {label}
      </p>
    </div>
  );
}
