"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealGroup, revealItem } from "@/components/motion/Reveal";
import { ACCENTS, type ProductAccent } from "@/lib/product-accents";
import { cn } from "@/lib/utils";
import type { TechOutcome } from "@/content/technology/types";

/**
 * Tech pillar outcomes — 4 measurable wins. Mirrors `ServiceOutcomes`.
 */
export function TechOutcomes({
  kicker,
  title,
  lede,
  items,
  accent,
}: {
  kicker: string;
  title: string;
  lede: string;
  items: TechOutcome[];
  accent: ProductAccent;
}) {
  const a = ACCENTS[accent];

  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-bg-surface/40" />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className={cn(
            "absolute -bottom-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-3xl",
            a.glow,
          )}
        />
      </div>

      <Container>
        <SectionHeader kicker={kicker} title={title} lede={lede} gradient />

        <RevealGroup
          stagger={0.06}
          className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((o) => {
            const Icon = o.icon;
            return (
              <motion.div
                key={o.metric}
                variants={revealItem}
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-bg-base p-6 transition-all duration-300 ease-out hover:-translate-y-1",
                  a.hoverBorder,
                )}
              >
                <div
                  className={cn(
                    "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r",
                    a.topLine,
                  )}
                />

                <div className="flex items-center gap-2">
                  <span
                    aria-hidden
                    className={cn(
                      "inline-block h-1.5 w-1.5 rounded-full",
                      a.bg,
                      a.shadow,
                    )}
                  />
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
                    Outcome
                  </p>
                </div>

                <div className={cn("mt-4 flex h-11 w-11 items-center justify-center rounded-xl border", a.border, a.bgSoft, a.text)}>
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </div>

                <p className={cn("mt-5 font-display text-2xl font-semibold leading-tight tracking-tight md:text-3xl", a.text)}>
                  {o.metric}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {o.body}
                </p>
              </motion.div>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
