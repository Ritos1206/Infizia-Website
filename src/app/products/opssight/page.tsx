"use client";

import { opssightContent } from "@/content/products/opssight";
import {
  ProductHero,
  ProductProblem,
  ProductFeatures,
  ProductUseCases,
  ProductCTA,
  RelatedProducts,
} from "@/components/products";
import { OpsSightOperationsDashboard } from "@/components/products/opssight/OpsSightOperationsDashboard";
import { OpsSightSignalToAction } from "@/components/products/opssight/OpsSightSignalToAction";

/**
 * OpsSight product page — tenth standard product in Phase 4.
 *
 * Brand accent: emerald. Brochure: /brochures/opssight.pdf (the design
 * team produces this PDF from `docs/brochures/opssight-brochure.md`;
 * once it lands, clean its metadata via the D-43 exiftool pattern).
 */
export default function OpsSightProductPage() {
  return (
    <>
      <ProductHero
        vertical={opssightContent.vertical}
        name={opssightContent.name}
        tagline={opssightContent.tagline}
        positioning={opssightContent.positioning}
        accent={opssightContent.accent}
        visual={<OpsSightOperationsDashboard />}
        brochureHref="/brochures/opssight.pdf"
      />

      <ProductProblem
        kicker={opssightContent.problem.kicker}
        title={opssightContent.problem.title}
        body={opssightContent.problem.body}
        accent={opssightContent.accent}
      />

      <ProductFeatures
        kicker={opssightContent.features.kicker}
        title={opssightContent.features.title}
        lede={opssightContent.features.lede}
        items={opssightContent.features.items}
        accent={opssightContent.accent}
      />

      {/* Story-driven mid-page section — follow one anomaly through 4 stages. */}
      <OpsSightSignalToAction />

      <ProductUseCases
        kicker={opssightContent.useCases.kicker}
        title={opssightContent.useCases.title}
        lede={opssightContent.useCases.lede}
        items={opssightContent.useCases.items}
        accent={opssightContent.accent}
      />

      <RelatedProducts currentSlug={opssightContent.slug} />

      <ProductCTA
        productName={opssightContent.name}
        accent={opssightContent.accent}
        brochureHref="/brochures/opssight.pdf"
      />
    </>
  );
}
