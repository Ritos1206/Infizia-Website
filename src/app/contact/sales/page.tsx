"use client";

/**
 * /contact/sales — Phase 7 Contact · 3 of 3 (talk to sales)
 *
 * Brand accent: brand-blue (matches the deeper "enterprise / sales /
 * platform" tone — EyePOS's brand-blue carries the same weight).
 * The form posts to /api/contact with formType: "sales". Sidebar
 * surfaces "what we'll cover" topics + 4 footer trust signals.
 */

import { motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  Layers,
  ShieldCheck,
  TrendingUp,
  Globe2,
  Award,
  Clock,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { GridBackground } from "@/components/motion/GridBackground";
import { Reveal } from "@/components/motion/Reveal";
import { SalesForm } from "@/components/contact/SalesForm";

const COVERAGE = [
  {
    icon: Layers,
    title: "Multi-product rollouts",
    body: "Bundling 2-3 Infizia products across teams — pricing, sequencing, and integration architecture in one conversation.",
  },
  {
    icon: Briefcase,
    title: "Services engagements",
    body: "Web/app development, agentic AI builds, blockchain, and Google Cloud delivery — scoped, priced, and timed to your roadmap.",
  },
  {
    icon: ShieldCheck,
    title: "Red Hat practice",
    body: "RHEL, OpenShift, Ansible, OpenShift AI — assessment, build, run, and training. Tier-based managed services available.",
  },
  {
    icon: TrendingUp,
    title: "Custom & cross-vertical",
    body: "Beyond the catalogue — strategic engagements, partnerships, and tailored AI solutions across 10 verticals.",
  },
] as const;

const TRUST_SIGNALS = [
  { icon: Award, label: "14 products live across 10 industries" },
  { icon: Globe2, label: "Multi-region, enterprise-grade delivery" },
  { icon: Building2, label: "A unit of Contezza Techno Solution Pvt. Ltd." },
  { icon: Clock, label: "Response within one business day" },
] as const;

export default function SalesPage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden pt-16 pb-12 md:pt-24 md:pb-16">
        <GridBackground />
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/3 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-brand-blue/[0.10] blur-[120px]" />
        </div>

        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <Kicker className="justify-center">Talk to Sales</Kicker>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-[2.5rem] font-semibold leading-[0.98] tracking-tight text-white md:text-5xl lg:text-[4.25rem]">
                Built for the way{" "}
                <span className="text-gradient-brand">you actually buy.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 text-base leading-relaxed text-text-secondary md:text-lg">
                Tell us about the deal you&rsquo;re trying to close — products,
                services, Red Hat, Google Cloud, or a mix. The right person
                from our team will reach out with what fits, what doesn&rsquo;t,
                and what we&rsquo;d recommend.
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
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brand-blue/0 via-brand-blue/60 to-brand-blue/0" />

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-blue/30 bg-brand-blue/10 text-brand-blue">
                    <Briefcase className="h-4 w-4" strokeWidth={1.6} />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-blue">
                      Talk to sales
                    </p>
                    <h2 className="font-display text-xl font-semibold tracking-tight text-white">
                      Tell us about your deal
                    </h2>
                  </div>
                </div>

                <div className="mt-7">
                  <SalesForm />
                </div>
              </div>
            </motion.div>

            {/* Coverage sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="lg:col-span-5"
            >
              <div className="space-y-3">
                <div className="rounded-2xl border border-brand-blue/20 bg-bg-surface/40 px-5 py-5 backdrop-blur">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inset-0 animate-ping rounded-full bg-brand-blue/60" />
                      <span className="relative h-1.5 w-1.5 rounded-full bg-brand-blue" />
                    </span>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">
                      What we&rsquo;ll cover
                    </p>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold leading-tight tracking-tight text-white md:text-2xl">
                    Bring any of these to the call.
                  </h3>
                </div>

                {COVERAGE.map((c) => {
                  const Icon = c.icon;
                  return (
                    <div
                      key={c.title}
                      className="relative flex items-start gap-4 rounded-xl border border-white/10 bg-bg-surface/60 p-5"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand-blue/30 bg-brand-blue/10 text-brand-blue">
                        <Icon className="h-4 w-4" strokeWidth={1.6} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-display text-base font-semibold tracking-tight text-white">
                          {c.title}
                        </h4>
                        <p className="mt-1.5 text-sm leading-relaxed text-text-muted">
                          {c.body}
                        </p>
                      </div>
                    </div>
                  );
                })}

                {/* Trust signals */}
                <div className="mt-6 rounded-xl border border-white/10 bg-bg-base/40 p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
                    Why Infizia
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {TRUST_SIGNALS.map((t) => {
                      const Icon = t.icon;
                      return (
                        <li
                          key={t.label}
                          className="flex items-start gap-2 text-sm leading-relaxed text-text-secondary"
                        >
                          <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-blue" />
                          <span>{t.label}</span>
                        </li>
                      );
                    })}
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
