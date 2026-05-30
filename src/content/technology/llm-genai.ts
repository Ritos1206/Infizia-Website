/**
 * /technology/llm-genai — Phase 7 · 1 of 5
 *
 * Brand accent: violet (#A78BFA). Same accent as Meetrix and the
 * Agentic AI service — reinforces the narrative link: the LLM is
 * the language layer, agents and assessments are built on top of it.
 *
 * Voice rule (D-40): technical concepts (LLM, fine-tuning, prompt
 * engineering, inference, function calling) are allowed because the
 * buyer here is a CTO / architect / dev lead. Specific vendor product
 * names (OpenAI, Anthropic, etc.) are NOT exposed — implementation
 * can swap providers without touching this content.
 */

import {
  Sparkles,
  Languages,
  ScrollText,
  Wand2,
  Zap,
  ShieldCheck,
  Gauge,
  FlaskConical,
  TrendingDown,
  Award,
  Brain,
  PenTool,
  Crosshair,
  AlertTriangle,
  HelpCircle,
  Lock,
  Wallet,
} from "lucide-react";
import type { TechnologyContent } from "./types";

export const llmGenaiContent: TechnologyContent = {
  slug: "llm-genai",
  name: "LLM & Generative AI",
  shortLabel: "LLM · GenAI",
  accent: "violet",

  tagline: "The language layer behind every Infizia product.",

  positioning:
    "Foundation models do not ship products on their own — they need prompt design, retrieval grounding, fine-tuning where the data justifies it, and inference infrastructure that holds up at production scale. Infizia's GenAI practice covers the full path from model selection to production — model-agnostic by design, so the platform can swap providers as the field shifts.",

  pain: {
    kicker: "Why teams stall here",
    title: "Generative AI breaks more pilots than it ships.",
    lede: "Demos are easy. Production is where teams discover that the model is the smallest part of the problem.",
    items: [
      {
        icon: AlertTriangle,
        title: "Hallucinations land in customer-facing copy",
        body: "Without retrieval grounding, structured prompts, and validation, the model invents prices, policies, and product names. One bad answer becomes a screenshot.",
      },
      {
        icon: Wallet,
        title: "Inference costs scale faster than usage",
        body: "Naive deployments hit token-cost cliffs the moment traffic grows. No prompt caching, no model routing, no batching — every call hits the most expensive tier.",
      },
      {
        icon: Lock,
        title: "Sensitive data leaks into prompts",
        body: "Customer names, PII, internal docs flow into third-party APIs without redaction or audit. Compliance teams find out from a review, not from a control.",
      },
      {
        icon: HelpCircle,
        title: "No way to measure if the model is getting better",
        body: "Teams ship prompt changes by gut feel. No regression suite, no eval harness, no way to A/B prompts under production traffic.",
      },
    ],
  },

  capabilities: {
    kicker: "What we deliver",
    title: "From model selection to production inference.",
    lede: "Six capabilities that turn a foundation model into a production system you can actually trust.",
    items: [
      {
        icon: Brain,
        title: "Model selection & benchmarking",
        body: "Open-weight, hosted, or hybrid — chosen against your task, latency budget, and cost ceiling. We benchmark on your data, not generic leaderboards.",
      },
      {
        icon: PenTool,
        title: "Prompt engineering at scale",
        body: "Structured prompts with role, context, examples, output schema. Versioned, reviewed, and tested like code — never copy-pasted into a Slack thread.",
      },
      {
        icon: FlaskConical,
        title: "Fine-tuning & adaptation",
        body: "Parameter-efficient fine-tuning (LoRA, adapters) when the data justifies it. Domain-specific tone, terminology, and reasoning baked into the model.",
      },
      {
        icon: ShieldCheck,
        title: "Safety & guardrails",
        body: "Input filters, output validators, PII redaction, prompt-injection defenses, and refusal policies. Every model call has a contract.",
      },
      {
        icon: Gauge,
        title: "Evaluation harness",
        body: "Golden-set regression tests, offline evals, and online A/B traffic splitting. You know if a prompt change made things better — with numbers.",
      },
      {
        icon: Zap,
        title: "Inference infrastructure",
        body: "Batching, prompt caching, model routing, streaming, and graceful degradation. Inference cost stays linear when traffic isn't.",
      },
    ],
  },

  patterns: {
    kicker: "How we engage",
    title: "Four patterns we apply to every GenAI build.",
    lede: "Each pattern maps to a different shape of business problem — choose one or stack them.",
    items: [
      {
        icon: Sparkles,
        label: "Generation",
        tag: "Long-form output",
        body: "Articles, emails, summaries, prescriptions, MoMs, drafts. Tuned for tone, length, and structure with templates and few-shot examples.",
      },
      {
        icon: ScrollText,
        label: "Summarization",
        tag: "Long → short",
        body: "Meeting transcripts, document piles, call recordings condensed into action items, decisions, and key signals — with traceable citations.",
      },
      {
        icon: Crosshair,
        label: "Structured extraction",
        tag: "JSON out",
        body: "Free text in, schema-conformant data out. Invoices, resumes, contracts, support tickets — every field with a confidence score.",
      },
      {
        icon: Languages,
        label: "Multilingual + code-mix",
        tag: "EN · HI · 18 lang",
        body: "Code-mixed Hindi-English calls, multilingual chat, speaker-preserved translation. Built for how Indian customers actually talk.",
      },
    ],
  },

  useCases: {
    kicker: "Where it ships",
    title: "Inside every Infizia product that talks, writes, or reasons.",
    lede: "These are the products already running on this stack — same architecture, same guardrails, different surface.",
    items: [
      {
        icon: ScrollText,
        title: "Meeting summaries & action items",
        body: "Hour-long call transcripts collapse into a 1-page summary, decisions, action items with owners, and a one-tap email to attendees — all generated, never retyped.",
        poweredProducts: ["Meetrix", "EyeCON", "Convenor"],
      },
      {
        icon: Wand2,
        title: "Course generation from a topic",
        body: "Type a topic, get modules, lessons, MCQs, mock tests, and adaptive feedback. The model handles the long-form writing; teachers handle the review.",
        poweredProducts: ["Learnova", "LMS"],
      },
      {
        icon: Crosshair,
        title: "Structured extraction from documents",
        body: "Invoices, resumes, contracts, lab reports — read once, extracted into 7-30 fields per document with confidence scores and validation checkmarks.",
        poweredProducts: ["DocuMind", "Convenor", "VitaCare"],
      },
    ],
  },

  outcomes: {
    kicker: "What changes when this works",
    title: "From novelty demo to dependable production.",
    lede: "Outcomes Infizia teams have measured across rollouts on this stack.",
    items: [
      {
        icon: Award,
        metric: "92–96%",
        body: "Field accuracy on structured extraction tasks — measured on customer data, not generic benchmarks.",
      },
      {
        icon: TrendingDown,
        metric: "−68%",
        body: "Inference cost after batching, caching, and model routing — vs. the naive single-tier deployment.",
      },
      {
        icon: Gauge,
        metric: "p95 < 1.4s",
        body: "Streaming-response latency for generation and summarization workloads at production traffic.",
      },
      {
        icon: ShieldCheck,
        metric: "0 PII leaks",
        body: "Across audited deployments, with redaction, output validators, and prompt-injection defenses in place.",
      },
    ],
  },
};
