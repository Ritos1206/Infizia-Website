"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { SOLUTIONS, PRODUCTS } from "@/lib/constants";
import { ACCENTS } from "@/lib/product-accents";
import { cn } from "@/lib/utils";

/**
 * /solutions — Industry Mosaic Hero (rev 2).
 *
 * Earlier rev used hex clip-paths which read as awkward rhombuses at
 * smaller sizes. This rev replaces them with clean rounded-rectangle
 * tiles laid out as a 5×2 mosaic on lg+ — a "verticals atlas" rather
 * than a forced honeycomb.
 *
 * Each tile is a clickable Link with:
 *   • the vertical's emoji on a tinted accent block
 *   • the vertical name
 *   • product count chip ("4 products")
 *   • soft accent glow that brightens on hover
 *   • lift + accent border on hover
 *
 * Beneath the mosaic sits a "shared substrate" foundation strip — a
 * thin gradient bar reading "Infizia · cognitive stack" that visually
 * ties all 10 verticals to one platform.
 */

function MosaicTile({ slug, idx }: { slug: string; idx: number }) {
  const sol = SOLUTIONS.find((s) => s.slug === slug);
  if (!sol) return null;
  const accent = sol.accent ?? "teal";
  const a = ACCENTS[accent];
  const products = PRODUCTS.filter((p) => p.vertical === sol.verticalLabel);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.5,
        delay: idx * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        href={`/solutions/${sol.slug}`}
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-bg-surface p-4 shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-bg-elevated hover:shadow-[0_18px_40px_-16px_rgba(0,0,0,0.6)] active:translate-y-0 active:scale-[0.995] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base md:p-5",
          a.hoverBorder,
        )}
      >
        {/* Top hairline shimmer */}
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r opacity-50 transition-opacity duration-300 group-hover:opacity-100",
            a.topLine,
          )}
        />

        {/* Soft accent glow */}
        <div
          className={cn(
            "pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full blur-3xl opacity-40 transition-opacity duration-300 group-hover:opacity-80",
            a.glow,
          )}
        />

        <div className="relative flex items-start justify-between gap-2">
          <div
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-xl border text-xl",
              a.border,
              a.bgSoft,
            )}
          >
            {sol.emoji}
          </div>
          <ArrowUpRight
            className={cn(
              "h-4 w-4 text-text-faint opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
              a.text,
            )}
          />
        </div>

        <p
          className={cn(
            "relative mt-4 font-mono text-[9px] uppercase tracking-[0.18em]",
            a.text,
          )}
        >
          {String(idx + 1).padStart(2, "0")} / 10
        </p>

        <h3 className="relative mt-1 font-display text-base font-semibold tracking-tight text-white md:text-lg">
          {sol.name}
        </h3>

        <span className="relative mt-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-text-secondary">
          <span className={cn("h-1 w-1 rounded-full", a.bg)} />
          {products.length}{" "}
          {products.length === 1 ? "product" : "products"}
        </span>
      </Link>
    </motion.div>
  );
}

export function SolutionsHoneycombHero() {
  const order = [
    "sales",
    "healthcare",
    "hr-workforce",
    "customer-support",
    "education",
    "ecommerce",
    "finance-operations",
    "intelligence-research",
    "industrial-iot",
    "media-publishing",
  ];

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
        <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-brand-fuchsia/[0.06] blur-[140px]" />
        <div className="absolute right-1/4 top-1/2 h-80 w-80 rounded-full bg-brand-cyan/[0.06] blur-[140px]" />
        <div className="absolute left-1/2 bottom-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-amber/[0.06] blur-[140px]" />
      </div>

      <div className="container-page">
        {/* Title block */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="kicker mx-auto">
            <span className="kicker-dot" />
            <span>Industry Solutions</span>
          </div>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
            Ten industries.{" "}
            <span className="text-gradient-brand">One cognitive stack.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
            Each Infizia solution maps a vertical&apos;s hardest problems to
            the right combination of products, services, and AI capabilities —
            productised, measurable, and rolled out in weeks.
          </p>
        </div>

        {/* Mosaic — 5 cols × 2 rows on lg, 3 cols on md, 2 cols on sm */}
        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-5">
          {order.map((slug, i) => (
            <MosaicTile key={slug} slug={slug} idx={i} />
          ))}
        </div>

        {/* Foundation strip */}
        <div className="mx-auto mt-10 flex max-w-2xl items-center gap-3 rounded-full border border-white/10 bg-bg-surface/80 px-4 py-2 backdrop-blur-sm">
          <Sparkles
            className="h-3.5 w-3.5 shrink-0 text-brand-teal"
            strokeWidth={1.6}
          />
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-secondary">
            Shared substrate
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-brand-green/50 via-brand-teal/50 to-brand-blue/50" />
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-secondary">
            Infizia · cognitive stack
          </span>
        </div>
      </div>
    </section>
  );
}
