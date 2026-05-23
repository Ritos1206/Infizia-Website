"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Server, Boxes, Zap, BrainCircuit } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, revealItem } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";

const STACK = [
  {
    layer: "L1 · Operating System",
    name: "Red Hat Enterprise Linux",
    short: "RHEL",
    href: "/red-hat/rhel",
    Icon: Server,
    bullets: [
      "Migration from CentOS / Oracle Linux / SLES / AIX",
      "CIS, STIG, PCI-DSS hardening with OpenSCAP",
      "Patch lifecycle with Satellite + canary rollouts",
    ],
  },
  {
    layer: "L2 · Containers",
    name: "OpenShift Container Platform",
    short: "OpenShift",
    href: "/red-hat/openshift",
    Icon: Boxes,
    bullets: [
      "Cluster design across bare metal, VMware, and cloud",
      "DevSecOps with Tekton, ArgoCD, Quay & ACS",
      "Day-2 operations, upgrades, and capacity planning",
    ],
  },
  {
    layer: "L3 · Automation",
    name: "Ansible Automation Platform",
    short: "Ansible",
    href: "/red-hat/ansible",
    Icon: Zap,
    bullets: [
      "AAP deployment with HA, RBAC, and ITSM integration",
      "Playbooks for OS, security, network, and cloud",
      "Event-Driven Ansible for autonomous remediation",
    ],
  },
  {
    layer: "L4 · AI Platform",
    name: "Red Hat AI / OpenShift AI",
    short: "OpenShift AI",
    href: "/red-hat/openshift-ai",
    Icon: BrainCircuit,
    bullets: [
      "GPU-ready clusters with NVIDIA Operator",
      "LLM fine-tuning with InstructLab on Granite, Llama, Mistral",
      "MLOps pipelines with MLflow + KServe + GitOps",
    ],
  },
];

export function RedHatSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Tinted backdrop */}
      <div className="absolute inset-0 -z-10 bg-bg-surface" />
      <div className="absolute inset-0 -z-10 bg-grid-fine opacity-40" />
      <div className="absolute -top-40 left-1/2 -z-10 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-redhat/[0.08] blur-[140px]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-redhat/40 to-transparent" />

      <Container>
        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-redhat" />
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white">
                  Red Hat Stack Implementation
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-[3.5rem]">
                The full Red Hat stack.
                <br />
                <span className="text-text-muted">
                  Implemented end to end.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-2xl text-base text-text-muted">
                From Linux standardization to production OpenShift AI — we
                design, deploy, and operate every layer of the Red Hat
                portfolio. Assessment, implementation, managed services, and
                training under one accountable engineering team.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-4 md:justify-self-end">
            <Reveal delay={0.15}>
              <ButtonLink href="/red-hat" variant="outline" size="lg">
                Explore Red Hat Practice
                <ArrowUpRight className="h-4 w-4" />
              </ButtonLink>
            </Reveal>
          </div>
        </div>

        {/* Stacked layer cards */}
        <RevealGroup
          stagger={0.08}
          className="mt-14 grid grid-cols-1 gap-3 md:gap-4"
        >
          {STACK.map((s, i) => {
            const Icon = s.Icon;
            return (
              <motion.div key={s.short} variants={revealItem}>
                <Link
                  href={s.href}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-bg-base/60 p-6 transition-all hover:border-redhat/40 hover:bg-bg-base md:flex-row md:items-center md:gap-8 md:p-8"
                  style={{
                    // Slight horizontal stagger to suggest a "stack"
                    marginLeft: `${i * 4}px`,
                    marginRight: `${(STACK.length - 1 - i) * 4}px`,
                  }}
                >
                  {/* Layer label + icon */}
                  <div className="flex items-start gap-4 md:w-72 md:shrink-0">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-redhat/30 bg-redhat/10 text-redhat">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-text-faint">
                        {s.layer}
                      </p>
                      <p className="mt-1 font-display text-lg font-semibold text-white">
                        {s.short}
                      </p>
                      <p className="text-xs text-text-muted">{s.name}</p>
                    </div>
                  </div>

                  {/* Bullets */}
                  <div className="mt-4 flex-1 md:mt-0">
                    <ul className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4">
                      {s.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-redhat/80" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Arrow */}
                  <ArrowUpRight className="hidden h-5 w-5 shrink-0 text-text-faint transition-all group-hover:text-redhat group-hover:translate-x-0.5 group-hover:-translate-y-0.5 md:block" />

                  {/* Hover glow */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-redhat/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </motion.div>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
