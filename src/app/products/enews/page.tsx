"use client";

import { enewsContent } from "@/content/products/enews";
import {
  ProductHero,
  ProductProblem,
  ProductFeatures,
  ProductUseCases,
  ProductCTA,
  RelatedProducts,
} from "@/components/products";
import { EnewsNewsroomVisual } from "@/components/products/enews/EnewsNewsroomVisual";
import { EnewsDistributionFunnel } from "@/components/products/enews/EnewsDistributionFunnel";

/**
 * E-News product page — eleventh and final standard product in Phase 4.
 *
 * Brand accent: purple. Brochure: /brochures/enews.pdf (the design team
 * produces this PDF from `docs/brochures/enews-brochure.md`; once it
 * lands, clean its metadata via the D-43 exiftool pattern).
 *
 * With this page live, **Phase 4 closes** — all 11 standard product
 * pages have shipped with bespoke visuals.
 */
export default function EnewsProductPage() {
  return (
    <>
      <ProductHero
        vertical={enewsContent.vertical}
        name={enewsContent.name}
        tagline={enewsContent.tagline}
        positioning={enewsContent.positioning}
        accent={enewsContent.accent}
        visual={<EnewsNewsroomVisual />}
        brochureHref="/brochures/enews.pdf"
      />

      <ProductProblem
        kicker={enewsContent.problem.kicker}
        title={enewsContent.problem.title}
        body={enewsContent.problem.body}
        accent={enewsContent.accent}
      />

      <ProductFeatures
        kicker={enewsContent.features.kicker}
        title={enewsContent.features.title}
        lede={enewsContent.features.lede}
        items={enewsContent.features.items}
        accent={enewsContent.accent}
      />

      {/* Story-driven mid-page section — top-down funnel from one
          article to every channel and back to engagement metrics. */}
      <EnewsDistributionFunnel />

      <ProductUseCases
        kicker={enewsContent.useCases.kicker}
        title={enewsContent.useCases.title}
        lede={enewsContent.useCases.lede}
        items={enewsContent.useCases.items}
        accent={enewsContent.accent}
      />

      <RelatedProducts currentSlug={enewsContent.slug} />

      <ProductCTA
        productName={enewsContent.name}
        accent={enewsContent.accent}
        brochureHref="/brochures/enews.pdf"
      />
    </>
  );
}
