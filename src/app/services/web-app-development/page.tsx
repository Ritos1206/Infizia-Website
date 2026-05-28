"use client";

import { webAppDevelopmentContent } from "@/content/services/web-app-development";
import {
  ServiceHero,
  ServicePainPoints,
  ServiceCapabilities,
  ServiceEngagement,
  ServiceUseCases,
  ServiceOutcomes,
  ServiceCTA,
} from "@/components/services";
import { MultiSurfaceFrame } from "@/components/services/web-app-development/MultiSurfaceFrame";

/**
 * Enterprise Web & App Development service page (Phase 6 · 1 of 4).
 *
 * Bespoke hero idiom: Multi-Surface Sync Frame — 4 device cards (web ·
 * tablet · mobile · kiosk) rendering the same product surface with a
 * "In sync" pill at the centre.
 *
 * Brand accent: blue.
 * Source of truth for positioning: corporate deck page 4.
 */
export default function WebAppDevelopmentServicePage() {
  return (
    <>
      <ServiceHero
        shortLabel={webAppDevelopmentContent.shortLabel}
        name={webAppDevelopmentContent.name}
        tagline={webAppDevelopmentContent.tagline}
        positioning={webAppDevelopmentContent.positioning}
        accent={webAppDevelopmentContent.accent}
        visual={<MultiSurfaceFrame />}
      />

      <ServicePainPoints
        kicker={webAppDevelopmentContent.pain.kicker}
        title={webAppDevelopmentContent.pain.title}
        lede={webAppDevelopmentContent.pain.lede}
        items={webAppDevelopmentContent.pain.items}
        accent={webAppDevelopmentContent.accent}
      />

      <ServiceCapabilities
        kicker={webAppDevelopmentContent.capabilities.kicker}
        title={webAppDevelopmentContent.capabilities.title}
        lede={webAppDevelopmentContent.capabilities.lede}
        items={webAppDevelopmentContent.capabilities.items}
        accent={webAppDevelopmentContent.accent}
      />

      <ServiceEngagement
        kicker={webAppDevelopmentContent.engagement.kicker}
        title={webAppDevelopmentContent.engagement.title}
        lede={webAppDevelopmentContent.engagement.lede}
        items={webAppDevelopmentContent.engagement.items}
        accent={webAppDevelopmentContent.accent}
      />

      <ServiceUseCases
        kicker={webAppDevelopmentContent.useCases.kicker}
        title={webAppDevelopmentContent.useCases.title}
        lede={webAppDevelopmentContent.useCases.lede}
        items={webAppDevelopmentContent.useCases.items}
        accent={webAppDevelopmentContent.accent}
      />

      <ServiceOutcomes
        kicker={webAppDevelopmentContent.outcomes.kicker}
        title={webAppDevelopmentContent.outcomes.title}
        lede={webAppDevelopmentContent.outcomes.lede}
        items={webAppDevelopmentContent.outcomes.items}
        accent={webAppDevelopmentContent.accent}
      />

      <ServiceCTA
        serviceName={webAppDevelopmentContent.name}
        accent={webAppDevelopmentContent.accent}
      />
    </>
  );
}
