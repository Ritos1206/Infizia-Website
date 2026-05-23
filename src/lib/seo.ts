import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

/** Build a Next.js Metadata object for any page. */
export function buildMetadata({
  title,
  description,
  path = "/",
  noIndex = false,
}: {
  title: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const fullTitle =
    title === SITE.name
      ? `${SITE.name} — ${SITE.tagline}`
      : `${title} | ${SITE.name}`;

  const desc = description ?? SITE.short;
  const url = `${SITE.url}${path}`;

  return {
    title: fullTitle,
    description: desc,
    metadataBase: new URL(SITE.url),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: SITE.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
