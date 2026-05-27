"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  FileText,
  GitBranch,
  ScanLine,
  Sparkles,
  Wand2,
} from "lucide-react";
import {
  DOCUMIND_EXTRACTED_FIELDS,
  DOCUMIND_SAMPLE_INVOICE,
} from "@/content/products/documind";

/**
 * DocuMind — bespoke hero visual.
 *
 * Concept: "Document Extraction Live" — an invoice document on the
 * left being scanned in real time (scan-line sweep + bounding-box
 * recognition overlay), with a structured-data panel on the right that
 * materializes field-by-field as the extraction completes, plus an
 * "Auto-posted to ERP" footer chip showing the data landing where it's
 * used.
 *
 * Idiom is distinct from Convenor's resume-extraction (which has a
 * tall PORTRAIT document with chips floating AROUND it). DocuMind has
 * a wider invoice with table-line-item parsing (different visual
 * structure) + the structured-data panel populates IN ORDER (Vendor →
 * GSTIN → Invoice # → Date → Line items → GST → Total). The narrative
 * here is "messy in, clean out, posted to ERP".
 *
 * Brand accent: sky.
 *
 * RESPONSIVE STRATEGY:
 *   • <640px:  document on top, extracted-data panel below; floating
 *              chips hidden
 *   • 640px+:  side-by-side document + panel; floating chips visible
 */
