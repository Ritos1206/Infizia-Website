"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Calendar,
  Receipt,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { FLAGSHIP_PRODUCTS } from "@/lib/constants";
import { ACCENTS, type ProductAccent } from "@/lib/product-accents";
import { cn } from "@/lib/utils";

/**
 * /products — Flagship triple spotlight.
 *
 * Three flagship cards (EyeCON · VitaCare · EyePOS) — each with a
 * distinct mini-mockup preview baked into the card chrome:
 *   • EyeCON   → mini phone screen with a Lead record + call chip
 *   • VitaCare → mini calendar grid with a "today" highlight + slot
 *   • EyePOS   → mini POS receipt strip with running total
 *
 * Each card carries its product accent (teal/green/blue), follows the
 * D-57 clickable-card standard (whole card is the link, hover lift,
 * accent border tint, top hairline shimmer, focus ring), and the
 * mini-mockup gets a soft accent glow behind it.
 */

const FLAGSHIP_DETAILS: Record<
  string,
  {
    accent: ProductAccent;
    pillarTagline: string;
    mock: "phone" | "calendar" | "pos";
  }
> = {
  eyecon: {
    accent: "teal",
    pillarTagline: "Sales · Mobile-first sales platform",
    mock: "phone",
  },
  vitacare: {
    accent: "green",
    pillarTagline: "Healthcare · Digital clinic platform",
    mock: "calendar",
  },
  eyepos: {
    accent: "blue",
    pillarTagline: "Finance · Account inventory solution",
    mock: "pos",
  },
};

function PhoneMock() {
  return (
    <div className="relative mx-auto h-44 w-28 rounded-[20px] border border-white/15 bg-bg-base/80 p-1.5 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.7)]">
      <div className="h-full w-full rounded-[14px] bg-gradient-to-b from-bg-elevated to-bg-surface p-2">
        {/* Speaker pill */}
        <div className="mx-auto mb-1.5 h-1 w-7 rounded-full bg-white/15" />
        {/* Lead card */}
        <div className="rounded-md border border-brand-teal/30 bg-brand-teal/[0.08] p-1.5">
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-full bg-brand-teal/40" />
            <span className="font-mono text-[6px] uppercase tracking-wider text-brand-teal">
              Lead
            </span>
          </div>
          <div className="mt-1 h-1 w-3/4 rounded-full bg-white/40" />
          <div className="mt-1 h-1 w-1/2 rounded-full bg-white/20" />
        </div>
        {/* Activity entries */}
        <div className="mt-1.5 space-y-1">
          {["Call · 12m", "Note · 4 lines", "Meeting"].map((t) => (
            <div
              key={t}
              className="rounded-sm border border-white/[0.06] bg-white/[0.03] px-1 py-0.5 font-mono text-[5.5px] uppercase tracking-wide text-text-secondary"
            >
              {t}
            </div>
          ))}
        </div>
        {/* Live call pulse */}
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="mt-1.5 flex items-center justify-between rounded-md border border-brand-teal/40 bg-brand-teal/15 px-1.5 py-1"
        >
          <span className="font-mono text-[6px] uppercase tracking-wider text-brand-teal">
            ● Live call
          </span>
          <span className="font-mono text-[6px] text-white">02:14</span>
        </motion.div>
      </div>
    </div>
  );
}

function CalendarMock() {
  // 7 weekdays × 4 weeks
  const cells = Array.from({ length: 28 }, (_, i) => i);
  const todayIdx = 12; // pick a day
  return (
    <div className="relative mx-auto w-44 rounded-xl border border-white/15 bg-bg-base/80 p-3 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.7)]">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-brand-green">
          June · 2026
        </span>
        <span className="font-mono text-[8px] text-text-faint">9 / 28</span>
      </div>
      <div className="mt-2 grid grid-cols-7 gap-0.5">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <span
            key={i}
            className="text-center font-mono text-[7px] text-text-faint"
          >
            {d}
          </span>
        ))}
        {cells.map((i) => {
          const isToday = i === todayIdx;
          const isBooked = [3, 7, 11, 18, 22].includes(i);
          const isFull = [9, 14].includes(i);
          return (
            <div
              key={i}
              className={cn(
                "aspect-square rounded-[3px] border text-center font-mono text-[6.5px] leading-[14px]",
                isToday
                  ? "border-brand-green bg-brand-green text-bg-base"
                  : isFull
                    ? "border-brand-rose/40 bg-brand-rose/10 text-text-faint"
                    : isBooked
                      ? "border-brand-green/40 bg-brand-green/10 text-brand-green"
                      : "border-white/[0.05] bg-white/[0.02] text-text-faint",
              )}
            >
              {i + 1 <= 30 ? i + 1 : ""}
            </div>
          );
        })}
      </div>
      {/* Booking pulse */}
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-2 flex items-center gap-1.5 rounded-md border border-brand-green/40 bg-brand-green/10 px-2 py-1"
      >
        <span className="h-1 w-1 rounded-full bg-brand-green" />
        <span className="font-mono text-[7px] uppercase tracking-wider text-brand-green">
          Slot booked · 4:30 PM
        </span>
      </motion.div>
    </div>
  );
}

