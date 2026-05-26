"use client";

import { eyeposContent } from "@/content/products/eyepos";
import {
  ProductHero,
  ProductFlow,
  ProductUseCases,
  ProductCaseStudy,
  ProductPricing,
  ProductCTA,
  RelatedProducts,
} from "@/components/products";
import { ProductShowcase } from "@/components/products/ProductShowcase";
import { EyeposCounterMockup } from "@/components/products/eyepos/EyeposCounterMockup";
import { EyeposProblemVisual } from "@/components/products/eyepos/EyeposProblemVisual";
import { EyeposBentoFeatures } from "@/components/products/eyepos/EyeposBentoFeatures";
import { EYEPOS_SHOWCASE_MOMENTS } from "@/components/products/eyepos/EyeposShowcaseScenarios";

export default function EyeposProductPage() {
  return (
    <>
      {/* 1. Hero — counter mockup beside copy */}
      <ProductHero
        vertical={eyeposContent.vertical}
        name={eyeposContent.name}
        tagline={eyeposContent.tagline}
        positioning={eyeposContent.positioning}
        accent={eyeposContent.accent}
        visual={<EyeposCounterMockup />}
        brochureHref="/brochures/eyepos.pdf"
        hasPricing
        flagship
      />

      {/* 2. Problem — 5-tools convergence visual (retail/finance edition) */}
      <EyeposProblemVisual
        kicker={eyeposContent.problem.kicker}
        title={eyeposContent.problem.title}
        body={eyeposContent.problem.body}
      />

      {/* 3. The 5-step flow — scroll-pinned timeline (counter → books → close) */}
      <ProductFlow
        kicker={eyeposContent.flow.kicker}
        title={eyeposContent.flow.title}
        lede={eyeposContent.flow.lede}
        steps={eyeposContent.flow.steps}
        accent={eyeposContent.accent}
      />

      {/* 4. Showcase slider — a working day at the counter (open · busy · close · GST filing) */}
      <ProductShowcase
        kicker="EyePOS in action"
        title="A day at the counter. The books keep up."
        lede="From morning open to GST filing — every moment lands on one platform, reconciled in real time."
        moments={EYEPOS_SHOWCASE_MOMENTS}
        accent={eyeposContent.accent}
      />

      {/* 5. Bento features — POS billing hero + live books wide + 5 standard tiles */}
      <EyeposBentoFeatures />

      {/* 6. Use cases */}
      <ProductUseCases
        kicker={eyeposContent.useCases.kicker}
        title={eyeposContent.useCases.title}
        lede={eyeposContent.useCases.lede}
        items={eyeposContent.useCases.items}
        accent={eyeposContent.accent}
      />

      {/* 7. Mini case study */}
      <ProductCaseStudy
        data={eyeposContent.caseStudy}
        accent={eyeposContent.accent}
      />

      {/* 8. Pricing — 3-tier inline section (anchored at #pricing) */}
      <ProductPricing
        productSlug={eyeposContent.slug}
        accent={eyeposContent.accent}
      />

      {/* 9. Related products */}
      <RelatedProducts currentSlug={eyeposContent.slug} />

      {/* 10. CTA — Book Demo + View Brochure */}
      <ProductCTA
        productName={eyeposContent.name}
        accent={eyeposContent.accent}
        brochureHref="/brochures/eyepos.pdf"
      />
    </>
  );
}
