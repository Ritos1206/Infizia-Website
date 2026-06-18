import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";
import { SITE } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Security",
  description: `How Infizia (Contezza Techno Solution Pvt. Ltd.) protects data on ${SITE.domain} and across customer deployments — encryption, access controls, vendor security, and incident response.`,
  path: "/security",
});

const SECTIONS: LegalSection[] = [
  {
    id: "posture",
    title: "Our security posture",
    body: (
      <>
        <p>
          Infizia is the AI-native sub-brand of{" "}
          <strong className="text-white">
            Contezza Techno Solution Pvt. Ltd.
          </strong>
          , a private company incorporated in India in 2012. We build
          enterprise software for clients across healthcare, sales,
          finance, and other regulated domains, so security is wired into
          how we design, build, and run our products — not an afterthought.
        </p>
        <p className="mt-4">
          This page summarises the controls and practices we apply on{" "}
          <strong className="text-white">{SITE.domain}</strong> and across
          customer deployments. For the privacy specifics around data
          collected on this site, see our{" "}
          <a href="/privacy" className="text-brand-teal hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "data-classification",
    title: "Data classification",
    body: (
      <>
        <p>
          We classify the data we handle into three tiers, each with its
          own treatment:
        </p>
        <ul className="mt-4 space-y-3">
          <li>
            <strong className="text-white">Public.</strong> Marketing
            content, brochures, partner names — no sensitivity, served via
            CDN.
          </li>
          <li>
            <strong className="text-white">Internal.</strong> Server logs,
            operational metrics, build artefacts. Restricted to engineers
            on a need-to-know basis.
          </li>
          <li>
            <strong className="text-white">Restricted.</strong> Customer
            inquiry data, contact form submissions, and any client data
            handled in deployments. Encrypted at rest, access logged, and
            scoped to authorised roles.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "transit",
    title: "Data in transit",
    body: (
      <>
        <p>
          All connections to <strong className="text-white">{SITE.domain}</strong>{" "}
          and our APIs are encrypted with TLS 1.2 or higher. HTTP requests
          are redirected to HTTPS, HSTS is enabled with preload, and we
          use modern cipher suites only.
        </p>
        <p className="mt-4">
          Email between our systems and Zoho is encrypted in transit;
          delivery to your mailbox depends on your provider&rsquo;s TLS
          posture.
        </p>
      </>
    ),
  },
  {
    id: "rest",
    title: "Data at rest",
    body: (
      <>
        <ul className="space-y-3">
          <li>
            <strong className="text-white">Email and form
              submissions.</strong>{" "}
            Stored in the Zoho Mail mailbox for{" "}
            <code className="rounded bg-white/[0.04] px-1.5 py-0.5 font-mono text-xs text-text-secondary">
              {SITE.email}
            </code>
            . Zoho encrypts mailboxes at rest using AES-256.
          </li>
          <li>
            <strong className="text-white">Server logs and platform
              storage.</strong>{" "}
            Encrypted at rest by the hosting provider using
            vendor-managed keys. Retention is finite — see the Privacy
            Policy for current durations.
          </li>
          <li>
            <strong className="text-white">Customer-deployed Infizia
              products.</strong>{" "}
            Application data is encrypted at rest using
            cloud-provider-managed keys (Google Cloud KMS or equivalent).
            Customer-supplied keys are supported on enterprise plans.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "access",
    title: "Access controls",
    body: (
      <>
        <ul className="space-y-3">
          <li>
            <strong className="text-white">Named accounts only.</strong>{" "}
            No shared credentials. Every engineer authenticates with their
            own identity for everything they touch.
          </li>
          <li>
            <strong className="text-white">Multi-factor authentication.</strong>{" "}
            Required on all admin tooling — Zoho, GitHub, hosting
            provider, cloud accounts.
          </li>
          <li>
            <strong className="text-white">Least privilege.</strong>{" "}
            Access is scoped to the role and the project. We review
            permissions on join, role change, and offboarding.
          </li>
          <li>
            <strong className="text-white">No prod from laptops.</strong>{" "}
            Production changes go through CI/CD with peer review. Direct
            production access is rare, audited, and time-boxed.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "tenancy",
    title: "Multi-tenant isolation",
    body: (
      <>
        <p>
          For Infizia products deployed to multiple customers, isolation
          is enforced at three levels:
        </p>
        <ul className="mt-4 space-y-3">
          <li>
            <strong className="text-white">Logical isolation</strong> by
            default: each tenant&rsquo;s data is partitioned by tenant ID
            and protected by row-level access controls.
          </li>
          <li>
            <strong className="text-white">Schema or database isolation</strong>{" "}
            on enterprise plans: a dedicated schema or database instance
            per tenant.
          </li>
          <li>
            <strong className="text-white">Dedicated deployment</strong>{" "}
            on regulated-industry contracts: a separate cluster or VPC for
            the customer.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "observability",
    title: "Observability and audit",
    body: (
      <>
        <p>
          We instrument the platform so we can answer{" "}
          <em>what happened, when, and to which record</em> — quickly:
        </p>
        <ul className="mt-4 space-y-2">
          <li>Centralised, structured application logs with retention windows.</li>
          <li>
            Audit trails for data-touching actions (read, write, export,
            delete) on customer-deployed products.
          </li>
          <li>
            Metrics and tracing for latency, error rate, and saturation
            across services.
          </li>
          <li>
            Alerts on anomalous access patterns and authentication
            failures.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "incident",
    title: "Incident response",
    body: (
      <>
        <p>If we detect or are notified of a security incident, our process is:</p>
        <ol className="mt-4 space-y-2 list-decimal list-inside marker:text-brand-teal">
          <li>
            <strong className="text-white">Acknowledge</strong> within 24
            hours of confirmation.
          </li>
          <li>
            <strong className="text-white">Contain</strong> the impact
            and rotate any exposed credentials.
          </li>
          <li>
            <strong className="text-white">Investigate</strong> the root
            cause and produce a written incident report.
          </li>
          <li>
            <strong className="text-white">Communicate</strong>{" "}
            transparently with affected customers, including timeline,
            scope, and remediation steps.
          </li>
          <li>
            <strong className="text-white">Improve</strong> — every
            post-mortem produces concrete fixes and we ship them.
          </li>
        </ol>
        <p className="mt-4">
          For data breaches involving personal data, we follow the
          notification timelines required by the applicable law (DPDP Act
          rules in India, GDPR Article 33 in the EU, and so on).
        </p>
      </>
    ),
  },
  {
    id: "compliance",
    title: "Compliance posture",
    body: (
      <>
        <p>
          We design and operate the platform against the controls
          published by the major frameworks even where formal audits are
          not yet in place:
        </p>
        <ul className="mt-4 space-y-3">
          <li>
            <strong className="text-white">SOC 2-ready.</strong> Our
            controls cover the Trust Services Criteria (security,
            availability, confidentiality). A formal audit is on our
            roadmap and will be pursued when the customer mix justifies
            it.
          </li>
          <li>
            <strong className="text-white">DPDP-ready.</strong> Our data
            handling on this site and in customer deployments is aligned
            with the obligations of India&rsquo;s Digital Personal Data
            Protection Act, 2023.
          </li>
          <li>
            <strong className="text-white">GDPR-aware.</strong> For
            visitors and customers in the EU / UK, we apply GDPR-aligned
            processing principles and rights handling.
          </li>
          <li>
            <strong className="text-white">India IT Rules.</strong> Our
            site complies with the Information Technology Act, 2000 and
            the Intermediary Guidelines and Digital Media Ethics Code
            Rules, 2021 to the extent they apply.
          </li>
        </ul>
        <p className="mt-4">
          We do not currently claim ISO 27001 or SOC 2 Type II
          certification. When we obtain any such attestation, this page
          and the marketing site will be updated.
        </p>
      </>
    ),
  },
  {
    id: "vendors",
    title: "Vendor security",
    body: (
      <>
        <p>
          We rely on a small set of trusted vendors. Their certifications
          cover their slice of the stack:
        </p>
        <ul className="mt-4 space-y-3">
          <li>
            <strong className="text-white">Zoho Corporation.</strong>{" "}
            ISO/IEC 27001, SOC 2 Type II, GDPR-compliant — see{" "}
            <a
              href="https://www.zoho.com/security.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-teal hover:underline"
            >
              Zoho Security
            </a>
            .
          </li>
          <li>
            <strong className="text-white">Google Cloud (GCP).</strong>{" "}
            ISO/IEC 27001/27017/27018, SOC 1/2/3, PCI DSS, HIPAA-ready
            services where applicable.
          </li>
          <li>
            <strong className="text-white">Red Hat.</strong> Common
            Criteria EAL 4+ for RHEL, FIPS 140-3 modules, and the
            associated supply-chain attestations.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "engineering",
    title: "Secure engineering practices",
    body: (
      <>
        <ul className="space-y-3">
          <li>
            <strong className="text-white">Code review.</strong> Every
            change is reviewed by at least one peer before merge.
          </li>
          <li>
            <strong className="text-white">Automated testing and CI.</strong>{" "}
            Type checks, lint, and tests run on every push.
          </li>
          <li>
            <strong className="text-white">Dependency hygiene.</strong>{" "}
            Pinned versions, automated vulnerability alerts, prompt
            patching for high-severity issues. Pinning is documented in{" "}
            <code className="rounded bg-white/[0.04] px-1.5 py-0.5 font-mono text-xs text-text-secondary">
              package.json
            </code>{" "}
            and lockfiles.
          </li>
          <li>
            <strong className="text-white">Secret management.</strong>{" "}
            Secrets live in vendor-managed secret stores (hosting
            provider env vars, GitHub Actions secrets) — never in source.
          </li>
          <li>
            <strong className="text-white">Bot protection.</strong>{" "}
            Forms on this site are protected by Google reCAPTCHA v3 with
            score thresholding.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "disclosure",
    title: "Reporting a security issue",
    body: (
      <>
        <p>
          If you believe you have found a security vulnerability in our
          site or a customer deployment, please tell us. We appreciate
          responsible disclosure and we&rsquo;ll get back quickly.
        </p>
        <ul className="mt-4 space-y-2">
          <li>
            <strong className="text-white">Email:</strong>{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="text-brand-teal hover:underline"
            >
              {SITE.email}
            </a>{" "}
            (subject line:{" "}
            <code className="rounded bg-white/[0.04] px-1.5 py-0.5 font-mono text-xs text-text-secondary">
              Security disclosure
            </code>
            )
          </li>
          <li>
            We acknowledge within 1 working day, share an investigation
            timeline within 5 working days, and publish credit (with your
            permission) once fixed.
          </li>
          <li>
            Please do not access data that isn&rsquo;t yours, run automated
            scans against production, or attempt to disrupt our service
            while testing.
          </li>
        </ul>
      </>
    ),
  },
];

export default function SecurityPage() {
  return (
    <LegalPage
      kicker="Legal · Security"
      title="Security, by design."
      intro={`A short, honest summary of how we secure the website at ${SITE.domain} and the products we deploy for customers — encryption, access, isolation, observability, and how we respond when something goes wrong.`}
      lastUpdated="2026-05-30"
      accent="green"
      sections={SECTIONS}
    />
  );
}
