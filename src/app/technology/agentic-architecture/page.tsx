"use client";

/**
 * /technology/agentic-architecture — Phase 7 · 2 of 5
 *
 * Brand accent: indigo. Bespoke hero: CapabilityMesh — 3-layer
 * architectural mesh (entry points → 6 agent nodes → tools) with
 * traveling pulse on the active edge and Memory + Guardrails sidecars.
 */

import {
  TechHero,
  TechPainPoints,
  TechCapabilities,
  TechPatterns,
  TechUseCases,
  TechOutcomes,
  TechCTA,
} from "@/components/technology";
import { CapabilityMesh } from "@/components/technology/agentic-architecture/CapabilityMesh";
import { agenticArchitectureContent as c } from "@/content/technology/agentic-architecture";

export default function AgenticArchitecturePage() {
  return (
    <>
      <TechHero
        shortLabel={c.shortLabel}
        name={c.name}
        tagline={c.tagline}
        positioning={c.positioning}
        accent={c.accent}
        visual={<CapabilityMesh />}
      />

      <TechPainPoints
        kicker={c.pain.kicker}
        title={c.pain.title}
        lede={c.pain.lede}
        items={c.pain.items}
        accent={c.accent}
      />

      <TechCapabilities
        kicker={c.capabilities.kicker}
        title={c.capabilities.title}
        lede={c.capabilities.lede}
        items={c.capabilities.items}
        accent={c.accent}
      />

      <TechPatterns
        kicker={c.patterns.kicker}
        title={c.patterns.title}
        lede={c.patterns.lede}
        items={c.patterns.items}
        accent={c.accent}
      />

      <TechUseCases
        kicker={c.useCases.kicker}
        title={c.useCases.title}
        lede={c.useCases.lede}
        items={c.useCases.items}
        accent={c.accent}
      />

      <TechOutcomes
        kicker={c.outcomes.kicker}
        title={c.outcomes.title}
        lede={c.outcomes.lede}
        items={c.outcomes.items}
        accent={c.accent}
      />

      <TechCTA pillarName={c.name} accent={c.accent} />
    </>
  );
}
