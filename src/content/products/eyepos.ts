/**
 * EyePOS — Account Inventory Solution.
 * Source of truth: docs/DEVLOG.md → "Finalized Product Content" → EyePOS
 * (originally locked as iPOS in Session 2, brand-renamed in Session 10).
 *
 * Mirror any edits here back into the DEVLOG so the brochure deck and the
 * page stay in sync.
 */

import {
  Banknote,
  Boxes,
  ClipboardCheck,
  CreditCard,
  FileBarChart,
  MapPinned,
  MessageCircle,
  Receipt,
  ScanLine,
  Sparkles,
  Wallet,
  Workflow,
} from "lucide-react";

import type { FlagshipProductContent } from "./types";

export const eyeposContent: FlagshipProductContent = {
  slug: "eyepos",
  name: "EyePOS",
  vertical: "Finance & Operations",
  accent: "blue",

  tagline: "Run the counter. Close the books. Both in real time.",

  positioning:
    "EyePOS unifies point-of-sale billing, inventory control, and full-stack accounting on a single platform — so every counter transaction posts straight to the books and stock counts stay honest, in real time. Built for multi-location retailers, wholesalers, and service businesses that want one source of truth instead of three disconnected tools — with GST, e-invoicing, and e-way bill compliance baked in.",

  problem: {
    kicker: "The problem",
    title: "Retail runs on three systems that don't talk to each other.",
    body: "Most multi-location businesses run a standalone POS at the counter, separate accounting software in the back office, and a paper or Excel stock register on the shop floor. Sales don't reconcile to the books in real time. Stock levels drift. GST filings become a month-end fire drill. And every branch has its own version of the truth. EyePOS collapses POS, inventory, and accounting onto one platform — so a sale at the counter posts to the books, decrements stock, and surfaces in the central dashboard the moment it happens.",
  },

  flow: {
    kicker: "How EyePOS works",
    title: "Scan. Bill. Books update. Stock decrements. WhatsApp the customer.",
    lede: "The full counter-to-books flow in five steps — what used to span three tools and two days now happens in seconds, automatically.",
    steps: [
      {
        n: "01",
        title: "Scan and bill at the counter",
        body: "Barcode scan → cart → cash / card / UPI / split payment. Multi-payment, GST auto-applied, e-invoice generated.",
        icon: ScanLine,
      },
      {
        n: "02",
        title: "Books post automatically",
        body: "Every sale becomes a journal entry — Sales Account, GST Output, Cash / Card / UPI — posted in real time. No manual entry, no end-of-day reconciliation.",
        icon: Workflow,
      },
      {
        n: "03",
        title: "Stock decrements live",
        body: "Multi-warehouse inventory updates the moment items leave the counter. Low-stock alerts and reorder suggestions fire automatically.",
        icon: Boxes,
      },
      {
        n: "04",
        title: "WhatsApp the customer",
        body: "Digital receipt sent on WhatsApp Business — purchase summary, GST invoice, return policy, reorder nudge. No paper, no email bounces.",
        icon: MessageCircle,
      },
      {
        n: "05",
        title: "Close the day in one click",
        body: "End-of-day Z-report — sales by SKU, payment-mode split, GST output, cashier reconciliation. GSTR-1 / 3B generate themselves at month-end.",
        icon: FileBarChart,
      },
    ],
  },

  features: {
    kicker: "Features",
    title: "One platform. Counter, inventory, books, GST.",
    lede: "Each capability serves the same job: replace three disconnected tools with one source of truth where every transaction reconciles itself.",
    items: [
      {
        icon: Receipt,
        title: "Point-of-sale billing",
        body: "Fast counter checkout with barcode scanning, multi-payment modes (cash / card / UPI / split), customer lookup, returns and exchanges, and offline-resilient sync.",
      },
      {
        icon: Boxes,
        title: "Inventory & stock control",
        body: "Multi-warehouse tracking, batch / expiry / serial numbers, low-stock alerts, purchase orders + GRN, and stock transfers between locations.",
      },
      {
        icon: Wallet,
        title: "Integrated accounting",
        body: "Auto-posted journal entries from every sale and stock move; full chart of accounts; bank reconciliation; P&L, balance sheet, and cash-flow on one click.",
      },
      {
        icon: MessageCircle,
        title: "WhatsApp-native customer comms",
        body: "Digital receipts, order updates, abandoned-cart nudges, and reorder prompts on WhatsApp Business — purpose-built for Indian retail buying behavior.",
      },
      {
        icon: MapPinned,
        title: "Multi-location & multi-user",
        body: "Branch-wise dashboards, role-based access, centralized pricing and discounts, and location-level P&L — manage 1 store or 100 from one console.",
      },
      {
        icon: ClipboardCheck,
        title: "GST · e-invoicing · e-way bill",
        body: "Compliance baked in, not bolted on. e-invoice IRN generation, QR code printing, GSTR-1 / 3B export, and e-way bill creation directly from the bill.",
      },
      {
        icon: Sparkles,
        title: "AI insights & demand forecasting",
        body: "Reorder-point suggestions from sales velocity. Anomaly detection on stock variances and cashier patterns. Natural-language report queries — \"top 10 SKUs at the Andheri branch last week.\"",
      },
    ],
  },

  useCases: {
    kicker: "Who it's for",
    title: "Built for the businesses where stock, sale, and books all matter.",
    lede: "From single-store retail to multi-state distribution chains — EyePOS scales from one counter to one hundred without changing how the back office works.",
    items: [
      {
        icon: CreditCard,
        title: "Multi-store retail chains",
        body: "Apparel, grocery, pharmacy, electronics, footwear — unified POS, inventory, and books across all branches. Central pricing, distributed billing, consolidated reporting.",
      },
      {
        icon: Banknote,
        title: "Wholesale & distribution",
        body: "Order-to-cash flows with credit terms, party ledgers, delivery challans, e-way bills, and GST-compliant invoicing. Outstanding tracking and aging reports built in.",
      },
      {
        icon: ClipboardCheck,
        title: "Service businesses with stock",
        body: "Salons, clinics, repair shops, garages — appointments + product/service billing + accounting on one platform. GST-compliant invoices for both services and goods.",
      },
    ],
  },

  caseStudy: {
    intro:
      "A 12-store apparel chain across three cities consolidated three legacy tools — Tally for accounting, a paper stock register, and a standalone POS — into EyePOS.",
    stats: [
      { value: "−70%", label: "Stock-take time per branch" },
      { value: "−80%", label: "GST filing turnaround" },
      { value: "Daily", label: "P&L visibility at every branch" },
    ],
  },
};
