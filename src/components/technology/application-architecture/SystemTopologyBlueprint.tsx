"use client";

import { motion } from "framer-motion";
import {
  Globe2,
  ShieldCheck,
  Network,
  Database,
  Activity,
  Server,
  Cloud,
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * System Topology Blueprint — bespoke hero for /technology/application-architecture.
 *
 * Idiom: 4-layer architectural blueprint stacked vertically.
 *   01 Edge / CDN (3 region pins)
 *   02 API gateway (auth + rate limit + schema)
 *   03 Service mesh (4 microservices with health dots, async event bus)
 *   04 Data layer (Postgres + Cache + Vector + Blob)
 * A traveling request circle moves down through all 4 layers on a loop.
 * Right-side "Observability spine" with traces + metrics + logs.
 *
 * Distinct from ClusterTopologyMosaic (OpenShift-specific zones with
 * pod migration), RegionalTopologyMap (3 regions horizontally) — this
 * is generic enterprise app architecture as a vertical 4-layer stack
 * with an observability sidebar. Not used elsewhere on the site.
 */
export function SystemTopologyBlueprint() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.5rem] bg-brand-sky/[0.10] blur-3xl" />

      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-bg-elevated/70 backdrop-blur">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brand-sky/0 via-brand-sky/60 to-brand-sky/0" />

        {/* Chrome */}
        <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-brand-sky/60" />
              <span className="relative h-2 w-2 rounded-full bg-brand-sky" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
              platform.live · 99.97%
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand-sky">
            4 layers · multi-region
          </span>
        </div>

        {/* Body — 2 cols on lg+ */}
        <div className="relative grid grid-cols-1 gap-3 px-5 py-5 lg:grid-cols-12">
          {/* Layer stack */}
          <div className="relative space-y-2 lg:col-span-9">
            {/* Traveling request dot */}
            <motion.div
              aria-hidden
              animate={{
                top: ["0%", "25%", "55%", "85%", "100%"],
                opacity: [0, 1, 1, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatDelay: 0.6,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute left-2 z-10 h-2 w-2 -translate-y-1/2 rounded-full bg-brand-sky shadow-glow-sky"
            />

            <Layer
              num="01"
              icon={Globe2}
              label="Edge / CDN"
              tag="3 regions"
              description="Multi-region · sub-100ms · cached"
            >
              <div className="flex flex-wrap gap-1.5">
                {["asia-south1", "us-central1", "eu-west1"].map((r, i) => (
                  <span
                    key={r}
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full border px-1.5 py-0.5",
                      i === 0
                        ? "border-brand-sky/40 bg-brand-sky/10"
                        : "border-white/10 bg-white/[0.03]",
                    )}
                  >
                    <span
                      className={cn(
                        "h-1 w-1 rounded-full",
                        i === 0 ? "bg-brand-sky" : "bg-text-secondary",
                      )}
                    />
                    <span
                      className={cn(
                        "font-mono text-[8px] uppercase tracking-[0.12em]",
                        i === 0 ? "text-brand-sky" : "text-text-secondary",
                      )}
                    >
                      {r}
                    </span>
                  </span>
                ))}
              </div>
            </Layer>

            <Layer
              num="02"
              icon={ShieldCheck}
              label="API gateway"
              tag="auth · rate · schema"
              description="OAuth · per-tenant limits · 4xx structured"
            >
              <div className="flex flex-wrap gap-1.5">
                {["OAuth 2.0", "RBAC", "Schema ✓", "p95 · 84ms"].map((c, i) => (
                  <span
                    key={c}
                    className={cn(
                      "inline-flex items-center rounded-md border px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.12em]",
                      i === 3
                        ? "border-brand-sky/40 bg-brand-sky/10 text-brand-sky"
                        : "border-white/10 bg-white/[0.03] text-text-muted",
                    )}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </Layer>

            <Layer
              num="03"
              icon={Network}
              label="Service mesh"
              tag="4 svcs · async bus"
              description="Independent · retried · circuit-broken"
            >
              <div className="grid grid-cols-4 gap-1.5">
                {[
                  { name: "auth", state: "ok" },
                  { name: "core", state: "ok" },
                  { name: "ai", state: "live" },
                  { name: "billing", state: "ok" },
                ].map((s) => (
                  <div
                    key={s.name}
                    className={cn(
                      "relative flex flex-col items-center gap-0.5 rounded-md border px-1 py-1",
                      s.state === "live"
                        ? "border-brand-sky/40 bg-brand-sky/10"
                        : "border-white/10 bg-white/[0.03]",
                    )}
                  >
                    {s.state === "live" && (
                      <span className="absolute -top-0.5 -right-0.5 flex h-1.5 w-1.5">
                        <span className="absolute inset-0 animate-ping rounded-full bg-brand-sky/60" />
                        <span className="relative h-1.5 w-1.5 rounded-full bg-brand-sky" />
                      </span>
                    )}
                    <Server
                      className={cn(
                        "h-2.5 w-2.5",
                        s.state === "live"
                          ? "text-brand-sky"
                          : "text-text-secondary",
                      )}
                    />
                    <span
                      className={cn(
                        "font-mono text-[7px] uppercase tracking-[0.12em]",
                        s.state === "live"
                          ? "text-brand-sky"
                          : "text-text-muted",
                      )}
                    >
                      {s.name}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-1.5 flex items-center gap-1 text-text-faint">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-brand-sky/40 to-transparent" />
                <span className="font-mono text-[8px] uppercase tracking-[0.14em]">
                  event bus · async
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-brand-sky/40 to-transparent" />
              </div>
            </Layer>

            <Layer
              num="04"
              icon={Database}
              label="Data layer"
              tag="polyglot"
              description="Right tool per workload"
              active
            >
              <div className="grid grid-cols-4 gap-1.5">
                {[
                  { name: "SQL", sub: "tx" },
                  { name: "Cache", sub: "hot" },
                  { name: "Vector", sub: "RAG" },
                  { name: "Blob", sub: "files" },
                ].map((d) => (
                  <div
                    key={d.name}
                    className="flex flex-col items-center gap-0.5 rounded-md border border-brand-sky/30 bg-brand-sky/[0.06] px-1 py-1"
                  >
                    <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-brand-sky">
                      {d.name}
                    </span>
                    <span className="font-mono text-[7px] text-text-faint">
                      {d.sub}
                    </span>
                  </div>
                ))}
              </div>
            </Layer>
          </div>

          {/* Observability spine */}
          <div className="lg:col-span-3">
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-brand-sky">
              Observability
            </p>
            <div className="mt-2 flex flex-row gap-1.5 lg:flex-col">
              {[
                { icon: Activity, label: "Traces", v: "1.2M /day" },
                { icon: Cloud, label: "Metrics", v: "p99 ✓" },
                { icon: Server, label: "Logs", v: "Audit on" },
              ].map((o) => {
                const Icon = o.icon;
                return (
                  <div
                    key={o.label}
                    className="flex flex-1 flex-col items-start gap-0.5 rounded-md border border-white/10 bg-white/[0.02] px-2 py-1.5"
                  >
                    <div className="flex items-center gap-1">
                      <Icon className="h-2.5 w-2.5 text-brand-sky" />
                      <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-text-secondary">
                        {o.label}
                      </span>
                    </div>
                    <span className="font-mono text-[8px] tabular-nums text-text-faint">
                      {o.v}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-wrap items-center gap-3 border-t border-white/[0.06] px-5 py-3">
          <span className="inline-flex items-center gap-1 rounded-full border border-brand-sky/30 bg-brand-sky/10 px-2 py-0.5">
            <ShieldCheck className="h-2.5 w-2.5 text-brand-sky" />
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-brand-sky">
              SOC2 · DPDP-ready
            </span>
          </span>
          <span className="ml-auto font-mono text-[9px] text-text-faint tabular-nums">
            MTTR · 4 min
          </span>
        </div>
      </div>

      {/* Floating chips */}
      <motion.div
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute -top-3 -right-2 hidden lg:flex items-center gap-1.5 rounded-full border border-brand-sky/30 bg-bg-elevated/95 px-3 py-1.5 shadow-glow-sky backdrop-blur"
      >
        <Globe2 className="h-3 w-3 text-brand-sky" />
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-brand-sky">
          Multi-region · failover
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute -bottom-3 -left-2 flex items-center gap-1.5 rounded-full border border-white/15 bg-bg-elevated/95 px-3 py-1.5 backdrop-blur"
      >
        <Activity className="h-3 w-3 text-brand-sky" />
        <span className="font-mono text-[10px] text-text-secondary">
          0 incidents · 24h
        </span>
      </motion.div>
    </div>
  );
}

/* ---------------- Sub-components ---------------- */

function Layer({
  num,
  icon: Icon,
  label,
  tag,
  description,
  active = false,
  children,
}: {
  num: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  tag: string;
  description: string;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border p-3 pl-6 transition-all",
        active
          ? "border-brand-sky/40 bg-brand-sky/[0.04] shadow-glow-sky"
          : "border-white/10 bg-bg-base/40",
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon className="h-3 w-3 text-brand-sky" />
          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-text-faint tabular-nums">
            {num}
          </span>
          <span
            className={cn(
              "font-mono text-[10px] uppercase tracking-[0.16em]",
              active ? "text-brand-sky" : "text-text-secondary",
            )}
          >
            {label}
          </span>
        </div>
        <span
          className={cn(
            "inline-flex items-center rounded-full border px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.12em]",
            active
              ? "border-brand-sky/40 bg-brand-sky/10 text-brand-sky"
              : "border-white/10 bg-white/[0.03] text-text-muted",
          )}
        >
          {tag}
        </span>
      </div>
      <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.14em] text-text-faint">
        {description}
      </p>
      <div className="mt-2">{children}</div>
    </div>
  );
}
