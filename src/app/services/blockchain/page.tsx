"use client";

import { blockchainContent } from "@/content/services/blockchain";
import {
  ServiceHero,
  ServicePainPoints,
  ServiceCapabilities,
  ServiceEngagement,
  ServiceUseCases,
  ServiceOutcomes,
  ServiceCTA,
} from "@/components/services";
import { ChainLedgerSequence } from "@/components/services/blockchain/ChainLedgerSequence";

/**
 * Blockchain Development & ICO Listing service page (Phase 6 · 3 of 4).
 *
 * Bespoke hero idiom: Chain Ledger Sequence — horizontal sequence of 4
 * cryptographic blocks linked by hash connectors, with the newest
 * block actively mining (animated pulse + ring).
 *
 * Brand accent: amber.
 */
export default function BlockchainServicePage() {
  return (
    <>
      <ServiceHero
        shortLabel={blockchainContent.shortLabel}
        name={blockchainContent.name}
        tagline={blockchainContent.tagline}
        positioning={blockchainContent.positioning}
        accent={blockchainContent.accent}
        visual={<ChainLedgerSequence />}
      />

      <ServicePainPoints
        kicker={blockchainContent.pain.kicker}
        title={blockchainContent.pain.title}
        lede={blockchainContent.pain.lede}
        items={blockchainContent.pain.items}
        accent={blockchainContent.accent}
      />

      <ServiceCapabilities
        kicker={blockchainContent.capabilities.kicker}
        title={blockchainContent.capabilities.title}
        lede={blockchainContent.capabilities.lede}
        items={blockchainContent.capabilities.items}
        accent={blockchainContent.accent}
      />

      <ServiceEngagement
        kicker={blockchainContent.engagement.kicker}
        title={blockchainContent.engagement.title}
        lede={blockchainContent.engagement.lede}
        items={blockchainContent.engagement.items}
        accent={blockchainContent.accent}
      />

      <ServiceUseCases
        kicker={blockchainContent.useCases.kicker}
        title={blockchainContent.useCases.title}
        lede={blockchainContent.useCases.lede}
        items={blockchainContent.useCases.items}
        accent={blockchainContent.accent}
      />

      <ServiceOutcomes
        kicker={blockchainContent.outcomes.kicker}
        title={blockchainContent.outcomes.title}
        lede={blockchainContent.outcomes.lede}
        items={blockchainContent.outcomes.items}
        accent={blockchainContent.accent}
      />

      <ServiceCTA
        serviceName={blockchainContent.name}
        accent={blockchainContent.accent}
      />
    </>
  );
}
