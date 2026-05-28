/**
 * E-Commerce solution — content brief.
 *
 * Brand accent: lime (matches the Custom E-Commerce product). The hero
 * idiom is an order constellation — a network graph with the brand at
 * the centre and vendors + customers as nodes around it, with glowing
 * order pulses traveling along the connecting edges. Visualises the
 * truth that modern commerce is no longer one-storefront-one-customer:
 * it's a brand orchestrating across many vendors and many customer
 * touchpoints in real time.
 *
 * Mapped products:
 *   • Custom E-Commerce (anchor — branded storefront, multi-vendor catalogue,
 *     AI personalisation, WhatsApp commerce)
 *   • Intellix (chat assistant for order status, returns, FAQs in any
 *     language)
 *   • DocuMind (invoice / GST processing for vendors, returns documents,
 *     supplier paperwork)
 *   • EyePOS (when the brand has physical retail counters too — same
 *     inventory, same accounting, online + offline)
 */

import {
  Activity,
  BadgePercent,
  BarChart3,
  Boxes,
  Building2,
  CreditCard,
  Globe,
  Layers,
  MessageCircle,
  Package,
  PackageCheck,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  Tag,
  TrendingUp,
  Truck,
  Users,
  Wand2,
  Zap,
} from "lucide-react";

import type { SolutionContent } from "./types";

export const ecommerceContent: SolutionContent = {
  slug: "ecommerce",
  name: "E-Commerce",
  verticalLabel: "E-Commerce",
  accent: "lime",

  tagline: "Branded storefronts. Multi-vendor catalogues. AI-grade buyers.",

  positioning:
    "Commerce isn't one storefront and one cart anymore. It's a brand pulling product from many vendors, talking to customers across web + WhatsApp + offline, personalising every visit, and reconciling every transaction across online and physical counters. Most brands are stitching this together with a Shopify install, three plugins, a couple of integrations, and one underpaid intern. Infizia replaces all of that with a custom-tailored stack — branded storefront, multi-vendor catalogue, AI engagement, document automation, and POS reconciliation — that scales as the brand does.",

  pulse: {
    kicker: "Industry pulse",
    title: "Where the modern brand quietly leaks revenue.",
    lede: "Three or four percent here, six there, thirty on returns. By the time it shows up on the P&L, it's a quarter of the topline.",
    items: [
      {
        value: "70%",
        label: "of carts get abandoned at checkout",
        caption: "Industry baseline · D2C",
      },
      {
        value: "5+",
        label: "tools the typical D2C brand stitches together",
        caption: "Storefront · payments · WMS · CRM · ads",
      },
      {
        value: "30%",
        label: "of orders involve at least one return or exchange",
        caption: "In categories like apparel + footwear",
      },
      {
        value: "<1%",
        label: "of returning visitors see a personalised storefront",
        caption: "Without AI · most D2C sites",
      },
    ],
  },

  pain: {
    kicker: "What's slowing you down",
    title: "Five tools fighting to be the brand's source of truth.",
    lede: "When the storefront, payments, fulfilment, returns, and reporting all live in different systems, every change becomes an integration project — and customers feel it immediately.",
    items: [
      {
        icon: Layers,
        title: "Off-the-shelf storefronts cap the brand",
        body: "Templates and theme stores look like everyone else. The brand experience the founder wanted gets sanded down to whatever the platform supports, plus three plugins.",
      },
      {
        icon: Boxes,
        title: "Multi-vendor catalogues are spreadsheets",
        body: "The brand is curating from many vendors — but stock, pricing, and fulfilment data are walked through Excel files, WhatsApp groups, and forwarded emails.",
      },
      {
        icon: MessageCircle,
        title: "Customer support stalls on every order",
        body: "\"Where's my order\" becomes the most-asked question of the day, followed by \"can I return it\". Without an AI assistant, every one of those is a human on a slow response.",
      },
      {
        icon: ShoppingBag,
        title: "Online and offline never reconcile",
        body: "Brick-and-mortar counters use one system, the website uses another. Inventory drifts apart. Customers walk in for an item they saw online and the store says it doesn't exist.",
      },
    ],
  },

  stack: {
    kicker: "The Infizia stack for commerce",
    title: "Four products. One brand on every channel.",
    lede: "A custom storefront that the brand actually owns, an AI assistant that handles the routine questions, document AI that processes vendor and tax paperwork, and POS for physical counters — all on the same data spine.",
    entries: [
      {
        productSlug: "ecommerce",
        role: "Anchor — fully customisable AI-powered commerce platform: branded storefront, multi-vendor catalogue, AI personalisation, WhatsApp commerce, end-to-end fulfilment.",
      },
      {
        productSlug: "intellix",
        role: "Multilingual voice + chat assistant — handles order status, returns, FAQs, and product questions across web and WhatsApp.",
      },
      {
        productSlug: "documind",
        role: "Reads vendor invoices, GST documents, return forms, and supplier paperwork — and posts the structured fields into the back office.",
      },
      {
        productSlug: "eyepos",
        role: "When the brand also runs physical counters — unified POS, inventory, and GST-ready accounting that share the storefront's product catalogue and customer record.",
      },
    ],
  },

  useCases: {
    kicker: "Who it's for",
    title: "From the D2C launch to the regional marketplace.",
    lede: "The same stack scales — what changes is which products lead and how the brand surface and the back office are configured.",
    items: [
      {
        icon: Tag,
        title: "D2C brands & founder-led labels",
        body: "Custom branded storefront with AI personalisation that learns each visitor. Intellix chats in the visitor's language. EyePOS unlocks physical retail when the brand goes offline.",
      },
      {
        icon: Building2,
        title: "Multi-vendor marketplaces",
        body: "Aggregator storefronts with vendor onboarding flows, multi-vendor catalogues, and DocuMind processing every supplier invoice and GST document in the back office.",
      },
      {
        icon: Globe,
        title: "Regional + niche commerce platforms",
        body: "WhatsApp-first commerce, multilingual chat, local payment methods, and lightweight checkout — for the hyper-regional and category-specific marketplaces no global platform serves well.",
      },
    ],
  },

  outcomes: {
    kicker: "What changes",
    title: "More cart conversion. Fewer human firefights.",
    lede: "Small wins compound across the funnel: higher engagement, lower support cost, faster vendor reconciliation — they all add to the same bottom line.",
    items: [
      {
        icon: Wand2,
        metric: "+18% conversion",
        body: "Personalised landing pages, recommended bundles, and abandoned-cart nudges in the customer's own language consistently lift conversion from the unpersonalised baseline.",
      },
      {
        icon: MessageCircle,
        metric: "65% deflection",
        body: "Order status, returns, and product questions answered the moment they arrive — across web and WhatsApp, in any local language.",
      },
      {
        icon: PackageCheck,
        metric: "−40% return processing time",
        body: "Return forms read automatically, refund eligibility checked against rules, and the structured outcome posted to the case — without an agent retyping anything.",
      },
      {
        icon: TrendingUp,
        metric: "Online ↔ offline parity",
        body: "EyePOS shares inventory and customer records with the storefront. The same SKU shows the same stock at the website and the counter — no more reconciliation.",
      },
    ],
  },
};

