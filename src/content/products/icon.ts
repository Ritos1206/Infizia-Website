/**
 * iCON — flagship Sales product content.
 * Source of truth: docs/DEVLOG.md → "Finalized Product Content" → iCON.
 *
 * Mirror any edits here back into the DEVLOG so the PPT deck and the page
 * stay in sync.
 */

import {
  Building2,
  Layers,
  Mail,
  MessagesSquare,
  PhoneCall,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Video,
} from "lucide-react";

import type { FlagshipProductContent } from "./types";

export const iconContent: FlagshipProductContent = {
  slug: "icon",
  name: "iCON",
  vertical: "Sales",
  accent: "teal",

  tagline: "Every lead, fully briefed. Every call, fully captured.",

  positioning:
    "iCON is the all-in-one mobile-first AI sales platform that unifies company research, calling, and meeting intelligence around a single Lead record. Reps walk into every conversation fully briefed, and walk out with the call recorded, summarized, and action-itemed automatically. No more juggling CRM, dialer, research tools, and note apps — every interaction lands on one timeline.",

  problem: {
    kicker: "The problem",
    title: "Sales runs on context. The current stack destroys it.",
    body: "Modern reps juggle five tools — CRM, dialer, research platforms, note apps, meeting recorders. Context is scattered. Mobile experiences are afterthoughts. Reps walk into meetings under-briefed and walk out without their notes ever making it back into the system. iCON consolidates the entire sales motion onto one mobile-first surface so context follows the rep — not the other way around.",
  },

  flow: {
    kicker: "How iCON works",
    title: "Search. Dial. Meet. Recap. Without leaving the app.",
    lede: "The full sales motion in five steps — what used to span five tools now lives on one timeline per Lead.",
    steps: [
      {
        n: "01",
        title: "Search the company",
        body: "Type a name → instant 360° brief: funding, team, tech stack, news, decision makers.",
        icon: Search,
      },
      {
        n: "02",
        title: "Ask anything about it",
        body: "Chat with the research → grounded answers about the company, not generic search results.",
        icon: MessagesSquare,
      },
      {
        n: "03",
        title: "Tap to call",
        body: "Native dialer fires → call recorded, transcribed, summarized, action-items drafted by hang-up.",
        icon: PhoneCall,
      },
      {
        n: "04",
        title: "Capture every meeting",
        body: "Live Meeting mode — physical  — full diarized transcript, mood, and insights.",
        icon: Video,
      },
      {
        n: "05",
        title: "Send MoM. Then chat with it.",
        body: "Minutes emailed in one tap. Ask follow-up questions pulled straight from the meeting transcript.",
        icon: Mail,
      },
    ],
  },

  features: {
    kicker: "Features",
    title: "Built around one Lead. Built for the rep on the road.",
    lede: "Every capability serves the same job: keep context with the rep, on every device, through every step of the sales motion.",
    items: [
      {
        icon: Layers,
        title: "One Lead. One timeline.",
        body: "Every research note, call, transcript, meeting, MoM, and email lives on one continuous timeline per lead. No 'where did I save that?' moments — ever.",
      },
      {
        icon: Building2,
        title: "Search any company → instant 360° brief",
        body: "Type a company name and get the full picture: funding, team, tech stack, recent news, decision makers — ready to use before you dial.",
      },
      {
        icon: MessagesSquare,
        title: "Chat with your company research",
        body: "Ask plain-English questions about any company you've researched. \"What did they ship last year?\" \"Who's the right person on procurement?\" Answers grounded in the research iCON pulled.",
      },
      {
        icon: PhoneCall,
        title: "One-tap dialer + auto recording, transcript, summary",
        body: "Call directly from the app. Every call is automatically recorded, transcribed, and summarized — with next-step action items drafted by the time you hang up.",
      },
      {
        icon: Video,
        title: "Live Meeting capture — physical or video",
        body: "Open Live Meeting before a face-to-face . iCON captures the full conversation, gives you a speaker-separated transcript, mood read, and action-item summary in minutes.",
      },
      {
        icon: Mail,
        title: "Email Minutes-of-Meeting in one tap",
        body: "Send a polished MoM straight from iCON to attendees, with action items, owners, and dates. No copy-paste, no reformatting.",
      },
      {
        icon: Sparkles,
        title: "Chat with your meeting conversation",
        body: "After the meeting, ask iCON anything about what was said. \"What did the CTO commit to?\" \"What's the procurement timeline?\" Answers pulled from the actual transcript.",
      },
    ],
  },

  useCases: {
    kicker: "Who it's for",
    title: "Built for the people whose week is calls and meetings.",
    lede: "Whether you run a regional field force, an inside-sales floor, or chase enterprise deals on long cycles — iCON keeps every interaction on one Lead.",
    items: [
      {
        icon: Target,
        title: "B2B field sales teams",
        body: "Outside reps who run on mobile and need full deal context in their pocket — research, history, pipeline, all on hand before they walk in.",
      },
      {
        icon: TrendingUp,
        title: "SDR / inside sales",
        body: "High-velocity outbound where research time and call volume directly drive pipeline. iCON cuts both bottlenecks with AI briefs and one-tap dialer.",
      },
      {
        icon: Users,
        title: "Account executives in long-cycle deals",
        body: "Multi-stakeholder enterprise sales where every meeting, email, and procurement signal must land on one timeline — and stay searchable months later.",
      },
    ],
  },

  caseStudy: {
    intro:
      "A 30-rep B2B SaaS team replaced four tools — legacy CRM, separate dialer, research platform, meeting recorder — with iCON.",
    stats: [
      { value: "+22%", label: "Rep talk-time" },
      { value: "+35%", label: "Pipeline accuracy" },
      { value: "2 → 7", label: "Action-items captured per meeting" },
    ],
  },
};
