/**
 * Finance & Operations solution — content brief.
 *
 * Brand accent: sky (matches DocuMind, the back-office anchor for this
 * vertical). The hero idiom is a ledger ticker — a horizontal scrolling
 * tape of journal entries with a delta column on the right showing the
 * running balance. Visualises "every document becomes a journal entry,
 * automatically".
 *
 * Mapped products:
 *   • DocuMind (anchor — invoice / form / contract reading and posting)
 *   • EyePOS (POS + GST-compliant accounting + multi-location inventory
 *     for retail / wholesale / service businesses)
 *   • Intellix (vendor + customer queries: payment status, GST queries,
 *     reconciliation questions in any language)
 *   • Performix (ops team performance + SLA tracking on the back office)
 */

import {
  AlarmClock,
  ArrowDownRight,
  Banknote,
  BarChart3,
  Boxes,
  Briefcase,
  Building2,
  CheckCheck,
  CheckCircle2,
  ClipboardCheck,
  CreditCard,
  FileSearch,
  FileText,
  IndianRupee,
  Layers,
  PieChart,
  Receipt,
  ShieldCheck,
  Sparkles,
  Store,
  Timer,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react";

import type { SolutionContent } from "./types";

export const financeOperationsContent: SolutionContent = {
  slug: "finance-operations",
  name: "Finance & Operations",
  verticalLabel: "Finance & Operations",
  accent: "sky",

  tagline: "Paperwork. Posted. Reconciled.",

  positioning:
    "The back office is where modern businesses lose hours every day — invoices that need typing, GST that needs reconciling, POS that doesn't talk to the ledger, and vendor questions that pile up unanswered. Most teams power through it with one underpaid accountant, one Excel sheet, and a folder of scanned PDFs. Infizia replaces all of that with one connected stack: every document gets read and posted automatically, every counter reconciles to the same ledger in real time, and every routine question gets answered the moment it's asked.",

  pulse: {
    kicker: "Industry pulse",
    title: "Where back-office time actually goes.",
    lede: "Most finance teams spend more time moving data than analysing it. Most ops teams firefight the same five questions every day.",
    items: [
      {
        value: "8 hrs",
        label: "per week per accountant typing invoices manually",
        caption: "Mid-size finance teams · baseline",
      },
      {
        value: "₹14L",
        label: "average annual cost of GST + reconciliation errors per business",
        caption: "Industry estimate · mid-market retail",
      },
      {
        value: "21 days",
        label: "average gap between invoice receipt and ledger posting",
        caption: "When done manually",
      },
      {
        value: "3+",
        label: "tools for one transaction: POS, accounting, GST utility",
        caption: "Standard small-business setup",
      },
    ],
  },

  pain: {
    kicker: "What's slowing you down",
    title: "Four frictions every back office is paying for.",
    lede: "Manual data entry, mismatched systems, slow vendor responses, and SLA blindness — the back office's universal four-pack.",
    items: [
      {
        icon: FileText,
        title: "Invoices typed by hand",
        body: "Every supplier invoice, every claim form, every sales bill gets re-keyed into the ERP by an accountant. Errors compound, audits drag, and the team spends weeks doing data entry instead of analysis.",
      },
      {
        icon: Layers,
        title: "POS, accounting, GST live in 3 places",
        body: "Shop counter uses one system, the books use another, the GST utility is a third. End-of-month reconciliation is someone's full week — and any drift becomes a tax liability.",
      },
      {
        icon: AlarmClock,
        title: "Vendor + customer queries pile up",
        body: "\"Has my payment been processed?\", \"Where's my GST input credit?\", \"Why is the bill different?\" — every one of these is a human pulling up three screens to answer a routine question.",
      },
      {
        icon: ClipboardCheck,
        title: "SLA blindness on the ops floor",
        body: "Who's processing what, who's behind, who's on track — most ops leaders only find out at the monthly review. By then it's too late to course-correct.",
      },
    ],
  },

  stack: {
    kicker: "The Infizia stack for finance & ops",
    title: "Four products. One real-time ledger.",
    lede: "DocuMind reads everything. EyePOS prices and posts everything. Intellix answers everything routine. Performix audits the ops team itself.",
    entries: [
      {
        productSlug: "documind",
        role: "Anchor — every invoice, form, and contract read, validated against your business rules, and auto-posted to your ERP.",
      },
      {
        productSlug: "eyepos",
        role: "Unified POS + inventory + GST-compliant accounting for retail, wholesale, and service businesses — multi-location, real-time, audit-ready.",
      },
      {
        productSlug: "intellix",
        role: "Multilingual chat + voice assistant grounded in your ledger and POS — answers vendor and customer queries on payment status, GST, and reconciliation in seconds.",
      },
      {
        productSlug: "performix",
        role: "Tracks how the ops team itself is performing — SLA dashboards, structured assessments, and continuous feedback so back-office work is auditable.",
      },
    ],
  },

  useCases: {
    kicker: "Who it's for",
    title: "Wherever paperwork shapes the P&L.",
    lede: "The same four-product stack scales — what changes is which product leads and how the ledger is shared across teams.",
    items: [
      {
        icon: Store,
        title: "Multi-location retail & wholesale",
        body: "EyePOS unifies counters, inventory, and accounting across branches. DocuMind reads supplier invoices on the way in. The whole network reconciles to one real-time ledger.",
      },
      {
        icon: Briefcase,
        title: "Mid-market finance & shared services",
        body: "Centralise document processing across business units. DocuMind reads, validates, and posts. Performix dashboards the team. SLAs become enforceable, not aspirational.",
      },
      {
        icon: Building2,
        title: "Service businesses with high paperwork volume",
        body: "Insurance, logistics, healthcare, education — anywhere a customer interaction generates 3+ documents. Read once, post once, and answer the inevitable follow-up automatically.",
      },
    ],
  },

  outcomes: {
    kicker: "What changes",
    title: "Hours back. Errors gone. Books closed faster.",
    lede: "Each tile compounds: faster posting → cleaner books → faster close → cleaner audit. The whole back office moves up a tempo.",
    items: [
      {
        icon: Timer,
        metric: "−85% data entry",
        body: "DocuMind reads every document and posts the structured fields straight to the ERP. The accountant stops typing — and starts checking.",
      },
      {
        icon: CheckCheck,
        metric: "Real-time GST",
        body: "Every counter sale, every supplier invoice, every return reconciles to the same ledger in real time. Filing prep collapses from days to a click.",
      },
      {
        icon: Banknote,
        metric: "Same-day reconciliation",
        body: "POS, accounting, and GST utility unified into one system. Multi-location, multi-counter — closed and balanced by end of day.",
      },
      {
        icon: TrendingDown,
        metric: "−70% routine queries",
        body: "Vendor + customer questions on payment status, GST, and reconciliation answered automatically — in any local language, at any hour.",
      },
    ],
  },
};

/**
 * Sample journal entries rendered by the LedgerTicker hero. Each entry
 * = a transaction posted by the stack into the unified ledger.
 *
 * Each entry: type icon, payee, amount, ± direction, timestamp.
 */
export type LedgerEntry = {
  icon: typeof Receipt;
  type: string;
  payee: string;
  amount: string;
  direction: "credit" | "debit";
  source: string;
  ts: string;
};

export const FINANCE_LEDGER_ENTRIES: LedgerEntry[] = [
  {
    icon: Receipt,
    type: "Invoice posted",
    payee: "Aria Skincare",
    amount: "₹84,500",
    direction: "credit",
    source: "DocuMind",
    ts: "09:14",
  },
  {
    icon: Wallet,
    type: "POS sale",
    payee: "Counter · Mumbai",
    amount: "₹2,499",
    direction: "credit",
    source: "EyePOS",
    ts: "09:18",
  },
  {
    icon: CreditCard,
    type: "Vendor payment",
    payee: "Brew Lab",
    amount: "₹14,800",
    direction: "debit",
    source: "DocuMind",
    ts: "09:22",
  },
  {
    icon: FileSearch,
    type: "GST input claimed",
    payee: "Pack & Go",
    amount: "₹3,420",
    direction: "credit",
    source: "DocuMind",
    ts: "09:31",
  },
  {
    icon: Wallet,
    type: "POS sale",
    payee: "Counter · Pune",
    amount: "₹1,899",
    direction: "credit",
    source: "EyePOS",
    ts: "09:34",
  },
  {
    icon: Receipt,
    type: "Service invoice",
    payee: "Maison Wear",
    amount: "₹52,000",
    direction: "credit",
    source: "DocuMind",
    ts: "09:42",
  },
  {
    icon: ArrowDownRight,
    type: "Return refund",
    payee: "Order #4821",
    amount: "₹1,499",
    direction: "debit",
    source: "EyePOS",
    ts: "09:46",
  },
  {
    icon: CheckCircle2,
    type: "Reconciled",
    payee: "GSTR-3B · Q4",
    amount: "₹0.00",
    direction: "credit",
    source: "DocuMind",
    ts: "09:50",
  },
];

export const FINANCE_BADGES = [
  { icon: Sparkles, label: "Read · validate · post · auto" },
  { icon: ShieldCheck, label: "Audit-ready ledger" },
  { icon: BarChart3, label: "Real-time dashboards" },
  { icon: PieChart, label: "GST · TDS · TCS automated" },
  { icon: TrendingUp, label: "Same-day reconciliation" },
  { icon: Boxes, label: "Multi-location · multi-counter" },
  { icon: IndianRupee, label: "INR-native · GST-native" },
] as const;
