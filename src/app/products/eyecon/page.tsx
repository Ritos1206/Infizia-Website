"use client";

import { eyeconContent } from "@/content/products/eyecon";
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
import { EyeconPhoneMockup } from "@/components/products/eyecon/EyeconPhoneMockup";
import { EyeconProblemVisual } from "@/components/products/eyecon/EyeconProblemVisual";
import { EyeconBentoFeatures } from "@/components/products/eyecon/EyeconBentoFeatures";
import { EYECON_SHOWCASE_MOMENTS } from "@/components/products/eyecon/EyeconShowcaseScenarios";

export default function EyeconProductPage() {
  return (
    <>
      {/* 1. Hero — phone mockup beside copy */}
      <ProductHero
        vertical={eyeconContent.vertical}
        name={eyeconContent.name}
        tagline={eyeconContent.tagline}
        positioning={eyeconContent.positioning}
        accent={eyeconContent.accent}
        visual={<EyeconPhoneMockup />}
        brochureHref="/brochures/eyecon.pdf"
        hasPricing
        flagship
      />

      {/* 2. Problem — 5-tools convergence visual */}
      <EyeconProblemVisual
        kicker={eyeconContent.problem.kicker}
        title={eyeconContent.problem.title}
        body={eyeconContent.problem.body}
      />

      {/* 3. The 5-step flow — scroll-pinned timeline */}
      <ProductFlow
        kicker={eyeconContent.flow.kicker}
        title={eyeconContent.flow.title}
        lede={eyeconContent.flow.lede}
        steps={eyeconContent.flow.steps}
        accent={eyeconContent.accent}
      />

      {/* 4. Showcase slider — desktop-style scenarios across the work week */}
      <ProductShowcase
        kicker="EyeCON in action"
        title="A week in your sales motion."
        lede="Every day looks a little different — but every interaction lands on one Lead. Here's how EyeCON shows up across a typical week."
        moments={EYECON_SHOWCASE_MOMENTS}
        accent={eyeconContent.accent}
      />

      {/* 5. Bento features */}
      <EyeconBentoFeatures />

      {/* 6. Use cases */}
      <ProductUseCases
        kicker={eyeconContent.useCases.kicker}
        title={eyeconContent.useCases.title}
        lede={eyeconContent.useCases.lede}
        items={eyeconContent.useCases.items}
        accent={eyeconContent.accent}
      />

      {/* 7. Mini case study */}
      <ProductCaseStudy
        data={eyeconContent.caseStudy}
        accent={eyeconContent.accent}
      />

      {/* 8. Pricing — 3-tier inline section (anchored at #pricing) */}
      <ProductPricing
        productSlug={eyeconContent.slug}
        accent={eyeconContent.accent}
      />

      {/* 9. Related products */}
      <RelatedProducts currentSlug={eyeconContent.slug} />

      {/* 10. CTA — Book Demo + View Brochure */}
      <ProductCTA
        productName={eyeconContent.name}
        accent={eyeconContent.accent}
        brochureHref="/brochures/eyecon.pdf"
      />
    </>
  );
}
