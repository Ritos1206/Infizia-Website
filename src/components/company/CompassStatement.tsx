"use client";

import { motion } from "framer-motion";
import { Target, Compass, ArrowRight, ArrowUp } from "lucide-react";
import { MISSION, VISION } from "@/content/company/vision-mission";

/**
 * Compass Statement — bespoke hero for /company/vision-mission.
 *
 * Idiom: paired Mission (green) + Vision (blue) cards in a horizontal
 * split, with directional arrows — Mission shows ArrowRight (forward
 * motion, present), Vision shows ArrowUp (aspirational, future). A
 * subtle compass-rose backdrop ties them together.
 *
 * Distinct from every product / solution / service / red-hat /
 * technology hero — no other page on the site uses paired statement
 * cards with directional arrows.
 */
export function CompassStatement() {
  return (
    <div className="relative mx-auto w-full max-w-[600px]">
      {/* Ambient dual glow — green from left, blue from right */}
      <div className="pointer-events-none absolute -inset-8 -z-10 overflow-hidden rounded-[2.5rem]">
        <div className="absolute -left-1/4 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-brand-green/[0.10] blur-3xl" />
        <div className="absolute -right-1/4 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-brand-blue/[0.10] blur-3xl" />
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
        {/* Mission card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative overflow-hidden rounded-2xl border border-brand-green/30 bg-bg-elevated/70 p-5 backdrop-blur"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brand-green/0 via-brand-green/60 to-brand-green/0" />

          <div className="flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-green/40 bg-brand-green/10 text-brand-green">
              <Target className="h-4 w-4" strokeWidth={1.6} />
            </div>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex h-7 w-7 items-center justify-center rounded-full border border-brand-green/30 bg-brand-green/[0.06]"
            >
              <ArrowRight className="h-3.5 w-3.5 text-brand-green" />
            </motion.div>
          </div>

          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-green">
            Our {MISSION.title}
          </p>
          <p className="mt-2 font-display text-[15px] font-semibold leading-snug tracking-tight text-white">
            Drive efficiency, engagement, and growth — for every business that
            uses our products.
          </p>

          <div className="mt-4 flex flex-wrap gap-1">
            {["Efficiency", "Engagement", "Growth"].map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full border border-brand-green/30 bg-brand-green/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-brand-green"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Vision card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative overflow-hidden rounded-2xl border border-brand-blue/30 bg-bg-elevated/70 p-5 backdrop-blur"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brand-blue/0 via-brand-blue/60 to-brand-blue/0" />

          <div className="flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-blue/40 bg-brand-blue/10 text-brand-blue">
              <Compass className="h-4 w-4" strokeWidth={1.6} />
            </div>
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="flex h-7 w-7 items-center justify-center rounded-full border border-brand-blue/30 bg-brand-blue/[0.06]"
            >
              <ArrowUp className="h-3.5 w-3.5 text-brand-blue" />
            </motion.div>
          </div>

          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">
            Our {VISION.title}
          </p>
          <p className="mt-2 font-display text-[15px] font-semibold leading-snug tracking-tight text-white">
            A globally recognised technology company — known for excellence in
            AI-native applications.
          </p>

          <div className="mt-4 flex flex-wrap gap-1">
            {["AI-native", "Global", "Trusted"].map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full border border-brand-blue/30 bg-brand-blue/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-brand-blue"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Connecting band underneath: "infinite intelligence" tagline */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0.9 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="relative mt-3 flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-bg-elevated/70 px-5 py-3 backdrop-blur"
      >
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-brand-green/40 to-transparent" />
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-secondary">
          Infinite Intelligence
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent" />
      </motion.div>
    </div>
  );
}
