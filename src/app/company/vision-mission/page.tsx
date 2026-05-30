"use client";

/**
 * /company/vision-mission — Phase 7 Company
 *
 * Mission deep-dive (efficiency · engagement · growth) + Vision
 * deep-dive (AI-native · globally recognised · trustworthy at scale)
 * + 4 values cards + CTA. Hero idiom: paired Mission/Vision compass
 * cards with directional arrows.
 */

import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Kicker } from "@/components/ui/Kicker";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GridBackground } from "@/components/motion/GridBackground";
import { Reveal, RevealGroup, revealItem } from "@/components/motion/Reveal";
import { CompassStatement } from "@/components/company/CompassStatement";
import {
  MISSION,
  VISION,
  MISSION_DETAIL,
  VISION_DETAIL,
  VALUES,
} from "@/content/company/vision-mission";

export default function VisionMissionPage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden pt-16 pb-20 md:pt-24 md:pb-24 lg:pt-28 lg:pb-28">
        <GridBackground />
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/3 left-1/4 h-[500px] w-[500px] rounded-full bg-brand-green/[0.10] blur-[120px]" />
          <div className="absolute -top-1/3 right-1/4 h-[500px] w-[500px] rounded-full bg-brand-blue/[0.10] blur-[120px]" />
        </div>

        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Copy */}
            <div className="lg:col-span-7">
              <Reveal>
                <Kicker>Vision &amp; Mission</Kicker>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-6 font-display text-[2.5rem] font-semibold leading-[0.98] tracking-tight text-white md:text-5xl lg:text-[4.25rem]">
                  Why we build, and{" "}
                  <span className="text-gradient-brand">where we are going.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg">
                  Two statements that shape every product decision and every
                  line of code at Infizia — and a set of values that make
                  sure we keep our word.
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

            {/* Compass Statement visual */}
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
              <CompassStatement />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ─── Mission deep-dive ─────────────────────────────────── */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 -z-10 bg-bg-surface/40" />
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-green/[0.08] blur-3xl" />
        </div>

        <Container>
          <SectionHeader
            kicker={MISSION_DETAIL.kicker}
            title={MISSION_DETAIL.title}
            lede={MISSION.statement}
          />

          <div className="mt-12 mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-text-secondary md:text-lg">
            {MISSION_DETAIL.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <RevealGroup
            stagger={0.07}
            className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3"
          >
            {MISSION_DETAIL.pillars.map((p) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  variants={revealItem}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-bg-base p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand-green/30"
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brand-green/0 via-brand-green/60 to-brand-green/0 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-green/30 bg-brand-green/10 text-brand-green">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {p.body}
                  </p>
                </motion.div>
              );
            })}
          </RevealGroup>
        </Container>
      </section>

      {/* ─── Vision deep-dive ─────────────────────────────────── */}
      <section className="relative py-24 md:py-32">
        <Container>
          <SectionHeader
            kicker={VISION_DETAIL.kicker}
            title={VISION_DETAIL.title}
            lede={VISION.statement}
            gradient
          />

          <div className="mt-12 mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-text-secondary md:text-lg">
            {VISION_DETAIL.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <RevealGroup
            stagger={0.07}
            className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3"
          >
            {VISION_DETAIL.pillars.map((p) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  variants={revealItem}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-bg-surface p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand-blue/30"
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brand-blue/0 via-brand-blue/60 to-brand-blue/0 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-blue/30 bg-brand-blue/10 text-brand-blue">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {p.body}
                  </p>
                </motion.div>
              );
            })}
          </RevealGroup>
        </Container>
      </section>

      {/* ─── Values ────────────────────────────────────────────── */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 -z-10 bg-bg-surface/40" />
        <Container>
          <SectionHeader
            kicker="Our values"
            title="Four principles that shape every decision."
            lede="Engineering, design, and content — guided by the same posture across products and services."
          />

          <RevealGroup
            stagger={0.06}
            className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2"
          >
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  variants={revealItem}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-bg-base p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand-teal/30 hover:bg-bg-elevated md:p-7"
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brand-teal/0 via-brand-teal/60 to-brand-teal/0 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand-teal/30 bg-brand-teal/10 text-brand-teal">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-semibold tracking-tight text-white">
                        {v.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-text-muted">
                        {v.body}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </RevealGroup>
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
                  Build with us
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
                  Same mission. Same vision.{" "}
                  <span className="text-text-secondary">
                    Productised, measured, ready to ship.
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg">
                  Talk to us about the problem you are trying to solve. We
                  will tell you which products fit, which services apply, and
                  what we would build.
                </p>
              </Reveal>

              <div className="mt-8 flex flex-wrap items-center gap-3 md:mt-10">
                <Reveal delay={0.15}>
                  <ButtonLink
                    href="/contact/sales"
                    variant="primary"
                    size="lg"
                  >
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
                    Efficiency · engagement · growth — measured every release
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
