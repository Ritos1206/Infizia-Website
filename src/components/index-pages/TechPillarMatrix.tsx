"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Sparkles,
  Brain,
  Database,
  Mic,
  Layers,
  TrendingUp,
  Stethoscope,
  Receipt,
  UserPlus,
  Award,
  MessageCircle,
  GraduationCap,
  School,
  ShoppingBag,
  FileText,
  Factory,
  Newspaper,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { TECHNOLOGY, PRODUCTS } from "@/lib/constants";
import { ACCENTS, type ProductAccent } from "@/lib/product-accents";
import { cn } from "@/lib/utils";

/**
 * /technology — Pillar-to-Products Matrix.
 *
 * For each of the 5 technology pillars, render a column with:
 *   • a header: pillar accent icon + name + one-line description
 *   • a body of "Powers these products" chips — the actual Infizia
 *     products that use this pillar, each clickable and accent-coloured
 *   • a footer CTA: "Explore pillar →"
 *
 * Distinct idiom from any prior section:
 *   • SolutionsShowcase used story-panel + products-panel zigzag rows
 *   • ProductsByIndustry used label-panel + products-strip per row
 *   • This is 5 vertical pillar columns, products as accent-coloured
 *     chips inside each column — the matrix view of which technology
 *     pillar drives which product.
 *
 * Layout:
 *   • lg+ : 5-col grid (one column per pillar)
 *   • md  : 2 + 2 + 1 (last pillar full-width)
 *   • <md : single column stack
 */

const PRODUCT_ACCENTS: Record<string, ProductAccent> = {
  eyecon: "teal",
  vitacare: "green",
  eyepos: "blue",
  convenor: "indigo",
  performix: "amber",
  meetrix: "violet",
  intellix: "rose",
  learnova: "fuchsia",
  lms: "orange",
  ecommerce: "lime",
  documind: "sky",
  infera: "cyan",
  opssight: "emerald",
  enews: "purple",
};

const PRODUCT_ICONS: Record<string, LucideIcon> = {
  eyecon: TrendingUp,
  vitacare: Stethoscope,
  eyepos: Receipt,
  convenor: UserPlus,
  performix: Award,
  meetrix: Mic,
  intellix: MessageCircle,
  learnova: GraduationCap,
  lms: School,
  ecommerce: ShoppingBag,
  documind: FileText,
  infera: Brain,
  opssight: Factory,
  enews: Newspaper,
};

const PILLAR_ICONS: Record<string, LucideIcon> = {
  "llm-genai": Sparkles,
  "agentic-architecture": Brain,
  rag: Database,
  "voice-ai": Mic,
  "application-architecture": Layers,
};

// Mapping: which products run on top of each pillar.
// "all" = the foundation pillars touch every product (kept as a
// dedicated branch so we render a single "Foundation · all 14" chip
// rather than 14 individual chips overflowing the column).
const POWERED_PRODUCTS: Record<string, string[] | "all"> = {
  "voice-ai": ["intellix", "vitacare", "eyecon", "meetrix"],
  "llm-genai": ["meetrix", "intellix", "learnova", "infera", "documind"],
  "agentic-architecture": ["convenor", "eyecon", "infera", "opssight"],
  rag: ["meetrix", "infera", "documind", "intellix"],
  "application-architecture": "all",
};

// Display order — same as TECHNOLOGY but arranged for visual rhythm.
// We keep TECHNOLOGY's natural order: LLM, Agentic, RAG, Voice, App Arch.
const PILLAR_ORDER = [
  "llm-genai",
  "agentic-architecture",
  "rag",
  "voice-ai",
  "application-architecture",
];

