"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { LEARNOVA_JOURNEY_PHASES } from "@/content/products/learnova";
import { cn } from "@/lib/utils";

/**
 * Learnova — "The Learning Path" mid-page section.
 *
 * Concept: a winding journey from a single topic (Day 1) to mastery
 * (Day 14+). Four milestone stations along an animated SVG path:
 *   01 · Generate  — topic in, course out
 *   02 · Practice  — auto-generated MCQs + live quizzes
 *   03 · Resolve   — doubt-solving + summaries (LIVE — pulsing accent)
 *   04 · Master    — mock tests + adaptive feedback
 *
 * Visually distinct from:
 *   • Performix's chapter-style cards (rigid horizontal blocks with
 *     line+arrowhead between cards)
 *   • Meetrix's hub-and-spoke (centre + 6 radiating outputs)
 *   • Intellix's 5-tools-to-1 (left stack converging to right card)
 *
 * RESPONSIVE STRATEGY:
 *   • <1024px:  vertical stack — 4 station cards top-to-bottom, soft
 *               chevron-down between each. No SVG path (would lose
 *               its winding shape on mobile).
 *   • ≥1024px:  4-station horizontal layout with a winding SVG path
 *               sweeping across the section, station markers pinned
 *               at the right points along the curve, animated dashed
 *               progress filling left-to-right as section scrolls in.
 */
