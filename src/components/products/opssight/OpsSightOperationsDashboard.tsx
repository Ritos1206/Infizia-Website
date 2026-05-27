"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowUpRight,
  Building2,
  Eye,
  ShieldCheck,
} from "lucide-react";
import {
  OPSSIGHT_ACTIVE_ANOMALY,
  OPSSIGHT_SENSOR_PANELS,
  OPSSIGHT_SITE_ZONES,
} from "@/content/products/opssight";
import { cn } from "@/lib/utils";

/**
 * OpsSight — bespoke hero visual.
 *
 * Concept: "Live Operations Dashboard" — an industrial control-room
 * mockup with three layers stacked together:
 *   1. Site map row — 6 zones with status dots (ok / watch / alert)
 *   2. Sensor panels grid — 4 micro-charts with sparklines + value
 *   3. Active anomaly card — Asset C-04, bearing failure pattern,
 *      cross-sensor correlation + recommended action
 *
 * Idiom: industrial-monitoring control-room — completely distinct from
 * every other shipped hero (no device-frame mockup, no document-extraction,
 * no transcript stream, no storefront, no activity feed). Spatial site
 * map + sparkline data + alert card is unique to OpsSight.
 *
 * Brand accent: emerald.
 *
 * RESPONSIVE STRATEGY:
 *   • <640px:  zones row scrolls horizontally; sensor panels become 2-col;
 *              floating chips hidden
 *   • 640px+:  full layout; floating chips visible
 */
