"use client";

import { inferaContent } from "@/content/products/infera";
import {
  ProductHero,
  ProductProblem,
  ProductFeatures,
  ProductUseCases,
  ProductCTA,
  RelatedProducts,
} from "@/components/products";
import { InferaIntelligenceBrief } from "@/components/products/infera/InferaIntelligenceBrief";
import { InferaReportsChat } from "@/components/products/infera/InferaReportsChat";

/**
 * Infera product page — eighth standard product in Phase 4.
 *
 * Brand accent: cyan. Brochure: /brochures/infera.pdf (the design team
 * produces this PDF from `docs/brochures/infera-brochure.md`; once it
 * lands, clean its metadata via the D-43 exiftool pattern).
 */
export default function InferaProductPage() {
  return (
    <>
      <ProductHero
        vertical={inferaContent.vertical}
        name={inferaContent.name}
        tagline={inferaContent.tagline}
        positioning={inferaContent.positioning}
        accent={inferaContent.accent}
        visual={<InferaIntelligenceBrief />}
        brochureHref="/brochures/infera.pdf"
      />

      <ProductProblem
        kicker={inferaContent.problem.kicker}
        title={inferaContent.problem.title}
        body={inferaContent.problem.body}
        accent={inferaContent.accent}
      />

      <ProductFeatures
        kicker={inferaContent.features.kicker}
        title={inferaContent.features.title}
        lede={inferaContent.features.lede}
        items={inferaContent.features.items}
        accent={inferaContent.accent}
      />

      {/* Story-driven mid-page section — chat with all your past reports. */}
      <InferaReportsChat />

      <ProductUseCases
        kicker={inferaContent.useCases.kicker}
        title={inferaContent.useCases.title}
        lede={inferaContent.useCases.lede}
        items={inferaContent.useCases.items}
        accent={inferaContent.accent}
      />

      <RelatedProducts currentSlug={inferaContent.slug} />

      <ProductCTA
        productName={inferaContent.name}
        accent={inferaContent.accent}
        brochureHref="/brochures/infera.pdf"
      />
    </>
  );
}
