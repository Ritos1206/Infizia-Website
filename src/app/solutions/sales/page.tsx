"use client";

import { salesContent } from "@/content/solutions/sales";
import {
  SolutionHero,
  SolutionPulse,
  SolutionPainPoints,
  SolutionStack,
  SolutionUseCases,
  SolutionOutcomes,
  SolutionCTA,
} from "@/components/solutions";
import { StageVelocityTrack } from "@/components/solutions/sales/StageVelocityTrack";

/**
 * Sales solution page (Phase 5 · 10 of 10 — added in Session 25).
 *
 * Bespoke hero idiom: stage velocity track. Horizontal 5-stage pipeline
 * (Lead → Researched → Engaged → Qualified → Closing) with 5 deal cards
 * positioned across the track, one of them (Brew Lab · Engaged) actively
 * moving with a fading velocity trail. Argues "the pipeline is a living
 * thing — every deal at its own speed, every signal on the same record".
 *
 * Stack: EyeCON (anchor — single Lead record) + Infera (pre-call
 * intelligence) + Meetrix (every call captured) + Intellix (inbound
 * qualification).
 *
 * Brand accent: teal (matches EyeCON flagship).
 */
export default function SalesSolutionPage() {
  return (
    <>
      <SolutionHero
        verticalLabel={salesContent.verticalLabel}
        name={salesContent.name}
        tagline={salesContent.tagline}
        positioning={salesContent.positioning}
        accent={salesContent.accent}
        visual={<StageVelocityTrack />}
      />

      <SolutionPulse
        kicker={salesContent.pulse.kicker}
        title={salesContent.pulse.title}
        lede={salesContent.pulse.lede}
        items={salesContent.pulse.items}
        accent={salesContent.accent}
      />

      <SolutionPainPoints
        kicker={salesContent.pain.kicker}
        title={salesContent.pain.title}
        lede={salesContent.pain.lede}
        items={salesContent.pain.items}
        accent={salesContent.accent}
      />

      <SolutionStack
        kicker={salesContent.stack.kicker}
        title={salesContent.stack.title}
        lede={salesContent.stack.lede}
        entries={salesContent.stack.entries}
        accent={salesContent.accent}
      />

      <SolutionUseCases
        kicker={salesContent.useCases.kicker}
        title={salesContent.useCases.title}
        lede={salesContent.useCases.lede}
        items={salesContent.useCases.items}
        accent={salesContent.accent}
      />

      <SolutionOutcomes
        kicker={salesContent.outcomes.kicker}
        title={salesContent.outcomes.title}
        lede={salesContent.outcomes.lede}
        items={salesContent.outcomes.items}
        accent={salesContent.accent}
      />

      <SolutionCTA
        solutionName={salesContent.name}
        accent={salesContent.accent}
      />
    </>
  );
}
