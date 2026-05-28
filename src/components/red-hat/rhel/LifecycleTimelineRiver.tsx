"use client";

import { motion } from "framer-motion";
import { Bug, ShieldCheck, ArrowRight } from "lucide-react";
import { rhelContent } from "@/content/red-hat/rhel";

/**
 * /red-hat/rhel — Lifecycle Timeline River hero.
 *
 * Idiom: full-width horizontal timeline. 4 RHEL version bands
 * (9.x · 8.x · 7.x · 6.x) flow horizontally as colored rows. The
 * X-axis spans 2024 → 2035 with year tick markers. Each version's
 * band starts/ends at its actual support window:
 *
 *   2024 ─────── 2026 ─────── 2029 ─── 2032 ─── 2035
 *      RHEL 6.x ◀━━ ended
 *      RHEL 7.x ━━━━━━━━━━━ ELS 2028
 *      RHEL 8.x ━━━━━━━━━━━━━━━━━━━ 2029 ── 2032 (maint)
 *      RHEL 9.x ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 2032 ── 2035
 *
 * A vertical "today" cursor (2026) drops down highlighting active
 * versions. Migration arcs (CentOS → 9, RHEL 7 → 9) draw across.
 * Animated CVE shield glyphs drift right-to-left along the active
 * 9.x band to argue "patching keeps it safe".
 *
 * Idiom note: distinct from solution stage-velocity-track (multiple
 * deals on same horizontal track). Here it's MULTIPLE versions, each
 * with its OWN horizontal band, AND a temporal X-axis. The migration
 * arcs and the today-cursor are unique to this hero.
 *
 * Responsive:
 *   • md+ : full timeline river (1100×360)
 *   • <md : collapses to 4 stacked version cards with pill-status
 */
