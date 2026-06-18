/**
 * Email helper — wraps nodemailer for Zoho SMTP.
 *
 * Reads SMTP config from env. When env is not configured (dev mode /
 * before client wires Zoho), the helper logs the submission to the
 * server console and resolves successfully — so the UI works while
 * the Zoho config is still pending.
 *
 * Required env (production):
 *   SMTP_HOST          smtp.zoho.in (or smtp.zoho.com depending on the Zoho region)
 *   SMTP_PORT          465 (SSL) or 587 (STARTTLS)
 *   SMTP_SECURE        true for 465, false for 587
 *   SMTP_USER          The Zoho mailbox sending the mail (e.g. sales@<your-domain>)
 *   SMTP_PASSWORD      Zoho app-specific password (NOT the account password —
 *                      generate from Zoho Mail → Settings → Security → App Passwords)
 *   MAIL_FROM          "Infizia Website <sales@<your-domain>>" (display name + address)
 *   MAIL_TO            Where contact submissions land (typically same as SMTP_USER)
 *
 * Optional env:
 *   MAIL_REPLY_TO      Falls back to the submitter's email if unset
 *
 * The 'use server' directive is NOT used here because this module is
 * imported by an API route (server-side by default in Next.js App Router).
 */

import nodemailer from "nodemailer";
import { SITE } from "@/lib/constants";

type SmtpConfig = {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  password: string;
  from: string;
  to: string;
};

/** Read + validate SMTP config from env. Returns null if any required var is missing. */
function readSmtpConfig(): SmtpConfig | null {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_PASSWORD;
  const from = process.env.MAIL_FROM;
  const to = process.env.MAIL_TO;

  if (!host || !port || !user || !password || !from || !to) {
    return null;
  }

  const portNumber = Number.parseInt(port, 10);
  if (!Number.isFinite(portNumber)) return null;

  // Default to true if SMTP_SECURE is not set (most providers use 465+SSL)
  const secure =
    process.env.SMTP_SECURE === "false"
      ? false
      : process.env.SMTP_SECURE === "true"
        ? true
        : portNumber === 465;

  return { host, port: portNumber, secure, user, password, from, to };
}

/** Render a plain-text email body from a key/value record. */
function renderText(record: Record<string, string | undefined>): string {
  return Object.entries(record)
    .filter(([, v]) => v && v.trim().length > 0)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
}

/** Render a basic HTML email body from a key/value record. */
function renderHtml(
  subject: string,
  record: Record<string, string | undefined>,
): string {
  const rows = Object.entries(record)
    .filter(([, v]) => v && v.trim().length > 0)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;color:#64748B;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;vertical-align:top;white-space:nowrap;">${escapeHtml(
          k,
        )}</td><td style="padding:6px 12px;color:#0F172A;font-size:14px;line-height:1.5;">${escapeHtml(
          v ?? "",
        )}</td></tr>`,
    )
    .join("");

  return `<!doctype html><html><body style="margin:0;padding:0;background:#F8FAFC;font-family:Inter,system-ui,-apple-system,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#F8FAFC;padding:24px 0;">
    <tr><td align="center">
      <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background:#FFFFFF;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.06);">
        <tr><td style="padding:24px 24px 8px 24px;border-bottom:1px solid #E2E8F0;">
          <p style="margin:0;font-size:11px;color:#64748B;text-transform:uppercase;letter-spacing:0.16em;">Infizia · website inquiry</p>
          <h1 style="margin:8px 0 0 0;font-size:18px;color:#0F172A;font-weight:600;">${escapeHtml(subject)}</h1>
        </td></tr>
        <tr><td style="padding:8px 12px 16px 12px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0">${rows}</table>
        </td></tr>
        <tr><td style="padding:16px 24px;border-top:1px solid #E2E8F0;background:#F8FAFC;">
          <p style="margin:0;font-size:11px;color:#94A3B8;">Submitted via the Infizia website — ${escapeHtml(SITE.domain)}</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export type SendInquiryArgs = {
  /** Subject line of the email (e.g. "New demo request — EyeCON") */
  subject: string;
  /** Submitter's email — used as Reply-To so sales can reply directly */
  replyTo: string;
  /** Form fields to render in the email body */
  fields: Record<string, string | undefined>;
};

export type SendInquiryResult =
  | { ok: true; mode: "smtp" | "logged" }
  | { ok: false; error: string };

/**
 * Send a contact inquiry. When SMTP env is configured, sends via Zoho.
 * When env is missing, logs the submission to the server console and
 * still returns ok: true so the UI flow works in dev mode.
 */
export async function sendInquiry({
  subject,
  replyTo,
  fields,
}: SendInquiryArgs): Promise<SendInquiryResult> {
  const cfg = readSmtpConfig();

  // Dev / unconfigured mode — log + report success.
  if (!cfg) {
    console.log(
      "[contact:dev] SMTP not configured — logging inquiry instead.\n" +
        `subject: ${subject}\n` +
        `replyTo: ${replyTo}\n` +
        `fields:\n${renderText(fields)}\n`,
    );
    return { ok: true, mode: "logged" };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: cfg.host,
      port: cfg.port,
      secure: cfg.secure,
      auth: { user: cfg.user, pass: cfg.password },
    });

    await transporter.sendMail({
      from: cfg.from,
      to: cfg.to,
      replyTo: process.env.MAIL_REPLY_TO ?? replyTo,
      subject,
      text: renderText(fields),
      html: renderHtml(subject, fields),
    });

    return { ok: true, mode: "smtp" };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown SMTP error";
    console.error("[contact] SMTP send failed:", message);
    return { ok: false, error: message };
  }
}
