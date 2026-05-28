"use client";

import {
  RedHatHero,
  RedHatPillarsGrid,
  RedHatEngagement,
  RedHatOutcomes,
  RedHatCTA,
} from "@/components/red-hat";
import { StackConstellation } from "@/components/red-hat/overview/StackConstellation";
import { redHatOverviewContent } from "@/content/red-hat/overview";

/**
 * /red-hat — Tier 5 overview page.
 *
 * Hero idiom: Stack Constellation — full-width radial composition with
 * 6 pillar portals around a Red Hat fedora core, outer rotating
 * dashed ring carrying 4 engagement-model labels.
 *
 * Page composition:
 *   1. RedHatHero (full-width centred copy + StackConstellation visual)
 *   2. RedHatPillarsGrid     — 6 pillar catalogue cards (RHEL → Training)
 *   3. RedHatEngagement      — 4 engagement-model cards (Assessment …)
 *   4. RedHatOutcomes        — 4 "Why teams pick Infizia" tiles
 *   5. RedHatCTA
 *
 * Source of truth: `Infizia_Services.docx` Services Overview +
 * Engagement Models. Per D-69, the website does NOT telegraph
 * "Premier Partner" — that's stated in the docx but stays out of
 * site copy.
 *
 * Metadata for this page lives in `layout.tsx` because the page is
 * a Client Component (icon function refs in content can't pass
 * through a Server Component boundary into Client Components).
 */
export default function RedHatOverviewPage() {
  return (
    <>
      <RedHatHero
        kicker={redHatOverviewContent.kicker}
        title={redHatOverviewContent.title}
        tagline={redHatOverviewContent.tagline}
        positioning={redHatOverviewContent.positioning}
        primaryCtaLabel="Talk to our Red Hat practice"
        visual={<StackConstellation />}
      />

      <RedHatPillarsGrid />

      <RedHatEngagement
        kicker={redHatOverviewContent.engagement.kicker}
        title={redHatOverviewContent.engagement.title}
        lede={redHatOverviewContent.engagement.lede}
        items={redHatOverviewContent.engagement.items}
      />

      <RedHatOutcomes
        kicker={redHatOverviewContent.outcomes.kicker}
        title={redHatOverviewContent.outcomes.title}
        lede={redHatOverviewContent.outcomes.lede}
        items={redHatOverviewContent.outcomes.items}
      />

      <RedHatCTA scopeLabel="Red Hat Practice · with Infizia" pageName="Red Hat" />
    </>
  );
}
