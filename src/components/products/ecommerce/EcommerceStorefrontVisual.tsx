"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Globe2,
  Heart,
  MessageCircle,
  Receipt,
  Search,
  ShoppingBag,
  Sparkles,
  Star,
  Wand2,
} from "lucide-react";
import { ECOMMERCE_SAMPLE_CATALOG } from "@/content/products/ecommerce";
import { cn } from "@/lib/utils";

/**
 * Custom E-Commerce — bespoke hero visual.
 *
 * Concept: "AI-Personalized Storefront" — a D2C storefront browser
 * mockup showing a multi-vendor catalog grid with AI personalization
 * chips overlaid. Demonstrates the customer-facing online side of the
 * platform (vs EyePOS which shows the in-store cashier-counter side).
 *
 *   ┌───────── ariaglow.in · D2C storefront ─────────┐
 *   │ [≡]  Aria & co.   [search]    ♡  🛒 2  ●        │   ← chrome bar
 *   ├──────────────────────────────────────────────┤
 *   │ ✨ Welcome back, Riya — Recommended for you      │   ← personalization strip
 *   ├──────────────────────────────────────────────┤
 *   │ ┌────────┐  ┌────────┐                          │
 *   │ │ Hydra │  │ Urban  │   ← product grid           │
 *   │ │ Glow  │  │ Linen  │     (multi-vendor)         │
 *   │ │ Aria  │  │ Maison │                            │
 *   │ │ ₹1,499│  │ ₹1,899 │                            │
 *   │ │  ★4.8 │  │  ★4.7 │                            │
 *   │ │  Reco │  │  Best │   ← AI tag pills            │
 *   │ └────────┘  └────────┘                          │
 *   │ ┌────────┐  ┌────────┐                          │
 *   │ │ Cold   │  │ Travel │                          │
 *   │ │ Brew   │  │ Kit    │                          │
 *   │ │ ₹599   │  │ ₹2,499 │                          │
 *   │ │  Rest  │  │ Bundle │                          │
 *   │ └────────┘  └────────┘                          │
 *   ├──────────────────────────────────────────────┤
 *   │ 💬 WhatsApp checkout  ·  GST · UPI · Cards     │   ← commerce footer
 *   └──────────────────────────────────────────────┘
 *      ↳ floating: "92% match for Riya" / "Multi-vendor 24"
 *
 * Brand accent: lime (`text-brand-lime`, `bg-brand-lime/X` …).
 *
 * RESPONSIVE STRATEGY:
 *   • <640px:  product grid stays 2-col, chips simplified, footer wraps
 *   • 640px+:  full chrome + 2x2 grid + chips visible
 *   • lg+:     extra floating callouts visible at top-left + top-right
 */
