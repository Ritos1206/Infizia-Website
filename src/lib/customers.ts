/**
 * Past customers — products Contezza Techno Solution Pvt. Ltd. has
 * shipped for clients since 2012. Infizia is the AI-native sub-brand
 * of Contezza (launched 2026) and inherits this engineering practice.
 *
 * Logos sourced from the corporate deck (page 10 · "Our Success
 * Stories" hex grid), extracted from
 * `web/public/brochures/infizia_corporate_deck.pdf` via pymupdf and
 * saved to `web/public/customers/<slug>.png`.
 *
 * The original deck has 19 logos; we kept the 11 whose embedded PNGs
 * extracted at usable resolution. The remaining 8 (distributer-email,
 * doctor-vid, eschool-systems, mlickets, nft-limited-series, phaces-io,
 * profilr-social, qr-guru) extracted hazy and are excluded — they can
 * be re-added later when crisper artwork is supplied by the client.
 *
 * Each entry has:
 *   • slug          — used as the PNG filename and as a stable id
 *   • name          — display label (used in alt text and hover labels)
 *   • category      — one-word industry tag for grouping / filtering
 *   • emphasis      — "wide" for landscape logos, "square" for square
 *   • bg            — when "dark" the logo's source artwork already has
 *                     a dark background (e.g. EmbassyX Games on black,
 *                     OriginatorX on navy). For these we DON'T put a
 *                     white pill behind them. For everything else we do
 *                     so the artwork stays legible against our dark site.
 */

export type Customer = {
  slug: string;
  name: string;
  category: string;
  emphasis: "wide" | "square";
  bg?: "dark";
};

export const CUSTOMERS: Customer[] = [
  { slug: "genoro-city", name: "Genoro City", category: "Gaming", emphasis: "square" },
  { slug: "granularchain", name: "Granularchain", category: "Blockchain", emphasis: "wide" },
  { slug: "axepay", name: "AxePay", category: "Fintech", emphasis: "wide" },
  { slug: "check21saas", name: "Check21Saas", category: "Fintech", emphasis: "wide" },
  { slug: "articul8te", name: "Articul8te", category: "Content", emphasis: "wide" },
  { slug: "originatorx", name: "OriginatorX", category: "Blockchain", emphasis: "wide", bg: "dark" },
  { slug: "abotslife", name: "abotslife", category: "AI Agents", emphasis: "wide" },
  { slug: "ijobs-shop", name: "ijobs.shop", category: "HR", emphasis: "square" },
  { slug: "mytravel-menu", name: "MyTravel.menu", category: "Travel", emphasis: "wide" },
  { slug: "atelier-social", name: "Atelier.social", category: "Social", emphasis: "wide" },
  { slug: "embassyx-games", name: "EmbassyX Games", category: "Gaming", emphasis: "wide", bg: "dark" },
];

/** Distinct industry categories present in the customer roster. */
export const CUSTOMER_CATEGORIES = Array.from(
  new Set(CUSTOMERS.map((c) => c.category)),
).sort();
