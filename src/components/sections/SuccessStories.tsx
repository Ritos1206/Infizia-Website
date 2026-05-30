"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CUSTOMERS, CUSTOMER_CATEGORIES } from "@/lib/customers";
import { cn } from "@/lib/utils";

/**
 * Success Stories — Contezza's past-customer track record.
 *
 * Honest framing: Infizia launched in 2026 as Contezza Techno Solution
 * Pvt. Ltd.'s AI-native sub-brand. The products below are real client
 * deployments Contezza shipped over 14 years (since 2012). Infizia
 * inherits that engineering practice — same teams, same standards,
 * now applied to AI-native products.
 *
 * Logos sourced from the corporate deck (page 10 · "Our Success
 * Stories"). Each lives at `/customers/<slug>.png`, indexed by the
 * `CUSTOMERS` constant in `lib/customers.ts`.
 *
 * Treatment:
 *   • Most logos render on white "logo pills" so they stay legible
 *     against the dark site.
 *   • Logos with `bg === "dark"` ship with a baked-in dark background
 *     (EmbassyX Games, OriginatorX) — for these we skip the white pill
 *     and use a neutral elevated frame so we don't double-frame.
 *   • Grid: 2 cols on phones, 3 on small tablets, 4 on tablets,
 *     5 on lg+ — only 11 cards so the last row balances naturally.
 *   • Cards are decorative (non-clickable) until destination URLs are
 *     supplied by the client.
 */
export function SuccessStories() {
  return (
    <section className="relative py-20 md:py-28">
      {/* Ambient glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-brand-teal/[0.05] blur-[140px]" />
        <div className="absolute right-1/4 bottom-1/3 h-80 w-80 rounded-full bg-brand-blue/[0.05] blur-[140px]" />
      </div>

      <Container>
        <SectionHeader
          kicker="Engineering Lineage · Past Customers"
          title="Built on a 14-year track record."
          lede="Infizia is the AI-native sub-brand of Contezza Techno Solution Pvt. Ltd. — our parent company, founded in 2012. The products below are real client deployments Contezza has shipped over the years. Same engineering team, same delivery standards, now applied to AI-native products."
          gradient
        />

        {/* Stat / category strip */}
        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-bg-surface px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-text-secondary">
            <Sparkles className="h-3 w-3 text-brand-teal" />
            Contezza · since 2012
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-faint">
            ·
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-bg-surface px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-text-secondary">
            {CUSTOMERS.length}+ products delivered
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-faint">
            ·
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-bg-surface px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-text-secondary">
            {CUSTOMER_CATEGORIES.length} industries
          </span>
        </div>

        {/* Logo grid */}
        <RevealGroup
          stagger={0.04}
          className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 md:grid-cols-4 lg:grid-cols-5"
        >
          {CUSTOMERS.map((c) => {
            const isDarkArtwork = c.bg === "dark";
            return (
              <Reveal key={c.slug}>
                <div
                  className={cn(
                    "group relative flex h-24 items-center justify-center overflow-hidden rounded-2xl border border-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:shadow-[0_18px_40px_-16px_rgba(0,0,0,0.6)] md:h-28",
                    isDarkArtwork ? "bg-bg-elevated" : "bg-white",
                  )}
                  aria-label={`${c.name} — ${c.category} customer`}
                >
                  {/* Top hairline shimmer */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-80"
                  />
                  <div className="relative flex h-full w-full items-center justify-center px-4 py-3">
                    <Image
                      src={`/customers/${c.slug}.png`}
                      alt={c.name}
                      width={200}
                      height={80}
                      sizes="(max-width: 640px) 40vw, (max-width: 1024px) 22vw, 18vw"
                      className="max-h-full max-w-full object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                  {/* Tooltip-style hover label */}
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-bg-base/95 via-bg-base/80 to-transparent px-3 py-1.5 text-center font-mono text-[9px] uppercase tracking-[0.18em] text-text-secondary transition-transform duration-300 group-hover:translate-y-0">
                    {c.name} · {c.category}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </RevealGroup>

        {/* Footer note — honest attribution */}
        <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-relaxed text-text-faint">
          All projects above were delivered by{" "}
          <span className="text-text-secondary">
            Contezza Techno Solution Pvt. Ltd.
          </span>
          , Infizia&rsquo;s parent company. Contezza has been shipping
          production software for clients since 2012; Infizia carries that
          engineering practice forward into agentic AI and AI-native
          products from 2026 onwards.
        </p>
      </Container>
    </section>
  );
}
