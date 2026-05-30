import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { ProductsAtlasHero } from "@/components/index-pages/ProductsAtlasHero";
import { FlagshipTriple } from "@/components/index-pages/FlagshipTriple";
import { ProductsByIndustry } from "@/components/index-pages/ProductsByIndustry";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Products",
  description:
    "The Infizia product ecosystem — fourteen AI-native products across ten industries, anchored by three flagships (EyeCON, VitaCare, EyePOS) and powered by one cognitive stack.",
  path: "/products",
});

/**
 * /products — full redesign per D-76.
 *
 * Replaces the old PlaceholderHero + uniform 3-col card grid with three
 * dedicated sections, each with its own visual idiom:
 *
 *   1. ProductsAtlasHero      — three-ring counter-rotating ecosystem map
 *                               with all 14 products as nodes around the
 *                               Infizia core
 *   2. FlagshipTriple         — three flagship spotlight cards each with
 *                               a distinct mini-mockup (phone · calendar
 *                               · POS receipt) baked in
 *   3. ProductsByIndustry     — 10 industry rows pairing a vertical label
 *                               panel with its products as a clickable
 *                               cards strip
 *
 * Plus a final CTA strip linking to the demo and contact pages.
 */
export default function ProductsIndexPage() {
  return (
    <>
      <ProductsAtlasHero />
      <FlagshipTriple />
      <ProductsByIndustry />

      {/* Final CTA strip */}
      <section className="relative border-t border-white/[0.06] py-20 md:py-24">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-bg-elevated to-bg-surface p-8 md:p-12">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-teal/[0.12] blur-3xl" />
              <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-brand-blue/[0.12] blur-3xl" />

              <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-text-faint">
                    Pick your starting point
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
                    See the stack in action.
                  </h2>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-text-muted">
                    Book a 30-minute demo and we&rsquo;ll walk you through the
                    products that match your industry — with live data, real
                    workflows, and your team in the room.
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
                    href="/solutions"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-7 text-sm font-medium text-white transition-all hover:border-white/30 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base"
                  >
                    Explore by industry
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
