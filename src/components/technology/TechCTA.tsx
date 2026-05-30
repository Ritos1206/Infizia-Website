"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { ACCENTS, type ProductAccent } from "@/lib/product-accents";
import { cn } from "@/lib/utils";

/**
 * Tech-pillar CTA — Talk to an Architect (primary) + Corporate
 * Brochure (secondary). Mirrors `ServiceCTA` but switches the
 * primary CTA to match the technical-buyer intent on these pages.
 */
export function TechCTA({
  pillarName,
  accent,
}: {
  pillarName: string;
  accent: ProductAccent;
}) {
  const a = ACCENTS[accent];

  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-bg-elevated to-bg-surface p-10 md:p-16 lg:p-20">
          <div
            className={cn(
              "pointer-events-none absolute inset-0 opacity-50 blur-[80px]",
              a.glow,
            )}
          />
          <div className="absolute inset-0 bg-grid-fine opacity-30" />

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

          <div className="relative">
            <Reveal>
              <p
                className={cn(
                  "font-mono text-xs uppercase tracking-[0.25em]",
                  a.text,
                )}
              >
                {pillarName} · with Infizia
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
                Architecture review.{" "}
                <span className="text-text-secondary">
                  Reference design. Production rollout.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg">
                Talk to an Infizia architect about your stack, your
                constraints, and how this pillar fits the rest of your
                platform. Discovery call is free; reference designs land
                in days, not weeks.
              </p>
            </Reveal>

            <div className="mt-8 flex flex-wrap items-center gap-3 md:mt-10">
              <Reveal delay={0.15}>
                <ButtonLink href="/contact/sales" variant="primary" size="lg">
                  Talk to an Architect
                  <ArrowRight className="h-4 w-4" />
                </ButtonLink>
              </Reveal>
              <Reveal delay={0.2}>
                <ButtonLink
                  href="/brochures/infizia_corporate_deck.pdf"
                  variant="outline"
                  size="lg"
                  external
                >
                  <Download className="h-4 w-4" />
                  Corporate Brochure
                </ButtonLink>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
