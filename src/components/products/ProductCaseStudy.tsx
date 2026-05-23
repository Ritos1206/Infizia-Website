"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, revealItem } from "@/components/motion/Reveal";
import { Kicker } from "@/components/ui/Kicker";
import { ACCENTS, type ProductAccent } from "@/lib/product-accents";
import { cn } from "@/lib/utils";
import type { FlagshipCaseStudy } from "@/content/products/types";

/**
 * Mini case study tile — 2–4 stat cards + intro/outro framing.
 *
 * Renders a "PLACEHOLDER" badge when `placeholder: true` so it's clear during
 * client review which case studies still need real numbers.
 */
export function ProductCaseStudy({
  data,
  accent,
}: {
  data: FlagshipCaseStudy;
  accent: ProductAccent;
}) {
  const a = ACCENTS[accent];

  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-bg-surface p-8 md:p-12 lg:p-16">
          {/* Accent glow blob */}
          <div
            className={cn(
              "pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full blur-3xl",
              a.glow,
            )}
          />

          <div className="relative">
            <Reveal>
              <Kicker>Customer impact</Kicker>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-3xl font-display text-2xl font-medium leading-snug tracking-tight text-white md:text-3xl">
                {data.intro}
              </p>
            </Reveal>

            <RevealGroup
              stagger={0.08}
              delay={0.2}
              className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {data.stats.map((s) => (
                <motion.div
                  key={s.label}
                  variants={revealItem}
                  className="rounded-2xl border border-white/10 bg-bg-base p-6"
                >
                  <p
                    className={cn(
                      "font-display text-4xl font-semibold leading-none tracking-tight md:text-5xl",
                      a.text,
                    )}
                  >
                    {s.value}
                  </p>
                  <p className="mt-3 text-sm text-text-muted">{s.label}</p>
                </motion.div>
              ))}
            </RevealGroup>
          </div>
        </div>
      </Container>
    </section>
  );
}
