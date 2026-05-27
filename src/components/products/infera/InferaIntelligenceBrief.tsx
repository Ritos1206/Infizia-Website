"use client";

import { motion } from "framer-motion";
import { Mail, Search, Sparkles, Wand2 } from "lucide-react";
import { INFERA_AGENTS } from "@/content/products/infera";

/**
 * Infera — bespoke hero visual.
 *
 * Concept: "Intelligence Brief in Progress" — a multi-agent AI pipeline
 * assembling a complete sales intelligence brief in real time. The rep
 * types a company name + domain into a search-style input, then 6
 * parallel agent panels materialize beneath it (Company profile · Tech
 * stack · Decision makers · GenAI opportunities · Cloud roadmap ·
 * Funding match), each with a state pill, a tiny chip showing what was
 * extracted, and a 1-line output preview.
 *
 *   ┌─────────────── Infera.studio ─────────────────┐
 *   │ ⬡ Compiling brief · live web research          │
 *   ├──────────────────────────────────────────────┤
 *   │ 🔍 Annapurna Finance         annapurnafin.com │   ← topic input
 *   ├──────────────────────────────────────────────┤
 *   │ ┌──────────┐ ┌──────────┐ ┌──────────┐         │
 *   │ │ 01 ✓     │ │ 02 ✓     │ │ 03 ●     │         │   ← 6 agents in
 *   │ │ Company  │ │ Tech     │ │ Decision │         │     parallel
 *   │ │ profile  │ │ stack    │ │ makers   │         │     (live ●)
 *   │ │ ✓ 8 fields│ │ ✓ 27 sig │ │ 5 contacts│         │
 *   │ ├──────────┤ ├──────────┤ ├──────────┤         │
 *   │ │ 04       │ │ 05       │ │ 06       │         │
 *   │ │ GenAI    │ │ Cloud    │ │ Funding  │         │
 *   │ │ opps     │ │ roadmap  │ │ match    │         │
 *   │ │ ⌛ ...    │ │ ⌛ ...    │ │ ⌛ ...    │         │
 *   │ └──────────┘ └──────────┘ └──────────┘         │
 *   ├──────────────────────────────────────────────┤
 *   │ ✉ Outreach drafts ready · 5 contacts            │   ← outcome footer
 *   └──────────────────────────────────────────────┘
 *      ↳ floating: "Live web research" / "Cloud funding ₹40L"
 *
 * Brand accent: cyan (`text-brand-cyan`, `bg-brand-cyan/X` …).
 *
 * Idiom: parallel-agent pipeline assembling a brief — not used by any
 * prior shipped hero. Distinct from Convenor's resume-extraction (which
 * focuses on ONE document being scanned) and from Learnova's
 * generation idiom (which produces a sequential outline). Infera shows
 * 6 agents working in parallel, each extracting a different facet.
 *
 * RESPONSIVE STRATEGY:
 *   • <640px:  agent panels collapse to 1-col; input wraps; floating
 *              chips hidden
 *   • 640px+:  3-col agent grid + 2 rows; floating chips visible
 *   • lg+:     larger glow, all decorative chips visible
 */
