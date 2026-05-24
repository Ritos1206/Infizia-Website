"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  CheckCircle2,
  ClipboardCheck,
  MapPinned,
  MessageCircle,
  Receipt,
  Sparkles,
  Wallet,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Bento-style features grid for EyePOS.
 *
 * Two narrative-heavy tiles anchor the grid:
 *  - HeroPosTile (top-left, col-span-2) — POS billing with a mini cart UI
 *  - LiveBooksTile (bottom-left, col-span-2) — auto-posted journal entry
 *
 * Five standard tiles fill in the remaining capabilities. Together they
 * cover all 7 content features (POS, inventory, accounting, WhatsApp,
 * multi-location, GST compliance, AI insights).
 *
 * Brand accent: blue.
 */
export function EyeposBentoFeatures() {
  return (
    <section className="relative py-24 md:py-32">
      {/* Subtle ambient gradient line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />

      <Container>
        <SectionHeader
          kicker="Features"
          title="One platform. Counter, inventory, books, GST."
          lede="Each capability serves the same job: replace three disconnected tools with one source of truth where every transaction reconciles itself."
          gradient
        />

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Hero tile — POS billing with mini cart UI (col-span-2 on lg) */}
          <Reveal className="lg:col-span-2 lg:row-span-1">
            <HeroPosTile />
          </Reveal>

          {/* Standard tile — Inventory */}
          <Reveal delay={0.05}>
            <StandardTile
              Icon={Boxes}
              title="Inventory & stock control"
              body="Multi-warehouse tracking, batch / expiry / serial numbers, low-stock alerts, purchase orders + GRN, and stock transfers between locations."
            />
          </Reveal>

          {/* Standard tile — WhatsApp customer comms */}
          <Reveal delay={0.1}>
            <StandardTile
              Icon={MessageCircle}
              title="WhatsApp-native customer comms"
              body="Digital receipts, order updates, abandoned-cart nudges, and reorder prompts on WhatsApp Business — purpose-built for Indian retail buying behavior."
            />
          </Reveal>

          {/* Standard tile — Multi-location */}
          <Reveal delay={0.12}>
            <StandardTile
              Icon={MapPinned}
              title="Multi-location & multi-user"
              body="Branch-wise dashboards, role-based access, centralized pricing and discounts, and location-level P&L — manage 1 store or 100 from one console."
            />
          </Reveal>

          {/* Standard tile — AI insights */}
          <Reveal delay={0.15}>
            <StandardTile
              Icon={Sparkles}
              title="AI insights & demand forecasting"
              body="Reorder-point suggestions from sales velocity. Anomaly detection on stock variances. Natural-language report queries — &ldquo;top 10 SKUs at Andheri last week.&rdquo;"
            />
          </Reveal>

          {/* Wide tile — Live Books journal entry (spans 2 on lg) */}
          <Reveal delay={0.18} className="lg:col-span-2">
            <LiveBooksTile />
          </Reveal>

          {/* Standard tile — GST · e-invoicing · e-way bill */}
          <Reveal delay={0.2}>
            <StandardTile
              Icon={ClipboardCheck}
              title="GST · e-invoicing · e-way bill"
              body="Compliance baked in, not bolted on. e-invoice IRN generation, QR code printing, GSTR-1 / 3B export, and e-way bill creation directly from the bill."
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Tiles                                                                     */
/* -------------------------------------------------------------------------- */

function StandardTile({
  Icon,
  title,
  body,
}: {
  Icon: typeof Boxes;
  title: string;
  body: string;
}) {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-bg-surface p-6 transition-all hover:border-brand-blue/40 md:p-7">
      {/* Hover gradient line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brand-blue/60 via-brand-blue/0 to-brand-blue/0 opacity-0 transition-opacity group-hover:opacity-100" />
      {/* Hover glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-blue/[0.10] blur-3xl opacity-0 transition-opacity group-hover:opacity-60" />

      <div className="relative">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-blue/30 bg-brand-blue/10 text-brand-blue">
          <Icon className="h-5 w-5" strokeWidth={1.6} />
        </div>
        <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-white">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-text-secondary md:text-base">
          {body}
        </p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hero tile — POS billing with mini cart UI                                  */
/* -------------------------------------------------------------------------- */

function HeroPosTile() {
  const items = [
    { name: "Cotton T-shirt · M", qty: 2, line: 1198 },
    { name: "Slim-fit Jeans · 32", qty: 1, line: 1499 },
    { name: "Leather Belt", qty: 1, line: 799 },
  ];
  const subtotal = items.reduce((s, i) => s + i.line, 0);
  const gst = Math.round(subtotal * 0.12);
  const total = subtotal + gst;
  const inr = (n: number) =>
    "₹" + n.toLocaleString("en-IN", { maximumFractionDigits: 0 });

  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-brand-blue/20 bg-gradient-to-br from-bg-surface via-bg-surface to-brand-blue/[0.05] p-6 transition-all hover:border-brand-blue/40 md:p-8">
      {/* Top accent line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/60 to-transparent" />
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-blue/[0.14] blur-3xl" />

      <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 md:items-center md:gap-8">
        {/* Copy */}
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-blue/30 bg-brand-blue/10 text-brand-blue">
              <Receipt className="h-5 w-5" strokeWidth={1.6} />
            </div>
            <span className="rounded-full border border-brand-blue/30 bg-brand-blue/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-brand-blue">
              Counter speed
            </span>
          </div>

          <h3 className="mt-6 font-display text-2xl font-semibold leading-tight tracking-tight text-white md:text-3xl">
            Point-of-sale billing
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary md:text-base">
            Fast counter checkout with barcode scanning, multi-payment modes
            (cash / card / UPI / split), customer lookup, returns and exchanges
            — all offline-resilient.
          </p>
        </div>

        {/* Mini cart UI */}
        <div className="relative">
          <div className="rounded-2xl border border-white/5 bg-bg-base/80 p-4 backdrop-blur">
            <div className="mb-2.5 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-text-faint">
              <span>Cart · {items.length} items</span>
              <span className="text-brand-blue">Bill #2604</span>
            </div>
            <ul className="flex flex-col gap-1.5">
              {items.map((it, i) => (
                <motion.li
                  key={it.name}
                  initial={{ opacity: 0, y: 4 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                  className="flex items-center justify-between rounded-lg bg-white/[0.02] px-2.5 py-1.5"
                >
                  <span className="truncate text-[11px] text-text-secondary">
                    {it.qty} × {it.name}
                  </span>
                  <span className="ml-2 shrink-0 font-mono text-[11px] text-white">
                    {inr(it.line)}
                  </span>
                </motion.li>
              ))}
            </ul>
            <div className="mt-3 flex items-center justify-between border-t border-white/5 pt-2.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-text-faint">
                Total + GST
              </span>
              <span className="font-display text-lg font-semibold text-white">
                {inr(total)}
              </span>
            </div>
            {/* Payment chips */}
            <div className="mt-3 grid grid-cols-3 gap-1.5">
              {["Cash", "Card", "UPI"].map((m, i) => (
                <span
                  key={m}
                  className={`rounded-md border px-2 py-1 text-center text-[10px] font-medium ${
                    i === 2
                      ? "border-brand-blue/40 bg-brand-blue/15 text-brand-blue"
                      : "border-white/10 bg-white/[0.02] text-text-secondary"
                  }`}
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Wide tile — Live books / journal entry mini-UI                             */
/* -------------------------------------------------------------------------- */

function LiveBooksTile() {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-bg-surface p-6 transition-all hover:border-brand-blue/40 md:p-8">
      {/* Top accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brand-blue/60 via-brand-blue/0 to-brand-blue/0 opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-5 md:items-center md:gap-8">
        {/* Left: copy */}
        <div className="md:col-span-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-blue/30 bg-brand-blue/10 text-brand-blue">
            <Wallet className="h-5 w-5" strokeWidth={1.6} />
          </div>
          <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-white md:text-2xl">
            Integrated accounting — books update with every bill
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary md:text-base">
            Auto-posted journal entries from every sale and stock move; full
            chart of accounts; bank reconciliation; P&amp;L, balance sheet, and
            cash-flow on one click. No month-end reconciliation. No re-entry.
          </p>
        </div>

        {/* Right: mini journal-entry visual */}
        <div className="md:col-span-2">
          <div className="space-y-1.5 rounded-xl border border-white/5 bg-bg-base/60 p-3">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <motion.span
                  className="h-1.5 w-1.5 rounded-full bg-brand-blue"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.4, repeat: Infinity }}
                />
                <span className="font-mono text-[9px] uppercase tracking-wider text-brand-blue">
                  Posted · 14:32:18
                </span>
              </span>
              <span className="font-mono text-[9px] text-text-faint">
                JE-04827
              </span>
            </div>

            {[
              { line: "Sales A/c", side: "Cr", amt: "₹3,496" },
              { line: "GST Output", side: "Cr", amt: "₹420" },
              { line: "UPI Wallet", side: "Dr", amt: "₹3,916" },
            ].map((e, i) => (
              <motion.div
                key={e.line}
                initial={{ opacity: 0, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-2 rounded-lg bg-white/[0.02] px-2 py-1.5"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[9px] uppercase tracking-wider text-text-faint">
                    {e.side === "Cr" ? "Credit" : "Debit"}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-text-secondary">
                      {e.line}
                    </span>
                    <span className="font-mono text-[11px] text-white">
                      {e.amt}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="rounded-lg border border-brand-blue/20 bg-brand-blue/[0.06] px-2 py-1.5">
              <p className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-brand-blue">
                <CheckCircle2 className="h-2.5 w-2.5" />
                Books updated · 0.4s after the bill
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Compact pill row of additional accounting capabilities */}
      <div className="relative mt-6 flex flex-wrap items-center gap-2 border-t border-white/5 pt-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
          + Includes
        </span>
        {[
          "Chart of accounts",
          "Bank reconciliation",
          "P&L · BS · Cash flow",
          "Party ledgers",
          "Outstanding & aging",
        ].map((chip) => (
          <span
            key={chip}
            className="rounded-full border border-white/10 bg-white/[0.02] px-2 py-0.5 text-[10px] text-text-secondary"
          >
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
}
