"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { ACCENTS, type ProductAccent } from "@/lib/product-accents";
import { cn } from "@/lib/utils";

/**
 * Service-page CTA block. Mirrors `SolutionCTA` — Book a Demo +
 * Corporate Brochure (per D-69).
 */
export function ServiceCTA({
  serviceName,
  accent,
}: {
  serviceName: string;
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

          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end md:gap-12">
            <div className="md:col-span-8">
              <Reveal>
                <p
                  className={cn(
                    "font-mono text-xs uppercase tracking-[0.25em]",
                    a.text,
                  )}
                >
                  {serviceName} · with Infizia
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
                  Let&apos;s scope this for your team.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg">
                  Walk through a tailored {serviceName.toLowerCase()}{" "}
                  engagement with our team — capability fit, sequencing,
                  timeline, and pricing scoped for your context. Or grab the
                  corporate brochure for the full Infizia overview at your
                  own pace.
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
                    href="/brochures/infizia_corporate_deck.pdf"
                    variant="outline"
                    size="lg"
                    className="w-full"
                    external
                  >
                    <Download className="h-4 w-4" />
                    Corporate Brochure
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
