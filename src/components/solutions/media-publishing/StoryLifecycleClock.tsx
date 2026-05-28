"use client";

import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";
import { ACCENTS } from "@/lib/product-accents";
import { cn } from "@/lib/utils";
import { MEDIA_CLOCK_SPOKES } from "@/content/solutions/media-publishing";

/**
 * Media & Publishing — Story Lifecycle Clock hero visual.
 *
 * A circular clock face with 6 spokes representing the daily editorial
 * rhythm: Morning brief → Draft → Review → Publish → Distribute →
 * Engage. A clockwise sweep arm rotates around the clock continuously
 * — pointing to "the active stage right now". The current stage's
 * spoke card glows with the brand-purple accent.
 *
 * Idiom note: distinct from E-News's product-page hero (a newsroom
 * composing dashboard with article state queue) and distribution
 * funnel (vertical fan-out). The 12-hour clockface with rotating sweep
 * arm and labelled spokes is new — and visually argues "rhythm, not
 * task list".
 *
 * Responsive:
 *   • <md: vertical sequence of 6 spoke cards
 *   • md+: full circular clock with sweep arm
 */
export function StoryLifecycleClock() {
  const a = ACCENTS.purple;

  return (
    <div className="relative">
      {/* Ambient purple glow */}
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
            <span className="h-2 w-2 rounded-full bg-brand-purple shadow-[0_0_8px_rgba(192,132,252,0.7)]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary">
              Editorial day · Live
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
            Today · 13:42
          </span>
        </div>

        {/* ── Desktop clock (md+) ────────────────────────────────────── */}
        <div className="relative mx-auto mt-8 hidden h-[420px] w-full max-w-[440px] md:block">
          {/* Outer ring */}
          <div
            className={cn(
              "absolute inset-4 rounded-full border-2 border-dashed",
              a.border,
            )}
          />
          {/* Inner ring (subtler) */}
          <div
            className={cn(
              "pointer-events-none absolute inset-16 rounded-full border opacity-40",
              a.border,
            )}
          />

          {/* Sweep arm — rotates continuously around the dial */}
          <motion.div
            aria-hidden
            className="absolute left-1/2 top-1/2 origin-top -translate-x-1/2"
            style={{ width: 1, height: 180 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          >
            <div
              className="absolute left-0 top-0 h-full w-px"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(192,132,252,0.9), rgba(192,132,252,0))",
                boxShadow: "0 0 12px rgba(192,132,252,0.5)",
              }}
            />
            {/* Tip dot */}
            <div
              className={cn(
                "absolute -left-[3px] top-0 h-2 w-2 rounded-full",
                a.bg,
              )}
              style={{ boxShadow: "0 0 12px rgba(192,132,252,0.7)" }}
            />
          </motion.div>

          {/* Centre badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
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
                <Newspaper className="h-5 w-5" strokeWidth={1.6} />
              </div>
              <p className="mt-1.5 font-mono text-[8px] uppercase tracking-[0.18em] text-text-faint">
                Issue
              </p>
              <p className={cn("font-display text-xs font-semibold", a.text)}>
                #21,584
              </p>
            </div>
          </motion.div>

          {/* 6 spoke cards positioned at 12, 2, 4, 6, 8, 10 o'clock */}
          {MEDIA_CLOCK_SPOKES.map((s, i) => {
            const Icon = s.icon;
            // Angle in degrees: 0 = top (12 o'clock), 60 each step
            // index 0 → 12 o'clock, 1 → 2 o'clock, etc.
            const angle = i * 60;
            // Convert to radians, offset so 0 is top
            const rad = ((angle - 90) * Math.PI) / 180;
            // Position cards on a 200px radius circle
            const radius = 195;
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;
            // Active = the spoke at index 3 (Publish) — for the demo
            const isActive = i === 3;

            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={cn(
                  "absolute left-1/2 top-1/2 w-32 -translate-x-1/2 -translate-y-1/2 rounded-xl border bg-bg-base p-2.5 text-center",
                  isActive
                    ? cn(a.border, a.shadow, "ring-1 ring-brand-purple/50")
                    : "border-white/10",
                )}
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
              >
                <div className="flex items-center justify-center gap-1.5">
                  <div
                    className={cn(
                      "flex h-6 w-6 items-center justify-center rounded-md border",
                      a.border,
                      a.bgSoft,
                      a.text,
                    )}
                  >
                    <Icon className="h-3 w-3" strokeWidth={1.7} />
                  </div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-text-faint">
                    {s.timeLabel}
                  </p>
                </div>
                <p className="mt-1.5 font-display text-[11px] font-semibold text-white">
                  {s.label}
                </p>
                <p className="mt-0.5 text-[9px] leading-snug text-text-muted">
                  {s.detail}
                </p>
                {isActive && (
                  <p
                    className={cn(
                      "mt-1.5 inline-flex items-center gap-1 rounded-full border bg-bg-base px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.14em]",
                      a.border,
                      a.text,
                    )}
                  >
                    <span className="h-1 w-1 rounded-full bg-brand-purple animate-pulse" />
                    Now
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* ── Mobile vertical stack ──────────────────────────────────── */}
        <div className="mt-6 flex flex-col gap-2 md:hidden">
          {MEDIA_CLOCK_SPOKES.map((s, i) => {
            const Icon = s.icon;
            const isActive = i === 3;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={cn(
                  "flex items-center gap-3 rounded-xl border bg-bg-base p-3",
                  isActive ? cn(a.border, a.shadow) : "border-white/10",
                )}
              >
                <div
                  className={cn(
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border",
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
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-text-faint">
                      {s.timeLabel}
                    </span>
                  </div>
                  <p className="mt-0.5 text-[11px] leading-snug text-text-muted">
                    {s.detail}
                  </p>
                </div>
                {isActive && (
                  <span
                    className={cn(
                      "shrink-0 rounded-full border bg-bg-base px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em]",
                      a.border,
                      a.text,
                    )}
                  >
                    Now
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/5 pt-4 text-[10px] font-mono uppercase tracking-[0.18em] text-text-faint">
          <span>6 stages · 5 channels · 1 newsroom</span>
          <span className="ml-auto inline-flex items-center gap-1.5 text-brand-purple">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-purple animate-pulse-soft" />
            Cycle live
          </span>
        </div>
      </div>
    </div>
  );
}
