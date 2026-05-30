"use client";

import { motion } from "framer-motion";
import { Building2, Cloud, Sparkles, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import { MILESTONES } from "@/content/company/about";

/**
 * Founding Timeline — bespoke hero for /company/about.
 *
 * Idiom: horizontal 4-stop timeline from 2012 → 2026 visualising
 * the journey from Contezza Techno Solution founding to today's
 * Infizia AI-native platform launch. Distinct from every product /
 * solution / service / red-hat / technology hero idiom — no other
 * page on the site uses an institutional founding-story timeline.
 *
 * Layout: 4 milestone nodes on a horizontal teal-gradient track, with
 * a year tick + icon + title above each. The track has a continuously
 * traveling pulse-dot tracing left-to-right, signalling forward
 * momentum. On mobile, collapses to a vertical stack with chevron
 * separators.
 */

const ICONS = [Building2, Cloud, Sparkles, Layers] as const;

export function FoundingTimeline() {
  return (
    <div className="relative mx-auto w-full max-w-[600px]">
      {/* Ambient teal glow */}
      <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.5rem] bg-brand-teal/[0.10] blur-3xl" />

      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-bg-elevated/70 backdrop-blur">
        {/* Top hairline shimmer */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brand-teal/0 via-brand-teal/60 to-brand-teal/0" />

        {/* Chrome */}
        <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-brand-teal/60" />
              <span className="relative h-2 w-2 rounded-full bg-brand-teal" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
              founding · timeline
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand-teal">
            14 years · 1 stack
          </span>
        </div>

        {/* Body — desktop horizontal timeline + mobile vertical stack */}
        <div className="px-5 py-6">
          {/* Desktop view (md+) */}
          <div className="relative hidden md:block">
            {/* Horizontal track */}
            <div className="absolute inset-x-2 top-[44px] h-px bg-gradient-to-r from-brand-teal/20 via-brand-teal/60 to-brand-teal/20" />

            {/* Traveling pulse dot */}
            <motion.div
              aria-hidden
              animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatDelay: 0.8,
                ease: "easeInOut",
              }}
              className="absolute top-[40px] z-10 h-2 w-2 rounded-full bg-brand-teal shadow-glow-teal"
            />

            {/* 4 milestone nodes */}
            <div className="grid grid-cols-4 gap-2">
              {MILESTONES.map((m, i) => {
                const Icon = ICONS[i] ?? Sparkles;
                const isLatest = i === MILESTONES.length - 1;
                return (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
                    className="relative flex flex-col items-center"
                  >
                    {/* Year above the node */}
                    <span
                      className={cn(
                        "font-mono text-[10px] uppercase tracking-[0.16em] tabular-nums",
                        isLatest ? "text-brand-teal" : "text-text-faint",
                      )}
                    >
                      {m.year}
                    </span>

                    {/* Node circle (sits on the track at top: ~44px) */}
                    <span
                      className={cn(
                        "relative mt-3 flex h-5 w-5 items-center justify-center rounded-full border-2",
                        isLatest
                          ? "border-brand-teal bg-brand-teal/30"
                          : "border-brand-teal/40 bg-bg-elevated",
                      )}
                    >
                      <span
                        className={cn(
                          "h-1.5 w-1.5 rounded-full",
                          isLatest ? "bg-brand-teal" : "bg-brand-teal/60",
                        )}
                      />
                      {isLatest && (
                        <span className="absolute -inset-1 animate-ping rounded-full border border-brand-teal/50" />
                      )}
                    </span>

                    {/* Icon block */}
                    <div
                      className={cn(
                        "mt-3 flex h-9 w-9 items-center justify-center rounded-lg border",
                        isLatest
                          ? "border-brand-teal/40 bg-brand-teal/10"
                          : "border-white/10 bg-white/[0.03]",
                      )}
                    >
                      <Icon
                        className={cn(
                          "h-4 w-4",
                          isLatest ? "text-brand-teal" : "text-text-secondary",
                        )}
                        strokeWidth={1.6}
                      />
                    </div>

                    {/* Title (compact for desktop hero) */}
                    <p
                      className={cn(
                        "mt-2 text-center font-display text-[11px] font-semibold leading-tight tracking-tight",
                        isLatest ? "text-white" : "text-text-secondary",
                      )}
                    >
                      {m.title}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile view (vertical stack) */}
          <div className="space-y-2 md:hidden">
            {MILESTONES.map((m, i) => {
              const Icon = ICONS[i] ?? Sparkles;
              const isLatest = i === MILESTONES.length - 1;
              return (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  className={cn(
                    "flex items-center gap-3 rounded-xl border p-3",
                    isLatest
                      ? "border-brand-teal/40 bg-brand-teal/[0.04]"
                      : "border-white/10 bg-bg-base/40",
                  )}
                >
                  <div
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border",
                      isLatest
                        ? "border-brand-teal/40 bg-brand-teal/10"
                        : "border-white/10 bg-white/[0.03]",
                    )}
                  >
                    <Icon
                      className={cn(
                        "h-4 w-4",
                        isLatest ? "text-brand-teal" : "text-text-secondary",
                      )}
                      strokeWidth={1.6}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span
                      className={cn(
                        "font-mono text-[10px] uppercase tracking-[0.16em] tabular-nums",
                        isLatest ? "text-brand-teal" : "text-text-faint",
                      )}
                    >
                      {m.year}
                    </span>
                    <p className="text-sm font-semibold text-white">{m.title}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center gap-3 border-t border-white/[0.06] px-5 py-3">
          <span className="inline-flex items-center gap-1 rounded-full border border-brand-teal/30 bg-brand-teal/10 px-2 py-0.5">
            <Building2 className="h-2.5 w-2.5 text-brand-teal" />
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-brand-teal">
              Unit of Contezza · since 2012
            </span>
          </span>
          <span className="ml-auto font-mono text-[9px] text-text-faint">
            AI-native · 2026 onwards
          </span>
        </div>
      </div>

      {/* Floating chips */}
      <motion.div
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute -top-3 -right-2 hidden lg:flex items-center gap-1.5 rounded-full border border-brand-teal/30 bg-bg-elevated/95 px-3 py-1.5 shadow-glow-teal backdrop-blur"
      >
        <Sparkles className="h-3 w-3 text-brand-teal" />
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-brand-teal">
          14 products · live
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute -bottom-3 -left-2 flex items-center gap-1.5 rounded-full border border-white/15 bg-bg-elevated/95 px-3 py-1.5 backdrop-blur"
      >
        <Layers className="h-3 w-3 text-brand-teal" />
        <span className="font-mono text-[10px] text-text-secondary">
          10 industries · 1 stack
        </span>
      </motion.div>
    </div>
  );
}
