"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  BrainCircuit,
  Coins,
  Server,
  Cloud,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { ACCENTS } from "@/lib/product-accents";
import { cn } from "@/lib/utils";

/**
 * /services — Practice Arena Hero.
 *
 * Idiom: 5 service tiles laid out as a "practice arena", each tile
 * carrying its own bespoke micro-animation that hints at what the
 * practice actually does:
 *
 *   1. Web & App Development (blue) — MultiDeviceDance
 *      A 2×2 grid of device frames (desktop · tablet · phone · kiosk)
 *      each with a content bar that fills sequentially (staggered
 *      stagger) suggesting "in sync across surfaces"
 *
 *   2. Agentic AI (violet) — AgentTriangle
 *      A small triangular Perceive → Reason → Act loop with a
 *      traveling pulse-dot riding the perimeter
 *
 *   3. Blockchain (amber) — ChainGrowth
 *      Four blocks chained horizontally, each with a hash strip; the
 *      newest block has an animated mining ring + fill pulse
 *
 *   4. Red Hat Stack (redhat) — PortalPillar
 *      Four stacked layer cards (RHEL · OpenShift · Ansible · OpenShift AI)
 *      with a redhat-tinted "Visit practice →" portal indicator
 *      overlay — distinct from the others because this card redirects
 *      to /red-hat instead of having its own service page
 *
 *   5. Google Cloud (sky) — RegionPulse
 *      Three region pins on a horizontal axis (asia-south1 · us-central1
 *      · europe-west1) with traffic pulse arcs between them and a
 *      "primary" tag on the centre region
 *
 * Each tile is a clickable Link, follows the D-57 standard, and uses
 * its service's accent for the icon block, top hairline, and hover
 * border tint. Red Hat tile uses the redhat token as its accent
 * (allowed because this card is the entry-point to /red-hat — per
 * D-04, brand-redhat is allowed in the Red Hat practice link).
 *
 * Layout:
 *   • lg+ : asymmetric 3+2 grid (Web/App + Agentic AI + Blockchain
 *           in row 1; Red Hat + Google Cloud spanning row 2)
 *   • md  : 2 cols
 *   • <md : single col stack
 */

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "web-app-development": Code2,
  "ai-agentic-systems": BrainCircuit,
  blockchain: Coins,
  "redhat-stack": Server,
  "google-cloud": Cloud,
};

/* ──────────────────── Micro-animations ──────────────────────────── */

function MultiDeviceDance() {
  // Horizontal lineup of 4 device silhouettes at uniform height.
  // Earlier rev used a 2×2 grid with mixed aspect ratios (16:10, 5:4,
  // 9:16, 5:3) which made the 9:16 mobile tile vertically overflow
  // the container and bleed into the header text below. This rev
  // pins each device to a fixed h-full container and uses width
  // proportions to vary the device shape.
  const devices = [
    { width: "w-[24%]", label: "Web", delay: 0 },
    { width: "w-[20%]", label: "Tablet", delay: 0.4 },
    { width: "w-[10%]", label: "Phone", delay: 0.8 },
    { width: "w-[28%]", label: "Kiosk", delay: 1.2 },
  ];
  return (
    <div className="flex h-full items-end gap-2">
      {devices.map((d) => (
        <div
          key={d.label}
          className={cn(
            "relative flex h-[78%] flex-col overflow-hidden rounded-md border border-brand-blue/30 bg-bg-base/60 p-1.5",
            d.width,
          )}
        >
          {/* Title bar dots */}
          <div className="flex items-center gap-0.5">
            <span className="h-1 w-1 rounded-full bg-brand-rose/60" />
            <span className="h-1 w-1 rounded-full bg-brand-amber/60" />
            <span className="h-1 w-1 rounded-full bg-brand-green/60" />
          </div>
          {/* Content bars */}
          <div className="mt-1.5 flex-1 space-y-0.5">
            <div className="h-0.5 w-3/4 rounded-full bg-white/15" />
            <div className="h-0.5 w-1/2 rounded-full bg-white/10" />
            <div className="h-0.5 w-2/3 rounded-full bg-white/10" />
          </div>
          {/* Animated fill bar across bottom */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 1.4,
              delay: d.delay,
              repeat: Infinity,
              repeatDelay: 2.4,
              ease: "easeInOut",
            }}
            className="absolute bottom-0 left-0 h-0.5 bg-brand-blue/70"
          />
          <span className="mt-1 font-mono text-[6px] uppercase tracking-wider text-text-faint">
            {d.label}
          </span>
        </div>
      ))}
      {/* "In sync" pill on the right */}
      <div className="ml-auto flex items-center gap-1 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-2 py-0.5">
        <motion.span
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="h-1 w-1 rounded-full bg-brand-blue"
        />
        <span className="font-mono text-[7px] uppercase tracking-wider text-brand-blue">
          In sync
        </span>
      </div>
    </div>
  );
}

