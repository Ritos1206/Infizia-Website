"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { RevealGroup, revealItem } from "@/components/motion/Reveal";
import { RedHatSectionHeader } from "./RedHatSectionHeader";
import type { RedHatPipelineStage } from "@/content/red-hat/types";

/**
 * OpenShift DevSecOps pipeline horizontal rail — Source → Build & Test
 * → Scan & Sign → Secrets → GitOps Deploy → Runtime.
 *
 * 6 stage cards laid out horizontally on lg, with chevron glyphs in
 * the gaps. On mobile collapses to a 2-col grid. Distinct from the
 * blockchain ChainLedgerSequence (which is a 4-block chain with hash
 * connectors and a "mining" tile) — this is a pipeline narrative
 * showing tooling per stage, not a chain narrative.
 */
export function RedHatPipelineRail({
  items,
}: {
  items: RedHatPipelineStage[];
}) {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-bg-surface/40" />
      <Container>
        <RedHatSectionHeader
          kicker="DevSecOps pipeline"
          title="Security gates that"
          highlight="actually gate."
          lede="Tekton + ArgoCD + Quay + Vault + ACS — the full toolchain wired into one OpenShift-native pipeline. Vulnerable images blocked at push. Secrets injected at runtime. Runtime policy enforced continuously."
        />

        <RevealGroup
          stagger={0.04}
          className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6"
        >
          {items.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                variants={revealItem}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-bg-base p-5 transition-all hover:-translate-y-1 hover:border-redhat/40">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-redhat/60 via-redhat/0 to-redhat/0 opacity-50" />

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-redhat/30 bg-redhat/10 text-redhat">
                    <Icon className="h-4 w-4" strokeWidth={1.7} />
                  </div>

                  <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
                    Stage 0{i + 1}
                  </p>
                  <h3 className="mt-1 font-display text-base font-semibold tracking-tight text-white">
                    {s.label}
                  </h3>
                  <p className="mt-2 text-[11px] leading-snug text-text-muted">
                    {s.tooling}
                  </p>
                </div>

                {/* Chevron between cards on lg */}
                {i < items.length - 1 && (
                  <ChevronRight
                    aria-hidden
                    className="pointer-events-none absolute -right-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-redhat/40 lg:block"
                    strokeWidth={2.2}
                  />
                )}
              </motion.div>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
