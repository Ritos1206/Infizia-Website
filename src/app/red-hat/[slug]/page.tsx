import { notFound } from "next/navigation";
import { PlaceholderHero } from "@/components/sections/PlaceholderHero";
import { buildMetadata } from "@/lib/seo";
import { REDHAT_SERVICES } from "@/lib/constants";

type Params = { slug: string };

export function generateStaticParams() {
  return REDHAT_SERVICES.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const item = REDHAT_SERVICES.find((r) => r.slug === slug);
  if (!item) return buildMetadata({ title: "Red Hat — page not found", noIndex: true });
  return buildMetadata({
    title: `Red Hat · ${item.shortName ?? item.name}`,
    description: item.blurb,
    path: `/red-hat/${item.slug}`,
  });
}

export default async function RedHatServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const item = REDHAT_SERVICES.find((r) => r.slug === slug);
  if (!item) notFound();

  return (
    <PlaceholderHero
      kicker="Red Hat Stack Implementation"
      title={item.shortName ?? item.name}
      lede={item.blurb}
      primaryCTA={{ label: "Request an Assessment", href: "/contact/sales" }}
      secondaryCTA={{ label: "All Red Hat Services", href: "/red-hat" }}
    />
  );
}
