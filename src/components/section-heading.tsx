type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  invert?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto text-center items-center" : "text-left items-start";
  const eyebrowClasses = invert
    ? "border-white/15 bg-white/8 text-white"
    : "border-brand-red/20 bg-brand-red/10 text-brand-red";
  const titleClasses = invert ? "text-white" : "text-brand-charcoal";
  const descriptionClasses = invert ? "text-white/74" : "text-black/65";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      <span
        className={`inline-flex rounded-full border px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] ${eyebrowClasses}`}
      >
        {eyebrow}
      </span>
      <h2 className={`text-3xl font-extrabold tracking-tight md:text-5xl ${titleClasses}`}>{title}</h2>
      <p className={`text-base leading-8 md:text-lg ${descriptionClasses}`}>{description}</p>
    </div>
  );
}
