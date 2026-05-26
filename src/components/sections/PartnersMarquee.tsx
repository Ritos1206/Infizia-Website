"use client";

import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/motion/Marquee";
import { Reveal } from "@/components/motion/Reveal";
import { TECH_PARTNERS } from "@/lib/constants";

export function PartnersMarquee() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <Reveal>
          <p className="text-center font-mono text-[11px] tracking-[0.25em] text-text-faint uppercase mb-8">
            The technology stack we build on
          </p>
        </Reveal>
      </Container>

      <Marquee speed={50} fadeEdges>
        {TECH_PARTNERS.map((p) => (
          <div
            key={p}
            className="flex h-12 items-center whitespace-nowrap font-display text-2xl font-semibold tracking-tight text-text-muted/60 hover:text-white transition-colors md:text-3xl"
          >
            {p}
          </div>
        ))}
      </Marquee>
    </section>
  );
}
