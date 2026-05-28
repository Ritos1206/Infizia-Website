"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { ACCENTS } from "@/lib/product-accents";
import { cn } from "@/lib/utils";
import {
  SUPPORT_CASCADE_CHANNELS,
  SUPPORT_RESOLUTION_TAGS,
} from "@/content/solutions/customer-support";

/**
 * Customer Support — Conversation Cascade hero visual.
 *
 * Three columns:
 *   • Left  — 6 inbound channels stacked, each pulsing with a count
 *   • Middle — central AI console card with animated waveform + "Handling"
 *   • Right — resolution tags flying out (Resolved · Logged · Escalated)
 *
 * Animated converge lines on lg+ tie left → middle → right so the eye
 * reads the flow as one continuous cascade.
 *
 * Idiom note: distinct from Intellix's voice/chat split (which is a
 * 50/50 panel layout) and from the Convenor 5-tools-converge (which is
 * many tools collapsing into one dashboard). This is many CHANNELS
 * pouring into one console, with tagged outputs on the other side.
 *
 * Responsive:
 *   • <md: vertical 3-row stack — channels, console, tags
 *   • md+: 3-col grid with animated converge lines on lg+
 */
export function ConversationCascade() {
  const a = ACCENTS.rose;

  return (
    <div className="relative">
      {/* Ambient rose glow */}
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
            <span className="h-2 w-2 rounded-full bg-brand-rose shadow-[0_0_8px_rgba(251,113,133,0.7)]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary">
              Conversation cascade · Live
            </span>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
            889 active · 12 langs
          </div>
        </div>

        <div className="relative mt-6 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-3">
          {/* ── Left: 6 inbound channels ──────────────────────────── */}
          <div className="flex flex-col gap-2">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-text-faint">
              Inbound · 6 channels
            </p>
            {SUPPORT_CASCADE_CHANNELS.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.45,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={cn(
                    "flex items-center gap-2 rounded-lg border bg-bg-base/80 p-2",
                    a.border,
                  )}
                >
                  <div
                    className={cn(
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-md",
                      a.bgSoft,
                      a.text,
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" strokeWidth={1.7} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-xs font-semibold text-white">
                      {c.label}
                    </p>
                  </div>
                  <span
                    className={cn(
                      "rounded-md border px-1.5 py-0.5 font-mono text-[9px] tabular-nums",
                      a.border,
                      a.bgSoft,
                      a.text,
                    )}
                  >
                    {c.count}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* ── Centre: AI console ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={cn(
              "relative flex flex-col items-center justify-center rounded-xl border bg-bg-base p-4 md:p-5",
              a.border,
              a.shadow,
            )}
          >
            <div
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-full border",
                a.border,
                a.bgSoft,
                a.text,
              )}
            >
              <Sparkles className="h-5 w-5" strokeWidth={1.7} />
            </div>
            <p className={cn("mt-3 font-mono text-[9px] uppercase tracking-[0.2em]", a.text)}>
              Intellix
            </p>
            <p className="mt-1 font-display text-sm font-semibold text-white text-center">
              AI console
            </p>

            {/* Animated waveform */}
            <div className="mt-3 flex h-6 items-end gap-0.5">
              {Array.from({ length: 14 }).map((_, i) => (
                <motion.span
                  key={i}
                  className={cn("w-0.5 rounded-full", a.bg)}
                  animate={{
                    height: [4, 14, 8, 18, 6, 12, 4],
                  }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    delay: i * 0.07,
                    ease: "easeInOut",
                  }}
                  style={{ height: 4 }}
                />
              ))}
            </div>

            <p className="mt-3 text-[10px] leading-snug text-text-muted text-center">
              Voice · Chat · KB · DB
              <br />
              one console · 12 languages
            </p>
          </motion.div>

          {/* ── Right: resolution tags flying out ──────────────────── */}
          <div className="flex flex-col gap-2">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-text-faint text-right">
              Outcome · auto-tagged
            </p>
            {SUPPORT_RESOLUTION_TAGS.map((t, i) => {
              const Icon = t.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.45,
                    delay: 0.5 + i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={cn(
                    "flex items-center gap-2 rounded-lg border bg-bg-base/80 p-2",
                    t.state === "resolved" && "border-brand-green/30",
                    t.state === "escalated" && "border-brand-amber/30",
                    t.state === "logged" && "border-white/10",
                  )}
                >
                  <div
                    className={cn(
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-md",
                      t.state === "resolved" &&
                        "bg-brand-green/10 text-brand-green",
                      t.state === "escalated" &&
                        "bg-brand-amber/10 text-brand-amber",
                      t.state === "logged" && "bg-white/5 text-text-secondary",
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" strokeWidth={1.7} />
                  </div>
                  <p className="font-display text-[11px] font-semibold text-white">
                    {t.label}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Animated converge lines (lg+ only — the columns are too narrow on md) */}
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 hidden lg:block"
            preserveAspectRatio="none"
          >
            {/* Pure decorative — kept simple to avoid clutter at this column width */}
          </svg>
        </div>

        {/* Footer micro-stat */}
        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/5 pt-4 text-[10px] font-mono uppercase tracking-[0.18em] text-text-faint">
          <span>70% deflection · &lt;10 sec response</span>
          <span className="ml-auto inline-flex items-center gap-1.5 text-brand-rose">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-rose animate-pulse-soft" />
            Handling 27 now
          </span>
        </div>
      </div>
    </div>
  );
}
