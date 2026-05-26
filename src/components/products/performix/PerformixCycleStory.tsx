"use client";

import { motion } from "framer-motion";
import {
  ChevronDown,
  ClipboardCheck,
  Star,
  UserCheck,
  UserRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Performix — "The Assessment Journey" story section.
 *
 * Clean redesign — every element has its own clear space, no overlaps:
 *
 *   • State chip lives top-right of card — alone on its row.
 *   • Below it: a header row with one square icon block on the left and
 *     a stacked label ("STOP 01" kicker / "YOU" name) right next to it.
 *     The icon and the number/name labels are in different visual
 *     containers so nothing crowds anything.
 *   • Divider, then title, body, footer — same structure across all
 *     four cards so they line up perfectly.
 *   • Vertical amber accent bar on left edge (state-aware).
 *
 * Between cards: clean line+arrowhead glyph (desktop) / soft chevron
 * (mobile) — sits in the gap, not on top of the cards.
 */
export function PerformixCycleStory() {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 lg:py-32">
      {/* Tinted backdrop with amber wash */}
      <div className="absolute inset-0 -z-10 bg-bg-surface/40" />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-amber/[0.06] blur-3xl" />
      </div>

      <Container>
        <SectionHeader
          kicker="The assessment journey"
          title="From your self-rating to a signed-off score, in four stops."
          lede="Here's what one Performix assessment actually looks like as it moves through the system — every comment, rating, and decision that lands on the file. No spreadsheet. No back-and-forth email."
        />

        <Reveal delay={0.1}>
          <div className="relative mt-12 sm:mt-14 lg:mt-16">
            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-[1fr_auto_1fr] sm:gap-x-3 sm:gap-y-6 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:gap-x-3">
              {STATIONS.map((station, i) => (
                <JourneyFragment
                  key={station.title}
                  station={station}
                  index={i}
                  isLast={i === STATIONS.length - 1}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */

type Station = {
  number: number;
  role: string;
  icon: LucideIcon;
  title: string;
  body: string;
  rating: string;
  metaLabel: string;
  state: "done" | "live" | "computed";
  meta: string;
};

const STATIONS: Station[] = [
  {
    number: 1,
    role: "You",
    icon: UserRound,
    title: "Self-assessment submitted",
    body: "Q3 — System reliability initiatives. Rolled out the new alerting framework; cut on-call pages 38% YoY and standardized incident runbooks across the platform team.",
    rating: "4.0",
    metaLabel: "Self rating",
    state: "done",
    meta: "Day 1",
  },
  {
    number: 2,
    role: "Manager",
    icon: UserCheck,
    title: "Manager review approved",
    body: "Strong execution and follow-through. Took ownership well beyond scope on Q3 incident response and lifted the team's runbook quality measurably.",
    rating: "4.0",
    metaLabel: "Manager rating",
    state: "done",
    meta: "Day 7",
  },
  {
    number: 3,
    role: "Reviewer",
    icon: ClipboardCheck,
    title: "Reviewer signing off",
    body: "Reliability impact lands across product lines. Promotion-ready signal. Recommend stretch into platform-wide oversight in Q4 with a small platform team.",
    rating: "4.5",
    metaLabel: "Reviewer rating",
    state: "live",
    meta: "Day 12 · in progress",
  },
  {
    number: 4,
    role: "Final",
    icon: Star,
    title: "Score + 2 peer nominations",
    body: "Compensation-ready. Avg 4.2 across all dimensions. Peer nominations from Karan + Ananya for incident-response leadership during Q3.",
    rating: "4.2",
    metaLabel: "Final score",
    state: "computed",
    meta: "Day 14 · final",
  },
];

const STATE_CHIPS = {
  done: {
    label: "Done",
    classes: "border-brand-amber/30 bg-brand-amber/10 text-brand-amber",
  },
  live: {
    label: "Live",
    classes: "border-brand-amber bg-brand-amber/30 text-white",
  },
  computed: {
    label: "Computed",
    classes: "border-white/15 bg-white/[0.04] text-text-secondary",
  },
} as const;

function JourneyFragment({
  station,
  index,
  isLast,
}: {
  station: Station;
  index: number;
  isLast: boolean;
}) {
  return (
    <>
      <StationCard station={station} index={index} />
      {!isLast && <JourneyArrow index={index} />}
    </>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Station card — clean, no overlapping elements                              */
/* ───────────────────────────────────────────────────────────────────────── */

function StationCard({
  station,
  index,
}: {
  station: Station;
  index: number;
}) {
  const Icon = station.icon;
  const stateChip = STATE_CHIPS[station.state];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.45,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative h-full"
    >
      <div
        className={
          station.state === "live"
            ? "relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand-amber/40 bg-gradient-to-br from-brand-amber/[0.08] to-transparent backdrop-blur-md shadow-glow-amber"
            : station.state === "done"
              ? "relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-bg-elevated to-bg-surface/80 backdrop-blur-md transition-colors hover:border-brand-amber/30"
              : "relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-bg-elevated/60 to-bg-base/60 backdrop-blur-md"
        }
      >
        {/* Left vertical accent bar */}
        <AccentBar state={station.state} />

        {/* Top hairline shimmer for live state */}
        {station.state === "live" && (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brand-amber/0 via-brand-amber/80 to-brand-amber/0"
          />
        )}

        {/* Card content (offset right of the accent bar) */}
        <div className="flex h-full flex-col px-5 py-5 pl-6 sm:px-6 sm:py-6 sm:pl-7">
          {/* Row 1: state chip alone, top-right */}
          <div className="flex justify-end">
            <span
              className={`inline-flex items-center gap-1 rounded-md border px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider ${stateChip.classes}`}
            >
              {station.state === "live" && (
                <motion.span
                  aria-hidden
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.4, repeat: Infinity }}
                  className="h-1 w-1 rounded-full bg-brand-amber"
                />
              )}
              {stateChip.label}
            </span>
          </div>

          {/* Row 2: icon block (left) + label stack (right of it).
              The icon is the ONLY thing inside its own block — no number
              competing with it. The number lives as text in the kicker
              alongside the role name. Clean separation, zero overlap. */}
          <div className="mt-3 flex items-center gap-3">
            <IconBlock state={station.state} Icon={Icon} />
            <div className="min-w-0">
              <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-brand-amber">
                Stop {String(station.number).padStart(2, "0")}
              </p>
              <p className="mt-0.5 font-display text-base font-semibold tracking-tight text-white sm:text-lg">
                {station.role}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-4 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

          {/* Title */}
          <h3 className="font-display text-base font-semibold leading-snug tracking-tight text-white sm:text-[17px]">
            {station.title}
          </h3>

          {/* Body — quote-style, fixed clamp so all 4 cards align */}
          <p className="mt-3 line-clamp-4 flex-1 text-[12px] leading-relaxed text-text-muted sm:text-[13px]">
            <span className="text-brand-amber/80">&ldquo;</span>
            {station.body}
            <span className="text-brand-amber/80">&rdquo;</span>
          </p>

          {/* Footer divider + meta + rating */}
          <div className="mt-4 flex items-end justify-between border-t border-white/5 pt-3">
            <div className="min-w-0">
              <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-text-faint">
                {station.metaLabel}
              </p>
              <p className="mt-0.5 truncate font-mono text-[9px] uppercase tracking-wider text-text-muted">
                {station.meta}
              </p>
            </div>
            <div className="flex items-baseline gap-0.5">
              <span className="font-display text-2xl font-semibold tabular-nums text-white sm:text-[28px]">
                {station.rating}
              </span>
              <span className="font-mono text-[10px] text-text-muted">/5</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Vertical accent bar on the left edge                                        */
/* ───────────────────────────────────────────────────────────────────────── */

function AccentBar({ state }: { state: Station["state"] }) {
  return (
    <span
      aria-hidden
      className="absolute inset-y-0 left-0 w-[3px] overflow-hidden rounded-full"
    >
      <span
        className={
          state === "live"
            ? "block h-full w-full bg-gradient-to-b from-brand-amber via-brand-amber/80 to-brand-amber"
            : state === "done"
              ? "block h-full w-full bg-gradient-to-b from-brand-amber/70 via-brand-amber/40 to-brand-amber/20"
              : "block h-full w-full bg-gradient-to-b from-white/30 via-white/15 to-white/5"
        }
      />
      {state === "live" && (
        <motion.span
          aria-hidden
          animate={{ y: ["-100%", "100%"] }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-x-0 -top-1/2 h-1/2 bg-gradient-to-b from-transparent via-white/60 to-transparent"
        />
      )}
    </span>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Icon block — single icon, perfectly centred. No number, no overlap.        */
/* ───────────────────────────────────────────────────────────────────────── */

function IconBlock({
  state,
  Icon,
}: {
  state: Station["state"];
  Icon: LucideIcon;
}) {
  return (
    <div
      className={
        state === "live"
          ? "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand-amber/40 bg-brand-amber/15 sm:h-12 sm:w-12"
          : state === "done"
            ? "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand-amber/25 bg-brand-amber/[0.08] sm:h-12 sm:w-12"
            : "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] sm:h-12 sm:w-12"
      }
    >
      <Icon
        className={
          state === "live" || state === "done"
            ? "h-5 w-5 text-brand-amber"
            : "h-5 w-5 text-text-secondary"
        }
        strokeWidth={1.7}
      />
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Journey arrow — between cards, in the gap, never on top                    */
/* ───────────────────────────────────────────────────────────────────────── */

function JourneyArrow({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: 0.25 + index * 0.1,
      }}
      className="flex items-center justify-center self-center"
      aria-hidden
    >
      {/* Mobile: down chevron */}
      <span className="flex items-center justify-center py-2 sm:hidden">
        <ChevronDown
          className="h-5 w-5 text-brand-amber/70"
          strokeWidth={2.4}
        />
      </span>

      {/* Tablet+: right line+arrowhead */}
      <span className="hidden h-12 items-center sm:flex">
        <RightArrowGlyph />
      </span>
    </motion.div>
  );
}

function RightArrowGlyph() {
  return (
    <svg
      width="44"
      height="14"
      viewBox="0 0 44 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="perf-arrow-grad" x1="0" y1="0.5" x2="1" y2="0.5">
          <stop offset="0%" stopColor="rgba(251,191,36,0.15)" />
          <stop offset="100%" stopColor="rgba(251,191,36,0.85)" />
        </linearGradient>
      </defs>
      <line
        x1="2"
        y1="7"
        x2="36"
        y2="7"
        stroke="url(#perf-arrow-grad)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M32 2 L40 7 L32 12"
        stroke="rgba(251,191,36,0.85)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
