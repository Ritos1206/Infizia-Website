"use client";

import { intelligenceResearchContent } from "@/content/solutions/intelligence-research";
import {
  SolutionHero,
  SolutionPulse,
  SolutionPainPoints,
  SolutionStack,
  SolutionUseCases,
  SolutionOutcomes,
  SolutionCTA,
} from "@/components/solutions";
import { InsightConstellation } from "@/components/solutions/intelligence-research/InsightConstellation";

/**
 * Intelligence & Research solution page (Phase 5 · 7 of 9).
 *
 * Bespoke hero idiom: insight constellation. Star-chart canvas with 8
 * insight nodes about a sample target company, faint cyan edges
 * connecting related signals, and twinkling stars. Argues "patterns in
 * the noise — Infera surfaces them automatically".
 *
 * Stack: Infera (anchor) + Meetrix (prospect call capture) + Intellix
 * (chat-grounded interface to the team's own intel).
 *
 * Brand accent: cyan (matches Infera).
 */
export default function IntelligenceResearchSolutionPage() {
  return (
    <>
      <SolutionHero
        verticalLabel={intelligenceResearchContent.verticalLabel}
        name={intelligenceResearchContent.name}
        tagline={intelligenceResearchContent.tagline}
        positioning={intelligenceResearchContent.positioning}
        accent={intelligenceResearchContent.accent}
        visual={<InsightConstellation />}
      />

      <SolutionPulse
        kicker={intelligenceResearchContent.pulse.kicker}
        title={intelligenceResearchContent.pulse.title}
        lede={intelligenceResearchContent.pulse.lede}
        items={intelligenceResearchContent.pulse.items}
        accent={intelligenceResearchContent.accent}
      />

      <SolutionPainPoints
        kicker={intelligenceResearchContent.pain.kicker}
        title={intelligenceResearchContent.pain.title}
        lede={intelligenceResearchContent.pain.lede}
        items={intelligenceResearchContent.pain.items}
        accent={intelligenceResearchContent.accent}
      />

      <SolutionStack
        kicker={intelligenceResearchContent.stack.kicker}
        title={intelligenceResearchContent.stack.title}
        lede={intelligenceResearchContent.stack.lede}
        entries={intelligenceResearchContent.stack.entries}
        accent={intelligenceResearchContent.accent}
      />

      <SolutionUseCases
        kicker={intelligenceResearchContent.useCases.kicker}
        title={intelligenceResearchContent.useCases.title}
        lede={intelligenceResearchContent.useCases.lede}
        items={intelligenceResearchContent.useCases.items}
        accent={intelligenceResearchContent.accent}
      />

      <SolutionOutcomes
        kicker={intelligenceResearchContent.outcomes.kicker}
        title={intelligenceResearchContent.outcomes.title}
        lede={intelligenceResearchContent.outcomes.lede}
        items={intelligenceResearchContent.outcomes.items}
        accent={intelligenceResearchContent.accent}
      />

      <SolutionCTA
        solutionName={intelligenceResearchContent.name}
        accent={intelligenceResearchContent.accent}
      />
    </>
  );
}
