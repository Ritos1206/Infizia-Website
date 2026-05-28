"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { RevealGroup, revealItem } from "@/components/motion/Reveal";
import { RedHatSectionHeader } from "./RedHatSectionHeader";

/**
 * OpenShift AI foundation models row — Granite · Llama · Mistral ·
 * Code Llama. Each model is a chip-style card.
 */
export function RedHatFoundationModels({
  items,
}: {
  items: { name: string; family: string }[];
}) {
  return (
    <section className="relative py-20 md:py-24">
      <Container>
        <RedHatSectionHeader
          kicker="Foundation models we fine-tune"
          title="Open-source models, on your data"
          highlight=", in your cluster."
          lede="InstructLab + OpenShift AI lets you fine-tune leading open-source foundation models on proprietary data — without that data ever leaving your infrastructure."
        />

        <RevealGroup
          stagger={0.06}
          className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((m) => (
            <motion.div
              key={m.name}
              variants={revealItem}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-bg-surface p-6 transition-all hover:-translate-y-1 hover:border-redhat/40"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-redhat/60 via-redhat/0 to-redhat/0 opacity-50" />

              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-redhat/30 bg-redhat/10 text-redhat">
                <Cpu className="h-4 w-4" strokeWidth={1.7} />
              </div>

              <p className="mt-4 font-display text-base font-semibold tracking-tight text-white">
                {m.name}
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
                {m.family}
              </p>
            </motion.div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
