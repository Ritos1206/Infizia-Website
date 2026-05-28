"use client";

import { motion } from "framer-motion";
import { Cog } from "lucide-react";
import { ACCENTS } from "@/lib/product-accents";
import { cn } from "@/lib/utils";
import { BLOCKCHAIN_LEDGER_BLOCKS } from "@/content/services/blockchain";

/**
 * Blockchain — Chain Ledger Sequence hero visual.
 *
 * A horizontal sequence of 4 cryptographic blocks linked by hash
 * connectors. Three are confirmed (amber-tinted, static); the fourth
 * is "mining" (animated pulse + ring). Argues "blocks chain together —
 * permanently, transparently".
 *
 * Idiom note: distinct from the LedgerTicker (vertical scrolling tape
 * of journal entries with running balance) and from any product
 * mid-page idiom. Chain-of-blocks horizontal sequence is genuinely new
 * — and the on-the-nose visual fits the service narrative.
 *
 * Responsive:
 *   • <md: vertical stack of block cards
 *   • md+: horizontal sequence with hash connectors
 */
export function ChainLedgerSequence() {
  const a = ACCENTS.amber;

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
            <span className="h-2 w-2 rounded-full bg-brand-amber shadow-[0_0_8px_rgba(251,191,36,0.7)]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary">
              Mainnet · Block stream
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
            Avg block · 12.4 sec
          </span>
        </div>

        {/* ── Desktop horizontal chain (md+) ─────────────────────────── */}
        <div className="relative mt-6 hidden md:block">
          <div className="grid grid-cols-4 gap-2">
            {BLOCKCHAIN_LEDGER_BLOCKS.map((block, i) => {
              const isMining = block.status === "mining";
              const isLast = i === BLOCKCHAIN_LEDGER_BLOCKS.length - 1;
              return (
                <motion.div
                  key={block.n}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative"
                >
                  {/* Hash connector to next block */}
                  {!isLast && (
                    <div
                      aria-hidden
                      className="pointer-events-none absolute right-0 top-1/2 z-10 flex w-2 -translate-y-1/2 translate-x-1/2 items-center justify-center"
                    >
                      <span
                        className={cn(
                          "h-px w-2 bg-gradient-to-r",
                          a.topLine,
                        )}
                      />
                    </div>
                  )}

                  <div
                    className={cn(
                      "relative h-full rounded-xl border bg-bg-base p-3",
                      isMining
                        ? cn(a.border, a.shadow)
                        : "border-white/10",
                    )}
                  >
                    {/* Animated mining ring on the active block */}
                    {isMining && (
                      <motion.div
                        aria-hidden
                        className={cn(
                          "pointer-events-none absolute inset-0 rounded-xl border-2",
                          a.border,
                        )}
                        animate={{
                          opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                          duration: 1.6,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    )}

                    <div className="flex items-center justify-between">
                      <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-text-faint">
                        Block
                      </p>
                      {isMining ? (
                        <span
                          className={cn(
                            "inline-flex items-center gap-1 rounded-full border bg-bg-base px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.14em]",
                            a.border,
                            a.text,
                          )}
                        >
                          <Cog
                            className={cn("h-2.5 w-2.5", a.text)}
                            strokeWidth={2}
                          />
                          Mining
                        </span>
                      ) : (
                        <span className="rounded-full border border-brand-green/30 bg-brand-green/10 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.14em] text-brand-green">
                          ✓
                        </span>
                      )}
                    </div>

                    <p
                      className={cn(
                        "mt-1.5 font-display text-sm font-semibold tabular-nums",
                        isMining ? a.text : "text-white",
                      )}
                    >
                      #{block.n}
                    </p>

                    <div className="mt-3 space-y-1.5">
                      <div className="flex items-center justify-between text-[9px] font-mono">
                        <span className="text-text-faint">hash</span>
                        <span
                          className={cn(
                            "tabular-nums",
                            isMining ? a.text : "text-text-secondary",
                          )}
                        >
                          {block.hashPreview}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[9px] font-mono">
                        <span className="text-text-faint">txs</span>
                        <span className="tabular-nums text-text-secondary">
                          {block.txs}
                        </span>
                      </div>
                    </div>

                    {/* Block-pattern decoration — 6 squares representing tx slots */}
                    <div className="mt-3 grid grid-cols-6 gap-0.5">
                      {Array.from({ length: 12 }).map((_, j) => (
                        <div
                          key={j}
                          className={cn(
                            "aspect-square rounded-sm",
                            isMining
                              ? j < 8
                                ? a.bg
                                : a.bgSoft
                              : "bg-white/[0.08]",
                          )}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Mobile vertical stack ──────────────────────────────────── */}
        <div className="mt-6 flex flex-col gap-2 md:hidden">
          {BLOCKCHAIN_LEDGER_BLOCKS.map((block, i) => {
            const isMining = block.status === "mining";
            return (
              <motion.div
                key={block.n}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={cn(
                  "flex items-center gap-3 rounded-xl border bg-bg-base p-3",
                  isMining ? cn(a.border, a.shadow) : "border-white/10",
                )}
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-text-faint">
                      Block
                    </p>
                    <p
                      className={cn(
                        "font-display text-sm font-semibold tabular-nums",
                        isMining ? a.text : "text-white",
                      )}
                    >
                      #{block.n}
                    </p>
                    {isMining && (
                      <span
                        className={cn(
                          "ml-auto inline-flex items-center gap-1 rounded-full border bg-bg-base px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.14em]",
                          a.border,
                          a.text,
                        )}
                      >
                        <Cog
                          className={cn("h-2.5 w-2.5 animate-spin-slow", a.text)}
                          strokeWidth={2}
                        />
                        Mining
                      </span>
                    )}
                  </div>
                  <div className="mt-1 flex items-center gap-3 font-mono text-[10px] text-text-muted">
                    <span>{block.hashPreview}</span>
                    <span>·</span>
                    <span>{block.txs} txs</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/5 pt-4 text-[10px] font-mono uppercase tracking-[0.18em] text-text-faint">
          <span>Audited contracts · transparent ledger</span>
          <span className="ml-auto inline-flex items-center gap-1.5 text-brand-amber">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-amber animate-pulse-soft" />
            Mining 247 txs
          </span>
        </div>
      </div>
    </div>
  );
}
