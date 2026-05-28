"use client";

import Image from "next/image";
import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { GridBackground } from "@/components/motion/GridBackground";

/**
 * Red Hat full-width hero shell.
 *
 * Layout breaks deliberately from the products / solutions / services
 * "copy-left, visual-right" idiom — instead, copy stacks centred above
 * a full-width bespoke visual canvas. Each /red-hat page supplies a
 * different full-width visual.
 *
 *   ┌──────────────────────────────────────────────────────┐
 *   │                  [Red Hat lockup]                    │
 *   │            • Service · {kicker}                      │
 *   │   {title}  ← max-3xl, centered                       │
 *   │   {tagline} ← redhat-tinted                          │
 *   │   {positioning} ← max-prose, muted                   │
 *   │   [ Primary CTA ]   [ Secondary CTA ]                │
 *   ├──────────────────────────────────────────────────────┤
 *   │                                                      │
 *   │            < bespoke full-width visual >             │
 *   │                                                      │
 *   └──────────────────────────────────────────────────────┘
 *
 * The Red Hat lockup at the top is the official brand asset (kept
 * within the /red-hat micro-section per D-71's brand-logo placement
 * pattern). The redhat (`#EE0000`) accent is allowed everywhere on
 * this page per D-04.
 */
export function RedHatHero({
  kicker,
  title,
  tagline,
  positioning,
  primaryCtaLabel,
  secondaryCtaLabel = "Corporate Brochure",
  visual,
  showLogo = true,
}: {
  kicker: string;
  /** Title — newline-separated lines render on separate lines. */
  title: string;
  tagline: string;
  positioning: string;
  primaryCtaLabel: string;
  secondaryCtaLabel?: string;
  visual: ReactNode;
  showLogo?: boolean;
}) {
  const titleLines = title.split("\n");

  return (
    <section className="relative isolate overflow-hidden pt-16 pb-12 md:pt-24 md:pb-16">
      <GridBackground />

      {/* Ambient redhat glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/3 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-redhat/[0.10] blur-[120px]" />
        <div className="absolute top-1/4 -left-40 h-[400px] w-[400px] rounded-full bg-redhat/[0.06] blur-[100px]" />
        <div className="absolute top-1/2 -right-40 h-[400px] w-[400px] rounded-full bg-brand-amber/[0.04] blur-[100px]" />
      </div>

      <Container>
        {/* Centered copy block */}
        <div className="mx-auto max-w-4xl text-center">
          {showLogo && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 flex justify-center"
            >
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-2">
                <Image
                  src="/redhat-logo.svg"
                  alt="Red Hat"
                  width={160}
                  height={56}
                  className="h-10 w-auto md:h-11"
                  priority
                />
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            className="inline-flex items-center gap-2 rounded-full border border-redhat/30 bg-redhat/10 px-3 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-redhat shadow-[0_0_8px_rgba(238,0,0,0.7)]" />
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white">
              {kicker}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-7 font-display text-[2.5rem] font-semibold leading-[0.98] tracking-tight text-white md:text-5xl lg:text-[4.25rem]"
          >
            {titleLines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 mx-auto max-w-3xl font-display text-xl font-medium leading-tight tracking-tight text-redhat md:text-2xl"
          >
            {tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-7 mx-auto max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg"
          >
            {positioning}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <ButtonLink href="/contact/demo" variant="primary" size="lg">
              {primaryCtaLabel}
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink
              href="/brochures/infizia_corporate_deck.pdf"
              variant="outline"
              size="lg"
              external
            >
              <Download className="h-4 w-4" />
              {secondaryCtaLabel}
            </ButtonLink>
          </motion.div>
        </div>

        {/* Full-width visual canvas below the copy */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-14 md:mt-20"
        >
          {visual}
        </motion.div>
      </Container>
    </section>
  );
}