export function InferaIntelligenceBrief() {
  return (
    <div className="relative isolate mx-auto w-full max-w-[560px]">
      {/* Ambient cyan glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-12 -z-10 rounded-[40px] bg-brand-cyan/[0.10] blur-3xl"
      />

      {/* Frame */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-bg-elevated/80 backdrop-blur-md shadow-glow-cyan">
        <ChromeBar />
        <TopicInput />
        <AgentGrid />
        <OutcomeFooter />
      </div>

      {/* Floating "Live web research" — top-left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: -10, y: -6 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute -top-3 -left-3 hidden items-center gap-1.5 rounded-full border border-brand-cyan/40 bg-bg-base/90 px-2.5 py-1.5 backdrop-blur-md sm:inline-flex"
      >
        <Sparkles className="h-3 w-3 text-brand-cyan" />
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-cyan-soft">
          Live web research
        </span>
      </motion.div>

      {/* Floating "Cloud funding ₹40L" — top-right (lg+) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 10, y: -6 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="absolute -top-3 right-3 hidden items-center gap-1.5 rounded-full border border-brand-amber/40 bg-bg-base/90 px-2.5 py-1.5 backdrop-blur-md lg:inline-flex"
      >
        <Wand2 className="h-3 w-3 text-brand-amber" />
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-amber-soft">
          Cloud funding · ₹40L
        </span>
      </motion.div>

      {/* Floating "5 outreach drafts" — bottom-right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.55 }}
        className="absolute -bottom-3 right-4 hidden items-center gap-1.5 rounded-full border border-brand-cyan/40 bg-bg-base/90 px-2.5 py-1.5 backdrop-blur-md sm:inline-flex"
      >
        <Mail className="h-3 w-3 text-brand-cyan" />
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-cyan-soft">
          5 drafts ready
        </span>
      </motion.div>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Chrome bar — Infera.studio + Compiling                                      */
/* ───────────────────────────────────────────────────────────────────────── */

function ChromeBar() {
  return (
    <div className="flex items-center justify-between border-b border-white/5 px-3 py-2.5 sm:px-4">
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2 items-center justify-center">
          <span className="absolute h-2 w-2 animate-ping rounded-full bg-brand-cyan/60" />
          <span className="relative h-1.5 w-1.5 rounded-full bg-brand-cyan" />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white">
          Infera.studio
        </span>
      </div>
      <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-2 py-0.5">
        <Wand2 className="h-3 w-3 text-brand-cyan" />
        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-brand-cyan-soft">
          Compiling
        </span>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Topic input — company name + domain + Generate button                       */
/* ───────────────────────────────────────────────────────────────────────── */

function TopicInput() {
  return (
    <div className="relative border-b border-white/5 bg-gradient-to-r from-brand-cyan/[0.04] via-brand-cyan/[0.06] to-brand-cyan/[0.04] px-3 py-3 sm:px-4">
      <div className="flex items-center gap-2.5">
        <Search className="h-3.5 w-3.5 shrink-0 text-brand-cyan" />
        <div className="min-w-0 flex-1">
          <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-text-faint">
            Company &amp; domain
          </p>
          <div className="mt-0.5 flex flex-wrap items-baseline gap-1.5">
            <p className="font-display text-[13px] font-semibold text-white sm:text-sm">
              Annapurna Finance
            </p>
            <span className="font-mono text-[9px] tracking-wider text-text-faint">
              annapurnafin.com
            </span>
            <motion.span
              aria-hidden
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.1, repeat: Infinity }}
              className="inline-block h-3 w-[2px] rounded-sm bg-brand-cyan"
            />
          </div>
        </div>
        <span className="inline-flex h-7 shrink-0 items-center gap-1 rounded-full border border-brand-cyan/40 bg-brand-cyan/15 px-2.5 font-mono text-[9px] uppercase tracking-[0.18em] text-brand-cyan-soft">
          <Wand2 className="h-2.5 w-2.5" />
          Generate
        </span>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Agent grid — 6 panels in 3x2                                                */
/* ───────────────────────────────────────────────────────────────────────── */

function AgentGrid() {
  return (
    <div className="grid grid-cols-1 gap-2 p-3 sm:grid-cols-3 sm:gap-2.5 sm:p-3.5">
      {INFERA_AGENTS.map((agent, i) => (
        <AgentCard key={agent.n} agent={agent} index={i} />
      ))}
    </div>
  );
}

function AgentCard({
  agent,
  index,
}: {
  agent: (typeof INFERA_AGENTS)[number];
  index: number;
}) {
  const Icon = agent.icon;
  // Stations 1-3 are "done"; station 3 is "live" (highlighted); 4-6 still
  // running. We mark station 0 (Company profile) and station 1 (Tech stack)
  // as done, station 2 (Decision makers) as live, and stations 3-5 as
  // pending.
  const state =
    index < 2 ? "done" : index === 2 ? "live" : "pending";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.45,
        delay: 0.5 + index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative overflow-hidden rounded-xl border p-2.5 backdrop-blur-md transition-colors sm:p-3 ${
        state === "live"
          ? "border-brand-cyan/40 bg-brand-cyan/[0.06] shadow-glow-cyan"
          : "border-white/10 bg-white/[0.02] hover:border-brand-cyan/30"
      }`}
    >
      {/* Top hairline shimmer for live cards */}
      {state === "live" && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brand-cyan/0 via-brand-cyan/80 to-brand-cyan/0"
        />
      )}

      {/* Number + state */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-brand-cyan">
          {agent.n}
        </span>
        <StatePill state={state} />
      </div>

      {/* Icon + label */}
      <div className="mt-1.5 flex items-start gap-1.5">
        <div
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded border ${
            state === "live"
              ? "border-brand-cyan/40 bg-brand-cyan/15"
              : "border-white/10 bg-white/[0.03]"
          }`}
        >
          <Icon
            className={`h-3 w-3 ${
              state === "live" ? "text-brand-cyan" : "text-brand-cyan/80"
            }`}
            strokeWidth={1.7}
          />
        </div>
        <p className="font-display text-[11px] font-semibold leading-tight text-white sm:text-[12px]">
          {agent.label}
        </p>
      </div>

      {/* Body preview */}
      <p className="mt-1.5 line-clamp-2 font-mono text-[8px] leading-relaxed tracking-wider text-text-faint">
        {agent.body}
      </p>

      {/* Output chip */}
      <div className="mt-2">
        <span
          className={`inline-flex items-center gap-1 rounded border px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider ${
            state === "pending"
              ? "border-white/10 bg-white/[0.03] text-text-faint"
              : "border-brand-cyan/25 bg-brand-cyan/10 text-brand-cyan-soft"
          }`}
        >
          {agent.chip}
        </span>
      </div>
    </motion.div>
  );
}

function StatePill({ state }: { state: "done" | "live" | "pending" }) {
  if (state === "live") {
    return (
      <span className="inline-flex items-center gap-1 rounded-md border border-brand-cyan/30 bg-brand-cyan/15 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-white">
        <motion.span
          aria-hidden
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          className="h-1 w-1 rounded-full bg-brand-cyan"
        />
        Live
      </span>
    );
  }
  if (state === "done") {
    return (
      <span className="inline-flex items-center rounded-md border border-brand-green/25 bg-brand-green/10 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-brand-green">
        Done
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-md border border-white/10 bg-white/[0.03] px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-text-faint">
      Queued
    </span>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Outcome footer — outreach drafts ready                                      */
/* ───────────────────────────────────────────────────────────────────────── */

function OutcomeFooter() {
  return (
    <div className="border-t border-white/5 bg-gradient-to-r from-brand-cyan/[0.04] via-brand-cyan/[0.06] to-brand-cyan/[0.04] px-3 py-2.5 sm:px-4">
      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5">
          <Mail className="h-3 w-3 text-brand-cyan" />
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white">
            Outreach drafts
          </span>
        </span>
        <span className="font-display text-[11px] font-semibold tabular-nums text-white sm:text-xs">
          5
          <span className="ml-0.5 font-mono text-[8px] font-normal uppercase tracking-wider text-text-muted">
            contacts
          </span>
        </span>
      </div>
      <div className="mt-1.5 flex h-1 overflow-hidden rounded-full bg-white/[0.05]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "62%" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-brand-cyan via-brand-sky to-brand-cyan"
        />
      </div>
    </div>
  );
}
