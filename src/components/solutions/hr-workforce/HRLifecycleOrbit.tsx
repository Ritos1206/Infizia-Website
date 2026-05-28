"use client";

import { motion } from "framer-motion";
import { UserRound } from "lucide-react";
import { ACCENTS } from "@/lib/product-accents";
import { cn } from "@/lib/utils";
import { HR_ORBIT_PHASES } from "@/content/solutions/hr-workforce";

/**
 * HR & Workforce — People Lifecycle Orbit hero visual.
 *
 * Circular orbit with the employee at the centre and 4 lifecycle phases
 * positioned at the cardinal points (top → right → bottom → left).
 * A subtle continuous rotation runs the orbit ring slowly; the phase
 * cards themselves are static (so the labels stay readable).
 *
 * Idiom note: distinct from every product-page hero — no orbit / circular
 * lifecycle visual exists anywhere else on the site. The shape itself
 * argues the narrative: "people don't move through HR linearly; they
 * cycle".
 *
 * Responsive:
 *   • <md: vertical stack of 4 lifecycle cards (no orbit)
 *   • md+: full circular orbit with employee centre + 4 phase cards
 */
export function HRLifecycleOrbit() {
  const a = ACCENTS.indigo;

  return (
    <div className="relative">
      {/* Ambient indigo glow */}
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
            <span className="h-2 w-2 rounded-full bg-brand-indigo shadow-[0_0_8px_rgba(129,140,248,0.7)]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary">
              People lifecycle · Continuous
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
            One employee record
          </span>
        </div>

        {/* ── Desktop orbit (md+) ────────────────────────────────────── */}
        <div className="relative mx-auto mt-8 hidden h-[420px] w-full max-w-[440px] md:block">
          {/* Slowly rotating decorative ring */}
          <motion.div
            aria-hidden
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            <div
              className={cn(
                "absolute inset-8 rounded-full border-2 border-dashed",
                a.border,
              )}
            />
            {/* Tick marks at 4 cardinal points */}
            {[0, 90, 180, 270].map((angle) => (
              <div
                key={angle}
                className={cn("absolute left-1/2 top-1/2 h-3 w-3 rounded-full", a.bg)}
                style={{
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translate(0, -176px)`,
                }}
              />
            ))}
          </motion.div>

          {/* Static inner ring (subtler, doesn't rotate) */}
          <div
            className={cn(
              "pointer-events-none absolute inset-20 rounded-full border opacity-30",
              a.border,
            )}
          />

          {/* Centre — the employee */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div
              className={cn(
                "flex h-24 w-24 flex-col items-center justify-center rounded-full border bg-bg-base",
                a.border,
                a.shadow,
              )}
            >
              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full",
                  a.bgSoft,
                  a.text,
                )}
              >
                <UserRound className="h-5 w-5" strokeWidth={1.6} />
              </div>
              <p className="mt-1.5 font-mono text-[8px] uppercase tracking-[0.18em] text-text-faint">
                Employee #
              </p>
              <p className={cn("font-display text-xs font-semibold", a.text)}>
                4821
              </p>
            </div>
          </motion.div>

          {/* 4 phase cards — positioned at top / right / bottom / left */}
          {HR_ORBIT_PHASES.map((p, i) => {
            const Icon = p.icon;
            // Position via CSS — top, right, bottom, left
            const positions = [
              "left-1/2 top-0 -translate-x-1/2", // 12 o'clock
              "right-0 top-1/2 -translate-y-1/2", // 3 o'clock
              "left-1/2 bottom-0 -translate-x-1/2", // 6 o'clock
              "left-0 top-1/2 -translate-y-1/2", // 9 o'clock
            ];
            return (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={cn(
                  "absolute w-36 rounded-xl border bg-bg-base p-3",
                  a.border,
                  positions[i],
                )}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border",
                      a.border,
                      a.bgSoft,
                      a.text,
                    )}
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.7} />
                  </div>
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-text-faint">
                      {p.n}
                    </p>
                    <p className="font-display text-sm font-semibold text-white">
                      {p.label}
                    </p>
                  </div>
                </div>
                <p
                  className={cn(
                    "mt-2 font-mono text-[9px] uppercase tracking-[0.16em]",
                    a.text,
                  )}
                >
                  {p.handler}
                </p>
                <p className="mt-1 text-[10px] leading-snug text-text-muted">
                  {p.detail}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ── Mobile vertical stack ──────────────────────────────────── */}
        <div className="mt-6 flex flex-col gap-3 md:hidden">
          {HR_ORBIT_PHASES.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-bg-base p-3"
              >
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
                      {p.label}
                    </p>
                    <span
                      className={cn(
                        "font-mono text-[9px] uppercase tracking-[0.16em]",
                        a.text,
                      )}
                    >
                      {p.handler}
                    </span>
                  </div>
                  <p className="mt-0.5 text-[11px] leading-snug text-text-muted">
                    {p.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/5 pt-4 text-[10px] font-mono uppercase tracking-[0.18em] text-text-faint">
          <span>4 phases · 3 products · 1 record</span>
          <span className="ml-auto inline-flex items-center gap-1.5 text-brand-indigo">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-indigo animate-pulse-soft" />
            Cycle in motion
          </span>
        </div>
      </div>
    </div>
  );
}
