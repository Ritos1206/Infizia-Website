"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, revealItem } from "@/components/motion/Reveal";
import { Kicker } from "@/components/ui/Kicker";
import { PRODUCTS, type Product } from "@/lib/constants";

/**
 * Related products row — shown at the bottom of a product page above the CTA.
 * Excludes the current product. Picks up to N (default 3) others.
 *
 * Strategy: prefer products in the same vertical first, then flagships, then
 * fill from the rest.
 */
export function RelatedProducts({
  currentSlug,
  count = 3,
}: {
  currentSlug: string;
  count?: number;
}) {
  const current = PRODUCTS.find((p) => p.slug === currentSlug);
  if (!current) return null;

  const others = PRODUCTS.filter((p) => p.slug !== currentSlug);

  const sameVertical = others.filter((p) => p.vertical === current.vertical);
  const flagships = others.filter(
    (p) => p.flagship && p.vertical !== current.vertical,
  );
  const rest = others.filter(
    (p) => !p.flagship && p.vertical !== current.vertical,
  );

  const ordered: Product[] = [...sameVertical, ...flagships, ...rest].slice(
    0,
    count,
  );

  if (ordered.length === 0) return null;

  return (
    <section className="relative py-20 md:py-28">
      <Container>
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-6">
          <Reveal>
            <div>
              <Kicker>More from Infizia</Kicker>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
                Other products you should know about
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-white transition-colors"
            >
              View all products
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <RevealGroup
          stagger={0.07}
          className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          {ordered.map((p) => (
            <motion.div key={p.slug} variants={revealItem}>
              <Link
                href={`/products/${p.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-bg-surface p-6 transition-all hover:border-white/20 hover:bg-bg-elevated"
              >
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-text-faint">
                  {p.vertical}
                  {p.flagship && (
                    <span className="ml-2 rounded-full border border-brand-teal/30 bg-brand-teal/10 px-2 py-0.5 text-[9px] text-brand-teal">
                      Flagship
                    </span>
                  )}
                </p>

                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-white">
                  {p.name}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
                  {p.blurb}
                </p>

                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors group-hover:text-white">
                  Explore {p.shortName ?? p.name}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
