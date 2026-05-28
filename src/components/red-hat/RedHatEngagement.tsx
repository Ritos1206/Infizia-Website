"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { RevealGroup, revealItem } from "@/components/motion/Reveal";
import { RedHatSectionHeader } from "./RedHatSectionHeader";
import type { RedHatEngagementModel } from "@/content/red-hat/types";

/**
 * Red Hat engagement-models section — 4 cards in a row.
 *
 * Echoes the docx's "Assessment & Advisory · Implementation · Managed
 * Services · Training & Enablement" pattern. Used on every Red Hat
 * service page (RHEL, OpenShift, Ansible, OpenShift AI) and the
 * overview page.
 */
export function RedHatEngagement({
  kicker,
  title,
  lede,
  items,
}: {
  kicker: string;
  title: string;
  lede: string;
  items: RedHatEngagementModel[];
}) {
  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <RedHatSectionHeader kicker={kicker} title={title} lede={lede} />

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
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-bg-surface p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-redhat/40"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-redhat/60 via-redhat/0 to-redhat/0 opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-redhat/30 bg-redhat/10 text-redhat">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </div>

                <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
                  Model 0{i + 1}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold tracking-tight text-white">
                  {m.label}
                </h3>

                <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-redhat/30 bg-redhat/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-redhat">
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
