"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  Shield,
} from "lucide-react";

/**
 * /red-hat/openshift — Cluster Topology Mosaic hero.
 *
 * Idiom: full-width architectural blueprint of a multi-zone OpenShift
 * cluster.
 *
 *   ┌─ Control Plane (3 master HA · pulsing dots) ──────────────┐
 *   │   m1   m2*  m3                              [ACS shield]  │
 *   ├───────────────────────────────────────────────────────────┤
 *   │  Zone 01           Zone 02           Zone 03 · Edge SNO   │
 *   │  ▢▢▢▢ workers     ▢▢▢▢ workers       ▢ SNO                │
 *   │  • • •  pods      • •  pods           • pod                │
 *   │       ↘ pod migrating to zone 02 (animated)               │
 *   ├───────────────────────────────────────────────────────────┤
 *   │  Service mesh: zone 01 ⇄ zone 02 ⇄ zone 03 (traffic pulse)│
 *   └───────────────────────────────────────────────────────────┘
 *
 * Motion:
 *   • One pod (red dot) animates from zone 01 → zone 02 every 4s
 *     (rolling-update narrative)
 *   • ACS shield pulses with green ping ring
 *   • Master node dots pulse staggered (3 HA visibility)
 *   • Service mesh traffic dots travel between zones
 *
 * Distinct from FactoryDigitalTwin (heatmap-style sensor zones with
 * alert pulse) — that's industrial sensors. This is COMPUTE
 * infrastructure with pod migration and service-mesh traffic — a
 * distinctly different idiom even though both use a "zoned"
 * blueprint frame.
 */
export function ClusterTopologyMosaic() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-12 rounded-[3rem] bg-redhat/[0.06] blur-3xl"
      />

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-bg-elevated to-bg-surface p-6 shadow-card md:p-8 lg:p-10">
        {/* Chrome */}
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-redhat shadow-[0_0_8px_rgba(238,0,0,0.7)] animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary">
              Cluster topology · Production · 3 zones
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
            18 worker nodes · 3 master HA · 1 SNO edge
          </span>
        </div>

        {/* ─── Control plane bar ───────────────────────────────────── */}
        <div className="mt-5 flex items-center gap-3 rounded-xl border border-white/10 bg-bg-base/60 p-3">
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-text-faint">
            Control plane
          </p>
          <div className="flex items-center gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 rounded-md border border-redhat/30 bg-redhat/10 px-2 py-1"
              >
                <motion.span
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{
                    duration: 2,
                    delay: i * 0.5,
                    repeat: Infinity,
                  }}
                  className="h-1.5 w-1.5 rounded-full bg-redhat"
                />
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-redhat">
                  m{i + 1}
                </span>
              </div>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-2">
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2.4, repeat: Infinity }}
                className="absolute inset-0 rounded-md bg-brand-green/20"
              />
              <div className="relative inline-flex items-center gap-1.5 rounded-md border border-brand-green/30 bg-brand-green/10 px-2 py-1">
                <Shield className="h-3 w-3 text-brand-green" />
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand-green">
                  ACS · enforcing
                </span>
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.03] px-2 py-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-text-secondary">
                etcd · backed up
              </span>
            </div>
          </div>
        </div>

        {/* ─── 3-zone mosaic ──────────────────────────────────────── */}
        <div className="relative mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
          {[
            {
              zone: "Zone 01",
              region: "asia-south1-a",
              workers: 6,
              role: "primary",
            },
            {
              zone: "Zone 02",
              region: "asia-south1-b",
              workers: 6,
              role: "primary",
            },
            {
              zone: "Zone 03 · Edge SNO",
              region: "edge / branch",
              workers: 1,
              role: "sno",
            },
          ].map((z, zi) => (
            <motion.div
              key={z.zone}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.2 + zi * 0.15 }}
              className="relative overflow-hidden rounded-xl border border-white/10 bg-bg-base p-4"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-redhat/40 via-redhat/0 to-redhat/0" />

              <div className="flex items-center justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-redhat">
                  {z.zone}
                </p>
                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-text-faint">
                  {z.region}
                </span>
              </div>

              {/* Worker nodes grid */}
              <div className="mt-3 grid grid-cols-3 gap-1.5">
                {Array.from({ length: z.workers }).map((_, wi) => (
                  <div
                    key={wi}
                    className="aspect-square rounded-md border border-redhat/20 bg-redhat/[0.06] p-1.5"
                  >
                    <div className="flex h-full w-full items-center justify-center">
                      <Boxes className="h-3 w-3 text-redhat/70" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Pod dots overlay */}
              <div className="mt-3 flex flex-wrap gap-1 border-t border-white/5 pt-3">
                {Array.from({ length: z.role === "sno" ? 4 : 8 }).map((_, pi) => (
                  <span
                    key={pi}
                    className="h-1.5 w-1.5 rounded-full bg-redhat/60"
                  />
                ))}
                <span className="ml-auto font-mono text-[9px] uppercase tracking-[0.16em] text-text-faint">
                  {z.role === "sno" ? "4 pods" : "32 pods"}
                </span>
              </div>

              {/* Animated migrating pod (zone 01 only, exits right) */}
              {zi === 0 && (
                <motion.div
                  animate={{ x: [0, 240, 240], opacity: [1, 1, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute bottom-3 left-3 flex items-center gap-1 rounded-full border border-redhat/40 bg-bg-elevated px-1.5 py-0.5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-redhat shadow-[0_0_6px_rgba(238,0,0,0.7)]" />
                  <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-redhat">
                    pod
                  </span>
                </motion.div>
              )}
            </motion.div>
          ))}

          {/* Service mesh edges (decorative SVG between zones · md+) */}
          <svg
            viewBox="0 0 100 8"
            className="pointer-events-none absolute inset-x-0 top-1/2 hidden h-2 w-full -translate-y-1/2 md:block"
            preserveAspectRatio="none"
            aria-hidden
          >
            <line
              x1="33"
              y1="4"
              x2="34"
              y2="4"
              stroke="#EE0000"
              strokeOpacity="0.4"
              strokeWidth="0.4"
              strokeDasharray="2 1"
            />
            <line
              x1="66"
              y1="4"
              x2="67"
              y2="4"
              stroke="#EE0000"
              strokeOpacity="0.4"
              strokeWidth="0.4"
              strokeDasharray="2 1"
            />
          </svg>
        </div>

        {/* ─── DevSecOps strip ────────────────────────────────────── */}
        <div className="mt-4 flex flex-wrap items-center gap-2 rounded-xl border border-white/10 bg-bg-base/60 p-3 text-[10px] font-mono uppercase tracking-[0.16em]">
          <span className="text-text-faint">Pipeline ·</span>
          {["Tekton", "ArgoCD", "Quay+Clair", "Vault", "ACS"].map((t, i) => (
            <span
              key={t}
              className="inline-flex items-center gap-1 rounded-md border border-redhat/30 bg-redhat/10 px-2 py-0.5 text-redhat"
            >
              <motion.span
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.8, delay: i * 0.3, repeat: Infinity }}
                className="h-1 w-1 rounded-full bg-redhat"
              />
              {t}
            </span>
          ))}
          <span className="ml-auto inline-flex items-center gap-1.5 text-brand-green">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-green animate-pulse" />
            Healthy · 99.97% uptime
          </span>
        </div>
      </div>
    </div>
  );
}
