"use client";

/**
 * /technology/application-architecture — Phase 7 · 5 of 5 (CLOSES Phase 7 Tech)
 *
 * Brand accent: sky. Bespoke hero: SystemTopologyBlueprint —
 * 4 vertically-stacked architectural layers (Edge / API gateway /
 * Service mesh / Data) with a traveling request dot moving down on
 * loop and an observability spine sidebar.
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
import { SystemTopologyBlueprint } from "@/components/technology/application-architecture/SystemTopologyBlueprint";
import { applicationArchitectureContent as c } from "@/content/technology/application-architecture";

export default function ApplicationArchitecturePage() {
  return (
    <>
      <TechHero
        shortLabel={c.shortLabel}
        name={c.name}
        tagline={c.tagline}
        positioning={c.positioning}
        accent={c.accent}
        visual={<SystemTopologyBlueprint />}
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
