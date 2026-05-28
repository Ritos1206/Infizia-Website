"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealGroup, revealItem } from "@/components/motion/Reveal";
import { ACCENTS, type ProductAccent } from "@/lib/product-accents";
import { cn } from "@/lib/utils";
import type { SolutionStat } from "@/content/solutions/types";

/**
 * Industry-pulse strip — 4 stats summarising the vertical's reality
 * (the friction the buyer is living with). Sits right under the hero,
 * gives the rest of the page its weight.
 */
export function SolutionPulse({
  kicker,
  title,
  lede,
  items,
  accent,
}: {
  kicker: string;
  title: string;
  lede?: string;
  items: SolutionStat[];
  accent: ProductAccent;
}) {
  const a = ACCENTS[accent];

  return (
    <section className="relative py-20 md:py-24">
      {/* Top hairline accent line */}
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r",
          a.topLine,
        )}
      />

      <Container>
        <SectionHeader kicker={kicker} title={title} lede={lede} />

        <RevealGroup
          stagger={0.06}
          className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
        >
          {items.map((s) => (
            <motion.div
              key={s.label}
              variants={revealItem}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-white/10 bg-bg-surface p-5 transition-all md:p-6",
                a.hoverBorder,
              )}
            >
              {/* Accent line on left edge */}
              <div
                className={cn(
                  "pointer-events-none absolute inset-y-4 left-0 w-px bg-gradient-to-b",
                  a.topLine,
                )}
              />

              <p
                className={cn(
                  "font-display text-3xl font-semibold leading-none tracking-tight md:text-4xl lg:text-5xl",
                  a.text,
                )}
              >
                {s.value}
              </p>
              <p className="mt-3 text-sm leading-snug text-text-secondary">
                {s.label}
              </p>
              {s.caption && (
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-text-faint">
                  {s.caption}
                </p>
              )}
            </motion.div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
