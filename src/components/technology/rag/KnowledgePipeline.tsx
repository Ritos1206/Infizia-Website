"use client";

import { motion } from "framer-motion";
import { FileText, Layers, Database, Quote, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Knowledge Pipeline — bespoke hero for /technology/rag.
 *
 * Idiom: 4-stage vertical pipeline showing the RAG flow:
 *   01 Documents (PDF/DOCX/Web/Transcripts streaming in)
 *   02 Chunking & embedding (vectors materializing)
 *   03 Vector index (3D wireframe-like grid showing clustered dots)
 *   04 Retrieval + LLM (query in, top-K chunks highlighted, cited
 *      response out)
 *
 * Distinct from DocumindInboxToBooks (3-stage doc pipeline — but
 * shows posting to ERP, not retrieval/embedding) and from EnewsDistro
 * Funnel (vertical fan-out, not pipeline). The vector-index wireframe
 * grid is the genuinely new visual element.
 */
export function KnowledgePipeline() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.5rem] bg-brand-cyan/[0.10] blur-3xl" />

      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-bg-elevated/70 backdrop-blur">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brand-cyan/0 via-brand-cyan/60 to-brand-cyan/0" />

        {/* Chrome */}
        <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-brand-cyan/60" />
              <span className="relative h-2 w-2 rounded-full bg-brand-cyan" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
              rag.pipeline · live
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand-cyan">
            4 stages · grounded
          </span>
        </div>

        {/* Body */}
        <div className="px-5 py-5 space-y-3">
          {/* Stage 01 — Documents */}
          <Stage
            num="01"
            label="Documents"
            tag="parsed"
            description="PDF · DOCX · Web · Transcripts"
          >
            <div className="grid grid-cols-4 gap-1.5">
              {["PDF", "DOC", "WEB", "TXT"].map((t, i) => (
                <motion.div
                  key={t}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="flex flex-col items-center gap-0.5 rounded-md border border-white/10 bg-white/[0.03] px-1 py-1"
                >
                  <FileText className="h-3 w-3 text-text-secondary" />
                  <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-text-muted">
                    {t}
                  </span>
                </motion.div>
              ))}
            </div>
          </Stage>

          <Connector />

          {/* Stage 02 — Chunking & embedding */}
          <Stage
            num="02"
            label="Chunk & embed"
            tag="384 dim"
            description="Semantic chunks · overlapping windows"
          >
            <div className="space-y-1">
              {[
                { w: "82%", o: 1 },
                { w: "65%", o: 0.85 },
                { w: "78%", o: 0.7 },
              ].map((c, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5"
                >
                  <span className="font-mono text-[8px] text-text-faint tabular-nums">
                    c{i + 1}
                  </span>
                  <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.04]">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: c.w }}
                      transition={{ duration: 0.7, delay: 0.4 + i * 0.15 }}
                      className="h-full rounded-full bg-gradient-to-r from-brand-cyan/60 to-brand-cyan"
                      style={{ opacity: c.o }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Stage>

          <Connector />

          {/* Stage 03 — Vector index (wireframe grid) */}
          <Stage
            num="03"
            label="Vector index"
            tag="2.4M vectors"
            description="Clustered · hybrid retrievable"
          >
            <VectorWireframe />
          </Stage>

          <Connector />

          {/* Stage 04 — Retrieval + LLM */}
          <Stage
            num="04"
            label="Retrieve & cite"
            tag="top-5"
            description="Cited answer · grounded in chunks"
            active
          >
            <div className="space-y-1.5">
              <div className="rounded-md border border-brand-cyan/30 bg-brand-cyan/[0.05] px-2 py-1">
                <p className="font-mono text-[9px] text-text-faint">Query</p>
                <p className="text-[10px] leading-snug text-text-secondary">
                  &ldquo;What did the client commit to in Q3?&rdquo;
                </p>
              </div>
              <div className="flex flex-wrap gap-1">
                {["chunk #1284", "chunk #4827", "chunk #4915"].map((cid) => (
                  <span
                    key={cid}
                    className="inline-flex items-center gap-1 rounded-full border border-brand-cyan/40 bg-brand-cyan/10 px-1.5 py-0.5"
                  >
                    <Quote className="h-2.5 w-2.5 text-brand-cyan" />
                    <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-brand-cyan">
                      {cid}
                    </span>
                  </span>
                ))}
              </div>
              <p className="text-[10px] leading-snug text-text-secondary">
                Acme committed to Q3 onboarding by Oct 15 with the upgraded
                tier — cited from 3 transcript spans.
              </p>
            </div>
          </Stage>
        </div>

        {/* Footer */}
        <div className="flex items-center gap-3 border-t border-white/[0.06] px-5 py-3">
          <span className="inline-flex items-center gap-1 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-2 py-0.5">
            <Database className="h-2.5 w-2.5 text-brand-cyan" />
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-brand-cyan">
              Hybrid · vector + BM25
            </span>
          </span>
          <span className="ml-auto font-mono text-[9px] text-text-faint tabular-nums">
            p95 · 240ms
          </span>
        </div>
      </div>

      {/* Floating chips */}
      <motion.div
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute -top-3 -right-2 hidden lg:flex items-center gap-1.5 rounded-full border border-brand-cyan/30 bg-bg-elevated/95 px-3 py-1.5 shadow-glow-cyan backdrop-blur"
      >
        <Layers className="h-3 w-3 text-brand-cyan" />
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-brand-cyan">
          94% · faithful
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute -bottom-3 -left-2 flex items-center gap-1.5 rounded-full border border-white/15 bg-bg-elevated/95 px-3 py-1.5 backdrop-blur"
      >
        <Quote className="h-3 w-3 text-brand-cyan" />
        <span className="font-mono text-[10px] text-text-secondary">
          3 sources cited
        </span>
      </motion.div>
    </div>
  );
}

/* ---------------- Sub-components ---------------- */

function Stage({
  num,
  label,
  tag,
  description,
  active = false,
  children,
}: {
  num: string;
  label: string;
  tag: string;
  description: string;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border p-3 transition-all",
        active
          ? "border-brand-cyan/40 bg-brand-cyan/[0.04] shadow-glow-cyan"
          : "border-white/10 bg-bg-base/40",
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-text-faint tabular-nums">
            {num}
          </span>
          <span
            className={cn(
              "font-mono text-[10px] uppercase tracking-[0.16em]",
              active ? "text-brand-cyan" : "text-text-secondary",
            )}
          >
            {label}
          </span>
        </div>
        <span
          className={cn(
            "inline-flex items-center rounded-full border px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.12em]",
            active
              ? "border-brand-cyan/40 bg-brand-cyan/10 text-brand-cyan"
              : "border-white/10 bg-white/[0.03] text-text-muted",
          )}
        >
          {tag}
        </span>
      </div>
      <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.14em] text-text-faint">
        {description}
      </p>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex justify-center">
      <ChevronRight className="h-3 w-3 rotate-90 text-brand-cyan/50" />
    </div>
  );
}

function VectorWireframe() {
  // 6 columns × 4 rows = 24 cells; subset highlighted as "clustered"
  const cells = Array.from({ length: 24 }, (_, i) => i);
  const clustered = new Set([8, 9, 14, 15, 16, 22]); // a roughly contiguous cluster
  return (
    <div className="grid grid-cols-6 gap-1">
      {cells.map((i) => {
        const isCluster = clustered.has(i);
        return (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.3 + i * 0.02,
            }}
            className={cn(
              "aspect-square rounded-[3px] border",
              isCluster
                ? "border-brand-cyan/60 bg-brand-cyan/30"
                : "border-white/10 bg-white/[0.04]",
            )}
          />
        );
      })}
    </div>
  );
}
