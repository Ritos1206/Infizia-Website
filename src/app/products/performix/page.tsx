"use client";

import { performixContent } from "@/content/products/performix";
import {
  ProductHero,
  ProductProblem,
  ProductFeatures,
  ProductUseCases,
  ProductCTA,
  RelatedProducts,
} from "@/components/products";
import { PerformixDashboardVisual } from "@/components/products/performix/PerformixDashboardVisual";
import { PerformixCycleStory } from "@/components/products/performix/PerformixCycleStory";

/**
 * Performix product page — second product in Phase 4.
 *
 * Standard composition (no flow/showcase/case-study/pricing per D-34):
 *   1. Hero — Performance Dashboard (radar + KPIs + workflow strip) beside copy
 *   2. Problem — annual review chaos
 *   3. Features — 6 cards
 *   4. Use cases — 3 buyer personas
 *   5. Related products
 *   6. CTA — Book a Demo + View Brochure
 *
 * Brand accent: amber. Brochure: /brochures/performix.pdf (404s gracefully
 * until the design team produces one — content brief lives at
 * docs/brochures/performix-brochure.md).
 */
export default function PerformixProductPage() {
  return (
    <>
      <ProductHero
        vertical={performixContent.vertical}
        name={performixContent.name}
        tagline={performixContent.tagline}
        positioning={performixContent.positioning}
        accent={performixContent.accent}
        visual={<PerformixDashboardVisual />}
        brochureHref="/brochures/performix.pdf"
      />

      <ProductProblem
        kicker={performixContent.problem.kicker}
        title={performixContent.problem.title}
        body={performixContent.problem.body}
        accent={performixContent.accent}
      />

      <ProductFeatures
        kicker={performixContent.features.kicker}
        title={performixContent.features.title}
        lede={performixContent.features.lede}
        items={performixContent.features.items}
        accent={performixContent.accent}
      />

      {/* Story section — The Assessment Journey (4-stop journey of an
          assessment moving through the system, with real comment cards). */}
      <PerformixCycleStory />

      <ProductUseCases
        kicker={performixContent.useCases.kicker}
        title={performixContent.useCases.title}
        lede={performixContent.useCases.lede}
        items={performixContent.useCases.items}
        accent={performixContent.accent}
      />

      <RelatedProducts currentSlug={performixContent.slug} />

      <ProductCTA
        productName={performixContent.name}
        accent={performixContent.accent}
        brochureHref="/brochures/performix.pdf"
      />
    </>
  );
}
