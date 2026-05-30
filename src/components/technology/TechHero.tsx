"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Cpu } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { GridBackground } from "@/components/motion/GridBackground";
import { ACCENTS, type ProductAccent } from "@/lib/product-accents";
import { cn } from "@/lib/utils";

/**
 * Tech pillar hero — used by all 5 bespoke technology pages.
 *
 * Structure mirrors `ServiceHero` (2-col split: copy left, bespoke
 * visual right) but the primary CTA is "Talk to an Architect" since
 * the buyer here is technical (CTO / architect / dev lead) rather
 * than a business buyer running a demo.
 */
export function TechHero({
  shortLabel,
  name,
  tagline,
  positioning,
  accent,
  visual,
}: {
  shortLabel: string;
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
                <Cpu className={cn("h-3 w-3", a.text)} />
                <span
                  className={cn(
                    "font-mono text-[11px] tracking-[0.2em] uppercase",
                    a.text,
                  )}
                >
                  Technology · {shortLabel}
                </span>
              </div>
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
              {name}.
            </motion.h1>

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

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg"
            >
              {positioning}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <ButtonLink href="/contact/sales" variant="primary" size="lg">
                Talk to an Architect
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

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-5 flex items-center gap-3 text-xs text-text-faint"
            >
              <span className="font-mono uppercase tracking-[0.18em]">
                Practice
              </span>
              <span className="h-px w-8 bg-white/10" />
              <span>
                Architecture review → reference design → production rollout.
              </span>
            </motion.div>
          </div>

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
