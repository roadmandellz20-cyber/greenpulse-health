export default function SectionHeading({
  eyebrow,
  title,
  desc,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  align?: "left" | "center";
}) {
  const a = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${a}`}>
      {eyebrow ? (
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          {eyebrow}
        </div>
      ) : null}

      <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-white">
        {title}
      </h2>

      {desc ? (
        <p className="mt-3 text-white/70 leading-relaxed">{desc}</p>
      ) : null}
    </div>
  );
}