export function TechPillarMatrix() {
  return (
    <section className="relative border-t border-white/[0.06] py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-text-faint">
              Pillar × Product matrix
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Each pillar powers{" "}
              <span className="text-gradient-brand">specific products.</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-text-muted">
              Pick a pillar to see which Infizia surfaces it shows up in. The
              same retrieval system that grounds Meetrix&rsquo;s &ldquo;chat
              with the meeting&rdquo; also grounds Infera&rsquo;s research
              briefs.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-bg-surface px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary">
            <Sparkles className="h-3 w-3 text-brand-teal" />5 pillars · 14
            products
          </span>
        </div>

        {/* Pillar columns */}
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
          {PILLAR_ORDER.map((slug, idx) => {
            const tech = TECHNOLOGY.find((t) => t.slug === slug);
            if (!tech) return null;
            const accent = (tech.accent ?? "teal") as ProductAccent;
            const a = ACCENTS[accent];
            const Icon = PILLAR_ICONS[slug] ?? Sparkles;
            const powered = POWERED_PRODUCTS[slug];

            return (
              <Reveal key={slug} delay={idx * 0.05}>
                <div
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-bg-surface p-5 shadow-card transition-all duration-300 hover:bg-bg-elevated hover:shadow-[0_18px_40px_-16px_rgba(0,0,0,0.6)]",
                    a.hoverBorder,
                  )}
                >
                  {/* Top hairline */}
                  <span
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r opacity-50",
                      a.topLine,
                    )}
                  />
                  {/* Glow */}
                  <div
                    className={cn(
                      "pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl opacity-40 transition-opacity duration-300 group-hover:opacity-80",
                      a.glow,
                    )}
                  />

                  {/* Header */}
                  <div className="relative">
                    <div
                      className={cn(
                        "flex h-11 w-11 items-center justify-center rounded-xl border",
                        a.border,
                        a.bgSoft,
                        a.text,
                      )}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </div>
                    <p
                      className={cn(
                        "mt-4 font-mono text-[10px] uppercase tracking-[0.22em]",
                        a.text,
                      )}
                    >
                      Pillar · {String(idx + 1).padStart(2, "0")} / 5
                    </p>
                    <h3 className="mt-1.5 font-display text-lg font-semibold tracking-tight text-white">
                      {tech.shortLabel ?? tech.name}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-text-muted">
                      {tech.blurb}
                    </p>
                  </div>

                  {/* Powers strip */}
                  <div className="relative mt-5">
                    <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-text-faint">
                      Powers
                    </p>
                    <div className="mt-2 flex flex-col gap-1.5">
                      {powered === "all" ? (
                        <span
                          className={cn(
                            "inline-flex items-center justify-between gap-1.5 rounded-lg border bg-bg-elevated/60 px-2.5 py-2",
                            a.border,
                            a.bgSoft,
                          )}
                        >
                          <span className="flex items-center gap-2">
                            <Sparkles
                              className={cn("h-3.5 w-3.5", a.text)}
                              strokeWidth={1.6}
                            />
                            <span className="font-display text-xs font-medium text-white">
                              All 14 products
                            </span>
                          </span>
                          <span className="font-mono text-[8px] uppercase tracking-wider text-text-faint">
                            Foundation
                          </span>
                        </span>
                      ) : (
                        powered.map((pSlug) => {
                          const p = PRODUCTS.find((x) => x.slug === pSlug);
                          if (!p) return null;
                          const pa = PRODUCT_ACCENTS[pSlug] ?? "teal";
                          const pp = ACCENTS[pa];
                          const PIcon = PRODUCT_ICONS[pSlug] ?? Sparkles;
                          return (
                            <Link
                              key={pSlug}
                              href={`/products/${pSlug}`}
                              className={cn(
                                "group/p flex items-center gap-2 overflow-hidden rounded-lg border border-white/10 bg-bg-elevated/60 px-2 py-1.5 transition-all hover:-translate-y-0.5 hover:bg-bg-elevated active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-1 focus-visible:ring-offset-bg-base",
                                pp.hoverBorder,
                              )}
                            >
                              <span
                                className={cn(
                                  "flex h-6 w-6 shrink-0 items-center justify-center rounded border",
                                  pp.border,
                                  pp.bgSoft,
                                  pp.text,
                                )}
                              >
                                <PIcon className="h-3 w-3" strokeWidth={1.6} />
                              </span>
                              <span className="font-display text-xs font-medium text-white">
                                {p.shortName ?? p.name}
                              </span>
                              {p.flagship && (
                                <span
                                  className={cn(
                                    "ml-auto inline-flex items-center rounded-full border px-1 font-mono text-[7px] uppercase tracking-[0.16em]",
                                    pp.border,
                                    pp.bgSoft,
                                    pp.text,
                                  )}
                                >
                                  ★
                                </span>
                              )}
                            </Link>
                          );
                        })
                      )}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/technology/${tech.slug}`}
                    className={cn(
                      "relative mt-auto inline-flex items-center justify-between gap-1.5 rounded-full border px-3 py-1.5 pt-1.5 font-mono text-[10px] uppercase tracking-[0.18em] transition-all hover:bg-white/[0.04] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base",
                      a.border,
                      a.bgSoft,
                      a.text,
                    )}
                    style={{ marginTop: "1.25rem" }}
                  >
                    <span>Explore pillar</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
