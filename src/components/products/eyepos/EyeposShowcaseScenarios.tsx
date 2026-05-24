"use client";

import { motion } from "framer-motion";
import {
  BellRing,
  CheckCircle2,
  CreditCard,
  FileBarChart,
  Receipt,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Truck,
  TrendingUp,
} from "lucide-react";
import type { ShowcaseMoment } from "@/components/products/ProductShowcase";

/**
 * Four scenario visuals for EyePOS' ProductShowcase slider.
 * Each one is a desktop-style UI fragment that shows EyePOS in a real
 * retail situation across a single working day — and ends with the
 * monthly compliance moment.
 */

const inr = (n: number) =>
  "₹" + n.toLocaleString("en-IN", { maximumFractionDigits: 0 });

export const EYEPOS_SHOWCASE_MOMENTS: ShowcaseMoment[] = [
  {
    id: "open",
    kicker: "Monday · 9:00 AM open",
    title: "Walk in. Yesterday already closed.",
    body: "Open EyePOS to find yesterday's Z-report waiting — sales reconciled, GST output booked, low-stock alerts ready. No 'where did the day-end land?' moments.",
    visual: <ScenarioOpen />,
  },
  {
    id: "busy",
    kicker: "Monday · 1:08 PM rush",
    title: "Three counters. Live books behind every bill.",
    body: "Bills move at counter speed. Behind every bill, journal entries post in milliseconds. Stock decrements live. The dashboard upstairs shows it all happening in real time.",
    visual: <ScenarioBusy />,
  },
  {
    id: "close",
    kicker: "Monday · 8:00 PM close",
    title: "Z-report in one click.",
    body: "End of day, one tap. Day's sales, payment-mode split, top SKUs, low-stock alerts, cashier reconciliation — all in a single screen. Branch sleeps, books are clean.",
    visual: <ScenarioClose />,
  },
  {
    id: "filing",
    kicker: "Month-end · GST filing day",
    title: "Compliance is a click, not a fire drill.",
    body: "GSTR-1 and GSTR-3B summaries are ready the moment you open the screen. Reconciled to the rupee against your books. Export, upload, done — usually before lunch.",
    visual: <ScenarioFiling />,
  },
];

/* -------------------------------------------------------------------------- */
/*  Scenario visuals — pure CSS / framer-motion UI fragments                  */
/* -------------------------------------------------------------------------- */

function ScenarioOpen() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <BrowserChrome label="EyePOS · Today">
        {/* Z-report summary card from yesterday */}
        <div className="rounded-xl border border-white/5 bg-bg-surface/70 p-4">
          <div className="flex items-center justify-between">
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-text-faint">
              Yesterday · Sun 23 May
            </p>
            <span className="inline-flex items-center gap-1 rounded-full border border-brand-green/30 bg-brand-green/10 px-2 py-0.5 text-[10px] font-medium text-brand-green">
              <CheckCircle2 className="h-3 w-3" /> Closed
            </span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-3">
            <ZStat label="Sales" value="₹84,520" />
            <ZStat label="Bills" value="62" />
            <ZStat label="GST" value="₹9,055" />
          </div>
        </div>

        {/* Reorder alerts */}
        <div className="mt-3 rounded-xl border border-white/5 bg-bg-elevated/60 p-4">
          <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-brand-blue">
            <BellRing className="mr-1.5 inline h-3 w-3" />
            Reorder · 3 SKUs below threshold
          </p>
          <ul className="mt-2.5 flex flex-col gap-1.5 text-xs">
            {[
              { sku: "AP-114 · Cotton T-shirt M", left: 4 },
              { sku: "AP-208 · Slim-fit Jeans 32", left: 2 },
              { sku: "AC-077 · Leather Belt", left: 6 },
            ].map((r, i) => (
              <motion.li
                key={r.sku}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
                className="flex items-center justify-between rounded-md bg-bg-base/60 px-2 py-1.5 text-text-secondary"
              >
                <span className="truncate">{r.sku}</span>
                <span className="shrink-0 font-mono text-[10px] text-amber-400">
                  {r.left} left
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </BrowserChrome>
    </div>
  );
}

function ScenarioBusy() {
  const counters = [
    { id: "C1", cashier: "Priya", bills: 14, status: "scanning" as const },
    { id: "C2", cashier: "Aman", bills: 11, status: "payment" as const },
    { id: "C3", cashier: "Sneha", bills: 9, status: "open" as const },
  ];

  return (
    <div className="relative mx-auto w-full max-w-md">
      <BrowserChrome label="EyePOS · Live Counters · Andheri W">
        {/* 3 counters status row */}
        <div className="grid grid-cols-3 gap-2.5">
          {counters.map((c, idx) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + idx * 0.1, duration: 0.45 }}
              className="rounded-xl border border-white/5 bg-bg-surface/70 p-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wide text-text-faint">
                  {c.id}
                </span>
                <span
                  className={[
                    "inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[9px] font-medium",
                    c.status === "scanning" &&
                      "bg-brand-blue/15 text-brand-blue",
                    c.status === "payment" &&
                      "bg-brand-teal/15 text-brand-teal",
                    c.status === "open" && "bg-white/5 text-text-muted",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {c.status === "scanning" && (
                    <ScanLine className="h-2.5 w-2.5" />
                  )}
                  {c.status === "payment" && (
                    <CreditCard className="h-2.5 w-2.5" />
                  )}
                  {c.status === "scanning" && "Scan"}
                  {c.status === "payment" && "Pay"}
                  {c.status === "open" && "Open"}
                </span>
              </div>
              <p className="mt-2 truncate text-[11px] font-medium text-white">
                {c.cashier}
              </p>
              <p className="mt-0.5 font-mono text-[10px] text-text-faint">
                {c.bills} bills · today
              </p>
            </motion.div>
          ))}
        </div>

        {/* Live throughput stream */}
        <div className="mt-3 rounded-xl border border-white/5 bg-bg-elevated/60 p-3">
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em]">
            <span className="text-text-faint">Live · last 5 min</span>
            <span className="flex items-center gap-1 text-brand-green">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-green animate-pulse" />
              Streaming
            </span>
          </div>
          <ul className="mt-2 flex flex-col gap-1 text-[11px] font-mono">
            <LiveLine when="13:08:42" what="C1 · Bill #INV-2604" amount={4495} />
            <LiveLine when="13:08:38" what="C2 · UPI ₹1,250 received" amount={1250} />
            <LiveLine when="13:08:31" what="Stock −2 · Cotton T-shirt M" />
            <LiveLine when="13:08:24" what="C3 · Customer added" />
          </ul>
        </div>
      </BrowserChrome>
    </div>
  );
}

