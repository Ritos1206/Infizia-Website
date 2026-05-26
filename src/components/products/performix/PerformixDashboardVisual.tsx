"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Star } from "lucide-react";

/**
 * Performix — bespoke hero visual.
 *
 * Concept: Performance Review Dashboard.
 *
 *   • Centre: 5-axis radar chart with 3 overlaid polygons:
 *       - Self rating (subtle outline)
 *       - Manager rating (amber outline)
 *       - Reviewer rating (filled amber polygon — the "final" overlay)
 *   • Right column: KPI tiles + 3-tier workflow strip
 *   • Left column: rating axes legend
 *
 * Brand accent: amber (`text-brand-amber`, `bg-brand-amber/X` …).
 *
 * RESPONSIVE STRATEGY (iPhone SE 375 → Nest Hub Max 1280):
 *   • <640px:   single column, radar full-width on top, then legend +
 *               KPIs + workflow stacked below
 *   • 640–1023: 2-col layout — radar (5/8) + legend/KPIs (3/8)
 *   • ≥1024px:  same 2-col but with more breathing room
 */
export function PerformixDashboardVisual() {
  return (
    <div className="relative isolate mx-auto w-full max-w-[560px]">
      {/* Ambient amber glow behind everything */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-12 -z-10 rounded-[40px] bg-brand-amber/[0.08] blur-3xl"
      />

      {/* Dashboard frame */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-bg-elevated/80 backdrop-blur-md shadow-glow-amber">
        {/* Frame chrome: dashboard title + cycle progress chip */}
        <div className="flex items-center justify-between border-b border-white/5 px-3 py-2.5 sm:px-4">
          <div className="flex items-center gap-2">
            <Star className="h-3 w-3 text-brand-amber" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white">
              Q4 · Assessment
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-amber/30 bg-brand-amber/10 px-2 py-0.5">
            <motion.span
              aria-hidden
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="h-1.5 w-1.5 rounded-full bg-brand-amber"
            />
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-brand-amber-soft">
              In review
            </span>
          </div>
        </div>

        {/* Dashboard body */}
        <div className="grid grid-cols-1 gap-3 p-3 sm:grid-cols-8 sm:p-4">
          {/* Radar chart column */}
          <div className="sm:col-span-5">
            <RadarChart />
            {/* Legend strip */}
            <div className="mt-3 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <LegendDot label="Self" tone="white" />
              <LegendDot label="Manager" tone="amber-light" />
              <LegendDot label="Reviewer" tone="amber" />
            </div>
          </div>

          {/* Right side: KPIs + workflow */}
          <div className="flex flex-col gap-2.5 sm:col-span-3">
            <KpiTile
              icon={Star}
              label="Final score"
              value="4.2"
              suffix="/5"
              accent
            />
            <KpiTile
              icon={Clock}
              label="Reviews pending"
              value="3"
            />
            <KpiTile
              icon={CheckCircle2}
              label="Cycle progress"
              value="78%"
            />

            {/* 3-tier workflow strip */}
            <WorkflowStrip />
          </div>
        </div>
      </div>

      {/* Floating "+1 nomination" callout — anchored to the dashboard */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="absolute -bottom-3 right-4 hidden items-center gap-2 rounded-full border border-brand-amber/40 bg-bg-base/90 px-2.5 py-1.5 backdrop-blur-md sm:inline-flex"
      >
        <Star className="h-3 w-3 text-brand-amber" />
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-amber-soft">
          +2 peer nominations
        </span>
      </motion.div>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Radar chart — 5 axes, 3 overlaid polygons                                   */
/* ───────────────────────────────────────────────────────────────────────── */

const AXES = [
  "Quality",
  "Ownership",
  "Collaboration",
  "Impact",
  "Innovation",
];

// Each rating set is an array of values 0..5 in the same order as AXES.
const SELF_RATINGS = [4, 5, 4, 4, 3];
const MANAGER_RATINGS = [4, 4, 5, 4, 3];
const REVIEWER_RATINGS = [4, 4, 4, 5, 4];

function RadarChart() {
  const size = 240;
  const cx = size / 2;
  const cy = size / 2;
  const maxR = size / 2 - 22; // leave room for axis labels
  const levels = 5;

  // Polar → cartesian for axis i (0..n-1) at scale 0..1
  const point = (i: number, scale: number) => {
    const angle = (Math.PI * 2 * i) / AXES.length - Math.PI / 2;
    const r = maxR * scale;
    return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)] as const;
  };

  // Build polygon path string for an array of ratings (0..5)
  const polygonPath = (ratings: number[]) =>
    ratings
      .map((v, i) => {
        const [x, y] = point(i, v / 5);
        return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
      })
      .join(" ") + " Z";

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[240px]">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="h-full w-full"
        aria-hidden
      >
        {/* Concentric grid (5 rings) */}
        {Array.from({ length: levels }, (_, lvl) => {
          const scale = (lvl + 1) / levels;
          const pts = AXES.map((_, i) => {
            const [x, y] = point(i, scale);
            return `${x.toFixed(1)},${y.toFixed(1)}`;
          }).join(" ");
          return (
            <polygon
              key={lvl}
              points={pts}
              fill="none"
              stroke="rgba(255,255,255,0.07)"
              strokeWidth="1"
            />
          );
        })}

        {/* Axis spokes */}
        {AXES.map((_, i) => {
          const [x, y] = point(i, 1);
          return (
            <line
              key={i}
              x1={cx}
              y1={cy}
              x2={x}
              y2={y}
              stroke="rgba(255,255,255,0.07)"
              strokeWidth="1"
            />
          );
        })}

        {/* Self rating — subtle outline only */}
        <motion.path
          d={polygonPath(SELF_RATINGS)}
          fill="rgba(255,255,255,0.04)"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="1.5"
          strokeDasharray="3 3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        {/* Manager rating — amber soft */}
        <motion.path
          d={polygonPath(MANAGER_RATINGS)}
          fill="rgba(252, 211, 77, 0.08)"
          stroke="var(--color-brand-amber-soft)"
          strokeWidth="1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        />

        {/* Reviewer rating — amber filled (the "final" overlay) */}
        <motion.path
          d={polygonPath(REVIEWER_RATINGS)}
          fill="rgba(251, 191, 36, 0.22)"
          stroke="var(--color-brand-amber)"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        />

        {/* Axis labels */}
        {AXES.map((label, i) => {
          const [x, y] = point(i, 1.18);
          return (
            <text
              key={label}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontFamily="var(--font-mono)"
              fontSize="8"
              fill="rgba(255,255,255,0.6)"
              letterSpacing="0.5"
            >
              {label.toUpperCase()}
            </text>
          );
        })}
      </svg>
    </div>
  );
}

function LegendDot({
  label,
  tone,
}: {
  label: string;
  tone: "white" | "amber-light" | "amber";
}) {
  const dotClass =
    tone === "white"
      ? "border-2 border-dashed border-white/60 bg-transparent"
      : tone === "amber-light"
        ? "bg-brand-amber-soft"
        : "bg-brand-amber";
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={`h-2 w-2 rounded-full ${dotClass}`} />
      <span className="font-mono text-[9px] uppercase tracking-wider text-text-secondary">
        {label}
      </span>
    </span>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* KPI tile                                                                    */
/* ───────────────────────────────────────────────────────────────────────── */

function KpiTile({
  icon: Icon,
  label,
  value,
  suffix,
  accent = false,
}: {
  icon: typeof Star;
  label: string;
  value: string;
  suffix?: string;
  accent?: boolean;
}) {
  return (
    <div
      className={
        accent
          ? "rounded-lg border border-brand-amber/30 bg-brand-amber/[0.08] p-2.5"
          : "rounded-lg border border-white/10 bg-white/[0.02] p-2.5"
      }
    >
      <div className="flex items-center gap-1.5">
        <Icon
          className={`h-3 w-3 ${accent ? "text-brand-amber" : "text-text-faint"}`}
        />
        <span className="font-mono text-[8px] uppercase tracking-wider text-text-faint">
          {label}
        </span>
      </div>
      <p className="mt-1 flex items-baseline gap-0.5 font-display font-semibold text-white">
        <span className="text-base sm:text-lg">{value}</span>
        {suffix && (
          <span className="text-[10px] text-text-muted">{suffix}</span>
        )}
      </p>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* 3-tier workflow strip                                                        */
/* ───────────────────────────────────────────────────────────────────────── */

const WORKFLOW = [
  { label: "You", state: "done" as const },
  { label: "Mgr", state: "done" as const },
  { label: "Reviewer", state: "live" as const },
];

function WorkflowStrip() {
  return (
    <div className="rounded-lg border border-white/10 bg-bg-base/40 p-2.5">
      <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-text-faint">
        Workflow
      </p>
      <div className="mt-1.5 flex items-center gap-1">
        {WORKFLOW.map((w, i) => (
          <div
            key={w.label}
            className="flex flex-1 items-center gap-1"
          >
            <span
              className={
                w.state === "done"
                  ? "flex h-5 min-w-5 items-center justify-center rounded-md border border-brand-amber/30 bg-brand-amber/15 px-1 font-mono text-[9px] text-brand-amber"
                  : w.state === "live"
                    ? "flex h-5 min-w-5 items-center justify-center rounded-md border border-brand-amber bg-brand-amber/30 px-1 font-mono text-[9px] text-white"
                    : "flex h-5 min-w-5 items-center justify-center rounded-md border border-white/10 bg-white/[0.02] px-1 font-mono text-[9px] text-text-faint"
              }
            >
              {w.label}
            </span>
            {i < WORKFLOW.length - 1 && (
              <ArrowRight className="h-2.5 w-2.5 shrink-0 text-text-faint" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
