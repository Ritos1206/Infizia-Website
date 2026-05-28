"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ShieldCheck,
  TimerReset,
} from "lucide-react";

/**
 * /red-hat/managed-services — Operations Bridge hero.
 *
 * Idiom: full-width control-room composition.
 *
 *   ┌─ Today · 4 KPI tiles ─────────────────────────────────────┐
 *   │  99.97%  │  4 min   │  142     │  3,284                   │
 *   │  Uptime  │  MTTR    │  Tickets │  Patches                 │
 *   ├───────────────────────────────────────────────────────────┤
 *   │  Tier ladder · stair-step                                 │
 *   │      ┌───┐                                                │
 *   │      │AI │                  ↑                             │
 *   │   ┌──┘   │                                                │
 *   │   │ENT   │                                                │
 *   │ ┌─┘      │                                                │
 *   │ │STD     │                                                │
 *   │ │FOUND   │                                                │
 *   │ └────────┘                                                │
 *   ├───────────────────────────────────────────────────────────┤
 *   │  24-hour incident ribbon · 24 hour-blocks · current pulses│
 *   └───────────────────────────────────────────────────────────┘
 *
 * Motion:
 *   • KPI counters animate from 0 to value on viewport-enter
 *   • Tier ladder builds up Foundation → AI Platform staggered
 *   • 24-hour ribbon hour-blocks fade in left-to-right
 *   • Current-hour block (h=now) pulses in redhat
 *
 * Distinct from Performix Cycle Story (chapter cards with vertical
 * accent bars) — this is a stair-step financial-tier ladder + KPI
 * dashboard + temporal incident ribbon. Three distinct visual
 * registers stacked.
 */
