import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Infizia logo system.
 *
 * - "horizontal" (default) — compact mark + wordmark for header / inline use.
 *   Both elements are precision-cropped out of the brand PNG
 *   (`infizia-logo-light.png`) so the typography exactly matches the original
 *   brand asset (no synthetic SVG fallback). They sit on a shared baseline
 *   and use the same height so they read as one mark.
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
    return (
      <Image
        src="/brand/infizia-wordmark-light.png"
        alt="Infizia"
        width={340}
        height={62}
        priority={priority}
        className={cn("h-5 w-auto select-none", className)}
      />
    );
  }

  // ── horizontal ─────────────────────────────────────────────────────────────
  // Mark + wordmark side by side, both precision-cropped from the original
  // brand PNG (`infizia-logo-light.png`) so typeface, weight, and color split
  // (INF white · I blue · ZIA green) are pixel-perfect to the brand asset.
  //
  // Sizing is responsive: slightly more compact on mobile (where the header
  // is h-16 = 64px) and bumped on desktop (h-20 = 80px). Both elements share
  // the same height ratio so they always sit on a balanced optical baseline
  // — no synthetic SVG approximation, no padding mismatch.
  return (
    <span className={cn("inline-flex items-center gap-2 sm:gap-2.5", className)}>
      <Image
        src="/brand/infizia-mark-light.png"
        alt=""
        aria-hidden
        width={112}
        height={74}
        priority={priority}
        className="h-8 w-auto shrink-0 select-none sm:h-9 xl:h-10"
      />
      <Image
        src="/brand/infizia-wordmark-light.png"
        alt=""
        aria-hidden
        width={340}
        height={62}
        priority={priority}
        className="relative -top-[3px] h-5 w-auto select-none sm:h-6 xl:h-7"
      />
      <span className="sr-only">Infizia — Infinite Intelligence</span>
    </span>
  );
}
