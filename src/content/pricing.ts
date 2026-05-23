/**
 * Pricing data — 3-tier subscription model per product (D-19).
 *
 * NOTE: All amounts are PLACEHOLDERS / INDICATIVE until client locks final
 * pricing. Update this file when real numbers land. The /pricing page reads
 * exclusively from here.
 *
 * Currency: INR. Billing: monthly. "Custom" = Enterprise tier with sales contact.
 */

export type PricingTier = {
  name: "Starter" | "Pro" | "Enterprise";
  /** "₹999" or "Custom" */
  price: string;
  /** "/user/month", "/clinic/month", "Talk to sales" — context for the price */
  unit: string;
  /** One-line tier descriptor */
  tagline: string;
  /** 4–6 included capabilities */
  features: string[];
  /** True for the Pro tier — visually highlighted as recommended */
  recommended?: boolean;
  /** Override CTA label/href; default is "Book a Demo" → /contact/demo */
  cta?: { label: string; href: string };
};

export type ProductPricing = {
  productSlug: string;
  productName: string;
  vertical: string;
  tagline: string;
  tiers: [PricingTier, PricingTier, PricingTier];
};

/**
 * Per-product 3-tier pricing matrix.
 * Currently only flagships have full tiers populated; standard products
 * fall back to a generic placeholder until per-product pricing is finalized.
 */
export const PRODUCT_PRICING: ProductPricing[] = [
  {
    productSlug: "icon",
    productName: "iCON",
    vertical: "Sales",
    tagline: "Mobile-first AI sales platform · per-user/month",
    tiers: [
      {
        name: "Starter",
        price: "₹999",
        unit: "/user/month",
        tagline: "For small sales teams getting started with AI-driven selling.",
        features: [
          "Up to 5 users",
          "AI company research · 50 lookups/month",
          "Native dialer + auto recording",
          "Live Meeting capture · 25 hrs/month",
          "MoM email · standard templates",
          "Email support",
        ],
      },
      {
        name: "Pro",
        price: "₹2,499",
        unit: "/user/month",
        tagline: "For growing sales orgs who live on the road and on the phone.",
        recommended: true,
        features: [
          "Unlimited users",
          "AI company research · unlimited",
          "Chat with research + chat with meetings",
          "Live Meeting capture · unlimited",
          "Pipeline forecasting + deal-risk scoring",
          "Priority support · 24-hour SLA",
          "CRM + calendar bidirectional sync",
        ],
      },
      {
        name: "Enterprise",
        price: "Custom",
        unit: "Talk to sales",
        tagline: "For 100+ rep orgs with custom rollouts and security needs.",
        features: [
          "Volume pricing",
          "Dedicated Customer Success Manager",
          "SSO, SAML, SCIM provisioning",
          "Audit logs, data residency, compliance reviews",
          "Custom AI fine-tuning on your call data",
          "On-prem / private-cloud deployment options",
          "Quarterly strategic reviews",
        ],
        cta: { label: "Contact Sales", href: "/contact/sales" },
      },
    ],
  },
  {
    productSlug: "vitacare",
    productName: "VitaCare",
    vertical: "Healthcare",
    tagline: "AI-powered digital clinic · per-clinic/month",
    tiers: [
      {
        name: "Starter",
        price: "₹1,499",
        unit: "/clinic/month",
        tagline: "For solo practitioners running a digital clinic.",
        features: [
          "1 doctor",
          "Online appointment booking",
          "Telehealth video consults · 50 hrs/month",
          "Digital prescriptions on WhatsApp",
          "Basic patient records",
          "Email support",
        ],
      },
      {
        name: "Pro",
        price: "₹3,999",
        unit: "/clinic/month",
        tagline: "For multi-doctor clinics ready to scale online.",
        recommended: true,
        features: [
          "Up to 10 doctors",
          "Unlimited telehealth + appointments",
          "Full EHR with lab uploads",
          "AI call receptionist (24/7)",
          "WhatsApp chatbot for bookings",
          "Automated patient follow-ups",
          "Priority support · 24-hour SLA",
        ],
      },
      {
        name: "Enterprise",
        price: "Custom",
        unit: "Talk to sales",
        tagline: "For hospital groups and multi-location practices.",
        features: [
          "Volume pricing",
          "Multi-location consolidation",
          "Dedicated Customer Success Manager",
          "HL7 / FHIR integrations",
          "HIPAA / DPDPA compliance reviews",
          "Custom branding & white-label",
          "On-prem deployment options",
        ],
        cta: { label: "Contact Sales", href: "/contact/sales" },
      },
    ],
  },
  {
    productSlug: "ipos",
    productName: "iPOS",
    vertical: "Finance & Operations",
    tagline: "Account inventory solution · per-counter/month",
    tiers: [
      {
        name: "Starter",
        price: "₹1,999",
        unit: "/counter/month",
        tagline: "For single-store retail and small wholesale businesses.",
        features: [
          "1 counter, 2 users",
          "POS billing + barcode scanning",
          "Basic inventory + low-stock alerts",
          "GST returns + e-invoicing",
          "Daily Z-reports",
          "Email support",
        ],
      },
      {
        name: "Pro",
        price: "₹4,499",
        unit: "/counter/month",
        tagline: "For multi-counter and multi-store operations.",
        recommended: true,
        features: [
          "Up to 5 counters per location",
          "Multi-location, branch-wise dashboards",
          "Full accounting + bank reconciliation",
          "WhatsApp digital receipts",
          "AI demand forecasting",
          "Priority support · 24-hour SLA",
        ],
      },
      {
        name: "Enterprise",
        price: "Custom",
        unit: "Talk to sales",
        tagline: "For multi-state retail chains and large wholesalers.",
        features: [
          "Volume pricing",
          "Custom integrations (ERP / banks / payment gateways)",
          "Advanced fraud + shrinkage detection",
          "Dedicated Customer Success Manager",
          "SLA-backed uptime",
          "Custom reports + BI handoff",
        ],
        cta: { label: "Contact Sales", href: "/contact/sales" },
      },
    ],
  },
];

/**
 * Generic fallback pricing tiers used for products that don't have a
 * dedicated entry yet. Keeps the /pricing page comprehensive while we
 * finalize per-product numbers.
 */
export const GENERIC_TIERS: [PricingTier, PricingTier, PricingTier] = [
  {
    name: "Starter",
    price: "₹999",
    unit: "/user/month",
    tagline: "Start small, scale as you grow.",
    features: [
      "Core capabilities",
      "Up to 10 users / unit limits",
      "Standard support",
    ],
  },
  {
    name: "Pro",
    price: "₹2,499",
    unit: "/user/month",
    tagline: "For mid-size teams adopting AI-driven workflows.",
    recommended: true,
    features: [
      "Higher unit limits",
      "Full AI capabilities",
      "Priority support · 24-hour SLA",
      "Advanced integrations",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    unit: "Talk to sales",
    tagline: "For large rollouts with security and compliance needs.",
    features: [
      "Volume pricing",
      "Dedicated CSM",
      "SSO, audit logs, compliance",
      "Custom fine-tuning options",
    ],
    cta: { label: "Contact Sales", href: "/contact/sales" },
  },
];
