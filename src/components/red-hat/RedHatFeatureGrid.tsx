"use client";

import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { RevealGroup, revealItem } from "@/components/motion/Reveal";
import { RedHatSectionHeader } from "./RedHatSectionHeader";

/**
 * Generic 6-tile feature grid — used by the managed-services
 * "What's included" section AND the training "How we deliver" section.
 *
 * 3-col on lg, 2-col on md, 1-col on mobile.
 */
export function RedHatFeatureGrid({
  kicker,
  title,
  lede,
  items,
}: {
  kicker: string;
  title: string;
  lede: string;
  items: { icon: LucideIcon; title: string; body: string }[];
}) {
  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <RedHatSectionHeader kicker={kicker} title={title} lede={lede} />

        <RevealGroup
          stagger={0.05}
          className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((c) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                variants={revealItem}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-bg-surface p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-redhat/40 md:p-7"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-redhat/60 via-redhat/0 to-redhat/0 opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-redhat/30 bg-redhat/10 text-redhat">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-white">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary md:text-base">
                  {c.body}
                </p>
              </motion.div>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
