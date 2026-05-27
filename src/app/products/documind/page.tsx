"use client";

import { documindContent } from "@/content/products/documind";
import {
  ProductHero,
  ProductProblem,
  ProductFeatures,
  ProductUseCases,
  ProductCTA,
  RelatedProducts,
} from "@/components/products";
import { DocumindExtractionVisual } from "@/components/products/documind/DocumindExtractionVisual";
import { DocumindInboxToBooks } from "@/components/products/documind/DocumindInboxToBooks";

/**
 * DocuMind product page — ninth standard product in Phase 4.
 *
 * Brand accent: sky. Brochure: /brochures/documind.pdf (the design team
 * produces this PDF from `docs/brochures/documind-brochure.md`; once it
 * lands, clean its metadata via the D-43 exiftool pattern).
 */
export default function DocuMindProductPage() {
  return (
    <>
      <ProductHero
        vertical={documindContent.vertical}
        name={documindContent.name}
        tagline={documindContent.tagline}
        positioning={documindContent.positioning}
        accent={documindContent.accent}
        visual={<DocumindExtractionVisual />}
        brochureHref="/brochures/documind.pdf"
      />

      <ProductProblem
        kicker={documindContent.problem.kicker}
        title={documindContent.problem.title}
        body={documindContent.problem.body}
        accent={documindContent.accent}
      />

      <ProductFeatures
        kicker={documindContent.features.kicker}
        title={documindContent.features.title}
        lede={documindContent.features.lede}
        items={documindContent.features.items}
        accent={documindContent.accent}
      />

      {/* Story-driven mid-page section — From inbox to books in 3 steps. */}
      <DocumindInboxToBooks />

      <ProductUseCases
        kicker={documindContent.useCases.kicker}
        title={documindContent.useCases.title}
        lede={documindContent.useCases.lede}
        items={documindContent.useCases.items}
        accent={documindContent.accent}
      />

      <RelatedProducts currentSlug={documindContent.slug} />

      <ProductCTA
        productName={documindContent.name}
        accent={documindContent.accent}
        brochureHref="/brochures/documind.pdf"
      />
    </>
  );
}
