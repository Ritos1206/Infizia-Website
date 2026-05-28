"use client";

import { motion } from "framer-motion";
import { Check, FileCode2, Zap } from "lucide-react";

/**
 * /red-hat/ansible — Automation Orchestra hero.
 *
 * Idiom: full-width 3-row composition.
 *
 *   ┌─ Row 1 · Playbook editor (typing) ─────────────────────────┐
 *   │  - hosts: all                                              │
 *   │  - tasks:                                                  │
 *   │      • install_security_baseline                           │
 *   │      • apply_cis_remediation                               │
 *   ├─ Row 2 · Execution wave (5 nodes fanned out from playbook)─┤
 *   │     ┌────┐  ┌────┐  ┌────┐  ┌────┐  ┌────┐                 │
 *   │     │ n1 │  │ n2 │  │ n3 │  │ n4 │  │ n5 │                 │
 *   ├─ Row 3 · Results matrix (8x4 cells flipping gray→green) ───┤
 *   │  ▢▢▢▢▢▢▢▢                                                  │
 *   │  ▢▢▢▢▢▢▢▢   ← cells flip green sequentially                │
 *   │  ▢▢▢▢▢▢▢▢                                                  │
 *   │  ▢▢▢▢▢▢▢▢                                                  │
 *   └────────────────────────────────────────────────────────────┘
 *
 * Right side has an EDA panel pulsing whenever an alert "fires" and
 * triggers a playbook automatically.
 *
 * Distinct from Signal-to-Action (4-stage horizontal flow following ONE
 * signal) — this is MANY tasks executing in PARALLEL across a node
 * fleet, with a results matrix that shows the MULTI-NODE convergence.
 */
