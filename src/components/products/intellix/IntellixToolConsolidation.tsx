"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, LayoutDashboard } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { INTELLIX_REPLACED_TOOLS } from "@/content/products/intellix";

/**
 * Intellix — "From Five Tools to One Platform" infographic.
 *
 * Sits between Features and Use Cases. Story-driven before/after:
 *   • LEFT  — five disconnected business tools customer-engagement teams
 *             juggle today (call-centre software, standalone chatbot,
 *             knowledge base tool, CRM lookup workflow, DB query tool).
 *   • RIGHT — one Intellix dashboard absorbing all five.
 *
 * Visually distinct from the hero (which shows live activity) — this
 * tells the consolidation story.
 *
 * RESPONSIVE STRATEGY:
 *   • <768px:   tools stacked vertically with down-chevron, then converge
 *               arrow pointing down, then Intellix dashboard card
 *   • 768–1023: 2-col grid (tools 5/12 + arrow gap + intellix 5/12)
 *   • ≥1024px:  same 2-col with bigger spokes converging on Intellix
 */
export function IntellixToolConsolidation() {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 lg:py-32">
      {/* Backdrop with rose wash */}
      <div className="absolute inset-0 -z-10 bg-bg-surface/40" />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-rose/[0.06] blur-3xl" />
      </div>

      <Container>
        <SectionHeader
          kicker="Five tools, one platform"
          title="Stop running customer engagement on five disconnected tools."
          lede="Today's customer engagement is split across a call-centre stack, a separate chatbot, a knowledge base tool, a CRM lookup, and a DB query interface. Intellix replaces all five with one platform, one dashboard, and one source of truth."
        />

        <Reveal delay={0.1}>
          <div className="relative mt-12 sm:mt-14 lg:mt-16">
            {/* Mobile / tablet: stacked layout */}
            <div className="md:hidden">
              <BeforeStackVertical />
              <div className="mx-auto my-5 flex h-10 w-10 items-center justify-center rounded-full border border-brand-rose/30 bg-brand-rose/10">
                <ChevronDown
                  className="h-5 w-5 text-brand-rose"
                  strokeWidth={2.4}
                />
              </div>
              <AfterPanel />
            </div>

            {/* Desktop: side-by-side with converging arrows */}
            <div className="relative hidden grid-cols-12 items-center gap-6 md:grid">
              <div className="col-span-5">
                <BeforeStackHorizontal />
              </div>

              {/* Converge connector — SVG with 5 lines fanning into a single
                  point on the right. Sits in column 6-7. */}
              <div className="relative col-span-2 flex h-72 items-center justify-center">
                <ConvergeLines />
              </div>

              <div className="col-span-5">
                <AfterPanel />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* "Before" stack — 5 disconnected tools                                       */
/* ───────────────────────────────────────────────────────────────────────── */

function BeforeStackVertical() {
  return (
    <div className="space-y-2.5">
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-faint">
        Before · 5 tools
      </p>
      <div className="flex flex-col gap-2.5">
        {INTELLIX_REPLACED_TOOLS.map((tool, i) => (
          <BeforeCard key={tool.label} tool={tool} index={i} />
        ))}
      </div>
    </div>
  );
}

function BeforeStackHorizontal() {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-faint">
        Before · 5 tools
      </p>
      <div className="mt-3 flex flex-col gap-2.5">
        {INTELLIX_REPLACED_TOOLS.map((tool, i) => (
          <BeforeCard key={tool.label} tool={tool} index={i} />
        ))}
      </div>
    </div>
  );
}

