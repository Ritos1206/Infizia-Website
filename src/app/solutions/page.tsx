import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SolutionsHoneycombHero } from "@/components/index-pages/SolutionsHoneycombHero";
import { SolutionsShowcase } from "@/components/index-pages/SolutionsShowcase";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Solutions",
  description:
    "Industry solutions across sales, healthcare, HR, customer support, education, e-commerce, finance, intelligence, industrial IoT, and media — each mapped to the Infizia products that anchor it.",
  path: "/solutions",
});

/**
 * /solutions — full redesign per D-76.
 *
 * Replaces the prior uniform 3-col card grid with two distinct
 * sections, each with its own visual idiom:
 *
 *   1. SolutionsHoneycombHero — 10-cell honeycomb mosaic where each
 *                              hex represents a vertical (3-4-3
 *                              staggered layout, hover lift + accent
 *                              glow, "shared substrate" foundation
 *                              strip below)
 *   2. SolutionsShowcase     — 10 zig-zag rich rows, alternating sides
 *                              on lg+, each pairing a story panel with
 *                              a stack-of-anchor-products panel
 *
 * Plus a final CTA strip linking to demo + products.
 */
export default function SolutionsIndexPage() {
  return (
    <>
      <SolutionsHoneycombHero />
      <SolutionsShowcase />

      {/* Final CTA strip */}
      <section className="relative border-t border-white/[0.06] py-20 md:py-24">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-bg-elevated to-bg-surface p-8 md:p-12">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-fuchsia/[0.12] blur-3xl" />
              <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-brand-cyan/[0.12] blur-3xl" />

              <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-text-faint">
                    Not sure where you fit?
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
                    We&rsquo;ll map your industry in 30 minutes.
                  </h2>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-text-muted">
                    Book a demo with our solutions team — we&rsquo;ll walk you
                    through the products that fit your industry, your scale,
                    and your timeline.
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-end gap-3">
                  <Link
                    href="/contact/demo"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-teal px-7 text-sm font-medium text-bg-base shadow-glow-teal transition-all hover:bg-brand-teal-soft hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base"
                  >
                    Book a demo
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/products"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-7 text-sm font-medium text-white transition-all hover:border-white/30 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base"
                  >
                    See all products
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
