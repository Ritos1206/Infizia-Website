"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Layers,
  Mail,
  PhoneCall,
  Search,
  Sparkles,
  Video,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Bento-style features grid for EyeCON.
 *
 * One hero tile (the "Chat with your meeting" RAG feature, EyeCON's biggest
 * differentiator) gets a rich mini-chat UI inside it. Six standard tiles
 * follow in a uniform grid.
 *
 * This component is EyeCON-specific — it knows the feature ordering and
 * emphasis. Other products will use ProductFeatures or their own variants.
 */
export function EyeconBentoFeatures() {
  return (
    <section className="relative py-24 md:py-32">
      {/* Subtle ambient gradient line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-teal/30 to-transparent" />

      <Container>
        <SectionHeader
          kicker="Features"
          title="Built around one Lead. Built for the rep on the road."
          lede="Every capability serves the same job: keep context with the rep, on every device, through every step of the sales motion."
          gradient
        />

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Hero tile — Chat with meeting (col-span-2 on lg) */}
          <Reveal className="lg:col-span-2 lg:row-span-1">
            <HeroChatTile />
          </Reveal>

          {/* Standard tile — One Lead */}
          <Reveal delay={0.05}>
            <StandardTile
              Icon={Layers}
              title="One Lead. One timeline."
              body="Every research note, call, transcript, meeting, MoM, and email lives on one continuous timeline. No more 'where did I save that?' moments."
            />
          </Reveal>

          {/* Standard tile — Search company */}
          <Reveal delay={0.1}>
            <StandardTile
              Icon={Building2}
              title="Search any company → 360° brief"
              body="Type a name and get the full picture: funding, team, tech stack, news, decision makers — ready before you dial."
            />
          </Reveal>

          {/* Standard tile — Chat with research */}
          <Reveal delay={0.12}>
            <StandardTile
              Icon={Search}
              title="Chat with your company research"
              body="Ask plain-English questions about any company you've researched. Answers come back grounded in what EyeCON pulled — not a generic web search."
            />
          </Reveal>

          {/* Standard tile — Dialer */}
          <Reveal delay={0.15}>
            <StandardTile
              Icon={PhoneCall}
              title="One-tap dialer + auto recording"
              body="Call directly from the app. Every call is recorded, transcribed, and summarized — with action items drafted by the time you hang up."
            />
          </Reveal>

          {/* Wide tile — Live Meeting (spans 2 on lg) */}
          <Reveal delay={0.18} className="lg:col-span-2">
            <LiveMeetingTile />
          </Reveal>

          {/* Standard tile — MoM */}
          <Reveal delay={0.2}>
            <StandardTile
              Icon={Mail}
              title="Email Minutes-of-Meeting in one tap"
              body="Send a polished MoM straight from EyeCON to attendees, with action items, owners, and dates. No copy-paste, no reformatting."
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Tiles                                                                     */
/* -------------------------------------------------------------------------- */

function StandardTile({
  Icon,
  title,
  body,
}: {
  Icon: typeof Layers;
  title: string;
  body: string;
}) {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-bg-surface p-6 transition-all hover:border-brand-teal/40 md:p-7">
      {/* Hover gradient line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brand-teal/60 via-brand-teal/0 to-brand-teal/0 opacity-0 transition-opacity group-hover:opacity-100" />
      {/* Hover glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-teal/[0.08] blur-3xl opacity-0 transition-opacity group-hover:opacity-60" />

      <div className="relative">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-teal/30 bg-brand-teal/10 text-brand-teal">
          <Icon className="h-5 w-5" strokeWidth={1.6} />
        </div>
        <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-white">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-text-secondary md:text-base">
          {body}
        </p>
      </div>
    </div>
  );
}

function HeroChatTile() {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-brand-teal/20 bg-gradient-to-br from-bg-surface via-bg-surface to-brand-teal/[0.04] p-6 transition-all hover:border-brand-teal/40 md:p-8">
      {/* Top accent line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-teal/60 to-transparent" />
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-teal/[0.12] blur-3xl" />

      <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 md:items-center">
        {/* Copy */}
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-teal/30 bg-brand-teal/10 text-brand-teal">
              <Sparkles className="h-5 w-5" strokeWidth={1.6} />
            </div>
            <span className="rounded-full border border-brand-teal/30 bg-brand-teal/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-brand-teal">
              Most-loved
            </span>
          </div>

          <h3 className="mt-6 font-display text-2xl font-semibold leading-tight tracking-tight text-white md:text-3xl">
            Chat with your meeting conversation
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary md:text-base">
            After every meeting, ask EyeCON anything about what was said.
            Answers come back grounded in the actual transcript — not paraphrased,
            not summarized away.
          </p>
        </div>

        {/* Mini chat UI */}
        <div className="relative">
          <div className="space-y-2 rounded-2xl border border-white/5 bg-bg-base/80 p-4 backdrop-blur">
            <ChatBubble role="user" delay={0}>
              What did the CTO commit to?
            </ChatBubble>
            <ChatBubble role="ai" delay={0.4}>
              Move procurement within 2 weeks · Q2 rollout target
            </ChatBubble>
            <ChatBubble role="user" delay={1.2}>
              Any blockers?
            </ChatBubble>
            <ChatBubble role="ai" delay={1.6} typing>
              Priya wants GST e-invoicing &amp; a 14-day trial
            </ChatBubble>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatBubble({
  role,
  delay,
  typing,
  children,
}: {
  role: "user" | "ai";
  delay: number;
  typing?: boolean;
  children: React.ReactNode;
}) {
  const isUser = role === "user";
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={
          isUser
            ? "max-w-[85%] rounded-xl rounded-br-sm bg-brand-teal/15 px-3 py-2"
            : "max-w-[90%] rounded-xl rounded-bl-sm bg-white/[0.04] px-3 py-2"
        }
      >
        {!isUser && (
          <p className="flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-brand-teal">
            <Sparkles className="h-2.5 w-2.5" />
            EyeCON
          </p>
        )}
        <p
          className={`${
            !isUser ? "mt-1 text-text-secondary" : "text-white"
          } text-xs leading-snug`}
        >
          {children}
          {typing && (
            <motion.span
              className="ml-1 inline-block h-2 w-1 bg-brand-teal align-middle"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity }}
            />
          )}
        </p>
      </div>
    </motion.div>
  );
}

