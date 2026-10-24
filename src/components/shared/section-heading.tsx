import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  dark = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className={cn("eyebrow", dark ? "text-accent-soft" : "text-accent")}>{eyebrow}</p>
      ) : null}
      <h2 className={cn("display-lg mt-4", dark ? "text-paper" : "text-ink")}>{title}</h2>
      {subtitle ? (
        <p className={cn("mt-4 text-lg leading-relaxed", dark ? "text-paper/70" : "text-ink-soft")}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
