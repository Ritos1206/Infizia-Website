"use client";

import {
  RedHatHero,
  RedHatTierTable,
  RedHatFeatureGrid,
  RedHatOutcomes,
  RedHatCTA,
} from "@/components/red-hat";
import { OperationsBridge } from "@/components/red-hat/managed-services/OperationsBridge";
import { managedServicesContent } from "@/content/red-hat/managed-services";

/**
 * /red-hat/managed-services — Managed Services page.
 *
 * Hero idiom: Operations Bridge — KPI strip + stair-step tier ladder
 * + 24-hour incident ribbon.
 *
 * Page composition:
 *   1. RedHatHero + OperationsBridge
 *   2. RedHatTierTable      — 4 tiers with Rs prices verbatim from docx
 *   3. RedHatFeatureGrid    — 6 inclusions ("What every contract delivers")
 *   4. RedHatOutcomes       — 4 outcome tiles
 *   5. RedHatCTA
 */
export default function ManagedServicesPage() {
  return (
    <>
      <RedHatHero
        kicker={managedServicesContent.kicker}
        title={managedServicesContent.title}
        tagline={managedServicesContent.tagline}
        positioning={managedServicesContent.positioning}
        primaryCtaLabel="Talk to Service Delivery"
        visual={<OperationsBridge />}
      />

      <RedHatTierTable
        kicker={managedServicesContent.tiers.kicker}
        title={managedServicesContent.tiers.title}
        lede={managedServicesContent.tiers.lede}
        items={managedServicesContent.tiers.items}
      />

      <RedHatFeatureGrid
        kicker={managedServicesContent.inclusions.kicker}
        title={managedServicesContent.inclusions.title}
        lede={managedServicesContent.inclusions.lede}
        items={managedServicesContent.inclusions.items}
      />

      <RedHatOutcomes
        kicker={managedServicesContent.outcomes.kicker}
        title={managedServicesContent.outcomes.title}
        lede={managedServicesContent.outcomes.lede}
        items={managedServicesContent.outcomes.items}
      />

      <RedHatCTA
        scopeLabel="Managed Services · with Infizia"
        pageName="managed Red Hat operations"
      />
    </>
  );
}
