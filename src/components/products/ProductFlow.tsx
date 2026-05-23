"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { ACCENTS, type ProductAccent } from "@/lib/product-accents";
import { cn } from "@/lib/utils";
import type { FlagshipFlowStep } from "@/content/products/types";

/**
 * Scroll-driven, vertically-pinned 5-step product flow.
 * Adapted from ImplementationProcess but accent-themed per product.
 *
 * - Vertical track on the left
 * - Animated gradient fill that grows as the section scrolls into view
 * - Each step has a numbered icon badge, title, and body
 */
export function ProductFlow({
  kicker,
  title,
  lede,
  steps,
  accent,
}: {
  kicker: string;
  title: string;
  lede: string;
  steps: FlagshipFlowStep[];
  accent: ProductAccent;
}) {
  const a = ACCENTS[accent];
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Tinted backdrop */}
      <div className="absolute inset-0 -z-10 bg-bg-surface" />
      <div className="absolute inset-0 -z-10 bg-grid-fine opacity-40" />
      <div
        className={cn(
          "absolute -top-40 left-1/2 -z-10 h-96 w-[60rem] -translate-x-1/2 rounded-full blur-[140px]",
          a.glow,
        )}
      />

      <Container>
        <SectionHeader
          kicker={kicker}
          title={title}
          lede={lede}
          gradient
        />

        <div ref={ref} className="relative mt-16 lg:mt-20">
          {/* Vertical track */}
          <div className="absolute left-[19px] top-0 hidden h-full w-px bg-white/10 md:block" />

          {/* Animated fill */}
          <motion.div
            className={cn(
              "absolute left-[19px] top-0 hidden w-px bg-gradient-to-b md:block",
              a.progressFrom,
              a.progressTo,
            )}
            style={{ height: lineHeight }}
          />

          <ol className="flex flex-col gap-12 md:gap-14">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.n} delay={i * 0.05}>
                  <li className="relative grid grid-cols-1 items-start gap-5 md:grid-cols-12 md:gap-10">
                    {/* Dot + number column */}
                    <div className="relative md:col-span-3">
                      <div className="flex items-center gap-4">
                        {/* Glowing dot */}
                        <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-bg-base">
                          <motion.span
                            className={cn(
                              "absolute inset-0 rounded-full",
                              a.bgSoft,
                            )}
                            animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                            transition={{
                              duration: 2.4,
                              repeat: Infinity,
                              ease: "easeOut",
                              delay: i * 0.4,
                            }}
                          />
                          <span
                            className={cn(
                              "relative h-2 w-2 rounded-full",
                              a.bg,
                              a.shadow,
                            )}
                          />
                        </div>
                        <div>
                          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-text-faint">
                            Step {step.n}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Content column */}
                    <div className="md:col-span-9">
                      <div
                        className={cn(
                          "group relative overflow-hidden rounded-2xl border border-white/10 bg-bg-base/60 p-6 transition-all md:p-7",
                          a.hoverBorder,
                        )}
                      >
                        <div className="flex items-start gap-5">
                          <div
                            className={cn(
                              "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border",
                              a.border,
                              a.bgSoft,
                              a.text,
                            )}
                          >
                            <Icon className="h-5 w-5" strokeWidth={1.6} />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-display text-xl font-semibold tracking-tight text-white md:text-2xl">
                              {step.title}
                            </h3>
                            <p className="mt-2 text-base leading-relaxed text-text-secondary">
                              {step.body}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
