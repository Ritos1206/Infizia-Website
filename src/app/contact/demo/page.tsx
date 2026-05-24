import { PlaceholderHero } from "@/components/sections/PlaceholderHero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Book a Demo",
  description:
    "See Infizia products in action. Book a personalized demo with our team.",
  path: "/contact/demo",
});

export default function DemoPage() {
  return (
    <PlaceholderHero
      kicker="Book a Demo"
      title="See it run on your data."
      lede="Walk through EyeCON, VitaCare, or any product in the Infizia stack with our solutions team. Booking form goes live shortly."
    />
  );
}
