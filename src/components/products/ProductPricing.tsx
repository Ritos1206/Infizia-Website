"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, RevealGroup, revealItem } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { ACCENTS, type ProductAccent } from "@/lib/product-accents";
import { PRODUCT_PRICING, type PricingTier } from "@/content/pricing";
import { cn } from "@/lib/utils";

/**
 * Inline pricing section for product pages (EyeCON, VitaCare, EyePOS).
 *
 * Reads tiers from `web/src/content/pricing.ts`. Renders nothing if the
 * product slug isn't in the pricing matrix — non-subscription products
 * skip this section entirely.
 *
 * Anchor: `#pricing` so the hero pricing pill can link to it.
 */
export function ProductPricing({
  productSlug,
  accent,
}: {
  productSlug: string;
  accent: ProductAccent;
}) {
  const product = PRODUCT_PRICING.find((p) => p.productSlug === productSlug);
  if (!product) return null;

  const a = ACCENTS[accent];

  return (
    <section
      id="pricing"
      className="relative py-24 md:py-32 scroll-mt-24"
    >
      {/* Subtle background variety */}
      <div className="absolute inset-0 -z-10 bg-bg-surface/40" />
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent to-transparent",
          accent === "teal" && "via-brand-teal/40",
          accent === "green" && "via-brand-green/40",
          accent === "blue" && "via-brand-blue/40",
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute -top-40 left-1/2 -z-10 h-96 w-[40rem] -translate-x-1/2 rounded-full blur-[140px]",
          a.glow,
        )}
      />

      <Container>
        <SectionHeader
          kicker="Pricing"
          title="Three tiers. INR per month."
          lede={`${product.tagline}. Start where you are, scale as you grow. Annual commit gets a discount; Enterprise rollouts are custom.`}
          gradient
        />

        {/* Indicative pricing badge */}
        <Reveal delay={0.1}>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/5 px-3 py-1.5 text-xs">
            <Sparkles className="h-3 w-3 text-amber-400" />
            <span className="font-mono uppercase tracking-[0.2em] text-amber-400">
              Indicative pricing
            </span>
            <span className="text-text-muted">
              · final tier scope locked at demo
            </span>
          </div>
        </Reveal>

        {/* Tier cards */}
        <RevealGroup
          stagger={0.07}
          className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          {product.tiers.map((tier) => (
            <motion.div key={tier.name} variants={revealItem}>
              <PricingCard
                tier={tier}
                productName={product.productName}
                accent={accent}
              />
            </motion.div>
          ))}
        </RevealGroup>

        {/* Footer note */}
        <Reveal delay={0.3}>
          <p className="mt-8 text-center text-xs text-text-faint md:text-sm">
            Need volume pricing, custom commercial terms, or non-profit /
            education discounts?{" "}
            <a
              href="/contact/sales"
              className={cn("underline underline-offset-4 hover:opacity-80", a.text)}
            >
              Talk to sales
            </a>
            .
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Card                                                                      */
/* -------------------------------------------------------------------------- */

function PricingCard({
  tier,
  productName,
  accent,
}: {
  tier: PricingTier;
  productName: string;
  accent: ProductAccent;
}) {
  const a = ACCENTS[accent];
  const recommended = tier.recommended;
  const isCustom = tier.price === "Custom";

  return (
    <div
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 md:p-7",
        recommended
          ? cn(
              a.border,
              accent === "teal" &&
                "bg-gradient-to-b from-brand-teal/[0.06] to-bg-surface",
              accent === "green" &&
                "bg-gradient-to-b from-brand-green/[0.06] to-bg-surface",
              accent === "blue" &&
                "bg-gradient-to-b from-brand-blue/[0.06] to-bg-surface",
            )
          : "border-white/10 bg-bg-surface",
      )}
    >
      {recommended && (
        <>
          <div
            className={cn(
              "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent",
              accent === "teal" && "via-brand-teal/60",
              accent === "green" && "via-brand-green/60",
              accent === "blue" && "via-brand-blue/60",
            )}
          />
          <div
            className={cn(
              "pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full blur-3xl",
              a.glow,
            )}
          />
          <span
            className={cn(
              "absolute right-4 top-4 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider",
              a.border,
              a.bgSoft,
              a.text,
            )}
          >
            Recommended
          </span>
        </>
      )}

      <div className="relative">
        <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
          {tier.name}
        </h3>
        <p className="mt-1 text-sm text-text-muted">{tier.tagline}</p>

        <div className="mt-7 flex items-baseline gap-2">
          <span
            className={cn(
              "font-display font-semibold tracking-tight text-white",
              isCustom ? "text-3xl" : "text-5xl",
            )}
          >
            {tier.price}
          </span>
          <span className="text-sm text-text-muted">{tier.unit}</span>
        </div>

        {!isCustom && (
          <p className="mt-1.5 font-mono text-[11px] uppercase tracking-wider text-text-faint">
            Billed monthly · annual commit discount
          </p>
        )}

        <ul className="mt-7 flex-1 space-y-2.5">
          {tier.features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-2.5 text-sm text-text-secondary"
            >
              <span
                className={cn(
                  "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full",
                  recommended ? cn(a.bgSoft, a.text) : "bg-white/5 text-text-muted",
                )}
              >
                <Check className="h-2.5 w-2.5" strokeWidth={3} />
              </span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 border-t border-white/5 pt-6">
          <ButtonLink
            href={tier.cta?.href ?? "/contact/demo"}
            variant={recommended ? "primary" : "outline"}
            className="w-full !justify-center"
          >
            {tier.cta?.label ?? `Book a ${productName} Demo`}
            <ArrowRight className="h-3.5 w-3.5" />
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
