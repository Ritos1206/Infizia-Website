"use client";

import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Token Stream Forge — bespoke hero for /technology/llm-genai.
 *
 * Idiom: horizontal token stream. Input prompt on the left flows into
 * a "forge" mid-section that streams tokens left-to-right with a typing
 * cursor, and a structured response card on the right materializes
 * field-by-field. Above the stream: model selector chips (one active
 * with pulsing ring). Below: parameters strip + safety guardrails pill.
 *
 * Distinct from Agent Reasoning Console (vertical reasoning trace) —
 * this is HORIZONTAL token streaming. Distinct from DocumindExtraction
 * (document with sweep) — this is a model forge, not document scan.
 */
export function TokenStreamForge() {
  // Tokens streaming through the forge — labels reused on a loop
  const tokens = [
    "The",
    "quarterly",
    "review",
    "shows",
    "a",
    "12%",
    "lift",
    "in",
    "qualified",
    "leads",
    "across",
    "the",
    "Bengal",
    "region",
    ".",
  ];

  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      {/* Ambient violet glow */}
      <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.5rem] bg-brand-violet/[0.10] blur-3xl" />

      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-bg-elevated/70 backdrop-blur">
        {/* Top hairline shimmer */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brand-violet/0 via-brand-violet/60 to-brand-violet/0" />

        {/* Chrome bar */}
        <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-brand-violet/60" />
              <span className="relative h-2 w-2 rounded-full bg-brand-violet" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
              llm.forge · live
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand-violet">
            Generate · stream
          </span>
        </div>

        {/* Model selector chips */}
        <div className="flex flex-wrap items-center gap-1.5 border-b border-white/[0.06] px-5 py-3">
          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-text-faint mr-1">
            Model
          </span>
          {[
            { name: "Foundation A", active: true },
            { name: "Foundation B", active: false },
            { name: "Open · 13B", active: false },
            { name: "Mini · fast", active: false },
          ].map((m) => (
            <span
              key={m.name}
              className={cn(
                "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[10px]",
                m.active
                  ? "border-brand-violet/50 bg-brand-violet/15 text-brand-violet"
                  : "border-white/10 bg-white/[0.02] text-text-muted",
              )}
            >
              {m.active && (
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-brand-violet/60" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-brand-violet" />
                </span>
              )}
              {m.name}
            </span>
          ))}
        </div>

        {/* Prompt → Tokens → Response forge body */}
        <div className="grid grid-cols-12 gap-3 px-5 py-5">
          {/* Prompt panel */}
          <div className="col-span-4 rounded-xl border border-white/[0.06] bg-bg-base/50 p-3">
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-text-faint">
              Prompt
            </p>
            <p className="mt-2 text-[11px] leading-relaxed text-text-secondary">
              Summarize the Q3 sales transcript in 3 bullets, then generate a
              follow-up email to the client.
            </p>
            <div className="mt-3 flex flex-wrap gap-1">
              <span className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-1.5 py-0.5 font-mono text-[9px] text-text-muted">
                role: AE
              </span>
              <span className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-1.5 py-0.5 font-mono text-[9px] text-text-muted">
                ctx: 2,847 tok
              </span>
            </div>
          </div>

          {/* Token stream centre */}
          <div className="col-span-4 relative flex flex-col items-center">
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-text-faint">
              Tokens · streaming
            </p>
            <div className="mt-2 flex h-32 w-full flex-col items-stretch justify-start gap-1 overflow-hidden rounded-xl border border-brand-violet/20 bg-gradient-to-b from-brand-violet/[0.06] to-bg-base/40 p-2">
              {/* Animated horizontal token chips */}
              <div className="flex flex-wrap gap-1">
                {tokens.slice(0, 8).map((t, i) => (
                  <motion.span
                    key={`a-${i}`}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: [0, 1, 1, 0.4], x: [-6, 0, 0, 0] }}
                    transition={{
                      duration: 4,
                      delay: i * 0.18,
                      repeat: Infinity,
                      repeatDelay: 1.6,
                    }}
                    className="inline-flex rounded-md border border-brand-violet/30 bg-brand-violet/10 px-1 py-0 font-mono text-[9px] leading-tight text-brand-violet"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
              <div className="mt-1 flex flex-wrap gap-1">
                {tokens.slice(8).map((t, i) => (
                  <motion.span
                    key={`b-${i}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 1, 0.4] }}
                    transition={{
                      duration: 4,
                      delay: 1.4 + i * 0.18,
                      repeat: Infinity,
                      repeatDelay: 1.6,
                    }}
                    className="inline-flex rounded-md border border-brand-violet/20 bg-brand-violet/[0.06] px-1 py-0 font-mono text-[9px] leading-tight text-text-secondary"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
              {/* Live cursor */}
              <div className="mt-auto flex items-center gap-1.5">
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block h-2 w-0.5 bg-brand-violet"
                />
                <span className="font-mono text-[9px] text-text-faint">
                  42 tok/s
                </span>
              </div>
            </div>
          </div>

          {/* Response panel */}
          <div className="col-span-4 rounded-xl border border-brand-violet/30 bg-brand-violet/[0.04] p-3">
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-brand-violet">
              Response · 96%
            </p>
            <div className="mt-2 space-y-1.5 text-[10px] leading-relaxed text-text-secondary">
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.2 }}
                className="flex items-start gap-1"
              >
                <span className="text-brand-violet">·</span>
                <span>Q3 closed up 12% — Bengal led growth.</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.7 }}
                className="flex items-start gap-1"
              >
                <span className="text-brand-violet">·</span>
                <span>Top 3 reps drove 60% of pipeline.</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 2.2 }}
                className="flex items-start gap-1"
              >
                <span className="text-brand-violet">·</span>
                <span>Action: schedule QBR with Acme.</span>
              </motion.div>
            </div>
            <div className="mt-3 inline-flex items-center gap-1 rounded-full border border-brand-green/30 bg-brand-green/10 px-1.5 py-0.5">
              <Sparkles className="h-2.5 w-2.5 text-brand-green" />
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-brand-green">
                Email · ready
              </span>
            </div>
          </div>
        </div>

        {/* Params strip */}
        <div className="flex flex-wrap items-center gap-3 border-t border-white/[0.06] px-5 py-3">
          {[
            { k: "temp", v: "0.7" },
            { k: "top-p", v: "0.9" },
            { k: "max", v: "2,048" },
            { k: "ctx", v: "32k" },
          ].map((p) => (
            <span
              key={p.k}
              className="inline-flex items-center gap-1 font-mono text-[10px] text-text-muted tabular-nums"
            >
              <span className="text-text-faint">{p.k}</span>
              <span className="text-white">{p.v}</span>
            </span>
          ))}
          <span className="ml-auto inline-flex items-center gap-1 rounded-full border border-brand-violet/30 bg-brand-violet/10 px-2 py-0.5">
            <ShieldCheck className="h-2.5 w-2.5 text-brand-violet" />
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-brand-violet">
              PII redacted · guardrails on
            </span>
          </span>
        </div>
      </div>

      {/* Floating chips */}
      <motion.div
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute -top-3 -right-2 hidden lg:flex items-center gap-1.5 rounded-full border border-brand-violet/30 bg-bg-elevated/95 px-3 py-1.5 shadow-glow-violet backdrop-blur"
      >
        <Zap className="h-3 w-3 text-brand-violet" />
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-brand-violet">
          p95 · 1.2s
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute -bottom-3 -left-2 flex items-center gap-1.5 rounded-full border border-white/15 bg-bg-elevated/95 px-3 py-1.5 backdrop-blur"
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inset-0 animate-ping rounded-full bg-brand-violet/60" />
          <span className="relative h-1.5 w-1.5 rounded-full bg-brand-violet" />
        </span>
        <span className="font-mono text-[10px] text-text-secondary">
          1.2M tokens · today
        </span>
      </motion.div>
    </div>
  );
}
