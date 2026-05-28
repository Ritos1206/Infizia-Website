"use client";

import {
  RedHatHero,
  RedHatPainPoints,
  RedHatServices,
  RedHatSixRs,
  RedHatPipelineRail,
  RedHatEngagement,
  RedHatOutcomes,
  RedHatCTA,
} from "@/components/red-hat";
import { ClusterTopologyMosaic } from "@/components/red-hat/openshift/ClusterTopologyMosaic";
import { openshiftContent } from "@/content/red-hat/openshift";

/**
 * /red-hat/openshift — OpenShift Container Platform page.
 *
 * Hero idiom: Cluster Topology Mosaic — multi-zone cluster blueprint
 * with master HA + worker nodes + edge SNO, animated pod migration,
 * service mesh edges, and DevSecOps pipeline strip.
 *
 * Page composition:
 *   1. RedHatHero + ClusterTopologyMosaic
 *   2. RedHatPainPoints
 *   3. RedHatServices         — 5 services (Strategy → Day-2)
 *   4. RedHatSixRs            — 6 R's containerisation methodology
 *   5. RedHatPipelineRail     — DevSecOps pipeline (6 stages)
 *   6. RedHatEngagement
 *   7. RedHatOutcomes
 *   8. RedHatCTA
 */
export default function OpenshiftPage() {
  return (
    <>
      <RedHatHero
        kicker={openshiftContent.kicker}
        title={openshiftContent.title}
        tagline={openshiftContent.tagline}
        positioning={openshiftContent.positioning}
        primaryCtaLabel={openshiftContent.primaryCtaLabel}
        secondaryCtaLabel={openshiftContent.secondaryCtaLabel}
        visual={<ClusterTopologyMosaic />}
      />

      <RedHatPainPoints
        kicker={openshiftContent.pain.kicker}
        title={openshiftContent.pain.title}
        lede={openshiftContent.pain.lede}
        items={openshiftContent.pain.items}
      />

      <RedHatServices
        kicker={openshiftContent.services.kicker}
        title={openshiftContent.services.title}
        lede={openshiftContent.services.lede}
        items={openshiftContent.services.items}
      />

      {openshiftContent.extras?.sixRs && (
        <RedHatSixRs items={openshiftContent.extras.sixRs} />
      )}

      {openshiftContent.extras?.pipeline && (
        <RedHatPipelineRail items={openshiftContent.extras.pipeline} />
      )}

      <RedHatEngagement
        kicker={openshiftContent.engagement.kicker}
        title={openshiftContent.engagement.title}
        lede={openshiftContent.engagement.lede}
        items={openshiftContent.engagement.items}
      />

      <RedHatOutcomes
        kicker={openshiftContent.outcomes.kicker}
        title={openshiftContent.outcomes.title}
        lede={openshiftContent.outcomes.lede}
        items={openshiftContent.outcomes.items}
      />

      <RedHatCTA
        scopeLabel="OpenShift · with Infizia"
        pageName="OpenShift platform operations"
      />
    </>
  );
}
