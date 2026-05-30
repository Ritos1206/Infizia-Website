"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Stethoscope,
  Receipt,
  UserPlus,
  Award,
  Mic,
  MessageCircle,
  GraduationCap,
  School,
  ShoppingBag,
  FileText,
  Brain,
  Factory,
  Newspaper,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { PRODUCTS } from "@/lib/constants";
import { ACCENTS, type ProductAccent } from "@/lib/product-accents";
import { cn } from "@/lib/utils";

/**
 * /products — Product Atlas Hero (the constellation).
 *
 * Idiom: a 14-node radial atlas with the Infizia core at centre and
 * three concentric orbits:
 *   • Inner ring  (3 nodes)  — the three flagships (EyeCON · VitaCare · EyePOS)
 *   • Middle ring (6 nodes)  — people + customer + learning products
 *   • Outer ring  (5 nodes)  — commerce + finance + insight + ops + media
 *
 * Motion:
 *   • The Infizia core pulses softly (4s loop) with a brand-gradient halo
 *   • Three dashed orbit rings rotate at different speeds
 *     (inner anti-clockwise 80s · middle clockwise 120s · outer anti-clockwise
 *     160s) — counter-rotation keeps the system visually alive without
 *     making the labels spin
 *   • Each node tile is wrapped in a counter-rotating wrapper so labels
 *     stay upright while their orbit ring slowly turns
 *   • A traveling pulse-dot rides along each orbit on a stagger, hinting
 *     at "the cognitive stack is alive"
 *
 * Distinct from any prior bespoke hero in the project — this is a true
 * three-ring counter-rotating ecosystem map. Other constellations on the
 * site (StackConstellation for Red Hat, InsightConstellation for
 * Intelligence solution) use a single ring or a star-chart layout.
 *
 * Responsive:
 *   • lg+ — full radial canvas at 720px square, all 14 nodes visible
 *   • md  — radial at 600px square with smaller node tiles
 *   • <md — collapses to vertical "Inner / Middle / Outer ring" stacked
 *           rows, each ring shown as a horizontal scroll-strip of chips
 */

// Slug → Lucide icon mapping. Drives the centre glyph on each node.
const NODE_ICONS: Record<string, LucideIcon> = {
  eyecon: TrendingUp,
  vitacare: Stethoscope,
  eyepos: Receipt,
  convenor: UserPlus,
  performix: Award,
  meetrix: Mic,
  intellix: MessageCircle,
  learnova: GraduationCap,
  lms: School,
  ecommerce: ShoppingBag,
  documind: FileText,
  infera: Brain,
  opssight: Factory,
  enews: Newspaper,
};

type RingNode = {
  slug: string;
  /** Angle in degrees, 0 = right, 90 = bottom (SVG convention). */
  angle: number;
};

// Inner ring — 3 flagships at 120° spacing, starting at top.
const INNER: RingNode[] = [
  { slug: "vitacare", angle: -90 },
  { slug: "eyepos", angle: 30 },
  { slug: "eyecon", angle: 150 },
];

// Middle ring — 6 nodes at 60° spacing, offset 30° from inner.
const MIDDLE: RingNode[] = [
  { slug: "convenor", angle: -60 },
  { slug: "intellix", angle: 0 },
  { slug: "performix", angle: 60 },
  { slug: "learnova", angle: 120 },
  { slug: "meetrix", angle: 180 },
  { slug: "lms", angle: 240 },
];

// Outer ring — 5 nodes at 72° spacing, offset 36° from middle.
const OUTER: RingNode[] = [
  { slug: "ecommerce", angle: -90 },
  { slug: "documind", angle: -18 },
  { slug: "infera", angle: 54 },
  { slug: "opssight", angle: 126 },
  { slug: "enews", angle: 198 },
];

// % of canvas radius — measured from centre.
const INNER_RADIUS = 22;
const MIDDLE_RADIUS = 36;
const OUTER_RADIUS = 48;

/** Helper — convert polar (deg, %) to absolute left/top % for a 100x100 box. */
function polar(angle: number, radiusPct: number) {
  const rad = (angle * Math.PI) / 180;
  return {
    left: 50 + Math.cos(rad) * radiusPct,
    top: 50 + Math.sin(rad) * radiusPct,
  };
}

