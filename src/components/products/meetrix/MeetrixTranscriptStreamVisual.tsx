"use client";

import { motion } from "framer-motion";
import {
  CheckSquare,
  Languages,
  MessageCircle,
  Mic,
  Sparkles,
} from "lucide-react";

/**
 * Meetrix — bespoke hero visual.
 *
 * Concept: Live Transcript Stream.
 *
 *   • A diarized transcript card with 4 speaker bubbles streaming in
 *     (Riya · Karan · Ananya · Riya), each color-coded by speaker.
 *   • Right column: action items being extracted as the meeting runs.
 *   • Footer: language detection pill + chat-FAB hint.
 *
 * Brand accent: violet (`text-brand-violet`, `bg-brand-violet/X` …).
 *
 * RESPONSIVE STRATEGY (iPhone SE 375 → Nest Hub Max 1280):
 *   • <640px:   transcript full-width, action items below
 *   • 640–1023: 2-col split (transcript 7/12, actions 5/12)
 *   • ≥1024px:  same 2-col split with more breathing room
 */
export function MeetrixTranscriptStreamVisual() {
  return (
    <div className="relative isolate mx-auto w-full max-w-[560px]">
      {/* Ambient violet glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-12 -z-10 rounded-[40px] bg-brand-violet/[0.10] blur-3xl"
      />

      {/* Card frame */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-bg-elevated/80 backdrop-blur-md shadow-glow-violet">
        {/* Chrome */}
        <div className="flex items-center justify-between border-b border-white/5 px-3 py-2.5 sm:px-4">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 items-center justify-center">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-red-500/60" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-red-500" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white">
              Recording
            </span>
            <span className="hidden text-text-faint sm:inline">·</span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint sm:inline">
              12:48 elapsed
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-violet/30 bg-brand-violet/10 px-2 py-0.5">
            <Sparkles className="h-3 w-3 text-brand-violet" />
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-brand-violet-soft">
              Meetrix.live
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 gap-3 p-3 sm:grid-cols-12 sm:p-4">
          {/* Transcript stream */}
          <div className="sm:col-span-7">
            <PanelLabel icon={Mic} label="Live transcript" />
            <div className="mt-2.5 flex flex-col gap-2">
              {TRANSCRIPT.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.18 }}
                  className="flex items-start gap-2"
                >
                  <SpeakerAvatar
                    initial={line.initial}
                    color={line.color}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display text-[11px] font-semibold text-white">
                        {line.name}
                      </span>
                      <span className="font-mono text-[9px] tabular-nums text-text-faint">
                        {line.time}
                      </span>
                    </div>
                    <p className="mt-0.5 text-[11px] leading-snug text-text-secondary sm:text-xs">
                      {line.text}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              <div className="mt-1 flex items-center gap-2">
                <SpeakerAvatar initial="R" color="violet" small />
                <div className="flex gap-1">
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
                      className="h-1 w-1 rounded-full bg-brand-violet"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Footer: language pill */}
            <div className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-brand-violet/20 bg-brand-violet/5 px-2 py-1">
              <Languages className="h-3 w-3 text-brand-violet" />
              <span className="font-mono text-[9px] uppercase tracking-wider text-brand-violet-soft">
                EN-IN · auto-detected
              </span>
            </div>
          </div>

          {/* Action items extraction */}
          <div className="sm:col-span-5">
            <PanelLabel icon={CheckSquare} label="Action items" />
            <div className="mt-2.5 flex flex-col gap-1.5">
              {ACTIONS.map((a, i) => (
                <motion.div
                  key={a.text}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.18 }}
                  className="rounded-lg border border-brand-violet/20 bg-brand-violet/[0.06] p-2"
                >
                  <p className="text-[10px] leading-snug text-white sm:text-[11px]">
                    {a.text}
                  </p>
                  <p className="mt-1 font-mono text-[8px] uppercase tracking-wider text-brand-violet">
                    {a.owner} · {a.due}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Chat hint */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2 py-1"
            >
              <MessageCircle className="h-3 w-3 text-brand-violet" />
              <span className="font-mono text-[9px] uppercase tracking-wider text-text-secondary">
                Ask the meeting
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating "Summary ready" callout */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.6 }}
        className="absolute -bottom-3 left-4 hidden items-center gap-2 rounded-full border border-brand-violet/40 bg-bg-base/90 px-2.5 py-1.5 backdrop-blur-md sm:inline-flex"
      >
        <Sparkles className="h-3 w-3 text-brand-violet" />
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-violet-soft">
          Summary + email ready
        </span>
      </motion.div>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */

const TRANSCRIPT = [
  {
    name: "Riya",
    initial: "R",
    color: "violet" as const,
    time: "00:14",
    text: "Acme is asking for the Q3 deck by Friday — can we get the latest numbers in?",
  },
  {
    name: "Karan",
    initial: "K",
    color: "blue" as const,
    time: "00:31",
    text: "I'll pull the conversion rates from the dashboard tonight.",
  },
  {
    name: "Ananya",
    initial: "A",
    color: "green" as const,
    time: "00:48",
    text: "Same for me on the pipeline section. I'll send a draft tomorrow morning.",
  },
];

const ACTIONS = [
  {
    text: "Send Q3 deck to Acme",
    owner: "Riya",
    due: "Fri",
  },
  {
    text: "Pull conversion rates",
    owner: "Karan",
    due: "Tonight",
  },
  {
    text: "Draft pipeline section",
    owner: "Ananya",
    due: "Tomorrow",
  },
];

function PanelLabel({
  icon: Icon,
  label,
}: {
  icon: typeof Mic;
  label: string;
}) {
  return (
    <div className="flex items-center gap-1.5 border-b border-white/5 pb-2">
      <Icon className="h-3 w-3 text-brand-violet" />
      <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white">
        {label}
      </span>
    </div>
  );
}

function SpeakerAvatar({
  initial,
  color,
  small = false,
}: {
  initial: string;
  color: "violet" | "blue" | "green";
  small?: boolean;
}) {
  const bgClass =
    color === "violet"
      ? "bg-brand-violet/20 text-brand-violet"
      : color === "blue"
        ? "bg-brand-blue/20 text-brand-blue"
        : "bg-brand-green/20 text-brand-green";
  const sizeClass = small ? "h-4 w-4 text-[8px]" : "h-5 w-5 text-[9px]";
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full font-mono font-semibold ${sizeClass} ${bgClass}`}
    >
      {initial}
    </span>
  );
}
