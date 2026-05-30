"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  TrendingUp,
  Stethoscope,
  Receipt,
  UserPlus,
  Award,
  Mic,
  MessageCircle,
  GraduationCap,
  School,
  ShoppingBag,
  FileText,
  Brain,
  Factory,
  Newspaper,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SOLUTIONS, PRODUCTS } from "@/lib/constants";
import { ACCENTS, type ProductAccent } from "@/lib/product-accents";
import { cn } from "@/lib/utils";

/**
 * /solutions — Solution Showcase rows.
 *
 * For each of the 10 verticals, render a wide row that pairs:
 *   • a left "story" panel with vertical kicker + name + tagline +
 *     "View solution" CTA
 *   • a right "stack" panel with the products that anchor this
 *     vertical, rendered as accent-coloured chips with their icons,
 *     each clickable.
 *
 * Rows ALTERNATE side on lg+ screens (zig-zag layout) — odd rows put
 * the story panel on the right, even rows on the left. Creates a
 * scrollable narrative feel rather than a grid.
 *
 * Each row gets a soft accent glow tied to the solution's accent and a
 * vertical accent bar on the story panel — different per row so the
 * page feels like a tour of 10 distinct industries.
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

export function SolutionsShowcase() {
  return (
    <section className="relative border-t border-white/[0.06] py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-text-faint">
              Vertical deep-dive
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Each vertical, mapped to{" "}
              <span className="text-gradient-brand">its anchor products.</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-text-muted">
              Every solution names the products that anchor it — so you can
              see, before clicking, exactly which Infizia surfaces show up in
              your industry&rsquo;s deployment.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-bg-surface px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary">
            <Sparkles className="h-3 w-3 text-brand-teal" />
            10 verticals · 14 products
          </span>
        </div>

        <div className="mt-12 flex flex-col gap-8 md:gap-10">
          {SOLUTIONS.map((sol, idx) => {
            const accent = sol.accent ?? "teal";
            const a = ACCENTS[accent];
            const products = PRODUCTS.filter(
              (p) => p.vertical === sol.verticalLabel,
            );
            const isReversed = idx % 2 === 1;

            return (
              <Reveal key={sol.slug} delay={idx * 0.03}>
                <div
                  className={cn(
                    "group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-bg-surface/70 p-6 shadow-card transition-colors hover:bg-bg-surface md:p-8",
                    a.hoverBorder,
                  )}
                >
                  {/* Top hairline shimmer */}
                  <span
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r opacity-50",
                      a.topLine,
                    )}
                  />

                  {/* Soft accent glow */}
                  <div
                    className={cn(
                      "pointer-events-none absolute h-72 w-72 rounded-full blur-3xl opacity-50",
                      a.glow,
                      isReversed ? "-left-20 -top-20" : "-right-20 -top-20",
                    )}
                  />

                  <div
                    className={cn(
                      "relative grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10",
                      isReversed && "lg:[direction:rtl]",
                    )}
                  >
                    {/* Story panel */}
                    <div
                      className={cn(
                        "lg:col-span-5 lg:[direction:ltr]",
                        "relative",
                      )}
                    >
                      <div
                        className={cn(
                          "absolute -left-6 top-0 hidden h-full w-px bg-gradient-to-b lg:block",
                          a.topLine,
                        )}
                      />
                      <div className="flex items-center gap-3">
                        <span
                          className={cn(
                            "flex h-12 w-12 items-center justify-center rounded-xl border text-2xl",
                            a.border,
                            a.bgSoft,
                          )}
                        >
                          {sol.emoji}
                        </span>
                        <div>
                          <p
                            className={cn(
                              "font-mono text-[10px] uppercase tracking-[0.22em]",
                              a.text,
                            )}
                          >
                            Vertical · {String(idx + 1).padStart(2, "0")} / 10
                          </p>
                          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-faint">
                            {sol.verticalLabel ?? sol.name}
                          </p>
                        </div>
                      </div>

                      <h3 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-tight text-white md:text-3xl">
                        {sol.name}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-text-muted">
                        {sol.blurb}
                      </p>

                      <Link
                        href={`/solutions/${sol.slug}`}
                        className={cn(
                          "mt-6 inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-all hover:-translate-y-0.5 hover:bg-white/[0.04] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base",
                          a.border,
                          a.bgSoft,
                          a.text,
                        )}
                      >
                        Open {sol.name} solution
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>

                    {/* Products stack panel */}
                    <div className="lg:col-span-7 lg:[direction:ltr]">
                      <div className="flex items-center justify-between">
                        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-faint">
                          Anchored by
                        </p>
                        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-secondary">
                          {products.length}{" "}
                          {products.length === 1 ? "product" : "products"}
                        </span>
                      </div>
                      <div
                        className={cn(
                          "mt-3 grid gap-3",
                          products.length === 1 && "grid-cols-1",
                          products.length === 2 && "grid-cols-1 sm:grid-cols-2",
                          products.length >= 3 && "grid-cols-1 sm:grid-cols-2",
                        )}
                      >
                        {products.map((p) => {
                          const pa = PRODUCT_ACCENTS[p.slug] ?? "teal";
                          const pp = ACCENTS[pa];
                          const Icon = PRODUCT_ICONS[p.slug] ?? Sparkles;
                          return (
                            <Link
                              key={p.slug}
                              href={`/products/${p.slug}`}
                              className={cn(
                                "group/card relative flex items-center gap-3 overflow-hidden rounded-xl border border-white/10 bg-bg-elevated/60 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:bg-bg-elevated hover:shadow-[0_12px_28px_-12px_rgba(0,0,0,0.6)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base",
                                pp.hoverBorder,
                              )}
                            >
                              <div
                                className={cn(
                                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border",
                                  pp.border,
                                  pp.bgSoft,
                                  pp.text,
                                )}
                              >
                                <Icon className="h-4 w-4" strokeWidth={1.6} />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center gap-1.5">
                                  <p className="truncate font-display text-sm font-semibold tracking-tight text-white">
                                    {p.name}
                                  </p>
                                  {p.flagship && (
                                    <span
                                      className={cn(
                                        "inline-flex items-center rounded-full border px-1.5 font-mono text-[7px] uppercase tracking-[0.16em]",
                                        pp.border,
                                        pp.bgSoft,
                                        pp.text,
                                      )}
                                    >
                                      ★
                                    </span>
                                  )}
                                </div>
                                <p className="mt-0.5 line-clamp-2 text-[11px] leading-snug text-text-muted">
                                  {p.blurb}
                                </p>
                              </div>
                              <ArrowUpRight
                                className={cn(
                                  "h-4 w-4 shrink-0 text-text-faint transition-all duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5",
                                  pp.text,
                                )}
                              />
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
