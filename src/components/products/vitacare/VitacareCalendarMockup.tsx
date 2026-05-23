"use client";

import { motion } from "framer-motion";
import {
  AlarmClock,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Stethoscope,
  TriangleAlert,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * VitaCare hero visual — clean booking-calendar interface.
 *
 * Mirrors the pattern of a real doctor-appointment page (chiral.in/booking
 * style) but in our dark theme with brand-green accents:
 *  - Doctor info strip
 *  - "Select Date" header with month navigator
 *  - 7-day calendar grid with cells in different states
 *    (past, available, selected, full, beyond-7-days, closed)
 *  - Legend strip at bottom
 *
 * Standalone within its container — no floating chips, no overlap.
 */

type CellState =
  | "past"
  | "available"
  | "selected"
  | "full"
  | "beyond"
  | "closed"
  | "empty";

type Cell = { day: number; state: CellState };

// Compact 4-row month view (partial — what visitors typically see on a real
// booking page). Day numbers start with end-of-previous-month grayed, then
// current month, with a "selected" date and a "beyond 7 days" date for
// visual variety.
const CALENDAR: Cell[] = [
  // Week 1
  { day: 26, state: "past" },
  { day: 27, state: "past" },
  { day: 28, state: "past" },
  { day: 29, state: "past" },
  { day: 30, state: "past" },
  { day: 1, state: "past" },
  { day: 2, state: "past" },
  // Week 2
  { day: 3, state: "past" },
  { day: 4, state: "past" },
  { day: 5, state: "past" },
  { day: 6, state: "past" },
  { day: 7, state: "past" },
  { day: 8, state: "past" },
  { day: 9, state: "past" },
  // Week 3 — today and next 6 days
  { day: 10, state: "past" },
  { day: 11, state: "past" },
  { day: 12, state: "past" },
  { day: 13, state: "past" },
  { day: 14, state: "past" },
  { day: 15, state: "past" },
  { day: 16, state: "past" },
  // Week 4 — bookable window
  { day: 17, state: "available" },
  { day: 18, state: "available" },
  { day: 19, state: "available" },
  { day: 20, state: "full" },
  { day: 21, state: "available" },
  { day: 22, state: "available" },
  { day: 23, state: "selected" },
  // Week 5 — beyond 7 days
  { day: 24, state: "beyond" },
  { day: 25, state: "beyond" },
  { day: 26, state: "closed" },
  { day: 27, state: "beyond" },
  { day: 28, state: "beyond" },
  { day: 29, state: "beyond" },
  { day: 30, state: "beyond" },
];

const DAY_HEADERS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function VitacareCalendarMockup() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -inset-12 -z-10 rounded-[40px] bg-brand-green/[0.12] blur-[60px]" />
      <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[40px] bg-brand-teal/[0.06] blur-[40px]" />

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-bg-surface shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.04)_inset]">
        {/* Browser-style top bar */}
        <div className="flex items-center justify-between border-b border-white/5 bg-bg-base px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/40" />
            </div>
            <div className="ml-3 flex items-center gap-2 rounded-md bg-white/[0.04] px-3 py-1 text-[11px] font-mono text-text-faint">
              <CalendarDays className="h-3 w-3 text-brand-green" />
              VitaCare · Booking
            </div>
          </div>
        </div>

        {/* Doctor strip */}
        <div className="flex items-center gap-3 border-b border-white/5 px-5 py-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand-green/30 bg-brand-green/10 text-brand-green">
            <Stethoscope className="h-5 w-5" strokeWidth={1.6} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-display text-sm font-semibold text-white">
              Dr. Priya Sharma
            </p>
            <p className="text-[11px] text-text-muted">
              Pediatric Care & Allergy Specialist
            </p>
          </div>
          <span className="rounded-full border border-brand-green/30 bg-brand-green/10 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-brand-green">
            Open today
          </span>
        </div>

        {/* Calendar header — Select Date + month nav */}
        <div className="flex items-center justify-between px-5 pt-4">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-3.5 w-3.5 text-brand-green" />
            <p className="font-display text-sm font-semibold text-white">
              Select Date
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous month"
              className="flex h-6 w-6 items-center justify-center rounded-md border border-white/10 bg-white/[0.02] text-text-muted hover:text-white"
            >
              <ChevronLeft className="h-3 w-3" />
            </button>
            <p className="font-mono text-[11px] uppercase tracking-wider text-text-secondary">
              May 2026
            </p>
            <button
              type="button"
              aria-label="Next month"
              className="flex h-6 w-6 items-center justify-center rounded-md border border-white/10 bg-white/[0.02] text-text-muted hover:text-white"
            >
              <ChevronRight className="h-3 w-3" />
            </button>
          </div>
        </div>

        {/* Day-of-week row */}
        <div className="grid grid-cols-7 gap-1 px-5 pt-3">
          {DAY_HEADERS.map((d) => (
            <div
              key={d}
              className="text-center font-mono text-[9px] uppercase tracking-wider text-text-faint"
            >
              {d}
            </div>
          ))}
        </div>

        {/* Date grid */}
        <div className="grid grid-cols-7 gap-1 px-5 pb-4 pt-2">
          {CALENDAR.map((cell, i) => (
            <DateCell key={i} cell={cell} index={i} />
          ))}
        </div>

        {/* Legend strip */}
        <div className="border-t border-white/5 bg-bg-base/60 px-5 py-3">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[10px] text-text-muted">
            <span className="font-mono text-[9px] uppercase tracking-wider text-text-faint">
              Legend
            </span>
            <LegendItem dotClass="bg-brand-green" label="Selected" />
            <LegendItem
              dotClass="border border-brand-green/40"
              label="Available"
            />
            <LegendItem
              dotClass="bg-amber-500/60"
              label="Beyond 7 days"
              isAmber
            />
            <LegendItem dotClass="bg-red-500/60" label="Full" isRed />
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Date cell                                                                 */
/* -------------------------------------------------------------------------- */

