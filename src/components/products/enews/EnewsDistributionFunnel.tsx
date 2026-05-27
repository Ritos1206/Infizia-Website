"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import {
  ENEWS_FUNNEL_ARTICLE,
  ENEWS_FUNNEL_CHANNELS,
  ENEWS_FUNNEL_METRICS,
} from "@/content/products/enews";

/**
 * E-News — "From One Story to Every Reader" mid-page section.
 *
 * Concept: a TOP-DOWN distribution funnel that follows ONE article from
 * a single editorial moment out to every distribution channel and back
 * into reader engagement metrics. Three layers stacked vertically:
 *
 *   ▼  Top    — single article card (headline · byline · published-at)
 *   ▼  Middle — fans out into 4 channels (Web · Mobile · Newsletter ·
 *                Social) each with one stat
 *   ▼  Bottom — aggregates back into 4 reader-engagement metrics
 *                (reads · comments · shares · new subscribers)
 *
 * Vertical funnel idiom — not used by any prior shipped mid-page:
 *   • Performix: chapter-style cycle (4 horizontal stages)
 *   • Meetrix: hub-and-spoke (centre + 6 outputs)
 *   • Intellix: 5-tools-to-1 converging lines (before/after)
 *   • Learnova: winding 4-station path (horizontal)
 *   • LMS: side-by-side 3-persona mini-mockups
 *   • E-Commerce: vertical 5-layer architectural stack
 *   • Infera: split layout — reports archive + chat
 *   • DocuMind: 3-stage horizontal pipeline
 *   • OpsSight: 4-stage horizontal flow
 *   • E-News: vertical fan-out funnel (top → middle → bottom)
 *
 * RESPONSIVE STRATEGY:
 *   • <640px:  channels collapse to 2-col grid; metrics 2-col; SVG
 *              connector simplified
 *   • 640px+:  channels in 4-col row, metrics in 4-col row, animated
 *              SVG fan-out connecting article → channels
 */
