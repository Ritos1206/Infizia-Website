/**
 * /technology/voice-ai — Phase 7 · 4 of 5
 *
 * Brand accent: rose (#FB7185). Same accent as Intellix and the
 * Customer Support solution — Intellix is voice + chat in production,
 * VitaCare's AI receptionist is the same stack.
 *
 * Voice rule (D-40): technical concepts (ASR, NLU, intent
 * classification, diarization, code-mix) allowed; specific vendor
 * product names NOT exposed.
 */

import {
  Mic,
  Headphones,
  Languages,
  ShieldCheck,
  Activity,
  Volume2,
  PhoneCall,
  PhoneIncoming,
  HelpCircle,
  HeartPulse,
  ClipboardList,
  Award,
  Gauge,
  Sparkles,
  Clock,
  AlertTriangle,
  Lock,
  Brain,
  Workflow,
} from "lucide-react";
import type { TechnologyContent } from "./types";

export const voiceAiContent: TechnologyContent = {
  slug: "voice-ai",
  name: "Voice & Conversational AI",
  shortLabel: "Voice",
  accent: "rose",

  tagline: "Conversations, not commands — fluent in how India actually talks.",

  positioning:
    "Voice AI that ships in India has to handle code-mixed Hindi-English, regional accents, and full-duplex calls without the awkward pauses that kill trust. Infizia covers real-time transcription with diarization, multilingual NLU, intent classification, voice agents that handle objections, and the routing layer that hands off to a human when the conversation needs one.",

  pain: {
    kicker: "Why teams stall here",
    title: "Voice bots fail in three predictable ways.",
    lede: "The transcript looks clean in a demo. In production, customers hang up.",
    items: [
      {
        icon: AlertTriangle,
        title: "Code-mix breaks the transcription",
        body: "Speech engines trained on monolingual English misread Hindi-English mixing — common in Indian customer calls. The transcript reads garbled, the intent classifier fails.",
      },
      {
        icon: Clock,
        title: "Latency kills the conversation",
        body: "Every 500ms of silence after a customer finishes speaking feels broken. Naive deployments stack ASR + NLU + LLM + TTS serially and hit 2-3 second turn delays.",
      },
      {
        icon: HelpCircle,
        title: "No graceful escalation to humans",
        body: "When the bot is stuck, it loops. There is no 'I'll connect you to an agent' handoff with full context. The customer rage-presses 0 or hangs up.",
      },
      {
        icon: Lock,
        title: "Recordings sit on third-party clouds with no isolation",
        body: "Customer calls — including PII, account numbers, health information — flow into vendor SaaS with weak audit and no per-tenant data boundaries.",
      },
    ],
  },

  capabilities: {
    kicker: "What we deliver",
    title: "From audio in to action out — under 800ms.",
    lede: "Six capabilities that make voice AI feel like a real conversation.",
    items: [
      {
        icon: Mic,
        title: "Real-time ASR with diarization",
        body: "Streaming transcription with speaker separation, punctuation, and confidence scoring. Words land within 200ms of being spoken — not after the customer finishes.",
      },
      {
        icon: Languages,
        title: "Code-mix Hindi-English fluency",
        body: "Trained for how Indian customers actually speak — switching mid-sentence between Hindi, English, and regional words. Plus 18 supported languages including major Indian ones.",
      },
      {
        icon: Brain,
        title: "Intent + entity extraction",
        body: "Classifies the call's intent (support, sales, escalation, complaint), extracts entities (account, product, amount, date), and routes accordingly — all inside the streaming loop.",
      },
      {
        icon: Volume2,
        title: "Natural TTS + barge-in",
        body: "Voice responses that sound human, with the customer able to interrupt mid-response (barge-in) without breaking the conversation. Empathy beats polish.",
      },
      {
        icon: Workflow,
        title: "Human handoff with context",
        body: "When the bot escalates, the human agent receives the full transcript, identified intent, attempted resolution, and customer sentiment — not a cold cancel.",
      },
      {
        icon: ShieldCheck,
        title: "Recording controls + redaction",
        body: "Per-tenant data isolation, encrypted storage, on-the-fly PII redaction in transcripts, and consent tracking — built for DPDP and HIPAA-class workloads.",
      },
    ],
  },

  patterns: {
    kicker: "How we engage",
    title: "Four patterns we apply to voice builds.",
    lede: "Each pattern matches a different call shape — start with one or stack them.",
    items: [
      {
        icon: PhoneIncoming,
        label: "Inbound deflection",
        tag: "FAQ + booking",
        body: "Bot handles common requests (booking, balance, status) end-to-end. Escalates to humans only when intent is ambiguous or sentiment turns negative.",
      },
      {
        icon: PhoneCall,
        label: "Outbound voice agent",
        tag: "Reminders + lead qual",
        body: "Bot makes the call — appointment reminders, lead qualification, payment follow-ups — with natural conversation flow and intent-driven branching.",
      },
      {
        icon: Headphones,
        label: "Live agent assist",
        tag: "Whisper + summary",
        body: "Bot listens to the live call alongside the agent, surfaces relevant KB articles, drafts the resolution, and writes the post-call summary while the agent talks.",
      },
      {
        icon: Activity,
        label: "Meeting capture",
        tag: "Transcript + action items",
        body: "Multi-speaker meetings transcribed with diarization, summarized, and turned into action items with owners — voice-to-actions, not just voice-to-text.",
      },
    ],
  },

  useCases: {
    kicker: "Where it ships",
    title: "Inside every Infizia surface that listens or talks.",
    lede: "Three places where voice AI is doing real work, not running a demo loop.",
    items: [
      {
        icon: PhoneIncoming,
        title: "AI clinic receptionist",
        body: "Answers patient calls 24/7 — books appointments, sends Rx + reminders on WhatsApp, handles cancellations, escalates urgent cases. Never misses a patient call.",
        poweredProducts: ["VitaCare", "Intellix"],
      },
      {
        icon: ClipboardList,
        title: "Multi-speaker meeting capture",
        body: "Hour-long meetings transcribed with diarization, summarized, and turned into a shareable MoM with action items — for sales calls, interviews, and internal reviews.",
        poweredProducts: ["Meetrix", "EyeCON", "Convenor"],
      },
      {
        icon: HeartPulse,
        title: "Multilingual support widget",
        body: "Voice + chat customer support that switches languages mid-conversation, escalates with full context, and writes the ticket while the human picks up.",
        poweredProducts: ["Intellix"],
      },
    ],
  },

  outcomes: {
    kicker: "What changes when this works",
    title: "Faster turns. Higher containment. Cleaner handoffs.",
    lede: "Outcomes Infizia teams have measured across voice rollouts.",
    items: [
      {
        icon: Gauge,
        metric: "p95 < 800ms",
        body: "End-to-end response latency from customer finishing speech to bot's first word. Conversational, not transactional.",
      },
      {
        icon: Award,
        metric: "70–85%",
        body: "Inbound call containment rate — calls fully resolved without human handoff, on common intents.",
      },
      {
        icon: Languages,
        metric: "18 languages",
        body: "Live across Hindi-English code-mix, major Indian languages, and global tongues — speaker-preserved translation built in.",
      },
      {
        icon: Sparkles,
        metric: "0 missed calls",
        body: "On clinic / inbound deployments — the AI receptionist answers 24/7. Every call captured, every patient followed up.",
      },
    ],
  },
};
