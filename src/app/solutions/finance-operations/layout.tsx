import { buildMetadata } from "@/lib/seo";
import { financeOperationsContent } from "@/content/solutions/finance-operations";

export const metadata = buildMetadata({
  title: `${financeOperationsContent.name} — ${financeOperationsContent.tagline}`,
  description: financeOperationsContent.positioning,
  path: `/solutions/${financeOperationsContent.slug}`,
});

export default function FinanceOperationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
