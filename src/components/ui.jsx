export const Section = ({ id, children, className = '' }) => (
  <section id={id} className={`mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 ${className}`}>{children}</section>
)
export const SectionTitle = ({ title, text }) => (
  <div className="reveal mb-10 max-w-2xl">
    <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
    {text && <p className="mt-3 text-ink/70 dark:text-emerald-50/70">{text}</p>}
  </div>
)
export const card = 'rounded-2xl border border-emerald-900/10 bg-white/70 dark:border-emerald-100/10 dark:bg-pine'
