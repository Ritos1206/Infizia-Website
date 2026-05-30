import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Book a Demo · Infizia",
  description:
    "Book a personalized demo of any Infizia AI-native product — EyeCON, VitaCare, EyePOS, Convenor, Performix, Meetrix, Intellix, Learnova, LMS, E-Commerce, DocuMind, Infera, OpsSight, or E-News.",
  path: "/contact/demo",
});

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
