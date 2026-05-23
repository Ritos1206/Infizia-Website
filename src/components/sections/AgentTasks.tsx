"use client";

import { motion } from "framer-motion";
import {
  CalendarCheck,
  PhoneCall,
  Target,
  FileText,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

type Task = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  // Position as percentages of the container (so it scales responsively).
  top: string;
  left: string;
  // Stagger delay for entrance.
  delay: number;
  // Float amplitude and direction.
  floatY: number;
  // Accent color
  accent: "teal" | "green" | "blue" | "purple";
};

const TASKS: Task[] = [
  {
    icon: CalendarCheck,
    title: "Appointment confirmed",
    subtitle: "Dr. Sharma · 4:30 PM",
    top: "4%",
    left: "0%",
    delay: 0.4,
    floatY: 6,
    accent: "green",
  },
  {
    icon: Target,
    title: "Lead qualified",
    subtitle: "Acme Corp · Tier 1",
    top: "2%",
    left: "55%",
    delay: 0.55,
    floatY: -8,
    accent: "teal",
  },
  {
    icon: PhoneCall,
    title: "Call summary ready",
    subtitle: "12 min · 3 action items",
    top: "74%",
    left: "0%",
    delay: 0.7,
    floatY: -6,
    accent: "blue",
  },
  {
    icon: FileText,
    title: "Report generated",
    subtitle: "Q4 insights · 8 charts",
    top: "76%",
    left: "55%",
    delay: 0.85,
    floatY: 8,
    accent: "purple",
  },
];

const accentMap: Record<
  Task["accent"],
  { text: string; bg: string; ring: string; lineColor: string }
> = {
  teal: {
    text: "text-brand-teal",
    bg: "bg-brand-teal/10",
    ring: "ring-brand-teal/30",
    lineColor: "#5EEAD4",
  },
  green: {
    text: "text-brand-green",
    bg: "bg-brand-green/10",
    ring: "ring-brand-green/30",
    lineColor: "#00D26A",
  },
  blue: {
    text: "text-brand-blue",
    bg: "bg-brand-blue/10",
    ring: "ring-brand-blue/30",
    lineColor: "#0096FF",
  },
  purple: {
    text: "text-[#a78bfa]",
    bg: "bg-[#a78bfa]/10",
    ring: "ring-[#a78bfa]/30",
    lineColor: "#a78bfa",
  },
};

/**
 * Hero visual: floating real-world task cards orbiting a glowing AI core.
 *
 * Communicates "agentic AI" through tangible business outcomes a non-technical
 * visitor immediately understands — appointments, leads, calls, reports —
 * rather than abstract stages.
 */
export function AgentTasks({ className }: { className?: string }) {
  return (
    <div
      className={`relative aspect-square w-full max-w-lg mx-auto ${className ?? ""}`}
    >
      {/* Background ambient glow */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(94,234,212,0.18),rgba(0,150,255,0.06)_50%,transparent_70%)] blur-2xl" />

      {/* Connection lines layer */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <defs>
          {TASKS.map((t) => (
            <linearGradient
              key={t.title}
              id={`line-${t.accent}`}
              x1="0"
              y1="0"
              x2="1"
              y2="0"
            >
              <stop offset="0%" stopColor={accentMap[t.accent].lineColor} stopOpacity="0.6" />
              <stop offset="100%" stopColor={accentMap[t.accent].lineColor} stopOpacity="0" />
            </linearGradient>
          ))}
        </defs>

        {/* Lines from center (200,200) to each card position */}
        {TASKS.map((t, i) => {
          // Approx card center based on position percentages
          const cardX = parseFloat(t.left) * 4 + 80; // % of 400 + half card width
          const cardY = parseFloat(t.top) * 4 + 30;
          return (
            <motion.line
              key={t.title}
              x1="200"
              y1="200"
              x2={cardX}
              y2={cardY}
              stroke={`url(#line-${t.accent})`}
              strokeWidth="1.2"
              strokeDasharray="3 5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.5 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          );
        })}
      </svg>

      {/* Central agent core */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Pulsing rings */}
        <motion.div
          className="absolute inset-0 rounded-full bg-brand-teal/20"
          style={{ width: 116, height: 116, marginLeft: -58, marginTop: -58 }}
          animate={{ scale: [1, 1.7], opacity: [0.5, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.div
          className="absolute inset-0 rounded-full bg-brand-green/15"
          style={{ width: 116, height: 116, marginLeft: -58, marginTop: -58 }}
          animate={{ scale: [1, 1.5], opacity: [0.4, 0] }}
          transition={{
            duration: 2.6,
            delay: 1.3,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />

        {/* Core orb */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative flex h-[116px] w-[116px] flex-col items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-bg-elevated to-bg-surface shadow-[0_0_60px_-10px_rgba(94,234,212,0.5)]"
        >
          {/* Inner gradient ring */}
          <div className="absolute inset-1.5 rounded-full bg-gradient-to-br from-brand-teal/30 via-brand-green/20 to-brand-blue/30 blur-md" />

          {/* Sparkle icon — small, above the text */}
          <Sparkles
            className="relative mb-0.5 h-4 w-4 text-brand-teal"
            strokeWidth={1.8}
          />

          {/* "AI" — big, display font, gradient */}
          <span className="relative font-display text-2xl font-bold leading-none tracking-tight text-gradient-brand">
            AI
          </span>

          {/* "AGENT" — caption in mono */}
          <span className="relative mt-0.5 font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-text-secondary">
            Agent
          </span>

          {/* LIVE status badge — top-right of core */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="absolute -right-1 -top-1 flex items-center gap-1 rounded-full border border-white/15 bg-bg-base/90 px-2 py-0.5 backdrop-blur-sm"
          >
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="h-1.5 w-1.5 rounded-full bg-brand-green"
            />
            <span className="font-mono text-[9px] font-medium uppercase tracking-[0.15em] text-white">
              Live
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating task cards */}
      {TASKS.map((task) => {
        const Icon = task.icon;
        const a = accentMap[task.accent];
        return (
          <motion.div
            key={task.title}
            initial={{ opacity: 0, y: 20, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: task.delay,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ top: task.top, left: task.left }}
            className="absolute w-[45%]"
          >
            {/* Continuous gentle float */}
            <motion.div
              animate={{ y: [0, task.floatY, 0] }}
              transition={{
                duration: 4 + Math.abs(task.floatY) * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="glass-panel rounded-xl p-3 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-start gap-2.5">
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${a.bg} ${a.text} ring-1 ${a.ring}`}
                >
                  <Icon className="h-4 w-4" strokeWidth={1.8} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold text-white truncate">
                    {task.title}
                  </p>
                  <p className="text-[10px] text-text-muted truncate">
                    {task.subtitle}
                  </p>
                </div>
                {/* "Done" check mark */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: task.delay + 0.4 }}
                  className={`h-1.5 w-1.5 rounded-full ${a.text.replace("text-", "bg-")}`}
                />
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
