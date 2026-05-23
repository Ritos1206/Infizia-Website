import { notFound } from "next/navigation";
import { PlaceholderHero } from "@/components/sections/PlaceholderHero";
import { buildMetadata } from "@/lib/seo";
import { PRODUCTS } from "@/lib/constants";

type Params = { slug: string };

export function generateStaticParams() {
  // Flagship products (iCON, VitaCare) have their own dedicated pages under
  // /products/icon and /products/vitacare. Skip them in the dynamic [slug]
  // route so we don't double-prerender.
  return PRODUCTS.filter((p) => !p.flagship).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return buildMetadata({ title: "Product not found", noIndex: true });
  return buildMetadata({
    title: product.name,
    description: product.blurb,
    path: `/products/${product.slug}`,
  });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <PlaceholderHero
      kicker={product.flagship ? "Flagship Product" : product.vertical}
      title={product.name}
      lede={product.blurb}
      primaryCTA={{ label: "Book a Demo", href: "/contact/demo" }}
      secondaryCTA={{ label: "All Products", href: "/products" }}
    />
  );
}
