import { buildMetadata } from "@/lib/seo";
import { performixContent } from "@/content/products/performix";

export const metadata = buildMetadata({
  title: `${performixContent.name} — ${performixContent.tagline}`,
  description: performixContent.positioning,
  path: `/products/${performixContent.slug}`,
});

export default function PerformixLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
