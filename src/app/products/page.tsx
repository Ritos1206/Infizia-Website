import { Container } from "@/components/ui/Container";
import { PlaceholderHero } from "@/components/sections/PlaceholderHero";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { Reveal } from "@/components/motion/Reveal";
import { buildMetadata } from "@/lib/seo";
import { FLAGSHIP_PRODUCTS, NON_FLAGSHIP_PRODUCTS } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Products",
  description:
    "The Infizia product ecosystem — AI-native software across healthcare, sales, HR, customer support, education, e-commerce, finance, intelligence, industrial IoT, and media.",
  path: "/products",
});

export default function ProductsIndexPage() {
  return (
    <>
      <PlaceholderHero
        kicker="Product Ecosystem"
        title="The cognitive stack, end to end."
        lede="Twelve products. Nine industries. One unified intelligence layer — purpose-built so your teams can move faster, decide smarter, and operate at machine scale."
        primaryCTA={{ label: "Explore EyeCON", href: "/products/eyecon" }}
        secondaryCTA={{ label: "Explore VitaCare", href: "/products/vitacare" }}
      />

      <Container className="pb-24">
        <Reveal>
          <p className="font-mono text-[11px] tracking-[0.25em] text-text-faint uppercase mb-6">
            Flagship Products
          </p>
        </Reveal>
        <ProductGrid items={FLAGSHIP_PRODUCTS} accent="teal" featured />

        <Reveal>
          <p className="mt-20 font-mono text-[11px] tracking-[0.25em] text-text-faint uppercase mb-6">
            The Full Ecosystem
          </p>
        </Reveal>
        <ProductGrid items={NON_FLAGSHIP_PRODUCTS} accent="green" />
      </Container>
    </>
  );
}
