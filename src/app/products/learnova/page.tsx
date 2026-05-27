"use client";

import { learnovaContent } from "@/content/products/learnova";
import {
  ProductProblem,
  ProductFeatures,
  ProductUseCases,
  ProductCTA,
  RelatedProducts,
} from "@/components/products";
import { LearnovaHero } from "@/components/products/learnova/LearnovaHero";
import { LearnovaLearningPath } from "@/components/products/learnova/LearnovaLearningPath";

/**
 * Learnova product page — fifth standard product in Phase 4.
 *
 * **Custom hero pattern.** Unlike the rest of the catalogue, Learnova
 * doesn't use the standard `ProductHero` (asymmetric copy-left /
 * visual-right split). It uses `LearnovaHero` — a centered vertical
 * flow (kicker → name → tagline → positioning → studio bar → modules
 * row → CTAs) that mirrors the product's own "topic in, course out"
 * generation idiom. See LearnovaHero.tsx for the full layout
 * documentation.
 *
 * Standard composition (no flow/showcase/case-study/pricing per D-34):
 *   1. Hero — custom centered "Live Studio" hero (LearnovaHero)
 *   2. Problem — five challenges in current education
 *   3. Features — 7 capability cards
 *   4. Learning Path — 4-station winding journey from topic to mastery
 *   5. Use cases — 3 buyer personas
 *   6. Related products
 *   7. CTA — Book a Demo + View Brochure
 *
 * Brand accent: fuchsia. Brochure: /brochures/learnova.pdf (client-supplied
 * production PDF — metadata already clean, no D-43 cleanup needed).
 */
export default function LearnovaProductPage() {
  return (
    <>
      <LearnovaHero brochureHref="/brochures/learnova.pdf" />

      <ProductProblem
        kicker={learnovaContent.problem.kicker}
        title={learnovaContent.problem.title}
        body={learnovaContent.problem.body}
        accent={learnovaContent.accent}
      />

      <ProductFeatures
        kicker={learnovaContent.features.kicker}
        title={learnovaContent.features.title}
        lede={learnovaContent.features.lede}
        items={learnovaContent.features.items}
        accent={learnovaContent.accent}
      />

      {/* Story-driven mid-page section — the 4-station winding journey
          from topic to mastery. */}
      <LearnovaLearningPath />

      <ProductUseCases
        kicker={learnovaContent.useCases.kicker}
        title={learnovaContent.useCases.title}
        lede={learnovaContent.useCases.lede}
        items={learnovaContent.useCases.items}
        accent={learnovaContent.accent}
      />

      <RelatedProducts currentSlug={learnovaContent.slug} />

      <ProductCTA
        productName={learnovaContent.name}
        accent={learnovaContent.accent}
        brochureHref="/brochures/learnova.pdf"
      />
    </>
  );
}
