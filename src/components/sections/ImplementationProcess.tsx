"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";

const PHASES = [
  {
    n: "01",
    progress: "10%",
    title: "Exploration & Setup",
    summary: "Project assessment, layout, and flow for client approval.",
    detail: [
      "Discovery workshops and scoping",
      "Architecture and integration design",
      "Project flow & approval gates",
    ],
  },
  {
    n: "02",
    progress: "50%",
    title: "Operations Commencement",
    summary: "Project development and integrations.",
    detail: [
      "Sprint-based delivery with weekly demos",
      "Integration with existing systems and data",
      "Quality gates and review checkpoints",
    ],
  },
  {
    n: "03",
    progress: "75%",
    title: "Trial Run",
    summary: "Scalability validation and ecosystem integration.",
    detail: [
      "Performance and load validation",
      "End-to-end testing with real data",
      "Stakeholder UAT and feedback loop",
    ],
  },
  {
    n: "04",
    progress: "100%",
    title: "Deployment",
    summary: "Long-term partnership, governance, and sustainability.",
    detail: [
      "Production rollout & cutover",
      "Operations handover and runbooks",
      "Governance, support, and continuous improvement",
    ],
  },
];

export function ImplementationProcess() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"],
  });

  // Progress line height grows from 0% to 100% as the section scrolls through view.
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <SectionHeader
          kicker="Project Implementation Process"
          title="Four phases. From discovery to deployment."
          lede="A repeatable, governed delivery process — designed to compress time-to-value while keeping every milestone transparent and approval-driven."
          gradient
        />

        <div ref={ref} className="relative mt-16 lg:mt-20">
          {/* Vertical track */}
          <div className="absolute left-[19px] top-0 hidden h-full w-px bg-white/10 md:block" />
          {/* Animated fill */}
          <motion.div
            className="absolute left-[19px] top-0 hidden w-px bg-gradient-to-b from-brand-teal via-brand-green to-brand-blue md:block"
            style={{ height: lineHeight }}
          />

          <ol className="flex flex-col gap-12 md:gap-16">
            {PHASES.map((phase, i) => (
              <Reveal key={phase.n} delay={i * 0.05}>
                <li className="relative grid grid-cols-1 items-start gap-6 md:grid-cols-12 md:gap-10">
                  {/* Dot + number column */}
                  <div className="relative md:col-span-3">
                    <div className="flex items-center gap-4">
                      {/* Glowing dot */}
                      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-bg-base">
                        <motion.span
                          className="absolute inset-0 rounded-full bg-brand-teal/20"
                          animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                          transition={{
                            duration: 2.4,
                            repeat: Infinity,
                            ease: "easeOut",
                          }}
                        />
                        <span className="relative h-2 w-2 rounded-full bg-brand-teal shadow-glow-teal" />
                      </div>
                      <div>
                        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-text-faint">
                          Phase {phase.n}
                        </p>
                        <p className="font-mono text-xs text-brand-teal">
                          {phase.progress}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content column */}
                  <div className="md:col-span-9">
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
                      {phase.title}
                    </h3>
                    <p className="mt-2 text-base text-text-secondary">
                      {phase.summary}
                    </p>
                    <ul className="mt-5 grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4">
                      {phase.detail.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-2 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-sm text-text-muted"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-green" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
