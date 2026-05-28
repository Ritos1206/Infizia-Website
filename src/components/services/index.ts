/**
 * Phase 6 — Service component barrel.
 *
 * Shared section components that drive the 4 bespoke service pages.
 * Each page composes:
 *   ServiceHero (bespoke per service)
 *   ↓ ServicePainPoints
 *   ↓ ServiceCapabilities
 *   ↓ ServiceEngagement
 *   ↓ ServiceUseCases
 *   ↓ ServiceOutcomes
 *   ↓ ServiceCTA
 *
 * The Red Hat Stack card on the services catalog has no page — it
 * redirects to `/red-hat` (per D-69).
 */
export { ServiceHero } from "./ServiceHero";
export { ServicePainPoints } from "./ServicePainPoints";
export { ServiceCapabilities } from "./ServiceCapabilities";
export { ServiceEngagement } from "./ServiceEngagement";
export { ServiceUseCases } from "./ServiceUseCases";
export { ServiceOutcomes } from "./ServiceOutcomes";
export { ServiceCTA } from "./ServiceCTA";
