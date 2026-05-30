import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { TechStackBlueprint } from "@/components/index-pages/TechStackBlueprint";
import { TechPillarMatrix } from "@/components/index-pages/TechPillarMatrix";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Technology",
  description:
    "The technology practice powering Infizia: voice surfaces, language models, agentic architecture, retrieval, and the cloud-native foundation that holds it all up — engineered as one cognitive stack.",
  path: "/technology",
});

/**
 * /technology — full redesign per D-76.
 *
 * Replaces the prior uniform 3-col card grid with two distinct
 * sections, each with its own visual idiom:
 *
 *   1. TechStackBlueprint — vertical 5-layer architectural stack
 *                           (Voice → LLM → Agents → RAG → App Arch)
 *                           with a traveling data dot flowing top-to-
 *                           bottom on a 6-second loop and a foundation
 *                           rail beneath
 *   2. TechPillarMatrix    — 5-column pillar matrix showing which
 *                            Infizia products run on top of each pillar,
 *                            rendered as accent-coloured product chips.
 *                            App Architecture column shows "All 14
 *                            products" since it's the foundation.
 *
 * Plus a final CTA strip linking to architect contact + corporate brochure.
 */
export default function TechnologyIndexPage() {
  return (
    <>
      <TechStackBlueprint />
      <TechPillarMatrix />

      {/* Final CTA strip */}
      <section className="relative border-t border-white/[0.06] py-20 md:py-24">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-bg-elevated to-bg-surface p-8 md:p-12">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-violet/[0.12] blur-3xl" />
              <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-brand-cyan/[0.12] blur-3xl" />

              <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-text-faint">
                    Building something custom?
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
                    Talk to an architect.
                  </h2>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-text-muted">
                    The same five pillars that power our products can power
                    yours. Walk through the architecture with our team and
                    we&rsquo;ll size the build with you.
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-end gap-3">
                  <Link
                    href="/contact/sales"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-teal px-7 text-sm font-medium text-bg-base shadow-glow-teal transition-all hover:bg-brand-teal-soft hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base"
                  >
                    Talk to an architect
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/red-hat"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-7 text-sm font-medium text-white transition-all hover:border-white/30 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base"
                  >
                    Visit Red Hat practice
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