function PosMock() {
  const items: Array<[string, string]> = [
    ["Bag of rice 5kg", "₹520"],
    ["Sunflower oil 1L", "₹165"],
    ["Daal · 2kg", "₹240"],
    ["Soap · pack", "₹120"],
  ];
  return (
    <div className="relative mx-auto w-48 rounded-xl border border-white/15 bg-bg-base/80 p-3 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.7)]">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-brand-blue">
          Bill · #2418
        </span>
        <span className="font-mono text-[8px] text-text-faint">14:32</span>
      </div>
      <div className="mt-2 space-y-1 border-t border-dashed border-white/10 pt-2">
        {items.map(([name, price]) => (
          <div
            key={name}
            className="flex items-center justify-between font-mono text-[7px] text-text-secondary"
          >
            <span>{name}</span>
            <span>{price}</span>
          </div>
        ))}
      </div>
      <div className="mt-2 border-t border-dashed border-white/10 pt-1.5 font-mono text-[7px]">
        <div className="flex items-center justify-between text-text-faint">
          <span>GST 5%</span>
          <span>₹52</span>
        </div>
        <div className="mt-0.5 flex items-center justify-between text-white">
          <span>Total</span>
          <span>₹1,097</span>
        </div>
      </div>
      {/* Payment pulse */}
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="mt-2 flex items-center justify-between rounded-md border border-brand-blue/40 bg-brand-blue/10 px-2 py-1"
      >
        <span className="font-mono text-[7px] uppercase tracking-wider text-brand-blue">
          UPI · accepted
        </span>
        <span className="font-mono text-[7px] text-white">✓</span>
      </motion.div>
    </div>
  );
}

function MockFor({ kind }: { kind: "phone" | "calendar" | "pos" }) {
  if (kind === "phone") return <PhoneMock />;
  if (kind === "calendar") return <CalendarMock />;
  return <PosMock />;
}

export function FlagshipTriple() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container-page">
        <div className="flex items-end justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-text-faint">
              Tier 1 · Subscription products
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Three flagships,{" "}
              <span className="text-gradient-brand">three subscriptions.</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-text-muted">
              Mobile-first sales, the digital clinic, and the unified retail
              counter — each shipped as a productised SaaS with monthly tiers.
            </p>
          </div>
          <span className="hidden items-center gap-2 rounded-full border border-white/10 bg-bg-surface px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary md:inline-flex">
            <Sparkles className="h-3 w-3 text-brand-teal" />
            Subscription tiers
          </span>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FLAGSHIP_PRODUCTS.map((p) => {
            const detail = FLAGSHIP_DETAILS[p.slug];
            const a = ACCENTS[detail.accent];

            return (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-bg-surface p-7 shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-bg-elevated hover:shadow-[0_24px_48px_-20px_rgba(0,0,0,0.7)] active:translate-y-0 active:scale-[0.995] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base md:p-8",
                  a.hoverBorder,
                )}
              >
                {/* Top hairline */}
                <span
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r opacity-60 transition-opacity duration-300 group-hover:opacity-100",
                    a.topLine,
                  )}
                />
                {/* Glow blob */}
                <div
                  className={cn(
                    "pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl opacity-50 transition-opacity duration-300 group-hover:opacity-90",
                    a.glow,
                  )}
                />

                {/* Header */}
                <div className="relative flex items-start justify-between gap-2">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-faint">
                      {detail.pillarTagline}
                    </p>
                    <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
                      {p.name}
                    </h3>
                  </div>
                  <span
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em]",
                      a.border,
                      a.bgSoft,
                      a.text,
                    )}
                  >
                    {detail.mock === "phone" && (
                      <Smartphone className="h-2.5 w-2.5" />
                    )}
                    {detail.mock === "calendar" && (
                      <Calendar className="h-2.5 w-2.5" />
                    )}
                    {detail.mock === "pos" && (
                      <Receipt className="h-2.5 w-2.5" />
                    )}
                    Flagship
                  </span>
                </div>

                {/* Mini-mockup */}
                <div className="relative mt-7 flex justify-center py-2">
                  <MockFor kind={detail.mock} />
                </div>

                {/* Blurb */}
                <p className="relative mt-7 flex-1 text-sm leading-relaxed text-text-muted">
                  {p.blurb}
                </p>

                {/* CTA */}
                <span
                  className={cn(
                    "relative mt-6 inline-flex items-center gap-1.5 text-sm font-medium",
                    a.text,
                  )}
                >
                  Explore {p.name}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
