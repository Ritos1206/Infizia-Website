"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Receipt,
  ScanLine,
  ShoppingCart,
  Smartphone,
  Wallet,
} from "lucide-react";

/**
 * EyePOS hero visual — counter UI in a browser frame, with a "live books"
 * receipt chip showing how a counter sale instantly posts to the journal.
 *
 * Structurally similar to VitacareCalendarMockup (browser frame, ambient
 * glow, dot lights, product label chip) but the content reads as a real
 * point-of-sale terminal.
 *
 *  - Header strip: store name + cashier + bill number + time
 *  - Cart panel: 3 scanned items with quantities and unit prices
 *  - Bill summary: subtotal, GST 12% split, total in ₹
 *  - Payment row: Cash / Card / UPI buttons (UPI highlighted as the active mode)
 *  - Floating "live books" chip beside the frame: shows the journal entry
 *    that just posted from this bill
 *
 * Brand accent: blue (EyePOS' assigned color in the brand-color trio).
 */

type CartItem = {
  sku: string;
  name: string;
  qty: number;
  rate: number;
};

const CART: CartItem[] = [
  { sku: "AP-114", name: "Cotton T-shirt · M", qty: 2, rate: 599 },
  { sku: "AP-208", name: "Slim-fit Jeans · 32", qty: 1, rate: 1499 },
  { sku: "AC-077", name: "Leather Belt", qty: 1, rate: 799 },
];

const SUBTOTAL = CART.reduce((sum, i) => sum + i.qty * i.rate, 0);
const GST_RATE = 0.12;
const GST = Math.round(SUBTOTAL * GST_RATE);
const TOTAL = SUBTOTAL + GST;

const inr = (n: number) =>
  "₹" + n.toLocaleString("en-IN", { maximumFractionDigits: 0 });

