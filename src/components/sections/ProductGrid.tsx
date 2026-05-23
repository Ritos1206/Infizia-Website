"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { RevealGroup, revealItem } from "@/components/motion/Reveal";
import type { Product } from "@/lib/constants";

export function ProductGrid({
  items,
  accent = "teal",
  featured = false,
}: {
  items: Product[];
  accent?: "teal" | "green";
  featured?: boolean;
}) {
  return (
    <RevealGroup
      className={`grid grid-cols-1 gap-4 ${
        featured ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"
      }`}
    >
      {items.map((p) => (
        <motion.div key={p.slug} variants={revealItem}>
          <Link
            href={`/products/${p.slug}`}
            className="group relative block h-full overflow-hidden rounded-2xl border border-white/10 bg-bg-surface p-6 transition-all hover:border-brand-teal/40 hover:bg-bg-elevated"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-mono text-[10px] tracking-[0.2em] text-text-faint uppercase">
                  {p.vertical}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                  {p.name}
                </h3>
              </div>
              <ArrowUpRight
                className={`h-5 w-5 shrink-0 text-text-faint transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                  accent === "teal"
                    ? "group-hover:text-brand-teal"
                    : "group-hover:text-brand-green"
                }`}
              />
            </div>

            <p
              className={`mt-4 text-sm leading-relaxed text-text-muted ${
                featured ? "" : "line-clamp-3"
              }`}
            >
              {p.blurb}
            </p>

            {featured && (
              <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-mono text-brand-teal">
                <span className="h-1 w-1 rounded-full bg-brand-teal" />
                FLAGSHIP
              </div>
            )}
          </Link>
        </motion.div>
      ))}
    </RevealGroup>
  );
}
