"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { redHatOverviewContent } from "@/content/red-hat/overview";

/**
 * /red-hat — Stack Constellation hero.
 *
 * Idiom: full-width radial composition. Centre carries the Red Hat
 * fedora icon inside a glowing core. Six pillar cards (RHEL,
 * OpenShift, Ansible, OpenShift AI, Managed Services, Training) sit
 * at fixed clock positions around the core. An OUTER dashed ring
 * rotates slowly anti-clockwise, carrying 4 engagement-model labels
 * (Assessment · Implementation · Managed · Training).
 *
 * Motion:
 *   • centre fedora pulses softly (4s loop)
 *   • outer engagement ring rotates 360° in 60s
 *   • connector lines from centre to each pillar fade in staggered
 *   • each pillar floats in from its position on viewport-enter
 *   • hover on a pillar brightens its connector line
 *
 * Distinct from MeetrixMeetingHub (one-input → six-outputs spoke
 * with 3-left/centre/3-right grid layout) — this is a true 360°
 * radial composition with rotating outer ring + 4 engagement labels
 * (a different mode of orbit-based hero).
 *
 * Responsive:
 *   • lg+ : full radial canvas with absolute-positioned pillar cards
 *   • <lg : collapses to a 2-col grid of pillar cards with the centre
 *           shown above as a small banner — keeps the constellation
 *           narrative even on small screens.
 */
