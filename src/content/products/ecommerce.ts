/**
 * Custom E-Commerce — Built for Your Brand, Powered by AI.
 *
 * Single source of truth: `web/public/brochures/ecommerce.pdf` (production
 * brochure, 15 slides — content extracted directly from there). Convenor
 * pattern (D-35 / D-49 / D-50) — when the production PDF is the canonical
 * deliverable, no separate brochure markdown is written.
 *
 * Brand accent: lime — distinct from green (more saturated emerald), teal
 * (more cyan), and amber (more yellow-gold). "Fresh, growing, scalable"
 * tone fits the D2C / commerce / brand-centric narrative.
 *
 * Bespoke visual: EcommerceStorefrontVisual — D2C storefront browser
 * mockup with multi-vendor product grid + AI personalization chips.
 * Mid-page: EcommerceLayeredStack — vertical 5-layer architectural stack
 * visualizing the platform's modular composition.
 *
 * Voice rule: business-first. No technology / vendor names exposed in
 * any user-facing string here. Implementation can swap providers without
 * touching this content.
 */

import {
  BarChart3,
  Building2,
  Cpu,
  CreditCard,
  Globe2,
  Layers,
  Megaphone,
  Package,
  Palette,
  Plug,
  Receipt,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Store,
  Truck,
  Users,
  Wand2,
} from "lucide-react";

import type { StandardProductContent } from "./types";

export const ecommerceContent: StandardProductContent = {
  slug: "ecommerce",
  name: "Custom E-Commerce",
  vertical: "E-Commerce",
  accent: "lime",

  tagline: "Built for your brand. Powered by AI.",

  positioning:
    "Custom E-Commerce is a fully customizable, scalable AI-powered commerce platform built for D2C brands, aggregators, and niche marketplaces. Run end-to-end commerce — from a whitelabel storefront and multi-vendor catalog to AI-personalized recommendations, GST-compliant payments, real-time logistics, and WhatsApp-native customer engagement — on a modular, API-first platform that bends to your brand instead of forcing your brand to fit a template.",

  problem: {
    kicker: "The challenge",
    title: "Off-the-shelf platforms force your brand into someone else's template.",
    body: "Generic e-commerce platforms don't support unique brand identities — your storefront ends up looking like every other store on the same SaaS. Inventory, logistics, and customer experience live across disconnected systems that don't talk to each other. Personalization and automation at scale stay costly and complex, locked behind expensive plug-ins or custom dev. The result: you can't differentiate, you can't scale efficiently, and your operations cost more than they should. Custom E-Commerce solves all three with a modular, AI-driven, fully customizable platform.",
  },

  features: {
    kicker: "Capabilities",
    title: "Storefront to delivery — every layer of commerce, on one platform.",
    lede: "Whitelabel storefront, AI-driven personalization, multi-vendor marketplace, GST-compliant payments, real-time logistics, marketing automation — all on a modular, API-first platform that bends to your brand.",
    items: [
      {
        icon: Store,
        title: "Customizable storefront",
        body: "Whitelabel front-end fully aligned to your brand identity — UI, UX, workflows, and marketplace rules all tailored to your business. No shared SaaS look.",
      },
      {
        icon: Package,
        title: "Product & inventory management",
        body: "AI-based demand forecasting, automated restocking, and supplier syncing — your catalog and stock stay in lockstep across every channel and warehouse.",
      },
      {
        icon: Truck,
        title: "Order & delivery workflow",
        body: "Real-time order tracking, logistics partner integration, and auto-invoicing. Every order from confirmation to doorstep on one timeline.",
      },
      {
        icon: Sparkles,
        title: "AI-driven personalization",
        body: "Dynamic homepage tuned per visitor, personalized recommendations, and AI-powered upselling strategies — every session gets the storefront calibrated to that customer.",
      },
      {
        icon: BarChart3,
        title: "Admin dashboard & analytics",
        body: "Sales, revenue, and conversion metrics with predictive insights — track what's working in real time and forecast what's next.",
      },
      {
        icon: Users,
        title: "Multi-vendor marketplace",
        body: "Onboard sellers with their own profiles, run commission rules, and manage catalog approvals — turn your platform into a marketplace when the moment is right.",
      },
      {
        icon: Megaphone,
        title: "Marketing suite",
        body: "SEO tools, campaign manager, coupon engine, and WhatsApp / SMS / email automation — everything to run growth from inside the platform.",
      },
      {
        icon: CreditCard,
        title: "Payment & tax engine",
        body: "GST-compliant billing, multiple payment gateways, and region-specific tax rules — Indian commerce baseline + global flexibility, baked in.",
      },
    ],
  },

  useCases: {
    kicker: "Who it's for",
    title: "Built for the brands who want to own their commerce — end to end.",
    lede: "Wherever your brand is fighting against a template, Custom E-Commerce gives you the control and the intelligence to run online commerce on your terms.",
    items: [
      {
        icon: ShoppingBag,
        title: "D2C brands going direct",
        body: "Founder-led D2C brands launching online stores that need to look, feel, and behave exactly like the brand — without compromising on AI personalization, payments, or logistics.",
      },
      {
        icon: Building2,
        title: "Aggregators & niche marketplaces",
        body: "Multi-vendor businesses onboarding sellers in a specific category — fashion, food, hyperlocal — with full control over commission rules, catalog policies, and brand experience.",
      },
      {
        icon: Smartphone,
        title: "Mobile-first & PWA-ready brands",
        body: "Brands that need a native mobile app + a Progressive Web App from day one, with the same backend driving both — minimal dev effort, maximum reach.",
      },
    ],
  },
};

