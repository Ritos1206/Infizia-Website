"use client";

import { motion } from "framer-motion";
import {
  Calculator,
  ClipboardList,
  FileSpreadsheet,
  Receipt,
  ScrollText,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Kicker } from "@/components/ui/Kicker";

/**
 * EyePOS-specific problem section.
 *
 * Visualizes the wedge: five disconnected retail back-office tools collapse
 * into a single EyePOS tile in the center, with animated dashed lines flowing
 * inward to suggest consolidation. Same structural language as
 * EyeconProblemVisual, but the tool cards reflect retail / finance reality.
 *
 * Brand accent: blue (EyePOS' assigned color).
 */
export function EyeposProblemVisual({
  kicker,
  title,
  body,
}: {
  kicker: string;
  title: string;
  body: string;
}) {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Subtle diagonal striped backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035] [background-image:repeating-linear-gradient(135deg,rgba(255,255,255,0.5)_0px,rgba(255,255,255,0.5)_1px,transparent_1px,transparent_14px)]" />

      {/* Top accent line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/60 to-transparent" />

      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
          {/* Copy column */}
          <div className="lg:col-span-5">
            <Reveal>
              <Kicker>{kicker}</Kicker>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-4xl lg:text-5xl">
                {title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg">
                {body}
              </p>
            </Reveal>
          </div>

          {/* Visual column */}
          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <ToolsConvergence />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Tools-convergence visual: 5 legacy retail tools → 1 EyePOS tile            */
/* -------------------------------------------------------------------------- */

const TOOLS = [
  { Icon: Receipt, label: "Standalone POS", subtitle: "Petpooja / Square / Posiflex" },
  { Icon: Calculator, label: "Accounting software", subtitle: "Tally / Zoho Books" },
  { Icon: ClipboardList, label: "Stock register", subtitle: "Paper book · monthly count" },
  { Icon: ScrollText, label: "GST utility", subtitle: "Standalone tool · monthly fire drill" },
  { Icon: FileSpreadsheet, label: "Branch Excel", subtitle: "Per-store sheets · no consolidation" },
];

function ToolsConvergence() {
  return (
    <div className="relative">
      {/* Subtle radial glow behind the EyePOS tile */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/[0.10] blur-3xl" />

      <div className="grid grid-cols-2 items-center gap-6 lg:grid-cols-12 lg:gap-4">
        {/* Left tool stack */}
        <div className="flex flex-col gap-3 lg:col-span-4">
          {TOOLS.slice(0, 3).map((t, i) => (
            <ToolCard key={t.label} {...t} delay={i * 0.08} side="left" />
          ))}
        </div>

        {/* Center: EyePOS tile + connector lines */}
        <div className="relative col-span-2 flex items-center justify-center lg:col-span-4">
          <ConnectorLines />
          <EyeposCenterTile />
        </div>

        {/* Right tool stack */}
        <div className="flex flex-col gap-3 lg:col-span-4">
          {TOOLS.slice(3).map((t, i) => (
            <ToolCard
              key={t.label}
              {...t}
              delay={(i + 3) * 0.08}
              side="right"
            />
          ))}
        </div>
      </div>

      {/* Caption strip below */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-text-faint">
        <span className="font-mono uppercase tracking-[0.18em] text-text-muted">
          5 tools
        </span>
        <span className="h-px w-8 bg-white/10" />
        <span className="font-mono uppercase tracking-[0.18em] text-brand-blue">
          → 1 platform
        </span>
        <span className="h-px w-8 bg-white/10" />
        <span className="font-mono uppercase tracking-[0.18em] text-text-muted">
          Counter, books, GST — reconciled live.
        </span>
      </div>
    </div>
  );
}

function ToolCard({
  Icon,
  label,
  subtitle,
  delay,
  side,
}: {
  Icon: typeof Receipt;
  label: string;
  subtitle: string;
  delay: number;
  side: "left" | "right";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -16 : 16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex items-center gap-3 rounded-xl border border-white/10 bg-bg-surface/80 p-3 backdrop-blur transition-colors hover:border-white/20"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.03] text-text-muted">
        <Icon className="h-4 w-4" strokeWidth={1.6} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-display text-sm font-semibold text-white">{label}</p>
        <p className="truncate text-[11px] text-text-faint">{subtitle}</p>
      </div>
      {/* Strikethrough overlay to suggest "old way" */}
      <div className="pointer-events-none absolute left-3 right-3 top-1/2 h-px origin-left scale-x-0 bg-text-faint/30 transition-transform duration-500 group-hover:scale-x-100" />
    </motion.div>
  );
}

function EyeposCenterTile() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 flex h-32 w-32 flex-col items-center justify-center rounded-2xl border border-brand-blue/30 bg-gradient-to-b from-brand-blue/[0.18] to-brand-blue/[0.06] backdrop-blur shadow-[0_0_60px_-10px_rgba(0,150,255,0.55)] sm:h-40 sm:w-40"
    >
      {/* Pulsing aura */}
      <motion.div
        className="absolute inset-0 rounded-2xl border border-brand-blue/30"
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.2, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      <Sparkles className="h-5 w-5 text-brand-blue sm:h-6 sm:w-6" />
      <p className="mt-2 font-display text-xl font-semibold text-white sm:text-2xl">
        EyePOS
      </p>
      <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-brand-blue sm:text-[10px]">
        One platform
      </p>
    </motion.div>
  );
}

/**
 * Animated dashed lines flowing from the side tool stacks toward the center.
 * Hidden on mobile (vertical layout doesn't need spatial connectors).
 *
 * Brand-blue (#0096FF) gradient with traveling dots to suggest data
 * consolidating from disconnected sources into one platform.
 */
function ConnectorLines() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="eyeposLineL" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(0,150,255,0)" />
          <stop offset="100%" stopColor="rgba(0,150,255,0.6)" />
        </linearGradient>
        <linearGradient id="eyeposLineR" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0%" stopColor="rgba(0,150,255,0)" />
          <stop offset="100%" stopColor="rgba(0,150,255,0.6)" />
        </linearGradient>
      </defs>

      {/* Three lines from left tools to center */}
      {[60, 150, 240].map((y, i) => (
        <motion.path
          key={`L${i}`}
          d={`M 0 ${y} Q 100 ${y} 180 150`}
          stroke="url(#eyeposLineL)"
          strokeWidth="1"
          strokeDasharray="3 4"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.4, delay: 0.4 + i * 0.1 }}
        />
      ))}

      {/* Two lines from right tools to center */}
      {[100, 200].map((y, i) => (
        <motion.path
          key={`R${i}`}
          d={`M 400 ${y} Q 300 ${y} 220 150`}
          stroke="url(#eyeposLineR)"
          strokeWidth="1"
          strokeDasharray="3 4"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.4, delay: 0.6 + i * 0.1 }}
        />
      ))}

      {/* Animated dots traveling along the lines toward center */}
      {[60, 150, 240].map((y, i) => (
        <motion.circle
          key={`Ldot${i}`}
          r="2.5"
          fill="#0096FF"
          initial={{ offsetDistance: "0%" }}
          animate={{ offsetDistance: "100%" }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeInOut",
          }}
          style={{
            offsetPath: `path("M 0 ${y} Q 100 ${y} 180 150")`,
          }}
        />
      ))}
      {[100, 200].map((y, i) => (
        <motion.circle
          key={`Rdot${i}`}
          r="2.5"
          fill="#0096FF"
          initial={{ offsetDistance: "0%" }}
          animate={{ offsetDistance: "100%" }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            delay: 0.3 + i * 0.6,
            ease: "easeInOut",
          }}
          style={{
            offsetPath: `path("M 400 ${y} Q 300 ${y} 220 150")`,
          }}
        />
      ))}
    </svg>
  );
}
