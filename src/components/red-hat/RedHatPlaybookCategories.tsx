"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { RevealGroup, revealItem } from "@/components/motion/Reveal";
import { RedHatSectionHeader } from "./RedHatSectionHeader";
import type { RedHatPlaybookCategory } from "@/content/red-hat/types";

/**
 * Ansible playbook categories — 5 buckets:
 *   Infrastructure · Security & Compliance · Application Deployment ·
 *   Cloud Automation · Network Automation.
 *
 * Each bucket gets a card with icon, category label in redhat color,
 * body, and 4 example playbooks listed as compact pills.
 */
export function RedHatPlaybookCategories({
  items,
}: {
  items: RedHatPlaybookCategory[];
}) {
  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <RedHatSectionHeader
          kicker="Common automation use cases"
          title="What we automate"
          highlight="for you."
          lede="Five categories cover the bulk of enterprise automation work — and every playbook ships with documentation, Molecule tests, and a Git repository structure your team can own."
        />

        <RevealGroup
          stagger={0.06}
          className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((c) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.category}
                variants={revealItem}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-bg-surface p-6 transition-all hover:-translate-y-1 hover:border-redhat/40"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-redhat/60 via-redhat/0 to-redhat/0 opacity-50 transition-opacity group-hover:opacity-100" />

                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-redhat/30 bg-redhat/10 text-redhat">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </div>

                <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
                  Category
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold tracking-tight text-redhat">
                  {c.category}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {c.body}
                </p>

                <ul className="mt-5 flex flex-wrap gap-1.5 border-t border-white/5 pt-4">
                  {c.examples.map((ex) => (
                    <li
                      key={ex}
                      className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-text-secondary"
                    >
                      {ex}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