export function EyeposCounterMockup() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      {/* Ambient glow — brand-blue forward, brand-teal trailing */}
      <div className="pointer-events-none absolute -inset-12 -z-10 rounded-[40px] bg-brand-blue/[0.14] blur-[60px]" />
      <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[40px] bg-brand-teal/[0.06] blur-[40px]" />

      {/* Main browser frame */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-bg-surface shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.04)_inset]">
        {/* Browser top bar */}
        <div className="flex items-center justify-between border-b border-white/5 bg-bg-base px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/40" />
            </div>
            <div className="ml-3 flex items-center gap-2 rounded-md bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-text-faint">
              <Receipt className="h-3 w-3 text-brand-blue" />
              EyePOS · Counter
            </div>
          </div>
          <div className="hidden items-center gap-2 font-mono text-[10px] text-text-faint sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-green animate-pulse" />
            Live · 14:32
          </div>
        </div>

        {/* Store strip */}
        <div className="flex items-center justify-between border-b border-white/5 bg-bg-base/60 px-5 py-3">
          <div>
            <p className="font-display text-sm font-semibold text-white">
              Trendline · Andheri West
            </p>
            <p className="mt-0.5 font-mono text-[10px] tracking-wide text-text-faint">
              CASHIER · PRIYA · BILL #INV-2604
            </p>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-2.5 py-1 text-[10px] font-medium text-brand-blue">
            <ScanLine className="h-3 w-3" />
            Scan ready
          </div>
        </div>

        {/* Cart items */}
        <div className="px-5 py-4">
          <div className="mb-3 flex items-center justify-between font-mono text-[10px] tracking-[0.18em] uppercase text-text-faint">
            <span className="flex items-center gap-1.5">
              <ShoppingCart className="h-3 w-3" />
              Cart · {CART.length} items
            </span>
            <span>Qty × Rate</span>
          </div>

          <ul className="flex flex-col gap-2">
            {CART.map((it, idx) => (
              <motion.li
                key={it.sku}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.12, duration: 0.45 }}
                className="flex items-center justify-between rounded-lg border border-white/5 bg-bg-elevated/60 px-3 py-2.5"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-white">
                    {it.name}
                  </p>
                  <p className="mt-0.5 font-mono text-[10px] text-text-faint">
                    {it.sku}
                  </p>
                </div>
                <div className="ml-3 shrink-0 text-right">
                  <p className="font-mono text-xs text-text-secondary">
                    {it.qty} × {inr(it.rate)}
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-white">
                    {inr(it.qty * it.rate)}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Bill summary */}
        <div className="border-t border-white/5 bg-bg-base/40 px-5 py-4">
          <div className="flex items-center justify-between text-xs text-text-muted">
            <span>Subtotal</span>
            <span className="font-mono">{inr(SUBTOTAL)}</span>
          </div>
          <div className="mt-1.5 flex items-center justify-between text-xs text-text-muted">
            <span>GST · 12%</span>
            <span className="font-mono">{inr(GST)}</span>
          </div>
          <div className="mt-3 flex items-end justify-between border-t border-white/5 pt-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
              Total payable
            </span>
            <span className="font-display text-2xl font-semibold tracking-tight text-white">
              {inr(TOTAL)}
            </span>
          </div>
        </div>

        {/* Payment row */}
        <div className="grid grid-cols-3 gap-2 border-t border-white/5 bg-bg-base/60 px-5 py-4">
          <PayButton label="Cash" />
          <PayButton label="Card" />
          <PayButton label="UPI" active />
        </div>
      </div>

      {/* Floating "live books" chip — shows journal entry posting in real time */}
      <motion.div
        initial={{ opacity: 0, x: -16, y: 8 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.9, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -bottom-7 -left-4 hidden w-[260px] rounded-xl border border-white/10 bg-bg-elevated/95 p-3 shadow-[0_18px_50px_-12px_rgba(0,0,0,0.6)] backdrop-blur-sm sm:block lg:-left-10"
      >
        <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase text-brand-blue">
          <Wallet className="h-3 w-3" />
          Journal entry · auto-posted
        </div>
        <ul className="mt-2 flex flex-col gap-1 text-[11px] font-mono text-text-secondary">
          <li className="flex items-center justify-between">
            <span>Sales A/c</span>
            <span className="text-text-muted">Cr {inr(SUBTOTAL)}</span>
          </li>
          <li className="flex items-center justify-between">
            <span>GST Output</span>
            <span className="text-text-muted">Cr {inr(GST)}</span>
          </li>
          <li className="flex items-center justify-between text-white">
            <span>UPI Wallet</span>
            <span>Dr {inr(TOTAL)}</span>
          </li>
        </ul>
        <div className="mt-2.5 flex items-center gap-1.5 text-[10px] text-text-faint">
          <CheckCircle2 className="h-3 w-3 text-brand-green" />
          Posted in 0.4s
        </div>
      </motion.div>

      {/* Floating "WhatsApp sent" chip — top right */}
      <motion.div
        initial={{ opacity: 0, x: 16, y: -8 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.15, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -top-5 -right-3 hidden items-center gap-2 rounded-full border border-white/10 bg-bg-elevated/95 px-3 py-1.5 shadow-[0_12px_36px_-8px_rgba(0,0,0,0.6)] backdrop-blur-sm md:flex lg:-right-6"
      >
        <Smartphone className="h-3.5 w-3.5 text-brand-green" />
        <span className="text-[11px] font-medium text-text-secondary">
          Receipt sent on WhatsApp
        </span>
      </motion.div>

      {/* Floating "Stock decremented" pill — bottom right */}
      <motion.div
        initial={{ opacity: 0, x: 16, y: 8 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.35, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -bottom-3 right-2 hidden items-center gap-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-3 py-1.5 backdrop-blur-sm md:flex lg:right-6"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-brand-blue animate-pulse" />
        <span className="font-mono text-[10px] tracking-wide text-brand-blue">
          Stock −4 units · 3 SKUs
        </span>
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
function PayButton({ label, active }: { label: string; active?: boolean }) {
  return (
    <button
      type="button"
      tabIndex={-1}
      aria-hidden
      className={[
        "group flex items-center justify-center gap-1.5 rounded-lg border px-3 py-2.5 text-xs font-medium transition-colors",
        active
          ? "border-brand-blue/40 bg-brand-blue/15 text-brand-blue"
          : "border-white/10 bg-bg-elevated/40 text-text-secondary hover:border-white/20 hover:text-white",
      ].join(" ")}
    >
      {label}
      {active && <ArrowRight className="h-3.5 w-3.5" />}
    </button>
  );
}
