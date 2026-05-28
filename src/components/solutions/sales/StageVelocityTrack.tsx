"use client";

import { motion } from "framer-motion";
import { ACCENTS } from "@/lib/product-accents";
import { cn } from "@/lib/utils";
import {
  SALES_DEAL_CARDS,
  SALES_PIPELINE_STAGES,
} from "@/content/solutions/sales";

/**
 * Sales — Stage Velocity Track hero visual.
 *
 * A horizontal 5-column pipeline:
 *   • Stage labels (Lead → Researched → Engaged → Qualified → Closing)
 *     across the top, each labeled with the Infizia product handling it
 *   • A continuous track running across all 5 columns
 *   • 5 deal cards positioned along the track at their current stages —
 *     account name, deal value, days-in-stage
 *   • Exactly one deal (Brew Lab · Engaged) is "moving" — animated
 *     translateX with a velocity trail of fading dots behind it
 *
 * Idiom note: distinct from DocuMind's Inbox-to-Books (3-stage doc
 * pipeline, single document moving) and OpsSight's Signal-to-Action
 * (4-stage anomaly flow). The novel angle here: MULTIPLE deal cards
 * on the SAME track at the SAME time, each at its own stage with its
 * own velocity trail. Multi-deal pipeline is the actual sales
 * narrative shape.
 *
 * Responsive:
 *   • <md: vertical stack of 5 stage cards, each showing the deals at
 *     that stage as a chip list
 *   • md+: full horizontal track with positioned deal cards
 */
