"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUp,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock,
  PhoneCall,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import type { ShowcaseMoment } from "@/components/products/ProductShowcase";

/**
 * Four scenario visuals for iCON's ProductShowcase slider.
 * Each one is a desktop-style UI fragment that shows iCON in a real
 * sales situation — different from the phone hero which cycles through
 * mobile screens.
 */

export const ICON_SHOWCASE_MOMENTS: ShowcaseMoment[] = [
  {
    id: "morning",
    kicker: "Monday · 8:42 AM",
    title: "Walk in already briefed.",
    body: "Open iCON to find every meeting and call on your day pre-loaded with company intel — funding, news, decision makers, last touchpoints. No more scrambling through tabs.",
    visual: <ScenarioMorning />,
  },
  {
    id: "field",
    kicker: "Tuesday · client lobby",
    title: "Live Meeting on. Conversation captured.",
    body: "Tap Live Meeting before walking into a customer office. iCON listens, transcribes, separates speakers, and tags action items — so you walk out with the work already done.",
    visual: <ScenarioField />,
  },
  {
    id: "research",
    kicker: "Wednesday · research deep-dive",
    title: "Ask the company anything.",
    body: "After iCON pulls a 360° company brief, chat with it. Get grounded answers to messy questions — about products, hiring patterns, procurement preferences — without a single Google tab.",
    visual: <ScenarioResearch />,
  },
  {
    id: "wrap",
    kicker: "Friday · 6:14 PM",
    title: "Pipeline closes itself.",
    body: "iCON pulls up your pipeline view: every deal advanced or stalled this week, every action item in flight. You scan, ship two emails, and head home.",
    visual: <ScenarioWrap />,
  },
];

/* -------------------------------------------------------------------------- */
/*  Scenario visuals                                                          */
/* -------------------------------------------------------------------------- */

