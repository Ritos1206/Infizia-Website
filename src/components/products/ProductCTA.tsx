"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { ACCENTS, type ProductAccent } from "@/lib/product-accents";
import { cn } from "@/lib/utils";

/**
 * Constant product-page CTA block.
 *
 * Appears at the bottom of EVERY product page (flagship and standard).
 * Two buttons, always:
 *   1. Book a Demo  → /contact/demo
 *   2. View Brochure  → product brochure PDF (or PPTX as fallback)
 *
 * Pricing reference is a small footnote — full pricing lives on /pricing
 * (coming soon).
 */
export function ProductCTA({
  productName,
  accent,
  brochureHref = "#",
}: {
  productName: string;
  accent: ProductAccent;
  /** Override when client provides a real Google Drive / S3 link */
  brochureHref?: string;
}) {
  const a = ACCENTS[accent];

  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-bg-elevated to-bg-surface p-10 md:p-16 lg:p-20">
          {/* Accent backdrop */}
          <div
            className={cn(
              "pointer-events-none absolute inset-0 opacity-50",
              a.glow,
              "blur-[80px]",
            )}
          />
          <div className="absolute inset-0 bg-grid-fine opacity-30" />

          {/* Animated top edge */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "pointer-events-none absolute inset-x-0 top-0 h-px origin-left bg-gradient-to-r",
              a.topLine,
            )}
          />

          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end md:gap-12">
            <div className="md:col-span-8">
              <Reveal>
                <p
                  className={cn(
                    "font-mono text-xs uppercase tracking-[0.25em]",
                    a.text,
                  )}
                >
                  See {productName} in action
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
                  Ready when you are.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg">
                  Walk through {productName} with our team, or download the
                  brochure for the full overview. Pricing is tailored to your
                  team size and rollout — share your context on the demo and
                  we&apos;ll come back with a quote.
                </p>
              </Reveal>
            </div>

            <div className="md:col-span-4 md:justify-self-end">
              <Reveal delay={0.15}>
                <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                  <ButtonLink
                    href="/contact/demo"
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    Book a Demo
                    <ArrowRight className="h-4 w-4" />
                  </ButtonLink>
                  <ButtonLink
                    href={brochureHref}
                    variant="outline"
                    size="lg"
                    className="w-full"
                    external={/\.(pdf|pptx?)$/i.test(brochureHref)}
                  >
                    <Download className="h-4 w-4" />
                    View Brochure
                  </ButtonLink>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
