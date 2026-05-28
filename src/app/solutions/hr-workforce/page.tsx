"use client";

import { hrWorkforceContent } from "@/content/solutions/hr-workforce";
import {
  SolutionHero,
  SolutionPulse,
  SolutionPainPoints,
  SolutionStack,
  SolutionUseCases,
  SolutionOutcomes,
  SolutionCTA,
} from "@/components/solutions";
import { HRLifecycleOrbit } from "@/components/solutions/hr-workforce/HRLifecycleOrbit";

/**
 * HR & Workforce solution page (Phase 5 · 2 of 9).
 *
 * Bespoke hero idiom: 4-phase circular lifecycle orbit. Employee at the
 * centre, Hire → Onboard → Perform → Develop on the cardinal points.
 * Argues the narrative shape: people don't move through HR linearly.
 *
 * Stack: Convenor (anchor — hire + onboard) + Performix (assess) +
 * Meetrix (every 1:1 / interview / review captured).
 *
 * Brand accent: indigo (matches Convenor flagship).
 */
export default function HRWorkforceSolutionPage() {
  return (
    <>
      <SolutionHero
        verticalLabel={hrWorkforceContent.verticalLabel}
        name={hrWorkforceContent.name}
        tagline={hrWorkforceContent.tagline}
        positioning={hrWorkforceContent.positioning}
        accent={hrWorkforceContent.accent}
        visual={<HRLifecycleOrbit />}
      />

      <SolutionPulse
        kicker={hrWorkforceContent.pulse.kicker}
        title={hrWorkforceContent.pulse.title}
        lede={hrWorkforceContent.pulse.lede}
        items={hrWorkforceContent.pulse.items}
        accent={hrWorkforceContent.accent}
      />

      <SolutionPainPoints
        kicker={hrWorkforceContent.pain.kicker}
        title={hrWorkforceContent.pain.title}
        lede={hrWorkforceContent.pain.lede}
        items={hrWorkforceContent.pain.items}
        accent={hrWorkforceContent.accent}
      />

      <SolutionStack
        kicker={hrWorkforceContent.stack.kicker}
        title={hrWorkforceContent.stack.title}
        lede={hrWorkforceContent.stack.lede}
        entries={hrWorkforceContent.stack.entries}
        accent={hrWorkforceContent.accent}
      />

      <SolutionUseCases
        kicker={hrWorkforceContent.useCases.kicker}
        title={hrWorkforceContent.useCases.title}
        lede={hrWorkforceContent.useCases.lede}
        items={hrWorkforceContent.useCases.items}
        accent={hrWorkforceContent.accent}
      />

      <SolutionOutcomes
        kicker={hrWorkforceContent.outcomes.kicker}
        title={hrWorkforceContent.outcomes.title}
        lede={hrWorkforceContent.outcomes.lede}
        items={hrWorkforceContent.outcomes.items}
        accent={hrWorkforceContent.accent}
      />

      <SolutionCTA
        solutionName={hrWorkforceContent.name}
        accent={hrWorkforceContent.accent}
      />
    </>
  );
}
