"use client";

import { meetrixContent } from "@/content/products/meetrix";
import {
  ProductHero,
  ProductProblem,
  ProductFeatures,
  ProductUseCases,
  ProductCTA,
  RelatedProducts,
} from "@/components/products";
import { MeetrixTranscriptStreamVisual } from "@/components/products/meetrix/MeetrixTranscriptStreamVisual";
import { MeetrixMeetingHub } from "@/components/products/meetrix/MeetrixMeetingHub";

/**
 * Meetrix product page — third product in Phase 4.
 *
 * Standard composition (no flow/showcase/case-study/pricing per D-34):
 *   1. Hero — Live Transcript Stream visual beside copy
 *   2. Problem — meeting value walking out the door
 *   3. Features — 6 cards
 *   4. Use cases — 3 buyer personas
 *   5. Related products
 *   6. CTA — Book a Demo + View Brochure
 *
 * Brand accent: violet. Brochure: /brochures/meetrix.pdf (404s gracefully
 * until the design team produces one — content brief lives at
 * docs/brochures/meetrix-brochure.md).
 */
export default function MeetrixProductPage() {
  return (
    <>
      <ProductHero
        vertical={meetrixContent.vertical}
        name={meetrixContent.name}
        tagline={meetrixContent.tagline}
        positioning={meetrixContent.positioning}
        accent={meetrixContent.accent}
        visual={<MeetrixTranscriptStreamVisual />}
        brochureHref="/brochures/meetrix.pdf"
      />

      <ProductProblem
        kicker={meetrixContent.problem.kicker}
        title={meetrixContent.problem.title}
        body={meetrixContent.problem.body}
        accent={meetrixContent.accent}
      />

      <ProductFeatures
        kicker={meetrixContent.features.kicker}
        title={meetrixContent.features.title}
        lede={meetrixContent.features.lede}
        items={meetrixContent.features.items}
        accent={meetrixContent.accent}
      />

      {/* Hub-and-spoke infographic — What One Meeting Becomes
          (centre card = the meeting; 6 spokes = transcript / summary /
          action items / email / 18-language translation / chat). */}
      <MeetrixMeetingHub />

      <ProductUseCases
        kicker={meetrixContent.useCases.kicker}
        title={meetrixContent.useCases.title}
        lede={meetrixContent.useCases.lede}
        items={meetrixContent.useCases.items}
        accent={meetrixContent.accent}
      />

      <RelatedProducts currentSlug={meetrixContent.slug} />

      <ProductCTA
        productName={meetrixContent.name}
        accent={meetrixContent.accent}
        brochureHref="/brochures/meetrix.pdf"
      />
    </>
  );
}
