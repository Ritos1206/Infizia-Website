"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle, Sparkles } from "lucide-react";
import { ACCENTS } from "@/lib/product-accents";
import { cn } from "@/lib/utils";
import { AGENTIC_TRIO_NODES } from "@/content/services/ai-agentic-systems";

/**
 * Agentic AI — Agent Reasoning Console hero (v3 · D-70).
 *
 * Replaces the v1 triangle and v2 wider-triangle layouts. The triangle
 * shape created two problems both versions struggled with:
 *   1. Top half of the card was visual vacuum (one node at top, wide
 *      gap before the bottom row).
 *   2. The "reasoning" centre tile was always the smallest element,
 *      so the actual chain-of-thought content was unreadable at hero
 *      scale.
 *
 * v3 flips the priority: the reasoning trace IS the hero. The 3 agents
 * become a thin top strip showing who's collaborating, the trace fills
 * the middle (the bulk of the card), and a confidence bar grounds the
 * footer.
 *
 * Layout (top → bottom):
 *   • Chrome     — status pill + task label
 *   • Agent strip — 3 horizontal agent tiles (Perceive · Reason · Act),
 *                   active agent ringed + "Active" pill
 *   • Reasoning trace — 5 streaming reasoning steps, each tagged with
 *                   the agent that produced it + state indicator
 *                   (done / live / pending)
 *   • Footer     — animated confidence bar + outcome pill
 *
 * Idiom note: still distinct from MeetrixMeetingHub (one-input-six-outputs
 * spoke layout), InferaIntelligenceBrief (3x2 multi-agent panel grid),
 * LedgerTicker (financial journal stream), and ConversationCascade
 * (3-col channels→console→tags). The combination of an agent strip +
 * agent-attributed reasoning trace + confidence bar is genuinely new.
 *
 * Export name kept as `AgentTrioLoop` so page.tsx import doesn't change.
 *
 * Responsive: same vertical flow on mobile and desktop — the layout is
 * already vertical-first.
 */