export function DocumindExtractionVisual() {
  return (
    <div className="relative isolate mx-auto w-full max-w-[560px]">
      {/* Ambient sky glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-12 -z-10 rounded-[40px] bg-brand-sky/[0.10] blur-3xl"
      />

      {/* Frame */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-bg-elevated/80 backdrop-blur-md shadow-glow-sky">
        <ChromeBar />
        <div className="grid grid-cols-1 gap-3 p-3 sm:grid-cols-5 sm:gap-3 sm:p-3.5">
          <div className="sm:col-span-3">
            <InvoiceDocument />
          </div>
          <div className="sm:col-span-2">
            <ExtractedPanel />
          </div>
        </div>
        <PostedFooter />
      </div>

      {/* Floating "GSTIN ✓" — top-right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 10, y: -6 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute -top-3 right-3 hidden items-center gap-1.5 rounded-full border border-brand-green/40 bg-bg-base/90 px-2.5 py-1.5 backdrop-blur-md sm:inline-flex"
      >
        <CheckCircle2 className="h-3 w-3 text-brand-green" />
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-green-soft">
          GSTIN validated
        </span>
      </motion.div>

      {/* Floating "Vendor master matched" — top-left (lg+) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: -10, y: -6 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="absolute -top-3 -left-3 hidden items-center gap-1.5 rounded-full border border-brand-sky/40 bg-bg-base/90 px-2.5 py-1.5 backdrop-blur-md lg:inline-flex"
      >
        <Sparkles className="h-3 w-3 text-brand-sky" />
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-sky-soft">
          Vendor matched
        </span>
      </motion.div>

      {/* Floating "Posted to Tally · 0.4s" — bottom-right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.55 }}
        className="absolute -bottom-3 right-4 hidden items-center gap-1.5 rounded-full border border-brand-sky/40 bg-bg-base/90 px-2.5 py-1.5 backdrop-blur-md sm:inline-flex"
      >
        <GitBranch className="h-3 w-3 text-brand-sky" />
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-sky-soft">
          Posted · 0.4s
        </span>
      </motion.div>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Chrome bar                                                                  */
/* ───────────────────────────────────────────────────────────────────────── */

function ChromeBar() {
  return (
    <div className="flex items-center justify-between border-b border-white/5 px-3 py-2.5 sm:px-4">
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2 items-center justify-center">
          <span className="absolute h-2 w-2 animate-ping rounded-full bg-brand-sky/60" />
          <span className="relative h-1.5 w-1.5 rounded-full bg-brand-sky" />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white">
          DocuMind.live
        </span>
      </div>
      <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-sky/30 bg-brand-sky/10 px-2 py-0.5">
        <ScanLine className="h-3 w-3 text-brand-sky" />
        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-brand-sky-soft">
          Extracting
        </span>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Invoice document — left side, with scan-line                                */
/* ───────────────────────────────────────────────────────────────────────── */

function InvoiceDocument() {
  const inv = DOCUMIND_SAMPLE_INVOICE;
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-bg-base/60">
      {/* Document header */}
      <div className="border-b border-white/5 bg-white/[0.03] px-3 py-2">
        <div className="flex items-center gap-1.5">
          <FileText className="h-3 w-3 text-brand-sky" />
          <span className="font-mono text-[8px] uppercase tracking-wider text-text-faint">
            invoice.pdf
          </span>
        </div>
      </div>

      {/* Document body */}
      <div className="relative space-y-2 px-3 py-3">
        {/* Scan-line — sweeps top to bottom continuously */}
        <motion.div
          aria-hidden
          animate={{ y: [-12, 200] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
          className="pointer-events-none absolute inset-x-0 z-10 h-8 bg-gradient-to-b from-brand-sky/0 via-brand-sky/20 to-brand-sky/0"
        />

        {/* Vendor block */}
        <div>
          <p className="font-display text-[12px] font-semibold leading-tight text-white">
            {inv.vendor}
          </p>
          <p className="font-mono text-[8px] tracking-wider text-text-faint">
            {inv.vendorAddress}
          </p>
        </div>

        {/* Invoice meta */}
        <div className="flex items-center justify-between border-t border-white/5 pt-1.5">
          <div>
            <p className="font-mono text-[7px] uppercase tracking-wider text-text-faint">
              Invoice #
            </p>
            <p className="font-mono text-[9px] text-white">{inv.invoiceNo}</p>
          </div>
          <div className="text-right">
            <p className="font-mono text-[7px] uppercase tracking-wider text-text-faint">
              Date
            </p>
            <p className="font-mono text-[9px] text-white">{inv.date}</p>
          </div>
        </div>

        {/* Line items table */}
        <div className="border-t border-white/5 pt-1.5">
          <div className="grid grid-cols-[1fr_44px_36px_56px] gap-1.5 border-b border-white/5 pb-1 font-mono text-[7px] uppercase tracking-wider text-text-faint">
            <span>Item</span>
            <span className="text-right">Qty</span>
            <span className="text-right">Rate</span>
            <span className="text-right">Total</span>
          </div>
          {inv.lineItems.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: 0.4 + i * 0.15 }}
              className="grid grid-cols-[1fr_44px_36px_56px] gap-1.5 border-b border-white/[0.03] py-0.5 font-mono text-[8px] tabular-nums text-text-secondary"
            >
              <span className="truncate">{row.desc}</span>
              <span className="text-right">{row.qty}</span>
              <span className="text-right">{row.rate}</span>
              <span className="text-right text-white">{row.total}</span>
            </motion.div>
          ))}
        </div>

        {/* Totals */}
        <div className="space-y-0.5 border-t border-white/5 pt-1.5 font-mono text-[8px] tabular-nums">
          <div className="flex items-center justify-between text-text-faint">
            <span>Subtotal</span>
            <span>{inv.subtotal}</span>
          </div>
          <div className="flex items-center justify-between text-text-faint">
            <span>GST 18%</span>
            <span>{inv.gst}</span>
          </div>
          <div className="flex items-center justify-between border-t border-white/10 pt-1 font-display text-[10px] font-semibold text-brand-sky">
            <span>Total</span>
            <span>{inv.total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Extracted-data panel — right side, materializes field-by-field             */
/* ───────────────────────────────────────────────────────────────────────── */

function ExtractedPanel() {
  return (
    <div className="overflow-hidden rounded-xl border border-brand-sky/30 bg-brand-sky/[0.05] shadow-glow-sky">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/5 bg-bg-base/40 px-3 py-2">
        <div className="flex items-center gap-1.5">
          <Wand2 className="h-3 w-3 text-brand-sky" />
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white">
            Extracted
          </span>
        </div>
        <span className="inline-flex items-center gap-1 rounded border border-brand-sky/25 bg-brand-sky/10 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-brand-sky-soft">
          {DOCUMIND_EXTRACTED_FIELDS.length} fields
        </span>
      </div>

      {/* Field rows — materialize one by one */}
      <div className="divide-y divide-white/5">
        {DOCUMIND_EXTRACTED_FIELDS.map((field, i) => (
          <motion.div
            key={field.label}
            initial={{ opacity: 0, x: 8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.4,
              delay: 0.6 + i * 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-center justify-between gap-2 px-3 py-1.5"
          >
            <div className="min-w-0 flex-1">
              <p className="font-mono text-[7px] uppercase tracking-wider text-text-faint">
                {field.label}
              </p>
              <p className="truncate font-mono text-[9px] text-white">
                {field.value}
              </p>
            </div>
            {("validated" in field && field.validated) ? (
              <CheckCircle2
                className="h-3 w-3 shrink-0 text-brand-green"
                strokeWidth={2}
              />
            ) : (
              <span className="shrink-0 font-mono text-[7px] tabular-nums text-text-faint">
                {Math.round(field.confidence * 100)}%
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Posted footer — auto-posted to ERP                                          */
/* ───────────────────────────────────────────────────────────────────────── */

function PostedFooter() {
  return (
    <div className="border-t border-white/5 bg-gradient-to-r from-brand-sky/[0.04] via-brand-sky/[0.06] to-brand-sky/[0.04] px-3 py-2.5 sm:px-4">
      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5">
          <GitBranch className="h-3 w-3 text-brand-sky" />
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white">
            Auto-posted to Tally
          </span>
        </span>
        <span className="font-display text-[11px] font-semibold tabular-nums text-white sm:text-xs">
          JE-04827
        </span>
      </div>
    </div>
  );
}
