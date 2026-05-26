import { buildMetadata } from "@/lib/seo";
import { intellixContent } from "@/content/products/intellix";

export const metadata = buildMetadata({
  title: `${intellixContent.name} — ${intellixContent.tagline}`,
  description: intellixContent.positioning,
  path: `/products/${intellixContent.slug}`,
});

export default function IntellixLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
