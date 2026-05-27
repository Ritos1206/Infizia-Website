"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  CircleDot,
  Edit3,
  Eye,
  Mail,
  Newspaper,
  Sparkles,
} from "lucide-react";
import {
  ENEWS_CHANNELS,
  ENEWS_PUBLISHING_QUEUE,
} from "@/content/products/enews";
import { cn } from "@/lib/utils";

/**
 * E-News — bespoke hero visual.
 *
 * Concept: "Live Newsroom" — composed editorial dashboard mockup.
 * Different from every other shipped hero: not a device frame, not a
 * document, not a transcript stream, not a feed list — it's a true
 * composed multi-pane editorial scene with a publication chrome,
 * composing article view, publishing queue sidebar, and distribution
 * channels strip.
 *
 *   ┌────────── Infizia Daily · LIVE · 09:42 IST ──────────┐
 *   │  ⬡ BREAKING · Bengal monsoon arrives early           │  ← chrome + breaking ticker
 *   ├──────────────────────────────────────┬──────────────┤
 *   │ ┌─────────────────────────────────┐  │ Publishing    │
 *   │ │ News · Climate                   │  │ queue         │
 *   │ │ Bengal monsoon arrives early...  │  │               │
 *   │ │ by Riya Mehta · Senior Editor    │  │ ART-2814 ●    │
 *   │ │                                  │  │ Live edit     │
 *   │ │ Body excerpt extends here with   │  │ ─────────────│
 *   │ │ enough content to convey the     │  │ ART-2812 ◐    │
 *   │ │ editorial weight of the story…   │  │ In review     │
 *   │ │ [hero image placeholder]         │  │ ─────────────│
 *   │ └─────────────────────────────────┘  │ ART-2811 ⏰    │
 *   │                                       │ Scheduled     │
 *   │                                       │ ─────────────│
 *   │                                       │ ART-2807 ✓    │
 *   │                                       │ Published     │
 *   ├──────────────────────────────────────┴──────────────┤
 *   │ Web · Mobile · Newsletter · Social · Push           │  ← distribution strip
 *   └──────────────────────────────────────────────────────┘
 *      ↳ floating: "12,847 reads · last hour" / "Newsletter scheduled"
 *
 * Brand accent: purple.
 *
 * RESPONSIVE STRATEGY:
 *   • <640px:  composing pane on top, queue stacked below; channels wrap
 *   • 640px+:  full split — composing 3/5 + queue 2/5 cols; channels in row
 */
