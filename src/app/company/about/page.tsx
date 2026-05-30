"use client";

/**
 * /company/about — Phase 7 Company · main hub
 *
 * Brand story + 4 capability pillars (AI · Agentic AI · Google Cloud ·
 * Red Hat) + mission/vision teaser + Contezza parentage paragraph.
 *
 * No founder photos / bios per direct user direction (2026-05-30).
 * No "Premier Partner" mentions per D-69. Red Hat acknowledged as a
 * practice / partnership without elevation.
 */

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  Sparkles,
  Compass,
  Target,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Kicker } from "@/components/ui/Kicker";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GridBackground } from "@/components/motion/GridBackground";
import { Reveal, RevealGroup, revealItem } from "@/components/motion/Reveal";
import { FoundingTimeline } from "@/components/company/FoundingTimeline";
import {
  ABOUT_HEADLINE,
  ABOUT_HEADLINE_HIGHLIGHT,
  ABOUT_POSITIONING,
  ABOUT_POSITIONING_2,
  CAPABILITY_PILLARS,
  CONTEZZA_PARENTAGE,
  MISSION,
  VISION,
} from "@/content/company/about";
import { cn } from "@/lib/utils";

export default function AboutPage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden pt-16 pb-20 md:pt-24 md:pb-24 lg:pt-28 lg:pb-28">
        <GridBackground />
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/3 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-brand-teal/[0.10] blur-[120px]" />
          <div className="absolute top-1/3 -right-40 h-[400px] w-[400px] rounded-full bg-brand-blue/[0.06] blur-[100px]" />
        </div>

        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Copy */}
            <div className="lg:col-span-7">
              <Reveal>
                <Kicker>About Infizia</Kicker>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-6 font-display text-[2.5rem] font-semibold leading-[0.98] tracking-tight text-white md:text-5xl lg:text-[4.25rem]">
                  {ABOUT_HEADLINE}{" "}
                  <span className="text-gradient-brand">
                    {ABOUT_HEADLINE_HIGHLIGHT}
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-6 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-teal/30 bg-brand-teal/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-teal">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inset-0 animate-ping rounded-full bg-brand-teal/60" />
                      <span className="relative h-1.5 w-1.5 rounded-full bg-brand-teal" />
                    </span>
                    Established 2026
                  </span>
                  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-text-secondary">
                    AI-native sub-brand of Contezza
                  </span>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg">
                  {ABOUT_POSITIONING}
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <ButtonLink
                    href="/contact/sales"
                    variant="primary"
                    size="lg"
                  >
                    Talk to us
                    <ArrowRight className="h-4 w-4" />
                  </ButtonLink>
                  <ButtonLink
                    href="/brochures/infizia_corporate_deck.pdf"
                    variant="outline"
                    size="lg"
                    external
                  >
                    <Download className="h-4 w-4" />
                    Corporate Brochure
                  </ButtonLink>
                </div>
              </Reveal>
            </div>

            {/* Founding Timeline visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative lg:col-span-5"
            >
              <FoundingTimeline />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ─── Brand positioning continuation ──────────────────────── */}
      <section className="relative py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-teal">
                What we build
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-4xl lg:text-5xl">
                Beyond traditional development.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-text-secondary md:text-lg">
                {ABOUT_POSITIONING_2}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─── 4 Capability Pillars ────────────────────────────────── */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 -z-10 bg-bg-surface/40" />
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-teal/[0.08] blur-3xl" />
        </div>

        <Container>
          <SectionHeader
            kicker="Four anchors"
            title="The capability stack behind every Infizia product."
            lede="From the language layer up to the production substrate — built in-house, deployed at enterprise scale."
            gradient
          />

          <RevealGroup
            stagger={0.06}
            className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2"
          >
            {CAPABILITY_PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.label}
                  variants={revealItem}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-bg-base p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand-teal/30 hover:bg-bg-elevated md:p-8"
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brand-teal/0 via-brand-teal/60 to-brand-teal/0 opacity-0 transition-opacity group-hover:opacity-100" />

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-teal/30 bg-brand-teal/10 text-brand-teal">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
                      Pillar · {p.label}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-white">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted md:text-base">
                    {p.body}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {p.chips.map((chip) => (
                      <span
                        key={chip}
                        className="inline-flex items-center rounded-full border border-brand-teal/25 bg-brand-teal/[0.06] px-2 py-0.5 font-mono text-[10px] tracking-[0.04em] text-brand-teal"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </RevealGroup>
        </Container>
      </section>

      {/* ─── Mission + Vision teaser ────────────────────────────── */}
      <section className="relative py-24 md:py-32">
        <Container>
          <SectionHeader
            kicker="Why we build"
            title="Mission and vision."
            lede="Two statements that shape every product decision and every line of code."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                icon: Target,
                title: MISSION.title,
                body: MISSION.statement,
                accent: "brand-green",
                accentBg: "bg-brand-green/10",
                accentBorder: "border-brand-green/30",
                accentText: "text-brand-green",
                topLine:
                  "from-brand-green/0 via-brand-green/60 to-brand-green/0",
              },
              {
                icon: Compass,
                title: VISION.title,
                body: VISION.statement,
                accent: "brand-blue",
                accentBg: "bg-brand-blue/10",
                accentBorder: "border-brand-blue/30",
                accentText: "text-brand-blue",
                topLine: "from-brand-blue/0 via-brand-blue/60 to-brand-blue/0",
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.title}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-bg-surface p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-bg-elevated md:p-8">
                    <div
                      className={cn(
                        "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r",
                        card.topLine,
                      )}
                    />
                    <div
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-xl border",
                        card.accentBorder,
                        card.accentBg,
                        card.accentText,
                      )}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </div>
                    <p
                      className={cn(
                        "mt-6 font-mono text-[10px] uppercase tracking-[0.2em]",
                        card.accentText,
                      )}
                    >
                      Our {card.title}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold leading-tight tracking-tight text-white md:text-3xl">
                      {card.body}
                    </h3>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-10 flex justify-center">
              <Link
                href="/company/vision-mission"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-text-secondary transition-all hover:border-brand-teal/40 hover:bg-brand-teal/[0.06] hover:text-brand-teal"
              >
                Read the full vision &amp; mission
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ─── Contezza parentage ─────────────────────────────────── */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 -z-10 bg-bg-surface/40" />
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-teal">
                  Parentage
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-4xl lg:text-5xl">
                  {CONTEZZA_PARENTAGE.title}
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 text-base leading-relaxed text-text-secondary md:text-lg">
                  {CONTEZZA_PARENTAGE.paragraph}
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.15}>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {CONTEZZA_PARENTAGE.facts.map((f) => {
                    const Icon = f.icon;
                    return (
                      <div
                        key={f.label}
                        className="flex items-start gap-3 rounded-xl border border-white/10 bg-bg-base/60 p-4"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-brand-teal/30 bg-brand-teal/10 text-brand-teal">
                          <Icon className="h-4 w-4" strokeWidth={1.6} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
                            {f.label}
                          </p>
                          <p className="mt-1 text-sm font-medium text-white">
                            {f.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── Final CTA ──────────────────────────────────────────── */}
      <section className="relative py-24 md:py-32">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-bg-elevated to-bg-surface p-10 md:p-16 lg:p-20">
            <div className="pointer-events-none absolute inset-0 bg-brand-teal/[0.06] opacity-50 blur-[80px]" />
            <div className="absolute inset-0 bg-grid-fine opacity-30" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left bg-gradient-to-r from-brand-teal/0 via-brand-teal/60 to-brand-teal/0"
            />

            <div className="relative">
              <Reveal>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-teal">
                  Work with Infizia
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
                  Build something that ships.{" "}
                  <span className="text-text-secondary">
                    With a team that has shipped, for over a decade.
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg">
                  Tell us about the problem. We will tell you what to build,
                  what to buy, and what to skip — based on what we have shipped
                  for clients across India and abroad since 2012.
                </p>
              </Reveal>

              <div className="mt-8 flex flex-wrap items-center gap-3 md:mt-10">
                <Reveal delay={0.15}>
                  <ButtonLink href="/contact/sales" variant="primary" size="lg">
                    Talk to us
                    <ArrowRight className="h-4 w-4" />
                  </ButtonLink>
                </Reveal>
                <Reveal delay={0.2}>
                  <ButtonLink
                    href="/brochures/infizia_corporate_deck.pdf"
                    variant="outline"
                    size="lg"
                    external
                  >
                    <Download className="h-4 w-4" />
                    Corporate Brochure
                  </ButtonLink>
                </Reveal>
              </div>

              <Reveal delay={0.25}>
                <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-text-faint">
                  <Sparkles className="h-3 w-3 text-brand-teal" />
                  <span className="font-mono uppercase tracking-[0.18em]">
                    14 products · 10 industries · 1 stack
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
