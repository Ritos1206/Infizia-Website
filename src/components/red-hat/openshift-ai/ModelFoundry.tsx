"use client";

import { motion } from "framer-motion";
import { Cpu, Database, Sparkles, Atom } from "lucide-react";

/**
 * /red-hat/openshift-ai — Model Foundry hero.
 *
 * Idiom: full-width "forge floor" with 3 stages:
 *
 *   ┌──────────────────────────────────────────────────────────┐
 *   │  Foundation models · [Granite] [Llama] [Mistral]         │
 *   ├──────────────────────────────────────────────────────────┤
 *   │  Data inlet  →  TRAINING CRUCIBLE  →  Inference outlet   │
 *   │  (3 chunks      (rotating layer        (output stream     │
 *   │   streaming)     cube · glow)           with confidence)  │
 *   ├──────────────────────────────────────────────────────────┤
 *   │  GPU rack · 4 utilization slats · 70% / 92% / 88% / 76%   │
 *   └──────────────────────────────────────────────────────────┘
 *
 * Motion:
 *   • 3 data chunks animate in from the LEFT toward the crucible
 *   • the crucible has 3 stacked "model layer" rectangles that
 *     rotate gently and pulse (telegraphs ongoing fine-tuning)
 *   • inference output dots stream out the RIGHT carrying small
 *     confidence labels (96% · 99% · 94%)
 *   • GPU utilization bars animate to fill on viewport-enter
 *   • foundation-model chips at the top — one is "active" (pulse)
 *
 * Distinct from Agent Reasoning Console (vertical reasoning trace
 * with timestamps + agent attribution) — this is a horizontal
 * data-flow / forge metaphor with a 3D-feeling crucible at the
 * centre. Different mental model, different visual rhythm.
 */
