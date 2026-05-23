import { cn } from "@/lib/utils";

/**
 * Decorative animated grid background. Use absolute-positioned inside a
 * `relative` parent. Includes a radial fade to the page background.
 */
export function GridBackground({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "fine" | "dotted";
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0",
          variant === "fine" ? "bg-grid-fine" : "bg-grid"
        )}
        style={{
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 80%)",
        }}
      />
      {/* Glow orbs */}
      <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-brand-green/10 blur-[120px]" />
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-brand-blue/10 blur-[140px]" />
    </div>
  );
}