function DateCell({ cell, index }: { cell: Cell; index: number }) {
  if (cell.state === "empty") {
    return <div className="aspect-square rounded-md" />;
  }

  const baseClasses =
    "relative aspect-square rounded-md border flex flex-col items-center justify-center text-[11px] font-mono transition-colors";

  const stateClasses: Record<CellState, string> = {
    empty: "",
    past: "border-white/5 bg-white/[0.01] text-text-faint/40",
    available:
      "border-white/10 bg-white/[0.02] text-white hover:border-brand-green/40 hover:bg-brand-green/[0.04]",
    selected:
      "border-brand-green/60 bg-brand-green/[0.08] text-brand-green shadow-[0_0_0_1px_rgba(0,210,106,0.2)_inset]",
    full: "border-red-500/20 bg-red-500/[0.04] text-text-faint",
    beyond: "border-amber-500/20 bg-amber-500/[0.03] text-amber-200/80",
    closed: "border-white/5 bg-white/[0.01] text-text-faint/40",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.008 }}
      className={cn(baseClasses, stateClasses[cell.state])}
    >
      <span className="leading-none">{cell.day}</span>
      {cell.state === "available" && (
        <span className="mt-0.5 text-[7.5px] font-mono uppercase tracking-tight text-brand-green/80">
          open
        </span>
      )}
      {cell.state === "selected" && (
        <motion.span
          className="mt-0.5 text-[7.5px] font-mono uppercase tracking-tight text-brand-green"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          today
        </motion.span>
      )}
      {cell.state === "full" && (
        <X
          className="absolute right-1 top-1 h-2 w-2 text-red-500/70"
          strokeWidth={2.5}
        />
      )}
      {cell.state === "beyond" && (
        <AlarmClock
          className="absolute right-1 top-1 h-2 w-2 text-amber-400/70"
          strokeWidth={2}
        />
      )}
      {cell.state === "closed" && (
        <TriangleAlert
          className="absolute right-1 top-1 h-2 w-2 text-text-faint/60"
          strokeWidth={2}
        />
      )}
    </motion.div>
  );
}

function LegendItem({
  dotClass,
  label,
  isAmber,
  isRed,
}: {
  dotClass: string;
  label: string;
  isAmber?: boolean;
  isRed?: boolean;
}) {
  return (
    <span className="flex items-center gap-1.5">
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          dotClass,
          isAmber || isRed ? "" : "shadow-[0_0_8px_currentColor]",
        )}
      />
      <span>{label}</span>
    </span>
  );
}
