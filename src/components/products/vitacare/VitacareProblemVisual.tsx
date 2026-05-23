"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  FileText,
  MessageCircle,
  PhoneOff,
  Sparkles,
  ClipboardList,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Kicker } from "@/components/ui/Kicker";

/**
 * VitaCare-specific problem section.
 *
 * Visualizes the wedge: five disconnected clinic tools (paper book, WhatsApp,
 * manual calls, paper prescriptions, phone-tag) collapse into a single
 * VitaCare tile in the center, with brand-green dashed lines flowing inward.
 */
export function VitacareProblemVisual({
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
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035] [background-image:repeating-linear-gradient(135deg,rgba(255,255,255,0.5)_0px,rgba(255,255,255,0.5)_1px,transparent_1px,transparent_14px)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-green/60 to-transparent" />

      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
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

const TOOLS = [
  { Icon: BookOpen, label: "Paper appointment book", subtitle: "Lost slips · double bookings" },
  { Icon: MessageCircle, label: "WhatsApp DMs", subtitle: "Personal phone, no records" },
  { Icon: ClipboardList, label: "Manual reminders", subtitle: "Staff calling one by one" },
  { Icon: FileText, label: "Paper prescriptions", subtitle: "Printed, scanned, lost" },
  { Icon: PhoneOff, label: "Missed-call register", subtitle: "Patients lost to silence" },
];

function ToolsConvergence() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-green/[0.08] blur-3xl" />

      <div className="grid grid-cols-2 items-center gap-6 lg:grid-cols-12 lg:gap-4">
        <div className="flex flex-col gap-3 lg:col-span-4">
          {TOOLS.slice(0, 3).map((t, i) => (
            <ToolCard key={t.label} {...t} delay={i * 0.08} side="left" />
          ))}
        </div>

        <div className="relative col-span-2 flex items-center justify-center lg:col-span-4">
          <ConnectorLines />
          <VitacareCenterTile />
        </div>

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

      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-text-faint">
        <span className="font-mono uppercase tracking-[0.18em] text-text-muted">
          5 disconnected tools
        </span>
        <span className="h-px w-8 bg-white/10" />
        <span className="font-mono uppercase tracking-[0.18em] text-brand-green">
          → 1 digital clinic
        </span>
        <span className="h-px w-8 bg-white/10" />
        <span className="font-mono uppercase tracking-[0.18em] text-text-muted">
          One dashboard. Every patient.
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
  Icon: typeof BookOpen;
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
      <div className="pointer-events-none absolute left-3 right-3 top-1/2 h-px origin-left scale-x-0 bg-text-faint/30 transition-transform duration-500 group-hover:scale-x-100" />
    </motion.div>
  );
}

function VitacareCenterTile() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 flex h-32 w-32 flex-col items-center justify-center rounded-2xl border border-brand-green/30 bg-gradient-to-b from-brand-green/[0.15] to-brand-green/[0.05] backdrop-blur shadow-[0_0_60px_-10px_rgba(0,210,106,0.5)] sm:h-40 sm:w-40"
    >
      <motion.div
        className="absolute inset-0 rounded-2xl border border-brand-green/30"
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.2, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      <Sparkles className="h-5 w-5 text-brand-green sm:h-6 sm:w-6" />
      <p className="mt-2 font-display text-xl font-semibold text-white sm:text-2xl">
        VitaCare
      </p>
      <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-brand-green sm:text-[10px]">
        One clinic
      </p>
    </motion.div>
  );
}

function ConnectorLines() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="vitaLineL" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(0,210,106,0)" />
          <stop offset="100%" stopColor="rgba(0,210,106,0.6)" />
        </linearGradient>
        <linearGradient id="vitaLineR" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0%" stopColor="rgba(0,210,106,0)" />
          <stop offset="100%" stopColor="rgba(0,210,106,0.6)" />
        </linearGradient>
      </defs>

      {[60, 150, 240].map((y, i) => (
        <motion.path
          key={`L${i}`}
          d={`M 0 ${y} Q 100 ${y} 180 150`}
          stroke="url(#vitaLineL)"
          strokeWidth="1"
          strokeDasharray="3 4"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.4, delay: 0.4 + i * 0.1 }}
        />
      ))}

      {[100, 200].map((y, i) => (
        <motion.path
          key={`R${i}`}
          d={`M 400 ${y} Q 300 ${y} 220 150`}
          stroke="url(#vitaLineR)"
          strokeWidth="1"
          strokeDasharray="3 4"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.4, delay: 0.6 + i * 0.1 }}
        />
      ))}

      {[60, 150, 240].map((y, i) => (
        <motion.circle
          key={`Ldot${i}`}
          r="2.5"
          fill="#00D26A"
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
          fill="#00D26A"
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
