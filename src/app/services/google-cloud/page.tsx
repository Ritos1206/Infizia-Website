"use client";

import { googleCloudContent } from "@/content/services/google-cloud";
import {
  ServiceHero,
  ServicePainPoints,
  ServiceCapabilities,
  ServiceEngagement,
  ServiceUseCases,
  ServiceOutcomes,
  ServiceCTA,
} from "@/components/services";
import { RegionalTopologyMap } from "@/components/services/google-cloud/RegionalTopologyMap";

/**
 * Google Cloud & Infrastructure service page (Phase 6 · 4 of 4).
 *
 * Bespoke hero idiom: Regional Topology Map — 3 region cards
 * (asia-south1, us-central1, europe-west1) laid out horizontally,
 * each carrying 3 GCP service tiles. One region (us-central1) is
 * primary (sky-bordered, shadow). Animated traffic pulses connect
 * the regions.
 *
 * Brand accent: sky.
 */
export default function GoogleCloudServicePage() {
  return (
    <>
      <ServiceHero
        shortLabel={googleCloudContent.shortLabel}
        name={googleCloudContent.name}
        tagline={googleCloudContent.tagline}
        positioning={googleCloudContent.positioning}
        accent={googleCloudContent.accent}
        visual={<RegionalTopologyMap />}
      />

      <ServicePainPoints
        kicker={googleCloudContent.pain.kicker}
        title={googleCloudContent.pain.title}
        lede={googleCloudContent.pain.lede}
        items={googleCloudContent.pain.items}
        accent={googleCloudContent.accent}
      />

      <ServiceCapabilities
        kicker={googleCloudContent.capabilities.kicker}
        title={googleCloudContent.capabilities.title}
        lede={googleCloudContent.capabilities.lede}
        items={googleCloudContent.capabilities.items}
        accent={googleCloudContent.accent}
      />

      <ServiceEngagement
        kicker={googleCloudContent.engagement.kicker}
        title={googleCloudContent.engagement.title}
        lede={googleCloudContent.engagement.lede}
        items={googleCloudContent.engagement.items}
        accent={googleCloudContent.accent}
      />

      <ServiceUseCases
        kicker={googleCloudContent.useCases.kicker}
        title={googleCloudContent.useCases.title}
        lede={googleCloudContent.useCases.lede}
        items={googleCloudContent.useCases.items}
        accent={googleCloudContent.accent}
      />

      <ServiceOutcomes
        kicker={googleCloudContent.outcomes.kicker}
        title={googleCloudContent.outcomes.title}
        lede={googleCloudContent.outcomes.lede}
        items={googleCloudContent.outcomes.items}
        accent={googleCloudContent.accent}
      />

      <ServiceCTA
        serviceName={googleCloudContent.name}
        accent={googleCloudContent.accent}
      />
    </>
  );
}
