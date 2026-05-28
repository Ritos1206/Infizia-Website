"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ACCENTS } from "@/lib/product-accents";
import { cn } from "@/lib/utils";
import { GCP_REGIONS } from "@/content/services/google-cloud";

/**
 * Google Cloud — Regional Topology Map hero visual.
 *
 * 3 region cards laid out horizontally (asia-south1 · us-central1 ·
 * europe-west1). Each card carries 3 GCP service tiles (compute, data,
 * AI/network). One region (us-central1) is marked as primary with a
 * "Primary" pill. Traffic indicators connect the regions with animated
 * pulse dots to argue "multi-region · always".
 *
 * Idiom note: distinct from FactoryDigitalTwin (top-down floor plan
 * with sensor markers) and InsightConstellation (star-chart graph).
 * The horizontal 3-region card layout with cross-region traffic
 * indicators is genuinely new.
 *
 * Responsive:
 *   • <md: vertical stack of 3 region cards (no traffic SVG)
 *   • md+: horizontal layout with traffic SVG between regions
 */
export function RegionalTopologyMap() {
  const a = ACCENTS.sky;

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
            <span className="h-2 w-2 rounded-full bg-brand-sky shadow-[0_0_8px_rgba(56,189,248,0.7)]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary">
              GCP topology · 3 regions
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
            Global p99 · 84 ms
          </span>
        </div>

        {/* ── Desktop horizontal topology (md+) ──────────────────────── */}
        <div className="relative mt-6 hidden md:block">
          {/* Traffic SVG — animated pulses between regions */}
          <svg
            viewBox="0 0 600 60"
            className="absolute inset-x-0 top-1/2 z-0 h-12 w-full -translate-y-1/2"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="region-edge" x1="0" x2="1">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* Two horizontal connector lines */}
            <line
              x1="100"
              y1="30"
              x2="300"
              y2="30"
              stroke="url(#region-edge)"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
            <line
              x1="300"
              y1="30"
              x2="500"
              y2="30"
              stroke="url(#region-edge)"
              strokeWidth="1"
              strokeDasharray="3 3"
            />

            {/* Traveling pulses */}
            <motion.circle
              r="3"
              fill="#7dd3fc"
              animate={{ cx: [100, 300, 100], cy: 30 }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.circle
              r="3"
              fill="#7dd3fc"
              animate={{ cx: [500, 300, 500], cy: 30 }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
          </svg>

          <div className="relative grid grid-cols-3 gap-4">
            {GCP_REGIONS.map((region, i) => (
              <motion.div
                key={region.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={cn(
                  "relative rounded-xl border bg-bg-base p-3",
                  region.isPrimary
                    ? cn(a.border, a.shadow)
                    : "border-white/10",
                )}
              >
                {region.isPrimary && (
                  <div
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r",
                      a.topLine,
                    )}
                  />
                )}

                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      "font-mono text-[9px] uppercase tracking-[0.18em]",
                      region.isPrimary ? a.text : "text-text-faint",
                    )}
                  >
                    {region.label}
                  </span>
                  {region.isPrimary && (
                    <span
                      className={cn(
                        "inline-flex items-center gap-1 rounded-full border bg-bg-base px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.14em]",
                        a.border,
                        a.text,
                      )}
                    >
                      <span
                        className={cn(
                          "h-1 w-1 rounded-full animate-pulse",
                          a.bg,
                        )}
                      />
                      Primary
                    </span>
                  )}
                </div>

                <p className="mt-1 font-display text-sm font-semibold text-white">
                  {region.location}
                </p>

                <div className="mt-3 space-y-1.5">
                  {region.services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <div
                        key={service.name}
                        className={cn(
                          "flex items-center gap-1.5 rounded-md border bg-bg-elevated/60 p-1.5",
                          a.border,
                        )}
                      >
                        <Icon
                          className={cn("h-3 w-3", a.text)}
                          strokeWidth={1.7}
                        />
                        <span className="font-mono text-[10px] text-text-secondary">
                          {service.name}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-white/5 pt-2 font-mono text-[8px] uppercase tracking-[0.14em] text-text-faint">
                  <span>cpu · 47%</span>
                  <span>mem · 62%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Mobile vertical stack ──────────────────────────────────── */}
        <div className="mt-6 flex flex-col gap-2 md:hidden">
          {GCP_REGIONS.map((region, i) => (
            <motion.div
              key={region.id}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={cn(
                "rounded-xl border bg-bg-base p-3",
                region.isPrimary
                  ? cn(a.border, a.shadow)
                  : "border-white/10",
              )}
            >
              <div className="flex items-center justify-between">
                <span
                  className={cn(
                    "font-mono text-[9px] uppercase tracking-[0.18em]",
                    region.isPrimary ? a.text : "text-text-faint",
                  )}
                >
                  {region.label} · {region.location}
                </span>
                {region.isPrimary && (
                  <span
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full border bg-bg-base px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.14em]",
                      a.border,
                      a.text,
                    )}
                  >
                    Primary
                  </span>
                )}
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                {region.services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={service.name}
                      className={cn(
                        "flex items-center gap-1 rounded-md border bg-bg-elevated/60 px-1.5 py-0.5",
                        a.border,
                      )}
                    >
                      <Icon
                        className={cn("h-3 w-3", a.text)}
                        strokeWidth={1.7}
                      />
                      <span className="font-mono text-[10px] text-text-secondary">
                        {service.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/5 pt-4">
          <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono uppercase tracking-[0.18em] text-text-faint">
            <span>3 regions · 9 services · 1 control plane</span>
            <span className="inline-flex items-center gap-1.5 text-brand-sky">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-sky animate-pulse-soft" />
              Healthy
            </span>
          </div>

          {/* Google Cloud partner badge — white pill, tightly-cropped logo */}
          <div className="inline-flex items-center rounded-md border border-white/10 bg-white px-2.5 py-1 shadow-card">
            <Image
              src="/gcp-logo.png"
              alt="Google Cloud"
              width={2333}
              height={386}
              className="h-5 w-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
