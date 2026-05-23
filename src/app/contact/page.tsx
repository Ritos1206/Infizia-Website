import { PlaceholderHero } from "@/components/sections/PlaceholderHero";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Talk to Infizia about products, services, partnerships, or careers.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PlaceholderHero
      kicker="Contact"
      title="Let's build something intelligent."
      lede={`Sales, partnerships, support — all roads start here. You can also reach us directly at ${SITE.email}.`}
      primaryCTA={{ label: "Book a Demo", href: "/contact/demo" }}
      secondaryCTA={{ label: "Sales Inquiry", href: "/contact/sales" }}
    />
  );
}
