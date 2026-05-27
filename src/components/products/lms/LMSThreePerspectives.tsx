"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { LMS_PERSPECTIVES } from "@/content/products/lms";
import { cn } from "@/lib/utils";

/**
 * LMS — "Three Perspectives" mid-page section.
 *
 * Concept: one platform, three audiences. LMS's institutional nature
 * means it serves multiple roles simultaneously — instructors building
 * and teaching, students learning and certifying, admins managing the
 * whole institution. This section makes that explicit by showing three
 * side-by-side mini-UI mockups, one per role.
 *
 * Idiom is distinct from every shipped mid-page:
 *   • Performix: chapter-style cycle story (4 horizontal stages)
 *   • Meetrix: hub-and-spoke (centre + 6 outputs)
 *   • Intellix: 5-tools-to-1 converging lines (before/after)
 *   • Learnova: winding 4-station path with SVG curve
 *
 * Three side-by-side personas — never used. Communicates the LMS's
 * unique multi-audience value cleanly.
 *
 * RESPONSIVE STRATEGY:
 *   • <1024px: 1-col stack, each persona card full-width
 *   • ≥1024px: 3-col grid, equal columns
 */
export function LMSThreePerspectives() {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 lg:py-32">
      {/* Backdrop */}
      <div className="absolute inset-0 -z-10 bg-bg-surface/40" />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange/[0.06] blur-3xl" />
        <div className="absolute top-1/2 right-1/4 h-[360px] w-[360px] translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-amber/[0.06] blur-3xl" />
      </div>

      <Container>
        <SectionHeader
          kicker="One platform · three audiences"
          title="The instructor builds it. The student learns it. The admin runs it."
          lede="LMS is institutional by design — every role gets the surface they need, on the same platform, against the same data. No separate apps, no separate logins, no broken handoffs between teaching, learning, and operating."
        />

        <Reveal delay={0.1}>
          <div className="mt-14 grid grid-cols-1 gap-5 lg:mt-16 lg:grid-cols-3 lg:gap-6">
            {LMS_PERSPECTIVES.map((perspective, i) => (
              <PerspectiveCard
                key={perspective.role}
                perspective={perspective}
                index={i}
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Single perspective card — role label + mini UI surface                      */
/* ───────────────────────────────────────────────────────────────────────── */

function PerspectiveCard({
  perspective,
  index,
}: {
  perspective: (typeof LMS_PERSPECTIVES)[number];
  index: number;
}) {
  const Icon = perspective.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.55,
        delay: 0.15 + index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-bg-elevated/40 p-5 backdrop-blur-md transition-colors hover:border-brand-orange/30 sm:p-6"
    >
      {/* Top hairline shimmer */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brand-orange/0 via-brand-orange/40 to-brand-orange/0 transition-opacity group-hover:via-brand-orange/80"
      />

      {/* Header — icon + role label */}
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand-orange/30 bg-brand-orange/10">
          <Icon className="h-5 w-5 text-brand-orange" strokeWidth={1.7} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand-orange">
            {perspective.role}
          </p>
          <p className="mt-0.5 font-mono text-[9px] uppercase tracking-wider text-text-faint">
            View
          </p>
        </div>
      </div>

      {/* Title + description */}
      <h3 className="mt-5 font-display text-lg font-semibold leading-tight tracking-tight text-white sm:text-xl">
        {perspective.title}
      </h3>
      <p className="mt-2 text-[13px] leading-relaxed text-text-secondary">
        {perspective.description}
      </p>

      {/* Mini UI surface — chrome + 4 surface items */}
      <div className="mt-5 flex-1">
        <MiniSurface items={perspective.surface} role={perspective.role} />
      </div>
    </motion.article>
  );
}

/* ───────────────────────────────────────────────────────────────────────── */
/* Mini UI surface — fake-mockup grid showing 4 surface items per role         */
/* ───────────────────────────────────────────────────────────────────────── */

function MiniSurface({
  items,
  role,
}: {
  items: (typeof LMS_PERSPECTIVES)[number]["surface"];
  role: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-bg-base/60">
      {/* Surface chrome */}
      <div className="flex items-center justify-between border-b border-white/5 px-3 py-1.5">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
        </div>
        <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-text-faint">
          {role.toLowerCase()}.lms
        </span>
        <span className="opacity-0">···</span>
      </div>

      {/* Surface body — 2x2 grid of micro-cards */}
      <div className="grid grid-cols-2 gap-2 p-2.5">
        {items.map((item, i) => (
          <SurfaceCard key={item.label} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}

function SurfaceCard({
  item,
  index,
}: {
  item: (typeof LMS_PERSPECTIVES)[number]["surface"][number];
  index: number;
}) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: 0.4 + index * 0.07 }}
      className={cn(
        "rounded-lg border border-white/10 bg-white/[0.02] p-2 transition-colors",
        "group-hover:border-brand-orange/20",
      )}
    >
      <div className="flex items-center gap-1.5">
        <Icon
          className="h-2.5 w-2.5 text-brand-orange"
          strokeWidth={1.8}
        />
        <span className="truncate font-mono text-[8px] uppercase tracking-wider text-text-faint">
          {item.label}
        </span>
      </div>
      <p className="mt-1 truncate font-display text-[11px] font-semibold text-white">
        {item.value}
      </p>
    </motion.div>
  );
}
