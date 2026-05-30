import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { ServicesArena } from "@/components/index-pages/ServicesArena";
import { ServicesLifecycle } from "@/components/index-pages/ServicesLifecycle";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Engineering services across enterprise web & app development, agentic AI, blockchain, Red Hat stack, and Google Cloud — designed, built, and run by one team.",
  path: "/services",
});

/**
 * /services — full redesign per D-76.
 *
 * Replaces the prior uniform 3-col card grid with two distinct
 * sections, each with its own visual idiom:
 *
 *   1. ServicesArena       — 5 service tiles in an asymmetric grid,
 *                            each carrying its own bespoke micro-
 *                            animation: MultiDeviceDance (web/app),
 *                            AgentTriangle (agentic AI), ChainGrowth
 *                            (blockchain), PortalPillar (Red Hat),
 *                            RegionPulse (Google Cloud)
 *   2. ServicesLifecycle   — 5-stop horizontal delivery cadence:
 *                            Discover → Design → Build → Ship → Run
 *
 * Plus a final CTA strip linking to demo + sales.
 */
export default function ServicesIndexPage() {
  return (
    <>
      <ServicesArena />
      <ServicesLifecycle />

      {/* Final CTA strip */}
      <section className="relative border-t border-white/[0.06] py-20 md:py-24">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-bg-elevated to-bg-surface p-8 md:p-12">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-blue/[0.12] blur-3xl" />
              <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-brand-violet/[0.12] blur-3xl" />

              <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-text-faint">
                    Have a project in mind?
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
                    Let&rsquo;s scope it together.
                  </h2>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-text-muted">
                    Tell us what you&rsquo;re building. We&rsquo;ll come back
                    with a concrete plan, a price band, and a timeline within
                    one working day.
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-end gap-3">
                  <Link
                    href="/contact/sales"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-teal px-7 text-sm font-medium text-bg-base shadow-glow-teal transition-all hover:bg-brand-teal-soft hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base"
                  >
                    Talk to sales
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact/demo"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-7 text-sm font-medium text-white transition-all hover:border-white/30 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base"
                  >
                    Book a demo
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
