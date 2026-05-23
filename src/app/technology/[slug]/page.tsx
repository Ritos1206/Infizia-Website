import { notFound } from "next/navigation";
import { PlaceholderHero } from "@/components/sections/PlaceholderHero";
import { buildMetadata } from "@/lib/seo";
import { TECHNOLOGY } from "@/lib/constants";

type Params = { slug: string };

export function generateStaticParams() {
  return TECHNOLOGY.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const item = TECHNOLOGY.find((t) => t.slug === slug);
  if (!item) return buildMetadata({ title: "Technology — page not found", noIndex: true });
  return buildMetadata({
    title: item.name,
    description: item.blurb,
    path: `/technology/${item.slug}`,
  });
}

export default async function TechnologyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const item = TECHNOLOGY.find((t) => t.slug === slug);
  if (!item) notFound();

  return (
    <PlaceholderHero
      kicker="Technology Pillar"
      title={item.name}
      lede={item.blurb}
      primaryCTA={{ label: "Talk to an Architect", href: "/contact/sales" }}
      secondaryCTA={{ label: "All Technology", href: "/technology" }}
    />
  );
}
