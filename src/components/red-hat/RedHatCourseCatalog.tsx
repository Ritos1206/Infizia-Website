"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { RevealGroup, revealItem } from "@/components/motion/Reveal";
import { RedHatSectionHeader } from "./RedHatSectionHeader";
import type { RedHatTrainingCourse } from "@/content/red-hat/types";

/**
 * Training course catalogue — verbatim from the docx.
 *
 * 6 courses rendered as detailed cards with: course icon, course
 * name, audience pill, duration · format · price metadata strip,
 * and a "Group discount available" footer for non-bootcamp courses.
 *
 * Uses a 1-col / 2-col responsive grid — distinct from the bespoke
 * Course Stadium hero (which is the curved 6-podium arena visual).
 */
export function RedHatCourseCatalog({
  kicker,
  title,
  lede,
  items,
}: {
  kicker: string;
  title: string;
  lede: string;
  items: RedHatTrainingCourse[];
}) {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-bg-surface/40" />
      <Container>
        <RedHatSectionHeader kicker={kicker} title={title} lede={lede} />

        <RevealGroup
          stagger={0.05}
          className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          {items.map((c, i) => {
            const Icon = c.icon;
            const isBootcamp = c.course.includes("Bootcamp");
            return (
              <motion.div
                key={c.course}
                variants={revealItem}
                className={[
                  "group relative flex flex-col overflow-hidden rounded-2xl border p-7 transition-all hover:-translate-y-1",
                  isBootcamp
                    ? "border-redhat/40 bg-gradient-to-br from-redhat/[0.10] to-bg-elevated"
                    : "border-white/10 bg-bg-base hover:border-redhat/40",
                ].join(" ")}
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-redhat/60 via-redhat/0 to-redhat/0 opacity-50" />

                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-redhat/30 bg-redhat/10 text-redhat">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full border border-redhat/30 bg-redhat/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-redhat">
                    Course 0{i + 1}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-white">
                  {c.course}
                </h3>

                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-text-faint">
                  {c.audience}
                </p>

                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/5 pt-5">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-text-faint">
                      Duration
                    </p>
                    <p className="mt-1 font-display text-base font-semibold text-white">
                      {c.duration}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-text-faint">
                      Format
                    </p>
                    <p className="mt-1 text-[12px] font-medium leading-snug text-text-secondary">
                      {c.format}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-text-faint">
                      Price
                    </p>
                    <p className="mt-1 font-display text-base font-semibold text-redhat">
                      {c.price}
                    </p>
                  </div>
                </div>

                {!isBootcamp && (
                  <p className="mt-5 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-text-faint">
                    <span className="h-1 w-1 rounded-full bg-redhat" />
                    Group discount · 5+ attendees
                  </p>
                )}
              </motion.div>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
