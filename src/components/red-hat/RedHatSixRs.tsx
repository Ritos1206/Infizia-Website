"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { RevealGroup, revealItem } from "@/components/motion/Reveal";
import { RedHatSectionHeader } from "./RedHatSectionHeader";
import type { RedHatSixR } from "@/content/red-hat/types";

/**
 * OpenShift "6 R's" assessment grid — Retain · Retire · Rehost ·
 * Replatform · Refactor · Rebuild.
 *
 * Each card shows a giant outline "R" letter, the strategy name in
 * redhat color, and a body explaining when to apply it. 3-col grid on
 * lg, 2-col on md, 1-col stack on mobile. Distinct from the
 * Convenor / Performix / Meetrix mid-pages — this is a strategic
 * decision matrix, not a workflow.
 */
export function RedHatSixRs({
  items,
}: {
  items: RedHatSixR[];
}) {
  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <RedHatSectionHeader
          kicker="Containerisation methodology"
          title="The 6 R's framework — pick the right path"
          highlight="per app."
          lede="Not every legacy application should be rewritten cloud-native — some should be retained, some retired, and some lift-and-shifted. We assess your portfolio against all six options and recommend the right path per workload."
        />

        <RevealGroup
          stagger={0.06}
          className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((r) => (
            <motion.div
              key={r.label}
              variants={revealItem}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-bg-surface p-7 transition-all hover:-translate-y-1 hover:border-redhat/40"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-redhat/60 via-redhat/0 to-redhat/0 opacity-50 transition-opacity group-hover:opacity-100" />

              <div className="flex items-baseline gap-3">
                <span
                  aria-hidden
                  className="font-display text-6xl font-semibold leading-none text-redhat/20 transition-colors group-hover:text-redhat/50"
                >
                  R
                </span>
                <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
                  {r.label}
                </h3>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-text-muted">
                {r.body}
              </p>
            </motion.div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
