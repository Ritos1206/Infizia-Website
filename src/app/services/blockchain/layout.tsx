import { buildMetadata } from "@/lib/seo";
import { blockchainContent } from "@/content/services/blockchain";

export const metadata = buildMetadata({
  title: `${blockchainContent.name} — ${blockchainContent.tagline}`,
  description: blockchainContent.positioning,
  path: `/services/${blockchainContent.slug}`,
});

export default function BlockchainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
