"use client";

import { motion } from "framer-motion";
import { Trophy, Users, Ticket } from "lucide-react";
import { trainingContent } from "@/content/red-hat/training";

/**
 * /red-hat/training — Course Stadium (clean catalog grid · revision).
 *
 * Idiom revised: full-width 6-ticket catalogue laid out as a clean
 * 3x2 grid (3 cols on lg, 2 on md, 1 on mobile) with NO overlapping
 * rows. Each ticket has a perforated stub edge on the left (a column
 * of small redhat dots), a visible "stage" backdrop behind the entire
 * grid (faint dashed arc + warm glow centre) so the "stadium" feel is
 * preserved without the overlap that v1 had.
 *
 * Motion:
 *   • Each ticket fans in from below with stagger
 *   • The stage backdrop arc draws in on viewport-enter
 *   • Bootcamp ticket gets a Trophy ribbon
 *   • Next-cohort ticket gets a redhat-glow ring + "Next cohort" pill
 *   • Live ticker scrolls cohort schedule across the bottom
 *
 * Distinct from Learnova hero (centered prompt + module cards
 * cascading in) — this is event-style ticketing with perforated stubs,
 * no generation idiom.
 */
export function CourseStadium() {
  const courses = trainingContent.catalogue.items;
  const nextCohortCourse = "OpenShift for Administrators";

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
              Course catalogue · live cohorts
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
            6 courses · lab environments included
          </span>
        </div>

        {/* Cohort avatar trail */}
        <div className="mt-5 flex items-center gap-3 rounded-xl border border-redhat/30 bg-redhat/[0.06] p-3">
          <Users className="h-4 w-4 shrink-0 text-redhat" />
          <div className="flex -space-x-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                className="h-7 w-7 rounded-full border-2 border-bg-elevated bg-gradient-to-br from-redhat/40 to-bg-elevated"
              />
            ))}
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-redhat">
            10 attendees · group discount unlocked
          </p>
          <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.16em] text-text-faint">
            Cohort #2026-Q2-04
          </span>
        </div>

        {/* Stage backdrop arc — subtle, behind the grid */}
        <div className="relative mt-8">
          <svg
            viewBox="0 0 600 80"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-x-0 top-0 h-16 w-full"
            aria-hidden
          >
            <motion.path
              d="M 30 70 Q 300 0 570 70"
              stroke="#EE0000"
              strokeOpacity="0.2"
              strokeWidth="1"
              strokeDasharray="4 4"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            />
            <text
              x="300"
              y="20"
              textAnchor="middle"
              className="fill-redhat/50 font-mono"
              style={{ fontSize: "9px", letterSpacing: "0.16em" }}
            >
              ◆ STAGE ◆
            </text>
          </svg>

          {/* Course tickets · 3x2 grid · NO overlap */}
          <div className="relative pt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((c, i) => {
              const Icon = c.icon;
              const isBootcamp = c.course.includes("Bootcamp");
              const isNext = c.course === nextCohortCourse;
              return (
                <motion.div
                  key={c.course}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.55,
                    delay: 0.3 + i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={[
                    "group relative overflow-hidden rounded-xl border p-5 transition-all hover:-translate-y-1",
                    isBootcamp
                      ? "border-redhat/40 bg-gradient-to-br from-redhat/[0.16] to-bg-elevated shadow-[0_0_30px_-10px_rgba(238,0,0,0.6)]"
                      : isNext
                        ? "border-redhat/40 bg-gradient-to-br from-redhat/[0.10] to-bg-elevated shadow-[0_0_24px_-10px_rgba(238,0,0,0.5)]"
                        : "border-white/10 bg-bg-base hover:border-redhat/40",
                  ].join(" ")}
                >
                  {/* Perforated stub edge on the left */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute left-0 top-0 flex h-full w-3 flex-col items-center justify-around py-2"
                  >
                    {Array.from({ length: 8 }).map((_, di) => (
                      <span
                        key={di}
                        className={[
                          "block h-1 w-1 rounded-full",
                          isBootcamp || isNext
                            ? "bg-redhat/40"
                            : "bg-white/10",
                        ].join(" ")}
                      />
                    ))}
                  </div>

                  {/* Top-line shimmer */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-redhat/60 via-redhat/0 to-redhat/0 opacity-60" />

                  {/* Ribbon · Bootcamp / Next cohort */}
                  {isBootcamp && (
                    <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-redhat/40 bg-redhat/15 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-redhat">
                      <Trophy className="h-2.5 w-2.5" />
                      Bootcamp
                    </span>
                  )}
                  {isNext && !isBootcamp && (
                    <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-redhat/40 bg-redhat/15 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-redhat">
                      <span className="h-1 w-1 rounded-full bg-redhat animate-pulse" />
                      Next cohort
                    </span>
                  )}

                  <div className="relative pl-3">
                    <div className="flex items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-redhat/30 bg-redhat/10 text-redhat">
                        <Icon className="h-4 w-4" strokeWidth={1.7} />
                      </div>
                      <Ticket className="h-3.5 w-3.5 text-redhat/40" />
                      <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-text-faint">
                        Course 0{i + 1}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-base font-semibold leading-tight tracking-tight text-white">
                      {c.course}
                    </h3>

                    <div className="mt-3 grid grid-cols-3 gap-2 border-t border-white/5 pt-3">
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-text-faint">
                          Duration
                        </p>
                        <p className="mt-0.5 font-display text-sm font-semibold text-white">
                          {c.duration}
                        </p>
                      </div>
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-text-faint">
                          Format
                        </p>
                        <p className="mt-0.5 text-[11px] font-medium leading-snug text-text-secondary">
                          {c.format}
                        </p>
                      </div>
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-text-faint">
                          Price
                        </p>
                        <p className="mt-0.5 font-display text-sm font-semibold text-redhat">
                          {c.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Live ticker · next cohort schedule */}
        <div className="relative mt-8 overflow-hidden rounded-xl border border-white/10 bg-bg-base/60 px-4 py-3">
          <div className="flex items-center gap-3">
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-redhat/40 bg-redhat/15 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-redhat">
              <span className="h-1 w-1 rounded-full bg-redhat animate-pulse" />
              Live
            </span>

            <div className="relative flex-1 overflow-hidden">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex shrink-0 items-center gap-8 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.16em] text-text-secondary"
              >
                {[
                  "Next cohort · OpenShift Admin · 8 Jul",
                  "3 seats left",
                  "RHEL Admin · 22 Jul · open",
                  "Custom Bootcamp · book any month",
                  "Ansible Automation · 5 Aug · 6 seats",
                  "OpenShift AI · 19 Aug · virtual",
                ]
                  .concat([
                    "Next cohort · OpenShift Admin · 8 Jul",
                    "3 seats left",
                    "RHEL Admin · 22 Jul · open",
                    "Custom Bootcamp · book any month",
                    "Ansible Automation · 5 Aug · 6 seats",
                    "OpenShift AI · 19 Aug · virtual",
                  ])
                  .map((t, i) => (
                    <span key={i} className="inline-flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-redhat" />
                      {t}
                    </span>
                  ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Footer ribbon */}
        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/5 pt-4 text-[10px] font-mono uppercase tracking-[0.18em] text-text-faint">
          <span>Lab environment included</span>
          <span className="h-1 w-1 rounded-full bg-redhat" />
          <span>5+ attendees · group discount</span>
          <span className="h-1 w-1 rounded-full bg-redhat" />
          <span>10+ team · custom bootcamp</span>
          <span className="ml-auto inline-flex items-center gap-1.5 text-redhat">
            <span className="h-1.5 w-1.5 rounded-full bg-redhat animate-pulse" />
            Cohorts every 2 weeks
          </span>
        </div>
      </div>
    </div>
  );
}
