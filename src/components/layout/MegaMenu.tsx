"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ArrowUpRight,
  Sparkles,
  Stethoscope,
  Users,
  Headphones,
  GraduationCap,
  ShoppingBag,
  Briefcase,
  Brain,
  Factory,
  Newspaper,
  TrendingUp,
  Server,
  Boxes,
  Zap,
  BrainCircuit,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  PRODUCTS,
  SOLUTIONS,
  SERVICES,
  REDHAT_SERVICES,
  TECHNOLOGY,
  FLAGSHIP_PRODUCTS,
  type Product,
  type ProductVertical,
} from "@/lib/constants";

type MenuKey = "products" | "solutions" | "services" | "red-hat" | "technology";

/* ============================================================================
   Vertical → icon mapping (for industry grouping in Products panel + reuse)
   ============================================================================ */

const VERTICAL_ICONS: Record<ProductVertical, LucideIcon> = {
  Healthcare: Stethoscope,
  "HR & Workforce": Users,
  "Customer Support": Headphones,
  Education: GraduationCap,
  "E-Commerce": ShoppingBag,
  "Finance & Operations": Briefcase,
  "Intelligence & Research": Brain,
  "Industrial Intelligence & IoT": Factory,
  "Media & Publishing": Newspaper,
  Sales: TrendingUp,
};

/* ============================================================================
   MegaMenu — sticky hover behavior + AnimatePresence
   ============================================================================ */

export function MegaMenu() {
  const [open, setOpen] = useState<MenuKey | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openMenu(key: MenuKey) {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpen(key);
  }

  function scheduleClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(null), 140);
  }

  function cancelClose() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  return (
    <nav
      className="hidden lg:flex items-center gap-1"
      onMouseLeave={scheduleClose}
    >
      <MenuTrigger
        label="Products"
        isOpen={open === "products"}
        onHover={() => openMenu("products")}
      />
      <MenuTrigger
        label="Solutions"
        isOpen={open === "solutions"}
        onHover={() => openMenu("solutions")}
      />
      <MenuTrigger
        label="Services"
        isOpen={open === "services"}
        onHover={() => openMenu("services")}
      />
      <MenuTrigger
        label="Red Hat"
        accent
        isOpen={open === "red-hat"}
        onHover={() => openMenu("red-hat")}
      />
      <MenuTrigger
        label="Technology"
        isOpen={open === "technology"}
        onHover={() => openMenu("technology")}
      />

      <Link
        href="/resources"
        onMouseEnter={() => setOpen(null)}
        className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-white transition-colors"
      >
        Resources
      </Link>
      <Link
        href="/company/about"
        onMouseEnter={() => setOpen(null)}
        className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-white transition-colors"
      >
        Company
      </Link>

      <AnimatePresence>
        {open && (
          <MegaPanel
            key={open}
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
            onClick={() => setOpen(null)}
          >
            {open === "products" && <ProductsPanel />}
            {open === "solutions" && <SolutionsPanel />}
            {open === "services" && <ServicesPanel />}
            {open === "red-hat" && <RedHatPanel />}
            {open === "technology" && <TechnologyPanel />}
          </MegaPanel>
        )}
      </AnimatePresence>
    </nav>
  );
}

/* ============================================================================
   Building blocks
   ============================================================================ */

function MenuTrigger({
  label,
  isOpen,
  onHover,
  accent,
}: {
  label: string;
  isOpen: boolean;
  onHover: () => void;
  accent?: boolean;
}) {
  return (
    <button
      onMouseEnter={onHover}
      className={cn(
        "inline-flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors",
        accent
          ? "text-brand-teal hover:text-brand-teal-soft"
          : "text-text-secondary hover:text-white",
        isOpen && (accent ? "text-brand-teal-soft" : "text-white")
      )}
    >
      {label}
      <ChevronDown
        className={cn(
          "h-3.5 w-3.5 transition-transform",
          isOpen && "rotate-180"
        )}
      />
    </button>
  );
}

