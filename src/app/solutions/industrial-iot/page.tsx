"use client";

import { industrialIotContent } from "@/content/solutions/industrial-iot";
import {
  SolutionHero,
  SolutionPulse,
  SolutionPainPoints,
  SolutionStack,
  SolutionUseCases,
  SolutionOutcomes,
  SolutionCTA,
} from "@/components/solutions";
import { FactoryDigitalTwin } from "@/components/solutions/industrial-iot/FactoryDigitalTwin";

/**
 * Industrial Intelligence & IoT solution page (Phase 5 · 8 of 9).
 *
 * Bespoke hero idiom: factory digital twin. Top-down floor plan with 3
 * zones, 9 asset markers (mostly ok, one alert with a pulsing red ring),
 * and a floating anomaly callout. Argues "every asset on the screen,
 * every drift visible".
 *
 * Stack: OpsSight (anchor) + DocuMind (work-order / inspection log
 * digitisation) + Meetrix (shift-handover capture).
 *
 * Brand accent: emerald (matches OpsSight).
 */
export default function IndustrialIotSolutionPage() {
  return (
    <>
      <SolutionHero
        verticalLabel={industrialIotContent.verticalLabel}
        name={industrialIotContent.name}
        tagline={industrialIotContent.tagline}
        positioning={industrialIotContent.positioning}
        accent={industrialIotContent.accent}
        visual={<FactoryDigitalTwin />}
      />

      <SolutionPulse
        kicker={industrialIotContent.pulse.kicker}
        title={industrialIotContent.pulse.title}
        lede={industrialIotContent.pulse.lede}
        items={industrialIotContent.pulse.items}
        accent={industrialIotContent.accent}
      />

      <SolutionPainPoints
        kicker={industrialIotContent.pain.kicker}
        title={industrialIotContent.pain.title}
        lede={industrialIotContent.pain.lede}
        items={industrialIotContent.pain.items}
        accent={industrialIotContent.accent}
      />

      <SolutionStack
        kicker={industrialIotContent.stack.kicker}
        title={industrialIotContent.stack.title}
        lede={industrialIotContent.stack.lede}
        entries={industrialIotContent.stack.entries}
        accent={industrialIotContent.accent}
      />

      <SolutionUseCases
        kicker={industrialIotContent.useCases.kicker}
        title={industrialIotContent.useCases.title}
        lede={industrialIotContent.useCases.lede}
        items={industrialIotContent.useCases.items}
        accent={industrialIotContent.accent}
      />

      <SolutionOutcomes
        kicker={industrialIotContent.outcomes.kicker}
        title={industrialIotContent.outcomes.title}
        lede={industrialIotContent.outcomes.lede}
        items={industrialIotContent.outcomes.items}
        accent={industrialIotContent.accent}
      />

      <SolutionCTA
        solutionName={industrialIotContent.name}
        accent={industrialIotContent.accent}
      />
    </>
  );
}