function NodeTile({
  slug,
  size = "md",
}: {
  slug: string;
  size?: "sm" | "md" | "lg";
}) {
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return null;
  const Icon = NODE_ICONS[slug] ?? Sparkles;

  const accent = (
    {
      eyecon: "teal",
      vitacare: "green",
      eyepos: "blue",
      convenor: "indigo",
      performix: "amber",
      meetrix: "violet",
      intellix: "rose",
      learnova: "fuchsia",
      lms: "orange",
      ecommerce: "lime",
      documind: "sky",
      infera: "cyan",
      opssight: "emerald",
      enews: "purple",
    } as Record<string, ProductAccent>
  )[slug];

  const a = ACCENTS[accent];

  const sizes = {
    sm: { box: "h-12 w-12", icon: "h-4 w-4", label: "text-[9px]" },
    md: { box: "h-14 w-14", icon: "h-5 w-5", label: "text-[10px]" },
    lg: { box: "h-16 w-16", icon: "h-6 w-6", label: "text-[11px]" },
  };
  const s = sizes[size];

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative flex flex-col items-center gap-1.5 focus-visible:outline-none"
    >
      <div
        className={cn(
          "relative flex items-center justify-center rounded-2xl border bg-bg-elevated/80 backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_8px_28px_-8px_rgba(0,0,0,0.6)] group-focus-visible:ring-2 group-focus-visible:ring-white/40 group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-bg-base",
          s.box,
          a.border,
          a.bgSoft,
          a.text,
          a.hoverBorder,
        )}
      >
        {product.flagship && (
          <span className="absolute -top-1.5 -right-1.5 inline-flex h-4 items-center rounded-full border border-white/20 bg-bg-base/95 px-1.5 font-mono text-[7px] uppercase tracking-[0.14em] text-white shadow">
            ★
          </span>
        )}
        <Icon className={s.icon} strokeWidth={1.6} />
      </div>
      <span
        className={cn(
          "block whitespace-nowrap rounded-full border border-white/10 bg-bg-surface/90 px-2 py-0.5 text-center font-mono uppercase tracking-[0.14em] text-text-secondary backdrop-blur-sm transition-colors group-hover:text-white",
          s.label,
        )}
      >
        {product.shortName ?? product.name}
      </span>
    </Link>
  );
}