function MegaPanel({
  children,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: {
  children: ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  /** Fired on any click inside the panel — used to close the menu instantly */
  onClick?: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className="absolute left-0 right-0 top-full pt-3 z-40"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <div className="container-page">
        <div
          className="relative overflow-hidden rounded-2xl border border-white/10"
          style={{
            background: "linear-gradient(180deg, #0F1F35 0%, #0A1628 100%)",
            boxShadow:
              "0 24px 60px -12px rgba(0,0,0,0.6), 0 1px 0 0 rgba(255,255,255,0.06) inset",
          }}
        >
          {/* Top highlight + ambient glows */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <div className="pointer-events-none absolute -top-32 left-1/4 h-64 w-64 rounded-full bg-brand-teal/[0.05] blur-3xl" />
          <div className="pointer-events-none absolute -top-32 right-1/4 h-64 w-64 rounded-full bg-brand-blue/[0.05] blur-3xl" />

          <div className="relative">{children}</div>
        </div>
      </div>
    </motion.div>
  );
}

/** Section heading inside a panel column. */
function PanelKicker({
  count,
  label,
}: {
  count?: number | string;
  label: string;
}) {
  return (
    <div className="flex items-baseline gap-2">
      <p className="font-mono text-[10px] font-medium tracking-[0.22em] uppercase text-text-faint">
        {label}
      </p>
      {count !== undefined && (
        <span className="font-mono text-[10px] text-text-faint/70">
          ({count})
        </span>
      )}
    </div>
  );
}

/** Bottom CTA bar present at the foot of every panel. */
function PanelFooter({
  hint,
  ctaLabel,
  href,
}: {
  hint: string;
  ctaLabel: string;
  href: string;
}) {
  return (
    <div className="mt-6 flex items-center justify-between border-t border-white/5 bg-bg-base/30 px-8 py-3.5">
      <p className="text-xs text-text-muted">{hint}</p>
      <Link
        href={href}
        className="group inline-flex items-center gap-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-brand-teal hover:text-brand-teal-soft transition-colors"
      >
        {ctaLabel}
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </div>
  );
}

/* ============================================================================
   PRODUCTS panel — featured flagships + industry grouping
   ============================================================================ */

function ProductsPanel() {
  // Group all products by vertical for the right column.
  const grouped = PRODUCTS.reduce<Record<string, Product[]>>((acc, p) => {
    (acc[p.vertical] ||= []).push(p);
    return acc;
  }, {});

  // Order verticals: flagships' verticals first (for narrative), then the rest.
  const verticalOrder: ProductVertical[] = [
    "Sales",
    "Healthcare",
    "HR & Workforce",
    "Customer Support",
    "Education",
    "E-Commerce",
    "Finance & Operations",
    "Intelligence & Research",
    "Industrial Intelligence & IoT",
    "Media & Publishing",
  ];

  return (
    <>
      <div className="grid grid-cols-12 gap-8 p-8">
        {/* Left — Flagship spotlight */}
        <div className="col-span-4">
          <div className="flex items-center justify-between">
            <PanelKicker label="Flagship" />
            <Sparkles className="h-3 w-3 text-brand-teal" />
          </div>

          <div className="mt-4 flex flex-col gap-3">
            {FLAGSHIP_PRODUCTS.map((p) => {
              const Icon = VERTICAL_ICONS[p.vertical];
              return (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-all hover:border-brand-teal/40 hover:bg-white/[0.04]"
                >
                  {/* Top gradient line on hover */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brand-teal/0 via-brand-teal/60 to-brand-teal/0 opacity-0 transition-opacity group-hover:opacity-100" />

                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-teal/10 text-brand-teal">
                      <Icon className="h-4 w-4" strokeWidth={1.8} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="font-display text-base font-semibold text-white">
                          {p.name}
                        </p>
                        <ArrowUpRight className="h-3.5 w-3.5 text-text-faint transition-all group-hover:text-brand-teal group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                      <p className="text-[11px] text-text-faint">
                        {p.vertical}
                      </p>
                      <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-text-muted">
                        {p.blurb}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right — All products by industry */}
        <div className="col-span-8">
          <div className="flex items-center justify-between">
            <PanelKicker count={PRODUCTS.length} label="By Industry" />
            <Link
              href="/solutions"
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted hover:text-white transition-colors"
            >
              View Solutions →
            </Link>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-5">
            {verticalOrder.map((vertical) => {
              const products = grouped[vertical];
              if (!products || products.length === 0) return null;
              const Icon = VERTICAL_ICONS[vertical];
              return (
                <div key={vertical}>
                  <div className="flex items-center gap-2">
                    <Icon
                      className="h-3.5 w-3.5 text-brand-green"
                      strokeWidth={1.8}
                    />
                    <p className="font-display text-xs font-semibold text-white">
                      {vertical}
                    </p>
                  </div>
                  <ul className="mt-1.5 ml-5 flex flex-col gap-1">
                    {products.map((p) => (
                      <li key={p.slug}>
                        <Link
                          href={`/products/${p.slug}`}
                          className="group inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-white transition-colors"
                        >
                          <span>{p.shortName ?? p.name}</span>
                          {p.flagship && (
                            <span className="rounded-sm bg-brand-teal/15 px-1 py-0.5 text-[8px] font-mono uppercase tracking-wider text-brand-teal">
                              Flagship
                            </span>
                          )}
                          <ArrowUpRight className="h-3 w-3 text-text-faint/0 transition-all group-hover:text-brand-teal group-hover:opacity-100" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <PanelFooter
        hint={`${PRODUCTS.length} products · ${SOLUTIONS.length} industries`}
        ctaLabel="Explore all products"
        href="/products"
      />
    </>
  );
}

/* ============================================================================
   SOLUTIONS panel — featured intro + 3-col grid
   ============================================================================ */

function SolutionsPanel() {
  return (
    <>
      <div className="grid grid-cols-12 gap-8 p-8">
        {/* Left — Spotlight */}
        <div className="col-span-4">
          <PanelKicker label="Industry Solutions" />
          <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-white">
            Mapped to <span className="text-gradient-brand">9 verticals.</span>
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            Every Infizia solution combines the right products, services, and
            technology stack for an industry — with measurable outcomes.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <Stat label="Verticals" value="9" />
            <Stat label="Products" value="12" />
          </div>
        </div>

        {/* Right — Solution tiles */}
        <div className="col-span-8">
          <PanelKicker count={SOLUTIONS.length} label="All Verticals" />
          <div className="mt-4 grid grid-cols-3 gap-2.5">
            {SOLUTIONS.map((s) => (
              <Link
                key={s.slug}
                href={`/solutions/${s.slug}`}
                className="group rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:border-brand-teal/40 hover:bg-white/[0.04]"
              >
                <div className="flex items-start gap-2">
                  <span className="text-xl leading-none">{s.emoji}</span>
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-xs font-semibold text-white group-hover:text-brand-teal transition-colors">
                      {s.name}
                    </p>
                    <p className="mt-1 line-clamp-2 text-[11px] leading-snug text-text-muted">
                      {s.blurb}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <PanelFooter
        hint="Industry-aligned outcomes from day one"
        ctaLabel="Explore all solutions"
        href="/solutions"
      />
    </>
  );
}

/* ============================================================================
   SERVICES panel — engineering capability
   ============================================================================ */

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "web-app-development": Boxes,
  "ai-agentic-systems": BrainCircuit,
  "erp-automation": Wrench,
  blockchain: Zap,
  "multi-cloud": Server,
};

function ServicesPanel() {
  return (
    <>
      <div className="grid grid-cols-12 gap-8 p-8">
        {/* Left — Spotlight */}
        <div className="col-span-4">
          <PanelKicker label="Engineering Services" />
          <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-white">
            From{" "}
            <span className="text-gradient-brand">code to cloud.</span>
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            Five service lines covering enterprise web & mobile, agentic AI,
            ERP automation, blockchain, and multi-cloud infrastructure.
          </p>

          <div className="mt-6">
            <Link
              href="/contact/sales"
              className="inline-flex items-center gap-1.5 rounded-full border border-brand-green/30 bg-brand-green/10 px-3 py-1.5 text-xs font-medium text-brand-green hover:bg-brand-green/20 transition-colors"
            >
              <Sparkles className="h-3 w-3" />
              Book an architecture review
            </Link>
          </div>
        </div>

        {/* Right — Service tiles */}
        <div className="col-span-8">
          <PanelKicker count={SERVICES.length} label="Service Lines" />
          <div className="mt-4 grid grid-cols-1 gap-2.5">
            {SERVICES.map((s) => {
              const Icon = SERVICE_ICONS[s.slug] ?? Boxes;
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3.5 transition-all hover:border-brand-green/40 hover:bg-white/[0.04]"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-green/10 text-brand-green">
                    <Icon className="h-4 w-4" strokeWidth={1.8} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-sm font-semibold text-white group-hover:text-brand-green transition-colors">
                      {s.name}
                    </p>
                    <p className="mt-0.5 line-clamp-1 text-xs text-text-muted">
                      {s.blurb}
                    </p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 self-center text-text-faint transition-all group-hover:text-brand-green group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <PanelFooter
        hint="Discovery, build, run — under one team"
        ctaLabel="Explore all services"
        href="/services"
      />
    </>
  );
}

/* ============================================================================
   RED HAT panel — stack-themed
   ============================================================================ */

const REDHAT_ICONS: Record<string, LucideIcon> = {
  rhel: Server,
  openshift: Boxes,
  ansible: Zap,
  "openshift-ai": BrainCircuit,
  "managed-services": Wrench,
  training: GraduationCap,
};

function RedHatPanel() {
  return (
    <>
      <div className="p-8">
        {/* Header banner */}
        <div className="mb-6 flex items-end justify-between gap-4 border-b border-white/5 pb-5">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-redhat/30 bg-redhat/10 px-2.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-redhat" />
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-white">
                Red Hat Stack Implementation
              </span>
            </div>
            <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-white">
              The full stack.{" "}
              <span className="text-text-muted">Implemented end to end.</span>
            </h3>
          </div>
          <Link
            href="/red-hat"
            className="hidden md:inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-teal hover:text-brand-teal-soft transition-colors"
          >
            Practice overview
            <ArrowUpRight className="h-3 w-3" />
          </Link>
        </div>

        {/* Service grid */}
        <div className="grid grid-cols-3 gap-2.5">
          {REDHAT_SERVICES.map((r) => {
            const Icon = REDHAT_ICONS[r.slug] ?? Server;
            return (
              <Link
                key={r.slug}
                href={`/red-hat/${r.slug}`}
                className="group rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all hover:border-redhat/40 hover:bg-white/[0.04]"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-redhat/10 text-redhat">
                    <Icon className="h-4 w-4" strokeWidth={1.8} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-sm font-semibold text-white">
                      {r.shortName ?? r.name}
                    </p>
                    <p className="mt-1 line-clamp-2 text-[11px] leading-snug text-text-muted">
                      {r.blurb}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <PanelFooter
        hint="Assessment · Implementation · Managed Services · Training"
        ctaLabel="Explore Red Hat practice"
        href="/red-hat"
      />
    </>
  );
}

/* ============================================================================
   TECHNOLOGY panel — agentic + architecture
   ============================================================================ */

const TECH_ICONS: Record<string, LucideIcon> = {
  "llm-genai": Sparkles,
  "agentic-architecture": BrainCircuit,
  rag: Brain,
  "voice-ai": Headphones,
  "application-architecture": Boxes,
};

function TechnologyPanel() {
  return (
    <>
      <div className="grid grid-cols-12 gap-8 p-8">
        {/* Left — Spotlight */}
        <div className="col-span-4">
          <PanelKicker label="Technology Practice" />
          <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-white">
            The architecture beneath the{" "}
            <span className="text-gradient-brand">intelligence.</span>
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            Agentic systems, RAG pipelines, voice AI, and modern application
            architecture — designed to run AI safely at enterprise scale.
          </p>
        </div>

        {/* Right — Tech tiles */}
        <div className="col-span-8">
          <PanelKicker count={TECHNOLOGY.length} label="Pillars" />
          <div className="mt-4 grid grid-cols-2 gap-2.5">
            {TECHNOLOGY.map((t) => {
              const Icon = TECH_ICONS[t.slug] ?? Sparkles;
              return (
                <Link
                  key={t.slug}
                  href={`/technology/${t.slug}`}
                  className="group flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3.5 transition-all hover:border-brand-blue/40 hover:bg-white/[0.04]"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                    <Icon className="h-4 w-4" strokeWidth={1.8} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-sm font-semibold text-white group-hover:text-brand-blue transition-colors">
                      {t.name}
                    </p>
                    <p className="mt-0.5 line-clamp-2 text-[11px] leading-snug text-text-muted">
                      {t.blurb}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <PanelFooter
        hint="From foundation models to production architecture"
        ctaLabel="Explore technology"
        href="/technology"
      />
    </>
  );
}

/* ============================================================================
   Misc helpers
   ============================================================================ */

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
      <p className="font-display text-xl font-semibold text-white">{value}</p>
      <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-text-faint">
        {label}
      </p>
    </div>
  );
}
