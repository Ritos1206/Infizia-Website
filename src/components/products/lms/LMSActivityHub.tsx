"use client";

import { motion } from "framer-motion";
import { Building2, Sparkles, Users } from "lucide-react";
import { LMS_ACTIVITY_FEED } from "@/content/products/lms";
import { cn } from "@/lib/utils";

/**
 * LMS — bespoke hero visual.
 *
 * Concept: "Institutional Activity Hub" — show the LMS as a live
 * institutional dashboard with multiple simultaneous activities running
 * in parallel. Visualises the platform's institutional scale + multi-
 * modal nature at a glance, in a way none of the prior product heroes do.
 *
 *   ┌────────────── LMS · Stanford Online Academy ──────────────┐
 *   │  ⬡ 1,247 active learners · 84 live courses · ● live       │
 *   ├──────────────────────────────────────────────────────────┤
 *   │  10:24  ▶ Algebra 102 · Live class      78 attending  ●  │
 *   │  11:08  ✓ Chemistry quiz · auto-graded  32 subs       ✓  │
 *   │  11:12  🏆 Certificate · Sarah J.        Python BC     ✓  │
 *   │  11:15  💬 Forum · 12 new replies        Calculus     ●  │
 *   │  11:18  ⬇ Offline sync · 3 modules      Linear Alg   ✓  │
 *   │  11:21  ✨ Recommendation · 247 learners Path updated ✓  │
 *   ├──────────────────────────────────────────────────────────┤
 *   │  Live now: 142 sessions · 1,847 quizzes graded today     │
 *   └──────────────────────────────────────────────────────────┘
 *
 * Brand accent: orange (`text-brand-orange`, `bg-brand-orange/X` …).
 *
 * Idiom is distinct from every prior hero:
 *   • EyeCON phone mockup, VitaCare booking calendar, EyePOS POS counter
 *     are device-frame mockups
 *   • Convenor resume + Performix dashboard + Meetrix transcript +
 *     Intellix split-pane are single-purpose visualizations
 *   • Learnova is a centered hero with topic→course materialization
 *   • LMS is an institutional activity feed with multi-event ticker
 *
 * RESPONSIVE STRATEGY (iPhone SE 375 → Nest Hub Max 1280):
 *   • <640px:  feed shows 4 activity rows (truncated meta), tighter
 *              padding, footer stat strip wraps
 *   • 640–1023: full 6-row feed, looser padding
 *   • ≥1024px: same as tablet but brighter glow + larger row spacing
 */
