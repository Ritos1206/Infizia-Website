"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { RevealGroup, revealItem } from "@/components/motion/Reveal";
import { RedHatSectionHeader } from "./RedHatSectionHeader";
import type { RedHatOutcome } from "@/content/red-hat/types";

/**
 * Red Hat outcomes — 4 measurable wins after Infizia ships.
 */
export function RedHatOutcomes({
  kicker,
  title,
  lede,
  items,
}: {
  kicker: string;
  title: string;
  lede: string;
  items: RedHatOutcome[];
}) {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-bg-surface/40" />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -bottom-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-redhat/[0.05] blur-3xl" />
      </div>

      <Container>
        <RedHatSectionHeader kicker={kicker} title={title} lede={lede} />

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
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-bg-base p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-redhat/40"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-redhat/60 via-redhat/0 to-redhat/0" />

                <div className="flex items-center gap-2">
                  <span
                    aria-hidden
                    className="inline-block h-1.5 w-1.5 rounded-full bg-redhat shadow-[0_0_8px_rgba(238,0,0,0.7)]"
                  />
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
                    Outcome
                  </p>
                </div>

                <p className="mt-3 font-display text-3xl font-semibold leading-[1.05] tracking-tight text-redhat md:text-[2rem]">
                  {o.metric}
                </p>

                <div className="mt-5 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-redhat/30 bg-redhat/10 text-redhat">
                  <Icon className="h-4 w-4" strokeWidth={1.7} />
                </div>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-text-muted">
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
