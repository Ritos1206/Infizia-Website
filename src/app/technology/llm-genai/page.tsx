"use client";

/**
 * /technology/llm-genai — Phase 7 · 1 of 5 (D-73)
 *
 * Brand accent: violet. Bespoke hero: TokenStreamForge — horizontal
 * token-flow visualization with model selector chips, streaming token
 * panel, structured response, and params strip. Distinct from every
 * prior shipped hero idiom (49 catalogued at end of Phase 6).
 *
 * Voice rule (D-40): technical concepts allowed (LLM, prompt engineering,
 * fine-tuning, inference); specific vendor product names NOT exposed.
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
import { TokenStreamForge } from "@/components/technology/llm-genai/TokenStreamForge";
import { llmGenaiContent as c } from "@/content/technology/llm-genai";

export default function LlmGenaiPage() {
  return (
    <>
      <TechHero
        shortLabel={c.shortLabel}
        name={c.name}
        tagline={c.tagline}
        positioning={c.positioning}
        accent={c.accent}
        visual={<TokenStreamForge />}
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
