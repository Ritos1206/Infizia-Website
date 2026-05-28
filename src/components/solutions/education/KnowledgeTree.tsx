"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { ACCENTS } from "@/lib/product-accents";
import { cn } from "@/lib/utils";
import { EDUCATION_TREE_BRANCHES } from "@/content/solutions/education";

/**
 * Education — Knowledge Tree hero visual.
 *
 * A central topic root at the top, a single trunk, and 4 module branches
 * fanning out below. Each branch ends in a labelled leaf node with its
 * type + count (e.g., "3 lessons", "12 MCQs"). Trunk and branches draw
 * in on viewport-enter — the act of growth is the metaphor.
 *
 * Idiom note: distinct from Learnova's centered-vertical "studio bar +
 * modules row" hero (which is a UI mockup). This is a pure SVG branching
 * tree, fundamentally different shape — and never used elsewhere on the
 * site.
 *
 * Responsive:
 *   • <md: vertical stack (root → trunk → 4 branch cards)
 *   • md+: full SVG tree with branches fanning out below the root
 */
export function KnowledgeTree() {
  const a = ACCENTS.fuchsia;

  return (
    <div className="relative">
      {/* Ambient fuchsia glow */}
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
            <span className="h-2 w-2 rounded-full bg-brand-fuchsia shadow-[0_0_8px_rgba(232,121,249,0.7)]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary">
              Topic → Course · Generated
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
            Adaptive · per learner
          </span>
        </div>

        {/* Root topic */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 flex justify-center"
        >
          <div
            className={cn(
              "inline-flex items-center gap-2 rounded-full border bg-bg-base px-4 py-2",
              a.border,
              a.shadow,
            )}
          >
            <Sparkles className={cn("h-3.5 w-3.5", a.text)} />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
              Topic
            </span>
            <span className="font-display text-sm font-semibold text-white">
              Machine Learning Fundamentals
            </span>
          </div>
        </motion.div>

        {/* Tree SVG (md+ only) */}
        <div className="relative mt-4 hidden h-44 md:block">
          <svg
            viewBox="0 0 600 180"
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="branch-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#e879f9" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#e879f9" stopOpacity="0.15" />
              </linearGradient>
            </defs>

            {/* Trunk */}
            <motion.line
              x1="300"
              y1="0"
              x2="300"
              y2="60"
              stroke="url(#branch-grad)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />

            {/* 4 branches fanning to bottom positions */}
            {[
              { x: 75, y: 160 },
              { x: 225, y: 170 },
              { x: 375, y: 170 },
              { x: 525, y: 160 },
            ].map((target, i) => (
              <motion.path
                key={i}
                d={`M 300 60 Q 300 ${100 + i * 4} ${target.x} ${target.y}`}
                fill="none"
                stroke="url(#branch-grad)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: 0.4 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            ))}
          </svg>
        </div>

        {/* 4 branch cards */}
        <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4 md:gap-3">
          {EDUCATION_TREE_BRANCHES.map((branch, i) => {
            const Icon = branch.icon;
            return (
              <motion.div
                key={branch.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.45,
                  delay: 0.8 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={cn(
                  "rounded-xl border bg-bg-base p-3",
                  a.border,
                )}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={cn(
                      "flex h-7 w-7 items-center justify-center rounded-md border",
                      a.border,
                      a.bgSoft,
                      a.text,
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" strokeWidth={1.7} />
                  </div>
                  <p className="font-display text-[11px] font-semibold leading-tight text-white">
                    {branch.label}
                  </p>
                </div>
                <ul className="mt-2 flex flex-col gap-1">
                  {branch.leaves.map((leaf) => (
                    <li
                      key={leaf.type}
                      className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.14em] text-text-faint"
                    >
                      <span>{leaf.type}</span>
                      <span
                        className={cn(
                          "rounded border px-1 py-px tabular-nums",
                          a.border,
                          a.bgSoft,
                          a.text,
                        )}
                      >
                        {leaf.count}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/5 pt-4 text-[10px] font-mono uppercase tracking-[0.18em] text-text-faint">
          <span>4 modules · 12 lessons · 52 MCQs · 1 mock test</span>
          <span className="ml-auto inline-flex items-center gap-1.5 text-brand-fuchsia">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-fuchsia animate-pulse-soft" />
            Generated in 24 sec
          </span>
        </div>
      </div>
    </div>
  );
}
