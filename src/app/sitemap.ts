import type { MetadataRoute } from "next";
import {
  PRODUCTS,
  SOLUTIONS,
  SERVICES,
  REDHAT_SERVICES,
  TECHNOLOGY,
  SITE,
} from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = SITE.url;

  const staticPaths = [
    "",
    "/products",
    "/solutions",
    "/services",
    "/red-hat",
    "/technology",
    "/resources",
    "/resources/blog",
    "/resources/case-studies",
    "/company/about",
    "/company/vision-mission",
    "/company/careers",
    "/contact",
    "/contact/demo",
    "/contact/sales",
  ];

  return [
    ...staticPaths.map((p) => ({
      url: `${base}${p}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: p === "" ? 1.0 : 0.8,
    })),
    ...PRODUCTS.map((p) => ({
      url: `${base}/products/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p.flagship ? 0.9 : 0.7,
    })),
    ...SOLUTIONS.map((s) => ({
      url: `${base}/solutions/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...SERVICES.map((s) => ({
      url: `${base}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...REDHAT_SERVICES.map((r) => ({
      url: `${base}/red-hat/${r.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...TECHNOLOGY.map((t) => ({
      url: `${base}/technology/${t.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
