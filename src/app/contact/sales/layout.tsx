import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Talk to Sales · Infizia",
  description:
    "Connect with the Infizia sales team — multi-product rollouts, services engagements, Red Hat practice, Google Cloud, and tailored solutions across 10 industry verticals.",
  path: "/contact/sales",
});

export default function SalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
