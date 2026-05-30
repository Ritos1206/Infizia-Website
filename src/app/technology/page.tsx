import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { Kicker } from "@/components/ui/Kicker";
import { GridBackground } from "@/components/motion/GridBackground";
import { ArrowUpRight, Sparkles, Brain, Database, Mic, Layers, type LucideIcon } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { TECHNOLOGY } from "@/lib/constants";
import { ACCENTS } from "@/lib/product-accents";
import { cn } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Technology",
  description:
    "The technology practice powering Infizia: LLM & generative AI, agentic architecture, RAG systems, voice & conversational AI, and modern application architecture.",
  path: "/technology",
});

/**
 * Technology index — Phase 7.
 *
 * D-57 clickable-card standard. Each pillar card carries:
 *   • Whole card as <Link>
 *   • Per-pillar accent on icon block, top hairline shimmer, hover
 *     border, and explore-link text
 *   • Hover lift + accent glow + arrow translation
 *   • Active press + focus ring
 *
 * Per-pillar icon (LLM=Sparkles, Agents=Brain, RAG=Database,
 * Voice=Mic, App Arch=Layers) gives the catalogue visual variety
 * — same role solutions' emojis play.
 */

const PILLAR_ICONS: Record<string, LucideIcon> = {
  "llm-genai": Sparkles,
  "agentic-architecture": Brain,
  rag: Database,
  "voice-ai": Mic,
  "application-architecture": Layers,
};

export default function TechnologyIndexPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-20 pb-16 md:pt-28 md:pb-20">
        <GridBackground />

        <Container>
          <div className="max-w-3xl">
            <Reveal>
              <Kicker>Technology Practice</Kicker>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
                The architecture beneath{" "}
                <span className="text-gradient-brand">the intelligence.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
                Five pillars define how we design, build, and operate
                AI-native systems for the enterprise — from foundation models
                and agent meshes to retrieval, voice, and the application
                substrate that holds it all up.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 flex flex-wrap items-center gap-4 text-xs">
                <span className="font-mono uppercase tracking-[0.2em] text-text-faint">
                  5 Pillars · One Cognitive Stack
                </span>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Pillar cards grid */}
      <Container className="pb-24 md:pb-32">
        <RevealGroup
          stagger={0.05}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {TECHNOLOGY.map((t) => {
            const accent = t.accent ?? "teal";
            const a = ACCENTS[accent];
            const Icon = PILLAR_ICONS[t.slug] ?? Sparkles;

            return (
              <Reveal key={t.slug}>
                <Link
                  href={`/technology/${t.slug}`}
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
                        "flex h-12 w-12 items-center justify-center rounded-xl border",
                        a.border,
                        a.bgSoft,
                        a.text,
                      )}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-text-faint transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>

                  <p className="relative mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-text-faint">
                    Pillar · {t.shortLabel ?? t.name}
                  </p>

                  <h3 className="relative mt-2 font-display text-2xl font-semibold tracking-tight text-white">
                    {t.name}
                  </h3>

                  <p className="relative mt-3 flex-1 text-sm leading-relaxed text-text-muted">
                    {t.blurb}
                  </p>

                  <span
                    className={cn(
                      "relative mt-6 inline-flex items-center gap-1.5 text-sm font-medium transition-colors",
                      a.text,
                    )}
                  >
                    Explore {t.shortLabel ?? t.name}
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