function AgentTriangle() {
  // 3 nodes at triangle vertices + traveling pulse on perimeter.
  return (
    <div className="relative h-32">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 80"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Triangle outline */}
        <polygon
          points="50,8 92,68 8,68"
          fill="none"
          stroke="rgb(167 139 250 / 0.4)"
          strokeWidth="0.5"
          strokeDasharray="2 2"
          vectorEffect="non-scaling-stroke"
        />
        {/* Traveling pulse-dot — ride a path along perimeter */}
        <motion.circle
          r="1.4"
          fill="rgb(167 139 250)"
          initial={{ offsetDistance: "0%" }}
          animate={{ offsetDistance: "100%" }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            offsetPath: "path('M 50 8 L 92 68 L 8 68 Z')",
            offsetRotate: "0deg",
          }}
        />
      </svg>
      {/* Node labels positioned absolutely */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1 rounded-md border border-brand-violet/40 bg-bg-base/80 px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.16em] text-brand-violet backdrop-blur-sm">
        Perceive
      </div>
      <div className="absolute right-0 bottom-0 translate-x-1 translate-y-1 rounded-md border border-brand-violet/40 bg-bg-base/80 px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.16em] text-brand-violet backdrop-blur-sm">
        Reason
      </div>
      <div className="absolute left-0 bottom-0 -translate-x-1 translate-y-1 rounded-md border border-brand-violet/40 bg-bg-base/80 px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.16em] text-brand-violet backdrop-blur-sm">
        Act
      </div>
    </div>
  );
}