export function AutomationOrchestra() {
  // Playbook task lines (rendered with typing-cursor-style staggered reveal).
  const playbookLines = [
    "- hosts: production",
    "  become: yes",
    "  roles:",
    "    - rhel-cis-baseline",
    "    - patch-critical-cves",
  ];

  // Execution wave: 5 target nodes
  const nodes = ["web-01", "web-02", "db-01", "db-02", "edge-01"];

  // Results matrix: 8 cols × 4 rows = 32 cells. We'll flip them green
  // in a sweep order using a small framer animation.
  const ROWS = 4;
  const COLS = 8;
  const totalCells = ROWS * COLS;

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
              Ansible orchestra · live execution
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
            5 nodes · 32 tasks · 0 failed
          </span>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-12">
          {/* ─── Left column · Playbook + execution + results ──────── */}
          <div className="lg:col-span-9 flex flex-col gap-3">
            {/* Row 1 · Playbook editor */}
            <div className="rounded-xl border border-white/10 bg-bg-base p-4 font-mono">
              <div className="mb-3 flex items-center justify-between border-b border-white/5 pb-2">
                <div className="flex items-center gap-2">
                  <FileCode2 className="h-3.5 w-3.5 text-redhat" />
                  <span className="text-[10px] uppercase tracking-[0.18em] text-text-faint">
                    cis-baseline.yml
                  </span>
                </div>
                <span className="text-[9px] uppercase tracking-[0.16em] text-redhat">
                  ▶ run
                </span>
              </div>
              <div className="flex flex-col gap-1 text-[12px] leading-relaxed">
                {playbookLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1 + i * 0.12,
                    }}
                    className="flex gap-3"
                  >
                    <span className="w-4 text-right text-text-faint">
                      {i + 1}
                    </span>
                    <span className="text-text-secondary">{line}</span>
                  </motion.div>
                ))}
                <motion.div
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="ml-7 mt-0.5 inline-block h-3 w-1.5 bg-redhat"
                />
              </div>
            </div>

            {/* Row 2 · Execution wave (fan-out lines + node cards) */}
            <div className="relative rounded-xl border border-white/10 bg-bg-base p-4">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
                Execution wave · 5 targets
              </p>

              {/* SVG fan-out connector */}
              <svg
                viewBox="0 0 100 30"
                className="absolute inset-x-4 top-10 h-12 w-[calc(100%-2rem)]"
                preserveAspectRatio="none"
                aria-hidden
              >
                {[10, 30, 50, 70, 90].map((x, i) => (
                  <motion.line
                    key={i}
                    x1="50"
                    y1="0"
                    x2={x}
                    y2="30"
                    stroke="#EE0000"
                    strokeOpacity="0.35"
                    strokeWidth="0.4"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.5 + i * 0.08,
                    }}
                  />
                ))}
              </svg>

              <div className="mt-12 grid grid-cols-5 gap-2">
                {nodes.map((n, i) => (
                  <motion.div
                    key={n}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.9 + i * 0.08 }}
                    className="rounded-md border border-redhat/30 bg-redhat/[0.06] p-2 text-center"
                  >
                    <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-redhat">
                      {n}
                    </p>
                    <motion.span
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{
                        duration: 1.4,
                        delay: i * 0.2,
                        repeat: Infinity,
                      }}
                      className="mt-1 inline-block h-1 w-1 rounded-full bg-redhat"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Row 3 · Results matrix */}
            <div className="rounded-xl border border-white/10 bg-bg-base p-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
                  Results matrix · 32 tasks
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-green">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-green animate-pulse mr-1.5" />
                  ok = 32 · changed = 18 · failed = 0
                </p>
              </div>

              <div
                className="grid gap-1"
                style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
              >
                {Array.from({ length: totalCells }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{
                      backgroundColor: "rgba(255,255,255,0.04)",
                      borderColor: "rgba(255,255,255,0.08)",
                    }}
                    whileInView={{
                      backgroundColor: [
                        "rgba(255,255,255,0.04)",
                        "rgba(0, 210, 106, 0.18)",
                      ],
                      borderColor: [
                        "rgba(255,255,255,0.08)",
                        "rgba(0, 210, 106, 0.5)",
                      ],
                    }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.3,
                      delay: 0.6 + (i / totalCells) * 1.6,
                    }}
                    className="aspect-square rounded-sm border"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ─── Right column · EDA trigger panel ──────────────────── */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <div className="relative overflow-hidden rounded-xl border border-redhat/30 bg-redhat/[0.06] p-4">
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-redhat/15 blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <motion.div
                      animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-full bg-redhat/30"
                    />
                    <Zap className="relative h-4 w-4 text-redhat" />
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-redhat">
                    EDA · live trigger
                  </p>
                </div>

                <p className="mt-4 text-sm font-medium text-white">
                  Webhook: disk_full
                </p>
                <p className="text-[11px] text-text-secondary">
                  inventory: web-04 · /var
                </p>

                <div className="mt-4 border-t border-white/5 pt-3">
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-text-faint">
                    Auto-remediation
                  </p>
                  <ul className="mt-2 flex flex-col gap-1 text-[11px] text-text-secondary">
                    <li className="flex items-center gap-1.5">
                      <Check className="h-3 w-3 text-brand-green" />
                      Cleanup /var/log
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="h-3 w-3 text-brand-green" />
                      Rotate journal
                    </li>
                    <li className="flex items-center gap-1.5">
                      <motion.span
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.4, repeat: Infinity }}
                        className="h-1.5 w-1.5 rounded-full bg-redhat"
                      />
                      Verify free space
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-bg-base p-4">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-text-faint">
                Today · 24h
              </p>
              <p className="mt-2 font-display text-2xl font-semibold text-redhat">
                1,284
              </p>
              <p className="text-[11px] text-text-secondary">
                Auto-remediations · no human paged
              </p>
            </div>
          </div>
        </div>

        {/* Footer ribbon */}
        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/5 pt-4 text-[10px] font-mono uppercase tracking-[0.18em] text-text-faint">
          <span>HA cluster</span>
          <span className="h-1 w-1 rounded-full bg-redhat" />
          <span>Automation Mesh</span>
          <span className="h-1 w-1 rounded-full bg-redhat" />
          <span>RBAC · AD/Vault</span>
          <span className="h-1 w-1 rounded-full bg-redhat" />
          <span>ServiceNow · Splunk</span>
          <span className="ml-auto inline-flex items-center gap-1.5 text-brand-green">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-green animate-pulse" />
            32 / 32 ok
          </span>
        </div>
      </div>
    </div>
  );
}
