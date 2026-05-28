import { notFound, redirect } from "next/navigation";
import { PlaceholderHero } from "@/components/sections/PlaceholderHero";
import { buildMetadata } from "@/lib/seo";
import { SERVICES } from "@/lib/constants";

type Params = { slug: string };

export function generateStaticParams() {
  // Skip:
  //   • bespokePage:true entries — they have dedicated route handlers under
  //     /services/<slug>/ and would otherwise double-prerender.
  //   • redirectsTo entries — those services are catalog-only cards that
  //     link to another section (e.g., redhat-stack → /red-hat). No page.
  // As of Phase 6 services portion (D-69), this filters all 5 SERVICES
  // entries — leaving the dynamic route as a fallback for any future
  // additions.
  return SERVICES.filter((s) => !s.bespokePage && !s.redirectsTo).map((s) => ({
    slug: s.slug,
  }));
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

  // If the service has a redirect target, send the user there.
  if (item.redirectsTo) redirect(item.redirectsTo);

  return (
    <PlaceholderHero
      kicker="Service"
      title={`${item.name}.`}
      lede={item.blurb}
      primaryCTA={{ label: "Talk to a Solutions Architect", href: "/contact/sales" }}
      secondaryCTA={{ label: "All Services", href: "/services" }}
    />
  );
}