function ScenarioClose() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <BrowserChrome label="EyePOS · Z-Report · 8:00 PM">
        <div className="rounded-xl border border-white/5 bg-bg-surface/70 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-text-faint">
                Today · Mon 24 May
              </p>
              <p className="mt-1 font-display text-2xl font-semibold tracking-tight text-white">
                ₹1,12,840
              </p>
              <p className="mt-0.5 font-mono text-[10px] text-text-muted">
                78 bills · 3 counters
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-2.5 py-1 text-[10px] font-medium text-brand-blue">
              <FileBarChart className="h-3 w-3" />
              Day closed
            </span>
          </div>

          {/* Payment mode split */}
          <div className="mt-4 grid grid-cols-3 gap-2 text-center">
            <PayBlock label="Cash" amount="₹18,420" pct="16%" />
            <PayBlock label="Card" amount="₹38,750" pct="34%" />
            <PayBlock label="UPI" amount="₹55,670" pct="50%" />
          </div>
        </div>

        {/* Top SKUs + low-stock split */}
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-white/5 bg-bg-elevated/60 p-3">
            <p className="font-mono text-[10px] uppercase tracking-wide text-text-faint">
              <TrendingUp className="mr-1 inline h-3 w-3 text-brand-green" />
              Top SKUs today
            </p>
            <ul className="mt-2 flex flex-col gap-1 text-[11px]">
              <li className="flex items-center justify-between text-text-secondary">
                <span className="truncate">Cotton T-shirt</span>
                <span className="font-mono text-text-muted">22</span>
              </li>
              <li className="flex items-center justify-between text-text-secondary">
                <span className="truncate">Slim-fit Jeans</span>
                <span className="font-mono text-text-muted">14</span>
              </li>
              <li className="flex items-center justify-between text-text-secondary">
                <span className="truncate">Leather Belt</span>
                <span className="font-mono text-text-muted">11</span>
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/5 bg-bg-elevated/60 p-3">
            <p className="font-mono text-[10px] uppercase tracking-wide text-text-faint">
              <BellRing className="mr-1 inline h-3 w-3 text-amber-400" />
              Low stock · 4 SKUs
            </p>
            <ul className="mt-2 flex flex-col gap-1 text-[11px]">
              <li className="flex items-center justify-between text-text-secondary">
                <span className="truncate">Belt · Brown · M</span>
                <span className="font-mono text-amber-400">2</span>
              </li>
              <li className="flex items-center justify-between text-text-secondary">
                <span className="truncate">Polo · Navy · L</span>
                <span className="font-mono text-amber-400">3</span>
              </li>
              <li className="flex items-center justify-between text-text-secondary">
                <span className="truncate">Cap · Black</span>
                <span className="font-mono text-amber-400">1</span>
              </li>
            </ul>
          </div>
        </div>
      </BrowserChrome>
    </div>
  );
}