function ChainGrowth() {
  return (
    <div className="flex items-center gap-1.5">
      {[0, 1, 2, 3].map((i) => {
        const isLast = i === 3;
        return (
          <div key={i} className="flex flex-1 items-center gap-1.5">
            <div
              className={cn(
                "relative flex flex-1 flex-col gap-0.5 rounded border bg-bg-base/60 p-1.5",
                isLast
                  ? "border-brand-amber"
                  : "border-brand-amber/30",
              )}
            >
              <span className="font-mono text-[6px] uppercase tracking-wider text-brand-amber">
                #{i + 1}
              </span>
              <div className="h-0.5 w-3/4 rounded-full bg-white/20" />
              <div className="h-0.5 w-1/2 rounded-full bg-white/15" />
              {isLast && (
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                  className="absolute -inset-px rounded border border-brand-amber"
                />
              )}
            </div>
            {!isLast && (
              <span className="font-mono text-[8px] text-brand-amber/60">
                ─
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

function PortalPillar() {
  const layers = ["RHEL", "OpenShift", "Ansible", "OpenShift AI"];
  return (
    <div className="space-y-1">
      {layers.map((l, i) => (
        <motion.div
          key={l}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="flex items-center justify-between rounded border border-redhat/30 bg-redhat/[0.06] px-2 py-1"
        >
          <span className="font-mono text-[8px] uppercase tracking-wider text-white">
            {l}
          </span>
          <span className="h-1 w-1 rounded-full bg-redhat shadow-[0_0_6px_rgba(238,0,0,0.7)]" />
        </motion.div>
      ))}
      {/* Visit-practice portal indicator */}
      <div className="mt-2 flex items-center justify-between rounded-full border border-redhat/40 bg-redhat/[0.08] px-2 py-1">
        <span className="font-mono text-[8px] uppercase tracking-wider text-redhat">
          ● Visit practice
        </span>
        <ArrowUpRight className="h-3 w-3 text-redhat" />
      </div>
    </div>
  );
}

function RegionPulse() {
  return (
    <div className="relative h-24">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 50"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Horizontal axis */}
        <line
          x1="10"
          y1="25"
          x2="90"
          y2="25"
          stroke="rgb(56 189 248 / 0.2)"
          strokeWidth="0.4"
          strokeDasharray="2 2"
          vectorEffect="non-scaling-stroke"
        />
        {/* Three pins */}
        {[
          { x: 20, label: "asia-south1" },
          { x: 50, label: "us-central1", primary: true },
          { x: 80, label: "europe-west1" },
        ].map((p) => (
          <g key={p.label}>
            <circle
              cx={p.x}
              cy="25"
              r={p.primary ? 3 : 2.2}
              fill={p.primary ? "rgb(56 189 248)" : "rgb(56 189 248 / 0.6)"}
            />
            {p.primary && (
              <motion.circle
                cx={p.x}
                cy="25"
                r={3}
                fill="none"
                stroke="rgb(56 189 248)"
                strokeWidth="0.4"
                vectorEffect="non-scaling-stroke"
                animate={{ r: [3, 6], opacity: [1, 0] }}
                transition={{ duration: 1.6, repeat: Infinity }}
              />
            )}
          </g>
        ))}
        {/* Traffic pulses traveling between regions */}
        <motion.circle
          r="0.8"
          fill="rgb(56 189 248)"
          initial={{ cx: 20, cy: 25 }}
          animate={{ cx: 50, cy: 25 }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          r="0.8"
          fill="rgb(56 189 248)"
          initial={{ cx: 50, cy: 25 }}
          animate={{ cx: 80, cy: 25 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </svg>
      {/* Region labels under pins */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between px-1">
        {["asia-south1", "us-central1", "europe-west1"].map((l) => (
          <span
            key={l}
            className="font-mono text-[7px] uppercase tracking-wider text-text-faint"
          >
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}

function VisualFor({ slug }: { slug: string }) {
  if (slug === "web-app-development") return <MultiDeviceDance />;
  if (slug === "ai-agentic-systems") return <AgentTriangle />;
  if (slug === "blockchain") return <ChainGrowth />;
  if (slug === "redhat-stack") return <PortalPillar />;
  if (slug === "google-cloud") return <RegionPulse />;
  return null;
}

/* ──────────────────── Hero composition ──────────────────────────── */

export function ServicesArena() {
  return (
    <section className="relative isolate overflow-hidden pt-16 pb-12 md:pt-24 md:pb-16">
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-grid-fine"
          style={{
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)",
          }}
        />
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-brand-blue/[0.08] blur-[140px]" />
        <div className="absolute right-1/3 bottom-1/4 h-80 w-80 rounded-full bg-brand-violet/[0.08] blur-[140px]" />
        <div className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-brand-amber/[0.06] blur-[140px]" />
      </div>

      <div className="container-page">
        {/* Title block */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="kicker mx-auto">
            <span className="kicker-dot" />
            <span>Engineering Services</span>
          </div>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
            Five practices,{" "}
            <span className="text-gradient-brand">one partner.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
            Web and mobile platforms, production-grade agentic AI, blockchain,
            the full Red Hat stack, and Google Cloud — designed, built, and
            run by one team.
          </p>
        </div>

        {/* Arena grid */}
        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
          {SERVICES.map((s, idx) => {
            const Icon = SERVICE_ICONS[s.slug] ?? Code2;
            const isRedirect = !!s.redirectsTo;
            const accent = s.accent;
            const a = accent ? ACCENTS[accent] : null;
            const href = s.redirectsTo ?? `/services/${s.slug}`;

            // Asymmetric grid for desktop: row 1 has Web (3 cols) +
            // Agentic AI (3 cols); row 2 has Blockchain (2) + Red Hat (2)
            // + Google Cloud (2).
            const colSpan =
              s.slug === "web-app-development" || s.slug === "ai-agentic-systems"
                ? "lg:col-span-3"
                : "lg:col-span-2";

            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={colSpan}
              >
                <Link
                  href={href}
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-bg-surface p-6 shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-bg-elevated hover:shadow-[0_18px_40px_-16px_rgba(0,0,0,0.6)] active:translate-y-0 active:scale-[0.995] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base md:p-7",
                    a ? a.hoverBorder : "hover:border-redhat/40",
                  )}
                >
                  <span
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r opacity-50 transition-opacity duration-300 group-hover:opacity-100",
                      a
                        ? a.topLine
                        : "from-redhat/60 via-redhat/0 to-redhat/0",
                    )}
                  />
                  <div
                    className={cn(
                      "pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-70",
                      a ? a.glow : "bg-redhat/[0.08]",
                    )}
                  />

                  {/* Bespoke micro-animation */}
                  <div className="relative h-32 rounded-xl border border-white/[0.06] bg-bg-base/40 p-3 md:h-36">
                    <VisualFor slug={s.slug} />
                  </div>

                  {/* Header */}
                  <div className="relative mt-5 flex items-start justify-between gap-3">
                    <div
                      className={cn(
                        "flex h-11 w-11 items-center justify-center rounded-xl border",
                        a
                          ? cn(a.border, a.bgSoft, a.text)
                          : "border-redhat/30 bg-redhat/10 text-redhat",
                      )}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </div>
                    {isRedirect ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-redhat/30 bg-redhat/[0.08] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-redhat">
                        <span className="h-1 w-1 rounded-full bg-redhat" />
                        Cross-section
                      </span>
                    ) : (
                      <ArrowUpRight className="h-5 w-5 text-text-faint transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    )}
                  </div>

                  <p
                    className={cn(
                      "relative mt-4 font-mono text-[10px] uppercase tracking-[0.22em]",
                      a ? a.text : "text-redhat",
                    )}
                  >
                    Practice · {String(idx + 1).padStart(2, "0")} / 5
                  </p>
                  <h3 className="relative mt-2 font-display text-xl font-semibold tracking-tight text-white md:text-2xl">
                    {s.name}
                  </h3>
                  <p className="relative mt-2 flex-1 text-sm leading-relaxed text-text-muted">
                    {s.blurb}
                  </p>

                  <span
                    className={cn(
                      "relative mt-5 inline-flex items-center gap-1.5 text-sm font-medium",
                      a ? a.text : "text-redhat",
                    )}
                  >
                    {isRedirect ? "Visit Red Hat practice" : `Explore ${s.name}`}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom info strip */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.2em] text-text-faint">
          <span className="inline-flex items-center gap-2">
            <Sparkles className="h-3 w-3 text-brand-teal" />5 practices · 1
            partner
          </span>
          <span>·</span>
          <span>Discovery · Design · Build · Ship · Run</span>
        </div>
      </div>
    </section>
  );
}
