"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { GridBackground } from "@/components/motion/GridBackground";
import { ACCENTS, type ProductAccent } from "@/lib/product-accents";
import { cn } from "@/lib/utils";

/**
 * Product hero — used by both flagship and standard product pages.
 *
 * Two layouts:
 *  - When `visual` is provided → 2-col split (copy left, visual right)
 *  - When `visual` is omitted   → centered single-column copy
 *
 * Sections always rendered:
 *  - Vertical pill kicker (prefixed with "Flagship · " when `flagship` is true)
 *  - Massive product name
 *  - Brand-accent tagline
 *  - Positioning paragraph
 *  - Dual CTA (Book a Demo + View Brochure)
 *  - "Pricing — coming soon" footnote
 */
export function ProductHero({
  vertical,
  name,
  tagline,
  positioning,
  accent,
  visual,
  brochureHref = "#",
  hasPricing = false,
  flagship = false,
}: {
  vertical: string;
  name: string;
  tagline: string;
  positioning: string;
  accent: ProductAccent;
  /** Optional visual element rendered alongside the copy on lg+ screens */
  visual?: ReactNode;
  /**
   * Path to the product brochure file (PDF or PPTX). Defaults to "#" (no-op)
   * for products without a brochure yet. See `web/public/brochures/README.md`.
   */
  brochureHref?: string;
  /**
   * True when the product has subscription pricing on this page (rendered
   * inline by ProductPricing at #pricing). When true, the hero shows a
   * "View pricing" pill linking to that anchor. When false, shows
   * "Custom pricing — book a demo".
   */
  hasPricing?: boolean;
  /**
   * When true, the kicker prefixes the vertical with "Flagship · ".
   * Standard products (Phase 4) leave this off and show just the vertical.
   */
  flagship?: boolean;
}) {
  const a = ACCENTS[accent];
  const hasVisual = !!visual;

  return (
    <section className="relative isolate overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-28 lg:pb-32">
      <GridBackground />

      {/* Ambient accent glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className={cn(
            "absolute -top-1/3 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full blur-[120px]",
            a.glow,
          )}
        />
        <div className="absolute top-1/3 -right-40 h-[400px] w-[400px] rounded-full bg-brand-blue/[0.06] blur-[100px]" />
      </div>

      <Container>
        <div
          className={cn(
            "grid grid-cols-1 items-center gap-12",
            hasVisual && "lg:grid-cols-12 lg:gap-16",
          )}
        >
          {/* Copy column */}
          <div
            className={cn(
              hasVisual ? "lg:col-span-7" : "mx-auto max-w-4xl",
            )}
          >
            {/* Kicker: vertical + flagship marker */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-3"
            >
              <div
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-3 py-1.5",
                  a.border,
                  a.bgSoft,
                )}
              >
                <Sparkles className={cn("h-3 w-3", a.text)} />
                <span
                  className={cn(
                    "font-mono text-[11px] tracking-[0.2em] uppercase",
                    a.text,
                  )}
                >
                  {flagship ? `Flagship · ${vertical}` : vertical}
                </span>
              </div>
            </motion.div>

            {/* Product name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={cn(
                "mt-7 font-display font-semibold leading-[0.95] tracking-tight text-white",
                hasVisual
                  ? "text-[3rem] md:text-6xl lg:text-[5.5rem]"
                  : "text-[3.5rem] md:text-7xl lg:text-[6.5rem]",
              )}
            >
              {name}
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className={cn(
                "mt-6 font-display font-medium leading-tight tracking-tight",
                hasVisual
                  ? "text-xl md:text-2xl lg:text-3xl"
                  : "text-2xl md:text-3xl lg:text-4xl",
                a.text,
              )}
            >
              {tagline}
            </motion.p>

            {/* Positioning paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-7 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg"
            >
              {positioning}
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <ButtonLink href="/contact/demo" variant="primary" size="lg">
                Book a Demo
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink
                href={brochureHref}
                variant="outline"
                size="lg"
                external={/\.(pdf|pptx?)$/i.test(brochureHref)}
              >
                <Download className="h-4 w-4" />
                View Brochure
              </ButtonLink>
            </motion.div>

            {/* Pricing pill — links to #pricing anchor when this product has
                inline pricing; otherwise shows a generic "book a demo" line. */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-7 flex items-center gap-3 text-xs text-text-faint"
            >
              <span className="font-mono uppercase tracking-[0.18em]">
                Pricing
              </span>
              <span className="h-px w-8 bg-white/10" />
              {hasPricing ? (
                <a
                  href="#pricing"
                  className="transition-colors hover:text-white"
                >
                  Three tiers · INR/month —{" "}
                  <span className={cn("underline underline-offset-4", a.text)}>
                    View pricing below
                  </span>
                </a>
              ) : (
                <span>Custom pricing — book a demo for a tailored quote</span>
              )}
            </motion.div>
          </div>

          {/* Visual column */}
          {hasVisual && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative lg:col-span-5"
            >
              {visual}
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  );
}
