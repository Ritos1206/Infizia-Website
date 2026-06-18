import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";
import { SITE } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Use",
  description: `Terms governing use of ${SITE.domain} — operated by Infizia, the AI-native sub-brand of Contezza Techno Solution Pvt. Ltd.`,
  path: "/terms",
});

const SECTIONS: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of these terms",
    body: (
      <>
        <p>
          The website at{" "}
          <strong className="text-white">{SITE.domain}</strong> (the{" "}
          &ldquo;Site&rdquo;) is operated by{" "}
          <strong className="text-white">
            Contezza Techno Solution Pvt. Ltd.
          </strong>{" "}
          (CIN <code className="rounded bg-white/[0.04] px-1.5 py-0.5 font-mono text-xs text-text-secondary">U74999WB2012PTC183340</code>),
          a private company incorporated in India in 2012, under its
          Infizia sub-brand. By accessing or using the Site, you agree to
          be bound by these Terms of Use (the &ldquo;Terms&rdquo;).
        </p>
        <p className="mt-4">
          If you do not agree, please do not use the Site. References to
          &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;Infizia&rdquo;
          mean Contezza Techno Solution Pvt. Ltd. operating under the
          Infizia sub-brand.
        </p>
      </>
    ),
  },
  {
    id: "site-purpose",
    title: "What this site is",
    body: (
      <>
        <p>
          The Site is an informational marketing platform that describes
          our products, services, technology practices, and Red Hat
          implementation work. It is not a contract for services, a
          product order page, or a binding offer. Engagement with our
          products and services is governed by separate written
          agreements.
        </p>
      </>
    ),
  },
  {
    id: "ip",
    title: "Intellectual property",
    body: (
      <>
        <p>
          All site content — including text, graphics, illustrations,
          interactive visualisations, code, and design — is owned by
          Contezza Techno Solution Pvt. Ltd. or licensed to it, except
          where third-party attribution is shown. Our material is
          protected by Indian and international copyright, trade mark,
          and design laws.
        </p>
        <p className="mt-4">
          You may view and print pages from the Site for your personal,
          non-commercial reference. Any other use — including
          reproduction, redistribution, scraping, or training of machine
          learning models — requires our prior written permission.
        </p>
      </>
    ),
  },
  {
    id: "trademarks",
    title: "Trade marks",
    body: (
      <>
        <p>
          <strong className="text-white">Infizia</strong>, the Infizia
          logomark, <strong className="text-white">EyeCON</strong>,{" "}
          <strong className="text-white">VitaCare</strong>,{" "}
          <strong className="text-white">EyePOS</strong>, Convenor,
          Performix, Meetrix, Intellix, Learnova, Infera, DocuMind,
          OpsSight, E-News, and the related product names are trade marks
          (registered or pending) of Contezza Techno Solution Pvt. Ltd.
        </p>
        <p className="mt-4">
          <strong className="text-white">Red Hat</strong>, the Red Hat
          logo, RHEL, OpenShift, Ansible, and OpenShift AI are trade
          marks or registered trade marks of{" "}
          <em>Red Hat, Inc.</em> in the United States and other
          countries.{" "}
          <strong className="text-white">Google Cloud</strong> and the
          Google Cloud logo are trade marks of <em>Google LLC</em>. All
          other trade marks belong to their respective owners and are
          used for identification only — no endorsement is implied unless
          stated.
        </p>
        <p className="mt-4">
          Customer logos shown in the &ldquo;Success Stories&rdquo;
          section are the property of their respective owners and are
          used to indicate past project work delivered by Contezza Techno
          Solution Pvt. Ltd.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    body: (
      <>
        <p>You agree not to:</p>
        <ul className="mt-4 space-y-2">
          <li>
            Use the Site in any way that violates any applicable law or
            regulation.
          </li>
          <li>
            Attempt to gain unauthorised access to any part of the Site,
            its systems, or its underlying infrastructure.
          </li>
          <li>
            Probe, scan, or test the vulnerability of the Site without
            our prior written authorisation (see the responsible
            disclosure section of our{" "}
            <a href="/security" className="text-brand-teal hover:underline">
              Security
            </a>{" "}
            page if you believe you have found a security issue).
          </li>
          <li>
            Use bots, scrapers, or other automated means to harvest
            content, contact details, or form data, except where we
            allow it for indexing (e.g., search engines respecting our{" "}
            <code className="rounded bg-white/[0.04] px-1.5 py-0.5 font-mono text-xs text-text-secondary">
              robots.txt
            </code>
            ).
          </li>
          <li>
            Submit forms with false, misleading, or abusive content.
          </li>
          <li>
            Reverse engineer, decompile, or disassemble any component of
            the Site or our products.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "submissions",
    title: "Form submissions and communications",
    body: (
      <>
        <p>
          When you submit information through a contact, demo, or sales
          form, you confirm that the information is accurate and that you
          have authority to share it. By submitting a form, you authorise
          us to contact you about your inquiry using the channels you
          provided.
        </p>
        <p className="mt-4">
          Forms are protected by Google reCAPTCHA v3, which is governed
          by Google&rsquo;s{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-teal hover:underline"
          >
            privacy policy
          </a>{" "}
          and{" "}
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-teal hover:underline"
          >
            terms of service
          </a>
          . See our{" "}
          <a href="/privacy" className="text-brand-teal hover:underline">
            Privacy Policy
          </a>{" "}
          for how we handle the data you submit.
        </p>
      </>
    ),
  },
  {
    id: "external-links",
    title: "Links to external sites",
    body: (
      <p>
        The Site may link to third-party websites — partner sites,
        industry resources, vendor documentation. We do not control those
        sites and are not responsible for their content, accuracy, or
        privacy practices. Links are provided for convenience only.
      </p>
    ),
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    body: (
      <>
        <p>
          The Site, all content, and all referenced product capabilities
          are provided <strong className="text-white">&ldquo;as is&rdquo;</strong>{" "}
          and <strong className="text-white">&ldquo;as available&rdquo;</strong>.
          To the fullest extent permitted by law, we make no warranties,
          express or implied, about the Site&rsquo;s availability,
          accuracy, completeness, or fitness for any particular purpose.
        </p>
        <p className="mt-4">
          Product capability statements, performance figures, and the
          industry impact ranges shown on the Site are illustrative,
          based on prior project experience and public industry
          benchmarks. Real-world outcomes depend on data, integration
          quality, and operational maturity, and will be defined in
          contract for any specific engagement.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <p>
        To the fullest extent permitted by law, neither Contezza Techno
        Solution Pvt. Ltd. nor any of its officers, employees, or
        contractors shall be liable for any indirect, incidental,
        consequential, special, or punitive damages arising out of or in
        connection with your use of the Site, including loss of profits,
        loss of data, or business interruption, even if advised of the
        possibility of such damages. Liability for any direct loss
        attributable to the Site is limited to INR 1,000.
      </p>
    ),
  },
  {
    id: "indemnity",
    title: "Indemnification",
    body: (
      <p>
        You agree to defend, indemnify, and hold harmless Contezza Techno
        Solution Pvt. Ltd. and its officers, directors, employees, and
        contractors from and against any claims, liabilities, damages,
        losses, and expenses (including reasonable legal fees) arising
        out of or in any way connected with your breach of these Terms or
        your misuse of the Site.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing law and jurisdiction",
    body: (
      <p>
        These Terms are governed by and construed in accordance with the
        laws of India. The courts at{" "}
        <strong className="text-white">Kolkata, West Bengal</strong> shall
        have exclusive jurisdiction over any dispute arising out of or
        relating to these Terms or your use of the Site, subject to any
        mandatory rule of jurisdiction under applicable law.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: (
      <p>
        We may update these Terms from time to time. The current version
        is always at{" "}
        <a href="/terms" className="text-brand-teal hover:underline">
          {SITE.url}/terms
        </a>{" "}
        and the &ldquo;Last updated&rdquo; date in the page chrome is
        authoritative. Continued use of the Site after a change means you
        accept the updated Terms.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <p>
        For questions about these Terms, email us at{" "}
        <a
          href={`mailto:${SITE.email}`}
          className="text-brand-teal hover:underline"
        >
          {SITE.email}
        </a>
        .
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      kicker="Legal · Terms"
      title="Terms of use, in plain English."
      intro={`The rules that govern your use of ${SITE.domain}. We've kept it readable — no fine print games. By using the site you agree to these terms.`}
      lastUpdated="2026-05-30"
      accent="blue"
      sections={SECTIONS}
    />
  );
}