export function StackConstellation() {
  const pillars = redHatOverviewContent.pillars;
  const engagementModels = redHatOverviewContent.engagement.items;

  // 6 angle positions for the desktop radial layout (degrees, 0 = top, clockwise).
  const ANGLES = [-90, -30, 30, 90, 150, 210]; // top, t-r, b-r, bottom, b-l, t-l

  return (
    <div className="relative">
      {/* Ambient redhat glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-12 rounded-[3rem] bg-redhat/[0.08] blur-3xl"
      />

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-bg-elevated to-bg-surface p-6 shadow-card md:p-8 lg:p-10">
        {/* Chrome */}
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-redhat shadow-[0_0_8px_rgba(238,0,0,0.7)] animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary">
              The full Red Hat stack · live constellation
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
            6 pillars · 4 engagement models
          </span>
        </div>

        {/* ─── Desktop radial constellation (lg+) ──────────────────── */}
        <div className="relative mt-6 hidden lg:block">
          <div className="relative mx-auto aspect-square max-w-[720px]">
            {/* Outer rotating dashed ring with 4 engagement labels */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0 rounded-full border border-dashed border-redhat/30" />
              {/* 4 engagement model labels at 0/90/180/270 */}
              {engagementModels.map((m, i) => {
                const angle = i * 90 - 90; // start at top
                const rad = (angle * Math.PI) / 180;
                const r = 50; // % from center
                const x = 50 + r * Math.cos(rad);
                const y = 50 + r * Math.sin(rad);
                return (
                  <motion.div
                    key={m.label}
                    animate={{ rotate: 360 }} // counter-rotate so text stays upright
                    transition={{
                      duration: 60,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      position: "absolute",
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className="rounded-full border border-redhat/30 bg-bg-elevated/80 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-redhat backdrop-blur whitespace-nowrap">
                      {m.label.split(" ")[0]}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Inner static dashed ring */}
            <div className="absolute inset-[18%] rounded-full border border-dashed border-white/10" />

            {/* Connector lines from centre to each pillar (SVG) */}
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="none"
              aria-hidden
            >
              {ANGLES.map((angle, i) => {
                const rad = (angle * Math.PI) / 180;
                const r = 32; // pillar position radius (% from centre)
                const x2 = 50 + r * Math.cos(rad);
                const y2 = 50 + r * Math.sin(rad);
                return (
                  <motion.line
                    key={i}
                    x1="50"
                    y1="50"
                    x2={x2}
                    y2={y2}
                    stroke="#EE0000"
                    strokeOpacity="0.25"
                    strokeWidth="0.2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: 0.3 + i * 0.1,
                      ease: "easeOut",
                    }}
                  />
                );
              })}
            </svg>

            {/* Centre core — Red Hat fedora */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="relative h-32 w-32">
                <div className="absolute inset-0 animate-pulse rounded-full bg-redhat/20 blur-2xl" />
                <div className="relative flex h-full w-full items-center justify-center rounded-full border border-redhat/40 bg-gradient-to-br from-redhat/25 to-redhat/5 shadow-[0_0_60px_-10px_rgba(238,0,0,0.6)]">
                  <Image
                    src="/redhat-icon.png"
                    alt="Red Hat"
                    width={64}
                    height={64}
                    className="h-16 w-16 object-contain"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-redhat/30 bg-bg-elevated px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-redhat">
                  Stack core
                </div>
              </div>
            </motion.div>

            {/* 6 pillar portal cards at radial positions */}
            {pillars.map((p, i) => {
              const angle = ANGLES[i];
              const rad = (angle * Math.PI) / 180;
              const r = 38; // % from centre
              const x = 50 + r * Math.cos(rad);
              const y = 50 + r * Math.sin(rad);
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.slug}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    position: "absolute",
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  className="w-[180px]"
                >
                  <Link
                    href={`/red-hat/${p.slug}`}
                    className="group block rounded-2xl border border-white/10 bg-bg-elevated/95 p-3.5 backdrop-blur transition-all hover:-translate-y-1 hover:border-redhat/40 hover:bg-bg-elevated hover:shadow-[0_0_30px_-8px_rgba(238,0,0,0.5)]"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-redhat/30 bg-redhat/10 text-redhat">
                        <Icon className="h-4 w-4" strokeWidth={1.7} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-display text-sm font-semibold text-white">
                          {p.label}
                        </p>
                        <p className="text-[10px] text-text-faint">{p.buyer}</p>
                      </div>
                      <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-text-faint transition-all group-hover:text-redhat group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ─── Mobile / tablet stacked layout (<lg) ────────────────── */}
        <div className="mt-6 lg:hidden">
          {/* Compact centre banner */}
          <div className="mb-5 flex items-center gap-3 rounded-2xl border border-redhat/30 bg-redhat/[0.08] p-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-redhat/40 bg-gradient-to-br from-redhat/25 to-redhat/5">
              <Image
                src="/redhat-icon.png"
                alt="Red Hat"
                width={32}
                height={32}
                className="h-7 w-7 object-contain"
              />
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-redhat">
                Stack core
              </p>
              <p className="font-display text-sm font-semibold text-white">
                Six pillars · One trusted partner
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <Link
                  key={p.slug}
                  href={`/red-hat/${p.slug}`}
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-bg-elevated p-3.5 transition-all hover:border-redhat/40"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-redhat/30 bg-redhat/10 text-redhat">
                    <Icon className="h-4 w-4" strokeWidth={1.7} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-sm font-semibold text-white">
                      {p.label}
                    </p>
                    <p className="line-clamp-1 text-[11px] text-text-faint">
                      {p.buyer}
                    </p>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-text-faint transition-all group-hover:text-redhat" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Footer ribbon */}
        <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-white/5 pt-4 text-[10px] font-mono uppercase tracking-[0.18em] text-text-faint">
          <span>Assessment</span>
          <span className="h-1 w-1 rounded-full bg-redhat" />
          <span>Implementation</span>
          <span className="h-1 w-1 rounded-full bg-redhat" />
          <span>Managed</span>
          <span className="h-1 w-1 rounded-full bg-redhat" />
          <span>Training</span>
          <span className="ml-auto inline-flex items-center gap-1.5 text-redhat">
            <span className="h-1.5 w-1.5 rounded-full bg-redhat animate-pulse" />
            One accountable team
          </span>
        </div>
      </div>
    </div>
  );
}