export function StageVelocityTrack() {
  const a = ACCENTS.teal;

  return (
    <div className="relative">
      {/* Ambient teal glow */}
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
            <span className="h-2 w-2 rounded-full bg-brand-teal shadow-[0_0_8px_rgba(94,234,212,0.7)]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary">
              Pipeline · Q1 · Live
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
            5 deals · ₹94.8 L in flight
          </span>
        </div>

        {/* ── Desktop horizontal track (md+) ─────────────────────────── */}
        <div className="relative mt-8 hidden md:block">
          {/* Stage column headers */}
          <div className="grid grid-cols-5 gap-1">
            {SALES_PIPELINE_STAGES.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="flex flex-col items-center text-center"
                >
                  <div
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-lg border bg-bg-base",
                      a.border,
                      a.bgSoft,
                      a.text,
                    )}
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.7} />
                  </div>
                  <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.16em] text-text-faint">
                    {s.n}
                  </p>
                  <p className="mt-0.5 font-display text-xs font-semibold text-white">
                    {s.label}
                  </p>
                  <p
                    className={cn(
                      "mt-0.5 font-mono text-[9px] uppercase tracking-[0.14em]",
                      a.text,
                    )}
                  >
                    {s.handler}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Track */}
          <div className="relative mt-6 h-[160px]">
            {/* Track lane (horizontal line + dividers) */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
              {/* Solid lane line */}
              <div
                className={cn(
                  "h-px w-full bg-gradient-to-r",
                  "from-brand-teal/0 via-brand-teal/40 to-brand-teal/0",
                )}
              />
            </div>

            {/* Stage divider verticals */}
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                aria-hidden
                className="absolute top-2 bottom-2 w-px bg-white/5"
                style={{ left: `${(i + 0.5) * 20}%` }}
              />
            ))}

            {/* Deal cards positioned at their stages */}
            {SALES_DEAL_CARDS.map((deal, i) => {
              // Position the card horizontally based on its stage (0–4).
              // Each stage column is 20% of the total width; centre the
              // card within the column.
              const leftPct = deal.stageIndex * 20 + 10;

              return (
                <motion.div
                  key={deal.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute top-1/2"
                  style={{
                    left: `${leftPct}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {/* Velocity trail (only on the moving deal) */}
                  {deal.isMoving && (
                    <div
                      aria-hidden
                      className="absolute right-full top-1/2 mr-1 -translate-y-1/2 flex items-center gap-1"
                    >
                      {[0.45, 0.3, 0.15].map((opacity, k) => (
                        <motion.span
                          key={k}
                          className={cn("h-1 w-1 rounded-full", a.bg)}
                          animate={{ opacity: [opacity, 0, opacity] }}
                          transition={{
                            duration: 1.6,
                            delay: k * 0.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      ))}
                    </div>
                  )}

                  <motion.div
                    animate={
                      deal.isMoving
                        ? { x: [0, 6, 0] }
                        : undefined
                    }
                    transition={
                      deal.isMoving
                        ? {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }
                        : undefined
                    }
                    className={cn(
                      "w-32 rounded-xl border bg-bg-base p-2.5",
                      deal.isMoving
                        ? cn(a.border, a.shadow)
                        : "border-white/10",
                    )}
                  >
                    {deal.isMoving && (
                      <div className="mb-1 flex items-center gap-1">
                        <span
                          className={cn(
                            "inline-block h-1.5 w-1.5 rounded-full animate-pulse",
                            a.bg,
                          )}
                        />
                        <p
                          className={cn(
                            "font-mono text-[8px] uppercase tracking-[0.16em]",
                            a.text,
                          )}
                        >
                          Live
                        </p>
                      </div>
                    )}
                    <p className="truncate font-display text-[11px] font-semibold leading-tight text-white">
                      {deal.account}
                    </p>
                    <p
                      className={cn(
                        "mt-0.5 font-display text-sm font-semibold tabular-nums",
                        a.text,
                      )}
                    >
                      {deal.value}
                    </p>
                    <p className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.14em] text-text-faint">
                      {deal.daysInStage}d in stage
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Stage detail strip */}
          <div className="mt-3 grid grid-cols-5 gap-1">
            {SALES_PIPELINE_STAGES.map((s) => (
              <p
                key={s.label}
                className="text-center text-[9px] leading-snug text-text-muted"
              >
                {s.detail}
              </p>
            ))}
          </div>
        </div>

        {/* ── Mobile vertical stack ──────────────────────────────────── */}
        <div className="mt-6 flex flex-col gap-2 md:hidden">
          {SALES_PIPELINE_STAGES.map((stage, i) => {
            const Icon = stage.icon;
            const dealsAtStage = SALES_DEAL_CARDS.filter(
              (d) => d.stageIndex === i,
            );
            return (
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={cn(
                  "rounded-xl border bg-bg-base p-3",
                  a.border,
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div
                      className={cn(
                        "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border",
                        a.border,
                        a.bgSoft,
                        a.text,
                      )}
                    >
                      <Icon className="h-3.5 w-3.5" strokeWidth={1.7} />
                    </div>
                    <div>
                      <p className="font-display text-sm font-semibold text-white">
                        {stage.n} · {stage.label}
                      </p>
                      <p
                        className={cn(
                          "font-mono text-[9px] uppercase tracking-[0.16em]",
                          a.text,
                        )}
                      >
                        {stage.handler} · {stage.detail}
                      </p>
                    </div>
                  </div>
                </div>
                {dealsAtStage.length > 0 && (
                  <ul className="mt-2 space-y-1 border-t border-white/5 pt-2">
                    {dealsAtStage.map((deal) => (
                      <li
                        key={deal.id}
                        className="flex items-center justify-between text-[11px]"
                      >
                        <span className="flex items-center gap-1.5">
                          {deal.isMoving && (
                            <span
                              className={cn(
                                "inline-block h-1.5 w-1.5 rounded-full animate-pulse",
                                a.bg,
                              )}
                            />
                          )}
                          <span className="text-text-secondary">
                            {deal.account}
                          </span>
                        </span>
                        <span
                          className={cn(
                            "font-mono tabular-nums",
                            deal.isMoving ? a.text : "text-text-muted",
                          )}
                        >
                          {deal.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/5 pt-4 text-[10px] font-mono uppercase tracking-[0.18em] text-text-faint">
          <span>5 stages · 4 products · 1 record</span>
          <span className="ml-auto inline-flex items-center gap-1.5 text-brand-teal">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-teal animate-pulse-soft" />
            Brew Lab · 92% match
          </span>
        </div>
      </div>
    </div>
  );
}
