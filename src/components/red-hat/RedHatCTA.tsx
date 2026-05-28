"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Red Hat CTA block — closes every page.
 *
 * Two CTAs: primary = Book a Demo, secondary = Corporate Brochure
 * (per D-69's "secondary CTA = corporate deck" pattern across the
 * site).
 */
export function RedHatCTA({
  scopeLabel,
  pageName,
}: {
  /** e.g., "RHEL · with Infizia". Top kicker pill. */
  scopeLabel: string;
  /** e.g., "RHEL operations". Lowercased and dropped into the body sentence. */
  pageName: string;
}) {
  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-redhat/30 bg-gradient-to-br from-redhat/[0.10] via-bg-elevated to-bg-surface p-10 md:p-16 lg:p-20">
          <div className="pointer-events-none absolute inset-0 bg-redhat/[0.04] blur-[80px]" />
          <div className="absolute inset-0 bg-grid-fine opacity-30" />

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left bg-gradient-to-r from-redhat via-redhat/40 to-transparent"
          />

          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center md:gap-12">
            <div className="md:col-span-8">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-redhat/30 bg-redhat/10 px-3 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-redhat shadow-[0_0_8px_rgba(238,0,0,0.7)]" />
                  <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white">
                    {scopeLabel}
                  </span>
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
                  Let&apos;s scope this
                  <br />
                  <span className="text-redhat">for your stack.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg">
                  Walk through a tailored {pageName.toLowerCase()} engagement
                  with our team — capability fit, sequencing, timeline, and
                  pricing scoped for your context. Or grab the corporate
                  brochure for the full Infizia overview at your own pace.
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
