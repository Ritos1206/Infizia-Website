import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";
import { SITE } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: `How Infizia (Contezza Techno Solution Pvt. Ltd.) handles personal data on ${SITE.domain} — what we collect, how we use it, third-party processors, your rights under DPDP / GDPR / India IT Rules.`,
  path: "/privacy",
});

const SECTIONS: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <>
        <p>
          Infizia is the AI-native sub-brand of{" "}
          <strong className="text-white">
            Contezza Techno Solution Pvt. Ltd.
          </strong>{" "}
          (CIN <code className="rounded bg-white/[0.04] px-1.5 py-0.5 font-mono text-xs text-text-secondary">U74999WB2012PTC183340</code>),
          a private company incorporated on 02 July 2012 under the
          Companies Act of India and registered with the Registrar of
          Companies. References to &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
          &ldquo;Infizia&rdquo; in this policy mean Contezza Techno
          Solution Pvt. Ltd. operating under its Infizia sub-brand.
        </p>
        <p className="mt-4">
          For data privacy queries, write to{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="text-brand-teal hover:underline"
          >
            {SITE.email}
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "scope",
    title: "Scope of this policy",
    body: (
      <>
        <p>
          This policy explains how we handle personal data collected
          through the website at{" "}
          <strong className="text-white">{SITE.domain}</strong>. It does
          not cover:
        </p>
        <ul className="mt-4 space-y-2">
          <li>
            <strong className="text-white">Customer-deployed Infizia
              products.</strong>{" "}
            When Infizia products (EyeCON, VitaCare, EyePOS, etc.) are
            deployed for a client, that client is the data controller for
            their end-user data. Their privacy notice governs that data,
            not this one.
          </li>
          <li>
            <strong className="text-white">Third-party services.</strong>{" "}
            External sites or services we link to operate under their own
            policies.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "what-we-collect",
    title: "What we collect",
    body: (
      <>
        <p>We collect the following categories of data:</p>
        <ul className="mt-4 space-y-3">
          <li>
            <strong className="text-white">Form submissions.</strong> When
            you fill the general contact, demo request, or sales inquiry
            form, we collect your name, email, company name, message, and —
            depending on the form — phone number, role, industry, team
            size, product of interest, inquiry type, preferred meeting
            time, and use case.
          </li>
          <li>
            <strong className="text-white">reCAPTCHA telemetry.</strong>{" "}
            Forms are protected by Google reCAPTCHA v3, which sends Google
            limited interaction data (IP address, browser fingerprint,
            cursor and time signals) to score whether you are a human or a
            bot. This is sent directly to Google&rsquo;s servers and is
            governed by Google&rsquo;s privacy policy and terms.
          </li>
          <li>
            <strong className="text-white">Server logs.</strong> Our
            hosting platform records standard server logs (request URL,
            response code, timestamp, IP address, user agent) for security
            and operations.
          </li>
          <li>
            <strong className="text-white">Email correspondence.</strong>{" "}
            If you email us, we retain your message and our replies for
            record-keeping.
          </li>
        </ul>
        <p className="mt-4">
          We do not currently set marketing cookies, run third-party
          advertising trackers, or collect biometric data on this site.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How we use your data",
    body: (
      <>
        <ul className="space-y-2">
          <li>To respond to your inquiry and follow up on next steps.</li>
          <li>To schedule and run product demos you request.</li>
          <li>
            To filter spam and abusive submissions (reCAPTCHA scoring +
            server-side validation).
          </li>
          <li>To operate, secure, and improve the website.</li>
          <li>To meet legal record-keeping obligations.</li>
        </ul>
        <p className="mt-4">
          We do not sell, rent, or share your personal data with third
          parties for their own marketing purposes.
        </p>
      </>
    ),
  },
  {
    id: "legal-bases",
    title: "Legal bases for processing",
    body: (
      <>
        <p>
          For visitors in jurisdictions that require a stated legal basis
          (such as the EU&rsquo;s GDPR or India&rsquo;s DPDP Act, 2023):
        </p>
        <ul className="mt-4 space-y-2">
          <li>
            <strong className="text-white">Consent.</strong> When you
            voluntarily fill optional fields or submit a form.
          </li>
          <li>
            <strong className="text-white">Legitimate interest.</strong>{" "}
            Responding to inquiries, securing the site, and basic
            operations.
          </li>
          <li>
            <strong className="text-white">Legal obligation.</strong>{" "}
            Record retention required by applicable laws.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "third-parties",
    title: "Third-party processors",
    body: (
      <>
        <p>
          We use a small set of trusted vendors to operate the site. Each
          processes data only as needed for the service we use them for:
        </p>
        <ul className="mt-4 space-y-3">
          <li>
            <strong className="text-white">Zoho Corporation</strong> —
            email service for the {SITE.email} mailbox (India region).
            Used to receive, send, and store inquiry email. Subject to{" "}
            <a
              href="https://www.zoho.com/privacy.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-teal hover:underline"
            >
              Zoho&rsquo;s privacy policy
            </a>
            .
          </li>
          <li>
            <strong className="text-white">Google LLC</strong> — reCAPTCHA
            v3 for bot protection on forms. Subject to{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-teal hover:underline"
            >
              Google&rsquo;s privacy policy
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
            .
          </li>
          <li>
            <strong className="text-white">Hosting provider</strong> —
            site delivery, edge caching, request logs. Provider selection
            is finalised before launch and this policy will name the
            provider once locked.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and similar technologies",
    body: (
      <>
        <p>
          The site uses only the minimum cookies needed to function (for
          example, the reCAPTCHA cookie set by Google when you load a form
          page).
        </p>
        <p className="mt-4">
          We do not currently run web analytics (Google Analytics, Vercel
          Analytics, or similar) or advertising trackers. If we add
          analytics later, this policy will be updated and a banner will
          surface for visitors in jurisdictions that require consent.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "How long we keep your data",
    body: (
      <>
        <ul className="space-y-2">
          <li>
            <strong className="text-white">Form submissions and email
              correspondence.</strong>{" "}
            Kept while we serve you and for up to 36 months after the last
            interaction, then archived or deleted.
          </li>
          <li>
            <strong className="text-white">Server logs.</strong>{" "}
            Approximately 90 days, then rotated.
          </li>
          <li>
            <strong className="text-white">reCAPTCHA telemetry.</strong>{" "}
            Retained by Google per their policies; we do not store
            reCAPTCHA scores or signals beyond the request lifetime.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: (
      <>
        <p>
          Depending on where you live, you may have the right to access,
          correct, delete, restrict, port, or object to our processing of
          your personal data. Specifically:
        </p>
        <ul className="mt-4 space-y-2">
          <li>
            <strong className="text-white">India (DPDP Act, 2023).</strong>{" "}
            Right to access, correct, erase, and grievance redressal.
          </li>
          <li>
            <strong className="text-white">EU / UK (GDPR / UK GDPR).</strong>{" "}
            Access, rectification, erasure, restriction, portability,
            objection, and the right to withdraw consent at any time.
          </li>
          <li>
            <strong className="text-white">Other jurisdictions.</strong>{" "}
            Rights as granted by your local law.
          </li>
        </ul>
        <p className="mt-4">
          To exercise any of these rights, email{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="text-brand-teal hover:underline"
          >
            {SITE.email}
          </a>
          . We aim to respond within 30 days.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "How we protect your data",
    body: (
      <>
        <p>
          We use TLS encryption for all data in transit, vendor-managed
          encryption at rest (Zoho, hosting provider), least-privilege
          access controls for internal access, and audit logs for
          data-touching actions. See our{" "}
          <a href="/security" className="text-brand-teal hover:underline">
            Security overview
          </a>{" "}
          for details.
        </p>
      </>
    ),
  },
  {
    id: "cross-border",
    title: "Cross-border data transfers",
    body: (
      <>
        <p>Your personal data may be processed in:</p>
        <ul className="mt-4 space-y-2">
          <li>
            <strong className="text-white">India</strong> — Zoho mailbox
            (sales@infizia.in) and any India-based hosting region.
          </li>
          <li>
            <strong className="text-white">United States and other
              regions</strong> — Google reCAPTCHA telemetry is processed
            globally; hosting provider may operate edge locations
            worldwide.
          </li>
        </ul>
        <p className="mt-4">
          Where required, transfers rely on standard contractual clauses
          and the vendor&rsquo;s own compliance posture.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: (
      <p>
        This site is intended for business users. We do not knowingly
        collect personal data from anyone under the age of 18. If you
        believe a minor has submitted data through our forms, contact us
        and we will delete it.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        We may update this policy as our practices, vendors, or applicable
        law evolves. Material changes will be highlighted at the top of
        this page. The &ldquo;Last updated&rdquo; date in the page chrome
        is authoritative.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <>
        <p>
          For any privacy-related question or request, email us at{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="text-brand-teal hover:underline"
          >
            {SITE.email}
          </a>
          . We aim to respond within one working day.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      kicker="Legal · Privacy"
      title="Your data, handled with care."
      intro="This policy explains what personal data we collect on infizia.in, how we use it, who we share it with, and the rights you have. We try to keep it short, plain-English, and honest."
      lastUpdated="2026-05-30"
      accent="teal"
      sections={SECTIONS}
    />
  );
}
