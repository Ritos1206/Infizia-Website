"use client";

import { iconContent } from "@/content/products/icon";
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
import { IconPhoneMockup } from "@/components/products/icon/IconPhoneMockup";
import { IconProblemVisual } from "@/components/products/icon/IconProblemVisual";
import { IconBentoFeatures } from "@/components/products/icon/IconBentoFeatures";
import { ICON_SHOWCASE_MOMENTS } from "@/components/products/icon/IconShowcaseScenarios";

export default function IconProductPage() {
  return (
    <>
      {/* 1. Hero — phone mockup beside copy */}
      <ProductHero
        vertical={iconContent.vertical}
        name={iconContent.name}
        tagline={iconContent.tagline}
        positioning={iconContent.positioning}
        accent={iconContent.accent}
        visual={<IconPhoneMockup />}
        brochureHref="/brochures/icon.pdf"
        hasPricing
      />

      {/* 2. Problem — 5-tools convergence visual */}
      <IconProblemVisual
        kicker={iconContent.problem.kicker}
        title={iconContent.problem.title}
        body={iconContent.problem.body}
      />

      {/* 3. The 5-step flow — scroll-pinned timeline */}
      <ProductFlow
        kicker={iconContent.flow.kicker}
        title={iconContent.flow.title}
        lede={iconContent.flow.lede}
        steps={iconContent.flow.steps}
        accent={iconContent.accent}
      />

      {/* 4. Showcase slider — desktop-style scenarios across the work week */}
      <ProductShowcase
        kicker="iCON in action"
        title="A week in your sales motion."
        lede="Every day looks a little different — but every interaction lands on one Lead. Here's how iCON shows up across a typical week."
        moments={ICON_SHOWCASE_MOMENTS}
        accent={iconContent.accent}
      />

      {/* 5. Bento features */}
      <IconBentoFeatures />

      {/* 6. Use cases */}
      <ProductUseCases
        kicker={iconContent.useCases.kicker}
        title={iconContent.useCases.title}
        lede={iconContent.useCases.lede}
        items={iconContent.useCases.items}
        accent={iconContent.accent}
      />

      {/* 7. Mini case study */}
      <ProductCaseStudy
        data={iconContent.caseStudy}
        accent={iconContent.accent}
      />

      {/* 8. Pricing — 3-tier inline section (anchored at #pricing) */}
      <ProductPricing
        productSlug={iconContent.slug}
        accent={iconContent.accent}
      />

      {/* 9. Related products */}
      <RelatedProducts currentSlug={iconContent.slug} />

      {/* 10. CTA — Book Demo + View Brochure */}
      <ProductCTA
        productName={iconContent.name}
        accent={iconContent.accent}
        brochureHref="/brochures/icon.pdf"
      />
    </>
  );
}
