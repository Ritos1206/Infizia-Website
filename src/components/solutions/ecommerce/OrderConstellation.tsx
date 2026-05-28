"use client";

import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { ACCENTS } from "@/lib/product-accents";
import { cn } from "@/lib/utils";
import { ECOMMERCE_CONSTELLATION_NODES } from "@/content/solutions/ecommerce";

/**
 * E-Commerce — Order Constellation hero visual.
 *
 * A network graph visualised inside a single SVG canvas:
 *   • Centre: the brand node (lime, glowing)
 *   • Inner ring: 4 vendor nodes (lime-tinted)
 *   • Outer ring: 4 customer touchpoint nodes (Web · WhatsApp · Store)
 *   • Edges from vendor → brand → customer, with traveling pulse dots
 *     showing live orders moving through the network.
 *
 * The visualisation answers "what does an order actually look like in
 * a modern brand?" — it's not a single arrow from store to customer,
 * it's a multi-hop graph, and Infizia is the wire that holds it
 * together.
 *
 * Idiom note: distinct from EcommerceStorefrontVisual (UI mockup of a
 * shopping page) and EcommerceLayeredStack (vertical architectural
 * layers). The network-graph node-and-edge visualisation is new.
 *
 * Responsive:
 *   • <md: vertical stack — brand card on top, then vendor + customer
 *     pills underneath
 *   • md+: full constellation SVG
 */
