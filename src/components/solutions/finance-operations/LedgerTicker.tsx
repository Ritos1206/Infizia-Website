"use client";

import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import { ACCENTS } from "@/lib/product-accents";
import { cn } from "@/lib/utils";
import { FINANCE_LEDGER_ENTRIES } from "@/content/solutions/finance-operations";

/**
 * Finance & Operations — Ledger Ticker hero visual.
 *
 * A vertical scrolling tape of journal entries (the "cash river") on the
 * left side, with a running balance / delta tile on the right. Each
 * journal entry shows the document source (DocuMind / EyePOS), payee,
 * amount, +/− direction, and timestamp.
 *
 * The narrative: every document the business handles flows into one
 * unified ledger. The river never stops, and Infizia reconciles it in
 * real time.
 *
 * Idiom note: distinct from DocuMind's extraction-with-scan-line hero
 * (single document, scanned), and from the OpsSight dashboard (control
 * room, sparklines). The river-of-journal-entries idiom is new.
 *
 * Responsive: same layout on mobile and desktop — vertical ticker scales
 * naturally.
 */
export function LedgerTicker() {
  const a = ACCENTS.sky;

  return (
    <div className="relative">
      {/* Ambient sky glow */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -inset-8 rounded-[2rem] blur-3xl opacity-60",
          a.glow,
        )}
      />

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-bg-elevated to-bg-surface p-5 shadow-card md:p-6">
        {/* Chrome */}
        <div className="flex items-center justify-between border-b border-white/5 pb-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-brand-sky shadow-[0_0_8px_rgba(56,189,248,0.7)]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary">
              Unified ledger · Live
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
            FY25 · Q4 · Day 18
          </span>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {/* Ticker (2/3 cols) */}
          <div className="sm:col-span-2">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-text-faint">
                Journal entries · auto-posted
              </p>
              <span className={cn("font-mono text-[9px] uppercase tracking-[0.18em]", a.text)}>
                +14 today
              </span>
            </div>

            {/* Entries list */}
            <div className="mt-3 max-h-[340px] space-y-1.5 overflow-hidden">
              {FINANCE_LEDGER_ENTRIES.map((e, i) => {
                const Icon = e.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={cn(
                      "flex items-center gap-2 rounded-md border bg-bg-base/80 p-2",
                      a.border,
                    )}
                  >
                    <div
                      className={cn(
                        "flex h-7 w-7 shrink-0 items-center justify-center rounded-md border",
                        a.border,
                        a.bgSoft,
                        a.text,
                      )}
                    >
                      <Icon className="h-3.5 w-3.5" strokeWidth={1.7} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-2">
                        <p className="truncate font-display text-[11px] font-semibold text-white">
                          {e.type}
                        </p>
                        <span className="shrink-0 font-mono text-[9px] uppercase tracking-[0.14em] text-text-faint">
                          {e.ts}
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <p className="truncate text-[10px] text-text-muted">
                          {e.payee}
                        </p>
                        <span
                          className={cn(
                            "shrink-0 font-mono text-[9px] uppercase tracking-[0.14em]",
                            a.text,
                          )}
                        >
                          {e.source}
                        </span>
                      </div>
                    </div>

                    <span
                      className={cn(
                        "font-display text-[12px] font-semibold tabular-nums",
                        e.direction === "credit"
                          ? "text-brand-green"
                          : "text-brand-rose",
                      )}
                    >
                      {e.direction === "credit" ? "+" : "−"}
                      {e.amount}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Running balance tile (1/3 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={cn(
              "flex flex-col rounded-xl border bg-bg-base p-4",
              a.border,
              a.shadow,
            )}
          >
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-text-faint">
              Running balance
            </p>
            <p
              className={cn(
                "mt-2 font-display text-2xl font-semibold leading-none tabular-nums",
                a.text,
              )}
            >
              ₹4.32 Cr
            </p>
            <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-brand-green">
              ↑ ₹1.36 L · today
            </p>

            <div className="mt-4 border-t border-white/5 pt-3">
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-text-muted">GST input</span>
                <span className="font-mono tabular-nums text-white">
                  ₹3,420
                </span>
              </div>
              <div className="mt-1 flex items-center justify-between text-[10px]">
                <span className="text-text-muted">GST output</span>
                <span className="font-mono tabular-nums text-white">
                  ₹1,86,470
                </span>
              </div>
              <div className="mt-1 flex items-center justify-between text-[10px]">
                <span className="text-text-muted">Net liability</span>
                <span
                  className={cn(
                    "font-mono tabular-nums font-semibold",
                    a.text,
                  )}
                >
                  ₹1,83,050
                </span>
              </div>
            </div>

            <div
              className={cn(
                "mt-4 flex items-center gap-1.5 rounded-md border bg-bg-base px-2 py-1.5",
                a.border,
              )}
            >
              <Activity className={cn("h-3 w-3", a.text)} />
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white">
                Reconciled
              </span>
              <span className="ml-auto font-mono text-[9px] uppercase tracking-[0.14em] text-text-faint">
                live
              </span>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-white/5 pt-3 text-[10px] font-mono uppercase tracking-[0.18em] text-text-faint">
          <span>One ledger · 2 sources · 0 typing</span>
          <span className="ml-auto inline-flex items-center gap-1.5 text-brand-sky">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-sky animate-pulse-soft" />
            Stream open
          </span>
        </div>
      </div>
    </div>
  );
}
