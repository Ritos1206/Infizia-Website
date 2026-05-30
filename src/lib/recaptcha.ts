/**
 * reCAPTCHA v3 helpers — client + server.
 *
 * v3 is invisible (no checkbox). Client calls grecaptcha.execute()
 * to get a one-time token; server verifies the token with Google
 * and gets back a score 0.0–1.0 (1.0 = very likely human, 0.0 = bot).
 *
 * Env-driven so the system works in 4 modes:
 *   1. Both keys set      → full verification, bot scores enforced
 *   2. Only secret set    → server skips (can't verify a token without a site key)
 *   3. Only site set      → unusual; client generates token, server skips
 *   4. Neither set        → client + server both skip → no protection
 *
 * Threshold default: 0.5 (Google's recommended midpoint). Submissions
 * below the threshold are silently dropped (returned 200 OK so bots
 * don't learn they were blocked).
 */

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string },
      ) => Promise<string>;
    };
  }
}

/** Server-side: verify a token with Google's siteverify endpoint. */
export async function verifyRecaptchaToken(token: string | undefined | null): Promise<{
  ok: boolean;
  score?: number;
  reason?: string;
}> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  // No secret configured → skip verification (mode 4 above).
  if (!secret) {
    return { ok: true, reason: "recaptcha-disabled" };
  }

  // No token submitted but secret is set → reject as bot.
  if (!token) {
    return { ok: false, reason: "missing-token" };
  }

  try {
    const params = new URLSearchParams({ secret, response: token });
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });
    const json = (await res.json()) as {
      success: boolean;
      score?: number;
      action?: string;
      "error-codes"?: string[];
    };

    if (!json.success) {
      return {
        ok: false,
        reason: `verify-failed:${(json["error-codes"] ?? []).join(",")}`,
      };
    }

    const threshold = Number.parseFloat(
      process.env.RECAPTCHA_THRESHOLD ?? "0.5",
    );
    const score = json.score ?? 0;

    if (score < threshold) {
      return { ok: false, score, reason: "low-score" };
    }

    return { ok: true, score };
  } catch (err) {
    const message = err instanceof Error ? err.message : "verify-error";
    return { ok: false, reason: `verify-error:${message}` };
  }
}

/** Client-side: get a fresh reCAPTCHA token for a given action. */
export async function getRecaptchaToken(
  action: string,
): Promise<string | null> {
  if (typeof window === "undefined") return null;

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  if (!siteKey) return null;
  if (!window.grecaptcha) return null;

  return new Promise((resolve) => {
    window.grecaptcha!.ready(async () => {
      try {
        const token = await window.grecaptcha!.execute(siteKey, { action });
        resolve(token);
      } catch {
        resolve(null);
      }
    });
  });
}

/** Public site key getter — used by the script loader component. */
export function getRecaptchaSiteKey(): string | undefined {
  return process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
}
