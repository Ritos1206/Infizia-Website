"use client";

/**
 * /contact/demo — Phase 7 Contact · 2 of 3 (book a demo)
 *
 * Brand accent: brand-green (matches the "demo / try it" energy across
 * the site — VitaCare's brand-green and the "Live" pulse colour).
 * The form posts to /api/contact with formType: "demo". Sidebar
 * surfaces "what to expect" + 4 product highlights.
 */

import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  PlayCircle,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { GridBackground } from "@/components/motion/GridBackground";
import { Reveal } from "@/components/motion/Reveal";
import { DemoForm } from "@/components/contact/DemoForm";

const WHAT_TO_EXPECT = [
  {
    icon: Calendar,
    title: "1. Confirm a slot",
    body: "We'll reply with 2-3 time options that work for your team — usually within one business day.",
  },
  {
    icon: PlayCircle,
    title: "2. Live walkthrough",
    body: "30-45 minutes — your screens, your data, your questions. No generic deck demos.",
  },
  {
    icon: Sparkles,
    title: "3. Tailored next steps",
    body: "Pricing, rollout plan, sandbox access, or a follow-up with your engineering team — whatever fits.",
  },
] as const;

const HIGHLIGHTS = [
  "Live product walkthrough — your data, your workflow",
  "Tailored to your role and industry",
  "30-45 minutes · IST hours · video call",
  "No commitment after the call",
] as const;

export default function DemoPage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden pt-16 pb-12 md:pt-24 md:pb-16">
        <GridBackground />
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/3 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-brand-green/[0.10] blur-[120px]" />
        </div>

        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <Kicker className="justify-center">Book a Demo</Kicker>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-[2.5rem] font-semibold leading-[0.98] tracking-tight text-white md:text-5xl lg:text-[4.25rem]">
                See it running on your{" "}
                <span className="text-gradient-brand">workflow.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 text-base leading-relaxed text-text-secondary md:text-lg">
                Pick the product you&rsquo;re evaluating. We&rsquo;ll set up a live
                walkthrough — tailored to your team, your data, and the
                specific problem you&rsquo;re trying to solve.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─── Form + Sidebar ────────────────────────────────────── */}
      <section className="relative pb-24 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Form column */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-bg-surface/80 p-6 backdrop-blur md:p-8 lg:p-10">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brand-green/0 via-brand-green/60 to-brand-green/0" />

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-green/30 bg-brand-green/10 text-brand-green">
                    <PlayCircle className="h-4 w-4" strokeWidth={1.6} />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-green">
                      Book a demo
                    </p>
                    <h2 className="font-display text-xl font-semibold tracking-tight text-white">
                      Tell us what you want to see
                    </h2>
                  </div>
                </div>

                <div className="mt-7">
                  <DemoForm />
                </div>
              </div>
            </motion.div>

            {/* What-to-expect sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="lg:col-span-5"
            >
              <div className="space-y-4">
                <div className="rounded-2xl border border-brand-green/20 bg-bg-surface/40 px-5 py-5 backdrop-blur">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inset-0 animate-ping rounded-full bg-brand-green/60" />
                      <span className="relative h-1.5 w-1.5 rounded-full bg-brand-green" />
                    </span>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-green">
                      What to expect
                    </p>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold leading-tight tracking-tight text-white md:text-2xl">
                    Three steps from request to ROI.
                  </h3>
                </div>

                {WHAT_TO_EXPECT.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.title}
                      className="relative flex items-start gap-4 rounded-xl border border-white/10 bg-bg-surface/60 p-5"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand-green/30 bg-brand-green/10 text-brand-green">
                        <Icon className="h-4 w-4" strokeWidth={1.6} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-display text-base font-semibold tracking-tight text-white">
                          {step.title}
                        </h4>
                        <p className="mt-1.5 text-sm leading-relaxed text-text-muted">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  );
                })}

                {/* Highlights */}
                <div className="mt-6 rounded-xl border border-white/10 bg-bg-base/40 p-5">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-brand-green" />
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
                      Quick facts
                    </p>
                  </div>
                  <ul className="mt-3 space-y-2">
                    {HIGHLIGHTS.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm leading-relaxed text-text-secondary"
                      >
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-green" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
