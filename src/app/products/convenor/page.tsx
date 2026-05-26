"use client";

import { convenorContent } from "@/content/products/convenor";
import {
  ProductHero,
  ProductProblem,
  ProductFeatures,
  ProductUseCases,
  ProductCTA,
  RelatedProducts,
} from "@/components/products";
import { ConvenorResumeVisual } from "@/components/products/convenor/ConvenorResumeVisual";
import { ConvenorInterviewTableau } from "@/components/products/convenor/ConvenorInterviewTableau";

/**
 * Convenor product page — first of the 11 standard products in Phase 4.
 *
 * Composition (lighter than flagship pages — no flow / showcase / case-study /
 * pricing sections per D-34):
 *
 *  1. Hero — Resume-AI Extraction Overlay (bespoke visual) beside copy
 *  2. Problem — traditional hiring bottlenecks
 *  3. Features — 8 cards from the brochure
 *  4. Capability matrix — 11-tile compact grid (bespoke section)
 *  5. Use cases — 3 buyer personas
 *  6. Related products
 *  7. CTA — Book a Demo + View Brochure
 *
 * Brand accent: indigo. Brochure: /brochures/convenor.pdf (already on disk
 * with cleaned metadata).
 */
export default function ConvenorProductPage() {
  return (
    <>
      {/* 1. Hero — bespoke resume-AI extraction overlay beside copy */}
      <ProductHero
        vertical={convenorContent.vertical}
        name={convenorContent.name}
        tagline={convenorContent.tagline}
        positioning={convenorContent.positioning}
        accent={convenorContent.accent}
        visual={<ConvenorResumeVisual />}
        brochureHref="/brochures/convenor.pdf"
      />

      {/* 2. Problem — 5 bottlenecks of traditional hiring */}
      <ProductProblem
        kicker={convenorContent.problem.kicker}
        title={convenorContent.problem.title}
        body={convenorContent.problem.body}
        accent={convenorContent.accent}
      />

      {/* 3. Features grid — 8 capability cards */}
      <ProductFeatures
        kicker={convenorContent.features.kicker}
        title={convenorContent.features.title}
        lede={convenorContent.features.lede}
        items={convenorContent.features.items}
        accent={convenorContent.accent}
      />

      {/* 4. AI Interview Live tableau — bespoke composed scene showing
              candidate, AI question, transcript, scoring, and activity trail
              all running together. Replaces the older static capability grid. */}
      <ConvenorInterviewTableau />

      {/* 5. Use cases — 3 buyer personas */}
      <ProductUseCases
        kicker={convenorContent.useCases.kicker}
        title={convenorContent.useCases.title}
        lede={convenorContent.useCases.lede}
        items={convenorContent.useCases.items}
        accent={convenorContent.accent}
      />

      {/* 6. Related products */}
      <RelatedProducts currentSlug={convenorContent.slug} />

      {/* 7. CTA — Book Demo + View Brochure */}
      <ProductCTA
        productName={convenorContent.name}
        accent={convenorContent.accent}
        brochureHref="/brochures/convenor.pdf"
      />
    </>
  );
}