export function EcommerceStorefrontVisual() {
  return (
    <div className="relative isolate mx-auto w-full max-w-[560px]">
      {/* Ambient lime + green glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-12 -z-10 rounded-[40px] bg-brand-lime/[0.10] blur-3xl"
      />

      {/* Frame — looks like a browser window */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-bg-elevated/80 backdrop-blur-md shadow-glow-lime">
        <BrowserChrome />
        <PersonalizationStrip />
        <ProductGrid />
        <CommerceFooter />
      </div>

      {/* Floating "AI · 92% match" callout — top-right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 10, y: -6 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute -top-3 right-3 hidden items-center gap-1.5 rounded-full border border-brand-lime/40 bg-bg-base/90 px-2.5 py-1.5 backdrop-blur-md sm:inline-flex"
      >
        <Wand2 className="h-3 w-3 text-brand-lime" />
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-lime-soft">
          92% match · Riya
        </span>
      </motion.div>

      {/* Floating "Multi-vendor · 24 sellers" — top-left edge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: -10, y: -6 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="absolute -top-3 -left-3 hidden items-center gap-1.5 rounded-full border border-brand-lime/40 bg-bg-base/90 px-2.5 py-1.5 backdrop-blur-md lg:inline-flex"
      >
        <Globe2 className="h-3 w-3 text-brand-lime" />
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-lime-soft">
          Multi-vendor · 24
        </span>
      </motion.div>

      {/* Floating "GST · UPI · Cards" — bottom-right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.55 }}
        className="absolute -bottom-3 right-4 hidden items-center gap-1.5 rounded-full border border-brand-green/40 bg-bg-base/90 px-2.5 py-1.5 backdrop-blur-md sm:inline-flex"
      >
        <Receipt className="h-3 w-3 text-brand-green" />
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-green-soft">
          GST · UPI · cards
        </span>
      </motion.div>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Browser chrome — store header                                               */
/* ───────────────────────────────────────────────────────────────────────── */

function BrowserChrome() {
  return (
    <>
      {/* Traffic-light row + URL bar */}
      <div className="flex items-center gap-2 border-b border-white/5 px-3 py-2 sm:px-3.5">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
        </div>
        <div className="ml-1 flex flex-1 items-center gap-1.5 rounded border border-white/5 bg-bg-base/40 px-2 py-0.5">
          <span className="relative flex h-1.5 w-1.5 items-center justify-center">
            <span className="absolute h-1.5 w-1.5 animate-ping rounded-full bg-brand-lime/60" />
            <span className="relative h-1 w-1 rounded-full bg-brand-lime" />
          </span>
          <span className="font-mono text-[8px] tracking-wider text-text-faint">
            ariaglow.in
          </span>
        </div>
      </div>

      {/* Store header — brand + nav + cart */}
      <div className="flex items-center justify-between border-b border-white/5 px-3 py-2.5 sm:px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-brand-lime/40 to-brand-green/40">
            <span className="font-display text-[10px] font-bold text-bg-base">
              A
            </span>
          </div>
          <span className="font-display text-[12px] font-semibold tracking-tight text-white sm:text-[13px]">
            Aria &amp; co.
          </span>
          <span className="hidden font-mono text-[9px] uppercase tracking-wider text-text-faint sm:inline">
            · D2C
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Search className="h-3.5 w-3.5 text-text-secondary" />
          <Heart className="h-3.5 w-3.5 text-text-secondary" />
          <div className="relative">
            <ShoppingBag className="h-3.5 w-3.5 text-text-secondary" />
            <span className="absolute -top-1 -right-1.5 inline-flex h-3 min-w-3 items-center justify-center rounded-full bg-brand-lime px-1 font-mono text-[7px] font-semibold text-bg-base">
              2
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Personalization strip — "Welcome back, Riya"                                */
/* ───────────────────────────────────────────────────────────────────────── */

function PersonalizationStrip() {
  return (
    <div className="border-b border-white/5 bg-gradient-to-r from-brand-lime/[0.05] via-brand-lime/[0.08] to-brand-lime/[0.05] px-3 py-2 sm:px-4">
      <div className="flex items-center gap-2">
        <Sparkles className="h-3 w-3 text-brand-lime" />
        <p className="flex-1 truncate font-mono text-[9px] uppercase tracking-[0.18em] text-white">
          Welcome back, Riya — Recommended for you
        </p>
        <span className="hidden font-mono text-[8px] uppercase tracking-wider text-brand-lime sm:inline">
          adaptive
        </span>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Product grid — 4 cards in 2x2                                               */
/* ───────────────────────────────────────────────────────────────────────── */

function ProductGrid() {
  return (
    <div className="grid grid-cols-2 gap-2 p-3 sm:gap-2.5 sm:p-3.5">
      {ECOMMERCE_SAMPLE_CATALOG.map((product, i) => (
        <ProductCard key={product.name} product={product} index={i} />
      ))}
    </div>
  );
}

function ProductCard({
  product,
  index,
}: {
  product: (typeof ECOMMERCE_SAMPLE_CATALOG)[number];
  index: number;
}) {
  const tagClasses =
    product.tagTone === "primary"
      ? "border-brand-lime/30 bg-brand-lime/15 text-brand-lime"
      : product.tagTone === "secondary"
        ? "border-brand-amber/30 bg-brand-amber/10 text-brand-amber"
        : "border-white/10 bg-white/[0.05] text-text-secondary";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.45,
        delay: 0.5 + index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-2 transition-colors hover:border-brand-lime/30 sm:p-2.5"
    >
      {/* Product image placeholder — gradient block with lime tint */}
      <div className="relative h-16 overflow-hidden rounded-lg bg-gradient-to-br from-brand-lime/[0.18] via-bg-elevated/40 to-brand-green/[0.12] sm:h-20">
        {/* Decorative blob to suggest a product image */}
        <div className="absolute top-1/2 left-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-lime/[0.18] blur-md" />
        {/* AI tag — top-right corner */}
        <span
          className={cn(
            "absolute top-1.5 right-1.5 inline-flex items-center gap-0.5 rounded border px-1.5 py-0.5 font-mono text-[7px] uppercase tracking-wider",
            tagClasses,
          )}
        >
          {product.tagTone === "primary" && (
            <Sparkles className="h-2 w-2" strokeWidth={2} />
          )}
          {product.tag}
        </span>
      </div>

      {/* Product info */}
      <div className="mt-2">
        <p className="line-clamp-1 font-display text-[11px] font-semibold leading-tight text-white sm:text-[12px]">
          {product.name}
        </p>
        <p className="mt-0.5 line-clamp-1 font-mono text-[8px] uppercase tracking-wider text-text-faint">
          {product.vendor}
        </p>
      </div>

      {/* Price + rating */}
      <div className="mt-1.5 flex items-center justify-between">
        <p className="font-display text-[12px] font-semibold tabular-nums text-brand-lime sm:text-[13px]">
          {product.price}
        </p>
        <span className="inline-flex items-center gap-0.5 font-mono text-[8px] tabular-nums text-text-secondary">
          <Star
            className="h-2 w-2 fill-brand-amber text-brand-amber"
            strokeWidth={1}
          />
          {product.rating}
        </span>
      </div>
    </motion.div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Commerce footer — WhatsApp + payments                                       */
/* ───────────────────────────────────────────────────────────────────────── */

function CommerceFooter() {
  return (
    <div className="flex items-center justify-between gap-2 border-t border-white/5 bg-bg-base/40 px-3 py-2.5 sm:px-4">
      <span className="inline-flex items-center gap-1.5">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-green/15">
          <MessageCircle
            className="h-2.5 w-2.5 text-brand-green"
            strokeWidth={2}
          />
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white">
          WhatsApp checkout
        </span>
      </span>
      <span className="inline-flex items-center gap-1">
        <Cpu className="h-3 w-3 text-brand-lime" />
        <span className="hidden font-mono text-[8px] uppercase tracking-wider text-brand-lime-soft sm:inline">
          AI · live
        </span>
      </span>
    </div>
  );
}
