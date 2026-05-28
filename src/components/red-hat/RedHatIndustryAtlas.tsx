"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { RevealGroup, revealItem } from "@/components/motion/Reveal";
import { RedHatSectionHeader } from "./RedHatSectionHeader";
import type { RedHatIndustryUseCase } from "@/content/red-hat/types";

/**
 * OpenShift AI Industry Use Case Atlas — 6 industry rows from the docx
 * Table 2:
 *
 *   BFSI · Healthcare · Government · Manufacturing · Telecom · Retail
 *
 * Each card carries: industry icon, industry label, use case (one
 * line), platform stack (small chip).
 */
export function RedHatIndustryAtlas({
  items,
}: {
  items: RedHatIndustryUseCase[];
}) {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-bg-surface/40" />
      <Container>
        <RedHatSectionHeader
          kicker="Use cases · across industries"
          title="What teams ship on OpenShift AI"
          highlight="today."
          lede="Six industry archetypes from real engagements — each one running on a different combination of OpenShift AI components: KServe, Granite, InstructLab, Kubeflow, MLflow, Pipelines."
        />

        <RevealGroup
          stagger={0.06}
          className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((u) => {
            const Icon = u.icon;
            return (
              <motion.div
                key={u.industry}
                variants={revealItem}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-bg-base p-6 transition-all hover:-translate-y-1 hover:border-redhat/40"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-redhat/60 via-redhat/0 to-redhat/0 opacity-50 transition-opacity group-hover:opacity-100" />

                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-redhat/30 bg-redhat/10 text-redhat">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-text-secondary">
                    {u.platform}
                  </span>
                </div>

                <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
                  Industry
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold tracking-tight text-white">
                  {u.industry}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {u.useCase}
                </p>
              </motion.div>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