/**
 * Constellation node positions for the bespoke hero. Brand sits at the
 * centre; vendors orbit on the inner ring; customer touchpoints sit on
 * the outer ring. Order pulses travel along the edges connecting
 * vendor → brand → customer.
 *
 * Positions are tuned for a 480x340 viewBox.
 */
export const ECOMMERCE_CONSTELLATION_NODES = [
  // Vendors — inner ring
  { id: "v1", kind: "vendor", label: "Aria Skincare", x: 110, y: 100, icon: Package },
  { id: "v2", kind: "vendor", label: "Maison Wear", x: 90, y: 230, icon: Package },
  { id: "v3", kind: "vendor", label: "Brew Lab", x: 370, y: 100, icon: Package },
  { id: "v4", kind: "vendor", label: "Pack & Go", x: 390, y: 230, icon: Package },
  // Customer touchpoints — outer ring
  { id: "c1", kind: "customer", label: "Web · Mumbai", x: 240, y: 30, icon: Globe },
  { id: "c2", kind: "customer", label: "WhatsApp · Pune", x: 30, y: 160, icon: MessageCircle },
  { id: "c3", kind: "customer", label: "Store · Delhi", x: 450, y: 160, icon: Store },
  { id: "c4", kind: "customer", label: "Web · Bangalore", x: 240, y: 310, icon: Globe },
] as const;

export const ECOMMERCE_BADGES = [
  { icon: Sparkles, label: "Branded · custom-built" },
  { icon: Boxes, label: "Multi-vendor catalogue" },
  { icon: Wand2, label: "AI personalisation" },
  { icon: MessageCircle, label: "WhatsApp commerce" },
  { icon: CreditCard, label: "GST · UPI · cards" },
  { icon: ShieldCheck, label: "Online ↔ offline parity" },
  { icon: Truck, label: "End-to-end fulfilment" },
  { icon: BarChart3, label: "Real-time SKU dashboards" },
  { icon: BadgePercent, label: "Coupons · campaigns · bundles" },
  { icon: Zap, label: "Scales D2C → marketplace" },
  { icon: Activity, label: "Live order pulse" },
  { icon: Users, label: "Customer record · unified" },
] as const;
