"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { ECOMMERCE_PLATFORM_LAYERS } from "@/content/products/ecommerce";

/**
 * Custom E-Commerce — "The Platform Stack" mid-page section.
 *
 * Concept: visualize the platform as a 5-layer architectural stack —
 * Foundation (modular + API-first) → Core commerce → Intelligence →
 * Engagement → Brand surface. Each layer represents a category of
 * capabilities, stacking from infrastructure up to the customer-facing
 * brand experience.
 *
 * Idiom is distinct from every shipped mid-page:
 *   • Performix: chapter-style cycle story (4 horizontal stages)
 *   • Meetrix: hub-and-spoke (centre + 6 outputs)
 *   • Intellix: 5-tools-to-1 converging lines (before/after)
 *   • Learnova: winding 4-station path with SVG curve
 *   • LMS: side-by-side 3-persona mini-mockups
 *   • E-Commerce: vertical layered stack — never used.
 *
 * Visual structure:
 *   • Topmost layer (Brand surface) is brightest, fully lime-glow accent
 *   • Layers 4 → 1 progressively dimmer / more architectural
 *   • Faint vertical gradient line on the left edge of the stack ties
 *     the layers together as one "platform"
 *   • Each layer is a horizontal card with a number kicker, role label,
 *     icon block, title, body, and 3-4 capability chips
 *   • Cards animate in top-to-bottom on viewport-enter (top brand layer
 *     first, foundation last) — reinforces that the brand sits ON TOP
 *     of everything else
 *
 * RESPONSIVE STRATEGY:
 *   • <640px:  layers stack with smaller padding, chips wrap
 *   • 640px+:  full layout with horizontal layer cards
 */
export function EcommerceLayeredStack() {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 lg:py-32">
      {/* Backdrop with lime wash */}
      <div className="absolute inset-0 -z-10 bg-bg-surface/40" />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-brand-lime/[0.06] blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-[360px] w-[360px] translate-x-1/2 rounded-full bg-brand-green/[0.06] blur-3xl" />
      </div>

      <Container>
        <SectionHeader
          kicker="The platform stack"
          title="Five layers — your brand sits on top of all of them."
          lede="Custom E-Commerce is built as a stack: a modular API-first foundation, a complete commerce core, an intelligence layer that personalizes everything, an engagement layer that runs marketing and support, and your custom brand surface on top. You own the whole stack, and every layer bends to your business."
        />

        <Reveal delay={0.1}>
          <div className="relative mx-auto mt-14 max-w-3xl sm:mt-16">
            {/* Vertical accent line on the left edge tying all layers together */}
            <div
              aria-hidden
              className="pointer-events-none absolute top-2 bottom-2 left-[18px] w-px bg-gradient-to-b from-brand-lime/60 via-brand-lime/20 to-brand-lime/0 sm:left-[22px]"
            />

            {/* Layers — top to bottom */}
            <div className="flex flex-col gap-3 sm:gap-4">
              {ECOMMERCE_PLATFORM_LAYERS.map((layer, i) => (
                <LayerCard key={layer.n} layer={layer} index={i} />
              ))}
            </div>

            {/* Tiny ground-line marker beneath the foundation layer */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-4 flex items-center gap-2 pl-8 sm:pl-10"
            >
              <ArrowDown className="h-3 w-3 text-text-faint" />
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-text-faint">
                API-first · scales from D2C to marketplace
              </span>
            </motion.div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Layer card — one row of the stack                                           */
/* ───────────────────────────────────────────────────────────────────────── */

function LayerCard({
  layer,
  index,
}: {
  layer: (typeof ECOMMERCE_PLATFORM_LAYERS)[number];
  index: number;
}) {
  const Icon = layer.icon;
  const isTop = index === 0; // Brand surface — most prominent

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.55,
        delay: 0.15 + index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative overflow-hidden rounded-2xl border bg-bg-elevated/40 backdrop-blur-md transition-colors ${
        isTop
          ? "border-brand-lime/40 shadow-glow-lime"
          : "border-white/10 hover:border-brand-lime/30"
      }`}
    >
      {/* Top hairline shimmer — brighter on the top brand layer */}
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 top-0 h-px ${
          isTop
            ? "bg-gradient-to-r from-brand-lime/0 via-brand-lime/80 to-brand-lime/0"
            : "bg-gradient-to-r from-brand-lime/0 via-brand-lime/30 to-brand-lime/0"
        }`}
      />

      <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:gap-5 sm:p-6">
        {/* Number + icon column (compact on mobile, fixed-width on sm+) */}
        <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-3">
          {/* Number kicker */}
          <span
            className={`font-display text-[28px] font-semibold tabular-nums leading-none sm:text-[32px] ${
              isTop ? "text-brand-lime" : "text-brand-lime/70"
            }`}
          >
            {layer.n}
          </span>

          {/* Icon block */}
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-xl border sm:h-12 sm:w-12 ${
              isTop
                ? "border-brand-lime/40 bg-brand-lime/15"
                : "border-white/10 bg-white/[0.03]"
            }`}
          >
            <Icon
              className={`h-4 w-4 sm:h-5 sm:w-5 ${
                isTop ? "text-brand-lime" : "text-brand-lime/80"
              }`}
              strokeWidth={1.7}
            />
          </div>
        </div>

        {/* Body */}
        <div className="min-w-0 flex-1">
          {/* Role kicker */}
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand-lime">
            {layer.role}
          </p>

          {/* Title */}
          <h3 className="mt-1.5 font-display text-base font-semibold leading-tight tracking-tight text-white sm:text-lg">
            {layer.title}
          </h3>

          {/* Body copy */}
          <p className="mt-2 text-[13px] leading-relaxed text-text-secondary">
            {layer.body}
          </p>

          {/* Capability chips */}
          <ul className="mt-3 flex flex-wrap gap-1.5 border-t border-white/5 pt-3">
            {layer.chips.map((chip) => (
              <li
                key={chip}
                className={`rounded-md border px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider ${
                  isTop
                    ? "border-brand-lime/30 bg-brand-lime/10 text-brand-lime-soft"
                    : "border-white/10 bg-white/[0.03] text-text-secondary"
                }`}
              >
                {chip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}
