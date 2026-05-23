import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";
import { Kicker } from "@/components/ui/Kicker";

/**
 * Standard section header with optional kicker, title (gradient-able), and lede.
 */
export function SectionHeader({
  kicker,
  title,
  lede,
  align = "left",
  gradient = false,
  className,
}: {
  kicker?: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  gradient?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {kicker && (
        <Reveal>
          <Kicker>{kicker}</Kicker>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-[3.5rem]",
            gradient ? "text-gradient-soft" : "text-white"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {lede && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "max-w-2xl text-base leading-relaxed text-text-muted md:text-lg",
              align === "center" && "mx-auto"
            )}
          >
            {lede}
          </p>
        </Reveal>
      )}
    </div>
  );
}