export function AgentTrioLoop() {
  const a = ACCENTS.violet;

  /**
   * 5 reasoning steps streaming through the agent loop.
   * Step 4 is "live" (currently being executed); step 5 is "pending"
   * (queued, will run next).
   */
  const REASONING_TRACE = [
    {
      ts: "14:00:42",
      agentIdx: 0, // Perceive
      step: "Pulled order #4821 from CRM",
      status: "done" as const,
    },
    {
      ts: "14:00:43",
      agentIdx: 0,
      step: "Customer history loaded · 14 prior orders, no disputes",
      status: "done" as const,
    },
    {
      ts: "14:00:51",
      agentIdx: 1, // Reason
      step: "Refund window: 7 days · within policy → eligible",
      status: "done" as const,
    },
    {
      ts: "14:01:02",
      agentIdx: 1,
      step: "No fraud signals · routing to executor",
      status: "live" as const,
    },
    {
      ts: "14:01:08",
      agentIdx: 2, // Act
      step: "Drafting refund + email confirmation",
      status: "pending" as const,
    },
  ];

  // The "active" agent shown in the strip — whichever agent is doing
  // the live step.
  const ACTIVE_AGENT_IDX = REASONING_TRACE.find((r) => r.status === "live")
    ?.agentIdx;

  return (
    <div className="relative">
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -inset-8 rounded-[2rem] blur-3xl opacity-60",
          a.glow,
        )}
      />

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-bg-elevated to-bg-surface p-5 shadow-card md:p-6">
        {/* Chrome */}
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-brand-violet shadow-[0_0_8px_rgba(167,139,250,0.7)]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary">
              Agent loop · Live
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
            Task · Refund · #4821
          </span>
        </div>

        {/* Agent strip — 3 tiles laid horizontally */}
        <div className="mt-5">
          <div className="flex items-center justify-between">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-text-faint">
              Agents
            </p>
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-text-faint">
              3 collaborating
            </span>
          </div>

          <div className="mt-2 grid grid-cols-3 gap-2">
            {AGENTIC_TRIO_NODES.map((node, i) => {
              const Icon = node.icon;
              const isActive = i === ACTIVE_AGENT_IDX;
              return (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.45,
                    delay: 0.1 + i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={cn(
                    "relative rounded-xl border bg-bg-base p-2.5",
                    isActive ? cn(a.border, a.shadow) : "border-white/10",
                  )}
                >
                  {/* Top accent bar on active agent */}
                  {isActive && (
                    <div
                      aria-hidden
                      className={cn(
                        "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r",
                        a.topLine,
                      )}
                    />
                  )}

                  <div className="flex items-center gap-2">
                    <div
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border",
                        a.border,
                        a.bgSoft,
                        a.text,
                      )}
                    >
                      <Icon className="h-4 w-4" strokeWidth={1.7} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-text-faint">
                        Agent · 0{i + 1}
                      </p>
                      <p className="font-display text-[12px] font-semibold leading-tight text-white">
                        {node.label}
                      </p>
                    </div>
                  </div>

                  {/* Active pill or quiet state */}
                  <div className="mt-2 flex items-center justify-between">
                    <p className="text-[9px] leading-tight text-text-muted line-clamp-1">
                      {node.detail.split(" · ")[0]}
                    </p>
                    {isActive ? (
                      <span
                        className={cn(
                          "inline-flex items-center gap-1 rounded-full border bg-bg-base px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.14em]",
                          a.border,
                          a.text,
                        )}
                      >
                        <span
                          className={cn(
                            "h-1 w-1 rounded-full animate-pulse",
                            a.bg,
                          )}
                        />
                        Active
                      </span>
                    ) : (
                      <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-text-faint">
                        Idle
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Reasoning trace — the hero of the visual */}
        <div className="mt-5 rounded-xl border border-white/10 bg-bg-base/60 p-3">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <div className="flex items-center gap-1.5">
              <Sparkles
                className={cn("h-3 w-3", a.text)}
                strokeWidth={1.8}
              />
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white">
                Live reasoning trace
              </span>
            </div>
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-text-faint">
              5 steps · 26 sec
            </span>
          </div>

          <div className="mt-2.5 space-y-2">
            {REASONING_TRACE.map((entry, i) => {
              const agent = AGENTIC_TRIO_NODES[entry.agentIdx];
              const AgentIcon = agent.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.4,
                    delay: 0.6 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={cn(
                    "flex items-start gap-2.5 rounded-md border bg-bg-elevated/40 p-2",
                    entry.status === "live"
                      ? cn(a.border, "shadow-glow-violet")
                      : "border-white/5",
                    entry.status === "pending" && "opacity-60",
                  )}
                >
                  {/* State indicator */}
                  <div className="mt-0.5 shrink-0">
                    {entry.status === "done" && (
                      <CheckCircle2
                        className="h-3.5 w-3.5 text-brand-green"
                        strokeWidth={2}
                      />
                    )}
                    {entry.status === "live" && (
                      <span className="relative flex h-3.5 w-3.5 items-center justify-center">
                        <span
                          className={cn(
                            "absolute h-full w-full animate-ping rounded-full opacity-50",
                            a.bg,
                          )}
                        />
                        <span
                          className={cn("h-2 w-2 rounded-full", a.bg)}
                        />
                      </span>
                    )}
                    {entry.status === "pending" && (
                      <Circle
                        className="h-3.5 w-3.5 text-text-faint"
                        strokeWidth={1.7}
                      />
                    )}
                  </div>

                  {/* Step number + content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-1.5">
                      <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-text-faint">
                        Step {(i + 1).toString().padStart(2, "0")}
                      </span>
                      <span className="font-mono text-[9px] tabular-nums text-text-faint">
                        {entry.ts}
                      </span>
                    </div>
                    <p
                      className={cn(
                        "mt-0.5 text-[11px] leading-snug",
                        entry.status === "live"
                          ? "text-white"
                          : entry.status === "pending"
                          ? "text-text-muted"
                          : "text-text-secondary",
                      )}
                    >
                      {entry.step}
                    </p>
                  </div>

                  {/* Agent attribution badge */}
                  <div
                    className={cn(
                      "flex shrink-0 items-center gap-1 rounded-md border bg-bg-base px-1.5 py-1",
                      a.border,
                    )}
                  >
                    <AgentIcon
                      className={cn("h-3 w-3", a.text)}
                      strokeWidth={1.8}
                    />
                    <span
                      className={cn(
                        "font-mono text-[9px] uppercase tracking-[0.14em]",
                        a.text,
                      )}
                    >
                      {agent.label}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Footer — confidence bar + outcome pill */}
        <div className="mt-5">
          <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-text-faint">
            <span>Confidence</span>
            <span className={a.text}>96%</span>
          </div>
          <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/5">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "96%" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 1.2,
                delay: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={cn(
                "h-full rounded-full bg-gradient-to-r",
                a.progressFrom,
                a.progressTo,
              )}
            />
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-3 border-t border-white/5 pt-3 text-[10px] font-mono uppercase tracking-[0.18em] text-text-faint">
            <span>3 agents · 5 steps · audited end-to-end</span>
            <span
              className={cn(
                "ml-auto inline-flex items-center gap-1.5",
                a.text,
              )}
            >
              <span
                className={cn(
                  "h-1.5 w-1.5 rounded-full animate-pulse-soft",
                  a.bg,
                )}
              />
              Action ready · 1 step left
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
