"use client";

import {
  RedHatHero,
  RedHatCourseCatalog,
  RedHatFeatureGrid,
  RedHatOutcomes,
  RedHatCTA,
} from "@/components/red-hat";
import { CourseStadium } from "@/components/red-hat/training/CourseStadium";
import { trainingContent } from "@/content/red-hat/training";

/**
 * /red-hat/training — Training & Enablement page.
 *
 * Hero idiom: Course Stadium — 6 ticket-stub course cards in a curved
 * arena formation with a cohort avatar trail and live ticker.
 *
 * Page composition:
 *   1. RedHatHero + CourseStadium
 *   2. RedHatCourseCatalog   — 6-row catalogue with all course details
 *   3. RedHatFeatureGrid     — 6 delivery format cards
 *   4. RedHatOutcomes        — 4 outcome tiles
 *   5. RedHatCTA
 */
export default function TrainingPage() {
  return (
    <>
      <RedHatHero
        kicker={trainingContent.kicker}
        title={trainingContent.title}
        tagline={trainingContent.tagline}
        positioning={trainingContent.positioning}
        primaryCtaLabel="Reserve a Cohort Seat"
        visual={<CourseStadium />}
      />

      <RedHatCourseCatalog
        kicker={trainingContent.catalogue.kicker}
        title={trainingContent.catalogue.title}
        lede={trainingContent.catalogue.lede}
        items={trainingContent.catalogue.items}
      />

      <RedHatFeatureGrid
        kicker={trainingContent.formats.kicker}
        title={trainingContent.formats.title}
        lede={trainingContent.formats.lede}
        items={trainingContent.formats.items}
      />

      <RedHatOutcomes
        kicker={trainingContent.outcomes.kicker}
        title={trainingContent.outcomes.title}
        lede={trainingContent.outcomes.lede}
        items={trainingContent.outcomes.items}
      />

      <RedHatCTA
        scopeLabel="Training & Enablement · with Infizia"
        pageName="Red Hat training"
      />
    </>
  );
}
