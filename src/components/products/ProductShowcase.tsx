"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ACCENTS, type ProductAccent } from "@/lib/product-accents";
import { cn } from "@/lib/utils";

/**
 * Generic horizontal "moments" slider for product pages.
 *
 * Each moment is a scenario card showing: a kicker (when/where), title,
 * supporting copy, and an arbitrary `visual` ReactNode (CSS UI fragment,
 * illustration, future screenshot).
 *
 * Auto-advances every `autoAdvanceMs` ms (default 5500). The progress bar
 * at the top of the slide fills over each interval to make the auto-rotation
 * visually obvious. Transitions between slides use a horizontal slide motion
 * (not a crossfade) so the movement is unmistakable.
 *
 * Manual controls: tab buttons, prev/next chevrons, dot indicators,
 * pause/play toggle. Auto-rotation pauses on hover.
 */

export type ShowcaseMoment = {
  id: string;
  kicker: string;
  title: string;
  body: string;
  /** Inline visual rendered on the right column */
  visual: ReactNode;
};

export function ProductShowcase({
  kicker,
  title,
  lede,
  moments,
  accent,
  autoAdvanceMs = 5500,
}: {
  kicker: string;
  title: string;
  lede: string;
  moments: ShowcaseMoment[];
  accent: ProductAccent;
  autoAdvanceMs?: number;
}) {
  const a = ACCENTS[accent];
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const total = moments.length;

  const isPaused = paused || userPaused;

  useEffect(() => {
    if (isPaused || total <= 1) return;
    const id = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % total);
    }, autoAdvanceMs);
    return () => clearInterval(id);
  }, [isPaused, autoAdvanceMs, total]);

  const current = moments[index];
  const goTo = (i: number) => {
    setDirection(i > index ? 1 : -1);
    setIndex((i + total) % total);
  };
  const next = () => goTo((index + 1) % total);
  const prev = () => goTo((index - 1 + total) % total);

  // Variants pattern is the correct way to combine `custom` (direction) with
  // initial/animate/exit in framer-motion. Plain function props don't accept
  // a custom argument.
  const slideVariants: Variants = {
    enter: (d: 1 | -1) => ({ opacity: 0, x: d * 60 }),
    center: { opacity: 1, x: 0 },
    exit: (d: 1 | -1) => ({ opacity: 0, x: d * -60 }),
  };

  return (
    <section
      className="relative overflow-hidden py-24 md:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Backdrop variety — bg-elevated band + animated gradient lines */}
      <div className="absolute inset-0 -z-10 bg-bg-elevated/60" />
      <div
        className={cn(
          "absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent to-transparent",
          accent === "teal" && "via-brand-teal/40",
          accent === "green" && "via-brand-green/40",
          accent === "blue" && "via-brand-blue/40",
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute -top-40 right-1/4 -z-10 h-96 w-[40rem] rotate-12 rounded-full blur-[140px]",
          a.glow,
        )}
      />

      <Container>
        <SectionHeader kicker={kicker} title={title} lede={lede} />

        {/* Tabs */}
        <div className="mt-12 flex flex-wrap items-center gap-2 md:gap-3">
          {moments.map((m, i) => (
            <button
              key={m.id}
              type="button"
              onClick={() => goTo(i)}
              className={cn(
                "group relative rounded-full border px-4 py-2 text-xs font-medium transition-all",
                i === index
                  ? cn("text-bg-base", a.bg, a.border)
                  : "border-white/10 bg-white/[0.02] text-text-muted hover:border-white/20 hover:text-white",
              )}
            >
              <span className="relative z-10 font-mono uppercase tracking-[0.14em]">
                {String(i + 1).padStart(2, "0")} · {m.kicker}
              </span>
            </button>
          ))}
        </div>

        {/* Slide */}
        <div className="relative mt-10 overflow-hidden rounded-3xl border border-white/10 bg-bg-base">
          {/* Auto-rotation progress bar — visible proof that it's moving */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[3px] bg-white/5">
            {!isPaused && (
              <motion.div
                key={`progress-${index}`}
                className={cn("h-full", a.bg)}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: autoAdvanceMs / 1000,
                  ease: "linear",
                }}
              />
            )}
          </div>

          {/* Top edge gradient (subtle, behind progress bar) */}
          <div
            className={cn(
              "pointer-events-none absolute inset-x-0 top-[3px] h-px bg-gradient-to-r",
              a.topLine,
            )}
          />

          {/* Animated slide content with horizontal slide motion */}
          <div className="relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 gap-10 p-8 md:p-12 lg:grid-cols-12 lg:gap-12 lg:p-16"
              >
                {/* Copy */}
                <div className="lg:col-span-5">
                  <p
                    className={cn(
                      "font-mono text-xs uppercase tracking-[0.22em]",
                      a.text,
                    )}
                  >
                    {current.kicker}
                  </p>
                  <h3 className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-4xl">
                    {current.title}
                  </h3>
                  <p className="mt-5 text-base leading-relaxed text-text-secondary md:text-lg">
                    {current.body}
                  </p>

                  <div className="mt-8 flex items-center gap-3 text-xs text-text-faint">
                    <span className="font-mono uppercase tracking-[0.18em]">
                      {String(index + 1).padStart(2, "0")} /{" "}
                      {String(total).padStart(2, "0")}
                    </span>
                    <span className="h-px w-12 bg-white/10" />
                    <span>iCON in action</span>
                  </div>
                </div>

                {/* Visual */}
                <div className="relative lg:col-span-7">
                  <div className="relative">{current.visual}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls bar */}
          <div className="flex items-center justify-between border-t border-white/10 bg-bg-base/80 px-6 py-3 backdrop-blur md:px-8">
            {/* Indicator dots */}
            <div className="flex items-center gap-1.5">
              {moments.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    i === index
                      ? cn("w-8", a.bg)
                      : "w-1.5 bg-white/15 hover:bg-white/30",
                  )}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setUserPaused((p) => !p)}
                aria-label={userPaused ? "Resume auto-rotation" : "Pause auto-rotation"}
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-full border transition-colors",
                  userPaused
                    ? cn(a.border, a.bgSoft, a.text)
                    : "border-white/10 bg-white/[0.02] text-text-muted hover:border-white/20 hover:text-white",
                )}
              >
                {userPaused ? (
                  <Play className="h-4 w-4" />
                ) : (
                  <Pause className="h-4 w-4" />
                )}
              </button>
              <button
                type="button"
                onClick={prev}
                aria-label="Previous slide"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-text-muted transition-colors hover:border-white/20 hover:text-white"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next slide"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-text-muted transition-colors hover:border-white/20 hover:text-white"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
