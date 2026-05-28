import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

/**
 * Red Hat section header — kicker + title + lede.
 *
 * Distinct from the standard `SectionHeader` because the kicker is a
 * red-themed pill (with the redhat dot) and the title can include a
 * "redhat-tinted" highlight phrase via the `highlight` prop.
 */
export function RedHatSectionHeader({
  kicker,
  title,
  highlight,
  lede,
  align = "left",
}: {
  kicker: string;
  title: string;
  /** Phrase rendered inside the title with redhat color. Optional. */
  highlight?: string;
  lede?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
      )}
    >
      <Reveal>
        <div className="inline-flex items-center gap-2 rounded-full border border-redhat/30 bg-redhat/10 px-3 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-redhat shadow-[0_0_8px_rgba(238,0,0,0.7)]" />
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white">
            {kicker}
          </span>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-[3.5rem]">
          {title}
          {highlight && (
            <>
              {" "}
              <span className="text-redhat">{highlight}</span>
            </>
          )}
        </h2>
      </Reveal>

      {lede && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "max-w-2xl text-base leading-relaxed text-text-muted md:text-lg",
              align === "center" && "mx-auto",
            )}
          >
            {lede}
          </p>
        </Reveal>
      )}
    </div>
  );
}
