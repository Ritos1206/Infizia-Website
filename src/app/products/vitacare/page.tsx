"use client";

import { vitacareContent } from "@/content/products/vitacare";
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
import { VitacareCalendarMockup } from "@/components/products/vitacare/VitacareCalendarMockup";
import { VitacareProblemVisual } from "@/components/products/vitacare/VitacareProblemVisual";
import { VitacareBentoFeatures } from "@/components/products/vitacare/VitacareBentoFeatures";
import { VITACARE_SHOWCASE_MOMENTS } from "@/components/products/vitacare/VitacareShowcaseScenarios";

export default function VitaCareProductPage() {
  return (
    <>
      {/* 1. Hero — calendar dashboard mockup beside copy */}
      <ProductHero
        vertical={vitacareContent.vertical}
        name={vitacareContent.name}
        tagline={vitacareContent.tagline}
        positioning={vitacareContent.positioning}
        accent={vitacareContent.accent}
        visual={<VitacareCalendarMockup />}
        brochureHref="/brochures/vitacare.pdf"
        hasPricing
        flagship
      />

      {/* 2. Problem — 5 clinic tools convergence visual */}
      <VitacareProblemVisual
        kicker={vitacareContent.problem.kicker}
        title={vitacareContent.problem.title}
        body={vitacareContent.problem.body}
      />

      {/* 3. The 5-step patient journey flow */}
      <ProductFlow
        kicker={vitacareContent.flow.kicker}
        title={vitacareContent.flow.title}
        lede={vitacareContent.flow.lede}
        steps={vitacareContent.flow.steps}
        accent={vitacareContent.accent}
      />

      {/* 4. Showcase slider — 4 clinic scenarios */}
      <ProductShowcase
        kicker="VitaCare in action"
        title="A week in your clinic."
        lede="From the morning rush to vaccine reminders firing in the background — VitaCare runs the operations so you can focus on the patient in front of you."
        moments={VITACARE_SHOWCASE_MOMENTS}
        accent={vitacareContent.accent}
      />

      {/* 5. Bento features */}
      <VitacareBentoFeatures />

      {/* 6. Use cases */}
      <ProductUseCases
        kicker={vitacareContent.useCases.kicker}
        title={vitacareContent.useCases.title}
        lede={vitacareContent.useCases.lede}
        items={vitacareContent.useCases.items}
        accent={vitacareContent.accent}
      />

      {/* 7. Mini case study */}
      <ProductCaseStudy
        data={vitacareContent.caseStudy}
        accent={vitacareContent.accent}
      />

      {/* 8. Pricing — 3-tier inline section (anchored at #pricing) */}
      <ProductPricing
        productSlug={vitacareContent.slug}
        accent={vitacareContent.accent}
      />

      {/* 9. Related products */}
      <RelatedProducts currentSlug={vitacareContent.slug} />

      {/* 10. CTA — Book Demo + View Brochure */}
      <ProductCTA
        productName={vitacareContent.name}
        accent={vitacareContent.accent}
        brochureHref="/brochures/vitacare.pdf"
      />
    </>
  );
}