function ScenarioMorning() {
  const items = [
    {
      time: "9:30",
      name: "Acme Corp · Discovery",
      tag: "Series B · 320 emp",
      ready: true,
    },
    {
      time: "11:00",
      name: "Northgate Bio · Demo",
      tag: "Healthcare · IPO 2024",
      ready: true,
    },
    {
      time: "14:15",
      name: "Volta Partners · Q3 review",
      tag: "Existing · Tier 1",
      ready: true,
    },
    {
      time: "16:00",
      name: "Helix Cloud · Cold intro",
      tag: "Lead · 47 employees",
      ready: false,
    },
  ];

  return (
    <div className="relative">
      {/* Browser frame */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-bg-surface shadow-2xl">
        {/* Tab bar */}
        <div className="flex items-center gap-2 border-b border-white/5 bg-bg-base px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/40" />
          </div>
          <div className="ml-3 flex h-7 items-center gap-2 rounded-md bg-white/[0.04] px-3 text-[11px] font-mono text-text-faint">
            <Sparkles className="h-3 w-3 text-brand-teal" />
            iCON · Today
          </div>
        </div>

        {/* Body */}
        <div className="space-y-3 p-5">
          <div className="flex items-center justify-between">
            <p className="font-display text-base font-semibold text-white">
              Today · 4 conversations
            </p>
            <p className="font-mono text-[10px] uppercase tracking-wider text-brand-teal">
              All briefed by AI
            </p>
          </div>

          {items.map((it, i) => (
            <motion.div
              key={it.time}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2.5"
            >
              <div className="font-mono text-xs text-text-faint">{it.time}</div>
              <div className="h-6 w-px bg-white/10" />
              <div className="flex-1 min-w-0">
                <p className="truncate text-sm font-semibold text-white">
                  {it.name}
                </p>
                <p className="truncate text-xs text-text-muted">{it.tag}</p>
              </div>
              {it.ready ? (
                <span className="flex items-center gap-1 rounded-full bg-brand-teal/10 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-brand-teal">
                  <CheckCircle2 className="h-2.5 w-2.5" />
                  Brief ready
                </span>
              ) : (
                <span className="flex items-center gap-1 rounded-full bg-white/5 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-text-faint">
                  <Clock className="h-2.5 w-2.5" />
                  Generating
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ScenarioField() {
  return (
    <div className="relative">
      {/* Live meeting card */}
      <div className="overflow-hidden rounded-2xl border border-brand-teal/30 bg-bg-surface shadow-[0_30px_80px_-20px_rgba(94,234,212,0.3)]">
        {/* Status bar */}
        <div className="flex items-center justify-between border-b border-white/5 bg-bg-base px-5 py-3">
          <div className="flex items-center gap-2">
            <motion.span
              className="h-2 w-2 rounded-full bg-brand-teal"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.4, repeat: Infinity }}
            />
            <span className="font-mono text-xs uppercase tracking-wider text-brand-teal">
              Live Meeting · Recording · 12:08
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-wider text-text-faint">
            Acme Corp office
          </span>
        </div>

        {/* Speakers */}
        <div className="grid grid-cols-3 gap-3 border-b border-white/5 p-5">
          {[
            { name: "Priya M.", role: "VP Procurement", color: "from-brand-teal to-brand-blue" },
            { name: "Rahul S.", role: "CTO", color: "from-brand-blue to-brand-green" },
            { name: "You", role: "AE · Infizia", color: "from-brand-green to-brand-teal" },
          ].map((s) => (
            <div key={s.name} className="text-center">
              <div className="relative mx-auto h-12 w-12">
                <motion.div
                  className="absolute inset-0 rounded-full bg-brand-teal/30"
                  animate={{ scale: [1, 1.3], opacity: [0.5, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                />
                <div className={`relative h-full w-full rounded-full bg-gradient-to-br ${s.color}`} />
              </div>
              <p className="mt-2 text-xs font-semibold text-white">{s.name}</p>
              <p className="text-[10px] text-text-muted">{s.role}</p>
            </div>
          ))}
        </div>

        {/* Live transcript */}
        <div className="space-y-2 p-5">
          <p className="font-mono text-[10px] uppercase tracking-wider text-text-faint">
            Live transcript
          </p>
          {[
            { speaker: "Priya", color: "text-brand-teal", text: "We're already past the trial phase. Show me the rollout plan." },
            { speaker: "Rahul", color: "text-brand-blue", text: "And what's the integration cost on top of subscription?" },
            { speaker: "You", color: "text-brand-green", text: "Standard rollout is 3 weeks, integration is included." },
          ].map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="rounded-lg bg-white/[0.02] px-3 py-2"
            >
              <p className={`font-mono text-[10px] uppercase tracking-wider ${m.color}`}>
                {m.speaker}
              </p>
              <p className="mt-0.5 text-sm leading-snug text-text-secondary">
                {m.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Action items being captured */}
        <div className="border-t border-brand-teal/20 bg-brand-teal/[0.04] p-4">
          <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-brand-teal">
            <Sparkles className="h-3 w-3" />
            Action items being captured · 2 so far
          </p>
        </div>
      </div>
    </div>
  );
}

function ScenarioResearch() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-5">
      {/* Company brief panel */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-bg-surface md:col-span-2">
        <div className="border-b border-white/5 bg-bg-base px-4 py-3">
          <p className="flex items-center gap-2 text-sm font-semibold text-white">
            <Building2 className="h-4 w-4 text-brand-teal" />
            Acme Corp
          </p>
        </div>
        <div className="space-y-3 p-4 text-xs">
          {[
            { k: "Founded", v: "2017" },
            { k: "Employees", v: "320" },
            { k: "Funding", v: "$45M Series B" },
            { k: "Stack", v: "AWS · React · Postgres" },
            { k: "ICP fit", v: "9.2 / 10" },
          ].map((row) => (
            <div key={row.k} className="flex items-center justify-between border-b border-white/5 pb-2 last:border-b-0 last:pb-0">
              <span className="text-text-faint">{row.k}</span>
              <span className="font-medium text-white">{row.v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Chat panel */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-bg-surface md:col-span-3">
        <div className="border-b border-white/5 bg-bg-base px-4 py-3">
          <p className="flex items-center gap-2 text-sm font-semibold text-white">
            <Sparkles className="h-4 w-4 text-brand-teal" />
            Chat with Acme research
          </p>
        </div>
        <div className="space-y-2.5 p-4">
          {/* User question */}
          <div className="flex justify-end">
            <div className="max-w-[80%] rounded-2xl rounded-br-md bg-brand-teal/15 px-3 py-2">
              <p className="text-xs text-white">
                Who handles procurement decisions there?
              </p>
            </div>
          </div>

          {/* AI response */}
          <div className="flex justify-start">
            <div className="max-w-[88%] rounded-2xl rounded-bl-md bg-white/[0.04] px-3 py-2">
              <p className="flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-brand-teal">
                <Sparkles className="h-2.5 w-2.5" />
                iCON
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-text-secondary">
                Priya Menon (VP Procurement, joined from Stripe in 2024) leads procurement. CTO Rahul Sharma signs off on technical purchases &gt; $50K.
              </p>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="max-w-[80%] rounded-2xl rounded-br-md bg-brand-teal/15 px-3 py-2">
              <p className="text-xs text-white">
                What product launches did they ship in 2025?
              </p>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="max-w-[88%] rounded-2xl rounded-bl-md bg-white/[0.04] px-3 py-2">
              <p className="flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-brand-teal">
                <Sparkles className="h-2.5 w-2.5" />
                iCON
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-text-secondary">
                Two majors: AI Billing module (Q1) and an enterprise SSO suite (Q3). Both indicate a shift to enterprise-tier customers
                <motion.span
                  className="ml-0.5 inline-block h-2 w-1 bg-brand-teal align-middle"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScenarioWrap() {
  const stages = [
    { name: "Discovery", count: 12, value: "₹3.2 Cr", trend: "up", color: "bg-brand-blue" },
    { name: "Demo", count: 7, value: "₹4.8 Cr", trend: "up", color: "bg-brand-teal" },
    { name: "Negotiation", count: 4, value: "₹2.1 Cr", trend: "down", color: "bg-brand-green" },
    { name: "Closed Won", count: 3, value: "₹1.6 Cr", trend: "up", color: "bg-brand-green" },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-bg-surface shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/5 bg-bg-base px-5 py-3">
        <p className="flex items-center gap-2 text-sm font-semibold text-white">
          <Briefcase className="h-4 w-4 text-brand-teal" />
          My pipeline · This week
        </p>
        <span className="font-mono text-[10px] uppercase tracking-wider text-brand-teal">
          Updated 2 min ago
        </span>
      </div>

      {/* Pipeline stages */}
      <div className="grid grid-cols-2 gap-3 p-5 md:grid-cols-4">
        {stages.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-xl border border-white/5 bg-white/[0.02] p-3"
          >
            <div className="flex items-center justify-between">
              <span className={`h-2 w-2 rounded-full ${s.color}`} />
              <span className="flex items-center gap-0.5 text-[10px] text-brand-green">
                {s.trend === "up" ? <ArrowUp className="h-2.5 w-2.5" /> : <ArrowDown className="h-2.5 w-2.5 text-text-muted" />}
              </span>
            </div>
            <p className="mt-2 font-display text-2xl font-semibold text-white">
              {s.count}
            </p>
            <p className="text-[10px] text-text-faint">{s.name}</p>
            <p className="mt-1 font-mono text-xs font-semibold text-white">
              {s.value}
            </p>
          </motion.div>
        ))}
      </div>

      {/* This week's recap */}
      <div className="border-t border-white/5 p-5">
        <p className="font-mono text-[10px] uppercase tracking-wider text-text-faint">
          This week · auto-summarized
        </p>
        <div className="mt-3 space-y-2">
          {[
            { Icon: TrendingUp, text: "3 deals advanced to Negotiation", color: "text-brand-green" },
            { Icon: PhoneCall, text: "47 calls · 11h talk-time", color: "text-brand-teal" },
            { Icon: Users, text: "5 multi-stakeholder meetings captured", color: "text-brand-blue" },
          ].map((r) => {
            const I = r.Icon;
            return (
              <div key={r.text} className="flex items-center gap-2.5 rounded-lg bg-white/[0.02] px-3 py-2">
                <I className={`h-3.5 w-3.5 ${r.color}`} />
                <p className="text-xs text-text-secondary">{r.text}</p>
                <ChevronRight className="ml-auto h-3 w-3 text-text-faint" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
