import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Security",
  description:
    "How Infizia (Contezza Techno Solution Pvt. Ltd.) protects data — encryption, access controls, multi-tenant isolation, observability, vendor security, and incident response.",
  path: "/security",
});

export default function SecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
