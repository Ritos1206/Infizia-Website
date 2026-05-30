"use client";

import {
  ArrowRight,
  Compass,
  Palette,
  Hammer,
  Rocket,
  Gauge,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

/**
 * /services — Delivery Lifecycle journey strip.
 *
 * Common shape across all 5 service practices: every Infizia
 * engagement runs the same 5 stops — Discover → Design → Build →
 * Ship → Run. The strip shows them as a horizontal flow on lg+ and
 * collapses to a vertical timeline on smaller screens.
 *
 * Each stop carries:
 *   • a stage number (01 / 05 etc.)
 *   • a Lucide icon
 *   • a short label
 *   • a one-line tagline
 *   • 2-3 capability chips
 *
 * Distinct from any per-service ServiceEngagement section — this is
 * the index-level "shared cadence" view that ties the 5 practices
 * together as one delivery model.
 */

type Stage = {
  num: string;
  label: string;
  tagline: string;
  Icon: LucideIcon;
  chips: string[];
};

const STAGES: Stage[] = [
  {
    num: "01",
    label: "Discover",
    tagline: "Map the work, the team, the constraints, the wins.",
    Icon: Compass,
    chips: ["Workshops", "Audit", "ROI lens"],
  },
  {
    num: "02",
    label: "Design",
    tagline: "Architecture, UX, data model, security, observability.",
    Icon: Palette,
    chips: ["Architecture", "UX flows", "Threat model"],
  },
  {
    num: "03",
    label: "Build",
    tagline: "Two-week increments, working software at every demo.",
    Icon: Hammer,
    chips: ["TypeScript", "Tests", "CI/CD"],
  },
  {
    num: "04",
    label: "Ship",
    tagline: "Production rollout, training, and a clean cutover.",
    Icon: Rocket,
    chips: ["Cutover", "Training", "Runbook"],
  },
  {
    num: "05",
    label: "Run",
    tagline: "24×7 ops, performance tuning, and continuous evolution.",
    Icon: Gauge,
    chips: ["SLAs", "Monitoring", "Roadmap"],
  },
];

export function ServicesLifecycle() {
  return (
    <section className="relative border-t border-white/[0.06] py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-text-faint">
            One delivery cadence
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Every practice runs the{" "}
            <span className="text-gradient-brand">same five stops.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-text-muted">
            Whether it&rsquo;s a mobile app, an agentic system, or a Red Hat
            cluster — the shape is the same. Predictable cadence, working
            software every two weeks.
          </p>
        </div>

        {/* Desktop horizontal flow */}
        <div className="relative mt-14 hidden lg:block">
          {/* Connecting line */}
          <div
            aria-hidden
            className="absolute left-[8%] right-[8%] top-12 h-px bg-gradient-to-r from-brand-blue/30 via-brand-violet/30 via-brand-amber/30 via-redhat/30 to-brand-sky/30"
          />

          <div className="grid grid-cols-5 gap-4">
            {STAGES.map((s, i) => {
              const Icon = s.Icon;
              return (
                <Reveal key={s.num} delay={i * 0.08}>
                  <div className="flex flex-col items-center text-center">
                    {/* Number ring + icon */}
                    <div className="relative">
                      <div className="absolute inset-0 -z-10 rounded-full bg-bg-base" />
                      <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full border border-white/15 bg-bg-elevated shadow-[0_8px_28px_-8px_rgba(0,0,0,0.7)]">
                        <Icon
                          className="h-5 w-5 text-brand-teal"
                          strokeWidth={1.6}
                        />
                        <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-text-faint">
                          {s.num}
                        </span>
                      </div>
                    </div>

                    <p className="mt-5 font-display text-base font-semibold tracking-tight text-white">
                      {s.label}
                    </p>
                    <p className="mt-1.5 max-w-[14rem] text-xs leading-relaxed text-text-muted">
                      {s.tagline}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5">
                      {s.chips.map((c) => (
                        <span
                          key={c}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-text-secondary"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-2 lg:hidden">
          {STAGES.map((s) => {
            const Icon = s.Icon;
            return (
              <Reveal key={s.num}>
                <div className="relative flex gap-4 overflow-hidden rounded-2xl border border-white/10 bg-bg-surface p-5 shadow-card">
                  <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl border border-white/15 bg-bg-elevated">
                    <Icon
                      className="h-4 w-4 text-brand-teal"
                      strokeWidth={1.6}
                    />
                    <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-text-faint">
                      {s.num}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-display text-sm font-semibold tracking-tight text-white">
                      {s.label}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-text-muted">
                      {s.tagline}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {s.chips.map((c) => (
                        <span
                          key={c}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-text-secondary"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom legend */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-text-faint">
          <span>Discover</span>
          <ArrowRight className="h-3 w-3" />
          <span>Design</span>
          <ArrowRight className="h-3 w-3" />
          <span>Build</span>
          <ArrowRight className="h-3 w-3" />
          <span>Ship</span>
          <ArrowRight className="h-3 w-3" />
          <span>Run</span>
        </div>
      </div>
    </section>
  );
}
