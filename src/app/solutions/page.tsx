import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { Kicker } from "@/components/ui/Kicker";
import { GridBackground } from "@/components/motion/GridBackground";
import { ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SOLUTIONS } from "@/lib/constants";
import { ACCENTS } from "@/lib/product-accents";
import { cn } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Solutions",
  description:
    "Industry solutions across healthcare, HR, customer support, education, e-commerce, finance, intelligence, industrial IoT, and media. Each one mapped to the right Infizia products with measurable outcomes.",
  path: "/solutions",
});

/**
 * Solutions index — Phase 5.
 *
 * Renders all 9 industry solution cards using the D-57 clickable-card
 * standard:
 *   • Whole card is the <Link>
 *   • Hover lift + accent border + soft drop shadow
 *   • Active press scale-down
 *   • Focus-visible ring (teal default — vertical-specific accent shows
 *     on hover via border instead, since Tailwind v4 needs static class
 *     names for ring colors)
 *
 * Each card uses its solution's per-vertical accent for the icon block,
 * top-line shimmer, and hover border tint — so the index already feels
 * like a tour of 9 distinct verticals before the user clicks anywhere.
 */
export default function SolutionsIndexPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-20 pb-16 md:pt-28 md:pb-20">
        <GridBackground />

        <Container>
          <div className="max-w-3xl">
            <Reveal>
              <Kicker>Industry Solutions</Kicker>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
                Built for the industries{" "}
                <span className="text-gradient-brand">that move the world.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
                Each Infizia solution maps a vertical&apos;s hardest problems to
                the right combination of products, services, and AI
                capabilities — productised, measurable, and rolled out in
                weeks, not quarters.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 flex flex-wrap items-center gap-4 text-xs">
                <span className="font-mono uppercase tracking-[0.2em] text-text-faint">
                  10 Verticals · 14 Products · 1 Stack
                </span>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Solution cards grid */}
      <Container className="pb-24 md:pb-32">
        <RevealGroup
          stagger={0.05}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {SOLUTIONS.map((s) => {
            const accent = s.accent ?? "teal";
            const a = ACCENTS[accent];

            return (
              <Reveal key={s.slug}>
                <Link
                  href={`/solutions/${s.slug}`}
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-bg-surface p-6 shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-bg-elevated hover:shadow-[0_18px_40px_-16px_rgba(0,0,0,0.6)] active:translate-y-0 active:scale-[0.995] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base md:p-7",
                    a.hoverBorder,
                  )}
                >
                  {/* Top hairline shimmer — accent-tinted */}
                  <span
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r opacity-50 transition-opacity duration-300 group-hover:opacity-100",
                      a.topLine,
                    )}
                  />

                  {/* Soft accent glow on hover */}
                  <div
                    className={cn(
                      "pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-60",
                      a.glow,
                    )}
                  />

                  <div className="relative flex items-start justify-between gap-3">
                    <div
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-xl border text-2xl",
                        a.border,
                        a.bgSoft,
                      )}
                    >
                      {s.emoji}
                    </div>
                    <ArrowUpRight
                      className="h-5 w-5 text-text-faint transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>

                  <p className="relative mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-text-faint">
                    Industry · {s.verticalLabel ?? s.name}
                  </p>

                  <h3 className="relative mt-2 font-display text-2xl font-semibold tracking-tight text-white">
                    {s.name}
                  </h3>

                  <p className="relative mt-3 flex-1 text-sm leading-relaxed text-text-muted">
                    {s.blurb}
                  </p>

                  <span
                    className={cn(
                      "relative mt-6 inline-flex items-center gap-1.5 text-sm font-medium transition-colors",
                      a.text,
                    )}
                  >
                    Explore {s.name}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </RevealGroup>
      </Container>
    </>
  );
}
