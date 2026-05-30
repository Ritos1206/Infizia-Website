"use client";

import { motion } from "framer-motion";
import {
  Mic,
  Volume2,
  Languages,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Waveform Conversation — bespoke hero for /technology/voice-ai.
 *
 * Idiom: vertical multi-turn conversation timeline. Each turn shows
 * speaker (Customer / Agent), animated waveform bars sized to that
 * turn's duration, code-mix language tag, and an ASR confidence ring.
 * The currently-streaming turn at the bottom has a Listening pulse +
 * active waveform. Right sidecar: intent classification + entity
 * extraction firing live as the customer talks.
 *
 * Distinct from MeetrixTranscriptStream (lateral diarized chat
 * bubbles) — this is voice-FIRST with waveform per turn + intent
 * pipeline as the differentiator.
 */
export function WaveformConversation() {
  const turns = [
    {
      speaker: "Customer",
      isCustomer: true,
      tag: "EN-IN",
      conf: 96,
      bars: 11,
      maxH: 14,
      text: "Hi, I want to reschedule my appointment from tomorrow to next week.",
    },
    {
      speaker: "Agent",
      isCustomer: false,
      tag: "EN-IN",
      conf: 99,
      bars: 9,
      maxH: 12,
      text: "Sure — I see your booking with Dr. Sharma at 4:30 PM. Which day next week works?",
    },
    {
      speaker: "Customer",
      isCustomer: true,
      tag: "Hi-EN",
      conf: 92,
      bars: 8,
      maxH: 16,
      text: "Tuesday morning karna hai — same doctor.",
    },
  ];

  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.5rem] bg-brand-rose/[0.10] blur-3xl" />

      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-bg-elevated/70 backdrop-blur">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brand-rose/0 via-brand-rose/60 to-brand-rose/0" />

        {/* Chrome */}
        <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-brand-rose/60" />
              <span className="relative h-2 w-2 rounded-full bg-brand-rose" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
              voice.live · 02:14
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand-rose">
            ASR · 18 languages
          </span>
        </div>

        {/* Body — 2-col on lg+, stacked on smaller */}
        <div className="grid grid-cols-1 gap-3 px-5 py-5 lg:grid-cols-12">
          {/* Conversation timeline */}
          <div className="space-y-2.5 lg:col-span-7">
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-text-faint">
              Turns · 3
            </p>
            {turns.map((t, i) => (
              <Turn
                key={i}
                speaker={t.speaker}
                isCustomer={t.isCustomer}
                tag={t.tag}
                conf={t.conf}
                bars={t.bars}
                maxH={t.maxH}
                text={t.text}
                index={i}
              />
            ))}
            {/* Active streaming turn */}
            <ActiveTurn />
          </div>

          {/* Intent + entity sidecar */}
          <div className="lg:col-span-5">
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-brand-rose">
              NLU · live
            </p>
            <div className="mt-2 space-y-2 rounded-xl border border-brand-rose/30 bg-brand-rose/[0.04] p-3">
              <div>
                <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-text-faint">
                  Intent
                </p>
                <p className="mt-0.5 inline-flex items-center gap-1 rounded-full border border-brand-rose/40 bg-brand-rose/10 px-2 py-0.5">
                  <Sparkles className="h-2.5 w-2.5 text-brand-rose" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-brand-rose">
                    Reschedule · 94%
                  </span>
                </p>
              </div>
              <div>
                <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-text-faint">
                  Entities
                </p>
                <div className="mt-1 space-y-1">
                  {[
                    { k: "doctor", v: "Dr. Sharma" },
                    { k: "old_slot", v: "Tomorrow · 4:30 PM" },
                    { k: "new_day", v: "Tuesday · morning" },
                  ].map((e) => (
                    <div
                      key={e.k}
                      className="flex items-center justify-between rounded-md border border-white/[0.06] bg-bg-base/50 px-2 py-1"
                    >
                      <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-text-faint">
                        {e.k}
                      </span>
                      <span className="text-[10px] text-text-secondary">
                        {e.v}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-text-faint">
                  Action
                </p>
                <div className="mt-1 inline-flex items-center gap-1.5 rounded-full border border-brand-green/30 bg-brand-green/10 px-2 py-0.5">
                  <CheckCircle2 className="h-2.5 w-2.5 text-brand-green" />
                  <span className="font-mono text-[10px] text-brand-green">
                    Calendar · check Tue AM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-wrap items-center gap-3 border-t border-white/[0.06] px-5 py-3">
          <span className="inline-flex items-center gap-1 rounded-full border border-brand-rose/30 bg-brand-rose/10 px-2 py-0.5">
            <Volume2 className="h-2.5 w-2.5 text-brand-rose" />
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-brand-rose">
              Barge-in · on
            </span>
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5">
            <Languages className="h-2.5 w-2.5 text-text-secondary" />
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-text-secondary">
              Code-mix · Hi-EN
            </span>
          </span>
          <span className="ml-auto font-mono text-[9px] text-text-faint tabular-nums">
            p95 · 720ms
          </span>
        </div>
      </div>

      {/* Floating chips */}
      <motion.div
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute -top-3 -right-2 hidden lg:flex items-center gap-1.5 rounded-full border border-brand-rose/30 bg-bg-elevated/95 px-3 py-1.5 shadow-glow-rose backdrop-blur"
      >
        <Mic className="h-3 w-3 text-brand-rose" />
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-brand-rose">
          Diarized · 2 spkrs
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute -bottom-3 -left-2 flex items-center gap-1.5 rounded-full border border-white/15 bg-bg-elevated/95 px-3 py-1.5 backdrop-blur"
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inset-0 animate-ping rounded-full bg-brand-rose/60" />
          <span className="relative h-1.5 w-1.5 rounded-full bg-brand-rose" />
        </span>
        <span className="font-mono text-[10px] text-text-secondary">
          84% contained · today
        </span>
      </motion.div>
    </div>
  );
}

/* ---------------- Sub-components ---------------- */

function Turn({
  speaker,
  isCustomer,
  tag,
  conf,
  bars,
  maxH,
  text,
  index,
}: {
  speaker: string;
  isCustomer: boolean;
  tag: string;
  conf: number;
  bars: number;
  maxH: number;
  text: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.15 }}
      className={cn(
        "flex items-start gap-2 rounded-xl border p-2.5",
        isCustomer
          ? "border-brand-rose/25 bg-brand-rose/[0.04]"
          : "border-white/10 bg-white/[0.02]",
      )}
    >
      {/* Speaker + confidence ring */}
      <div className="flex flex-col items-center gap-1">
        <div
          className={cn(
            "relative flex h-7 w-7 items-center justify-center rounded-full border",
            isCustomer
              ? "border-brand-rose/40 bg-brand-rose/10"
              : "border-white/15 bg-white/[0.04]",
          )}
        >
          <Mic
            className={cn(
              "h-3 w-3",
              isCustomer ? "text-brand-rose" : "text-text-secondary",
            )}
          />
          {/* Confidence ring */}
          <svg
            className="absolute inset-0 h-full w-full -rotate-90"
            viewBox="0 0 28 28"
          >
            <circle
              cx="14"
              cy="14"
              r="13"
              fill="none"
              stroke={isCustomer ? "#FB7185" : "#94A3B8"}
              strokeWidth="1"
              strokeOpacity="0.2"
            />
            <motion.circle
              cx="14"
              cy="14"
              r="13"
              fill="none"
              stroke={isCustomer ? "#FB7185" : "#CBD5E1"}
              strokeWidth="1"
              strokeDasharray={`${(conf / 100) * 81.7} 81.7`}
              initial={{ strokeDashoffset: 81.7 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
            />
          </svg>
        </div>
        <span className="font-mono text-[8px] tabular-nums text-text-faint">
          {conf}%
        </span>
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between">
          <span
            className={cn(
              "font-mono text-[9px] uppercase tracking-[0.14em]",
              isCustomer ? "text-brand-rose" : "text-text-secondary",
            )}
          >
            {speaker}
          </span>
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-1.5 py-0 font-mono text-[8px] uppercase tracking-[0.12em] text-text-muted">
            {tag}
          </span>
        </div>

        {/* Waveform bars */}
        <div className="mt-1 flex items-end gap-0.5" style={{ height: maxH }}>
          {Array.from({ length: bars }).map((_, i) => {
            // Pseudo-random heights from a deterministic pattern
            const h = 4 + ((i * 5 + index * 7) % (maxH - 3));
            return (
              <motion.span
                key={i}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                  duration: 0.25,
                  delay: index * 0.15 + 0.25 + i * 0.025,
                }}
                className={cn(
                  "block w-0.5 origin-bottom rounded-sm",
                  isCustomer ? "bg-brand-rose/70" : "bg-white/30",
                )}
                style={{ height: `${h}px` }}
              />
            );
          })}
        </div>

        <p className="mt-1.5 text-[10px] leading-snug text-text-secondary">
          {text}
        </p>
      </div>
    </motion.div>
  );
}

