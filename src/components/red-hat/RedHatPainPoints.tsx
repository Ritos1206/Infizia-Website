"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { RevealGroup, revealItem } from "@/components/motion/Reveal";
import { RedHatSectionHeader } from "./RedHatSectionHeader";
import type { RedHatPain } from "@/content/red-hat/types";

/**
 * Red Hat pain-points — 4 frictions in a 2×2 grid.
 *
 * Differs from `ServicePainPoints` by using redhat-tinted icon blocks
 * + a shared "Friction" pulse-dot kicker on every card.
 */
export function RedHatPainPoints({
  kicker,
  title,
  lede,
  items,
}: {
  kicker: string;
  title: string;
  lede: string;
  items: RedHatPain[];
}) {
  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <RedHatSectionHeader kicker={kicker} title={title} lede={lede} />

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
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-bg-surface p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-redhat/40 hover:bg-bg-elevated md:p-7"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-redhat/60 via-redhat/0 to-redhat/0 opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-redhat/30 bg-redhat/10 text-redhat">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span
                        aria-hidden
                        className="h-1.5 w-1.5 rounded-full bg-redhat shadow-[0_0_8px_rgba(238,0,0,0.6)]"
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
