/**
 * DocuMind — Intelligent Document Processing Platform.
 *
 * Single source of truth: `docs/brochures/documind-brochure.md` (drafted
 * from the Infizia website architecture document positioning + standard
 * IDP capability set). Once the design team produces the brochure PDF,
 * drop it at `web/public/brochures/documind.pdf`.
 *
 * Brand accent: sky — bright, calm, "clean signal" feel that fits
 * document processing's "messy in, clean out" narrative. Distinct from
 * brand-blue (saturated navy), brand-teal (mint), and the new cyan
 * (Infera).
 *
 * Bespoke visual: DocumindExtractionVisual — invoice document with an
 * animated scan-line + bounding-box recognition overlay, alongside a
 * structured-data panel that materializes field-by-field.
 * Mid-page: DocumindInboxToBooks — 3-stage horizontal pipeline
 * (Captured → Validated → Posted) showing the document's journey from
 * inbox to ERP.
 *
 * Voice rule: business-first. No technology / vendor names exposed in
 * any user-facing string here. ERP partner names (Tally, SAP, Zoho
 * Books, QuickBooks, Oracle) are referenced as integration endpoints —
 * they are partnership signals, not tech-stack leaks.
 */

import {
  Archive,
  Boxes,
  CircleDollarSign,
  FileCheck,
  GitBranch,
  Inbox,
  Layers,
  ScanLine,
  Shield,
  Workflow,
} from "lucide-react";

import type { StandardProductContent } from "./types";

export const documindContent: StandardProductContent = {
  slug: "documind",
  name: "DocuMind",
  vertical: "Finance & Operations",
  accent: "sky",

  tagline: "Every invoice. Read, validated, and filed — automatically.",

  positioning:
    "DocuMind is an AI-powered intelligent document processing platform that turns piles of invoices, forms, contracts, and business documents into clean, validated, system-ready data — without anyone typing a single field. Drop a PDF, scanned image, or mobile photo in. DocuMind reads it, extracts every relevant field, validates the data against your business rules, and posts it straight to your ERP. Manual data entry collapses from hours per day to exception handling only — and the audit trail is automatic, end to end.",

  problem: {
    kicker: "The challenge",
    title: "Finance teams run on a paper-and-PDF backlog.",
    body: "Hours of manual data entry every day — invoices, forms, contracts, KYC paperwork, every field re-typed by a human into the ERP. Costly errors compound: typos, missed fields, wrong vendor codes, broken reconciliations. Paper invoices stick in someone's tray, PDFs hide in inboxes, and there's no visibility into what's pending or processed. GST validation, vendor master matching, signature checks — all manual; audit trails reconstructed after the fact. Every vendor, every form sends documents in their own layout, breaking rule-based parsers the moment the layout changes. DocuMind ingests any document, reads it intelligently, validates it, and posts it to the systems of record — without writing a parser per format.",
  },

  features: {
    kicker: "Capabilities",
    title: "From any document to system-ready data — in seconds.",
    lede: "Multi-format ingestion, AI extraction with no parser templates, validation against your business rules, ERP auto-posting, approval workflows, and a full audit archive — every step on one platform.",
    items: [
      {
        icon: Inbox,
        title: "Drop a document. Get clean data.",
        body: "PDF, scanned image, mobile photo, or email attachment — DocuMind reads it, extracts every field, and hands you system-ready data in seconds.",
      },
      {
        icon: ScanLine,
        title: "AI extraction with no parser templates",
        body: "Every common format handled on day one. Invoices, purchase orders, contracts, KYC paper, claim forms — all of it, no per-vendor setup.",
      },
      {
        icon: FileCheck,
        title: "Validated against your business rules",
        body: "GSTIN format, vendor master matching, math reconciliation, duplicate detection, threshold approvals — errors caught before they hit the books.",
      },
      {
        icon: GitBranch,
        title: "Auto-posted to your ERP",
        body: "Direct integrations with Tally, SAP, Zoho Books, QuickBooks, Oracle, and custom ERPs. Data lands where it's used, the moment it's clean.",
      },
      {
        icon: Workflow,
        title: "Approval workflows that don't get stuck",
        body: "Multi-stage routing, role-based access, SLA reminders, mobile-friendly approvals — every document moves on time.",
      },
      {
        icon: Archive,
        title: "Audit-ready by default",
        body: "Every document, every field, every approval — captured, timestamped, and searchable. Compliance teams get answers in seconds, not weeks.",
      },
    ],
  },

  useCases: {
    kicker: "Who it's for",
    title: "Built for the teams whose work runs on documents.",
    lede: "Wherever finance, procurement, or compliance teams are throttled by manual data entry, DocuMind collapses the work to exception handling only.",
    items: [
      {
        icon: CircleDollarSign,
        title: "Finance & accounts payable teams",
        body: "High-volume invoice processing operations that need to collapse manual data entry, validate every line against business rules, and auto-post to the ERP — without growing the headcount linearly with volume.",
      },
      {
        icon: Boxes,
        title: "Procurement & supply-chain teams",
        body: "Purchase orders, GRNs, vendor invoices, and three-way matching that's currently spreadsheet-driven. DocuMind closes the loop on the same platform finance uses.",
      },
      {
        icon: Shield,
        title: "Compliance, audit & risk teams",
        body: "Organisations under heavy audit / regulatory scrutiny that need every document captured, every extraction logged, every approval traceable — built-in, not reconstructed after the fact.",
      },
    ],
  },
};

