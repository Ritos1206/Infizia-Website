import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Careers",
  description:
    "Join Infizia — we hire engineers, designers, and AI specialists who want to ship AI-native products at production scale across 14 products and 10 industry verticals.",
  path: "/company/careers",
});

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
