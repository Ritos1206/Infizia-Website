/**
 * Meetrix — AI meeting intelligence.
 *
 * Single source of truth: `docs/brochures/meetrix-brochure.md`.
 *
 * Vertical: HR & Workforce.
 * Brand accent: violet — distinct from indigo (Convenor), amber
 * (Performix), and the flagship trio (teal / green / blue). Voice +
 * conversation + AI-collaboration tone.
 * Bespoke visual: MeetrixTranscriptStreamVisual — diarized speaker bubbles
 * + action items extraction (distinct from Convenor's interview tableau
 * and Performix's review dashboard).
 *
 * Voice rule: business-first. No technology / vendor names exposed in any
 * user-facing string here. Implementation can swap providers without
 * touching this content.
 */

import {
  CheckCircle2,
  CheckSquare,
  FileAudio,
  Globe2,
  Languages,
  Mail,
  MessageSquare,
  Mic,
  Search,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

import type { StandardProductContent } from "./types";

export const meetrixContent: StandardProductContent = {
  slug: "meetrix",
  name: "Meetrix",
  vertical: "HR & Workforce",
  accent: "violet",

  tagline: "Every meeting, captured. Every decision, searchable.",

  positioning:
    "Meetrix is an AI-powered meeting intelligence platform that turns recorded audio (or uploaded files) into searchable, structured meeting knowledge. Speaker-diarized transcripts, AI summaries, extracted action items, ready-to-send follow-up emails, an AI chat that answers questions about the meeting with timestamp citations, and per-entry translation across 18 languages — without losing speaker context. Built for the post-meeting reality where notes get lost, action items get forgotten, and decisions disappear into Slack threads.",

  problem: {
    kicker: "The challenge",
    title: "After the meeting, the value walks out the door.",
    body: "Different people capture different notes. Action items go missing. Multilingual teams re-listen to parts they missed because translations break speaker context. Searching past meetings is impossible — audio doesn't index, scrubbing through hour-long recordings is a non-starter. And drafting MoMs is the task no one wants. Meetrix captures the meeting once and lets every stakeholder query, translate, summarize, or follow up — without re-watching.",
  },

  features: {
    kicker: "Capabilities",
    title: "Capture once. Recall anything.",
    lede: "Record on mobile or upload an audio file — every Meetrix meeting becomes searchable knowledge with diarized transcripts, structured AI analysis, and a chat interface that grounds every answer in the actual conversation.",
    items: [
      {
        icon: FileAudio,
        title: "Record or upload — same pipeline",
        body: "Record on mobile, upload an audio file, or queue a file for later transcription. All paths land on the same diarized transcript and AI analysis — no duplicate workflows.",
      },
      {
        icon: Mic,
        title: "Speaker-diarized transcripts",
        body: "Every line tagged with the speaker and a precise timestamp. Color-coded speaker bubbles in the UI. Code-mixed Hindi-English meetings transcribe cleanly — no garbled mid-sentence switches.",
      },
      {
        icon: Sparkles,
        title: "AI summary + action items + email",
        body: "Auto-generated the moment transcription completes. Action items, decisions, and a ready-to-send follow-up email — all pulled straight from the meeting itself. One-tap email generation.",
      },
      {
        icon: MessageSquare,
        title: "Chat with the meeting",
        body: "Ask anything — \"what did the CTO commit to?\", \"what's the deadline?\". Works just as well for hour-long calls as for short syncs. Every answer cites a timestamp from the actual conversation.",
      },
      {
        icon: Languages,
        title: "Per-entry translation · 18 languages",
        body: "Hindi, Bengali, Tamil, Telugu, Marathi, Gujarati, English-IN, and 11 more. Each speaker entry is translated individually so segregation is preserved — no merged dialogue. Translations cached per language.",
      },
      {
        icon: Search,
        title: "Mobile-first capture, history, and recall",
        body: "Record from your phone, paginated history with auto-load, pull-to-refresh. Full audio playback with scrubable progress and accurate seeking. Long-press a card to delete (S3 + DB cleanup in one step).",
      },
    ],
  },

  useCases: {
    kicker: "Who it's for",
    title: "For the teams whose decisions live in conversations.",
    lede: "Anywhere meetings drive decisions — sales, client services, distributed teams — Meetrix captures the substance and surfaces the follow-up.",
    items: [
      {
        icon: TrendingUp,
        title: "Sales discovery + handoff calls",
        body: "Record the prospect call, drop into Meetrix, instantly hand the action items + a follow-up email draft to the AE running the second meeting.",
      },
      {
        icon: Mail,
        title: "Client meetings & MoM delivery",
        body: "Generate the meeting minutes automatically. Translate per-entry into the client's preferred language. No more 'I'll send notes later'.",
      },
      {
        icon: Globe2,
        title: "Multi-language workforce sync-ups",
        body: "Global teams where meetings happen in code-mixed Hindi/English (or any other local language). Diarized transcript + per-language translation lets every stakeholder read in their own language.",
      },
    ],
  },
};

/**
 * Closing pills surfaced near the page CTA — echoes the brochure's "what
 * you get" outcome list.
 */
export const MEETRIX_OUTCOME_PILLS = [
  { icon: CheckCircle2, label: "Every meeting, captured" },
  { icon: Search, label: "Every decision, searchable" },
  { icon: CheckSquare, label: "Every follow-up, drafted" },
  { icon: Users, label: "Every speaker, segregated" },
] as const;
