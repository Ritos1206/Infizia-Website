/**
 * Customer Support solution — content brief.
 *
 * Brand accent: rose (matches the Intellix product, the anchor for this
 * vertical). The conversation-cascade idiom in the hero shows
 * messages from 6 channels piling in on the left, getting AI-handled,
 * and tagged-out with resolution status on the right — directly
 * mirroring how Intellix collapses voice + chat + KB into one console.
 *
 * Mapped products:
 *   • Intellix (anchor — voice + chat + knowledge-base + database)
 *   • Meetrix (every escalated call captured as transcript + summary)
 *   • DocuMind (when support cases involve documents — claim forms,
 *     invoices, contracts to read and act on)
 */

import {
  AlarmClock,
  ArrowDownToLine,
  Boxes,
  BrainCircuit,
  CalendarClock,
  CheckCircle2,
  ChevronsRight,
  Database,
  Globe,
  Headphones,
  Heart,
  Inbox,
  Languages,
  LineChart,
  Mail,
  MessageCircle,
  PhoneCall,
  PhoneIncoming,
  Repeat2,
  ShieldCheck,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";

import type { SolutionContent } from "./types";

export const customerSupportContent: SolutionContent = {
  slug: "customer-support",
  name: "Customer Support",
  verticalLabel: "Customer Support",
  accent: "rose",

  tagline: "Every channel. Every language. Every conversation handled.",

  positioning:
    "Modern customer support is buried under volume — calls during work hours, chats at midnight, emails on the weekend, WhatsApp messages on the bus. Most support teams are still triaging this manually, with a separate tool per channel and zero shared context. Infizia turns the entire inbound conversation surface into one AI-driven assistant — voice, chat, and knowledge — so the obvious questions get answered the moment they arrive, and your team only sees the ones that genuinely need a human.",

  pulse: {
    kicker: "Industry pulse",
    title: "Where the customer's voice gets lost.",
    lede: "Most support volume isn't hard — it's repetitive. The hard part is finding the conversations that aren't routine, fast enough to actually save them.",
    items: [
      {
        value: "78%",
        label: "of inbound questions are repeats already covered in the KB",
        caption: "Across surveyed support teams",
      },
      {
        value: "4 min",
        label: "average wait time before a customer gets a first response",
        caption: "On chat · industry baseline",
      },
      {
        value: "3+",
        label: "tools the average agent juggles per case",
        caption: "Phone · chat · CRM · KB",
      },
      {
        value: "61%",
        label: "of customers churn after one bad support experience",
        caption: "Industry research average",
      },
    ],
  },

  pain: {
    kicker: "What's slowing you down",
    title: "Six channels. One overwhelmed team.",
    lede: "When every channel is a different tool, the team's cognitive load doesn't add — it multiplies. And the customer never knows which inbox to shout into.",
    items: [
      {
        icon: PhoneCall,
        title: "Calls overflow during peak hours",
        body: "Inbound voice volume spikes for two hours and the rest of the day is quiet — but you've staffed for the peak, so most of the day is wasted capacity. And missed calls cost a customer.",
      },
      {
        icon: MessageCircle,
        title: "Chat queues stall",
        body: "Customers expect instant chat replies. Real agents need 4 minutes to context-switch, find the answer, and reply — by which time the customer has already left.",
      },
      {
        icon: Inbox,
        title: "FAQ answers live in the KB nobody opens",
        body: "Your team built a 200-article knowledge base. Three percent of customers ever find the right one. The rest open a ticket and get the same answer on the third reply.",
      },
      {
        icon: Languages,
        title: "Multilingual support is a hiring problem",
        body: "Hindi, English, Marathi, Tamil, Bangla — each new language was someone you had to hire. Coverage gaps map directly to revenue gaps in the regions you can't service.",
      },
    ],
  },

  stack: {
    kicker: "The Infizia stack for customer support",
    title: "Two products. One unified console.",
    lede: "Intellix handles the high-volume routine, Meetrix captures every escalation — both writing to one shared customer record so the human handover never starts from scratch.",
    entries: [
      {
        productSlug: "intellix",
        role: "Anchor — voice + chat + knowledge base + database queries on one assistant. Multilingual, 24×7, and grounded in your data.",
      },
      {
        productSlug: "meetrix",
        role: "Captures every escalated call — transcript, summary, action items — so the human handover never starts from scratch.",
      },
    ],
  },

  useCases: {
    kicker: "Who it's for",
    title: "Where high-volume support meets high-stakes outcomes.",
    lede: "Wherever the cost of a missed conversation is high — the same Intellix-led stack scales from a 10-person ops team to a global support floor.",
    items: [
      {
        icon: Headphones,
        title: "BPO & contact-centre operators",
        body: "Replace tier-1 with Intellix's voice + chat AI. Free up human agents to handle complex cases and escalations — with Meetrix capturing every one.",
      },
      {
        icon: Heart,
        title: "D2C brands with WhatsApp commerce",
        body: "Customers chat in any language at any hour. Intellix answers product questions, order status, and FAQs while your humans sleep — and books a callback when needed.",
      },
      {
        icon: ShieldCheck,
        title: "Insurance, financial services & telecom",
        body: "Tier-1 enquiries — policy status, account balance, plan FAQs, billing questions — all answered by Intellix the moment they arrive. Meetrix records every escalated conversation in full, so compliance reviews work off the actual transcript instead of an agent's summary.",
      },
    ],
  },

  outcomes: {
    kicker: "What changes",
    title: "The volume goes down. The quality goes up.",
    lede: "Every routine conversation that AI resolves frees a human for the conversation that actually decides whether the customer stays.",
    items: [
      {
        icon: Workflow,
        metric: "70% deflection",
        body: "Routine FAQs and account-status questions resolved the moment they hit any channel — voice, chat, or web.",
      },
      {
        icon: AlarmClock,
        metric: "<10 sec response",
        body: "First reply on every channel — call, chat, WhatsApp — within ten seconds, every time, in any supported language.",
      },
      {
        icon: Languages,
        metric: "12+ languages live",
        body: "Switch language without staffing for it. Hindi, English, Marathi, Tamil, Bangla, Telugu — all on day one, on every channel.",
      },
      {
        icon: TrendingUp,
        metric: "+25% CSAT",
        body: "Customers who get an immediate, correct answer in their own language report dramatically higher satisfaction than those who wait.",
      },
    ],
  },
};

/**
 * 6 channels rendered by the bespoke ConversationCascade hero. Each
 * channel sends a steady stream of conversations into the central AI
 * console, which tags them with a resolution status on exit.
 */
export const SUPPORT_CASCADE_CHANNELS = [
  { icon: PhoneIncoming, label: "Voice", count: 142 },
  { icon: MessageCircle, label: "Chat", count: 318 },
  { icon: Mail, label: "Email", count: 87 },
  { icon: Globe, label: "Web", count: 64 },
  { icon: PhoneCall, label: "Callback", count: 22 },
  { icon: ChevronsRight, label: "WhatsApp", count: 256 },
] as const;

/**
 * Tag chips that fly out the right side of the cascade — a sample of
 * resolution states.
 */
export const SUPPORT_RESOLUTION_TAGS = [
  { icon: CheckCircle2, label: "Resolved · KB", state: "resolved" as const },
  { icon: BrainCircuit, label: "Answered · DB", state: "resolved" as const },
  { icon: ArrowDownToLine, label: "Logged · case", state: "logged" as const },
  { icon: Repeat2, label: "Escalated · Tier 2", state: "escalated" as const },
  { icon: CalendarClock, label: "Scheduled · 4 PM", state: "logged" as const },
  { icon: Inbox, label: "Resolved · auto", state: "resolved" as const },
] as const;

export const SUPPORT_BADGES = [
  { icon: Languages, label: "12+ languages live" },
  { icon: Database, label: "Grounded in your KB + DB" },
  { icon: Users, label: "Voice + chat + email + web" },
  { icon: LineChart, label: "Real-time deflection metrics" },
  { icon: Boxes, label: "One customer record" },
] as const;
