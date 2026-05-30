"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Brain,
  Database,
  Mic,
  Layers,
  type LucideIcon,
} from "lucide-react";
import { TECHNOLOGY } from "@/lib/constants";
import { ACCENTS, type ProductAccent } from "@/lib/product-accents";
import { cn } from "@/lib/utils";

/**
 * /technology — Cognitive Stack Blueprint Hero.
 *
 * Idiom: a vertical 5-layer architectural stack — each layer is a
 * horizontal "slab" representing one of the 5 technology pillars.
 * Stack reads TOP→BOTTOM as the cognitive flow:
 *
 *   01 · Voice & Conversational AI     (rose)   — what users speak/type
 *   02 · LLM & Generative AI           (violet) — what understands
 *   03 · Agentic Architecture          (indigo) — what reasons + acts
 *   04 · RAG Systems                   (cyan)   — what grounds in data
 *   05 · Application Architecture      (sky)    — what runs it all
 *
 * Motion:
 *   • Layers fade in top-to-bottom on viewport-enter (stagger 0.08s)
 *   • A traveling "data dot" loops top-to-bottom through all 5 layers
 *     on a 4-second cycle, hinting at "request flow"
 *   • Each layer's right edge has a subtle accent shimmer
 *
 * Each layer is a clickable Link to its dedicated /technology/<slug>
 * page. Hover lifts the layer slightly + brightens its accent border.
 *
 * Distinct from any prior bespoke layered visual — closest is the
 * EcommerceLayeredStack (D-51) which was a 5-layer commerce
 * architecture inside a product page; this is the technology-pillar
 * version with vertical icons + product-anchor chips on each layer
 * and a continuous traveling data dot through the whole stack.
 *
 * Responsive:
 *   • lg+ : 5 horizontal slabs with full layer chrome
 *   • md  : compact slabs with smaller per-layer footprints
 *   • <md : vertical stack of 5 cards, no traveling dot (it would
 *           overlap content too tightly on narrow screens)
 */

// Order in the BLUEPRINT (top-down cognitive flow), distinct from
// TECHNOLOGY array order in constants.ts.
const STACK_ORDER = [
  "voice-ai",
  "llm-genai",
  "agentic-architecture",
  "rag",
  "application-architecture",
];

const PILLAR_ICONS: Record<string, LucideIcon> = {
  "llm-genai": Sparkles,
  "agentic-architecture": Brain,
  rag: Database,
  "voice-ai": Mic,
  "application-architecture": Layers,
};

// One-liner per pillar — what this layer "is" in the stack.
const LAYER_TAGLINES: Record<string, string> = {
  "voice-ai": "Speech and chat — the surface every user touches.",
  "llm-genai": "Foundation models — the language layer that understands.",
  "agentic-architecture": "Multi-agent reasoning — perceive, plan, act.",
  rag: "Retrieval — grounded in your data, your documents, your truth.",
  "application-architecture": "Cloud-native substrate — what holds it all up.",
};

