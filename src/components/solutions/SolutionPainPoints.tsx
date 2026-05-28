"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealGroup, revealItem } from "@/components/motion/Reveal";
import { ACCENTS, type ProductAccent } from "@/lib/product-accents";
import { cn } from "@/lib/utils";
import type { SolutionPain } from "@/content/solutions/types";

/**
 * Pain-points section — 4 cards covering the specific frictions the buyer
 * is feeling in this vertical. Sits between the industry-pulse strip
 * (the numbers) and the stack section (the cure).
 *
 * Visually: 2x2 grid with accent-tinted icon block, hover lift, and a
 * subtle red-tinted pain marker dot to telegraph "this is bad — we fix it".
 */
export function SolutionPainPoints({
  kicker,
  title,
  lede,
  items,
  accent,
}: {
  kicker: string;
  title: string;
  lede: string;
  items: SolutionPain[];
  accent: ProductAccent;
}) {
  const a = ACCENTS[accent];

  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <SectionHeader kicker={kicker} title={title} lede={lede} />

        <RevealGroup
          stagger={0.06}
          className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5"
        >
          {items.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                variants={revealItem}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-white/10 bg-bg-surface p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-bg-elevated md:p-7",
                  a.hoverBorder,
                )}
              >
                {/* Top gradient line on hover */}
                <div
                  className={cn(
                    "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r opacity-0 transition-opacity group-hover:opacity-100",
                    a.topLine,
                  )}
                />

                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border",
                      a.border,
                      a.bgSoft,
                      a.text,
                    )}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span
                        aria-hidden
                        className="h-1.5 w-1.5 rounded-full bg-brand-rose shadow-[0_0_8px_rgba(251,113,133,0.6)]"
                      />
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
                        Friction
                      </p>
                    </div>
                    <h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-white md:text-xl">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary md:text-base">
                      {p.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
