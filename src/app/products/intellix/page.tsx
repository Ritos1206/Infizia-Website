"use client";

import { intellixContent } from "@/content/products/intellix";
import {
  ProductHero,
  ProductProblem,
  ProductFeatures,
  ProductUseCases,
  ProductCTA,
  RelatedProducts,
} from "@/components/products";
import { IntellixVoiceChatVisual } from "@/components/products/intellix/IntellixVoiceChatVisual";
import { IntellixToolConsolidation } from "@/components/products/intellix/IntellixToolConsolidation";

/**
 * Intellix product page — fourth standard product in Phase 4.
 *
 * Standard composition (no flow/showcase/case-study/pricing per D-34):
 *   1. Hero — Voice + Chat split-pane visual beside copy
 *   2. Problem — five disconnected tools today
 *   3. Features — 6 cards
 *   4. Five-tools-to-one-platform infographic (story-driven)
 *   5. Use cases — 3 buyer personas
 *   6. Related products
 *   7. CTA — Book a Demo + View Brochure
 *
 * Brand accent: rose. Brochure: /brochures/intellix.pdf (client-supplied
 * production PDF — metadata cleaned via the D-43 exiftool pattern).
 */
export default function IntellixProductPage() {
  return (
    <>
      <ProductHero
        vertical={intellixContent.vertical}
        name={intellixContent.name}
        tagline={intellixContent.tagline}
        positioning={intellixContent.positioning}
        accent={intellixContent.accent}
        visual={<IntellixVoiceChatVisual />}
        brochureHref="/brochures/intellix.pdf"
      />

      <ProductProblem
        kicker={intellixContent.problem.kicker}
        title={intellixContent.problem.title}
        body={intellixContent.problem.body}
        accent={intellixContent.accent}
      />

      <ProductFeatures
        kicker={intellixContent.features.kicker}
        title={intellixContent.features.title}
        lede={intellixContent.features.lede}
        items={intellixContent.features.items}
        accent={intellixContent.accent}
      />

      {/* Story-driven infographic — five disconnected tools converging
          into one Intellix dashboard. */}
      <IntellixToolConsolidation />

      <ProductUseCases
        kicker={intellixContent.useCases.kicker}
        title={intellixContent.useCases.title}
        lede={intellixContent.useCases.lede}
        items={intellixContent.useCases.items}
        accent={intellixContent.accent}
      />

      <RelatedProducts currentSlug={intellixContent.slug} />

      <ProductCTA
        productName={intellixContent.name}
        accent={intellixContent.accent}
        brochureHref="/brochures/intellix.pdf"
      />
    </>
  );
}