function LiveMeetingTile() {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-bg-surface p-6 transition-all hover:border-brand-teal/40 md:p-8">
      {/* Top accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brand-teal/60 via-brand-teal/0 to-brand-teal/0 opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-5 md:gap-8 md:items-center">
        {/* Left: copy */}
        <div className="md:col-span-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-teal/30 bg-brand-teal/10 text-brand-teal">
            <Video className="h-5 w-5" strokeWidth={1.6} />
          </div>
          <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-white md:text-2xl">
            Live Meeting capture — physical or video
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary md:text-base">
            Open Live Meeting before a face-to-face or video call. EyeCON listens,
            transcribes with speaker separation, reads sentiment, and surfaces
            action items in minutes — not hours.
          </p>
        </div>

        {/* Right: mini diarized transcript visual */}
        <div className="md:col-span-2">
          <div className="space-y-1.5 rounded-xl border border-white/5 bg-bg-base/60 p-3">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <motion.span
                  className="h-1.5 w-1.5 rounded-full bg-brand-teal"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.4, repeat: Infinity }}
                />
                <span className="font-mono text-[9px] uppercase tracking-wider text-brand-teal">
                  Recording · 12:08
                </span>
              </span>
            </div>
            {[
              { who: "Priya", color: "bg-brand-teal", text: "Show me the rollout plan." },
              { who: "Rahul", color: "bg-brand-blue", text: "Integration cost?" },
              { who: "You", color: "bg-brand-green", text: "3 weeks, included." },
            ].map((m) => (
              <div key={m.who} className="flex items-start gap-2 rounded-lg bg-white/[0.02] px-2 py-1.5">
                <span className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${m.color}`} />
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[8.5px] uppercase tracking-wider text-text-faint">
                    {m.who}
                  </p>
                  <p className="text-[10px] leading-tight text-text-secondary">
                    {m.text}
                  </p>
                </div>
              </div>
            ))}

            <div className="rounded-lg border border-brand-teal/20 bg-brand-teal/[0.04] px-2 py-1.5">
              <p className="font-mono text-[8.5px] uppercase tracking-wider text-brand-teal">
                Action items · 2 captured
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Use additional features that didn't fit, as compact pill row */}
      <div className="relative mt-6 flex flex-wrap items-center gap-2 border-t border-white/5 pt-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
          + Captures
        </span>
        {["Diarized transcript", "Mood read", "Insights", "Auto action items"].map(
          (chip) => (
            <span
              key={chip}
              className="rounded-full border border-white/10 bg-white/[0.02] px-2 py-0.5 text-[10px] text-text-secondary"
            >
              {chip}
            </span>
          ),
        )}
      </div>
    </div>
  );
}
