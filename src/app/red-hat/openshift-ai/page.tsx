"use client";

import {
  RedHatHero,
  RedHatPainPoints,
  RedHatServices,
  RedHatFoundationModels,
  RedHatIndustryAtlas,
  RedHatEngagement,
  RedHatOutcomes,
  RedHatCTA,
} from "@/components/red-hat";
import { ModelFoundry } from "@/components/red-hat/openshift-ai/ModelFoundry";
import { openshiftAiContent } from "@/content/red-hat/openshift-ai";

/**
 * /red-hat/openshift-ai — Red Hat AI / OpenShift AI page.
 *
 * Hero idiom: Model Foundry — data inlet → training crucible →
 * inference outlet, with GPU rack utilization slats and foundation-
 * model chips.
 *
 * Page composition:
 *   1. RedHatHero + ModelFoundry
 *   2. RedHatPainPoints
 *   3. RedHatServices            — 5 services
 *   4. RedHatFoundationModels    — 4 model chips
 *   5. RedHatIndustryAtlas       — 6 industry use cases (BFSI/Healthcare/…)
 *   6. RedHatEngagement
 *   7. RedHatOutcomes
 *   8. RedHatCTA
 */
export default function OpenshiftAIPage() {
  return (
    <>
      <RedHatHero
        kicker={openshiftAiContent.kicker}
        title={openshiftAiContent.title}
        tagline={openshiftAiContent.tagline}
        positioning={openshiftAiContent.positioning}
        primaryCtaLabel={openshiftAiContent.primaryCtaLabel}
        secondaryCtaLabel={openshiftAiContent.secondaryCtaLabel}
        visual={<ModelFoundry />}
      />

      <RedHatPainPoints
        kicker={openshiftAiContent.pain.kicker}
        title={openshiftAiContent.pain.title}
        lede={openshiftAiContent.pain.lede}
        items={openshiftAiContent.pain.items}
      />

      <RedHatServices
        kicker={openshiftAiContent.services.kicker}
        title={openshiftAiContent.services.title}
        lede={openshiftAiContent.services.lede}
        items={openshiftAiContent.services.items}
      />

      {openshiftAiContent.extras?.foundationModels && (
        <RedHatFoundationModels
          items={openshiftAiContent.extras.foundationModels}
        />
      )}

      {openshiftAiContent.extras?.industryUseCases && (
        <RedHatIndustryAtlas
          items={openshiftAiContent.extras.industryUseCases}
        />
      )}

      <RedHatEngagement
        kicker={openshiftAiContent.engagement.kicker}
        title={openshiftAiContent.engagement.title}
        lede={openshiftAiContent.engagement.lede}
        items={openshiftAiContent.engagement.items}
      />

      <RedHatOutcomes
        kicker={openshiftAiContent.outcomes.kicker}
        title={openshiftAiContent.outcomes.title}
        lede={openshiftAiContent.outcomes.lede}
        items={openshiftAiContent.outcomes.items}
      />

      <RedHatCTA
        scopeLabel="OpenShift AI · with Infizia"
        pageName="OpenShift AI platform"
      />
    </>
  );
}