export function EnewsDistributionFunnel() {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 lg:py-32">
      {/* Backdrop */}
      <div className="absolute inset-0 -z-10 bg-bg-surface/40" />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-brand-purple/[0.06] blur-3xl" />
        <div className="absolute bottom-1/4 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-brand-fuchsia/[0.05] blur-3xl" />
      </div>

      <Container>
        <SectionHeader
          kicker="From one story to every reader"
          title="One article. Four channels. Every metric — back in the same dashboard."
          lede="Watch what happens when an editor hits publish. The story fans out across web, mobile, newsletter, and social — each formatted appropriately. And every read, share, comment, and new subscriber flows back into the editorial dashboard so the team always knows what's working."
        />

        <Reveal delay={0.1}>
          <div className="relative mx-auto mt-14 max-w-4xl sm:mt-16">
            <ArticleCard />
            <FanOutSpacer />
            <ChannelsRow />
            <ToMetricsSpacer />
            <MetricsRow />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Article card — top of funnel                                                */
/* ───────────────────────────────────────────────────────────────────────── */

function ArticleCard() {
  const a = ENEWS_FUNNEL_ARTICLE;
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto max-w-2xl overflow-hidden rounded-2xl border border-brand-purple/40 bg-bg-elevated/40 p-5 backdrop-blur-md shadow-glow-purple sm:p-6"
    >
      {/* Top hairline shimmer */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brand-purple/0 via-brand-purple/80 to-brand-purple/0"
      />

      {/* Section + Published pill */}
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand-purple">
          {a.section}
        </span>
        <span className="inline-flex items-center gap-1 rounded-md border border-brand-purple/30 bg-brand-purple/15 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-white">
          <CheckCircle2 className="h-2.5 w-2.5 text-brand-purple" strokeWidth={2.4} />
          Published
        </span>
      </div>

      {/* Headline */}
      <h3 className="mt-3 font-display text-lg font-semibold leading-tight tracking-tight text-white sm:text-xl">
        {a.headline}
      </h3>

      {/* Byline */}
      <p className="mt-1.5 font-mono text-[10px] uppercase tracking-wider text-text-faint">
        {a.byline}
      </p>

      {/* Footer — published-at + send icon */}
      <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3">
        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-text-faint">
          {a.publishedAt}
        </span>
        <span className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-brand-purple">
          <Send className="h-2.5 w-2.5" />
          Distributing
        </span>
      </div>
    </motion.article>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Fan-out spacer — animated SVG connector article → channels                  */
/* ───────────────────────────────────────────────────────────────────────── */

function FanOutSpacer() {
  return (
    <div className="relative h-14 sm:h-20" aria-hidden>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 800 80"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="enews-funnel-grad"
            x1="0.5"
            y1="0"
            x2="0.5"
            y2="1"
          >
            <stop offset="0%" stopColor="rgba(192,132,252,0.85)" />
            <stop offset="100%" stopColor="rgba(192,132,252,0.10)" />
          </linearGradient>
        </defs>
        {/* 4 lines fanning from centre-top to 4 channel positions */}
        {[100, 300, 500, 700].map((toX, i) => (
          <motion.line
            key={i}
            x1={400}
            y1={0}
            x2={toX}
            y2={80}
            stroke="url(#enews-funnel-grad)"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.7,
              delay: 0.4 + i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}
      </svg>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Channels row — 4 channel cards                                              */
/* ───────────────────────────────────────────────────────────────────────── */

function ChannelsRow() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
      {ENEWS_FUNNEL_CHANNELS.map((channel, i) => (
        <ChannelCard key={channel.label} channel={channel} index={i} />
      ))}
    </div>
  );
}

function ChannelCard({
  channel,
  index,
}: {
  channel: (typeof ENEWS_FUNNEL_CHANNELS)[number];
  index: number;
}) {
  const Icon = channel.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.45,
        delay: 0.7 + index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-bg-elevated/40 p-3 backdrop-blur-md transition-colors hover:border-brand-purple/30 sm:p-4"
    >
      {/* Top hairline shimmer on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brand-purple/0 via-brand-purple/40 to-brand-purple/0 transition-opacity group-hover:via-brand-purple/80"
      />

      {/* Icon */}
      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand-purple/30 bg-brand-purple/10">
        <Icon className="h-4 w-4 text-brand-purple" strokeWidth={1.7} />
      </div>

      {/* Label + body */}
      <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-purple">
        {channel.label}
      </p>
      <p className="mt-1 line-clamp-3 flex-1 text-[11px] leading-relaxed text-text-secondary">
        {channel.body}
      </p>

      {/* Stat pill */}
      <span className="mt-3 inline-flex items-center self-start rounded border border-brand-purple/25 bg-brand-purple/[0.08] px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-brand-purple-soft">
        {channel.stat}
      </span>
    </motion.div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* To-metrics spacer — animated SVG connector channels → metrics aggregate     */
/* ───────────────────────────────────────────────────────────────────────── */

function ToMetricsSpacer() {
  return (
    <div className="relative h-14 sm:h-20" aria-hidden>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 800 80"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="enews-aggregate-grad"
            x1="0.5"
            y1="0"
            x2="0.5"
            y2="1"
          >
            <stop offset="0%" stopColor="rgba(232,121,249,0.10)" />
            <stop offset="100%" stopColor="rgba(232,121,249,0.85)" />
          </linearGradient>
        </defs>
        {/* 4 lines aggregating from 4 channel positions to a single point */}
        {[100, 300, 500, 700].map((fromX, i) => (
          <motion.line
            key={i}
            x1={fromX}
            y1={0}
            x2={400}
            y2={80}
            stroke="url(#enews-aggregate-grad)"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.7,
              delay: 1.1 + i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}
        {/* Pulse at the convergence point */}
        <motion.circle
          cx={400}
          cy={80}
          r={4}
          fill="rgba(232,121,249,0.85)"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, delay: 1.45 }}
        />
      </svg>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Metrics row — engagement aggregated back into the editorial dashboard       */
/* ───────────────────────────────────────────────────────────────────────── */

function MetricsRow() {
  return (
    <div className="grid grid-cols-2 gap-3 rounded-2xl border border-brand-fuchsia/30 bg-gradient-to-br from-brand-fuchsia/[0.08] via-brand-purple/[0.05] to-transparent p-3 backdrop-blur-md sm:grid-cols-4 sm:gap-4 sm:p-5">
      {ENEWS_FUNNEL_METRICS.map((m, i) => (
        <MetricTile key={m.label} metric={m} index={i} />
      ))}
    </div>
  );
}

function MetricTile({
  metric,
  index,
}: {
  metric: (typeof ENEWS_FUNNEL_METRICS)[number];
  index: number;
}) {
  const Icon = metric.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.45,
        delay: 1.5 + index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="rounded-xl border border-white/10 bg-bg-base/40 p-3 sm:p-4"
    >
      <div className="flex items-center gap-1.5">
        <Icon className="h-3 w-3 text-brand-fuchsia" strokeWidth={2} />
        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-text-faint">
          {metric.label}
        </span>
      </div>
      <p className="mt-1 font-display text-xl font-semibold tabular-nums tracking-tight text-white sm:text-2xl">
        {metric.value}
      </p>
    </motion.div>
  );
}