export function LearnovaLearningPath() {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 lg:py-32">
      {/* Backdrop */}
      <div className="absolute inset-0 -z-10 bg-bg-surface/40" />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-fuchsia/[0.06] blur-3xl" />
        <div className="absolute top-1/2 right-1/4 h-[360px] w-[360px] translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-violet/[0.06] blur-3xl" />
      </div>

      <Container>
        <SectionHeader
          kicker="The learning path"
          title="From a single topic to measurable mastery — in four stops."
          lede="Type a topic. Practice on the questions Learnova builds for you. Resolve doubts and revise with AI summaries. Take mock tests that simulate the real exam — and watch your path adapt as you go."
        />

        <Reveal delay={0.1}>
          <div className="relative mt-14 sm:mt-16 lg:mt-20">
            {/* Mobile / tablet: vertical stack with chevron between stops */}
            <div className="flex flex-col gap-5 lg:hidden">
              {LEARNOVA_JOURNEY_PHASES.map((phase, i) => (
                <div key={phase.n} className="relative">
                  <StationCard phase={phase} index={i} />
                  {i < LEARNOVA_JOURNEY_PHASES.length - 1 && (
                    <div className="mt-5 flex justify-center">
                      <ChevronDown
                        className="h-5 w-5 text-brand-fuchsia/50"
                        strokeWidth={2.2}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop: winding SVG path with 4 stations along it */}
            <div className="relative hidden lg:block">
              {/* Winding path SVG — sits behind the cards */}
              <WindingPath />

              {/* Station cards in 4-col grid, alternating top/bottom for the
                  winding effect. Stops 1 + 3 sit on top half, 2 + 4 on
                  bottom half — gives the visual path its zig-zag flow. */}
              <div className="relative grid grid-cols-4 gap-6 xl:gap-8">
                {LEARNOVA_JOURNEY_PHASES.map((phase, i) => (
                  <div
                    key={phase.n}
                    className={cn(
                      "relative",
                      i % 2 === 0 ? "self-start" : "mt-44 self-end",
                    )}
                  >
                    <StationCard phase={phase} index={i} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Station card — one of the four stops along the path                        */
/* ───────────────────────────────────────────────────────────────────────── */

function StationCard({
  phase,
  index,
}: {
  phase: (typeof LEARNOVA_JOURNEY_PHASES)[number];
  index: number;
}) {
  const Icon = phase.icon;
  const isLive = phase.state === "live";
  const isUpcoming = phase.state === "upcoming";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.55,
        delay: 0.15 + index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border bg-bg-elevated/40 p-5 backdrop-blur-md transition-colors sm:p-6",
        isLive
          ? "border-brand-fuchsia/40 shadow-glow-fuchsia"
          : "border-white/10 hover:border-brand-fuchsia/30",
      )}
    >
      {/* Top hairline shimmer */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-px",
          isLive
            ? "bg-gradient-to-r from-brand-fuchsia/0 via-brand-fuchsia/80 to-brand-fuchsia/0"
            : "bg-gradient-to-r from-brand-fuchsia/0 via-brand-fuchsia/30 to-brand-fuchsia/0",
        )}
      />

      {/* Header — icon + state pill */}
      <div className="flex items-start justify-between gap-3">
        <div
          className={cn(
            "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-colors",
            isLive
              ? "border-brand-fuchsia/40 bg-brand-fuchsia/15"
              : "border-white/10 bg-white/[0.03]",
          )}
        >
          <Icon
            className={cn(
              "h-5 w-5 transition-colors",
              isLive ? "text-brand-fuchsia" : "text-brand-fuchsia/80",
            )}
            strokeWidth={1.7}
          />
        </div>

        <StatePill state={phase.state} />
      </div>

      {/* Number + label kicker */}
      <div className="mt-4 flex items-baseline gap-2.5">
        <span className="font-display text-2xl font-semibold tabular-nums text-brand-fuchsia/90">
          {phase.n}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-faint">
          {phase.day}
        </span>
      </div>

      {/* Phase label */}
      <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-fuchsia">
        {phase.label}
      </p>

      {/* Title + body */}
      <h3 className="mt-3 font-display text-lg font-semibold leading-tight tracking-tight text-white">
        {phase.title}
      </h3>
      <p className="mt-2 line-clamp-4 text-[13px] leading-relaxed text-text-secondary">
        {phase.body}
      </p>

      {/* Activities pills */}
      <ul className="mt-4 flex flex-wrap gap-1.5 border-t border-white/5 pt-4">
        {phase.activities.map((activity) => (
          <li
            key={activity}
            className={cn(
              "rounded-md border px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider",
              isLive
                ? "border-brand-fuchsia/30 bg-brand-fuchsia/10 text-brand-fuchsia-soft"
                : isUpcoming
                  ? "border-white/10 bg-white/[0.03] text-text-faint"
                  : "border-white/10 bg-white/[0.04] text-text-secondary",
            )}
          >
            {activity}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* State pill — Done / Live / Upcoming                                         */
/* ───────────────────────────────────────────────────────────────────────── */

function StatePill({
  state,
}: {
  state: "done" | "live" | "upcoming";
}) {
  if (state === "live") {
    return (
      <span className="inline-flex items-center gap-1 rounded-md border border-brand-fuchsia/30 bg-brand-fuchsia/15 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-white">
        <motion.span
          aria-hidden
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          className="h-1 w-1 rounded-full bg-brand-fuchsia"
        />
        Live
      </span>
    );
  }
  if (state === "done") {
    return (
      <span className="inline-flex items-center rounded-md border border-brand-green/25 bg-brand-green/10 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-brand-green">
        Done
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-md border border-white/10 bg-white/[0.03] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-text-faint">
      Upcoming
    </span>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Winding path SVG — desktop only                                             */
/*                                                                             */
/* Renders behind the 4-station grid. Card layout puts station 1 + 3 at the    */
/* top of the row and station 2 + 4 at the bottom (offset via mt-44).          */
/* The path traces from station 1 (top-left) → station 2 (bottom-mid-left)     */
/* → station 3 (top-mid-right) → station 4 (bottom-right), giving a clear      */
/* winding/zig-zag flow that matches the staggered card layout.                */
/* ───────────────────────────────────────────────────────────────────────── */

function WindingPath() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1200 480"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="learnova-path-grad" x1="0" y1="0.5" x2="1" y2="0.5">
          <stop offset="0%" stopColor="rgba(232,121,249,0.0)" />
          <stop offset="15%" stopColor="rgba(232,121,249,0.5)" />
          <stop offset="50%" stopColor="rgba(232,121,249,0.85)" />
          <stop offset="85%" stopColor="rgba(167,139,250,0.5)" />
          <stop offset="100%" stopColor="rgba(167,139,250,0.0)" />
        </linearGradient>
      </defs>

      {/* Faint background path (full visible always, very low opacity) */}
      <path
        d="M 150 90 C 280 90, 280 380, 450 380 C 600 380, 600 90, 750 90 C 900 90, 900 380, 1050 380"
        stroke="rgba(232,121,249,0.10)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Animated dashed path that fills in on viewport-enter */}
      <motion.path
        d="M 150 90 C 280 90, 280 380, 450 380 C 600 380, 600 90, 750 90 C 900 90, 900 380, 1050 380"
        stroke="url(#learnova-path-grad)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        strokeDasharray="4 6"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      />

      {/* Station dots — 4 small fuchsia circles where each station sits */}
      {[
        { x: 150, y: 90 },
        { x: 450, y: 380 },
        { x: 750, y: 90 },
        { x: 1050, y: 380 },
      ].map((pos, i) => (
        <motion.circle
          key={i}
          cx={pos.x}
          cy={pos.y}
          r={5}
          fill={i === 2 ? "rgb(232,121,249)" : "rgba(232,121,249,0.7)"}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.4,
            delay: 0.5 + i * 0.25,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Animated pulse ring around the LIVE station (station 3, top-right) */}
      <motion.circle
        cx={750}
        cy={90}
        r={5}
        fill="none"
        stroke="rgb(232,121,249)"
        strokeWidth="1.5"
        animate={{ r: [5, 18, 5], opacity: [0.7, 0, 0.7] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />
    </svg>
  );
}
