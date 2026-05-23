import { cn } from "@/lib/utils";

/**
 * Subtle SVG noise overlay — adds film-grain texture to dark surfaces.
 */
export function NoiseOverlay({
  opacity = 0.04,
  className,
}: {
  opacity?: number;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 z-[1] mix-blend-overlay bg-noise",
        className
      )}
      style={{ opacity }}
    />
  );
}
