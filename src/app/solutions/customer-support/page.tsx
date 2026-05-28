"use client";

import { customerSupportContent } from "@/content/solutions/customer-support";
import {
  SolutionHero,
  SolutionPulse,
  SolutionPainPoints,
  SolutionStack,
  SolutionUseCases,
  SolutionOutcomes,
  SolutionCTA,
} from "@/components/solutions";
import { ConversationCascade } from "@/components/solutions/customer-support/ConversationCascade";

/**
 * Customer Support solution page (Phase 5 · 3 of 9).
 *
 * Bespoke hero idiom: 3-column conversation cascade. Inbound channels
 * (left) → AI console (centre) → resolution tags (right). The narrative:
 * many channels in, one console, tagged outputs out.
 *
 * Stack: Intellix (anchor) + Meetrix (escalation capture) + DocuMind
 * (document-heavy support cases like claims and contracts).
 *
 * Brand accent: rose (matches Intellix).
 */
export default function CustomerSupportSolutionPage() {
  return (
    <>
      <SolutionHero
        verticalLabel={customerSupportContent.verticalLabel}
        name={customerSupportContent.name}
        tagline={customerSupportContent.tagline}
        positioning={customerSupportContent.positioning}
        accent={customerSupportContent.accent}
        visual={<ConversationCascade />}
      />

      <SolutionPulse
        kicker={customerSupportContent.pulse.kicker}
        title={customerSupportContent.pulse.title}
        lede={customerSupportContent.pulse.lede}
        items={customerSupportContent.pulse.items}
        accent={customerSupportContent.accent}
      />

      <SolutionPainPoints
        kicker={customerSupportContent.pain.kicker}
        title={customerSupportContent.pain.title}
        lede={customerSupportContent.pain.lede}
        items={customerSupportContent.pain.items}
        accent={customerSupportContent.accent}
      />

      <SolutionStack
        kicker={customerSupportContent.stack.kicker}
        title={customerSupportContent.stack.title}
        lede={customerSupportContent.stack.lede}
        entries={customerSupportContent.stack.entries}
        accent={customerSupportContent.accent}
      />

      <SolutionUseCases
        kicker={customerSupportContent.useCases.kicker}
        title={customerSupportContent.useCases.title}
        lede={customerSupportContent.useCases.lede}
        items={customerSupportContent.useCases.items}
        accent={customerSupportContent.accent}
      />

      <SolutionOutcomes
        kicker={customerSupportContent.outcomes.kicker}
        title={customerSupportContent.outcomes.title}
        lede={customerSupportContent.outcomes.lede}
        items={customerSupportContent.outcomes.items}
        accent={customerSupportContent.accent}
      />

      <SolutionCTA
        solutionName={customerSupportContent.name}
        accent={customerSupportContent.accent}
      />
    </>
  );
}
