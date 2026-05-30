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
import { PRODUCTS, SOLUTIONS } from "@/lib/constants";
import type { ProductVertical } from "@/lib/constants";
import { ACCENTS, type ProductAccent } from "@/lib/product-accents";
import { cn } from "@/lib/utils";

/**
 * /products — Products By Industry showcase.
 *
 * For each of the 10 industry verticals, render a row that pairs:
 *   • the vertical's emoji + name + product count + "View solution" link
 *     (anchors to the matching /solutions/<slug> page)
 *   • the products in that vertical, rendered as full clickable cards
 *     with their per-product accent (icon block, top hairline, hover
 *     border tint, accent text on the explore link)
 *
 * D-57 standard preserved on each card. The row layout itself is
 * 5-cols / 7-cols on desktop (2-col label panel + horizontal product
 * cards strip) and stacks on mobile.
 *
 * Visually distinct from the prior 3-col card grid — vertical-led
 * grouping makes the catalogue feel like a tour of industries rather
 * than an undifferentiated wall of products.
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

// Verticals in the order we want them to appear. Pulled from SOLUTIONS
// (Sales first, then alphabetical via the canonical solution order).
const VERTICAL_ORDER: ProductVertical[] = [
  "Sales",
  "Healthcare",
  "HR & Workforce",
  "Customer Support",
  "Education",
  "E-Commerce",
  "Finance & Operations",
  "Intelligence & Research",
  "Industrial Intelligence & IoT",
  "Media & Publishing",
];

export function ProductsByIndustry() {
  return (
    <section className="relative border-t border-white/[0.06] py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-text-faint">
              By industry · Tier 2 onwards
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Every industry has its own{" "}
              <span className="text-gradient-brand">cognitive core.</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-text-muted">
              Browse the full ecosystem grouped by the ten industries Infizia
              serves. Each vertical anchors one or more products that share
              the same identity, memory, and platform layer underneath.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-bg-surface px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary">
            <Sparkles className="h-3 w-3 text-brand-teal" />
            10 verticals · 14 products
          </span>
        </div>

        <div className="mt-12 flex flex-col gap-12 md:gap-16">
          {VERTICAL_ORDER.map((vertical, vIdx) => {
            const products = PRODUCTS.filter((p) => p.vertical === vertical);
            if (products.length === 0) return null;

            const solution = SOLUTIONS.find((s) => s.verticalLabel === vertical);
            const accentForRow = solution?.accent ?? "teal";
            const a = ACCENTS[accentForRow];

            return (
              <Reveal key={vertical} delay={vIdx * 0.04}>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
                  {/* Label panel (left) */}
                  <div className="md:col-span-4 lg:col-span-3">
                    <div
                      className={cn(
                        "relative overflow-hidden rounded-2xl border border-white/[0.08] bg-bg-surface/60 p-5 shadow-card md:sticky md:top-24",
                        a.hoverBorder,
                      )}
                    >
                      <span
                        aria-hidden
                        className={cn(
                          "pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b opacity-70",
                          a.topLine,
                        )}
                      />
                      <div
                        className={cn(
                          "pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl opacity-60",
                          a.glow,
                        )}
                      />
                      <div className="relative">
                        <div
                          className={cn(
                            "inline-flex h-10 w-10 items-center justify-center rounded-xl border text-xl",
                            a.border,
                            a.bgSoft,
                          )}
                        >
                          {solution?.emoji ?? "✦"}
                        </div>
                        <p className={cn("mt-4 font-mono text-[10px] uppercase tracking-[0.22em]", a.text)}>
                          Industry · {String(vIdx + 1).padStart(2, "0")} / 10
                        </p>
                        <h3 className="mt-1.5 font-display text-2xl font-semibold tracking-tight text-white">
                          {vertical}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-text-muted">
                          {solution?.blurb ??
                            "Products engineered for this vertical."}
                        </p>
                        <div className="mt-5 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em]">
                          <span className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-1 text-text-secondary">
                            {products.length}{" "}
                            {products.length === 1 ? "product" : "products"}
                          </span>
                          {solution && (
                            <Link
                              href={`/solutions/${solution.slug}`}
                              className={cn(
                                "inline-flex items-center gap-1 rounded-full border px-2 py-1 transition-colors hover:text-white",
                                a.border,
                                a.bgSoft,
                                a.text,
                              )}
                            >
                              View solution
                              <ArrowUpRight className="h-3 w-3" />
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Product cards strip (right) */}
                  <div className="md:col-span-8 lg:col-span-9">
                    <div
                      className={cn(
                        "grid gap-4",
                        products.length === 1 && "grid-cols-1",
                        products.length === 2 && "grid-cols-1 sm:grid-cols-2",
                        products.length >= 3 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
                      )}
                    >
                      {products.map((p) => {
                        const acc = PRODUCT_ACCENTS[p.slug] ?? "teal";
                        const ap = ACCENTS[acc];
                        const Icon = PRODUCT_ICONS[p.slug] ?? Sparkles;

                        return (
                          <Link
                            key={p.slug}
                            href={`/products/${p.slug}`}
                            className={cn(
                              "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-bg-surface p-5 shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-bg-elevated hover:shadow-[0_18px_40px_-16px_rgba(0,0,0,0.6)] active:translate-y-0 active:scale-[0.995] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base",
                              ap.hoverBorder,
                            )}
                          >
                            <span
                              aria-hidden
                              className={cn(
                                "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r opacity-50 transition-opacity duration-300 group-hover:opacity-100",
                                ap.topLine,
                              )}
                            />
                            <div
                              className={cn(
                                "pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-70",
                                ap.glow,
                              )}
                            />
                            <div className="relative flex items-start justify-between gap-2">
                              <div
                                className={cn(
                                  "flex h-11 w-11 items-center justify-center rounded-xl border",
                                  ap.border,
                                  ap.bgSoft,
                                  ap.text,
                                )}
                              >
                                <Icon className="h-5 w-5" strokeWidth={1.6} />
                              </div>
                              {p.flagship && (
                                <span
                                  className={cn(
                                    "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em]",
                                    ap.border,
                                    ap.bgSoft,
                                    ap.text,
                                  )}
                                >
                                  ★ Flagship
                                </span>
                              )}
                            </div>

                            <h4 className="relative mt-4 font-display text-lg font-semibold tracking-tight text-white">
                              {p.name}
                            </h4>
                            <p className="relative mt-1.5 line-clamp-3 flex-1 text-xs leading-relaxed text-text-muted">
                              {p.blurb}
                            </p>

                            <span
                              className={cn(
                                "relative mt-4 inline-flex items-center gap-1.5 text-xs font-medium",
                                ap.text,
                              )}
                            >
                              Explore
                              <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </span>
                          </Link>
                        );
                      })}
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
