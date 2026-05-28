"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { RevealGroup, revealItem } from "@/components/motion/Reveal";
import { RedHatSectionHeader } from "./RedHatSectionHeader";
import type { RedHatStandard } from "@/content/red-hat/types";

/**
 * RHEL hardening standards row — CIS · STIG · PCI · ISO · NIST.
 *
 * 5 large standards-code badges with full names underneath, arranged
 * horizontally on lg+ and stacked on mobile. Argues: "every regulated
 * framework you might face — covered as part of hardening".
 */
export function RedHatStandardsRow({
  items,
}: {
  items: RedHatStandard[];
}) {
  return (
    <section className="relative py-20 md:py-24">
      <Container>
        <RedHatSectionHeader
          kicker="Compliance baselines"
          title="Hardened to every framework"
          highlight="that matters."
          lede="OpenSCAP + SCAP Security Guide + Ansible STIG roles + Red Hat Insights — automated, continuously enforced, and audit-reportable."
        />

        <RevealGroup
          stagger={0.05}
          className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
        >
          {items.map((s) => (
            <motion.div
              key={s.code}
              variants={revealItem}
              className="group relative flex aspect-[4/3] flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-bg-surface p-5 text-center transition-all hover:-translate-y-1 hover:border-redhat/40"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-redhat/60 via-redhat/0 to-redhat/0 opacity-50" />

              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-redhat/30 bg-redhat/10 text-redhat">
                <ShieldCheck className="h-4 w-4" strokeWidth={1.7} />
              </div>

              <p className="font-display text-3xl font-semibold tracking-tight text-redhat">
                {s.code}
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted">
                {s.full}
              </p>
            </motion.div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
