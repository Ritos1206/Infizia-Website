"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { ButtonLink } from "@/components/ui/Button";
import { GridBackground } from "@/components/motion/GridBackground";
import { AgentTasks } from "@/components/sections/AgentTasks";

const titleWords = [
  { text: "Software", className: "text-white" },
  { text: "that", className: "text-white" },
  { text: "thinks.", className: "text-gradient-brand" },
  { text: "Agents", className: "text-white" },
  { text: "that", className: "text-white" },
  { text: "act.", className: "text-gradient-soft" },
];

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32 lg:pt-28 lg:pb-40">
      <GridBackground />

      {/* Decorative ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-brand-green/[0.07] blur-[120px]" />
        <div className="absolute top-1/4 -right-40 h-[500px] w-[500px] rounded-full bg-brand-blue/[0.08] blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-brand-teal/[0.06] blur-[120px]" />
      </div>

      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Kicker>Agentic AI · Built for Production</Kicker>
            </motion.div>

            <h1 className="mt-7 font-display text-[2.75rem] font-semibold leading-[1.0] tracking-tight md:text-6xl lg:text-[5.25rem]">
              {titleWords.map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.1 + i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`inline-block ${w.className}`}
                >
                  {w.text}
                  {i < titleWords.length - 1 && "\u00A0"}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-7 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg"
            >
              Infizia builds agentic AI products and the platforms they run on
              — autonomous systems that perceive, reason, and act across your
              enterprise. Plus a trusted Red Hat stack practice for the
              infrastructure underneath.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <ButtonLink href="/products" variant="primary" size="lg">
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="/contact/demo" variant="outline" size="lg">
                Book a Demo
              </ButtonLink>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-text-faint"
            >
              <span className="font-mono uppercase tracking-[0.18em]">
                Featured
              </span>
              <span className="h-px w-8 bg-white/10" />
              <Link
                href="/products/icon"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Sparkles className="h-3 w-3 text-brand-teal" />
                iCON
              </Link>
              <Link
                href="/products/vitacare"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Sparkles className="h-3 w-3 text-brand-green" />
                VitaCare
              </Link>
              <Link
                href="/red-hat"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-redhat" />
                Red Hat Stack
              </Link>
            </motion.div>
          </div>

          {/* Right: agentic visual — real business tasks an agent handles */}
          <div className="relative lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full"
            >
              <AgentTasks />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
