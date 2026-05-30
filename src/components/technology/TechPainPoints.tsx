"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealGroup, revealItem } from "@/components/motion/Reveal";
import { ACCENTS, type ProductAccent } from "@/lib/product-accents";
import { cn } from "@/lib/utils";
import type { TechPain } from "@/content/technology/types";

/**
 * Tech pillar pain-points — 4 frictions before this pillar gets engaged.
 * Mirrors `ServicePainPoints` shape.
 */
export function TechPainPoints({
  kicker,
  title,
  lede,
  items,
  accent,
}: {
  kicker: string;
  title: string;
  lede: string;
  items: TechPain[];
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
                      "border-brand-rose/30 bg-brand-rose/10 text-brand-rose",
                    )}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold tracking-tight text-white">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">
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
