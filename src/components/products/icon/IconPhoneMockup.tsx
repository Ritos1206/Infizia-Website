"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  CheckCircle2,
  ChevronRight,
  Mail,
  MessagesSquare,
  Mic,
  PhoneCall,
  Sparkles,
  Video,
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Animated phone-shaped visual showing iCON's five canonical screens.
 *
 * Auto-rotates every 4 seconds. Each screen is a CSS-drawn UI card —
 * no real screenshots needed. When real assets land later, swap each
 * `Screen*` component with an Image.
 */

type ScreenKey = "lead" | "call" | "meeting" | "mom" | "chat";

const SCREENS: { key: ScreenKey; label: string }[] = [
  { key: "lead", label: "Lead briefing" },
  { key: "call", label: "Live call" },
  { key: "meeting", label: "Meeting capture" },
  { key: "mom", label: "MoM email" },
  { key: "chat", label: "Chat with meeting" },
];

export function IconPhoneMockup() {
  const [active, setActive] = useState<ScreenKey>("lead");

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => {
        const idx = SCREENS.findIndex((s) => s.key === prev);
        return SCREENS[(idx + 1) % SCREENS.length].key;
      });
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative mx-auto flex w-full max-w-md items-center justify-center">
      {/* Floating label chips around the phone */}
      <FloatingChips />

      {/* Phone frame */}
      <div className="relative">
        {/* Ambient glow behind phone */}
        <div className="pointer-events-none absolute -inset-12 -z-10 rounded-[60px] bg-brand-teal/[0.12] blur-[60px]" />
        <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[60px] bg-brand-blue/[0.06] blur-[40px]" />

        <div
          className="relative h-[560px] w-[280px] rounded-[44px] border border-white/10 bg-gradient-to-b from-bg-elevated to-bg-surface p-3 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.04)_inset]"
          aria-hidden
        >
          {/* Speaker / camera notch */}
          <div className="absolute left-1/2 top-3 z-20 flex h-7 w-28 -translate-x-1/2 items-center justify-center gap-2 rounded-full bg-black/80">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-teal/40" />
            <span className="h-1 w-12 rounded-full bg-white/10" />
          </div>

          {/* Screen */}
          <div className="relative h-full w-full overflow-hidden rounded-[34px] bg-bg-base">
            {/* Status bar */}
            <div className="flex items-center justify-between px-5 pt-3 text-[9px] font-mono text-text-faint">
              <span>9:41</span>
              <span className="flex items-center gap-1">
                <span className="h-1 w-1 rounded-full bg-brand-teal" />
                iCON
              </span>
              <span>100%</span>
            </div>

            {/* Active screen */}
            <div className="relative mt-2 h-[calc(100%-1.5rem)] px-4">
              <AnimatePresence mode="wait">
                {active === "lead" && (
                  <motion.div
                    key="lead"
                    {...screenAnim}
                    className="absolute inset-x-4 top-0"
                  >
                    <ScreenLead />
                  </motion.div>
                )}
                {active === "call" && (
                  <motion.div
                    key="call"
                    {...screenAnim}
                    className="absolute inset-x-4 top-0"
                  >
                    <ScreenCall />
                  </motion.div>
                )}
                {active === "meeting" && (
                  <motion.div
                    key="meeting"
                    {...screenAnim}
                    className="absolute inset-x-4 top-0"
                  >
                    <ScreenMeeting />
                  </motion.div>
                )}
                {active === "mom" && (
                  <motion.div
                    key="mom"
                    {...screenAnim}
                    className="absolute inset-x-4 top-0"
                  >
                    <ScreenMoM />
                  </motion.div>
                )}
                {active === "chat" && (
                  <motion.div
                    key="chat"
                    {...screenAnim}
                    className="absolute inset-x-4 top-0"
                  >
                    <ScreenChat />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Screen indicator dots */}
        <div className="absolute -bottom-12 left-1/2 flex -translate-x-1/2 items-center gap-2">
          {SCREENS.map((s) => (
            <button
              key={s.key}
              type="button"
              aria-label={`Show ${s.label}`}
              onClick={() => setActive(s.key)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                active === s.key
                  ? "w-8 bg-brand-teal"
                  : "w-1.5 bg-white/20 hover:bg-white/40",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Screens (CSS-drawn UI mockups — illustrative until real screenshots land) */
/* -------------------------------------------------------------------------- */

const screenAnim = {
  initial: { opacity: 0, scale: 0.97 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.97 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

function ScreenLead() {
  return (
    <div className="flex flex-col gap-3 pt-4">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-teal/15 text-brand-teal">
          <Building2 className="h-4 w-4" />
        </div>
        <div className="flex-1">
          <p className="text-[11px] font-semibold text-white">Acme Corp</p>
          <p className="text-[9px] text-text-faint">Series B · 320 emp · SaaS</p>
        </div>
        <span className="rounded-full bg-brand-teal/15 px-1.5 py-0.5 text-[8px] font-mono uppercase tracking-wider text-brand-teal">
          AI brief
        </span>
      </div>

      {/* Funding card */}
      <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
        <p className="text-[9px] font-mono uppercase tracking-wider text-text-faint">
          Latest funding
        </p>
        <p className="mt-1 text-sm font-semibold text-white">$45M Series B</p>
        <p className="text-[9px] text-text-muted">Led by Sequoia · Mar 2026</p>
      </div>

      {/* News chips */}
      <div className="space-y-1.5">
        <p className="text-[9px] font-mono uppercase tracking-wider text-text-faint">
          Recent signals
        </p>
        {[
          "Hired new CTO from Stripe",
          "Launched AI billing module",
          "Opened SF office, +40 hires",
        ].map((n) => (
          <div
            key={n}
            className="flex items-start gap-1.5 rounded-lg bg-white/[0.02] px-2 py-1.5"
          >
            <Sparkles className="mt-0.5 h-2.5 w-2.5 shrink-0 text-brand-teal" />
            <p className="text-[9.5px] leading-tight text-text-secondary">
              {n}
            </p>
          </div>
        ))}
      </div>

      {/* Decision makers */}
      <div className="rounded-xl border border-brand-teal/20 bg-brand-teal/[0.04] p-2.5">
        <p className="text-[9px] font-mono uppercase tracking-wider text-brand-teal">
          Right person to call
        </p>
        <div className="mt-1.5 flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-gradient-to-br from-brand-teal to-brand-blue" />
          <div>
            <p className="text-[10px] font-semibold text-white">Priya Menon</p>
            <p className="text-[8.5px] text-text-muted">VP Procurement</p>
          </div>
          <button
            className="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-brand-teal text-bg-base"
            aria-label="Call"
          >
            <PhoneCall className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
}

function ScreenCall() {
  return (
    <div className="flex h-full flex-col items-center justify-between pt-4 pb-6">
      {/* Top: contact card */}
      <div className="flex flex-col items-center">
        <div className="relative">
          <motion.div
            className="absolute inset-0 rounded-full bg-brand-teal/30"
            animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
          <div className="relative h-16 w-16 rounded-full bg-gradient-to-br from-brand-teal to-brand-blue" />
        </div>
        <p className="mt-4 text-sm font-semibold text-white">Priya Menon</p>
        <p className="text-[10px] text-text-muted">Acme Corp · VP Procurement</p>
        <div className="mt-2 flex items-center gap-1.5 rounded-full border border-brand-teal/30 bg-brand-teal/10 px-2 py-1">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-teal" />
          <span className="font-mono text-[9px] uppercase tracking-wider text-brand-teal">
            Recording · 02:47
          </span>
        </div>
      </div>

      {/* Audio waveform */}
      <div className="flex items-center justify-center gap-0.5">
        {Array.from({ length: 24 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-0.5 rounded-full bg-brand-teal"
            animate={{
              height: [
                4 + (i % 5) * 2,
                12 + (i % 7) * 3,
                4 + (i % 5) * 2,
              ],
            }}
            transition={{
              duration: 0.6 + (i % 3) * 0.2,
              repeat: Infinity,
              delay: i * 0.05,
            }}
          />
        ))}
      </div>

      {/* Live transcript ticker */}
      <div className="w-full rounded-xl border border-white/5 bg-white/[0.02] p-2.5">
        <p className="text-[8.5px] font-mono uppercase tracking-wider text-text-faint">
          Live transcript
        </p>
        <p className="mt-1 text-[10px] leading-relaxed text-text-secondary">
          &ldquo;...we&apos;d need GST e-invoicing and a 14-day trial before
          we sign{" "}
          <motion.span
            className="inline-block h-2 w-1 bg-brand-teal align-middle"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity }}
          />
          &rdquo;
        </p>
      </div>

      {/* End call button */}
      <button
        className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500 shadow-[0_8px_20px_-4px_rgba(239,68,68,0.6)]"
        aria-label="End call"
      >
        <PhoneCall className="h-5 w-5 rotate-[135deg] text-white" />
      </button>
    </div>
  );
}

function ScreenMeeting() {
  return (
    <div className="flex flex-col gap-3 pt-4">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-teal/15 text-brand-teal">
          <Video className="h-4 w-4" />
        </div>
        <div className="flex-1">
          <p className="text-[11px] font-semibold text-white">Meeting captured</p>
          <p className="text-[9px] text-text-faint">42 min · 4 speakers</p>
        </div>
        <span className="flex items-center gap-1 rounded-full bg-brand-green/15 px-1.5 py-0.5 text-[8px] font-mono uppercase tracking-wider text-brand-green">
          <CheckCircle2 className="h-2.5 w-2.5" />
          Done
        </span>
      </div>

      {/* Diarized transcript snippets */}
      <div className="space-y-1.5">
        {[
          { speaker: "Priya M.", color: "bg-brand-teal", text: "We need this by end of Q2." },
          { speaker: "Rahul S.", color: "bg-brand-blue", text: "Procurement can move in 2 weeks." },
          { speaker: "You", color: "bg-brand-green", text: "I'll send the SoW today." },
        ].map((m) => (
          <div key={m.speaker} className="flex items-start gap-1.5">
            <span className={cn("mt-1 h-2 w-2 shrink-0 rounded-full", m.color)} />
            <div className="flex-1 rounded-lg bg-white/[0.02] px-2 py-1.5">
              <p className="text-[8.5px] font-mono text-text-faint">{m.speaker}</p>
              <p className="text-[9.5px] leading-tight text-text-secondary">{m.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mood + insights */}
      <div className="grid grid-cols-2 gap-1.5">
        <div className="rounded-lg border border-white/5 bg-white/[0.02] p-2">
          <p className="text-[8px] font-mono uppercase tracking-wider text-text-faint">
            Mood
          </p>
          <p className="mt-0.5 text-[10px] font-semibold text-brand-green">
            Positive · 7.4
          </p>
        </div>
        <div className="rounded-lg border border-white/5 bg-white/[0.02] p-2">
          <p className="text-[8px] font-mono uppercase tracking-wider text-text-faint">
            Action items
          </p>
          <p className="mt-0.5 text-[10px] font-semibold text-white">3 extracted</p>
        </div>
      </div>

      {/* Action items list */}
      <div className="rounded-xl border border-brand-teal/20 bg-brand-teal/[0.04] p-2.5">
        <p className="text-[9px] font-mono uppercase tracking-wider text-brand-teal">
          Action items
        </p>
        <div className="mt-1.5 space-y-1">
          {[
            "Send SoW with pricing — You",
            "Schedule legal review — Priya",
            "Confirm Q2 timeline — Rahul",
          ].map((a) => (
            <div key={a} className="flex items-start gap-1.5">
              <CheckCircle2 className="mt-0.5 h-2.5 w-2.5 shrink-0 text-brand-teal" />
              <p className="text-[9.5px] leading-tight text-text-secondary">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ScreenMoM() {
  return (
    <div className="flex flex-col gap-3 pt-4">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-teal/15 text-brand-teal">
          <Mail className="h-4 w-4" />
        </div>
        <p className="flex-1 text-[11px] font-semibold text-white">
          Minutes of meeting
        </p>
      </div>

      {/* Email card */}
      <div className="rounded-xl border border-white/5 bg-white/[0.02]">
        <div className="border-b border-white/5 px-3 py-2">
          <p className="text-[8.5px] font-mono uppercase tracking-wider text-text-faint">
            To
          </p>
          <p className="text-[10px] text-text-secondary">
            priya@acmecorp.com, rahul@acmecorp.com
          </p>
        </div>
        <div className="border-b border-white/5 px-3 py-2">
          <p className="text-[8.5px] font-mono uppercase tracking-wider text-text-faint">
            Subject
          </p>
          <p className="text-[10px] font-semibold text-white">
            Acme × Infizia · Discovery sync · MoM
          </p>
        </div>
        <div className="px-3 py-2.5">
          <p className="text-[10px] leading-relaxed text-text-secondary">
            Hi Priya, Rahul —<br />
            Thanks for the time today. Quick recap and next steps:
          </p>
          <div className="mt-2 space-y-1">
            {[
              "Roll-out target: Q2 2026",
              "Procurement window: 2 weeks",
              "SoW + pricing: from us, today",
            ].map((b) => (
              <div key={b} className="flex items-start gap-1.5">
                <span className="mt-1 h-1 w-1 rounded-full bg-brand-teal" />
                <p className="text-[9.5px] leading-tight text-text-secondary">
                  {b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Send button */}
      <motion.button
        className="flex items-center justify-center gap-2 rounded-xl bg-brand-teal py-2.5 text-bg-base shadow-[0_8px_20px_-4px_rgba(94,234,212,0.5)]"
        whileTap={{ scale: 0.97 }}
      >
        <Mail className="h-3.5 w-3.5" />
        <span className="text-[11px] font-semibold">Send MoM</span>
        <ChevronRight className="h-3 w-3" />
      </motion.button>

      <p className="text-center text-[9px] font-mono uppercase tracking-wider text-text-faint">
        Drafted by iCON · You ship it
      </p>
    </div>
  );
}

function ScreenChat() {
  return (
    <div className="flex h-full flex-col gap-2 pt-4">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-teal/15 text-brand-teal">
          <MessagesSquare className="h-4 w-4" />
        </div>
        <div className="flex-1">
          <p className="text-[11px] font-semibold text-white">
            Chat with the meeting
          </p>
          <p className="text-[9px] text-text-faint">Acme · Discovery sync</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-2 overflow-hidden">
        <ChatBubble role="user">
          What did the CTO commit to?
        </ChatBubble>
        <ChatBubble role="ai">
          Rahul (CTO) committed to moving procurement within 2 weeks and
          aligning his team on Q2 rollout.
        </ChatBubble>
        <ChatBubble role="user">
          What was Priya hesitant about?
        </ChatBubble>
        <ChatBubble role="ai" typing>
          Priya raised concerns around GST e-invoicing &amp; a 14-day trial
          before contract signature.
        </ChatBubble>
      </div>

      {/* Input */}
      <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2">
        <Mic className="h-3 w-3 text-text-faint" />
        <p className="flex-1 text-[10px] text-text-faint">Ask anything…</p>
        <button
          className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-teal text-bg-base"
          aria-label="Send"
        >
          <ChevronRight className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
}

function ChatBubble({
  role,
  typing,
  children,
}: {
  role: "user" | "ai";
  typing?: boolean;
  children: React.ReactNode;
}) {
  if (role === "user") {
    return (
      <div className="flex justify-end">
        <div className="max-w-[80%] rounded-xl rounded-br-sm bg-brand-teal/15 px-2.5 py-1.5">
          <p className="text-[10px] leading-snug text-white">{children}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-start">
      <div className="max-w-[85%] rounded-xl rounded-bl-sm bg-white/[0.04] px-2.5 py-1.5">
        <p className="flex items-center gap-1.5 text-[8.5px] font-mono uppercase tracking-wider text-brand-teal">
          <Sparkles className="h-2.5 w-2.5" />
          iCON
        </p>
        <p className="mt-1 text-[10px] leading-snug text-text-secondary">
          {children}
          {typing && (
            <motion.span
              className="ml-1 inline-block h-1.5 w-1 bg-brand-teal align-middle"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity }}
            />
          )}
        </p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Floating status chips around the phone (decoration)                       */
/* -------------------------------------------------------------------------- */

function FloatingChips() {
  const chips = [
    {
      icon: Sparkles,
      label: "AI brief ready",
      pos: "left-[-12%] top-[8%]",
      delay: 0,
    },
    {
      icon: PhoneCall,
      label: "Auto-recorded",
      pos: "right-[-14%] top-[28%]",
      delay: 1.2,
    },
    {
      icon: CheckCircle2,
      label: "Action items: 3",
      pos: "left-[-14%] bottom-[28%]",
      delay: 2.4,
    },
    {
      icon: Mail,
      label: "MoM sent",
      pos: "right-[-10%] bottom-[8%]",
      delay: 3.6,
    },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block">
      {chips.map((c) => {
        const Icon = c.icon;
        return (
          <motion.div
            key={c.label}
            className={cn(
              "absolute flex items-center gap-2 rounded-full border border-white/10 bg-bg-elevated/90 px-3 py-1.5 backdrop-blur",
              c.pos,
            )}
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: [10, 0, 0, -10],
            }}
            transition={{
              duration: 5,
              delay: c.delay,
              repeat: Infinity,
              repeatDelay: 11,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Icon className="h-3 w-3 text-brand-teal" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-white">
              {c.label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}
