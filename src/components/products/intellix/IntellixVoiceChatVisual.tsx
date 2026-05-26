"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  FileText,
  Languages,
  Mic,
  PhoneCall,
  Sparkles,
} from "lucide-react";

/**
 * Intellix — bespoke hero visual.
 *
 * Concept: Voice + Chat Live (split-pane composition).
 *
 *   • Left panel — outbound AI voice call in progress: pulsing audio
 *     waveform, live transcript ribbon, sentiment + intent chips, REC pill.
 *   • Right panel — multilingual chat thread with rose-themed bubbles
 *     (English, Hindi, Spanish), AI-typing indicator at the bottom.
 *   • Footer strip — knowledge-base feed bar showing "47 docs" feeding both
 *     panels (the single source of truth grounding every response).
 *
 * Brand accent: rose (`text-brand-rose`, `bg-brand-rose/X` …).
 *
 * RESPONSIVE STRATEGY (iPhone SE 375 → Nest Hub Max 1280):
 *   • <640px:   single column — voice panel on top, chat panel below,
 *               knowledge bar at the bottom. All cards full-width.
 *   • 640–1023: 2-column split (voice 1fr / chat 1fr), KB bar full-width.
 *   • ≥1024px:  same split, slightly more breathing room + brighter glow.
 */
