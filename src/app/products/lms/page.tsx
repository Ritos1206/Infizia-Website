"use client";

import { lmsContent } from "@/content/products/lms";
import {
  ProductHero,
  ProductProblem,
  ProductFeatures,
  ProductUseCases,
  ProductCTA,
  RelatedProducts,
} from "@/components/products";
import { LMSActivityHub } from "@/components/products/lms/LMSActivityHub";
import { LMSThreePerspectives } from "@/components/products/lms/LMSThreePerspectives";

/**
 * LMS product page — sixth standard product in Phase 4.
 *
 * Standard composition (no flow/showcase/case-study/pricing per D-34):
 *   1. Hero — Activity Hub visual beside copy (uses standard ProductHero
 *      split — Learnova's centered hero is a one-off pattern reserved
 *      for that product's input→output narrative)
 *   2. Problem — five fragmented tools educators juggle today
 *   3. Features — 6 capability cards
 *   4. Three Perspectives — Instructor / Student / Admin mini-UI mockups
 *   5. Use cases — 3 buyer personas
 *   6. Related products
 *   7. CTA — Book a Demo + View Brochure
 *
 * Brand accent: orange. Brochure: /brochures/lms.pdf (client-supplied
 * production PDF — metadata cleaned via the D-43 exiftool pattern).
 */
export default function LMSProductPage() {
  return (
    <>
      <ProductHero
        vertical={lmsContent.vertical}
        name={lmsContent.name}
        tagline={lmsContent.tagline}
        positioning={lmsContent.positioning}
        accent={lmsContent.accent}
        visual={<LMSActivityHub />}
        brochureHref="/brochures/lms.pdf"
      />

      <ProductProblem
        kicker={lmsContent.problem.kicker}
        title={lmsContent.problem.title}
        body={lmsContent.problem.body}
        accent={lmsContent.accent}
      />

      <ProductFeatures
        kicker={lmsContent.features.kicker}
        title={lmsContent.features.title}
        lede={lmsContent.features.lede}
        items={lmsContent.features.items}
        accent={lmsContent.accent}
      />

      {/* Story-driven mid-page section — three side-by-side mini-UI
          mockups showing how one platform serves three audiences. */}
      <LMSThreePerspectives />

      <ProductUseCases
        kicker={lmsContent.useCases.kicker}
        title={lmsContent.useCases.title}
        lede={lmsContent.useCases.lede}
        items={lmsContent.useCases.items}
        accent={lmsContent.accent}
      />

      <RelatedProducts currentSlug={lmsContent.slug} />

      <ProductCTA
        productName={lmsContent.name}
        accent={lmsContent.accent}
        brochureHref="/brochures/lms.pdf"
      />
    </>
  );
}
