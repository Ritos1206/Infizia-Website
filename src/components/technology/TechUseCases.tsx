"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealGroup, revealItem } from "@/components/motion/Reveal";
import { ACCENTS, type ProductAccent } from "@/lib/product-accents";
import { cn } from "@/lib/utils";
import type { TechUseCase } from "@/content/technology/types";

/**
 * Tech pillar use-cases — 3 cards each tied back to actual Infizia
 * products via `poweredProducts` chips. Reinforces the cross-link
 * between the technology pillar and the products that use it.
 */
export function TechUseCases({
  kicker,
  title,
  lede,
  items,
  accent,
}: {
  kicker: string;
  title: string;
  lede: string;
  items: TechUseCase[];
  accent: ProductAccent;
}) {
  const a = ACCENTS[accent];

  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <SectionHeader kicker={kicker} title={title} lede={lede} />

        <RevealGroup
          stagger={0.08}
          className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5"
        >
          {items.map((u) => {
            const Icon = u.icon;
            return (
              <motion.div
                key={u.title}
                variants={revealItem}
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-bg-surface p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-bg-elevated",
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
                    "flex h-12 w-12 items-center justify-center rounded-xl border",
                    a.border,
                    a.bgSoft,
                    a.text,
                  )}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-white">
                  {u.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {u.body}
                </p>

                <div className="mt-auto pt-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
                    Powers
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {u.poweredProducts.map((name) => (
                      <span
                        key={name}
                        className={cn(
                          "inline-flex items-center rounded-full border px-2 py-0.5 font-mono text-[10px] tracking-[0.04em]",
                          a.border,
                          a.bgSoft,
                          a.text,
                        )}
                      >
                        {name}
                      </span>
                    ))}
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
