import { cn } from "@/lib/utils";

export function Kicker({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("kicker", className)}>
      <span className="kicker-dot" />
      <span>{children}</span>
    </div>
  );
}
