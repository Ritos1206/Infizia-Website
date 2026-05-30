"use client";

import Script from "next/script";

/**
 * Loads Google reCAPTCHA v3 script when NEXT_PUBLIC_RECAPTCHA_SITE_KEY
 * is set in env. When the env var is missing, renders nothing — the
 * forms detect this at submit time and skip token generation.
 *
 * Used inside layouts of /contact, /contact/demo, /contact/sales.
 * Safe to mount on multiple pages — Next.js Script with strategy
 * "afterInteractive" deduplicates by `src` and `id`.
 */
export function RecaptchaScript() {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  if (!siteKey) return null;

  return (
    <Script
      id="recaptcha-v3"
      src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`}
      strategy="afterInteractive"
    />
  );
}
