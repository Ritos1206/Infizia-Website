"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { RevealGroup, revealItem } from "@/components/motion/Reveal";
import { RedHatSectionHeader } from "./RedHatSectionHeader";
import type { RedHatService } from "@/content/red-hat/types";

/**
 * Red Hat services section — 5 service cards from the docx.
 *
 * Each card carries: icon, optional badge (duration), title, body, and
 * a bullet list of deliverables / activities / standards. Layout is a
 * staggered 1-col on mobile / 2-col on md / asymmetric 6-col grid on
 * lg where service 1 spans 4 cols and services 2-5 fill the remaining
 * 6-col grid 2-up — giving a magazine-style rhythm distinct from the
 * uniform 3-col `ProductFeatures` grid.
 */
export function RedHatServices({
  kicker,
  title,
  lede,
  items,
}: {
  kicker: string;
  title: string;
  lede: string;
  items: RedHatService[];
}) {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-bg-surface/40" />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-redhat/[0.05] blur-3xl" />
      </div>

      <Container>
        <RedHatSectionHeader kicker={kicker} title={title} lede={lede} />

        <RevealGroup
          stagger={0.05}
          className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3"
        >
          {items.map((s, i) => {
            const Icon = s.icon;
            // First card spans 1 col always but feature it visually with a different surface
            const isLead = i === 0;
            return (
              <motion.div
                key={s.title}
                variants={revealItem}
                className={[
                  "group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-redhat/40 md:p-7",
                  isLead
                    ? "bg-gradient-to-br from-redhat/[0.10] to-bg-elevated"
                    : "bg-bg-base",
                ].join(" ")}
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-redhat/60 via-redhat/0 to-redhat/0 opacity-50 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-redhat/[0.06] blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-redhat/30 bg-redhat/10 text-redhat">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </div>
                    {s.badge && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-redhat/30 bg-redhat/10 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-redhat">
                        {s.badge}
                      </span>
                    )}
                  </div>

                  <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
                    Service · 0{i + 1}
                  </p>

                  <h3 className="mt-1.5 font-display text-xl font-semibold tracking-tight text-white">
                    {s.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-text-secondary md:text-[15px]">
                    {s.body}
                  </p>

                  {s.bullets && s.bullets.length > 0 && (
                    <ul className="mt-5 flex flex-col gap-2 border-t border-white/5 pt-4">
                      {s.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-[13px] leading-relaxed text-text-muted"
                        >
                          <Check
                            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-redhat"
                            strokeWidth={2.4}
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
