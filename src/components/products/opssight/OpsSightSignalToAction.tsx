"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { OPSSIGHT_RESOLUTION_STAGES } from "@/content/products/opssight";

/**
 * OpsSight — "From Signal to Action" mid-page section.
 *
 * Concept: follow ONE anomaly through 4 stages — Signal → Pattern →
 * Decision support → Action. Each stage has a state pill, an actor
 * (who/what is responsible at this step), and a timestamp metric.
 *
 * Idiom: "follow one signal through to resolution" — distinct from
 * Performix's chapter cards (which follow a rating cycle), Meetrix's
 * hub-and-spoke, Intellix's converge lines, Learnova's winding path,
 * LMS's three perspectives, E-Commerce's layered stack, Infera's
 * reports chat, and DocuMind's 3-stage pipeline. The OpsSight stages
 * are about a SIGNAL (not a document or rating) propagating through
 * the platform.
 *
 *   ┌──────────────┐ → ┌──────────────┐ → ┌──────────────┐ → ┌──────────────┐
 *   │ 01 ✓ Signal  │   │ 02 ✓ Pattern │   │ 03 ● Decision│   │ 04 ⌛ Action │
 *   │ Sensor C-04  │   │ OpsSight·AI  │   │ Mech routed  │   │ Mech resolve │
 *   │ 08:42        │   │ 08:43        │   │ 08:44        │   │ 12:30 ETA   │
 *   └──────────────┘   └──────────────┘   └──────────────┘   └──────────────┘
 *
 * RESPONSIVE STRATEGY:
 *   • <1024px:  vertical stack with chevron-down between stages
 *   • ≥1024px:  4-station horizontal row with arrow glyphs in gaps
 */
export function OpsSightSignalToAction() {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 lg:py-32">
      {/* Backdrop */}
      <div className="absolute inset-0 -z-10 bg-bg-surface/40" />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-emerald/[0.06] blur-3xl" />
        <div className="absolute top-1/2 right-1/4 h-[360px] w-[360px] translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-green/[0.06] blur-3xl" />
      </div>

      <Container>
        <SectionHeader
          kicker="Signal to action"
          title="One anomaly. Four moments. From sensor reading to resolution."
          lede="Watch what happens when a single sensor starts drifting. OpsSight catches the pattern, routes the alert with the playbook, and the system learns from the resolution — all in the time most operations would still be looking at static dashboards."
        />

        <Reveal delay={0.1}>
          <div className="relative mt-14 sm:mt-16 lg:mt-20">
            {/* Mobile / tablet: vertical stack with chevron between */}
            <div className="flex flex-col gap-5 lg:hidden">
              {OPSSIGHT_RESOLUTION_STAGES.map((stage, i) => (
                <div key={stage.n} className="relative">
                  <StageCard stage={stage} index={i} />
                  {i < OPSSIGHT_RESOLUTION_STAGES.length - 1 && (
                    <div className="mt-5 flex justify-center">
                      <ChevronDown
                        className="h-5 w-5 text-brand-emerald/50"
                        strokeWidth={2.2}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop: horizontal 4-station row with arrow glyphs */}
            <div className="relative hidden grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-stretch gap-4 lg:grid xl:gap-5">
              <StageCard stage={OPSSIGHT_RESOLUTION_STAGES[0]} index={0} />
              <ArrowGlyph index={0} />
              <StageCard stage={OPSSIGHT_RESOLUTION_STAGES[1]} index={1} />
              <ArrowGlyph index={1} />
              <StageCard stage={OPSSIGHT_RESOLUTION_STAGES[2]} index={2} />
              <ArrowGlyph index={2} />
              <StageCard stage={OPSSIGHT_RESOLUTION_STAGES[3]} index={3} />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Stage card                                                                  */
/* ───────────────────────────────────────────────────────────────────────── */

function StageCard({
  stage,
  index,
}: {
  stage: (typeof OPSSIGHT_RESOLUTION_STAGES)[number];
  index: number;
}) {
  const Icon = stage.icon;
  const isLive = stage.state === "live";
  const isUpcoming = stage.state === "upcoming";

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
      className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-bg-elevated/40 p-5 backdrop-blur-md transition-colors sm:p-6 ${
        isLive
          ? "border-brand-emerald/40 shadow-glow-emerald"
          : "border-white/10 hover:border-brand-emerald/30"
      }`}
    >
      {/* Top hairline */}
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 top-0 h-px ${
          isLive
            ? "bg-gradient-to-r from-brand-emerald/0 via-brand-emerald/80 to-brand-emerald/0"
            : "bg-gradient-to-r from-brand-emerald/0 via-brand-emerald/30 to-brand-emerald/0"
        }`}
      />

      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <span
          className={`font-display text-2xl font-semibold tabular-nums leading-none ${
            isLive ? "text-brand-emerald" : "text-brand-emerald/70"
          }`}
        >
          {stage.n}
        </span>
        <StatePill state={stage.state} />
      </div>

      {/* Icon + label */}
      <div className="mt-4 flex items-center gap-3">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
            isLive
              ? "border-brand-emerald/40 bg-brand-emerald/15"
              : "border-white/10 bg-white/[0.03]"
          }`}
        >
          <Icon
            className={`h-4 w-4 ${
              isLive ? "text-brand-emerald" : "text-brand-emerald/80"
            }`}
            strokeWidth={1.7}
          />
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand-emerald">
            {stage.label}
          </p>
          <p className="font-mono text-[9px] tabular-nums text-text-faint">
            {stage.metric}
          </p>
        </div>
      </div>

      {/* Title + body */}
      <h3 className="mt-4 font-display text-base font-semibold leading-tight tracking-tight text-white sm:text-lg">
        {stage.title}
      </h3>
      <p className={`mt-2 line-clamp-4 flex-1 text-[13px] leading-relaxed ${
        isUpcoming ? "text-text-faint" : "text-text-secondary"
      }`}>
        {stage.body}
      </p>

      {/* Actor footer */}
      <div className="mt-4 border-t border-white/5 pt-3">
        <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-text-faint">
          Actor
        </p>
        <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-white">
          {stage.actor}
        </p>
      </div>
    </motion.article>
  );
}

function StatePill({ state }: { state: "done" | "live" | "upcoming" }) {
  if (state === "live") {
    return (
      <span className="inline-flex items-center gap-1 rounded-md border border-brand-emerald/30 bg-brand-emerald/15 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-white">
        <motion.span
          aria-hidden
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          className="h-1 w-1 rounded-full bg-brand-emerald"
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
      Pending
    </span>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Arrow glyph                                                                 */
/* ───────────────────────────────────────────────────────────────────────── */

function ArrowGlyph({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: 0.4 + index * 0.18 }}
      className="flex h-full items-center justify-center"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-emerald/30 bg-bg-base/60">
        <ArrowRight
          className="h-3.5 w-3.5 text-brand-emerald"
          strokeWidth={2.2}
        />
      </div>
    </motion.div>
  );
}
