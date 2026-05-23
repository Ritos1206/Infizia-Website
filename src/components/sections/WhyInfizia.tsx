"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import {
  Brain,
  ShieldCheck,
  Zap,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const PILLARS: {
  icon: LucideIcon;
  title: string;
  body: string;
  accent: string;
}[] = [
  {
    icon: Brain,
    title: "AI-Native, Not AI-Bolted-On",
    body: "Every product is architected around agentic AI from day one — not a chat widget glued onto a legacy CRUD app.",
    accent: "text-brand-teal",
  },
  {
    icon: Workflow,
    title: "Outcome-Driven Engagements",
    body: "We measure success in throughput, accuracy, and revenue per workflow — not story points or hours billed.",
    accent: "text-brand-green",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade by Default",
    body: "Security, governance, audit, and compliance are baked into the architecture, not added later under pressure.",
    accent: "text-brand-blue",
  },
  {
    icon: Zap,
    title: "Premier Red Hat Partner",
    body: "Full-stack expertise across RHEL, OpenShift, Ansible, and OpenShift AI — at production scale, with named engineers.",
    accent: "text-redhat",
  },
];

export function WhyInfizia() {
  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <SectionHeader
          kicker="Why Infizia"
          title="Four reasons enterprises choose us."
          lede="The bar for enterprise AI is not building a demo — it's running it in production for years. We are built for the second part."
          gradient
        />

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-bg-surface p-7 transition-colors hover:border-white/20">
                  <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 ${p.accent}`}>
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-6 font-display text-lg font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
