"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { RevealGroup, revealItem } from "@/components/motion/Reveal";
import { RedHatSectionHeader } from "./RedHatSectionHeader";
import type { RedHatRhelVersion } from "@/content/red-hat/types";

const STATUS_STYLE: Record<
  RedHatRhelVersion["status"],
  { dot: string; text: string; label: string }
> = {
  Current: {
    dot: "bg-redhat shadow-[0_0_8px_rgba(238,0,0,0.7)] animate-pulse",
    text: "text-redhat",
    label: "Current · active",
  },
  Active: {
    dot: "bg-brand-amber shadow-[0_0_8px_rgba(251,191,36,0.6)]",
    text: "text-brand-amber",
    label: "Active",
  },
  Extended: {
    dot: "bg-brand-orange shadow-[0_0_8px_rgba(251,146,60,0.6)]",
    text: "text-brand-orange",
    label: "Extended Life Cycle",
  },
  Ended: {
    dot: "bg-text-faint",
    text: "text-text-faint",
    label: "Ended",
  },
};

/**
 * RHEL version table — verbatim data from `Infizia_Services.docx`.
 *
 * Rendered as a grid of version cards, NOT an HTML table — each card
 * carries its support status as a colored pill, full-support date,
 * maintenance date, and (for the Current version) a pulsing redhat dot.
 *
 * This is in addition to the bespoke hero (LifecycleTimelineRiver) on
 * the RHEL page — the hero is a visual narrative; this section is the
 * authoritative data table.
 */
export function RedHatVersionTable({
  kicker,
  title,
  lede,
  items,
}: {
  kicker: string;
  title: string;
  lede: string;
  items: RedHatRhelVersion[];
}) {
  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <RedHatSectionHeader kicker={kicker} title={title} lede={lede} />

        <RevealGroup
          stagger={0.06}
          className="mt-14 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((v) => {
            const style = STATUS_STYLE[v.status];
            return (
              <motion.div
                key={v.version}
                variants={revealItem}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-bg-surface p-6 transition-all hover:-translate-y-1 hover:border-redhat/40"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-redhat/60 via-redhat/0 to-redhat/0 opacity-50" />

                <div className="flex items-center gap-2">
                  <span className={["h-2 w-2 rounded-full", style.dot].join(" ")} />
                  <span className={["font-mono text-[10px] uppercase tracking-[0.18em]", style.text].join(" ")}>
                    {style.label}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-white">
                  {v.version}
                </h3>

                <div className="mt-6 flex flex-col gap-3 border-t border-white/5 pt-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
                      Full support until
                    </p>
                    <p className="mt-1 text-sm font-medium text-text-secondary">
                      {v.fullSupport}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
                      Maintenance until
                    </p>
                    <p className="mt-1 text-sm font-medium text-text-secondary">
                      {v.maintenance}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </RevealGroup>

        <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-text-faint">
          Source · Red Hat Enterprise Linux Life Cycle (April 2026)
        </p>
      </Container>
    </section>
  );
}
