"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { GridBackground } from "@/components/motion/GridBackground";
import { ACCENTS, type ProductAccent } from "@/lib/product-accents";
import { cn } from "@/lib/utils";

/**
 * Solution hero — used by all 10 industry solution pages.
 *
 * 2-col split (copy left, bespoke vertical visual right) modeled on
 * `ProductHero` so the visual identity stays consistent across the site.
 *
 * Secondary CTA: the corporate brochure (per D-55 / D-69) — replaces the
 * earlier "Talk to Sales" button which was redundant with "Book a Demo"
 * since both paths effectively land on a contact form. The corporate
 * brochure gives the buyer something useful to read on their own time.
 */
export function SolutionHero({
  verticalLabel,
  name,
  tagline,
  positioning,
  accent,
  visual,
}: {
  verticalLabel: string;
  name: string;
  tagline: string;
  positioning: string;
  accent: ProductAccent;
  visual: ReactNode;
}) {
  const a = ACCENTS[accent];

  return (
    <section className="relative isolate overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-28 lg:pb-32">
      <GridBackground />

      {/* Ambient accent glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className={cn(
            "absolute -top-1/3 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full blur-[120px]",
            a.glow,
          )}
        />
        <div className="absolute top-1/3 -right-40 h-[400px] w-[400px] rounded-full bg-brand-blue/[0.06] blur-[100px]" />
      </div>

      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Copy column */}
          <div className="lg:col-span-7">
            {/* Kicker */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-3"
            >
              <div
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-3 py-1.5",
                  a.border,
                  a.bgSoft,
                )}
              >
                <Sparkles className={cn("h-3 w-3", a.text)} />
                <span
                  className={cn(
                    "font-mono text-[11px] tracking-[0.2em] uppercase",
                    a.text,
                  )}
                >
                  Industry · {verticalLabel}
                </span>
              </div>
            </motion.div>

            {/* Solution name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-7 font-display text-[3rem] font-semibold leading-[0.95] tracking-tight text-white md:text-6xl lg:text-[5rem]"
            >
              {name}.
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className={cn(
                "mt-6 font-display text-xl font-medium leading-tight tracking-tight md:text-2xl lg:text-3xl",
                a.text,
              )}
            >
              {tagline}
            </motion.p>

            {/* Positioning paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-7 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg"
            >
              {positioning}
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <ButtonLink href="/contact/demo" variant="primary" size="lg">
                Book a Demo
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
            </motion.div>

            {/* Footnote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-7 flex items-center gap-3 text-xs text-text-faint"
            >
              <span className="font-mono uppercase tracking-[0.18em]">
                Outcome
              </span>
              <span className="h-px w-8 bg-white/10" />
              <span>
                Mapped to your industry — productised, measurable, and rolled
                out in weeks.
              </span>
            </motion.div>
          </div>

          {/* Visual column */}
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
            {visual}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