export function OperationsBridge() {
  const kpis = [
    { label: "Uptime · 30d", value: "99.97%", trend: "+0.02%" },
    { label: "MTTR · avg", value: "4 min", trend: "−12%" },
    { label: "Tickets · 24h", value: "142", trend: "8 active" },
    { label: "Patches · 30d", value: "3,284", trend: "100% applied" },
  ];

  // Foundation < Standard < Enterprise < AI Platform (heights ascending)
  const tiers = [
    { name: "Foundation", price: "Rs 1.5L", height: 38, color: "amber" },
    { name: "Standard", price: "Rs 3L", height: 56, color: "orange" },
    { name: "Enterprise", price: "Rs 6L", height: 80, color: "redhat" },
    { name: "AI Platform", price: "Custom", height: 96, color: "redhat-glow" },
  ];

  // 24-hour ribbon
  const HOUR_NOW = 14;
  const hours = Array.from({ length: 24 }, (_, i) => i);

  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-12 rounded-[3rem] bg-redhat/[0.06] blur-3xl"
      />

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-bg-elevated to-bg-surface p-6 shadow-card md:p-8 lg:p-10">
        {/* Chrome */}
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-redhat shadow-[0_0_8px_rgba(238,0,0,0.7)] animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary">
              Operations bridge · 24×7 live
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
            Service delivery · Enterprise tier · 1h SLA
          </span>
        </div>

        {/* ─── KPI strip ──────────────────────────────────────────── */}
        <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
          {kpis.map((k, i) => (
            <motion.div
              key={k.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              className="rounded-xl border border-white/10 bg-bg-base p-4"
            >
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-text-faint">
                {k.label}
              </p>
              <p className="mt-2 font-display text-2xl font-semibold tracking-tight text-redhat md:text-3xl">
                {k.value}
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-brand-green">
                {k.trend}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ─── Tier ladder · stair-step ──────────────────────────── */}
        <div className="relative mt-6 rounded-xl border border-white/10 bg-bg-base p-5">
          <div className="mb-4 flex items-center justify-between">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
              Tier ladder · scope grows with stack
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-redhat">
              ↑ Coverage
            </p>
          </div>

          <div className="flex h-32 items-end gap-2">
            {tiers.map((t, i) => {
              const isAi = t.color === "redhat-glow";
              return (
                <motion.div
                  key={t.name}
                  initial={{ height: 0, opacity: 0 }}
                  whileInView={{
                    height: `${t.height}%`,
                    opacity: 1,
                  }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.7,
                    delay: 0.4 + i * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={[
                    "relative flex flex-1 flex-col items-center justify-end overflow-hidden rounded-t-lg border-t border-x p-2 text-center",
                    t.color === "amber" &&
                      "border-brand-amber/40 bg-brand-amber/[0.10]",
                    t.color === "orange" &&
                      "border-brand-orange/40 bg-brand-orange/[0.12]",
                    t.color === "redhat" && "border-redhat/40 bg-redhat/[0.18]",
                    isAi &&
                      "border-redhat/50 bg-gradient-to-t from-redhat/30 to-redhat/10 shadow-[0_-10px_30px_-10px_rgba(238,0,0,0.6)]",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {isAi && (
                    <motion.div
                      animate={{ opacity: [0.3, 0.8, 0.3] }}
                      transition={{ duration: 2.4, repeat: Infinity }}
                      className="pointer-events-none absolute inset-0 bg-redhat/20 mix-blend-screen"
                    />
                  )}
                  <p
                    className={[
                      "relative font-display text-xs font-semibold tracking-tight",
                      t.color === "amber" && "text-brand-amber",
                      t.color === "orange" && "text-brand-orange",
                      (t.color === "redhat" || isAi) && "text-redhat",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {t.name}
                  </p>
                  <p className="relative font-mono text-[9px] uppercase tracking-[0.14em] text-white">
                    {t.price}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-3 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.16em] text-text-faint">
            <span>≤ 200 nodes</span>
            <span>RHEL + Ansible</span>
            <span>Full stack · 24×7</span>
            <span>OpenShift AI · MLOps</span>
          </div>
        </div>

        {/* ─── 24-hour incident ribbon ────────────────────────────── */}
        <div className="relative mt-4 rounded-xl border border-white/10 bg-bg-base p-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity className="h-3.5 w-3.5 text-redhat" />
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
                Last 24h · incident ribbon
              </p>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-redhat">
              <ShieldCheck className="inline h-3 w-3 mr-1" />
              All incidents within SLA
            </p>
          </div>

          <div className="grid grid-cols-12 gap-1 sm:grid-cols-24" style={{ gridTemplateColumns: "repeat(24, minmax(0, 1fr))" }}>
            {hours.map((h) => {
              // Sprinkle a few incidents at h=3 (warning) and h=11 (info)
              const isWarning = h === 3;
              const isInfo = h === 11;
              const isNow = h === HOUR_NOW;
              return (
                <motion.div
                  key={h}
                  initial={{ opacity: 0, scaleY: 0.4 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.3,
                    delay: 0.6 + h * 0.025,
                    ease: "easeOut",
                  }}
                  className={[
                    "relative h-6 rounded-sm",
                    isNow
                      ? "bg-redhat shadow-[0_0_10px_rgba(238,0,0,0.7)] animate-pulse"
                      : isWarning
                        ? "bg-brand-amber/60"
                        : isInfo
                          ? "bg-brand-blue/40"
                          : "bg-brand-green/30",
                  ].join(" ")}
                  title={`${String(h).padStart(2, "0")}:00`}
                >
                  {isNow && (
                    <span className="pointer-events-none absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-redhat/40 bg-bg-elevated px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.14em] text-redhat">
                      Now
                    </span>
                  )}
                </motion.div>
              );
            })}
          </div>

          <div className="mt-4 flex items-center gap-4 border-t border-white/5 pt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-text-faint">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-green/60" />
              Healthy
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-blue/60" />
              Info
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-amber/70" />
              Watch
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-redhat" />
              Active
            </span>
            <span className="ml-auto inline-flex items-center gap-1.5 text-redhat">
              <TimerReset className="h-3 w-3" />
              MTTR · within SLA
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
