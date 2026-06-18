/**
 * POST /api/contact
 *
 * Single endpoint for all 3 contact forms (general / demo / sales).
 * Discriminated by `formType` on the payload. Validates with zod,
 * delivers via Zoho SMTP (or logs to console when SMTP env is missing).
 *
 * Response shape:
 *   200 OK              { ok: true, message: string }
 *   400 Bad Request     { ok: false, errors: { field: string[] } }   (validation failure)
 *   422 Unprocessable   { ok: false, error: string }                  (honeypot triggered or other reject)
 *   500 Server Error    { ok: false, error: string }                  (SMTP transport failed)
 */

import { NextResponse } from "next/server";
import { ZodError } from "zod";
import {
  inquirySchema,
  PRODUCT_OPTIONS,
  INDUSTRY_OPTIONS,
  TEAM_SIZE_OPTIONS,
  INQUIRY_TYPE_OPTIONS,
  type InquiryInput,
} from "@/lib/contact-schemas";
import { sendInquiry } from "@/lib/email";
import { verifyRecaptchaToken } from "@/lib/recaptcha";
import { SITE } from "@/lib/constants";

/** Force this route to run on the Node.js runtime (nodemailer needs Node APIs). */
export const runtime = "nodejs";

/** Resolve a form value (option `value`) to its human label for the email body. */
function labelFor(
  options: ReadonlyArray<{ value: string; label: string }>,
  value: string,
): string {
  return options.find((o) => o.value === value)?.label ?? value;
}

/** Build the email subject + fields from a validated input. */
function buildEmail(input: InquiryInput): {
  subject: string;
  fields: Record<string, string | undefined>;
} {
  switch (input.formType) {
    case "contact":
      return {
        subject: `New inquiry — ${input.name}`,
        fields: {
          "Form type": "General contact",
          Name: input.name,
          Email: input.email,
          Company: input.company,
          Message: input.message,
        },
      };

    case "demo":
      return {
        subject: `New demo request — ${labelFor(PRODUCT_OPTIONS, input.product)}`,
        fields: {
          "Form type": "Book a demo",
          Name: input.name,
          Email: input.email,
          Company: input.company,
          Phone: input.phone,
          Product: labelFor(PRODUCT_OPTIONS, input.product),
          "Use case": input.useCase,
          "Preferred time": input.preferredTime,
        },
      };

    case "sales":
      return {
        subject: `New sales inquiry — ${input.name} · ${labelFor(INQUIRY_TYPE_OPTIONS, input.inquiryType)}`,
        fields: {
          "Form type": "Talk to sales",
          Name: input.name,
          Email: input.email,
          Company: input.company,
          Role: input.role,
          Industry: labelFor(INDUSTRY_OPTIONS, input.industry),
          "Team size": labelFor(TEAM_SIZE_OPTIONS, input.teamSize),
          "Inquiry type": labelFor(INQUIRY_TYPE_OPTIONS, input.inquiryType),
          Message: input.message,
        },
      };
  }
}

export async function POST(request: Request) {
  // 1. Parse JSON safely.
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  // 2. Validate against the discriminated union.
  let parsed: InquiryInput;
  try {
    parsed = inquirySchema.parse(payload);
  } catch (err) {
    if (err instanceof ZodError) {
      const errors: Record<string, string[]> = {};
      for (const issue of err.issues) {
        const key = issue.path.join(".") || "_root";
        errors[key] = errors[key] ?? [];
        errors[key].push(issue.message);
      }
      return NextResponse.json({ ok: false, errors }, { status: 400 });
    }
    return NextResponse.json(
      { ok: false, error: "Validation failed" },
      { status: 400 },
    );
  }

  // 3. Honeypot — if the hidden `website` field has a value, treat as spam.
  //    Return 200 OK silently so the bot thinks it succeeded but no email is sent.
  if (parsed.website && parsed.website.trim().length > 0) {
    return NextResponse.json(
      { ok: true, message: "Thanks — we'll be in touch." },
      { status: 200 },
    );
  }

  // 4. reCAPTCHA v3 — verify token if RECAPTCHA_SECRET_KEY is configured.
  //    When env is not set, verifyRecaptchaToken() returns ok:true (skips).
  //    Low-score / missing-token / verify-failed → return 200 OK silently
  //    (bots don't learn they were blocked).
  const captcha = await verifyRecaptchaToken(parsed.recaptchaToken);
  if (!captcha.ok) {
    return NextResponse.json(
      { ok: true, message: "Thanks — we'll be in touch." },
      { status: 200 },
    );
  }

  // 5. Build email + send.
  const { subject, fields } = buildEmail(parsed);
  const result = await sendInquiry({
    subject,
    replyTo: parsed.email,
    fields,
  });

  if (!result.ok) {
    return NextResponse.json(
      { ok: false, error: `We couldn't send your message right now. Please email ${SITE.email} directly or try again in a moment.` },
      { status: 500 },
    );
  }

  return NextResponse.json(
    {
      ok: true,
      message:
        result.mode === "smtp"
          ? "Thanks — we've received your message and will reach out within one business day."
          : "Thanks — we've received your message. (Note: email delivery is in dev mode; check server logs.)",
    },
    { status: 200 },
  );
}