export function IntellixVoiceChatVisual() {
  return (
    <div className="relative isolate mx-auto w-full max-w-[560px]">
      {/* Ambient rose glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-12 -z-10 rounded-[40px] bg-brand-rose/[0.10] blur-3xl"
      />

      {/* Frame */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-bg-elevated/80 backdrop-blur-md shadow-glow-rose">
        {/* Chrome — Intellix.live + AI Assistant pill */}
        <div className="flex items-center justify-between border-b border-white/5 px-3 py-2.5 sm:px-4">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 items-center justify-center">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-brand-rose/60" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-brand-rose" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white">
              Intellix.live
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-rose/30 bg-brand-rose/10 px-2 py-0.5">
            <Sparkles className="h-3 w-3 text-brand-rose" />
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-brand-rose-soft">
              AI Assistant
            </span>
          </div>
        </div>

        {/* Body — split-pane: voice (left) + chat (right) */}
        <div className="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 sm:p-4">
          <VoicePanel />
          <ChatPanel />
        </div>

        {/* Footer — Knowledge base feeding both panels */}
        <KnowledgeBaseStrip />
      </div>

      {/* Floating "Multilingual" callout — anchored to the right edge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="absolute -bottom-3 right-4 hidden items-center gap-2 rounded-full border border-brand-rose/40 bg-bg-base/90 px-2.5 py-1.5 backdrop-blur-md sm:inline-flex"
      >
        <Languages className="h-3 w-3 text-brand-rose" />
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-rose-soft">
          7 languages live
        </span>
      </motion.div>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Voice panel — left side                                                     */
/* ───────────────────────────────────────────────────────────────────────── */

function VoicePanel() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-bg-base/60 p-3">
      {/* Top header: voice icon + REC pill */}
      <div className="flex items-center justify-between border-b border-white/5 pb-2">
        <div className="flex items-center gap-1.5">
          <PhoneCall className="h-3 w-3 text-brand-rose" />
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white">
            Voice call
          </span>
        </div>
        <div className="inline-flex items-center gap-1 rounded-md border border-brand-rose/30 bg-brand-rose/10 px-1.5 py-0.5">
          <motion.span
            aria-hidden
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.4, repeat: Infinity }}
            className="h-1 w-1 rounded-full bg-brand-rose"
          />
          <span className="font-mono text-[8px] uppercase tracking-wider text-brand-rose">
            REC
          </span>
        </div>
      </div>

      {/* Lead identity */}
      <div className="mt-2.5 flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-brand-rose/40 to-brand-violet/30">
          <span className="font-mono text-[9px] font-semibold text-white">
            R
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-display text-[11px] font-semibold text-white">
            Riya Mehta
          </p>
          <p className="font-mono text-[8px] uppercase tracking-wider text-text-faint">
            Outbound · 0:42
          </p>
        </div>
      </div>

      {/* Audio waveform — pulsing bars */}
      <div className="mt-2.5 flex h-7 items-end gap-0.5">
        {Array.from({ length: 22 }, (_, i) => {
          const h = 25 + ((i * 7919) % 65);
          return (
            <motion.span
              key={i}
              animate={{ scaleY: [0.5, 1, 0.6, 1.1, 0.7] }}
              transition={{
                duration: 1.4 + (i % 4) * 0.2,
                repeat: Infinity,
                delay: i * 0.04,
                ease: "easeInOut",
              }}
              style={{ height: `${h}%` }}
              className="w-[3px] origin-bottom rounded-sm bg-brand-rose/60"
            />
          );
        })}
      </div>

      {/* Live transcript snippet */}
      <div className="mt-2.5 rounded-lg border border-white/10 bg-white/[0.02] p-2">
        <p className="font-mono text-[8px] uppercase tracking-wider text-text-faint">
          Transcript
        </p>
        <p className="mt-1 line-clamp-2 text-[10px] leading-snug text-text-secondary">
          &ldquo;Yes, I&apos;d like to know about your premium plan and the
          renewal options for next quarter…&rdquo;
        </p>
      </div>

      {/* Sentiment + intent chips */}
      <div className="mt-2.5 flex flex-wrap gap-1.5">
        <span className="inline-flex items-center gap-1 rounded-md border border-brand-green/30 bg-brand-green/10 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-brand-green">
          <CheckCircle2 className="h-2.5 w-2.5" />
          Positive
        </span>
        <span className="rounded-md border border-brand-rose/20 bg-brand-rose/[0.08] px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-brand-rose">
          Intent: renew
        </span>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Chat panel — right side                                                     */
/* ───────────────────────────────────────────────────────────────────────── */

const CHAT_LINES = [
  {
    sender: "user" as const,
    lang: "EN",
    text: "Hi, what's the difference between Pro and Enterprise?",
  },
  {
    sender: "ai" as const,
    lang: "EN",
    text: "Pro covers up to 10 users with standard support; Enterprise adds SSO, audit logs, and dedicated success.",
  },
  {
    sender: "user" as const,
    lang: "HI",
    text: "क्या enterprise में Hindi support मिलेगा?",
  },
];

function ChatPanel() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-bg-base/60 p-3">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/5 pb-2">
        <div className="flex items-center gap-1.5">
          <Mic className="h-3 w-3 text-brand-rose" />
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white">
            Chat widget
          </span>
        </div>
        <span className="inline-flex items-center gap-1 rounded-md border border-brand-rose/20 bg-brand-rose/[0.08] px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-brand-rose-soft">
          <Languages className="h-2.5 w-2.5" />
          Multi-lang
        </span>
      </div>

      {/* Chat lines */}
      <div className="mt-2.5 flex flex-col gap-1.5">
        {CHAT_LINES.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: 0.2 + i * 0.18 }}
            className={
              line.sender === "ai"
                ? "self-start max-w-[88%] rounded-lg rounded-bl-none border border-brand-rose/20 bg-brand-rose/[0.08] px-2 py-1.5"
                : "self-end max-w-[88%] rounded-lg rounded-br-none border border-white/10 bg-white/[0.04] px-2 py-1.5"
            }
          >
            <div className="flex items-baseline gap-1.5">
              <span
                className={
                  line.sender === "ai"
                    ? "font-mono text-[7px] uppercase tracking-wider text-brand-rose"
                    : "font-mono text-[7px] uppercase tracking-wider text-text-faint"
                }
              >
                {line.sender === "ai" ? "Intellix" : "Customer"}
              </span>
              <span className="font-mono text-[7px] tabular-nums text-text-faint">
                {line.lang}
              </span>
            </div>
            <p className="mt-0.5 text-[10px] leading-snug text-white">
              {line.text}
            </p>
          </motion.div>
        ))}

        {/* AI-typing bubble */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: 0.85, duration: 0.4 }}
          className="self-start rounded-lg rounded-bl-none border border-brand-rose/20 bg-brand-rose/[0.08] px-2.5 py-2"
        >
          <div className="flex items-center gap-1">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                aria-hidden
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
                className="h-1 w-1 rounded-full bg-brand-rose"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Knowledge base strip — feeds both panels                                    */
/* ───────────────────────────────────────────────────────────────────────── */

function KnowledgeBaseStrip() {
  return (
    <div className="border-t border-white/5 bg-gradient-to-r from-brand-rose/[0.04] via-brand-rose/[0.06] to-brand-rose/[0.04] px-3 py-2.5 sm:px-4">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <FileText className="h-3 w-3 text-brand-rose" />
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white">
            Knowledge base
          </span>
          <span className="hidden font-mono text-[9px] uppercase tracking-wider text-text-faint sm:inline">
            · grounding both
          </span>
        </div>
        <span className="font-display text-[11px] font-semibold tabular-nums text-white sm:text-xs">
          47
          <span className="ml-0.5 font-mono text-[8px] font-normal uppercase tracking-wider text-text-muted">
            docs
          </span>
        </span>
      </div>
      <div className="mt-1.5 flex h-1 overflow-hidden rounded-full bg-white/[0.05]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "78%" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 1.1,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-full rounded-full bg-gradient-to-r from-brand-rose to-brand-violet"
        />
      </div>
    </div>
  );
}
