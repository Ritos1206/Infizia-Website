"use client";

/**
 * /technology/rag — Phase 7 · 3 of 5
 *
 * Brand accent: cyan. Bespoke hero: KnowledgePipeline — 4-stage
 * vertical pipeline (Documents → Chunk & embed → Vector index
 * wireframe → Retrieve & cite) with hybrid retrieval footer.
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
import { KnowledgePipeline } from "@/components/technology/rag/KnowledgePipeline";
import { ragContent as c } from "@/content/technology/rag";

export default function RagPage() {
  return (
    <>
      <TechHero
        shortLabel={c.shortLabel}
        name={c.name}
        tagline={c.tagline}
        positioning={c.positioning}
        accent={c.accent}
        visual={<KnowledgePipeline />}
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