export function ModelFoundry() {
  const foundationModels = [
    { name: "Granite 13B", active: true },
    { name: "Llama 3", active: false },
    { name: "Mistral", active: false },
    { name: "Code Llama", active: false },
  ];

  const gpuStats = [
    { id: "GPU-0", util: 70 },
    { id: "GPU-1", util: 92 },
    { id: "GPU-2", util: 88 },
    { id: "GPU-3", util: 76 },
  ];

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
              Model foundry · live training run
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
            On-prem · data sovereign · OpenShift AI
          </span>
        </div>

        {/* ─── Foundation model chips ──────────────────────────────── */}
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-text-faint">
            Foundation models
          </span>
          {foundationModels.map((m) => (
            <span
              key={m.name}
              className={[
                "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em]",
                m.active
                  ? "border-redhat/40 bg-redhat/15 text-redhat"
                  : "border-white/10 bg-white/[0.03] text-text-secondary",
              ].join(" ")}
            >
              <span
                className={[
                  "h-1.5 w-1.5 rounded-full",
                  m.active ? "bg-redhat animate-pulse" : "bg-text-faint",
                ].join(" ")}
              />
              {m.name}
              {m.active && <span className="ml-1 text-[9px]">· fine-tuning</span>}
            </span>
          ))}
        </div>

        {/* ─── 3-stage forge floor ────────────────────────────────── */}
        <div className="mt-6 grid grid-cols-12 gap-3 lg:gap-4">
          {/* Left · Data inlet */}
          <div className="col-span-12 lg:col-span-4 relative overflow-hidden rounded-xl border border-white/10 bg-bg-base p-4">
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-text-faint">
              01 · Data inlet
            </p>
            <p className="mt-2 font-display text-base font-semibold text-white">
              On-prem corpus
            </p>
            <p className="mt-1 text-[11px] text-text-secondary">
              MinIO · Ceph · 14M docs
            </p>

            {/* Animated streaming chunks */}
            <div className="relative mt-5 h-16">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ x: 0, opacity: 0.2 }}
                  animate={{
                    x: ["0%", "85%", "100%"],
                    opacity: [0.2, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-1/2 -translate-y-1/2 flex items-center gap-1.5 rounded-md border border-redhat/30 bg-redhat/[0.08] px-2 py-1"
                >
                  <Database className="h-2.5 w-2.5 text-redhat" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-redhat">
                    chunk
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-3 flex items-center justify-between border-t border-white/5 pt-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-text-faint">
                Throughput
              </span>
              <span className="font-mono text-[10px] text-redhat">
                4.2k tok/s
              </span>
            </div>
          </div>

          {/* Centre · Training crucible */}
          <div className="col-span-12 lg:col-span-4 relative overflow-hidden rounded-xl border border-redhat/40 bg-gradient-to-br from-redhat/[0.12] to-bg-elevated p-4 shadow-[0_0_40px_-10px_rgba(238,0,0,0.5)]">
            <div className="pointer-events-none absolute -inset-12 bg-redhat/15 blur-3xl" />

            <div className="relative">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-redhat">
                02 · Training crucible
              </p>
              <p className="mt-2 font-display text-base font-semibold text-white">
                InstructLab fine-tune
              </p>
              <p className="mt-1 text-[11px] text-text-secondary">
                Granite-13B · 3 epochs · 4 GPU
              </p>

              {/* 3 stacked rotating model layers */}
              <div className="relative mt-5 mx-auto h-24 w-24">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      rotate: i % 2 === 0 ? 360 : -360,
                      opacity: [0.3, 0.85, 0.3],
                    }}
                    transition={{
                      rotate: {
                        duration: 8 + i * 2,
                        repeat: Infinity,
                        ease: "linear",
                      },
                      opacity: {
                        duration: 3,
                        delay: i * 0.6,
                        repeat: Infinity,
                      },
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      transform: `scale(${1 - i * 0.18})`,
                    }}
                  >
                    <div className="h-full w-full rounded-lg border border-redhat/40 bg-redhat/[0.08]" />
                  </motion.div>
                ))}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Atom className="h-7 w-7 text-redhat drop-shadow-[0_0_8px_rgba(238,0,0,0.7)]" />
                </div>
              </div>

              <div className="mt-4 border-t border-white/5 pt-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-text-faint">
                    Loss
                  </span>
                  <span className="font-mono text-[10px] text-redhat">
                    0.084
                  </span>
                </div>
                <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/[0.06]">
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "76%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                    className="h-full bg-gradient-to-r from-redhat to-brand-amber"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right · Inference outlet */}
          <div className="col-span-12 lg:col-span-4 relative overflow-hidden rounded-xl border border-white/10 bg-bg-base p-4">
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-text-faint">
              03 · Inference outlet
            </p>
            <p className="mt-2 font-display text-base font-semibold text-white">
              Production endpoint
            </p>
            <p className="mt-1 text-[11px] text-text-secondary">
              KServe · /v1/models/granite
            </p>

            <div className="relative mt-5 h-16">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{
                    x: ["100%", "20%", "0%"],
                    opacity: [0, 1, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-1/2 right-0 -translate-y-1/2 flex items-center gap-1.5 rounded-md border border-brand-green/30 bg-brand-green/[0.08] px-2 py-1"
                >
                  <Sparkles className="h-2.5 w-2.5 text-brand-green" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-brand-green">
                    {[96, 99, 94][i]}%
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-3 flex items-center justify-between border-t border-white/5 pt-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-text-faint">
                Latency
              </span>
              <span className="font-mono text-[10px] text-brand-green">
                42 ms p95
              </span>
            </div>
          </div>
        </div>

        {/* ─── GPU rack utilization slats ─────────────────────────── */}
        <div className="mt-4 rounded-xl border border-white/10 bg-bg-base/60 p-4">
          <div className="flex items-center justify-between">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
              GPU rack · NVIDIA operator
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-redhat">
              <Cpu className="inline h-3 w-3 mr-1" />4 × A100
            </p>
          </div>

          <div className="mt-3 grid grid-cols-4 gap-2">
            {gpuStats.map((g, i) => (
              <div key={g.id} className="flex flex-col gap-1">
                <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.16em]">
                  <span className="text-text-faint">{g.id}</span>
                  <span className="text-redhat">{g.util}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: `${g.util}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.1,
                      delay: 0.3 + i * 0.1,
                      ease: "easeOut",
                    }}
                    className="h-full bg-gradient-to-r from-redhat to-brand-amber"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer ribbon */}
        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/5 pt-4 text-[10px] font-mono uppercase tracking-[0.18em] text-text-faint">
          <span>InstructLab</span>
          <span className="h-1 w-1 rounded-full bg-redhat" />
          <span>KServe / ModelMesh</span>
          <span className="h-1 w-1 rounded-full bg-redhat" />
          <span>MLflow</span>
          <span className="h-1 w-1 rounded-full bg-redhat" />
          <span>Prometheus + Grafana</span>
          <span className="ml-auto inline-flex items-center gap-1.5 text-brand-green">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-green animate-pulse" />
            Audit log · enabled
          </span>
        </div>
      </div>
    </div>
  );
}
