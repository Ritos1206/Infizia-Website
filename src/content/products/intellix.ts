/**
 * Intellix — AI-powered Voice and Chat Assistant Platform.
 *
 * Single source of truth: `docs/brochures/intellix-brochure.md`.
 *
 * Vertical: Customer Support.
 * Brand accent: rose — distinct from indigo (Convenor), amber (Performix),
 * violet (Meetrix), and the flagship trio (teal / green / blue).
 * Customer-conversation warmth without competing with the cooler tones.
 * Bespoke visual: IntellixVoiceChatVisual — split-pane voice call + chat
 * thread sharing one knowledge base. Mid-page: IntellixToolConsolidation —
 * five disconnected business tools converging into one Intellix dashboard.
 *
 * Voice rule: business-first. No technology / vendor names exposed in any
 * user-facing string here. Implementation can swap providers without
 * touching this content.
 */

import {
  Boxes,
  Building2,
  Database,
  FileText,
  Headphones,
  LayoutDashboard,
  Languages,
  MessageCircle,
  Mic,
  PhoneCall,
  Search,
  TrendingUp,
} from "lucide-react";

import type { StandardProductContent } from "./types";

export const intellixContent: StandardProductContent = {
  slug: "intellix",
  name: "Intellix",
  vertical: "Customer Support",
  accent: "rose",

  tagline: "One platform for every customer conversation.",

  positioning:
    "Intellix is an all-in-one AI-powered Voice and Chat Assistant Platform that lets businesses automate customer interactions through intelligent voice calls, multilingual chat, and knowledge-driven engagement. Upload your documents to build a custom knowledge base, run AI-driven outbound and inbound calls, embed a multilingual chat widget on any website, and let customers query your business database in plain English. Voice, chat, knowledge, and data — all unified on one dashboard, so engagement is faster, smarter, and entirely automated without losing the human-like quality of every conversation.",

  problem: {
    kicker: "The challenge",
    title: "Customer engagement runs on five disconnected tools.",
    body: "Voice calls live in one platform, chat in another, the knowledge base in a third, the CRM in a fourth, and the business database is locked behind ticket queues. Repetitive questions get answered differently across channels. Inbound calls fall outside the searchable record. Multilingual support means hiring a new team. And scaling support means scaling headcount linearly. Intellix consolidates all of it onto one platform — the same AI handles voice and chat, grounded in the same knowledge base, with direct read access to your business data.",
  },

  features: {
    kicker: "Capabilities",
    title: "Voice, chat, knowledge, and data — on one platform.",
    lede: "Every step of the customer conversation runs on Intellix — from the first inbound call to a multilingual chat reply to a plain-English database lookup. All on one dashboard, all grounded in your own knowledge.",
    items: [
      {
        icon: FileText,
        title: "Your knowledge, on autopilot",
        body: "Drop in your PDFs, documents, or text and Intellix has them ready to use across every voice call and chat. Automatic indexing — no tagging, no taxonomy, no setup time.",
      },
      {
        icon: PhoneCall,
        title: "AI voice calls — outbound, at scale",
        body: "Start one or a thousand simultaneous AI-led calls. Every conversation transcribed, summarized, and scored on sentiment + intent automatically. Customizable tone, gender, and language.",
      },
      {
        icon: MessageCircle,
        title: "Multilingual chat widget",
        body: "One embed script, instant chat in every language your customer speaks. Voice and text in the same conversation. Live preview of the embed before it goes on your website.",
      },
      {
        icon: Headphones,
        title: "Every inbound call, captured",
        body: "Calls log, transcribe, and analyze themselves the moment they ring. Tone, sentiment, and intent surfaced on a unified dashboard. Search past conversations the same way you'd search email.",
      },
      {
        icon: Database,
        title: "Plain-English database chat",
        body: "Customers (or your team) ask questions in natural language and Intellix returns live answers from your business database — securely scoped, auditable, with analytics for visual decision-making.",
      },
      {
        icon: LayoutDashboard,
        title: "One unified dashboard",
        body: "Voice + chat + knowledge + database, all visible on one screen. Filter and search across every interaction. No tab juggling, no context loss between channels.",
      },
    ],
  },

  useCases: {
    kicker: "Who it's for",
    title: "Built for the teams whose customers don't pick a channel.",
    lede: "Wherever conversation volume outpaces headcount, Intellix closes the gap — across voice, chat, and data, in every language your customer speaks.",
    items: [
      {
        icon: Headphones,
        title: "Customer support teams scaling fast",
        body: "Call centres and inbound support floors that need to multiply throughput without multiplying headcount, in every language their customers speak.",
      },
      {
        icon: TrendingUp,
        title: "Sales & lead-engagement teams",
        body: "Outbound voice campaigns at scale, with every conversation auto-logged, sentiment-scored, and summarized for the rep who picks up the next step.",
      },
      {
        icon: Building2,
        title: "Product, knowledge & operations teams",
        body: "Companies with an existing knowledge base or business database that want to make it self-serve for customers via chat and voice — without building a custom front-end.",
      },
    ],
  },
};

/**
 * Closing pills surfaced near the page CTA — echoes the brochure's "what
 * you get" outcome list.
 */
export const INTELLIX_OUTCOME_PILLS = [
  { icon: MessageCircle, label: "One conversation, every channel" },
  { icon: Mic, label: "Every call, captured & understood" },
  { icon: Languages, label: "Multilingual by default" },
  { icon: Boxes, label: "Five tools collapsed into one" },
] as const;

/**
 * The five disconnected business tools that Intellix replaces — surfaced
 * by the IntellixToolConsolidation section as the "before" half of the
 * before/after story.
 */
export const INTELLIX_REPLACED_TOOLS = [
  { icon: PhoneCall, label: "Call-centre software" },
  { icon: MessageCircle, label: "Standalone chatbot" },
  { icon: FileText, label: "Knowledge base tool" },
  { icon: Search, label: "CRM lookup workflow" },
  { icon: Database, label: "DB query tool" },
] as const;
