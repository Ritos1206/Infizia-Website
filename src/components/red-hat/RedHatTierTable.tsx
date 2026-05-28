"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { RevealGroup, revealItem } from "@/components/motion/Reveal";
import { RedHatSectionHeader } from "./RedHatSectionHeader";
import type { RedHatManagedTier } from "@/content/red-hat/types";

/**
 * Managed Services Tier Table — 4 cards.
 *
 * Foundation · Standard · Enterprise (highlighted) · AI Platform.
 * Pricing is rendered verbatim from the docx (Rs 1.5L/mo / Rs 3L/mo
 * / Rs 6L/mo / On request). Enterprise tier gets a redhat-tinted
 * recommended ribbon + glow.
 */
export function RedHatTierTable({
  kicker,
  title,
  lede,
  items,
}: {
  kicker: string;
  title: string;
  lede: string;
  items: RedHatManagedTier[];
}) {
  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <RedHatSectionHeader kicker={kicker} title={title} lede={lede} />

        <RevealGroup
          stagger={0.06}
          className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((t) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.tier}
                variants={revealItem}
                className={[
                  "group relative flex flex-col overflow-hidden rounded-2xl border p-6 transition-all hover:-translate-y-1 md:p-7",
                  t.highlight
                    ? "border-redhat/40 bg-gradient-to-br from-redhat/[0.10] to-bg-elevated shadow-[0_0_40px_-12px_rgba(238,0,0,0.35)]"
                    : "border-white/10 bg-bg-surface hover:border-redhat/40",
                ].join(" ")}
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-redhat/60 via-redhat/0 to-redhat/0 opacity-60" />

                {t.highlight && (
                  <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full border border-redhat/40 bg-redhat/15 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-redhat">
                    <span className="h-1 w-1 rounded-full bg-redhat shadow-[0_0_6px_rgba(238,0,0,0.7)]" />
                    Recommended
                  </div>
                )}

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-redhat/30 bg-redhat/10 text-redhat">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </div>

                <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
                  Tier
                </p>
                <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight text-white">
                  {t.tier}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {t.scope}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {t.stack.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-text-secondary"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-6 border-t border-white/5 pt-5">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
                      Response SLA
                    </p>
                    <p className="mt-1 font-display text-lg font-semibold text-redhat">
                      {t.sla}
                    </p>
                  </div>

                  <div className="mt-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
                      Starting at
                    </p>
                    <p className="mt-1 font-display text-2xl font-semibold tracking-tight text-white">
                      {t.startingAt}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </RevealGroup>

        <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-text-faint">
          Pricing in INR · scoped per stack · contact for tailored quote
        </p>
      </Container>
    </section>
  );
}