function ActiveTurn() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.6 }}
      className="flex items-start gap-2 rounded-xl border border-brand-rose/40 bg-brand-rose/[0.06] p-2.5 shadow-glow-rose"
    >
      <div className="flex flex-col items-center gap-1">
        <div className="relative flex h-7 w-7 items-center justify-center rounded-full border border-brand-rose/50 bg-brand-rose/15">
          <Mic className="h-3 w-3 text-brand-rose" />
          <span className="absolute -inset-0.5 animate-ping rounded-full border border-brand-rose/50" />
        </div>
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-brand-rose">
            Customer · listening
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-brand-rose/40 bg-brand-rose/10 px-1.5 py-0 font-mono text-[8px] uppercase tracking-[0.12em] text-brand-rose">
            <span className="relative flex h-1 w-1">
              <span className="absolute inset-0 animate-ping rounded-full bg-brand-rose/80" />
              <span className="relative h-1 w-1 rounded-full bg-brand-rose" />
            </span>
            Live
          </span>
        </div>
        {/* Animated streaming waveform */}
        <div className="mt-1 flex items-end gap-0.5 h-4">
          {Array.from({ length: 14 }).map((_, i) => (
            <motion.span
              key={i}
              animate={{
                scaleY: [0.4, 1, 0.6, 1.1, 0.5, 1, 0.7, 0.9, 0.5],
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                delay: i * 0.05,
                ease: "easeInOut",
              }}
              className="block w-0.5 origin-bottom rounded-sm bg-brand-rose"
              style={{ height: "12px" }}
            />
          ))}
        </div>
        <p className="mt-1.5 text-[10px] italic leading-snug text-text-muted">
          Transcribing in real time…
        </p>
      </div>
    </motion.div>
  );
}
