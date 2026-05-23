import { notFound } from "next/navigation";
import { PlaceholderHero } from "@/components/sections/PlaceholderHero";
import { buildMetadata } from "@/lib/seo";
import { SERVICES } from "@/lib/constants";

type Params = { slug: string };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const item = SERVICES.find((s) => s.slug === slug);
  if (!item) return buildMetadata({ title: "Service not found", noIndex: true });
  return buildMetadata({
    title: item.name,
    description: item.blurb,
    path: `/services/${item.slug}`,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const item = SERVICES.find((s) => s.slug === slug);
  if (!item) notFound();

  return (
    <PlaceholderHero
      kicker="Service Offering"
      title={item.name}
      lede={item.blurb}
      primaryCTA={{ label: "Talk to a Solutions Architect", href: "/contact/sales" }}
      secondaryCTA={{ label: "All Services", href: "/services" }}
    />
  );
}