export function LifecycleTimelineRiver() {
  // Horizontal coordinates per year on the 0-100 % scale.
  // 2024 = 0, 2035 = 100. Linear scale.
  const yearX = (year: number) => ((year - 2024) / (2035 - 2024)) * 100;

  // Versions with their start/end years. Ordered top-to-bottom.
  const versions = [
    {
      version: "RHEL 9.x",
      status: "Current",
      start: 2024,
      end: 2035,
      activeUntil: 2032,
      color: "redhat",
      bgClass: "bg-redhat",
      borderClass: "border-redhat/40",
      textClass: "text-redhat",
      shadowStyle: "0 0 18px -2px rgba(238,0,0,0.7)",
    },
    {
      version: "RHEL 8.x",
      status: "Active",
      start: 2024,
      end: 2032,
      activeUntil: 2029,
      color: "amber",
      bgClass: "bg-brand-amber",
      borderClass: "border-brand-amber/40",
      textClass: "text-brand-amber",
      shadowStyle: "0 0 18px -2px rgba(251,191,36,0.6)",
    },
    {
      version: "RHEL 7.x",
      status: "Extended",
      start: 2024,
      end: 2028.5, // June 2028
      activeUntil: 2024,
      color: "orange",
      bgClass: "bg-brand-orange",
      borderClass: "border-brand-orange/40",
      textClass: "text-brand-orange",
      shadowStyle: "0 0 16px -2px rgba(251,146,60,0.55)",
    },
    {
      version: "RHEL 6.x",
      status: "Ended",
      start: 2024,
      end: 2024.5, // June 2024
      activeUntil: 2024,
      color: "faint",
      bgClass: "bg-text-faint",
      borderClass: "border-text-faint/30",
      textClass: "text-text-faint",
      shadowStyle: "none",
    },
  ];

  const yearMarkers = [2024, 2026, 2028, 2030, 2032, 2035];
  const TODAY = 2026;

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
              RHEL lifecycle · live timeline
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
            Today · April 2026
          </span>
        </div>

        {/* ─── Desktop river (md+) ─────────────────────────────────── */}
        <div className="relative mt-6 hidden md:block">
          {/* X-axis year ticks */}
          <div className="relative h-6 ml-[120px] mr-4 border-b border-white/10">
            {yearMarkers.map((y) => (
              <div
                key={y}
                style={{ left: `${yearX(y)}%` }}
                className="absolute top-0 -translate-x-1/2"
              >
                <div className="h-2 w-px bg-white/15" />
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-text-faint">
                  {y}
                </p>
              </div>
            ))}
            {/* Today cursor */}
            <div
              style={{ left: `${yearX(TODAY)}%` }}
              className="absolute -top-2 -translate-x-1/2"
            >
              <div className="h-3 w-3 rounded-full bg-redhat shadow-[0_0_12px_rgba(238,0,0,0.8)]" />
            </div>
          </div>

          {/* Version bands */}
          <div className="relative mt-3 ml-[120px] mr-4">
            {versions.map((v, i) => {
              const left = yearX(v.start);
              const right = yearX(v.end);
              const width = right - left;
              return (
                <div key={v.version} className="relative h-14">
                  {/* Row guide line */}
                  <div className="absolute inset-x-0 top-1/2 h-px bg-white/[0.04]" />

                  {/* Version label (positioned to the LEFT of the timeline) */}
                  <div className="absolute -left-[120px] top-1/2 w-[110px] -translate-y-1/2">
                    <div className="flex items-center gap-2">
                      <span
                        className={[
                          "h-1.5 w-1.5 rounded-full",
                          v.bgClass,
                          v.status === "Current" && "animate-pulse",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                      />
                      <p className="font-display text-sm font-semibold text-white">
                        {v.version}
                      </p>
                    </div>
                    <p
                      className={[
                        "mt-0.5 font-mono text-[9px] uppercase tracking-[0.16em]",
                        v.textClass,
                      ].join(" ")}
                    >
                      {v.status}
                    </p>
                  </div>

                  {/* Animated band */}
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.9,
                      delay: 0.2 + i * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{
                      left: `${left}%`,
                      width: `${width}%`,
                      transformOrigin: "left center",
                      boxShadow: v.shadowStyle,
                    }}
                    className={[
                      "absolute top-1/2 h-7 -translate-y-1/2 rounded-md border",
                      v.borderClass,
                      v.bgClass,
                      "bg-opacity-40",
                    ].join(" ")}
                  >
                    {/* End marker */}
                    <div
                      className={[
                        "absolute right-0 top-1/2 h-3 w-px -translate-y-1/2",
                        v.bgClass,
                      ].join(" ")}
                    />

                    {/* CVE shield drift on Current (9.x) only */}
                    {v.status === "Current" && (
                      <>
                        {[0, 1, 2].map((idx) => (
                          <motion.div
                            key={idx}
                            initial={{ x: "100%" }}
                            animate={{ x: "-30%" }}
                            transition={{
                              duration: 6,
                              delay: idx * 2,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="absolute top-1/2 -translate-y-1/2"
                          >
                            <ShieldCheck className="h-3.5 w-3.5 text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]" />
                          </motion.div>
                        ))}
                      </>
                    )}

                    {/* Bug glyph for Ended */}
                    {v.status === "Ended" && (
                      <Bug className="absolute right-1 top-1/2 h-3 w-3 -translate-y-1/2 text-text-faint" />
                    )}
                  </motion.div>
                </div>
              );
            })}

            {/* Vertical Today cursor across all bands */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
              style={{
                left: `${yearX(TODAY)}%`,
                transformOrigin: "top",
                top: "-12px",
              }}
              className="pointer-events-none absolute h-[calc(100%+12px)] w-px bg-redhat/40"
            >
              <div className="absolute -top-1 -translate-x-1/2 rounded-full border border-redhat/40 bg-bg-elevated px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-redhat">
                Today
              </div>
            </motion.div>
          </div>

          {/* Migration arcs (decorative footer arrows) */}
          <div className="ml-[120px] mr-4 mt-6 border-t border-white/5 pt-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
              Migration paths we deliver
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "CentOS 7/8 → RHEL 8/9",
                "Oracle Linux → RHEL",
                "SLES / Ubuntu → RHEL",
                "RHEL 7/8 → 9 (in-place)",
                "AIX / Solaris → RHEL",
              ].map((path) => (
                <span
                  key={path}
                  className="inline-flex items-center gap-1.5 rounded-full border border-redhat/30 bg-redhat/[0.06] px-2.5 py-1 text-[11px] font-medium text-text-secondary"
                >
                  <ArrowRight className="h-3 w-3 text-redhat" />
                  {path}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Mobile stacked layout (<md) ─────────────────────────── */}
        <div className="mt-6 grid grid-cols-1 gap-3 md:hidden">
          {versions.map((v) => (
            <div
              key={v.version}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-bg-base p-4"
            >
              <div
                className={[
                  "h-9 w-1 shrink-0 rounded-full",
                  v.bgClass,
                  v.status === "Current" && "animate-pulse",
                ]
                  .filter(Boolean)
                  .join(" ")}
              />
              <div className="min-w-0 flex-1">
                <p className="font-display text-sm font-semibold text-white">
                  {v.version}
                </p>
                <p
                  className={[
                    "font-mono text-[10px] uppercase tracking-[0.16em]",
                    v.textClass,
                  ].join(" ")}
                >
                  {v.status}
                </p>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-text-faint">
                {rhelContent.extras?.rhelVersions?.find((r) =>
                  r.version === v.version,
                )?.fullSupport ?? ""}
              </p>
            </div>
          ))}
        </div>

        {/* Footer ribbon */}
        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/5 pt-4 text-[10px] font-mono uppercase tracking-[0.18em] text-text-faint">
          <span>4 versions tracked</span>
          <span className="h-1 w-1 rounded-full bg-redhat" />
          <span>Continuous CVE remediation</span>
          <span className="ml-auto inline-flex items-center gap-1.5 text-redhat">
            <span className="h-1.5 w-1.5 rounded-full bg-redhat animate-pulse" />
            ELS migration roadmap available
          </span>
        </div>
      </div>
    </div>
  );
}
