"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealGroup, revealItem } from "@/components/motion/Reveal";
import { ACCENTS, type ProductAccent } from "@/lib/product-accents";
import { cn } from "@/lib/utils";
import type { ServiceEngagementModel } from "@/content/services/types";

/**
 * Engagement-models section — 4 ways to work with Infizia on this
 * service line. Echoes the engagement-models pattern from
 * `Infizia_Services.docx` (Assessment & Advisory · Implementation
 * Projects · Managed Services · Training & Enablement) but rephrased
 * per service line.
 *
 * Layout: 4 cards in a row on lg, 2x2 on md, 1-col stack on mobile.
 * Each card carries: accent icon block, label, duration tag, body.
 */
export function ServiceEngagement({
  kicker,
  title,
  lede,
  items,
  accent,
}: {
  kicker: string;
  title: string;
  lede: string;
  items: ServiceEngagementModel[];
  accent: ProductAccent;
}) {
  const a = ACCENTS[accent];

  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <SectionHeader kicker={kicker} title={title} lede={lede} />

        <RevealGroup
          stagger={0.06}
          className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.label}
                variants={revealItem}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-white/10 bg-bg-surface p-6 transition-all duration-300 ease-out hover:-translate-y-1",
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
                    "flex h-11 w-11 items-center justify-center rounded-xl border",
                    a.border,
                    a.bgSoft,
                    a.text,
                  )}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </div>

                <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
                  Model 0{i + 1}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold tracking-tight text-white">
                  {m.label}
                </h3>

                <div
                  className={cn(
                    "mt-2 inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em]",
                    a.border,
                    a.bgSoft,
                    a.text,
                  )}
                >
                  {m.duration}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-text-muted">
                  {m.body}
                </p>
              </motion.div>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
