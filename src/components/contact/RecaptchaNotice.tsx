/**
 * Inline reCAPTCHA disclosure badge with the official Google
 * reCAPTCHA logo. Replaces the hidden floating badge so the
 * disclosure appears next to the submit button instead.
 *
 * Logo source: Google's official gstatic CDN, which is the branding
 * asset Google itself recommends when integrating reCAPTCHA inline.
 * Required by Google's reCAPTCHA Terms when the default floating
 * badge is hidden via CSS (see globals.css `.grecaptcha-badge` rule).
 *
 * Renders nothing when reCAPTCHA isn't configured, so dev /
 * unconfigured deployments don't show a misleading "protected by
 * reCAPTCHA" notice when no protection is active.
 */
export function RecaptchaNotice() {
  if (!process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) return null;

  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] py-1 pl-1 pr-2.5"
      title="This form is protected by Google reCAPTCHA"
    >
      {/* Official Google reCAPTCHA logo from gstatic CDN.
          Plain <img> over next/image because gstatic isn't in
          remotePatterns and we don't need optimization for a 24px icon. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
        alt="Google reCAPTCHA"
        width={20}
        height={20}
        className="h-5 w-5 shrink-0"
      />
      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-faint">
        reCAPTCHA
      </span>
      <span className="text-white/20" aria-hidden="true">
        ·
      </span>
      <a
        href="https://policies.google.com/privacy"
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-secondary hover:text-brand-teal transition-colors"
      >
        Privacy
      </a>
      <span className="text-white/20" aria-hidden="true">
        ·
      </span>
      <a
        href="https://policies.google.com/terms"
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-secondary hover:text-brand-teal transition-colors"
      >
        Terms
      </a>
    </span>
  );
}