export function LMSActivityHub() {
  return (
    <div className="relative isolate mx-auto w-full max-w-[560px]">
      {/* Ambient orange + amber glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-12 -z-10 rounded-[40px] bg-brand-orange/[0.10] blur-3xl"
      />

      {/* Frame */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-bg-elevated/80 backdrop-blur-md shadow-glow-orange">
        <ChromeBar />
        <StatStrip />
        <ActivityFeed />
        <FooterStrip />
      </div>

      {/* Floating "Live · 142 sessions" callout — bottom-right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute -bottom-3 right-4 hidden items-center gap-1.5 rounded-full border border-brand-orange/40 bg-bg-base/90 px-2.5 py-1.5 backdrop-blur-md sm:inline-flex"
      >
        <motion.span
          aria-hidden
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          className="h-1.5 w-1.5 rounded-full bg-brand-orange"
        />
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-orange-soft">
          142 live sessions
        </span>
      </motion.div>

      {/* Floating "1,847 quizzes graded" — top-left edge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: -10, y: -6 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="absolute -top-3 -left-3 hidden items-center gap-1.5 rounded-full border border-brand-amber/40 bg-bg-base/90 px-2.5 py-1.5 backdrop-blur-md lg:inline-flex"
      >
        <Sparkles className="h-3 w-3 text-brand-amber" />
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-amber-soft">
          1,847 quizzes
        </span>
      </motion.div>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Chrome bar — institution name + LIVE pill                                   */
/* ───────────────────────────────────────────────────────────────────────── */

function ChromeBar() {
  return (
    <div className="flex items-center justify-between border-b border-white/5 px-3 py-2.5 sm:px-4">
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2 items-center justify-center">
          <span className="absolute h-2 w-2 animate-ping rounded-full bg-brand-orange/60" />
          <span className="relative h-1.5 w-1.5 rounded-full bg-brand-orange" />
        </span>
        <Building2 className="h-3 w-3 text-brand-orange" />
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white">
          LMS · Acme Online Academy
        </span>
      </div>
      <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-2 py-0.5">
        <motion.span
          aria-hidden
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          className="h-1 w-1 rounded-full bg-brand-orange"
        />
        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-brand-orange-soft">
          Live
        </span>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Stat strip — institution stats row                                          */
/* ───────────────────────────────────────────────────────────────────────── */

function StatStrip() {
  return (
    <div className="grid grid-cols-3 divide-x divide-white/5 border-b border-white/5">
      <Stat label="Active learners" value="1,247" icon={Users} />
      <Stat label="Live courses" value="84" />
      <Stat label="This week" value="326 certs" />
    </div>
  );
}

function Stat({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon?: typeof Users;
}) {
  return (
    <div className="flex flex-col gap-0.5 px-3 py-2.5 sm:px-3.5">
      <div className="flex items-center gap-1">
        {Icon && <Icon className="h-2.5 w-2.5 text-brand-orange" />}
        <span className="font-mono text-[8px] uppercase tracking-wider text-text-faint">
          {label}
        </span>
      </div>
      <p className="font-display text-[13px] font-semibold tabular-nums text-white sm:text-sm">
        {value}
      </p>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Activity feed — list of simultaneous events                                 */
/* ───────────────────────────────────────────────────────────────────────── */

function ActivityFeed() {
  return (
    <div className="divide-y divide-white/5">
      {LMS_ACTIVITY_FEED.map((event, i) => (
        <ActivityRow key={event.timestamp} event={event} index={i} />
      ))}
    </div>
  );
}

function ActivityRow({
  event,
  index,
}: {
  event: (typeof LMS_ACTIVITY_FEED)[number];
  index: number;
}) {
  const Icon = event.icon;
  const isLive = event.statusTone === "live";

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.45,
        delay: 0.4 + index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex items-center gap-2.5 px-3 py-2 sm:px-3.5 sm:py-2.5"
    >
      {/* Timestamp */}
      <span className="hidden w-9 shrink-0 font-mono text-[9px] tabular-nums text-text-faint sm:inline-block">
        {event.timestamp}
      </span>

      {/* Icon */}
      <div
        className={cn(
          "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border",
          isLive
            ? "border-brand-orange/40 bg-brand-orange/15"
            : "border-white/10 bg-white/[0.03]",
        )}
      >
        <Icon
          className={cn(
            "h-3.5 w-3.5",
            isLive ? "text-brand-orange" : "text-text-secondary",
          )}
          strokeWidth={1.7}
        />
      </div>

      {/* Title + meta */}
      <div className="min-w-0 flex-1">
        <p className="truncate font-display text-[12px] font-medium text-white sm:text-[13px]">
          {event.title}
        </p>
        <p className="truncate font-mono text-[8px] uppercase tracking-wider text-text-faint">
          {event.meta}
        </p>
      </div>

      {/* Status pill */}
      <span
        className={cn(
          "inline-flex shrink-0 items-center gap-1 rounded-md border px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider",
          isLive
            ? "border-brand-orange/30 bg-brand-orange/10 text-brand-orange"
            : "border-brand-green/25 bg-brand-green/10 text-brand-green",
        )}
      >
        {isLive && (
          <motion.span
            aria-hidden
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.4, repeat: Infinity }}
            className="h-1 w-1 rounded-full bg-brand-orange"
          />
        )}
        {event.status}
      </span>
    </motion.div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Footer strip — engagement progress bar                                      */
/* ───────────────────────────────────────────────────────────────────────── */

function FooterStrip() {
  return (
    <div className="border-t border-white/5 bg-gradient-to-r from-brand-orange/[0.04] via-brand-orange/[0.06] to-brand-orange/[0.04] px-3 py-2.5 sm:px-4">
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white">
          Engagement · today
        </span>
        <span className="font-display text-[11px] font-semibold tabular-nums text-white sm:text-xs">
          94
          <span className="ml-0.5 font-mono text-[8px] font-normal uppercase tracking-wider text-text-muted">
            %
          </span>
        </span>
      </div>
      <div className="mt-1.5 flex h-1 overflow-hidden rounded-full bg-white/[0.05]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "94%" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 1.2,
            delay: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-full rounded-full bg-gradient-to-r from-brand-orange via-brand-amber to-brand-orange"
        />
      </div>
    </div>
  );
}
