"use client";

/**
 * /technology/voice-ai — Phase 7 · 4 of 5
 *
 * Brand accent: rose. Bespoke hero: WaveformConversation — vertical
 * multi-turn timeline (3 turns + 1 active streaming turn) with per-turn
 * waveform bars + ASR confidence rings + code-mix language tags. Right
 * sidecar: live NLU intent classification + entity extraction.
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
import { WaveformConversation } from "@/components/technology/voice-ai/WaveformConversation";
import { voiceAiContent as c } from "@/content/technology/voice-ai";

export default function VoiceAiPage() {
  return (
    <>
      <TechHero
        shortLabel={c.shortLabel}
        name={c.name}
        tagline={c.tagline}
        positioning={c.positioning}
        accent={c.accent}
        visual={<WaveformConversation />}
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