function BeforeCard({
  tool,
  index,
}: {
  tool: (typeof INTELLIX_REPLACED_TOOLS)[number];
  index: number;
}) {
  const Icon = tool.icon;
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group flex items-center gap-3 rounded-xl border border-white/10 bg-bg-elevated/40 p-3 transition-colors sm:p-3.5"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-text-secondary">
        <Icon className="h-4 w-4" strokeWidth={1.7} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[12px] font-medium text-white sm:text-[13px]">
          {tool.label}
        </p>
        <p className="font-mono text-[8px] uppercase tracking-wider text-text-faint">
          Standalone · separate vendor
        </p>
      </div>
    </motion.div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* "After" — Intellix unified dashboard panel                                  */
/* ───────────────────────────────────────────────────────────────────────── */

function AfterPanel() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-brand-rose/40 bg-gradient-to-br from-brand-rose/[0.10] to-transparent p-5 backdrop-blur-md shadow-glow-rose sm:p-6">
      {/* Top hairline shimmer */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brand-rose/0 via-brand-rose/80 to-brand-rose/0"
      />

      {/* Header */}
      <div className="flex items-center justify-between gap-2">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand-rose">
          After · 1 platform
        </p>
        <span className="inline-flex items-center gap-1 rounded-md border border-brand-rose/30 bg-brand-rose/15 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-white">
          <motion.span
            aria-hidden
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.4, repeat: Infinity }}
            className="h-1 w-1 rounded-full bg-brand-rose"
          />
          Live
        </span>
      </div>

      {/* Intellix logo block */}
      <div className="mt-3 flex items-start gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-rose/40 bg-brand-rose/15 sm:h-14 sm:w-14">
          <LayoutDashboard
            className="h-5 w-5 text-brand-rose sm:h-6 sm:w-6"
            strokeWidth={1.7}
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-display text-base font-semibold tracking-tight text-white sm:text-lg">
            Intellix dashboard
          </p>
          <p className="mt-0.5 text-[11px] text-text-muted sm:text-xs">
            Voice + chat + knowledge + database — on one screen.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="my-4 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

      {/* What you get list */}
      <ul className="flex flex-col gap-2">
        {[
          "Outbound voice + inbound voice — same dashboard",
          "Multilingual chat widget — one embed script",
          "Knowledge base grounds every response",
          "Plain-English database lookups, securely scoped",
          "Sentiment + intent + transcript on every call",
        ].map((line, i) => (
          <motion.li
            key={line}
            initial={{ opacity: 0, x: 8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35, delay: 0.5 + i * 0.08 }}
            className="flex items-start gap-2 text-[12px] leading-snug text-white sm:text-[13px]"
          >
            <span className="mt-1 inline-block h-1 w-1 shrink-0 rounded-full bg-brand-rose" />
            <span>{line}</span>
          </motion.li>
        ))}
      </ul>

      {/* Footer call-to-action chip */}
      <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-3">
        <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-text-faint">
          One platform
        </span>
        <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-brand-rose">
          5 → 1
          <ArrowRight className="h-3 w-3" strokeWidth={2.4} />
        </span>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Converge lines — 5 lines fanning from left to single point on right         */
/* (desktop only)                                                              */
/* ───────────────────────────────────────────────────────────────────────── */

function ConvergeLines() {
  return (
    <svg
      className="h-full w-full"
      viewBox="0 0 100 240"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="intellix-conv-grad" x1="0" y1="0.5" x2="1" y2="0.5">
          <stop offset="0%" stopColor="rgba(251,113,133,0.15)" />
          <stop offset="100%" stopColor="rgba(251,113,133,0.85)" />
        </linearGradient>
      </defs>

      {/* Five lines from (left, varied y) → (right, centre) */}
      {[24, 72, 120, 168, 216].map((y, i) => (
        <motion.line
          key={i}
          x1="0"
          y1={y}
          x2="92"
          y2="120"
          stroke="url(#intellix-conv-grad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.7,
            delay: 0.3 + i * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      ))}

      {/* Arrowhead pointing into the Intellix card */}
      <motion.path
        d="M 88 113 L 96 120 L 88 127"
        stroke="rgba(251,113,133,0.85)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4, delay: 1 }}
      />

      {/* Convergence pulse at the meeting point */}
      <motion.circle
        cx="92"
        cy="120"
        r="3"
        fill="rgba(251,113,133,0.85)"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4, delay: 1.05 }}
      />
    </svg>
  );
}
