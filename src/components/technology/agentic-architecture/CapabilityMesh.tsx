"use client";

import { motion } from "framer-motion";
import {
  User,
  Webhook,
  Clock,
  Zap,
  Database,
  Globe,
  FileText,
  Wrench,
  Brain,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Capability Mesh — bespoke hero for /technology/agentic-architecture.
 *
 * Idiom: 3-layer mesh diagram. Top row = 4 entry points (User, API,
 * Webhook, Schedule) feeding into a middle layer of 6 agent nodes
 * connected by indigo edges with traveling pulses. Bottom row = 4
 * tools/integrations (DB, API, Browser, Files). Memory + Guardrails
 * sidecar pills float on the right edge.
 *
 * Distinct from MeetrixMeetingHub (one-input → six-outputs spoke),
 * Agent Reasoning Console (vertical reasoning trace), AgentTrioLoop
 * (3-vertex triangle) — this is a multi-LAYER mesh showing system
 * architecture, not a single-agent or single-flow story.
 */
export function CapabilityMesh() {
  // Agent node grid: 3 columns × 2 rows
  const agents = [
    { row: 0, col: 0, label: "Intake", state: "done" as const },
    { row: 0, col: 1, label: "Plan", state: "done" as const },
    { row: 0, col: 2, label: "Research", state: "live" as const },
    { row: 1, col: 0, label: "Validate", state: "queued" as const },
    { row: 1, col: 1, label: "Decide", state: "queued" as const },
    { row: 1, col: 2, label: "Execute", state: "queued" as const },
  ];

  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.5rem] bg-brand-indigo/[0.10] blur-3xl" />

      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-bg-elevated/70 backdrop-blur">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brand-indigo/0 via-brand-indigo/60 to-brand-indigo/0" />

        {/* Chrome */}
        <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-brand-indigo/60" />
              <span className="relative h-2 w-2 rounded-full bg-brand-indigo" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
              agent.mesh · live
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand-indigo">
            6 agents · 4 tools
          </span>
        </div>

        {/* Body — 3 layers stacked vertically */}
        <div className="relative px-5 py-5">
          {/* SVG edges between layers */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <defs>
              <linearGradient id="meshEdge" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#818CF8" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#818CF8" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#818CF8" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            {/* Entry → Agents (4 lines fanning down) */}
            {[15, 38, 62, 85].map((x, i) => (
              <motion.line
                key={`top-${i}`}
                x1={x}
                y1={12}
                x2={50}
                y2={38}
                stroke="url(#meshEdge)"
                strokeWidth={0.4}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
              />
            ))}
            {/* Agents → Tools (4 lines fanning down) */}
            {[15, 38, 62, 85].map((x, i) => (
              <motion.line
                key={`bot-${i}`}
                x1={50}
                y1={62}
                x2={x}
                y2={88}
                stroke="url(#meshEdge)"
                strokeWidth={0.4}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 + i * 0.1 }}
              />
            ))}
            {/* Traveling pulse on Research → tools edge */}
            <motion.circle
              cx={50}
              cy={62}
              r={0.8}
              fill="#A5B4FC"
              animate={{
                cy: [62, 88, 88],
                cx: [50, 38, 38],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
            />
          </svg>

          {/* Layer 1 — Entry points */}
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-text-faint">
              Entry · 4
            </p>
            <div className="mt-2 grid grid-cols-4 gap-2">
              {[
                { icon: User, label: "User" },
                { icon: Zap, label: "API" },
                { icon: Webhook, label: "Webhook" },
                { icon: Clock, label: "Schedule" },
              ].map((e) => {
                const Icon = e.icon;
                return (
                  <div
                    key={e.label}
                    className="flex flex-col items-center gap-1 rounded-lg border border-white/10 bg-bg-base/50 px-2 py-1.5"
                  >
                    <Icon className="h-3.5 w-3.5 text-text-secondary" />
                    <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-text-muted">
                      {e.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Layer 2 — Agent nodes (3×2 grid) */}
          <div className="mt-7 mb-7 relative z-10">
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-brand-indigo">
              Agents · 6 collaborating
            </p>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {agents.map((a) => (
                <div
                  key={a.label}
                  className={cn(
                    "relative flex items-center gap-1.5 rounded-lg border px-2 py-1.5 transition-all",
                    a.state === "live"
                      ? "border-brand-indigo/50 bg-brand-indigo/15 shadow-glow-indigo"
                      : a.state === "done"
                        ? "border-white/15 bg-white/[0.04]"
                        : "border-white/8 bg-white/[0.02]",
                  )}
                >
                  {a.state === "live" && (
                    <span className="absolute -top-1 -right-1 flex h-2 w-2">
                      <span className="absolute inset-0 animate-ping rounded-full bg-brand-indigo/60" />
                      <span className="relative h-2 w-2 rounded-full bg-brand-indigo" />
                    </span>
                  )}
                  <Brain
                    className={cn(
                      "h-3 w-3",
                      a.state === "live"
                        ? "text-brand-indigo"
                        : a.state === "done"
                          ? "text-text-secondary"
                          : "text-text-faint",
                    )}
                  />
                  <span
                    className={cn(
                      "font-mono text-[9px] uppercase tracking-[0.12em]",
                      a.state === "live"
                        ? "text-brand-indigo"
                        : a.state === "done"
                          ? "text-text-secondary"
                          : "text-text-faint",
                    )}
                  >
                    {a.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Layer 3 — Tools / integrations */}
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-text-faint">
              Tools · 4
            </p>
            <div className="mt-2 grid grid-cols-4 gap-2">
              {[
                { icon: Database, label: "DB" },
                { icon: Globe, label: "Browse" },
                { icon: FileText, label: "Files" },
                { icon: Wrench, label: "API" },
              ].map((t) => {
                const Icon = t.icon;
                return (
                  <div
                    key={t.label}
                    className="flex flex-col items-center gap-1 rounded-lg border border-brand-indigo/20 bg-brand-indigo/[0.04] px-2 py-1.5"
                  >
                    <Icon className="h-3.5 w-3.5 text-brand-indigo" />
                    <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-brand-indigo">
                      {t.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer — sidecars */}
        <div className="flex items-center gap-3 border-t border-white/[0.06] px-5 py-3">
          <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5">
            <Database className="h-2.5 w-2.5 text-text-secondary" />
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-text-secondary">
              Memory · short + long
            </span>
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-brand-indigo/30 bg-brand-indigo/10 px-2 py-0.5">
            <ShieldCheck className="h-2.5 w-2.5 text-brand-indigo" />
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-brand-indigo">
              Guardrails · on
            </span>
          </span>
        </div>
      </div>

      {/* Floating chips */}
      <motion.div
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute -top-3 -right-2 hidden lg:flex items-center gap-1.5 rounded-full border border-brand-indigo/30 bg-bg-elevated/95 px-3 py-1.5 shadow-glow-indigo backdrop-blur"
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inset-0 animate-ping rounded-full bg-brand-indigo/60" />
          <span className="relative h-1.5 w-1.5 rounded-full bg-brand-indigo" />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-brand-indigo">
          Trace · 142 spans
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute -bottom-3 -left-2 flex items-center gap-1.5 rounded-full border border-white/15 bg-bg-elevated/95 px-3 py-1.5 backdrop-blur"
      >
        <Brain className="h-3 w-3 text-brand-indigo" />
        <span className="font-mono text-[10px] text-text-secondary">
          1,284 tasks · today
        </span>
      </motion.div>
    </div>
  );
}