export function ProductsAtlasHero() {
  return (
    <section className="relative isolate overflow-hidden pt-16 pb-12 md:pt-24 md:pb-16">
      {/* Faint grid + ambient glow blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-grid-fine"
          style={{
            maskImage:
              "radial-gradient(ellipse 60% 60% at 50% 50%, black 30%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 60% at 50% 50%, black 30%, transparent 80%)",
          }}
        />
        <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-brand-teal/[0.08] blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/3 h-96 w-96 rounded-full bg-brand-blue/[0.08] blur-[140px]" />
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-green/[0.05] blur-[100px]" />
      </div>

      <div className="container-page">
        {/* Title block */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="kicker mx-auto">
            <span className="kicker-dot" />
            <span>Product Ecosystem</span>
          </div>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
            Fourteen products,{" "}
            <span className="text-gradient-brand">one cognitive stack.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
            Three flagships orbit a core of eleven specialised products —
            mapped to ten industries, sharing one platform, one identity layer,
            and one memory of every conversation, document, and decision.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs">
            <span className="font-mono uppercase tracking-[0.2em] text-text-faint">
              14 Products · 10 Industries · 1 Stack
            </span>
          </div>
        </div>

        {/* ─── Desktop / tablet radial atlas (md+) ──────────────────── */}
        <div className="relative mx-auto mt-16 hidden md:block">
          <div className="relative mx-auto aspect-square w-full max-w-[720px]">
            {/* Three orbit rings — dashed, counter-rotating */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10"
              style={{
                width: `${INNER_RADIUS * 2}%`,
                height: `${INNER_RADIUS * 2}%`,
              }}
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.07]"
              style={{
                width: `${MIDDLE_RADIUS * 2}%`,
                height: `${MIDDLE_RADIUS * 2}%`,
              }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 160, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.05]"
              style={{
                width: `${OUTER_RADIUS * 2}%`,
                height: `${OUTER_RADIUS * 2}%`,
              }}
            />

            {/* Connector spokes from centre to each node — faint */}
            <svg
              aria-hidden
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <radialGradient id="spoke-fade" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="white" stopOpacity="0.28" />
                  <stop offset="60%" stopColor="white" stopOpacity="0.06" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </radialGradient>
              </defs>
              {[...INNER, ...MIDDLE, ...OUTER].map((n) => {
                const r =
                  INNER.includes(n)
                    ? INNER_RADIUS
                    : MIDDLE.includes(n)
                      ? MIDDLE_RADIUS
                      : OUTER_RADIUS;
                const p = polar(n.angle, r);
                return (
                  <line
                    key={n.slug}
                    x1="50"
                    y1="50"
                    x2={p.left}
                    y2={p.top}
                    stroke="url(#spoke-fade)"
                    strokeWidth="0.15"
                    vectorEffect="non-scaling-stroke"
                  />
                );
              })}
            </svg>

            {/* Centre core — Infizia stack glyph */}
            <motion.div
              animate={{ scale: [1, 1.04, 1], opacity: [0.95, 1, 0.95] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="relative">
                <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-brand-green/30 via-brand-teal/20 to-brand-blue/30 blur-2xl" />
                <div className="relative flex h-28 w-28 flex-col items-center justify-center rounded-full border border-white/15 bg-bg-elevated text-center shadow-[0_0_40px_-8px_rgba(94,234,212,0.4)]">
                  <Sparkles className="h-5 w-5 text-brand-teal" strokeWidth={1.6} />
                  <span className="mt-1 font-display text-xs font-semibold tracking-tight text-white">
                    Infizia
                  </span>
                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-text-faint">
                    Stack core
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Inner ring nodes — static (rings spin decoratively, nodes stay upright) */}
            <div className="absolute inset-0">
              {INNER.map((n) => {
                const p = polar(n.angle, INNER_RADIUS);
                return (
                  <div
                    key={n.slug}
                    className="absolute"
                    style={{
                      left: `${p.left}%`,
                      top: `${p.top}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <NodeTile slug={n.slug} size="lg" />
                  </div>
                );
              })}
            </div>

            {/* Middle ring nodes */}
            <div className="absolute inset-0">
              {MIDDLE.map((n) => {
                const p = polar(n.angle, MIDDLE_RADIUS);
                return (
                  <div
                    key={n.slug}
                    className="absolute"
                    style={{
                      left: `${p.left}%`,
                      top: `${p.top}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <NodeTile slug={n.slug} size="md" />
                  </div>
                );
              })}
            </div>

            {/* Outer ring nodes */}
            <div className="absolute inset-0">
              {OUTER.map((n) => {
                const p = polar(n.angle, OUTER_RADIUS);
                return (
                  <div
                    key={n.slug}
                    className="absolute"
                    style={{
                      left: `${p.left}%`,
                      top: `${p.top}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <NodeTile slug={n.slug} size="md" />
                  </div>
                );
              })}
            </div>

            {/* Traveling pulse-dot riding each orbit */}
            {[
              { r: INNER_RADIUS, dur: 14, color: "bg-brand-teal" },
              { r: MIDDLE_RADIUS, dur: 22, color: "bg-brand-violet" },
              { r: OUTER_RADIUS, dur: 30, color: "bg-brand-cyan" },
            ].map((ring, i) => (
              <motion.div
                key={ring.r}
                aria-hidden
                animate={{ rotate: 360 }}
                transition={{
                  duration: ring.dur,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.6,
                }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: `${ring.r * 2}%`,
                  height: `${ring.r * 2}%`,
                }}
              >
                <div
                  className={cn(
                    "absolute h-2 w-2 rounded-full shadow-[0_0_12px_rgba(255,255,255,0.5)]",
                    ring.color,
                  )}
                  style={{
                    top: "50%",
                    left: "100%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Legend strip */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.2em] text-text-faint">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-teal shadow-[0_0_8px_rgba(94,234,212,0.7)]" />
              Inner ring · Flagships
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-violet shadow-[0_0_8px_rgba(167,139,250,0.7)]" />
              Middle · People & Learning
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-cyan shadow-[0_0_8px_rgba(34,211,238,0.7)]" />
              Outer · Commerce & Insight
            </span>
          </div>
        </div>

        {/* ─── Mobile compact stack (<md) — vertical ring strips ──────── */}
        <div className="mt-12 md:hidden">
          {/* Centre core banner */}
          <div className="relative mx-auto flex h-24 w-full max-w-sm items-center justify-center rounded-2xl border border-white/10 bg-bg-elevated shadow-[0_0_30px_-12px_rgba(94,234,212,0.4)]">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-green/15 via-brand-teal/10 to-brand-blue/15" />
            <div className="relative flex flex-col items-center gap-1">
              <Sparkles
                className="h-5 w-5 text-brand-teal"
                strokeWidth={1.6}
              />
              <span className="font-display text-sm font-semibold text-white">
                Infizia · Stack core
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-text-faint">
                14 products · 10 industries
              </span>
            </div>
          </div>

          {/* 3 ring strips */}
          {[
            { label: "Flagships", nodes: INNER, dot: "bg-brand-teal" },
            { label: "People & Learning", nodes: MIDDLE, dot: "bg-brand-violet" },
            { label: "Commerce & Insight", nodes: OUTER, dot: "bg-brand-cyan" },
          ].map((ring) => (
            <div key={ring.label} className="mt-6">
              <div className="mb-3 flex items-center gap-2">
                <span className={cn("h-2 w-2 rounded-full", ring.dot)} />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary">
                  {ring.label}
                </span>
              </div>
              <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {ring.nodes.map((n) => (
                  <div key={n.slug} className="shrink-0">
                    <NodeTile slug={n.slug} size="md" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
