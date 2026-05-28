"use client";

import {
  RedHatHero,
  RedHatPainPoints,
  RedHatServices,
  RedHatStandardsRow,
  RedHatVersionTable,
  RedHatEngagement,
  RedHatOutcomes,
  RedHatCTA,
} from "@/components/red-hat";
import { LifecycleTimelineRiver } from "@/components/red-hat/rhel/LifecycleTimelineRiver";
import { rhelContent } from "@/content/red-hat/rhel";

/**
 * /red-hat/rhel — Red Hat Enterprise Linux page.
 *
 * Hero idiom: Lifecycle Timeline River — 4 RHEL version bands
 * (6.x → 9.x) flowing along a 2024 → 2035 axis with a "today" cursor,
 * drifting CVE shields on the active version, and migration arcs
 * footer.
 *
 * Page composition:
 *   1. RedHatHero + LifecycleTimelineRiver
 *   2. RedHatPainPoints       — 4 frictions
 *   3. RedHatServices         — 5 services from docx
 *   4. RedHatStandardsRow     — CIS · STIG · PCI · ISO · NIST
 *   5. RedHatVersionTable     — verbatim version table from docx
 *   6. RedHatEngagement       — 4 engagement-model cards
 *   7. RedHatOutcomes         — 4 outcome tiles
 *   8. RedHatCTA
 */
export default function RhelPage() {
  return (
    <>
      <RedHatHero
        kicker={rhelContent.kicker}
        title={rhelContent.title}
        tagline={rhelContent.tagline}
        positioning={rhelContent.positioning}
        primaryCtaLabel={rhelContent.primaryCtaLabel}
        secondaryCtaLabel={rhelContent.secondaryCtaLabel}
        visual={<LifecycleTimelineRiver />}
      />

      <RedHatPainPoints
        kicker={rhelContent.pain.kicker}
        title={rhelContent.pain.title}
        lede={rhelContent.pain.lede}
        items={rhelContent.pain.items}
      />

      <RedHatServices
        kicker={rhelContent.services.kicker}
        title={rhelContent.services.title}
        lede={rhelContent.services.lede}
        items={rhelContent.services.items}
      />

      {rhelContent.extras?.standards && (
        <RedHatStandardsRow items={rhelContent.extras.standards} />
      )}

      {rhelContent.extras?.rhelVersions && (
        <RedHatVersionTable
          kicker="Version support · authoritative table"
          title="Every RHEL version on one timeline."
          lede="Source: Red Hat Enterprise Linux Life Cycle (April 2026). Pulled directly from the Infizia services catalog."
          items={rhelContent.extras.rhelVersions}
        />
      )}

      <RedHatEngagement
        kicker={rhelContent.engagement.kicker}
        title={rhelContent.engagement.title}
        lede={rhelContent.engagement.lede}
        items={rhelContent.engagement.items}
      />

      <RedHatOutcomes
        kicker={rhelContent.outcomes.kicker}
        title={rhelContent.outcomes.title}
        lede={rhelContent.outcomes.lede}
        items={rhelContent.outcomes.items}
      />

      <RedHatCTA scopeLabel="RHEL · with Infizia" pageName="RHEL operations" />
    </>
  );
}
