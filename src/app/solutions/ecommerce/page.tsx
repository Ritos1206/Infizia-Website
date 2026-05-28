"use client";

import { ecommerceContent } from "@/content/solutions/ecommerce";
import {
  SolutionHero,
  SolutionPulse,
  SolutionPainPoints,
  SolutionStack,
  SolutionUseCases,
  SolutionOutcomes,
  SolutionCTA,
} from "@/components/solutions";
import { OrderConstellation } from "@/components/solutions/ecommerce/OrderConstellation";

/**
 * E-Commerce solution page (Phase 5 · 5 of 9).
 *
 * Bespoke hero idiom: order constellation. Brand at the centre, 4
 * vendors on the inner ring, 4 customer touchpoints (Web · WhatsApp ·
 * Store) on the outer ring, with order pulses traveling along the
 * connecting edges. Argues "modern commerce is a network, not a line".
 *
 * Stack: Custom E-Commerce (anchor) + Intellix (multilingual chat) +
 * DocuMind (vendor invoices, GST, returns paperwork) + EyePOS (when
 * the brand also runs physical counters).
 *
 * Brand accent: lime (matches Custom E-Commerce).
 */
export default function EcommerceSolutionPage() {
  return (
    <>
      <SolutionHero
        verticalLabel={ecommerceContent.verticalLabel}
        name={ecommerceContent.name}
        tagline={ecommerceContent.tagline}
        positioning={ecommerceContent.positioning}
        accent={ecommerceContent.accent}
        visual={<OrderConstellation />}
      />

      <SolutionPulse
        kicker={ecommerceContent.pulse.kicker}
        title={ecommerceContent.pulse.title}
        lede={ecommerceContent.pulse.lede}
        items={ecommerceContent.pulse.items}
        accent={ecommerceContent.accent}
      />

      <SolutionPainPoints
        kicker={ecommerceContent.pain.kicker}
        title={ecommerceContent.pain.title}
        lede={ecommerceContent.pain.lede}
        items={ecommerceContent.pain.items}
        accent={ecommerceContent.accent}
      />

      <SolutionStack
        kicker={ecommerceContent.stack.kicker}
        title={ecommerceContent.stack.title}
        lede={ecommerceContent.stack.lede}
        entries={ecommerceContent.stack.entries}
        accent={ecommerceContent.accent}
      />

      <SolutionUseCases
        kicker={ecommerceContent.useCases.kicker}
        title={ecommerceContent.useCases.title}
        lede={ecommerceContent.useCases.lede}
        items={ecommerceContent.useCases.items}
        accent={ecommerceContent.accent}
      />

      <SolutionOutcomes
        kicker={ecommerceContent.outcomes.kicker}
        title={ecommerceContent.outcomes.title}
        lede={ecommerceContent.outcomes.lede}
        items={ecommerceContent.outcomes.items}
        accent={ecommerceContent.accent}
      />

      <SolutionCTA
        solutionName={ecommerceContent.name}
        accent={ecommerceContent.accent}
      />
    </>
  );
}
