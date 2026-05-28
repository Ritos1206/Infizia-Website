"use client";

import { educationContent } from "@/content/solutions/education";
import {
  SolutionHero,
  SolutionPulse,
  SolutionPainPoints,
  SolutionStack,
  SolutionUseCases,
  SolutionOutcomes,
  SolutionCTA,
} from "@/components/solutions";
import { KnowledgeTree } from "@/components/solutions/education/KnowledgeTree";

/**
 * Education solution page (Phase 5 · 4 of 9).
 *
 * Bespoke hero idiom: knowledge tree. Topic root at the top, trunk
 * down, 4 branch cards below — each branch carrying typed leaves
 * (lessons, MCQs, live quiz, mock test). Branches grow on viewport-enter.
 *
 * Stack: Learnova (anchor — generation) + LMS (delivery + community +
 * certificates) + Meetrix (live class capture).
 *
 * Brand accent: fuchsia (matches Learnova).
 */
export default function EducationSolutionPage() {
  return (
    <>
      <SolutionHero
        verticalLabel={educationContent.verticalLabel}
        name={educationContent.name}
        tagline={educationContent.tagline}
        positioning={educationContent.positioning}
        accent={educationContent.accent}
        visual={<KnowledgeTree />}
      />

      <SolutionPulse
        kicker={educationContent.pulse.kicker}
        title={educationContent.pulse.title}
        lede={educationContent.pulse.lede}
        items={educationContent.pulse.items}
        accent={educationContent.accent}
      />

      <SolutionPainPoints
        kicker={educationContent.pain.kicker}
        title={educationContent.pain.title}
        lede={educationContent.pain.lede}
        items={educationContent.pain.items}
        accent={educationContent.accent}
      />

      <SolutionStack
        kicker={educationContent.stack.kicker}
        title={educationContent.stack.title}
        lede={educationContent.stack.lede}
        entries={educationContent.stack.entries}
        accent={educationContent.accent}
      />

      <SolutionUseCases
        kicker={educationContent.useCases.kicker}
        title={educationContent.useCases.title}
        lede={educationContent.useCases.lede}
        items={educationContent.useCases.items}
        accent={educationContent.accent}
      />

      <SolutionOutcomes
        kicker={educationContent.outcomes.kicker}
        title={educationContent.outcomes.title}
        lede={educationContent.outcomes.lede}
        items={educationContent.outcomes.items}
        accent={educationContent.accent}
      />

      <SolutionCTA
        solutionName={educationContent.name}
        accent={educationContent.accent}
      />
    </>
  );
}