export function TechStackBlueprint() {
  return (
    <section className="relative isolate overflow-hidden pt-16 pb-12 md:pt-24 md:pb-16">
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-grid-fine"
          style={{
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)",
          }}
        />
        <div className="absolute left-1/3 top-1/4 h-72 w-72 rounded-full bg-brand-violet/[0.08] blur-[140px]" />
        <div className="absolute right-1/3 bottom-1/4 h-80 w-80 rounded-full bg-brand-cyan/[0.08] blur-[140px]" />
      </div>

      <div className="container-page">
        {/* Title block */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="kicker mx-auto">
            <span className="kicker-dot" />
            <span>Technology Practice</span>
          </div>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
            The cognitive stack,{" "}
            <span className="text-gradient-brand">five layers deep.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
            Every Infizia product is built on the same five-pillar substrate.
            Voice surfaces, language models, agent reasoning, retrieval, and
            the cloud-native foundation underneath — engineered as one
            coherent stack.
          </p>
        </div>

        {/* ─── Desktop / tablet stack blueprint (md+) ──────────────── */}
        <div className="relative mx-auto mt-14 hidden max-w-5xl md:block">
          <div className="relative">
            {/* Traveling data dot — single continuous flow top→bottom through all layers */}
            <motion.div
              aria-hidden
              animate={{ top: ["0%", "100%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute left-[26px] z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-white shadow-[0_0_16px_rgba(255,255,255,0.7)]"
            />
            {/* Vertical guide line behind the dot */}
            <div
              aria-hidden
              className="absolute left-[26px] top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-brand-rose/40 via-brand-indigo/40 via-brand-cyan/40 to-brand-sky/40"
            />

            <div className="space-y-3 pl-14">
              {STACK_ORDER.map((slug, idx) => {
                const tech = TECHNOLOGY.find((t) => t.slug === slug);
                if (!tech) return null;
                const accent = (tech.accent ?? "teal") as ProductAccent;
                const a = ACCENTS[accent];
                const Icon = PILLAR_ICONS[slug] ?? Sparkles;

                return (
                  <motion.div
                    key={slug}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.6,
                      delay: idx * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={`/technology/${tech.slug}`}
                      className={cn(
                        "group relative flex items-center gap-6 overflow-hidden rounded-2xl border border-white/10 bg-bg-surface px-6 py-5 shadow-card transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-bg-elevated hover:shadow-[0_18px_40px_-16px_rgba(0,0,0,0.6)] active:translate-y-0 active:scale-[0.997] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base",
                        a.hoverBorder,
                      )}
                    >
                      {/* Accent bar on left edge */}
                      <span
                        aria-hidden
                        className={cn(
                          "pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b opacity-80",
                          a.topLine,
                        )}
                      />
                      {/* Soft accent glow on the right */}
                      <div
                        className={cn(
                          "pointer-events-none absolute -right-12 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full blur-3xl opacity-50 transition-opacity duration-300 group-hover:opacity-90",
                          a.glow,
                        )}
                      />

                      {/* Layer number ring */}
                      <div className="relative shrink-0">
                        <div
                          className={cn(
                            "flex h-14 w-14 flex-col items-center justify-center rounded-2xl border bg-bg-elevated",
                            a.border,
                            a.bgSoft,
                          )}
                        >
                          <Icon
                            className={cn("h-5 w-5", a.text)}
                            strokeWidth={1.6}
                          />
                          <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-text-faint">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>

                      {/* Layer name + tagline */}
                      <div className="min-w-0 flex-1">
                        <p
                          className={cn(
                            "font-mono text-[10px] uppercase tracking-[0.22em]",
                            a.text,
                          )}
                        >
                          Layer {String(idx + 1).padStart(2, "0")} ·{" "}
                          {tech.shortLabel ?? tech.name}
                        </p>
                        <h3 className="mt-1 font-display text-xl font-semibold tracking-tight text-white md:text-2xl">
                          {tech.name}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-text-muted">
                          {LAYER_TAGLINES[slug]}
                        </p>
                      </div>

                      {/* Right-side arrow */}
                      <div
                        className={cn(
                          "shrink-0 rounded-full border p-2 transition-all duration-300 group-hover:translate-x-0.5",
                          a.border,
                          a.bgSoft,
                          a.text,
                        )}
                      >
                        <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Foundation rail */}
            <div className="ml-14 mt-3 flex items-center gap-3 rounded-full border border-white/10 bg-bg-surface/80 px-4 py-2 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-teal shadow-[0_0_8px_rgba(94,234,212,0.7)]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-secondary">
                Foundation · One stack across all 14 products
              </span>
              <span className="ml-auto h-px flex-1 bg-gradient-to-r from-brand-green/30 via-brand-teal/30 to-brand-blue/30" />
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-faint">
                Infizia
              </span>
            </div>
          </div>
        </div>

        {/* ─── Mobile compact stack (<md) ──────────────────────────── */}
        <div className="mt-12 space-y-3 md:hidden">
          {STACK_ORDER.map((slug, idx) => {
            const tech = TECHNOLOGY.find((t) => t.slug === slug);
            if (!tech) return null;
            const accent = (tech.accent ?? "teal") as ProductAccent;
            const a = ACCENTS[accent];
            const Icon = PILLAR_ICONS[slug] ?? Sparkles;

            return (
              <Link
                key={slug}
                href={`/technology/${tech.slug}`}
                className={cn(
                  "group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-white/10 bg-bg-surface p-4 transition-all hover:-translate-y-0.5 hover:bg-bg-elevated active:translate-y-0",
                  a.hoverBorder,
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute inset-y-0 left-0 w-0.5 bg-gradient-to-b opacity-80",
                    a.topLine,
                  )}
                />
                <div
                  className={cn(
                    "flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl border",
                    a.border,
                    a.bgSoft,
                  )}
                >
                  <Icon
                    className={cn("h-4 w-4", a.text)}
                    strokeWidth={1.6}
                  />
                  <span className="font-mono text-[8px] text-text-faint">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <p
                    className={cn(
                      "font-mono text-[9px] uppercase tracking-[0.18em]",
                      a.text,
                    )}
                  >
                    Layer {idx + 1}
                  </p>
                  <h3 className="mt-0.5 font-display text-sm font-semibold text-white">
                    {tech.name}
                  </h3>
                  <p className="mt-1 text-xs leading-snug text-text-muted">
                    {LAYER_TAGLINES[slug]}
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-text-faint" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
