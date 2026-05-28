"use client";

import { healthcareContent } from "@/content/solutions/healthcare";
import {
  SolutionHero,
  SolutionPulse,
  SolutionPainPoints,
  SolutionStack,
  SolutionUseCases,
  SolutionOutcomes,
  SolutionCTA,
} from "@/components/solutions";
import { HealthcareFlowRibbon } from "@/components/solutions/healthcare/HealthcareFlowRibbon";

/**
 * Healthcare solution page (Phase 5 · 1 of 9).
 *
 * Bespoke hero idiom: 5-station patient-flow ribbon with a traveling
 * pulse — Call → Book → Visit → Prescribe → Follow-up. Maps every
 * patient-affecting moment to the Infizia product handling it.
 *
 * Stack: VitaCare (anchor) + Intellix (call automation) + DocuMind (lab
 * report digitisation) + Meetrix (multi-doctor case discussions).
 *
 * Brand accent: green (matches VitaCare flagship).
 */
export default function HealthcareSolutionPage() {
  return (
    <>
      <SolutionHero
        verticalLabel={healthcareContent.verticalLabel}
        name={healthcareContent.name}
        tagline={healthcareContent.tagline}
        positioning={healthcareContent.positioning}
        accent={healthcareContent.accent}
        visual={<HealthcareFlowRibbon />}
      />

      <SolutionPulse
        kicker={healthcareContent.pulse.kicker}
        title={healthcareContent.pulse.title}
        lede={healthcareContent.pulse.lede}
        items={healthcareContent.pulse.items}
        accent={healthcareContent.accent}
      />

      <SolutionPainPoints
        kicker={healthcareContent.pain.kicker}
        title={healthcareContent.pain.title}
        lede={healthcareContent.pain.lede}
        items={healthcareContent.pain.items}
        accent={healthcareContent.accent}
      />

      <SolutionStack
        kicker={healthcareContent.stack.kicker}
        title={healthcareContent.stack.title}
        lede={healthcareContent.stack.lede}
        entries={healthcareContent.stack.entries}
        accent={healthcareContent.accent}
      />

      <SolutionUseCases
        kicker={healthcareContent.useCases.kicker}
        title={healthcareContent.useCases.title}
        lede={healthcareContent.useCases.lede}
        items={healthcareContent.useCases.items}
        accent={healthcareContent.accent}
      />

      <SolutionOutcomes
        kicker={healthcareContent.outcomes.kicker}
        title={healthcareContent.outcomes.title}
        lede={healthcareContent.outcomes.lede}
        items={healthcareContent.outcomes.items}
        accent={healthcareContent.accent}
      />

      <SolutionCTA
        solutionName={healthcareContent.name}
        accent={healthcareContent.accent}
      />
    </>
  );
}
