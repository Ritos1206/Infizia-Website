"use client";

import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Kicker } from "@/components/ui/Kicker";
import { GridBackground } from "@/components/motion/GridBackground";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * Shared shell for /privacy · /security · /terms.
 *
 * Each legal page passes:
 *   • kicker — short label shown in the hero (e.g. "Legal", "Security")
 *   • title — page heading
 *   • intro — 1–2 sentence lede
 *   • lastUpdated — ISO date string shown in the chrome strip
 *   • sections — ordered list of sections; each carries an `id` (used
 *     for the table-of-contents jump links and as the heading anchor)
 *
 * Sections render as a vertical stack with a stick-on TOC sidebar on
 * lg+ (and a collapsible TOC on the mobile end via a horizontal pill
 * strip). Each section heading has a hash anchor so links to specific
 * paragraphs work cleanly.
 */

export type LegalSection = {
  id: string;
  title: string;
  /** Body content as React children — paragraphs, lists, etc. */
  body: React.ReactNode;
};

export type LegalPageProps = {
  kicker: string;
  title: string;
  intro: string;
  lastUpdated: string;
  /** Optional accent color for the hero gradient highlight. */
  accent?: "teal" | "green" | "blue";
  sections: LegalSection[];
};

const ACCENT_GRADIENTS: Record<NonNullable<LegalPageProps["accent"]>, string> = {
  teal: "from-brand-teal via-brand-blue to-brand-green",
  green: "from-brand-green via-brand-teal to-brand-blue",
  blue: "from-brand-blue via-brand-teal to-brand-green",
};

export function LegalPage({
  kicker,
  title,
  intro,
  lastUpdated,
  accent = "teal",
  sections,
}: LegalPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-20 pb-12 md:pt-28 md:pb-16">
        <GridBackground />

        <Container>
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <Kicker>{kicker}</Kicker>
            </Reveal>
            <Reveal delay={0.05}>
              <h1
                className={cn(
                  "mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl",
                )}
              >
                {title.split(" ").slice(0, -1).join(" ")}{" "}
                <span
                  className={cn(
                    "bg-clip-text text-transparent bg-gradient-to-br",
                    ACCENT_GRADIENTS[accent],
                  )}
                >
                  {title.split(" ").slice(-1)}
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-text-secondary md:text-lg">
                {intro}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center gap-3 text-xs">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-bg-surface px-3 py-1.5 font-mono uppercase tracking-[0.2em] text-text-secondary">
                  Last updated · {lastUpdated}
                </span>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-bg-surface px-3 py-1.5 font-mono uppercase tracking-[0.2em] text-text-secondary transition-colors hover:border-white/30 hover:text-white"
                >
                  <Mail className="h-3 w-3" />
                  {SITE.email}
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Body — 2-col layout on lg+: TOC sidebar + content */}
      <Container className="pb-24 md:pb-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          {/* TOC sidebar (sticky on lg+) */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-faint">
                On this page
              </p>
              <nav className="mt-4 hidden flex-col gap-1.5 lg:flex">
                {sections.map((s, i) => (
                  <Link
                    key={s.id}
                    href={`#${s.id}`}
                    className="group inline-flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-text-muted transition-colors hover:bg-white/[0.04] hover:text-white"
                  >
                    <span className="font-mono text-[10px] text-text-faint group-hover:text-brand-teal">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{s.title}</span>
                  </Link>
                ))}
              </nav>
              {/* Mobile horizontal pill strip */}
              <div className="-mx-4 mt-4 flex gap-2 overflow-x-auto px-4 pb-2 lg:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {sections.map((s, i) => (
                  <Link
                    key={s.id}
                    href={`#${s.id}`}
                    className="shrink-0 rounded-full border border-white/10 bg-bg-surface px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-text-secondary transition-colors hover:border-white/30 hover:text-white"
                  >
                    {String(i + 1).padStart(2, "0")} · {s.title}
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          {/* Sections */}
          <div className="lg:col-span-9">
            <div className="flex flex-col gap-12 md:gap-16">
              {sections.map((s, i) => (
                <Reveal key={s.id}>
                  <section
                    id={s.id}
                    className="relative scroll-mt-24 border-t border-white/[0.06] pt-8"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand-teal">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
                      {s.title}
                    </h2>
                    <div className="legal-prose mt-5 text-sm leading-relaxed text-text-secondary md:text-base">
                      {s.body}
                    </div>
                  </section>
                </Reveal>
              ))}
            </div>

            {/* Footer block — contact + back to top */}
            <div className="mt-16 rounded-2xl border border-white/[0.08] bg-bg-surface/60 p-6 md:p-8">
              <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-faint">
                    Questions about this policy?
                  </p>
                  <p className="mt-2 text-sm text-text-secondary">
                    Email us at{" "}
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-brand-teal hover:underline"
                    >
                      {SITE.email}
                    </a>{" "}
                    and we&rsquo;ll get back to you within one working day.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition-all hover:border-white/30 hover:bg-white/[0.04]"
                >
                  Contact us
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
