"use client";

import { mediaPublishingContent } from "@/content/solutions/media-publishing";
import {
  SolutionHero,
  SolutionPulse,
  SolutionPainPoints,
  SolutionStack,
  SolutionUseCases,
  SolutionOutcomes,
  SolutionCTA,
} from "@/components/solutions";
import { StoryLifecycleClock } from "@/components/solutions/media-publishing/StoryLifecycleClock";

/**
 * Media & Publishing solution page (Phase 5 · 9 of 9).
 *
 * Bespoke hero idiom: story lifecycle clock. 12-hour clockface with 6
 * spokes representing the editorial day (Morning brief → Draft → Review
 * → Publish → Distribute → Engage). A clockwise sweep arm rotates
 * around the dial. The currently active stage glows. Argues "the
 * newsroom is a daily rhythm, not a task list".
 *
 * Stack: E-News (anchor) + Meetrix (editorial meeting capture) +
 * Intellix (multilingual reader chat / subscription support).
 *
 * Brand accent: purple (matches E-News).
 */
export default function MediaPublishingSolutionPage() {
  return (
    <>
      <SolutionHero
        verticalLabel={mediaPublishingContent.verticalLabel}
        name={mediaPublishingContent.name}
        tagline={mediaPublishingContent.tagline}
        positioning={mediaPublishingContent.positioning}
        accent={mediaPublishingContent.accent}
        visual={<StoryLifecycleClock />}
      />

      <SolutionPulse
        kicker={mediaPublishingContent.pulse.kicker}
        title={mediaPublishingContent.pulse.title}
        lede={mediaPublishingContent.pulse.lede}
        items={mediaPublishingContent.pulse.items}
        accent={mediaPublishingContent.accent}
      />

      <SolutionPainPoints
        kicker={mediaPublishingContent.pain.kicker}
        title={mediaPublishingContent.pain.title}
        lede={mediaPublishingContent.pain.lede}
        items={mediaPublishingContent.pain.items}
        accent={mediaPublishingContent.accent}
      />

      <SolutionStack
        kicker={mediaPublishingContent.stack.kicker}
        title={mediaPublishingContent.stack.title}
        lede={mediaPublishingContent.stack.lede}
        entries={mediaPublishingContent.stack.entries}
        accent={mediaPublishingContent.accent}
      />

      <SolutionUseCases
        kicker={mediaPublishingContent.useCases.kicker}
        title={mediaPublishingContent.useCases.title}
        lede={mediaPublishingContent.useCases.lede}
        items={mediaPublishingContent.useCases.items}
        accent={mediaPublishingContent.accent}
      />

      <SolutionOutcomes
        kicker={mediaPublishingContent.outcomes.kicker}
        title={mediaPublishingContent.outcomes.title}
        lede={mediaPublishingContent.outcomes.lede}
        items={mediaPublishingContent.outcomes.items}
        accent={mediaPublishingContent.accent}
      />

      <SolutionCTA
        solutionName={mediaPublishingContent.name}
        accent={mediaPublishingContent.accent}
      />
    </>
  );
}
