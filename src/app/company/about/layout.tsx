import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Infizia",
  description:
    "Infizia is the AI-native sub-brand of Contezza Techno Solution Pvt. Ltd. (CIN U74999WB2012PTC183340 · incorporated 02 Jul 2012, India) — building agentic AI products, autonomous systems, and intelligent applications across AI, agentic AI, Google Cloud, and the Red Hat stack.",
  path: "/company/about",
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
