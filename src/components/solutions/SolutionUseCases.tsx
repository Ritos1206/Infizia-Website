"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealGroup, revealItem } from "@/components/motion/Reveal";
import { ACCENTS, type ProductAccent } from "@/lib/product-accents";
import { cn } from "@/lib/utils";
import type { SolutionUseCase } from "@/content/solutions/types";

/**
 * Solution use-cases / personas — 3 cards.
 *
 * Mirrors the shape of `ProductUseCases` but uses the solution's own
 * accent and is decoupled from the product type, so the same vertical
 * can list buyer personas (e.g., "Mid-size hospitals", "Solo doctors")
 * rather than product-buyer roles.
 */
export function SolutionUseCases({
  kicker,
  title,
  lede,
  items,
  accent,
}: {
  kicker: string;
  title: string;
  lede: string;
  items: SolutionUseCase[];
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
                  "group relative overflow-hidden rounded-2xl border border-white/10 bg-bg-surface p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-bg-elevated",
                  a.hoverBorder,
                )}
              >
                {/* Top hairline */}
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
              </motion.div>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
