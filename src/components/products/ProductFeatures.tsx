"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealGroup, revealItem } from "@/components/motion/Reveal";
import { ACCENTS, type ProductAccent } from "@/lib/product-accents";
import { cn } from "@/lib/utils";
import type { FlagshipFeature } from "@/content/products/types";

/**
 * Feature grid — accepts 6 or 7 features.
 *
 * Layout:
 *   - 1 col on mobile
 *   - 2 cols on md
 *   - 3 cols on lg (last item spans 2 if odd count)
 */
export function ProductFeatures({
  kicker,
  title,
  lede,
  items,
  accent,
}: {
  kicker: string;
  title: string;
  lede: string;
  items: FlagshipFeature[];
  accent: ProductAccent;
}) {
  const a = ACCENTS[accent];
  const isOdd = items.length % 3 !== 0;

  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <SectionHeader kicker={kicker} title={title} lede={lede} gradient />

        <RevealGroup
          stagger={0.06}
          className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((f, i) => {
            const Icon = f.icon;
            const isLastOdd = isOdd && i === items.length - 1;

            return (
              <motion.div
                key={f.title}
                variants={revealItem}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-white/10 bg-bg-surface p-6 transition-all md:p-7",
                  a.hoverBorder,
                  isLastOdd && "lg:col-span-1",
                )}
              >
                {/* Top gradient line */}
                <div
                  className={cn(
                    "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r opacity-0 transition-opacity group-hover:opacity-100",
                    a.topLine,
                  )}
                />

                {/* Soft accent glow on hover */}
                <div
                  className={cn(
                    "pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl opacity-0 transition-opacity group-hover:opacity-60",
                    a.glow,
                  )}
                />

                <div className="relative">
                  <div
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-xl border transition-colors",
                      a.border,
                      a.bgSoft,
                      a.text,
                    )}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>

                  <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-white">
                    {f.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-text-secondary md:text-base">
                    {f.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