function ScenarioFiling() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <BrowserChrome label="EyePOS · GST Filing · May 2026">
        <div className="rounded-xl border border-white/5 bg-bg-surface/70 p-4">
          <div className="flex items-center justify-between">
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-text-faint">
              May 2026 · 31 days
            </p>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-green/30 bg-brand-green/10 px-2.5 py-1 text-[10px] font-medium text-brand-green">
              <ShieldCheck className="h-3 w-3" />
              Reconciled
            </span>
          </div>

          {/* GSTR summary */}
          <div className="mt-4 grid grid-cols-2 gap-3">
            <GstCard
              code="GSTR-1"
              label="Outward supplies"
              value="₹28.4L"
              count="1,847 invoices"
              ready
            />
            <GstCard
              code="GSTR-3B"
              label="Summary return"
              value="₹3.06L"
              count="GST output liability"
              ready
            />
          </div>

          {/* Reconciliation row */}
          <div className="mt-4 rounded-lg border border-white/5 bg-bg-elevated/60 p-3">
            <div className="flex items-center justify-between text-[11px]">
              <span className="font-mono uppercase tracking-wide text-text-faint">
                Books vs returns
              </span>
              <span className="font-mono text-brand-green">
                <CheckCircle2 className="mr-1 inline h-3 w-3" />
                Match · 0 variance
              </span>
            </div>
          </div>

          {/* Action row */}
          <div className="mt-4 flex items-center gap-2">
            <button
              type="button"
              tabIndex={-1}
              aria-hidden
              className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-brand-blue/30 bg-brand-blue/15 px-3 py-2 text-[11px] font-medium text-brand-blue"
            >
              <Truck className="h-3 w-3" />
              Export GSTR JSON
            </button>
            <button
              type="button"
              tabIndex={-1}
              aria-hidden
              className="flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-bg-elevated/40 px-3 py-2 text-[11px] font-medium text-text-secondary"
            >
              <Receipt className="h-3 w-3" />
              View detail
            </button>
          </div>
        </div>
      </BrowserChrome>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Shared sub-components                                                     */
/* -------------------------------------------------------------------------- */

function BrowserChrome({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-bg-elevated/30 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-white/5 bg-bg-base px-3 py-2">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-500/40" />
            <span className="h-2 w-2 rounded-full bg-yellow-500/40" />
            <span className="h-2 w-2 rounded-full bg-green-500/40" />
          </div>
          <span className="ml-2 rounded-md bg-white/[0.04] px-2.5 py-0.5 font-mono text-[10px] text-text-faint">
            {label}
          </span>
        </div>
        <Sparkles className="h-3 w-3 text-brand-blue" />
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

function ZStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-bg-base/60 px-2 py-2 text-center">
      <p className="font-mono text-[9px] uppercase tracking-wide text-text-faint">
        {label}
      </p>
      <p className="mt-1 font-display text-base font-semibold text-white">
        {value}
      </p>
    </div>
  );
}

function LiveLine({
  when,
  what,
  amount,
}: {
  when: string;
  what: string;
  amount?: number;
}) {
  return (
    <li className="flex items-center justify-between gap-2">
      <span className="text-text-faint">{when}</span>
      <span className="flex-1 truncate text-text-secondary">{what}</span>
      {typeof amount === "number" && (
        <span className="shrink-0 text-brand-blue">{inr(amount)}</span>
      )}
    </li>
  );
}

function PayBlock({
  label,
  amount,
  pct,
}: {
  label: string;
  amount: string;
  pct: string;
}) {
  return (
    <div className="rounded-lg border border-white/5 bg-bg-base/60 px-2 py-2">
      <p className="font-mono text-[9px] uppercase tracking-wide text-text-faint">
        {label}
      </p>
      <p className="mt-1 text-xs font-semibold text-white">{amount}</p>
      <p className="mt-0.5 font-mono text-[9px] text-brand-blue">{pct}</p>
    </div>
  );
}

function GstCard({
  code,
  label,
  value,
  count,
  ready,
}: {
  code: string;
  label: string;
  value: string;
  count: string;
  ready?: boolean;
}) {
  return (
    <div className="rounded-lg border border-white/5 bg-bg-elevated/60 p-3">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[10px] uppercase tracking-wide text-brand-blue">
          {code}
        </p>
        {ready && (
          <span className="inline-flex items-center gap-0.5 text-[9px] font-mono text-brand-green">
            <CheckCircle2 className="h-2.5 w-2.5" />
            Ready
          </span>
        )}
      </div>
      <p className="mt-2 font-display text-lg font-semibold text-white">
        {value}
      </p>
      <p className="mt-0.5 truncate font-mono text-[10px] text-text-faint">
        {label} · {count}
      </p>
    </div>
  );
}

