import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { Kicker } from "@/components/ui/Kicker";
import { GridBackground } from "@/components/motion/GridBackground";
import {
  ArrowUpRight,
  BrainCircuit,
  Cloud,
  Code2,
  Coins,
  Server,
  type LucideIcon,
} from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SERVICES } from "@/lib/constants";
import { ACCENTS } from "@/lib/product-accents";
import { cn } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Engineering services across enterprise web & app development, agentic AI, blockchain, Red Hat stack, and Google Cloud — design, build, run.",
  path: "/services",
});

/** Icon per service slug. */
const SERVICE_ICONS: Record<string, LucideIcon> = {
  "web-app-development": Code2,
  "ai-agentic-systems": BrainCircuit,
  blockchain: Coins,
  "redhat-stack": Server,
  "google-cloud": Cloud,
};

/**
 * Services index — Phase 6.
 *
 * Mirrors the corporate deck (page 4) Our Expertise section: 5 service
 * cards in deck order. Four cards link to dedicated `/services/<slug>`
 * pages with bespoke heroes; the Red Hat Stack card has
 * `redirectsTo: "/red-hat"` and renders with a neutral teal-tinted
 * "Red Hat practice" pill instead of an accent (per D-04 — brand-redhat
 * color stays only inside `/red-hat/*` content).
 *
 * D-57 standard: whole card clickable, hover lift + shadow, active
 * press, focus ring. Each card uses its service's per-accent on icon
 * block, top hairline shimmer, and hover border tint.
 */
export default function ServicesIndexPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-20 pb-16 md:pt-28 md:pb-20">
        <GridBackground />

        <Container>
          <div className="max-w-3xl">
            <Reveal>
              <Kicker>Our Expertise</Kicker>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
                Engineering services{" "}
                <span className="text-gradient-brand">that ship.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
                Five practices, one partner. Custom web and mobile platforms,
                production-grade agentic AI, blockchain and ICO listing, the
                full Red Hat stack, and Google Cloud done right — designed,
                built, and run by one team.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 flex flex-wrap items-center gap-4 text-xs">
                <span className="font-mono uppercase tracking-[0.2em] text-text-faint">
                  5 Practices · Discovery · Build · Run
                </span>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Service cards grid */}
      <Container className="pb-24 md:pb-32">
        <RevealGroup
          stagger={0.05}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((s) => {
            const Icon = SERVICE_ICONS[s.slug] ?? Code2;
            const isRedirect = !!s.redirectsTo;
            const accent = s.accent;
            const a = accent ? ACCENTS[accent] : null;
            const href = s.redirectsTo ?? `/services/${s.slug}`;

            return (
              <Reveal key={s.slug}>
                <Link
                  href={href}
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-bg-surface p-6 shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-bg-elevated hover:shadow-[0_18px_40px_-16px_rgba(0,0,0,0.6)] active:translate-y-0 active:scale-[0.995] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base md:p-7",
                    a ? a.hoverBorder : "hover:border-white/30",
                  )}
                >
                  {/* Top hairline shimmer */}
                  <span
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r opacity-50 transition-opacity duration-300 group-hover:opacity-100",
                      a
                        ? a.topLine
                        : "from-transparent via-white/20 to-transparent",
                    )}
                  />

                  {/* Soft accent glow on hover */}
                  {a && (
                    <div
                      className={cn(
                        "pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-60",
                        a.glow,
                      )}
                    />
                  )}

                  <div className="relative flex items-start justify-between gap-3">
                    <div
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-xl border",
                        a
                          ? cn(a.border, a.bgSoft, a.text)
                          : "border-white/10 bg-white/[0.03] text-text-secondary",
                      )}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </div>

                    {/* Red Hat practice pill on the Red Hat card · plain arrow elsewhere */}
                    {isRedirect ? (
                      <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/[0.04] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-text-secondary">
                        <span className="h-1 w-1 rounded-full bg-redhat" />
                        Visit practice
                      </span>
                    ) : (
                      <ArrowUpRight
                        className="h-5 w-5 text-text-faint transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    )}
                  </div>

                  <p className="relative mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-text-faint">
                    Service{isRedirect && " · cross-section"}
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
                      a ? a.text : "text-text-secondary",
                    )}
                  >
                    {isRedirect ? "Visit Red Hat practice" : `Explore ${s.name}`}
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
