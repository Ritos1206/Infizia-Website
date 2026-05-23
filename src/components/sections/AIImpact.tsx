"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, RevealGroup, revealItem } from "@/components/motion/Reveal";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import {
  TrendingUp,
  Brain,
  Heart,
  PiggyBank,
  type LucideIcon,
} from "lucide-react";

type Stat = {
  icon: LucideIcon;
  min: number;
  max: number;
  label: string;
  description: string;
  accent: "teal" | "green" | "blue" | "purple";
};

const STATS: Stat[] = [
  {
    icon: TrendingUp,
    min: 25,
    max: 40,
    label: "Operational Efficiency",
    description:
      "Workflow automation and AI-assisted decisions remove manual bottlenecks across operations.",
    accent: "teal",
  },
  {
    icon: Brain,
    min: 30,
    max: 50,
    label: "Decision-Making Speed",
    description:
      "Agentic systems compress research-to-action timelines by orders of magnitude.",
    accent: "green",
  },
  {
    icon: Heart,
    min: 20,
    max: 35,
    label: "Customer Satisfaction",
    description:
      "AI-driven personalization and 24/7 conversational interfaces lift CSAT and retention.",
    accent: "blue",
  },
  {
    icon: PiggyBank,
    min: 15,
    max: 25,
    label: "Cost Savings",
    description:
      "Automation, smart routing, and infrastructure efficiency reduce operating expenditure.",
    accent: "purple",
  },
];

const accentClasses = {
  teal: {
    text: "text-brand-teal",
    bg: "bg-brand-teal/10",
    border: "border-brand-teal/20",
    bar: "from-brand-teal/0 via-brand-teal/60 to-brand-teal",
  },
  green: {
    text: "text-brand-green",
    bg: "bg-brand-green/10",
    border: "border-brand-green/20",
    bar: "from-brand-green/0 via-brand-green/60 to-brand-green",
  },
  blue: {
    text: "text-brand-blue",
    bg: "bg-brand-blue/10",
    border: "border-brand-blue/20",
    bar: "from-brand-blue/0 via-brand-blue/60 to-brand-blue",
  },
  purple: {
    text: "text-[#a78bfa]",
    bg: "bg-[#a78bfa]/10",
    border: "border-[#a78bfa]/20",
    bar: "from-[#a78bfa]/0 via-[#a78bfa]/60 to-[#a78bfa]",
  },
};

export function AIImpact() {
  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <SectionHeader
          kicker="The Impact of AI Adoption"
          title="Measurable gains across the core of your business."
          lede="Infizia transforms complex research into actionable results — so your team focuses on the business, not the busywork. AI adoption drives compound improvements across speed, efficiency, customer experience, and cost."
          gradient
        />

        <RevealGroup
          stagger={0.1}
          className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          {STATS.map((stat) => {
            const Icon = stat.icon;
            const a = accentClasses[stat.accent];
            return (
              <motion.div
                key={stat.label}
                variants={revealItem}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-bg-surface p-7 transition-all hover:border-white/20"
              >
                {/* Animated top bar */}
                <motion.div
                  className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${a.bar}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformOrigin: "left" }}
                />

                {/* Icon */}
                <div
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${a.bg} ${a.text}`}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </div>

                {/* Range */}
                <div className="mt-6">
                  <div className="flex items-baseline gap-1 font-display text-4xl font-semibold tracking-tight md:text-5xl">
                    <span className={a.text}>
                      <AnimatedCounter value={stat.min} suffix="" />
                    </span>
                    <span className="text-text-faint">–</span>
                    <span className="text-white">
                      <AnimatedCounter value={stat.max} suffix="%" />
                    </span>
                  </div>
                </div>

                {/* Label */}
                <p className="mt-3 font-display text-base font-semibold text-white">
                  {stat.label}
                </p>

                {/* Description */}
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </RevealGroup>

        <Reveal delay={0.3}>
          <p className="mt-10 text-center text-xs font-mono uppercase tracking-[0.2em] text-text-faint">
            Source: Industry benchmarks observed across Infizia engagements
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
