import { notFound } from "next/navigation";
import { PlaceholderHero } from "@/components/sections/PlaceholderHero";
import { buildMetadata } from "@/lib/seo";
import { SOLUTIONS } from "@/lib/constants";

type Params = { slug: string };

export function generateStaticParams() {
  // Solutions with bespoke pages have their own dedicated route handlers
  // under /solutions/<slug>/. Skip them here so Next.js doesn't double-
  // prerender. As of Phase 5, all 10 verticals have bespoke pages — this
  // dynamic route stays as a fallback for any future addition.
  return SOLUTIONS.filter((s) => !s.bespokePage).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const item = SOLUTIONS.find((s) => s.slug === slug);
  if (!item) return buildMetadata({ title: "Solution not found", noIndex: true });
  return buildMetadata({
    title: `${item.name} Solutions`,
    description: item.blurb,
    path: `/solutions/${item.slug}`,
  });
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const item = SOLUTIONS.find((s) => s.slug === slug);
  if (!item) notFound();

  return (
    <PlaceholderHero
      kicker={`${item.emoji}  Industry Solution`}
      title={`${item.name}.`}
      lede={item.blurb}
      primaryCTA={{ label: "Talk to an Expert", href: "/contact/sales" }}
      secondaryCTA={{ label: "All Solutions", href: "/solutions" }}
    />
  );
}
