"use client";

import { motion } from "framer-motion";
import { ACCENTS } from "@/lib/product-accents";
import { cn } from "@/lib/utils";
import { WEBAPP_HERO_SURFACES } from "@/content/services/web-app-development";

/**
 * Web & App Development — Multi-Surface Sync Frame hero.
 *
 * 4 device cards (web admin · tablet POS · mobile field · kiosk lobby)
 * arranged in a 2x2 grid, each rendering a stylised surface for the
 * SAME app. A faint sync pulse travels diagonally between the cards
 * to argue "one product, every surface, shared state".
 *
 * Idiom note: distinct from EyeCON's single-phone mockup, EyePOS's
 * counter mockup, and the storefront browser frame. Multi-surface 2x2
 * with sync pulses is genuinely new.
 *
 * Responsive: 2x2 grid scales naturally on all viewports.
 */
export function MultiSurfaceFrame() {
  const a = ACCENTS.blue;

  return (
    <div className="relative">
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
            <span className="h-2 w-2 rounded-full bg-brand-blue shadow-[0_0_8px_rgba(0,150,255,0.7)]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary">
              Multi-surface · live sync
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
            One product · 4 surfaces
          </span>
        </div>

        {/* 2x2 grid of surface cards */}
        <div className="relative mt-6 grid grid-cols-2 gap-3 sm:gap-4">
          {WEBAPP_HERO_SURFACES.map((s, i) => {
            const Icon = s.icon;
            const isActive = i === 0;
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={cn(
                  "relative aspect-[4/3] overflow-hidden rounded-xl border bg-bg-base p-3",
                  isActive ? cn(a.border, a.shadow) : "border-white/10",
                )}
              >
                {/* Top-line shimmer on the active surface */}
                {isActive && (
                  <div
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r",
                      a.topLine,
                    )}
                  />
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Icon
                      className={cn(
                        "h-3.5 w-3.5",
                        isActive ? a.text : "text-text-faint",
                      )}
                      strokeWidth={1.7}
                    />
                    <span
                      className={cn(
                        "font-mono text-[8px] uppercase tracking-[0.16em]",
                        isActive ? a.text : "text-text-faint",
                      )}
                    >
                      {s.label}
                    </span>
                  </div>
                  {isActive && (
                    <span
                      className={cn(
                        "inline-flex items-center gap-1 rounded-full border bg-bg-base px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.14em]",
                        a.border,
                        a.text,
                      )}
                    >
                      <span className="h-1 w-1 rounded-full bg-brand-blue animate-pulse" />
                      Live
                    </span>
                  )}
                </div>

                {/* Stylised surface — 3 horizontal "row" placeholders */}
                <div className="mt-3 flex flex-col gap-1.5">
                  <div
                    className={cn(
                      "h-1.5 w-3/4 rounded-full",
                      isActive ? a.bgSoft : "bg-white/[0.04]",
                    )}
                  />
                  <div
                    className={cn(
                      "h-1.5 w-1/2 rounded-full",
                      isActive ? a.bgSoft : "bg-white/[0.04]",
                    )}
                  />
                  <div
                    className={cn(
                      "h-1.5 w-2/3 rounded-full",
                      isActive ? a.bgSoft : "bg-white/[0.04]",
                    )}
                  />
                </div>

                {/* Tile grid */}
                <div className="mt-3 grid grid-cols-3 gap-1">
                  {Array.from({ length: 6 }).map((_, j) => (
                    <div
                      key={j}
                      className={cn(
                        "aspect-square rounded-md border",
                        isActive
                          ? cn(a.border, a.bgSoft)
                          : "border-white/5 bg-white/[0.02]",
                      )}
                    />
                  ))}
                </div>

                {/* Footer role tag */}
                <div className="mt-3 flex items-center justify-between border-t border-white/5 pt-2 font-mono text-[8px] uppercase tracking-[0.14em] text-text-faint">
                  <span>{s.role}</span>
                  <span>v 2.4.1</span>
                </div>
              </motion.div>
            );
          })}

          {/* Sync indicator in the centre — a small "in sync" pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className={cn(
              "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border bg-bg-base px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] shadow-card",
              a.border,
              a.text,
            )}
          >
            <span className="flex items-center gap-1.5">
              <span
                className={cn(
                  "h-1.5 w-1.5 rounded-full animate-pulse",
                  a.bg,
                )}
              />
              In sync
            </span>
          </motion.div>
        </div>

        {/* Footer micro-stat */}
        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/5 pt-4 text-[10px] font-mono uppercase tracking-[0.18em] text-text-faint">
          <span>1 codebase · 1 design system · 1 record</span>
          <span className="ml-auto inline-flex items-center gap-1.5 text-brand-blue">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue animate-pulse-soft" />
            Edge · 12 ms
          </span>
        </div>
      </div>
    </div>
  );
}
