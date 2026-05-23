import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Infizia logo system.
 *
 * - "horizontal" (default) — compact mark + wordmark for header / inline use.
 *   Uses inline SVG for crisp scaling and brand-color treatment at any size.
 *
 * - "stacked" — full original PNG (mark + INFIZIA + INFINITE INTELLIGENCE
 *   tagline) for footer and large brand-display contexts.
 *
 * - "wordmark" — wordmark only, useful in tight horizontal slots.
 */
export function InfiziaLogo({
  className,
  variant = "horizontal",
  priority = false,
}: {
  className?: string;
  variant?: "horizontal" | "stacked" | "wordmark";
  priority?: boolean;
}) {
  if (variant === "stacked") {
    return (
      <Image
        src="/brand/infizia-logo-light.png"
        alt="Infizia — Infinite Intelligence"
        width={500}
        height={500}
        priority={priority}
        className={cn("h-32 w-32 select-none", className)}
      />
    );
  }

  if (variant === "wordmark") {
    return <Wordmark className={cn("h-5 w-auto", className)} />;
  }

  // horizontal
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Mark className="h-7 w-7 shrink-0" />
      <Wordmark className="h-[18px] w-auto" />
      <span className="sr-only">Infizia — Infinite Intelligence</span>
    </span>
  );
}

/**
 * Brand mark — two interlocking diamond loops in brand green, echoing
 * the infinity-like geometric form of the original logo. Designed to
 * scale to small sizes without detail loss (so we drop the chip/brain
 * detail that only reads at large sizes — full PNG is used there).
 */
function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <g
        stroke="var(--color-brand-green)"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      >
        {/* Left diamond */}
        <path d="M3 16 L11 8 L19 16 L11 24 Z" />
        {/* Right diamond, overlapping the left to form an infinity-like loop */}
        <path d="M13 16 L21 8 L29 16 L21 24 Z" />
      </g>
      {/* Small core dot at the overlap, brand-teal */}
      <circle cx="16" cy="16" r="1.6" fill="var(--color-brand-teal)" />
    </svg>
  );
}

/**
 * Brand wordmark — INFIZIA with white INF, brand-blue I, brand-green ZIA.
 * Built from native text for perfect rendering at any size.
 */
function Wordmark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Infizia"
    >
      <text
        x="0"
        y="25"
        fontFamily="var(--font-display)"
        fontSize="28"
        fontWeight="700"
        letterSpacing="-0.01em"
      >
        <tspan fill="var(--color-text-primary)">INF</tspan>
        <tspan fill="var(--color-brand-blue)">I</tspan>
        <tspan fill="var(--color-brand-green)">ZIA</tspan>
      </text>
    </svg>
  );
}
