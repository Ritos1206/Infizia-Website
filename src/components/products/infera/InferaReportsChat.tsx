"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import {
  INFERA_CHAT_SUGGESTIONS,
  INFERA_CHAT_THREAD,
  INFERA_SAMPLE_REPORTS,
} from "@/content/products/infera";

/**
 * Infera — "Chat with all your reports" mid-page section.
 *
 * Concept: the conversational search idiom. Show the rep's report
 * archive on the left and a chat panel on the right where they ask
 * plain-English questions across every report they've ever run —
 * grounded entirely in their own data, with citations.
 *
 *   Left  — Reports archive (8 past reports, prospect + vertical + date)
 *   Right — Chat panel:
 *           • User: "Which of my companies has the best GenAI opportunity?"
 *           • Infera: "Vidyamitra EdTech ranks highest. Strong existing
 *             cloud footprint, structured data, recent ₹120 Cr Series B.
 *             Cited from your 08 May report — pages 3 and 7."
 *             [chip] Vidyamitra EdTech · 08 May  [chip] Skill Sphere · 01 May
 *           • User: "Compare the two EdTech companies I analysed."
 *           • Infera: typing…
 *
 * Below the chat: 4 suggestion pills with more example questions.
 *
 * Idiom is distinct from every shipped mid-page:
 *   • Performix: chapter-style cycle (4 horizontal stages)
 *   • Meetrix: hub-and-spoke (centre + 6 outputs)
 *   • Intellix: 5-tools-to-1 converging lines (before/after)
 *   • Learnova: winding 4-station path
 *   • LMS: side-by-side 3-persona mini-mockups
 *   • E-Commerce: vertical 5-layer architectural stack
 *   • Infera: "memory across deals" — split archive + chat
 *
 * RESPONSIVE STRATEGY:
 *   • <1024px: stack — reports list on top (compact), chat below
 *   • ≥1024px: 5-col / 7-col split (reports list left, chat right)
 */
export function InferaReportsChat() {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 lg:py-32">
      {/* Backdrop */}
      <div className="absolute inset-0 -z-10 bg-bg-surface/40" />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-cyan/[0.06] blur-3xl" />
        <div className="absolute top-1/3 right-1/4 h-[360px] w-[360px] translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-sky/[0.06] blur-3xl" />
      </div>

      <Container>
        <SectionHeader
          kicker="Memory across deals"
          title="Chat with every report your team has ever run."
          lede="Plain-English questions, answered against your own analysis. Compare prospects, find decision makers, surface funding angles — all grounded in the work your team has already done."
        />

        <Reveal delay={0.1}>
          <div className="mt-14 grid grid-cols-1 gap-5 lg:mt-16 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-5">
              <ReportsArchive />
            </div>
            <div className="lg:col-span-7">
              <ChatPanel />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Reports archive — left side                                                  */
/* ───────────────────────────────────────────────────────────────────────── */

function ReportsArchive() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-bg-elevated/40 backdrop-blur-md">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/5 bg-bg-base/40 px-4 py-3">
        <div className="flex items-center gap-2">
          <FileText className="h-3.5 w-3.5 text-brand-cyan" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white">
            Reports archive
          </span>
        </div>
        <span className="font-mono text-[9px] uppercase tracking-wider text-text-faint">
          {INFERA_SAMPLE_REPORTS.length} reports
        </span>
      </div>

      {/* Reports list */}
      <ul className="divide-y divide-white/5">
        {INFERA_SAMPLE_REPORTS.map((report, i) => (
          <motion.li
            key={report.name}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
            className="flex items-center justify-between px-4 py-2.5 transition-colors hover:bg-white/[0.02]"
          >
            <div className="min-w-0 flex-1">
              <p className="truncate font-display text-[13px] font-semibold text-white">
                {report.name}
              </p>
              <p className="truncate font-mono text-[9px] uppercase tracking-wider text-text-faint">
                {report.vertical}
              </p>
            </div>
            <span className="ml-3 shrink-0 font-mono text-[9px] tabular-nums text-text-faint">
              {report.date}
            </span>
          </motion.li>
        ))}
      </ul>

      {/* Footer */}
      <div className="border-t border-white/5 bg-bg-base/40 px-4 py-2.5">
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-text-faint">
            All searchable · cited
          </span>
          <span className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-brand-cyan">
            <Sparkles className="h-2.5 w-2.5" />
            Indexed
          </span>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Chat panel — right side                                                      */
/* ───────────────────────────────────────────────────────────────────────── */

function ChatPanel() {
  return (
    <div className="overflow-hidden rounded-2xl border border-brand-cyan/30 bg-bg-elevated/40 backdrop-blur-md shadow-glow-cyan">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/5 bg-bg-base/40 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2 items-center justify-center">
            <span className="absolute h-2 w-2 animate-ping rounded-full bg-brand-cyan/60" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-brand-cyan" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white">
            Ask Infera
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-brand-cyan-soft">
          Grounded · cited
        </span>
      </div>

      {/* Chat thread */}
      <div className="flex flex-col gap-3 px-4 py-4 sm:px-5">
        {INFERA_CHAT_THREAD.map((msg, i) => (
          <ChatMessage key={i} msg={msg} index={i} />
        ))}

        {/* Typing indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: 1.2 }}
          className="self-start rounded-2xl rounded-bl-md border border-brand-cyan/20 bg-brand-cyan/[0.05] px-3 py-2"
        >
          <div className="flex items-center gap-1">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                aria-hidden
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
                className="h-1 w-1 rounded-full bg-brand-cyan"
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Suggestions strip */}
      <div className="border-t border-white/5 bg-bg-base/30 px-4 py-3 sm:px-5">
        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-text-faint">
          Try asking
        </p>
        <ul className="mt-2 flex flex-wrap gap-1.5">
          {INFERA_CHAT_SUGGESTIONS.map((s, i) => (
            <motion.li
              key={s}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: 1.4 + i * 0.06 }}
              className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-text-secondary transition-colors hover:border-brand-cyan/30 hover:text-white"
            >
              {s}
              <ArrowRight className="h-2.5 w-2.5 text-text-faint" />
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ChatMessage({
  msg,
  index,
}: {
  msg: (typeof INFERA_CHAT_THREAD)[number];
  index: number;
}) {
  const isUser = msg.sender === "user";
  // Type guard: Infera-sender messages have citations in our content shape
  const citations =
    msg.sender === "infera" && "citations" in msg ? msg.citations : undefined;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: 0.3 + index * 0.2 }}
      className={
        isUser
          ? "self-end max-w-[85%] rounded-2xl rounded-br-md border border-white/10 bg-white/[0.04] px-3 py-2 sm:max-w-[80%]"
          : "self-start max-w-[90%] rounded-2xl rounded-bl-md border border-brand-cyan/20 bg-brand-cyan/[0.05] px-3 py-2 sm:max-w-[85%]"
      }
    >
      <p className="font-mono text-[8px] uppercase tracking-wider text-text-faint">
        {isUser ? "You" : "Infera"}
      </p>
      <p className="mt-0.5 text-[13px] leading-relaxed text-white">
        {msg.text}
      </p>

      {citations && (
        <ul className="mt-2 flex flex-wrap gap-1.5 border-t border-white/5 pt-2">
          {citations.map((c) => (
            <li
              key={c}
              className="inline-flex items-center gap-1 rounded border border-brand-cyan/25 bg-brand-cyan/[0.06] px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-brand-cyan-soft"
            >
              <FileText className="h-2 w-2" strokeWidth={2} />
              {c}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
