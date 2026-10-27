import { Section, SectionTitle } from './ui'
import { me, timeline, certs } from '../data'

export default function About() {
  return (
    <Section id="about">
      <SectionTitle title="About me" />
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="reveal">
          <p className="max-w-prose text-lg leading-relaxed text-ink/80 dark:text-emerald-50/80">{me.about}</p>
          <h3 className="mt-10 font-display text-xl font-extrabold">Certifications</h3>
          <ul className="mt-4 space-y-2 text-ink/75 dark:text-emerald-50/75">
            {certs.map((c) => (
              <li key={c} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />{c}</li>
            ))}
          </ul>
        </div>
        <ol className="reveal relative space-y-6 border-l-2 border-emerald-500/40 pl-6">
          {timeline.map((t) => (
            <li key={t.title} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-emerald-500 ring-4 ring-paper dark:ring-night" />
              <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">{t.when}</p>
              <h3 className="font-display text-lg font-extrabold">{t.title}</h3>
              <p className="mt-1 text-ink/70 dark:text-emerald-50/70">{t.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
