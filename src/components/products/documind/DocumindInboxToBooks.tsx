"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { DOCUMIND_PIPELINE_STATIONS } from "@/content/products/documind";

/**
 * DocuMind — "From inbox to books" mid-page section.
 *
 * Concept: follow ONE invoice through DocuMind's 3-stage pipeline:
 * Captured → Validated → Posted. Each stage has a state pill, a
 * mini-mockup of the surface visible at that step, and a metric pill
 * showing how fast the step took.
 *
 * Idiom is structurally similar in count (3 stations) to a few prior
 * mid-pages but the visual treatment is distinct — these are wide
 * horizontal cards with chips, metric pills, and arrowhead glyphs in
 * the gap between stations. Tells a single document's lifecycle.
 *
 *   ┌──────────────┐  →  ┌──────────────┐  →  ┌──────────────┐
 *   │ 01 ✓ Captured│     │ 02 ● Validated│    │ 03 ✓ Posted  │
 *   │ 0.3s · per pg│     │ 1.4s · 24 fld │    │ 0.4s · auto  │
 *   │ ┌──────────┐ │     │ ┌──────────┐ │    │ ┌──────────┐ │
 *   │ │ Email-to │ │     │ │ GSTIN ✓  │ │    │ │ Tally    │ │
 *   │ │ Mobile   │ │     │ │ Vendor ✓ │ │    │ │ SAP      │ │
 *   │ │ Bulk up  │ │     │ │ Math rec │ │    │ │ Zoho     │ │
 *   │ │ Vendor   │ │     │ │ Dup chk  │ │    │ │ +others  │ │
 *   │ └──────────┘ │     │ └──────────┘ │    │ └──────────┘ │
 *   └──────────────┘     └──────────────┘    └──────────────┘
 *
 * RESPONSIVE STRATEGY:
 *   • <1024px: stacked vertically with chevron-down between stations
 *   • ≥1024px: horizontal 3-station row with arrow glyphs in the gaps
 */
export function DocumindInboxToBooks() {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 lg:py-32">
      {/* Backdrop */}
      <div className="absolute inset-0 -z-10 bg-bg-surface/40" />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-sky/[0.06] blur-3xl" />
        <div className="absolute top-1/2 right-1/4 h-[360px] w-[360px] translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-cyan/[0.06] blur-3xl" />
      </div>

      <Container>
        <SectionHeader
          kicker="The pipeline"
          title="From inbox to books — in three steps."
          lede="Drop a document into DocuMind. Watch it land in your ERP a few seconds later, validated, with a full audit trail behind it. Manual data entry replaced by exception handling — every document, every day."
        />

        <Reveal delay={0.1}>
          <div className="relative mt-14 sm:mt-16 lg:mt-20">
            {/* Mobile / tablet: vertical stack with chevron between */}
            <div className="flex flex-col gap-5 lg:hidden">
              {DOCUMIND_PIPELINE_STATIONS.map((station, i) => (
                <div key={station.n} className="relative">
                  <StationCard station={station} index={i} />
                  {i < DOCUMIND_PIPELINE_STATIONS.length - 1 && (
                    <div className="mt-5 flex justify-center">
                      <ChevronDown
                        className="h-5 w-5 text-brand-sky/50"
                        strokeWidth={2.2}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop: horizontal 3-station row with arrow glyphs */}
            <div className="relative hidden grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-5 lg:grid xl:gap-6">
              <StationCard station={DOCUMIND_PIPELINE_STATIONS[0]} index={0} />
              <ArrowGlyph index={0} />
              <StationCard station={DOCUMIND_PIPELINE_STATIONS[1]} index={1} />
              <ArrowGlyph index={1} />
              <StationCard station={DOCUMIND_PIPELINE_STATIONS[2]} index={2} />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Station card — one stage of the pipeline                                    */
/* ───────────────────────────────────────────────────────────────────────── */

function StationCard({
  station,
  index,
}: {
  station: (typeof DOCUMIND_PIPELINE_STATIONS)[number];
  index: number;
}) {
  const Icon = station.icon;
  const isLive = station.state === "live";

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
          ? "border-brand-sky/40 shadow-glow-sky"
          : "border-white/10 hover:border-brand-sky/30"
      }`}
    >
      {/* Top hairline shimmer */}
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 top-0 h-px ${
          isLive
            ? "bg-gradient-to-r from-brand-sky/0 via-brand-sky/80 to-brand-sky/0"
            : "bg-gradient-to-r from-brand-sky/0 via-brand-sky/30 to-brand-sky/0"
        }`}
      />

      {/* Header: number + state pill */}
      <div className="flex items-start justify-between gap-2">
        <span
          className={`font-display text-2xl font-semibold tabular-nums leading-none ${
            isLive ? "text-brand-sky" : "text-brand-sky/70"
          }`}
        >
          {station.n}
        </span>
        <StatePill state={station.state} />
      </div>

      {/* Icon + label kicker */}
      <div className="mt-4 flex items-center gap-3">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
            isLive
              ? "border-brand-sky/40 bg-brand-sky/15"
              : "border-white/10 bg-white/[0.03]"
          }`}
        >
          <Icon
            className={`h-4 w-4 ${
              isLive ? "text-brand-sky" : "text-brand-sky/80"
            }`}
            strokeWidth={1.7}
          />
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand-sky">
            {station.label}
          </p>
          <p className="font-mono text-[9px] tabular-nums text-text-faint">
            {station.metric}
          </p>
        </div>
      </div>

      {/* Title + body */}
      <h3 className="mt-4 font-display text-base font-semibold leading-tight tracking-tight text-white sm:text-lg">
        {station.title}
      </h3>
      <p className="mt-2 line-clamp-4 flex-1 text-[13px] leading-relaxed text-text-secondary">
        {station.body}
      </p>

      {/* Capability chips */}
      <ul className="mt-4 flex flex-wrap gap-1.5 border-t border-white/5 pt-3">
        {station.chips.map((chip) => (
          <li
            key={chip}
            className={`rounded-md border px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider ${
              isLive
                ? "border-brand-sky/30 bg-brand-sky/10 text-brand-sky-soft"
                : "border-white/10 bg-white/[0.03] text-text-secondary"
            }`}
          >
            {chip}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

function StatePill({ state }: { state: "done" | "live" | "upcoming" }) {
  if (state === "live") {
    return (
      <span className="inline-flex items-center gap-1 rounded-md border border-brand-sky/30 bg-brand-sky/15 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-white">
        <motion.span
          aria-hidden
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          className="h-1 w-1 rounded-full bg-brand-sky"
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
      Queued
    </span>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Arrow glyph — sits between stations on desktop                              */
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
      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-sky/30 bg-bg-base/60">
        <ArrowRight
          className="h-3.5 w-3.5 text-brand-sky"
          strokeWidth={2.2}
        />
      </div>
    </motion.div>
  );
}