export function OpsSightOperationsDashboard() {
  return (
    <div className="relative isolate mx-auto w-full max-w-[560px]">
      {/* Ambient emerald glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-12 -z-10 rounded-[40px] bg-brand-emerald/[0.10] blur-3xl"
      />

      {/* Frame */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-bg-elevated/80 backdrop-blur-md shadow-glow-emerald">
        <ChromeBar />
        <SiteZonesRow />
        <SensorPanelsGrid />
        <ActiveAnomalyCard />
      </div>

      {/* Floating "247 sensors live" — top-left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: -10, y: -6 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute -top-3 -left-3 hidden items-center gap-1.5 rounded-full border border-brand-emerald/40 bg-bg-base/90 px-2.5 py-1.5 backdrop-blur-md sm:inline-flex"
      >
        <Eye className="h-3 w-3 text-brand-emerald" />
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-emerald-soft">
          247 sensors live
        </span>
      </motion.div>

      {/* Floating "Compliance ready" — top-right (lg+) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 10, y: -6 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="absolute -top-3 right-3 hidden items-center gap-1.5 rounded-full border border-brand-emerald/40 bg-bg-base/90 px-2.5 py-1.5 backdrop-blur-md lg:inline-flex"
      >
        <ShieldCheck className="h-3 w-3 text-brand-emerald" />
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-emerald-soft">
          Compliance · auto
        </span>
      </motion.div>

      {/* Floating "0 critical · 12 hrs" — bottom-right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.55 }}
        className="absolute -bottom-3 right-4 hidden items-center gap-1.5 rounded-full border border-brand-green/40 bg-bg-base/90 px-2.5 py-1.5 backdrop-blur-md sm:inline-flex"
      >
        <ShieldCheck className="h-3 w-3 text-brand-green" />
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-green-soft">
          0 critical · 12 hrs
        </span>
      </motion.div>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Chrome bar                                                                  */
/* ───────────────────────────────────────────────────────────────────────── */

function ChromeBar() {
  return (
    <div className="flex items-center justify-between border-b border-white/5 px-3 py-2.5 sm:px-4">
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2 items-center justify-center">
          <span className="absolute h-2 w-2 animate-ping rounded-full bg-brand-emerald/60" />
          <span className="relative h-1.5 w-1.5 rounded-full bg-brand-emerald" />
        </span>
        <Building2 className="h-3 w-3 text-brand-emerald" />
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white">
          OpsSight · Site North
        </span>
      </div>
      <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-emerald/30 bg-brand-emerald/10 px-2 py-0.5">
        <motion.span
          aria-hidden
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          className="h-1 w-1 rounded-full bg-brand-emerald"
        />
        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-brand-emerald-soft">
          Live
        </span>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Site zones row — 6 zones with status dots                                   */
/* ───────────────────────────────────────────────────────────────────────── */

function SiteZonesRow() {
  return (
    <div className="border-b border-white/5 px-3 py-2.5 sm:px-3.5">
      <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-text-faint">
        Site map · zones
      </p>
      <div className="mt-2 flex gap-1.5 overflow-x-auto sm:grid sm:grid-cols-6 sm:gap-1.5 sm:overflow-visible">
        {OPSSIGHT_SITE_ZONES.map((zone, i) => (
          <ZoneTile key={zone.id} zone={zone} index={i} />
        ))}
      </div>
    </div>
  );
}

function ZoneTile({
  zone,
  index,
}: {
  zone: (typeof OPSSIGHT_SITE_ZONES)[number];
  index: number;
}) {
  const dot =
    zone.status === "alert"
      ? "bg-red-400 animate-pulse"
      : zone.status === "watch"
        ? "bg-brand-amber"
        : "bg-brand-emerald";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35, delay: 0.2 + index * 0.06 }}
      className={cn(
        "flex shrink-0 items-center gap-1.5 rounded-md border px-2 py-1.5",
        zone.status === "alert"
          ? "border-red-400/40 bg-red-400/10"
          : zone.status === "watch"
            ? "border-brand-amber/30 bg-brand-amber/10"
            : "border-white/10 bg-white/[0.03]",
      )}
    >
      <span className={cn("h-1.5 w-1.5 shrink-0 rounded-full", dot)} />
      <div className="min-w-0 flex-1">
        <p className="truncate font-mono text-[8px] uppercase tracking-wider text-white">
          {zone.label}
        </p>
        <p className="truncate font-mono text-[7px] tabular-nums text-text-faint">
          {zone.id}
        </p>
      </div>
    </motion.div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Sensor panels grid — 4 micro-charts                                         */
/* ───────────────────────────────────────────────────────────────────────── */

function SensorPanelsGrid() {
  return (
    <div className="grid grid-cols-2 gap-2 p-3 sm:gap-2.5 sm:p-3.5">
      {OPSSIGHT_SENSOR_PANELS.map((panel, i) => (
        <SensorPanel key={panel.label} panel={panel} index={i} />
      ))}
    </div>
  );
}

function SensorPanel({
  panel,
  index,
}: {
  panel: (typeof OPSSIGHT_SENSOR_PANELS)[number];
  index: number;
}) {
  const Icon = panel.icon;
  const isRising = panel.trend === "rising";
  const accent = isRising ? "text-brand-amber" : "text-brand-emerald";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        delay: 0.5 + index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="overflow-hidden rounded-xl border border-white/10 bg-bg-base/60 p-2.5 sm:p-3"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Icon className={cn("h-3 w-3", accent)} />
          <span className="font-mono text-[7px] uppercase tracking-wider text-text-faint">
            {panel.unit}
          </span>
        </div>
        {isRising && (
          <ArrowUpRight className="h-2.5 w-2.5 text-brand-amber" strokeWidth={2.4} />
        )}
      </div>

      {/* Label */}
      <p className="mt-1 truncate font-mono text-[9px] uppercase tracking-wider text-white">
        {panel.label}
      </p>

      {/* Value */}
      <p className={cn("mt-0.5 font-display text-lg font-semibold tabular-nums", accent)}>
        {panel.value}
      </p>

      {/* Sparkline */}
      <Sparkline values={panel.sparkline} rising={isRising} />
    </motion.div>
  );
}

function Sparkline({ values, rising }: { values: readonly number[]; rising: boolean }) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;
  const width = 100;
  const height = 22;
  const step = width / (values.length - 1);
  const points = values
    .map((v, i) => {
      const x = i * step;
      const y = height - ((v - min) / range) * height;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

  return (
    <svg
      className="mt-1.5 h-5 w-full"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      aria-hidden
    >
      <motion.polyline
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        points={points}
        fill="none"
        stroke={rising ? "rgb(251,191,36)" : "rgb(52,211,153)"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Active anomaly card — bottom of dashboard                                   */
/* ───────────────────────────────────────────────────────────────────────── */

function ActiveAnomalyCard() {
  return (
    <div className="border-t border-white/5 bg-gradient-to-r from-brand-amber/[0.05] via-brand-amber/[0.10] to-brand-amber/[0.05] px-3 py-3 sm:px-4">
      <div className="flex items-start gap-2.5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-brand-amber/40 bg-brand-amber/15">
          <AlertTriangle
            className="h-4 w-4 text-brand-amber"
            strokeWidth={1.8}
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-brand-amber">
              Anomaly · {OPSSIGHT_ACTIVE_ANOMALY.asset}
            </p>
            <span className="font-mono text-[8px] uppercase tracking-wider text-text-faint">
              {Math.round(OPSSIGHT_ACTIVE_ANOMALY.confidence * 100)}% confident
            </span>
          </div>
          <p className="mt-0.5 truncate font-display text-[11px] font-semibold text-white sm:text-[12px]">
            {OPSSIGHT_ACTIVE_ANOMALY.pattern}
          </p>
          <ul className="mt-1.5 flex flex-wrap gap-1">
            {OPSSIGHT_ACTIVE_ANOMALY.signals.map((s) => (
              <li
                key={s}
                className="rounded border border-brand-amber/25 bg-brand-amber/[0.08] px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-brand-amber-soft"
              >
                {s}
              </li>
            ))}
          </ul>
          <p className="mt-1.5 font-mono text-[9px] tracking-wider text-text-secondary">
            ↳ {OPSSIGHT_ACTIVE_ANOMALY.recommendation}
          </p>
        </div>
      </div>
    </div>
  );
}
