"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { RevealGroup, revealItem } from "@/components/motion/Reveal";
import { RedHatSectionHeader } from "./RedHatSectionHeader";
import { redHatOverviewContent } from "@/content/red-hat/overview";

/**
 * Overview-page pillar catalogue — 6 pillar cards rendered as a
 * detailed grid below the StackConstellation hero. This is the
 * primary navigation from the overview into each Red Hat sub-page.
 *
 * Cards follow the D-57 standard: whole card clickable, hover lift,
 * focus ring, top hairline shimmer.
 */
export function RedHatPillarsGrid() {
  const { pillars } = redHatOverviewContent;

  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <RedHatSectionHeader
          kicker="Six pillars · one practice"
          title="Pick the pillar that matches"
          highlight="your team."
          lede="Each pillar is its own dedicated practice — with services, engagement models, and pricing scoped to that product family. Click through to explore."
        />

        <RevealGroup
          stagger={0.05}
          className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div key={p.slug} variants={revealItem}>
                <Link
                  href={`/red-hat/${p.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-bg-surface p-7 shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:border-redhat/40 hover:bg-bg-elevated hover:shadow-[0_18px_40px_-16px_rgba(238,0,0,0.4)] active:translate-y-0 active:scale-[0.995] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-redhat focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-redhat/60 via-redhat/0 to-redhat/0 opacity-50 transition-opacity duration-300 group-hover:opacity-100"
                  />

                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-redhat/[0.08] blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />

                  <div className="relative flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-redhat/30 bg-redhat/10 text-redhat">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-text-faint transition-all duration-300 group-hover:text-redhat group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>

                  <p className="relative mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
                    Pillar 0{i + 1} · {p.buyer}
                  </p>

                  <h3 className="relative mt-2 font-display text-2xl font-semibold tracking-tight text-white">
                    {p.fullName}
                  </h3>

                  <p className="relative mt-3 flex-1 text-sm leading-relaxed text-text-muted">
                    {p.body}
                  </p>

                  <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-redhat transition-colors">
                    Explore {p.label}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
