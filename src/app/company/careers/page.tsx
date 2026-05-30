"use client";

/**
 * /company/careers — Phase 7 Company
 *
 * No open roles listed right now (OD-10 pending). Page reads as a
 * "we are growing, drop us a line, we'll reach out" placeholder —
 * no fake openings, no manufactured job titles. When the client
 * supplies the real openings list, the OPEN_ROLES_PLACEHOLDER block
 * gets replaced with a roles grid.
 */

import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles, Briefcase } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Kicker } from "@/components/ui/Kicker";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GridBackground } from "@/components/motion/GridBackground";
import { Reveal, RevealGroup, revealItem } from "@/components/motion/Reveal";
import {
  CAREERS_HERO,
  CAREERS_FOOTER,
  WHY_JOIN,
  OPEN_ROLES_PLACEHOLDER,
} from "@/content/company/careers";

export default function CareersPage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden pt-16 pb-20 md:pt-24 md:pb-24 lg:pt-28 lg:pb-28">
        <GridBackground />
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/3 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-brand-teal/[0.08] blur-[120px]" />
        </div>

        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <Kicker className="justify-center">{CAREERS_HERO.kicker}</Kicker>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-[2.5rem] font-semibold leading-[0.98] tracking-tight text-white md:text-5xl lg:text-[4.25rem]">
                {CAREERS_HERO.headline}{" "}
                <span className="text-gradient-brand">
                  {CAREERS_HERO.highlight}
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 text-base leading-relaxed text-text-secondary md:text-lg">
                {CAREERS_HERO.positioning}
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <ButtonLink
                  href="/contact/sales"
                  variant="primary"
                  size="lg"
                >
                  Send us your details
                  <ArrowRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink
                  href="/company/about"
                  variant="outline"
                  size="lg"
                >
                  About Infizia
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─── Why Join (4 cards) ─────────────────────────────────── */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 -z-10 bg-bg-surface/40" />
        <Container>
          <SectionHeader
            kicker="Why join Infizia"
            title="Real work. Real users. Real outcomes."
            lede="Four reasons engineers, designers, and AI specialists choose to ship with Infizia."
            gradient
          />

          <RevealGroup
            stagger={0.06}
            className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2"
          >
            {WHY_JOIN.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  variants={revealItem}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-bg-base p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand-teal/30 hover:bg-bg-elevated md:p-8"
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brand-teal/0 via-brand-teal/60 to-brand-teal/0 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-teal/30 bg-brand-teal/10 text-brand-teal">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted md:text-base">
                    {card.body}
                  </p>
                </motion.div>
              );
            })}
          </RevealGroup>
        </Container>
      </section>

      {/* ─── Open roles placeholder ─────────────────────────────── */}
      <section className="relative py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-teal">
                Open roles
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-4xl lg:text-5xl">
                {OPEN_ROLES_PLACEHOLDER.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-text-secondary md:text-lg">
                {OPEN_ROLES_PLACEHOLDER.body}
              </p>
            </Reveal>

            {/* Disciplines we track */}
            <Reveal delay={0.18}>
              <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
                Disciplines we track
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-3 flex flex-wrap gap-2">
                {OPEN_ROLES_PLACEHOLDER.trackedDisciplines.map((d) => (
                  <span
                    key={d}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-text-secondary"
                  >
                    <Briefcase className="h-3.5 w-3.5 text-brand-teal" />
                    {d}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <ButtonLink
                  href={OPEN_ROLES_PLACEHOLDER.ctaHref}
                  variant="primary"
                  size="lg"
                >
                  <Mail className="h-4 w-4" />
                  {OPEN_ROLES_PLACEHOLDER.ctaLabel}
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─── Footer note ────────────────────────────────────────── */}
      <section className="relative pb-24 md:pb-32">
        <Container>
          <div className="mx-auto flex max-w-3xl items-center gap-3 rounded-2xl border border-white/10 bg-bg-surface/60 px-6 py-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand-teal/30 bg-brand-teal/10 text-brand-teal">
              <CAREERS_FOOTER.icon className="h-4 w-4" strokeWidth={1.6} />
            </div>
            <p className="text-sm leading-relaxed text-text-secondary md:text-base">
              {CAREERS_FOOTER.note}
            </p>
            <Sparkles className="ml-auto hidden h-4 w-4 text-brand-teal sm:block" />
          </div>
        </Container>
      </section>
    </>
  );
}
