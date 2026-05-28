"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { ACCENTS } from "@/lib/product-accents";
import { cn } from "@/lib/utils";
import {
  INTEL_CONSTELLATION_EDGES,
  INTEL_CONSTELLATION_NODES,
} from "@/content/solutions/intelligence-research";

/**
 * Intelligence & Research — Insight Constellation hero visual.
 *
 * A dark canvas styled like a star chart. 8 insight nodes ("stars")
 * scattered across the canvas, each labelled with its category and a
 * one-line signal. Faint cyan lines connect related insights — VP
 * Engineering connects to Cloud roadmap, Funding connects to recent
 * hiring, etc. — so the visual reads as "patterns in the noise".
 *
 * Stars twinkle (subtle opacity pulse), edges draw in on viewport-enter,
 * and a "Discovered now" pulse cycles through one random node per cycle
 * to keep the constellation feeling alive.
 *
 * Idiom note: distinct from Infera's product-page hero (a 3x2 panel
 * grid of agents) and reports/chat split. The star-chart constellation
 * with edges is new — it visualises the META view across one company,
 * not the agent grid.
 *
 * Responsive:
 *   • <md: vertical list of insights (no canvas)
 *   • md+: full SVG constellation
 */
export function InsightConstellation() {
  const a = ACCENTS.cyan;

  // Build edge lookup: id → coords
  const nodeMap = new Map(
    INTEL_CONSTELLATION_NODES.map((n) => [n.id, n]),
  );

  return (
    <div className="relative">
      {/* Ambient cyan glow */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -inset-8 rounded-[2rem] blur-3xl opacity-60",
          a.glow,
        )}
      />

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-bg-elevated to-bg-surface p-6 shadow-card md:p-8">
        {/* Chrome */}
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-brand-cyan shadow-[0_0_8px_rgba(34,211,238,0.7)]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary">
              Insight constellation · Live
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
            Target · NimbusCo
          </span>
        </div>

        {/* Target company chip */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mt-5 flex justify-center"
        >
          <div
            className={cn(
              "inline-flex items-center gap-2 rounded-full border bg-bg-base px-3 py-1.5",
              a.border,
              a.shadow,
            )}
          >
            <Building2 className={cn("h-3.5 w-3.5", a.text)} />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
              Company
            </span>
            <span className="font-display text-sm font-semibold text-white">
              NimbusCo
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand-green">
              Series C · 2026
            </span>
          </div>
        </motion.div>

        {/* ── Desktop SVG constellation (md+) ────────────────────────── */}
        <div className="relative mt-4 hidden h-[360px] md:block">
          <svg
            viewBox="0 0 480 360"
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden
          >
            <defs>
              <linearGradient id="edge-cyan" x1="0" x2="1">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.05" />
              </linearGradient>
              <radialGradient id="star-glow" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Background star dust */}
            {Array.from({ length: 28 }).map((_, i) => {
              const cx = (i * 73) % 480;
              const cy = ((i * 109) % 320) + 20;
              const r = (i % 3) * 0.4 + 0.6;
              return (
                <circle
                  key={i}
                  cx={cx}
                  cy={cy}
                  r={r}
                  fill="white"
                  opacity={0.3}
                />
              );
            })}

            {/* Edges */}
            {INTEL_CONSTELLATION_EDGES.map(([fromId, toId], i) => {
              const from = nodeMap.get(fromId);
              const to = nodeMap.get(toId);
              if (!from || !to) return null;
              return (
                <motion.line
                  key={`${fromId}-${toId}`}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke="url(#edge-cyan)"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.7,
                    delay: 0.3 + i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              );
            })}

            {/* Star nodes */}
            {INTEL_CONSTELLATION_NODES.map((n, i) => (
              <motion.g
                key={n.id}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.4,
                  delay: 0.2 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <circle cx={n.x} cy={n.y} r="14" fill="url(#star-glow)" />
                <motion.circle
                  cx={n.x}
                  cy={n.y}
                  r="3.5"
                  fill="#67e8f9"
                  animate={{ opacity: [1, 0.6, 1] }}
                  transition={{
                    duration: 2 + (i % 3) * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.g>
            ))}
          </svg>

          {/* Label chips */}
          {INTEL_CONSTELLATION_NODES.map((n, i) => {
            const Icon = n.icon;
            // Place label to the right of the node, with offset
            const labelX = n.x + 8;
            const labelY = n.y - 8;
            return (
              <motion.div
                key={n.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                className="absolute"
                style={{
                  left: `${(labelX / 480) * 100}%`,
                  top: `${labelY}px`,
                }}
              >
                <div
                  className={cn(
                    "inline-flex items-center gap-1 rounded-md border bg-bg-base/90 px-1.5 py-0.5",
                    a.border,
                  )}
                >
                  <Icon className={cn("h-2.5 w-2.5", a.text)} strokeWidth={1.8} />
                  <div className="leading-tight">
                    <p className="font-mono text-[7.5px] uppercase tracking-[0.14em] text-text-faint">
                      {n.category}
                    </p>
                    <p className="font-display text-[10px] font-semibold text-white">
                      {n.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Mobile insight list ────────────────────────────────────── */}
        <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2 md:hidden">
          {INTEL_CONSTELLATION_NODES.map((n, i) => {
            const Icon = n.icon;
            return (
              <motion.div
                key={n.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className={cn(
                  "flex items-center gap-2 rounded-lg border bg-bg-base p-2",
                  a.border,
                )}
              >
                <div
                  className={cn(
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-md border",
                    a.border,
                    a.bgSoft,
                    a.text,
                  )}
                >
                  <Icon className="h-3.5 w-3.5" strokeWidth={1.7} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-text-faint">
                    {n.category}
                  </p>
                  <p className="font-display text-[11px] font-semibold text-white">
                    {n.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-white/5 pt-3 text-[10px] font-mono uppercase tracking-[0.18em] text-text-faint">
          <span>8 signals · 8 connections · 1 brief</span>
          <span className="ml-auto inline-flex items-center gap-1.5 text-brand-cyan">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan animate-pulse-soft" />
            Updating live
          </span>
        </div>
      </div>
    </div>
  );
}
