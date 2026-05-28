"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { ACCENTS } from "@/lib/product-accents";
import { cn } from "@/lib/utils";
import { HEALTHCARE_FLOW_STATIONS } from "@/content/solutions/healthcare";

/**
 * Healthcare — Patient Flow Ribbon hero visual.
 *
 * One single SVG ribbon traces the 5-station patient journey
 * (Call → Book → Visit → Prescribe → Follow-up). A pulse glides along
 * the ribbon continuously to telegraph "this is one connected flow,
 * not five disconnected tools".
 *
 * Each station shows its number, label, and the Infizia product handling
 * it — so the buyer sees the journey AND the stack in one view.
 *
 * Idiom note: distinct from every product-page hero (no phone mockup,
 * no calendar, no POS, no scan-line, no dashboard, no transcript stream,
 * no orbit, no clock). The continuous-ribbon-with-traveling-pulse is new.
 *
 * Responsive:
 *   • <md: vertical stack of stations with vertical line connecting them
 *   • md+: horizontal ribbon arc with 5 stations laid along it
 */
export function HealthcareFlowRibbon() {
  const a = ACCENTS.green;

  return (
    <div className="relative">
      {/* Ambient glow behind the ribbon */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -inset-8 rounded-[2rem] blur-3xl opacity-60",
          a.glow,
        )}
      />

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-bg-elevated to-bg-surface p-6 shadow-card md:p-8">
        {/* Chrome strip */}
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-brand-green shadow-[0_0_8px_rgba(0,210,106,0.7)]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary">
              Patient flow · Live
            </span>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-text-faint">
            <ShieldCheck className="h-3 w-3 text-brand-green" />
            <span>Single record</span>
          </div>
        </div>

        {/* ── Desktop ribbon (md+) ───────────────────────────────────── */}
        <div className="relative mt-8 hidden md:block">
          {/* Ribbon SVG arc + traveling pulse */}
          <svg
            viewBox="0 0 600 120"
            className="absolute inset-x-0 top-7 h-24 w-full"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="ribbon-grad" x1="0" x2="1">
                <stop offset="0%" stopColor="#00d26a" stopOpacity="0.05" />
                <stop offset="50%" stopColor="#00d26a" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#00d26a" stopOpacity="0.05" />
              </linearGradient>
              <linearGradient id="ribbon-fill" x1="0" x2="1">
                <stop offset="0%" stopColor="#00d26a" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#5eead4" stopOpacity="0.95" />
              </linearGradient>
            </defs>

            {/* Faint base ribbon */}
            <path
              d="M 30 80 Q 150 20 300 60 T 570 60"
              fill="none"
              stroke="url(#ribbon-grad)"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Animated draw-in path on viewport-enter */}
            <motion.path
              d="M 30 80 Q 150 20 300 60 T 570 60"
              fill="none"
              stroke="url(#ribbon-fill)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="700"
              initial={{ strokeDashoffset: 700 }}
              whileInView={{ strokeDashoffset: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Traveling pulse — a small bright dot that loops along the ribbon */}
            <motion.circle
              r="5"
              fill="#00d26a"
              filter="url(#pulse-glow)"
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                offsetPath: 'path("M 30 80 Q 150 20 300 60 T 570 60")',
                offsetRotate: "0deg",
              }}
            />

            <defs>
              <filter id="pulse-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </svg>

          {/* Stations */}
          <div className="relative grid grid-cols-5 gap-2 pt-32">
            {HEALTHCARE_FLOW_STATIONS.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.6 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex flex-col items-center text-center"
                >
                  <div
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-2xl border bg-bg-base",
                      a.border,
                      a.text,
                      a.shadow,
                    )}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.18em] text-text-faint">
                    {s.n}
                  </p>
                  <p className="mt-1 font-display text-sm font-semibold text-white">
                    {s.label}
                  </p>
                  <p className={cn("mt-1 text-[10px] font-mono uppercase tracking-[0.14em]", a.text)}>
                    {s.handler}
                  </p>
                  <p className="mt-1 text-[10px] leading-snug text-text-muted">
                    {s.detail}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Mobile vertical stack ──────────────────────────────────── */}
        <div className="mt-6 flex flex-col gap-3 md:hidden">
          {HEALTHCARE_FLOW_STATIONS.map((s, i) => {
            const Icon = s.icon;
            const isLast = i === HEALTHCARE_FLOW_STATIONS.length - 1;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative"
              >
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-bg-base p-3">
                  <div
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border",
                      a.border,
                      a.bgSoft,
                      a.text,
                    )}
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.7} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-display text-sm font-semibold text-white">
                        {s.label}
                      </p>
                      <span className={cn("font-mono text-[9px] uppercase tracking-[0.16em]", a.text)}>
                        {s.handler}
                      </span>
                    </div>
                    <p className="mt-0.5 text-[11px] leading-snug text-text-muted">
                      {s.detail}
                    </p>
                  </div>
                </div>
                {!isLast && (
                  <div
                    aria-hidden
                    className={cn(
                      "ml-5 h-3 w-px bg-gradient-to-b",
                      "from-brand-green/60 to-brand-green/0",
                    )}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Footer micro-stat */}
        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/5 pt-4 text-[10px] font-mono uppercase tracking-[0.18em] text-text-faint">
          <span>One record · 5 stations · 0 swivel-chair</span>
          <span className="ml-auto inline-flex items-center gap-1.5 text-brand-green">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-green animate-pulse-soft" />
            Patient #4821 · Visit
          </span>
        </div>
      </div>
    </div>
  );
}