export function EnewsNewsroomVisual() {
  return (
    <div className="relative isolate mx-auto w-full max-w-[560px]">
      {/* Ambient purple glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-12 -z-10 rounded-[40px] bg-brand-purple/[0.10] blur-3xl"
      />

      {/* Frame */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-bg-elevated/80 backdrop-blur-md shadow-glow-purple">
        <PublicationChrome />
        <BreakingTicker />
        <div className="grid grid-cols-1 gap-3 p-3 sm:grid-cols-5 sm:gap-3 sm:p-3.5">
          <div className="sm:col-span-3">
            <ComposingArticle />
          </div>
          <div className="sm:col-span-2">
            <PublishingQueue />
          </div>
        </div>
        <ChannelsStrip />
      </div>

      {/* Floating "12,847 reads · last hour" — top-left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: -10, y: -6 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute -top-3 -left-3 hidden items-center gap-1.5 rounded-full border border-brand-purple/40 bg-bg-base/90 px-2.5 py-1.5 backdrop-blur-md sm:inline-flex"
      >
        <Eye className="h-3 w-3 text-brand-purple" />
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-purple-soft">
          12,847 reads · 1 hr
        </span>
      </motion.div>

      {/* Floating "Newsletter scheduled" — top-right (lg+) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 10, y: -6 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="absolute -top-3 right-3 hidden items-center gap-1.5 rounded-full border border-brand-purple/40 bg-bg-base/90 px-2.5 py-1.5 backdrop-blur-md lg:inline-flex"
      >
        <Mail className="h-3 w-3 text-brand-purple" />
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-purple-soft">
          Newsletter · 06:00
        </span>
      </motion.div>

      {/* Floating "+128 subscribers · today" — bottom-right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.55 }}
        className="absolute -bottom-3 right-4 hidden items-center gap-1.5 rounded-full border border-brand-fuchsia/40 bg-bg-base/90 px-2.5 py-1.5 backdrop-blur-md sm:inline-flex"
      >
        <Sparkles className="h-3 w-3 text-brand-fuchsia" />
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-fuchsia-soft">
          +128 subs · today
        </span>
      </motion.div>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Publication chrome — top bar with publication name + LIVE pill + time      */
/* ───────────────────────────────────────────────────────────────────────── */

function PublicationChrome() {
  return (
    <div className="flex items-center justify-between border-b border-white/5 px-3 py-2.5 sm:px-4">
      <div className="flex items-center gap-2">
        <Newspaper className="h-3 w-3 text-brand-purple" />
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white">
          Infizia Daily
        </span>
        <span className="hidden font-mono text-[9px] uppercase tracking-wider text-text-faint sm:inline">
          · newsroom
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="hidden font-mono text-[9px] tabular-nums text-text-faint sm:inline">
          09:42 IST
        </span>
        <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-purple/30 bg-brand-purple/10 px-2 py-0.5">
          <motion.span
            aria-hidden
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.4, repeat: Infinity }}
            className="h-1 w-1 rounded-full bg-brand-purple"
          />
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-brand-purple-soft">
            Live
          </span>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Breaking ticker — slim breaking-news bar                                    */
/* ───────────────────────────────────────────────────────────────────────── */

function BreakingTicker() {
  return (
    <div className="flex items-center gap-2 border-b border-white/5 bg-gradient-to-r from-brand-purple/[0.05] via-brand-purple/[0.10] to-brand-purple/[0.05] px-3 py-1.5 sm:px-4">
      <span className="inline-flex items-center gap-1 rounded border border-brand-purple/30 bg-brand-purple/15 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-brand-purple-soft">
        <CircleDot className="h-2 w-2" strokeWidth={2.5} />
        Breaking
      </span>
      <p className="truncate font-mono text-[10px] tracking-wider text-white">
        Bengal monsoon arrives early; agriculture braces for impact
      </p>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Composing article — left pane, the editor's view                            */
/* ───────────────────────────────────────────────────────────────────────── */

function ComposingArticle() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-bg-base/60 p-3 sm:p-3.5">
      {/* Section + state */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-brand-purple">
          News · Climate
        </span>
        <span className="inline-flex items-center gap-1 rounded border border-brand-purple/25 bg-brand-purple/10 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-brand-purple-soft">
          <Edit3 className="h-2 w-2" strokeWidth={2.4} />
          Drafting
        </span>
      </div>

      {/* Headline */}
      <h3 className="mt-2 font-display text-[14px] font-semibold leading-tight tracking-tight text-white sm:text-[15px]">
        Bengal monsoon arrives early; agriculture braces for impact
      </h3>

      {/* Byline */}
      <p className="mt-1.5 font-mono text-[8px] uppercase tracking-wider text-text-faint">
        by Riya Mehta · Senior Editor · 09:42 IST
      </p>

      {/* Body excerpt — typing cursor at end */}
      <div className="mt-2.5 space-y-1.5">
        <div className="h-1 w-full rounded bg-white/[0.06]" />
        <div className="h-1 w-[92%] rounded bg-white/[0.06]" />
        <div className="h-1 w-[86%] rounded bg-white/[0.06]" />
        <div className="flex items-center gap-1">
          <div className="h-1 w-[72%] rounded bg-white/[0.06]" />
          <motion.span
            aria-hidden
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.1, repeat: Infinity }}
            className="inline-block h-2.5 w-[2px] rounded-sm bg-brand-purple"
          />
        </div>
      </div>

      {/* Hero image placeholder — gradient block */}
      <div className="mt-3 h-14 overflow-hidden rounded-lg bg-gradient-to-br from-brand-purple/[0.18] via-brand-violet/[0.10] to-brand-fuchsia/[0.08]">
        <div className="flex h-full items-end justify-end p-2">
          <span className="font-mono text-[7px] uppercase tracking-wider text-text-faint">
            hero · 1600×900
          </span>
        </div>
      </div>

      {/* Tags row */}
      <div className="mt-2.5 flex flex-wrap gap-1">
        {["climate", "agriculture", "bengal"].map((t) => (
          <span
            key={t}
            className="rounded border border-white/10 bg-white/[0.03] px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-text-secondary"
          >
            #{t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Publishing queue — right pane, 4 articles in different states               */
/* ───────────────────────────────────────────────────────────────────────── */

function PublishingQueue() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-bg-base/60">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/5 px-3 py-2">
        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white">
          Publishing queue
        </span>
        <span className="font-mono text-[8px] uppercase tracking-wider text-text-faint">
          {ENEWS_PUBLISHING_QUEUE.length}
        </span>
      </div>

      {/* Queue items */}
      <ul className="divide-y divide-white/5">
        {ENEWS_PUBLISHING_QUEUE.map((article, i) => (
          <QueueItem key={article.id} article={article} index={i} />
        ))}
      </ul>
    </div>
  );
}

function QueueItem({
  article,
  index,
}: {
  article: (typeof ENEWS_PUBLISHING_QUEUE)[number];
  index: number;
}) {
  const Icon = article.metricIcon;
  const dotClass =
    article.state === "live"
      ? "bg-brand-purple animate-pulse"
      : article.state === "review"
        ? "bg-brand-amber"
        : article.state === "scheduled"
          ? "bg-brand-cyan"
          : "bg-brand-green";

  return (
    <motion.li
      initial={{ opacity: 0, x: 8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
      className="px-3 py-2"
    >
      <div className="flex items-center gap-1.5">
        <span className={cn("h-1.5 w-1.5 shrink-0 rounded-full", dotClass)} />
        <span className="font-mono text-[8px] uppercase tracking-wider text-text-faint">
          {article.id}
        </span>
        <span className="ml-auto font-mono text-[8px] uppercase tracking-wider text-brand-purple-soft">
          {article.stateLabel}
        </span>
      </div>
      <p className="mt-1 line-clamp-2 font-display text-[10px] font-medium leading-tight text-white sm:text-[11px]">
        {article.headline}
      </p>
      <div className="mt-1 flex items-center justify-between font-mono text-[8px] tracking-wider text-text-faint">
        <span className="truncate">{article.author}</span>
        <span className="ml-2 inline-flex items-center gap-0.5">
          <Icon className="h-2.5 w-2.5" />
          {article.metric}
        </span>
      </div>
    </motion.li>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Channels strip — bottom of frame                                            */
/* ───────────────────────────────────────────────────────────────────────── */

function ChannelsStrip() {
  return (
    <div className="border-t border-white/5 bg-gradient-to-r from-brand-purple/[0.04] via-brand-purple/[0.06] to-brand-purple/[0.04] px-3 py-2.5 sm:px-4">
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-text-faint">
          Distribute to
        </span>
        <span className="inline-flex items-center gap-1 font-mono text-[8px] uppercase tracking-wider text-brand-purple">
          <CheckCircle2 className="h-2.5 w-2.5" />
          Auto
        </span>
      </div>
      <ul className="mt-1.5 flex flex-wrap gap-1.5 sm:gap-2">
        {ENEWS_CHANNELS.map(({ icon: Icon, label }) => (
          <li
            key={label}
            className="inline-flex items-center gap-1 rounded border border-white/10 bg-white/[0.03] px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-text-secondary"
          >
            <Icon className="h-2.5 w-2.5 text-brand-purple" />
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}
