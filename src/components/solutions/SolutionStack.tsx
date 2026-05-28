"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealGroup, revealItem } from "@/components/motion/Reveal";
import { ACCENTS, type ProductAccent } from "@/lib/product-accents";
import { PRODUCTS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { SolutionStackEntry } from "@/content/solutions/types";

/**
 * Solution stack — the mapped Infizia products that solve this vertical.
 *
 * Renders one D-57-standard clickable card per entry, linking to the
 * product page. Each card surfaces:
 *   • Vertical mono kicker
 *   • Product name (with Flagship pill if applicable)
 *   • Solution-specific role line (why THIS product fits THIS vertical)
 *   • Product blurb (general)
 *   • Hover lift + accent border + active press + focus ring
 */
export function SolutionStack({
  kicker,
  title,
  lede,
  entries,
  accent,
}: {
  kicker: string;
  title: string;
  lede: string;
  entries: SolutionStackEntry[];
  accent: ProductAccent;
}) {
  const a = ACCENTS[accent];

  // Resolve product objects from slugs in the order the content specifies.
  const resolved = entries
    .map((e) => {
      const product = PRODUCTS.find((p) => p.slug === e.productSlug);
      return product ? { product, role: e.role } : null;
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);

  if (resolved.length === 0) return null;

  // Layout: 2 cols on md, 3 cols on lg when 3+, otherwise 2 cols.
  const cols =
    resolved.length >= 3
      ? "md:grid-cols-2 lg:grid-cols-3"
      : "md:grid-cols-2";

  return (
    <section className="relative py-24 md:py-32">
      {/* Tinted backdrop */}
      <div className="absolute inset-0 -z-10 bg-bg-surface/40" />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className={cn(
            "absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl",
            a.glow,
          )}
        />
      </div>

      <Container>
        <SectionHeader kicker={kicker} title={title} lede={lede} gradient />

        <RevealGroup
          stagger={0.07}
          className={cn("mt-14 grid grid-cols-1 gap-4", cols)}
        >
          {resolved.map(({ product, role }) => (
            <motion.div key={product.slug} variants={revealItem}>
              <Link
                href={`/products/${product.slug}`}
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-bg-base p-6 shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-bg-elevated hover:shadow-[0_18px_40px_-16px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.06)_inset] active:translate-y-0 active:scale-[0.995] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base md:p-7",
                  a.hoverBorder,
                )}
              >
                {/* Top hairline shimmer */}
                <span
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r opacity-60 transition-opacity duration-300 group-hover:opacity-100",
                    a.topLine,
                  )}
                />

                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-faint">
                  {product.vertical}
                  {product.flagship && (
                    <span
                      className={cn(
                        "ml-2 rounded-full border px-2 py-0.5 text-[9px]",
                        a.border,
                        a.bgSoft,
                        a.text,
                      )}
                    >
                      Flagship
                    </span>
                  )}
                </p>

                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-white">
                  {product.name}
                </h3>

                {/* Role line — solution-specific framing, accent-tinted to
                    distinguish it from the general product blurb below. */}
                <p
                  className={cn(
                    "mt-3 text-sm font-medium leading-relaxed",
                    a.text,
                  )}
                >
                  {role}
                </p>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
                  {product.blurb}
                </p>

                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors group-hover:text-white">
                  Explore {product.shortName ?? product.name}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
