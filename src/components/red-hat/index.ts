/**
 * Tier 5 — Red Hat micro-section component barrel.
 *
 * Shared section components that drive the 7 Red Hat pages. Each page
 * composes:
 *
 *   RedHatHero (full-width · bespoke per-page visual)
 *   ↓ RedHatPainPoints
 *   ↓ RedHatServices              (5 service cards · service pages only)
 *   ↓ Page-specific extras        (RedHatVersionTable / RedHatStandardsRow
 *                                  / RedHatSixRs / RedHatPipelineRail /
 *                                  RedHatPlaybookCategories /
 *                                  RedHatFoundationModels /
 *                                  RedHatIndustryAtlas / RedHatTierTable /
 *                                  RedHatCourseCatalog)
 *   ↓ RedHatEngagement            (4 engagement-model cards · service + overview)
 *   ↓ RedHatOutcomes
 *   ↓ RedHatCTA
 *
 * Per D-04, brand-redhat (`#EE0000`) is allowed throughout this layer
 * — it never leaks into other content because every component here
 * uses the `text-redhat` / `bg-redhat` / `border-redhat` tokens.
 */
export { RedHatHero } from "./RedHatHero";
export { RedHatSectionHeader } from "./RedHatSectionHeader";
export { RedHatPainPoints } from "./RedHatPainPoints";
export { RedHatServices } from "./RedHatServices";
export { RedHatEngagement } from "./RedHatEngagement";
export { RedHatOutcomes } from "./RedHatOutcomes";
export { RedHatCTA } from "./RedHatCTA";

// Page-specific shared sections
export { RedHatVersionTable } from "./RedHatVersionTable";
export { RedHatStandardsRow } from "./RedHatStandardsRow";
export { RedHatSixRs } from "./RedHatSixRs";
export { RedHatPipelineRail } from "./RedHatPipelineRail";
export { RedHatPlaybookCategories } from "./RedHatPlaybookCategories";
export { RedHatFoundationModels } from "./RedHatFoundationModels";
export { RedHatIndustryAtlas } from "./RedHatIndustryAtlas";
export { RedHatTierTable } from "./RedHatTierTable";
export { RedHatFeatureGrid } from "./RedHatFeatureGrid";
export { RedHatCourseCatalog } from "./RedHatCourseCatalog";
export { RedHatPillarsGrid } from "./RedHatPillarsGrid";
