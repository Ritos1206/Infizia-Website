"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealGroup, revealItem } from "@/components/motion/Reveal";
import { ACCENTS, type ProductAccent } from "@/lib/product-accents";
import { cn } from "@/lib/utils";
import type { ServiceCapability } from "@/content/services/types";

/**
 * Service capabilities section — 6 capability cards (what we deliver).
 *
 * Layout: 1 col on mobile, 2 cols on md, 3 cols on lg. Mirrors
 * `ProductFeatures` shape so the visual rhythm stays consistent across
 * the site.
 */
export function ServiceCapabilities({
  kicker,
  title,
  lede,
  items,
  accent,
}: {
  kicker: string;
  title: string;
  lede: string;
  items: ServiceCapability[];
  accent: ProductAccent;
}) {
  const a = ACCENTS[accent];

  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-bg-surface/40" />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className={cn(
            "absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl",
            a.glow,
          )}
        />
      </div>

      <Container>
        <SectionHeader kicker={kicker} title={title} lede={lede} gradient />

        <RevealGroup
          stagger={0.06}
          className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((c) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                variants={revealItem}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-white/10 bg-bg-base p-6 transition-all duration-300 ease-out hover:-translate-y-1 md:p-7",
                  a.hoverBorder,
                )}
              >
                <div
                  className={cn(
                    "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r opacity-0 transition-opacity group-hover:opacity-100",
                    a.topLine,
                  )}
                />
                <div
                  className={cn(
                    "pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl opacity-0 transition-opacity group-hover:opacity-60",
                    a.glow,
                  )}
                />

                <div className="relative">
                  <div
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-xl border",
                      a.border,
                      a.bgSoft,
                      a.text,
                    )}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-white">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary md:text-base">
                    {c.body}
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
