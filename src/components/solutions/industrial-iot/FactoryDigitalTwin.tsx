"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { ACCENTS } from "@/lib/product-accents";
import { cn } from "@/lib/utils";
import { FACTORY_TWIN_ASSETS } from "@/content/solutions/industrial-iot";

/**
 * Industrial Intelligence & IoT — Factory Digital Twin hero visual.
 *
 * A top-down isometric-feel "blueprint" of a 3-zone facility. Each zone
 * is a soft rectangle on the floor plan; each asset is a labelled
 * marker with a status color (ok / watch / alert). One asset is the
 * live anomaly hotspot, with a pulsing alert ring around it and a
 * floating callout pinned to it.
 *
 * Idiom note: distinct from OpsSight's product-page hero (a
 * dashboard with sparklines + zone map list) and signal-to-action
 * 4-stage flow. The actual top-down floor-plan blueprint with
 * isometric-feel shading and a live anomaly hotspot is new.
 *
 * Responsive:
 *   • <md: vertical stack of 3 zones with asset chips listed underneath
 *   • md+: full SVG floor plan
 */
export function FactoryDigitalTwin() {
  const a = ACCENTS.emerald;

  return (
    <div className="relative">
      {/* Ambient emerald glow */}
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
            <span className="h-2 w-2 rounded-full bg-brand-emerald shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary">
              Digital twin · Live
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
            Site · Pit-04 · 9 assets
          </span>
        </div>

        {/* ── Desktop top-down floor plan (md+) ──────────────────────── */}
        <div className="relative mt-6 hidden h-[320px] md:block">
          <svg
            viewBox="0 0 480 300"
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden
          >
            <defs>
              <pattern id="grid-floor" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeOpacity="0.04" strokeWidth="1" />
              </pattern>
              <linearGradient id="zone-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#34d399" stopOpacity="0.06" />
                <stop offset="100%" stopColor="#34d399" stopOpacity="0.02" />
              </linearGradient>
            </defs>

            <rect x="0" y="0" width="480" height="300" fill="url(#grid-floor)" />

            {/* Three zone rectangles */}
            <motion.rect
              x="20"
              y="40"
              width="160"
              height="220"
              rx="10"
              fill="url(#zone-fill)"
              stroke="#34d399"
              strokeOpacity="0.25"
              strokeWidth="1"
              strokeDasharray="3 3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            />
            <motion.rect
              x="200"
              y="40"
              width="120"
              height="220"
              rx="10"
              fill="url(#zone-fill)"
              stroke="#34d399"
              strokeOpacity="0.25"
              strokeWidth="1"
              strokeDasharray="3 3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            />
            <motion.rect
              x="340"
              y="40"
              width="120"
              height="220"
              rx="10"
              fill="url(#zone-fill)"
              stroke="#34d399"
              strokeOpacity="0.25"
              strokeWidth="1"
              strokeDasharray="3 3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />

            {/* Zone labels */}
            <text x="100" y="30" textAnchor="middle" className="fill-text-faint" fontSize="9" fontFamily="JetBrains Mono">ZONE 01</text>
            <text x="260" y="30" textAnchor="middle" className="fill-text-faint" fontSize="9" fontFamily="JetBrains Mono">ZONE 02</text>
            <text x="400" y="30" textAnchor="middle" className="fill-text-faint" fontSize="9" fontFamily="JetBrains Mono">ZONE 03</text>

            {/* Asset markers */}
            {FACTORY_TWIN_ASSETS.map((asset, i) => {
              const isAlert = asset.status === "alert";
              const isWatch = asset.status === "watch";
              const fill =
                asset.status === "ok"
                  ? "#34d399"
                  : asset.status === "watch"
                  ? "#fbbf24"
                  : "#fb7185";

              return (
                <motion.g
                  key={asset.id}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.4,
                    delay: 0.4 + i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {/* Watch / alert pulse ring */}
                  {(isAlert || isWatch) && (
                    <motion.circle
                      cx={asset.x}
                      cy={asset.y}
                      r="14"
                      fill="none"
                      stroke={fill}
                      strokeWidth="1"
                      strokeOpacity={isAlert ? 0.7 : 0.4}
                      animate={{
                        r: [14, 26, 14],
                        opacity: [isAlert ? 0.7 : 0.4, 0, isAlert ? 0.7 : 0.4],
                      }}
                      transition={{
                        duration: isAlert ? 1.6 : 2.4,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                    />
                  )}
                  <circle cx={asset.x} cy={asset.y} r="6" fill={fill} />
                  <circle
                    cx={asset.x}
                    cy={asset.y}
                    r="3"
                    fill="#0A1628"
                  />
                </motion.g>
              );
            })}
          </svg>

          {/* Asset label chips */}
          {FACTORY_TWIN_ASSETS.map((asset, i) => {
            const Icon = asset.icon;
            const offsetY = asset.y > 200 ? -28 : 16;
            const stateColor =
              asset.status === "alert"
                ? "border-brand-rose/50 text-brand-rose"
                : asset.status === "watch"
                ? "border-brand-amber/50 text-brand-amber"
                : "border-brand-emerald/40 text-brand-emerald";
            return (
              <motion.div
                key={asset.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.06 }}
                className={cn(
                  "absolute inline-flex items-center gap-1 rounded border bg-bg-base/90 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.14em]",
                  stateColor,
                )}
                style={{
                  left: `${(asset.x / 480) * 100}%`,
                  top: `${asset.y + offsetY}px`,
                  transform: "translateX(-50%)",
                }}
              >
                <Icon className="h-2.5 w-2.5" strokeWidth={1.8} />
                <span>{asset.label}</span>
              </motion.div>
            );
          })}

          {/* Anomaly callout */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute right-2 top-2 max-w-[180px] rounded-lg border border-brand-rose/40 bg-bg-base/95 p-2 shadow-[0_0_24px_rgba(251,113,133,0.2)]"
          >
            <div className="flex items-center gap-1.5">
              <AlertTriangle className="h-3 w-3 text-brand-rose" />
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-brand-rose">
                Anomaly · 92% conf
              </p>
            </div>
            <p className="mt-1 font-display text-[10px] font-semibold text-white">
              Bearing B2 · vibration drift
            </p>
            <p className="mt-0.5 text-[10px] leading-snug text-text-muted">
              Recommended: schedule inspection in next 24h
            </p>
          </motion.div>
        </div>

        {/* ── Mobile zone stack ──────────────────────────────────────── */}
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3 md:hidden">
          {(["Zone 01", "Zone 02", "Zone 03"] as const).map((zone, idx) => {
            const assets = FACTORY_TWIN_ASSETS.filter((x) => x.zone === zone);
            return (
              <motion.div
                key={zone}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={cn(
                  "rounded-xl border bg-bg-base p-3",
                  a.border,
                )}
              >
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-text-faint">
                  {zone}
                </p>
                <ul className="mt-2 flex flex-col gap-1">
                  {assets.map((asset) => {
                    const Icon = asset.icon;
                    return (
                      <li
                        key={asset.id}
                        className="flex items-center gap-2 text-[10px]"
                      >
                        <Icon
                          className={cn(
                            "h-3 w-3 shrink-0",
                            asset.status === "ok" && "text-brand-emerald",
                            asset.status === "watch" && "text-brand-amber",
                            asset.status === "alert" && "text-brand-rose",
                          )}
                          strokeWidth={1.7}
                        />
                        <span className="text-text-secondary">{asset.label}</span>
                        {asset.status === "alert" && (
                          <span className="ml-auto rounded border border-brand-rose/40 bg-brand-rose/10 px-1 py-px font-mono text-[8px] uppercase text-brand-rose">
                            Alert
                          </span>
                        )}
                        {asset.status === "watch" && (
                          <span className="ml-auto rounded border border-brand-amber/40 bg-brand-amber/10 px-1 py-px font-mono text-[8px] uppercase text-brand-amber">
                            Watch
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-white/5 pt-3 text-[10px] font-mono uppercase tracking-[0.18em] text-text-faint">
          <span>3 zones · 9 assets · 1 anomaly</span>
          <span className="ml-auto inline-flex items-center gap-1.5 text-brand-emerald">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-emerald animate-pulse-soft" />
            Twin live
          </span>
        </div>
      </div>
    </div>
  );
}
