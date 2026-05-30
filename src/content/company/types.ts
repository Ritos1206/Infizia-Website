/**
 * Phase 7 — Company section content
 *
 * Three pages: /company/about (main hub) · /company/vision-mission ·
 * /company/careers. The /company/contezza page is dropped — its
 * content folds into /company/about as a parentage paragraph.
 *
 * Voice rule (D-40): business-first language. Contezza founding
 * details are factual (founded 2012, Companies Act) — that's
 * institutional record, not vendor name. AI / agentic AI / GCP /
 * Red Hat capability framing is allowed at the corporate level
 * (these are positioning anchors, not implementation choices).
 *
 * Per D-69: "Premier Partner" stays out of all copy. Red Hat is
 * acknowledged as a practice / partnership, never elevated.
 *
 * No founder photos, no founder bios — per direct user direction
 * 2026-05-30. OD-09 effectively closed.
 */

import type { LucideIcon } from "lucide-react";

/** Capability pillar — the 4 anchors of Infizia's identity */
export type CapabilityPillar = {
  icon: LucideIcon;
  /** Short label e.g. "AI" */
  label: string;
  /** Title e.g. "AI engineering practice" */
  title: string;
  /** 1-2 sentence description */
  body: string;
  /** 3-4 short capability chips */
  chips: string[];
};

/** Timeline milestone — for the brand-story timeline on /about */
export type Milestone = {
  year: string;
  title: string;
  body: string;
};

/** Why-Infizia card — for the careers page */
export type WhyJoin = {
  icon: LucideIcon;
  title: string;
  body: string;
};

/** Value statement — for vision-mission */
export type Value = {
  icon: LucideIcon;
  title: string;
  body: string;
};
