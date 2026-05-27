"use client";

import { ecommerceContent } from "@/content/products/ecommerce";
import {
  ProductHero,
  ProductProblem,
  ProductFeatures,
  ProductUseCases,
  ProductCTA,
  RelatedProducts,
} from "@/components/products";
import { EcommerceStorefrontVisual } from "@/components/products/ecommerce/EcommerceStorefrontVisual";
import { EcommerceLayeredStack } from "@/components/products/ecommerce/EcommerceLayeredStack";

/**
 * Custom E-Commerce product page — seventh standard product in Phase 4.
 *
 * Standard composition (no flow/showcase/case-study/pricing per D-34):
 *   1. Hero — Storefront visual beside copy (uses standard ProductHero
 *      split — Learnova's centered hero is a one-off pattern reserved
 *      for input→output narrative products)
 *   2. Problem — off-the-shelf templates + fragmented tools + scaling cost
 *   3. Features — 8 capability cards
 *   4. Layered Stack — vertical 5-layer architectural visualization
 *   5. Use cases — 3 buyer personas
 *   6. Related products
 *   7. CTA — Book a Demo + View Brochure
 *
 * Brand accent: lime. Brochure: /brochures/ecommerce.pdf (client-supplied
 * production PDF — metadata cleaned via the D-43 exiftool pattern).
 */
export default function EcommerceProductPage() {
  return (
    <>
      <ProductHero
        vertical={ecommerceContent.vertical}
        name={ecommerceContent.name}
        tagline={ecommerceContent.tagline}
        positioning={ecommerceContent.positioning}
        accent={ecommerceContent.accent}
        visual={<EcommerceStorefrontVisual />}
        brochureHref="/brochures/ecommerce.pdf"
      />

      <ProductProblem
        kicker={ecommerceContent.problem.kicker}
        title={ecommerceContent.problem.title}
        body={ecommerceContent.problem.body}
        accent={ecommerceContent.accent}
      />

      <ProductFeatures
        kicker={ecommerceContent.features.kicker}
        title={ecommerceContent.features.title}
        lede={ecommerceContent.features.lede}
        items={ecommerceContent.features.items}
        accent={ecommerceContent.accent}
      />

      {/* Story-driven mid-page section — vertical 5-layer architectural
          stack visualizing the platform's modular composition. */}
      <EcommerceLayeredStack />

      <ProductUseCases
        kicker={ecommerceContent.useCases.kicker}
        title={ecommerceContent.useCases.title}
        lede={ecommerceContent.useCases.lede}
        items={ecommerceContent.useCases.items}
        accent={ecommerceContent.accent}
      />

      <RelatedProducts currentSlug={ecommerceContent.slug} />

      <ProductCTA
        productName={ecommerceContent.name}
        accent={ecommerceContent.accent}
        brochureHref="/brochures/ecommerce.pdf"
      />
    </>
  );
}
