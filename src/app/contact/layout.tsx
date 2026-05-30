import { buildMetadata } from "@/lib/seo";
import { RecaptchaScript } from "@/components/contact/RecaptchaScript";

export const metadata = buildMetadata({
  title: "Contact Infizia",
  description:
    "Get in touch with Infizia — general inquiries, partnerships, and questions about our AI-native products and services. We respond within one business day.",
  path: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <RecaptchaScript />
      {children}
    </>
  );
}