/**
 * Closing pills surfaced near the page CTA — echoes the brochure's
 * "how we are solving it" themes.
 */
export const ECOMMERCE_OUTCOME_PILLS = [
  { icon: Layers, label: "Modular · plug-and-play setup" },
  { icon: Wand2, label: "AI-powered end-to-end" },
  { icon: Palette, label: "Fully customizable to your brand" },
  { icon: Plug, label: "API-first · integrate anything" },
] as const;

/**
 * Sample product cards rendered by the EcommerceStorefrontVisual hero. A
 * small fictional D2C catalog (4 products from different vendors) that
 * shows the multi-vendor + AI-personalization framing.
 */
export const ECOMMERCE_SAMPLE_CATALOG = [
  {
    name: "Hydra Glow Serum",
    vendor: "Aria Skincare",
    price: "₹1,499",
    tag: "Recommended",
    tagTone: "primary" as const,
    rating: 4.8,
  },
  {
    name: "Urban Linen Tee",
    vendor: "Maison Wear",
    price: "₹1,899",
    tag: "Bestseller",
    tagTone: "secondary" as const,
    rating: 4.7,
  },
  {
    name: "Cold Brew Concentrate",
    vendor: "Brew Lab",
    price: "₹599",
    tag: "Restocked",
    tagTone: "neutral" as const,
    rating: 4.9,
  },
  {
    name: "Travel Essentials Kit",
    vendor: "Pack & Go",
    price: "₹2,499",
    tag: "Bundle · save ₹400",
    tagTone: "primary" as const,
    rating: 4.6,
  },
] as const;

/**
 * The 5-layer architectural stack rendered by EcommerceLayeredStack
 * mid-page section. Each layer represents a category of platform
 * capabilities, stacking from foundation (API + modular) up to brand
 * surface (your custom UI).
 */
export const ECOMMERCE_PLATFORM_LAYERS = [
  {
    n: "05",
    role: "Brand surface",
    title: "Your brand, end to end.",
    body: "Whitelabel storefront UI, UX, copy, theming, and PWA / mobile app — every pixel matches your brand identity. The customer never sees the platform, only your store.",
    icon: Palette,
    chips: ["Whitelabel storefront", "Mobile app + PWA", "Custom workflows"],
  },
  {
    n: "04",
    role: "Engagement",
    title: "Multi-vendor, marketing, support.",
    body: "Onboard sellers with commission rules, run SEO + campaigns + coupons, automate WhatsApp/SMS/email outreach, and answer every customer with integrated chat, ticketing, and feedback.",
    icon: Megaphone,
    chips: [
      "Multi-vendor marketplace",
      "SEO + campaigns + coupons",
      "WhatsApp · SMS · email",
      "Chat + ticketing",
    ],
  },
  {
    n: "03",
    role: "Intelligence",
    title: "AI personalization & forecasting.",
    body: "Dynamic homepage tuned per visitor, personalized product recommendations, AI-powered upselling strategies, demand forecasting, and predictive analytics — intelligence baked into every layer.",
    icon: Sparkles,
    chips: [
      "Personalized homepage",
      "Recommendation engine",
      "Demand forecasting",
      "Predictive analytics",
    ],
  },
  {
    n: "02",
    role: "Core commerce",
    title: "Catalog, orders, payments, delivery.",
    body: "Product catalog with inventory + auto-restock, GST-compliant billing across multiple gateways, real-time order tracking, logistics partner integration, and auto-invoicing — every commerce primitive, on the same data.",
    icon: ShoppingBag,
    chips: [
      "Catalog + inventory",
      "GST · multi-gateway",
      "Order tracking + logistics",
      "Auto-invoicing",
    ],
  },
  {
    n: "01",
    role: "Foundation",
    title: "Modular, API-first, scalable.",
    body: "Plug-and-play modules for fast setup. API-first architecture integrates with your CRMs, ERPs, and custom apps. Scale-ready from day one — from a single founder-led D2C brand to a multi-vendor marketplace with thousands of sellers.",
    icon: Layers,
    chips: ["Plug-and-play modules", "API-first", "CRM / ERP integrations", "Scales to marketplace"],
  },
] as const;

/**
 * AI personalization chip series shown in the storefront visual.
 */
export const ECOMMERCE_AI_CHIPS = [
  { icon: Wand2, label: "92% match · for Riya", tone: "primary" as const },
  { icon: Receipt, label: "GST · UPI · cards", tone: "neutral" as const },
  { icon: Cpu, label: "AI: bundle saves ₹400", tone: "primary" as const },
  { icon: Globe2, label: "Multi-vendor · 24 sellers", tone: "neutral" as const },
] as const;
