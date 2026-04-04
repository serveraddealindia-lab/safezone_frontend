export default function PageHero({ title, subtitle, kicker }) {
  return (
    <section className="relative bg-[var(--sz-surface)]">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--sz-surface-2)] to-white" />
      <div className="relative sz-container sz-section">
        {kicker ? <div className="sz-kicker">{kicker}</div> : null}
        <h1 className="mt-2 text-[32px] leading-[1.08] font-extrabold tracking-tight text-[var(--sz-ink)]">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[var(--sz-ink-muted)]">
            {subtitle}
          </p>
        ) : null}
        <div className="mt-8 h-px w-full bg-[var(--sz-border)]" />
      </div>
    </section>
  );
}