/**
 * Sample invoice rendered in the DocumindExtractionVisual hero.
 * Drives the document mockup that the scan-line sweeps across.
 */
export const DOCUMIND_SAMPLE_INVOICE = {
  vendor: "Suvarna Steel Industries",
  vendorAddress: "Pune · GSTIN 27AABCS1234D1Z5",
  invoiceNo: "INV/2026/05/4827",
  date: "23 May 2026",
  lineItems: [
    { desc: "MS Steel Plates · 12mm", qty: "240 kg", rate: "₹68", total: "₹16,320" },
    { desc: "Welding rods · E6013", qty: "12 box", rate: "₹450", total: "₹5,400" },
    { desc: "Anti-rust primer · 5L", qty: "8 unit", rate: "₹890", total: "₹7,120" },
  ],
  subtotal: "₹28,840",
  gst: "₹5,191.20",
  total: "₹34,031.20",
} as const;

/**
 * Extracted-field panel data — animates field-by-field as the
 * scan-line sweeps the document.
 */
export const DOCUMIND_EXTRACTED_FIELDS = [
  { label: "Vendor", value: "Suvarna Steel Industries", confidence: 0.99 },
  { label: "GSTIN", value: "27AABCS1234D1Z5", confidence: 0.98, validated: true },
  { label: "Invoice #", value: "INV/2026/05/4827", confidence: 0.99 },
  { label: "Date", value: "23 May 2026", confidence: 0.99 },
  { label: "Line items", value: "3 rows · ₹28,840", confidence: 0.97 },
  { label: "GST 18%", value: "₹5,191.20", confidence: 0.99, validated: true },
  { label: "Total", value: "₹34,031.20", confidence: 0.99, validated: true },
] as const;

/**
 * The 3 stations of the DocumindInboxToBooks mid-page section. Follows
 * one invoice's journey from arrival to ERP-posted.
 */
export const DOCUMIND_PIPELINE_STATIONS = [
  {
    n: "01",
    label: "Captured",
    title: "Drop in any format.",
    body: "PDF, scanned image, mobile photo, email attachment — DocuMind ingests every common business format on day one. Vendors mail invoices to a dedicated address; the inbox auto-feeds the queue.",
    icon: Inbox,
    chips: ["Email-to-DocuMind", "Mobile capture", "Bulk upload", "Vendor portal"],
    state: "done" as const,
    metric: "0.3s · per page",
  },
  {
    n: "02",
    label: "Validated",
    title: "Read, extracted, validated.",
    body: "AI extraction across every field — vendor, GSTIN, line items, dates, amounts, signatures. Validation against your business rules: GSTIN format, vendor master match, math reconciliation, duplicate detection, threshold approvals.",
    icon: FileCheck,
    chips: ["GSTIN ✓", "Vendor master ✓", "Math reconciled", "Duplicate check"],
    state: "live" as const,
    metric: "1.4s · 24 fields",
  },
  {
    n: "03",
    label: "Posted",
    title: "Auto-posted to your ERP.",
    body: "Direct integrations with Tally, SAP, Zoho Books, QuickBooks, Oracle, and custom ERPs. The journal entry posts the moment the invoice clears validation. Vendor master sync, chart-of-accounts mapping, GST ledger updates — automatic.",
    icon: GitBranch,
    chips: ["Tally", "SAP", "Zoho Books", "QuickBooks", "Custom ERPs"],
    state: "done" as const,
    metric: "0.4s · auto-posted",
  },
] as const;

/**
 * Closing pills surfaced near the page CTA.
 */
export const DOCUMIND_OUTCOME_PILLS = [
  { icon: Inbox, label: "Drop a document, get clean data" },
  { icon: GitBranch, label: "Auto-posted to your ERP" },
  { icon: Archive, label: "Audit trail, by default" },
  { icon: Layers, label: "Manual entry, eliminated" },
] as const;