export function OrderConstellation() {
  const a = ACCENTS.lime;

  return (
    <div className="relative">
      {/* Ambient lime glow */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -inset-8 rounded-[2rem] blur-3xl opacity-60",
          a.glow,
        )}
      />

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-bg-elevated to-bg-surface p-6 shadow-card md:p-8">
        {/* Chrome */}
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-brand-lime shadow-[0_0_8px_rgba(163,230,53,0.7)]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary">
              Order constellation · Live
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
            14 in flight
          </span>
        </div>

        {/* ── Desktop SVG constellation (md+) ────────────────────────── */}
        <div className="relative mt-6 hidden h-[340px] md:block">
          <svg
            viewBox="0 0 480 340"
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden
          >
            <defs>
              <radialGradient id="brand-glow" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stopColor="#a3e635" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#a3e635" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="edge-grad" x1="0" x2="1">
                <stop offset="0%" stopColor="#a3e635" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#a3e635" stopOpacity="0.05" />
              </linearGradient>
            </defs>

            {/* Brand glow halo */}
            <circle cx="240" cy="170" r="90" fill="url(#brand-glow)" />

            {/* Edges from each vendor to brand */}
            {ECOMMERCE_CONSTELLATION_NODES.filter(
              (n) => n.kind === "vendor",
            ).map((n) => (
              <motion.line
                key={`brand-v-${n.id}`}
                x1={n.x}
                y1={n.y}
                x2={240}
                y2={170}
                stroke="url(#edge-grad)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.3 }}
              />
            ))}

            {/* Edges from brand to each customer */}
            {ECOMMERCE_CONSTELLATION_NODES.filter(
              (n) => n.kind === "customer",
            ).map((n) => (
              <motion.line
                key={`brand-c-${n.id}`}
                x1={240}
                y1={170}
                x2={n.x}
                y2={n.y}
                stroke="url(#edge-grad)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.5 }}
              />
            ))}

            {/* Pulse dots traveling vendor → brand and brand → customer */}
            {ECOMMERCE_CONSTELLATION_NODES.map((n, i) => {
              const isVendor = n.kind === "vendor";
              const from = isVendor
                ? { x: n.x, y: n.y }
                : { x: 240, y: 170 };
              const to = isVendor
                ? { x: 240, y: 170 }
                : { x: n.x, y: n.y };
              return (
                <motion.circle
                  key={`pulse-${n.id}`}
                  r="2.5"
                  fill="#a3e635"
                  initial={{ cx: from.x, cy: from.y, opacity: 0 }}
                  animate={{
                    cx: [from.x, to.x],
                    cy: [from.y, to.y],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 2.6,
                    delay: i * 0.35,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: "easeInOut",
                  }}
                />
              );
            })}

            {/* Brand node (centre) */}
            <g>
              <circle
                cx="240"
                cy="170"
                r="22"
                fill="#0A1628"
                stroke="#a3e635"
                strokeWidth="2"
              />
            </g>

            {/* Node circles for vendors and customers */}
            {ECOMMERCE_CONSTELLATION_NODES.map((n) => (
              <g key={n.id}>
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={n.kind === "vendor" ? 11 : 9}
                  fill="#0A1628"
                  stroke={n.kind === "vendor" ? "#a3e635" : "#bef264"}
                  strokeOpacity={n.kind === "vendor" ? 0.7 : 0.5}
                  strokeWidth="1.5"
                />
              </g>
            ))}
          </svg>

          {/* Brand label overlay (centred) */}
          <div className="absolute left-1/2 top-[170px] -translate-x-1/2 -translate-y-1/2 text-center">
            <div
              className={cn(
                "rounded-md border bg-bg-base px-2 py-1",
                a.border,
              )}
            >
              <ShoppingBag className={cn("mx-auto h-4 w-4", a.text)} />
              <p className="mt-0.5 font-display text-[10px] font-semibold text-white">
                Brand
              </p>
            </div>
          </div>

          {/* Vendor + customer label chips */}
          {ECOMMERCE_CONSTELLATION_NODES.map((n) => {
            const Icon = n.icon;
            const offsetY = n.y > 170 ? 18 : -36;
            return (
              <div
                key={n.id}
                className={cn(
                  "absolute flex items-center gap-1 rounded-md border bg-bg-base/90 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.14em]",
                  n.kind === "vendor"
                    ? "border-brand-lime/40 text-brand-lime"
                    : "border-white/10 text-text-secondary",
                )}
                style={{
                  left: `${(n.x / 480) * 100}%`,
                  top: `${n.y + offsetY}px`,
                  transform: "translateX(-50%)",
                }}
              >
                <Icon className="h-2.5 w-2.5" strokeWidth={1.8} />
                <span>{n.label}</span>
              </div>
            );
          })}
        </div>

        {/* ── Mobile stack ───────────────────────────────────────────── */}
        <div className="mt-6 md:hidden">
          {/* Brand pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className={cn(
              "mx-auto inline-flex items-center gap-2 rounded-full border bg-bg-base px-3 py-1.5",
              a.border,
              a.shadow,
            )}
          >
            <ShoppingBag className={cn("h-3.5 w-3.5", a.text)} />
            <span className="font-display text-xs font-semibold text-white">
              Brand · Centre
            </span>
          </motion.div>

          <div className="mt-4 grid grid-cols-2 gap-2">
            {ECOMMERCE_CONSTELLATION_NODES.map((n, i) => {
              const Icon = n.icon;
              return (
                <motion.div
                  key={n.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={cn(
                    "flex items-center gap-2 rounded-lg border bg-bg-base p-2",
                    n.kind === "vendor"
                      ? "border-brand-lime/30"
                      : "border-white/10",
                  )}
                >
                  <Icon
                    className={cn(
                      "h-3.5 w-3.5",
                      n.kind === "vendor" ? a.text : "text-text-secondary",
                    )}
                  />
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-text-faint">
                      {n.kind}
                    </p>
                    <p className="truncate font-display text-[11px] font-semibold text-white">
                      {n.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/5 pt-4 text-[10px] font-mono uppercase tracking-[0.18em] text-text-faint">
          <span>4 vendors · 4 touchpoints · 14 live orders</span>
          <span className="ml-auto inline-flex items-center gap-1.5 text-brand-lime">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-lime animate-pulse-soft" />
            Order pulse · live
          </span>
        </div>
      </div>
    </div>
  );
}
