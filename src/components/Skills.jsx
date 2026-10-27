import { Section, SectionTitle, card } from './ui'
import { skills } from '../data'

export default function Skills() {
  return (
    <Section id="skills">
      <SectionTitle title="Skills" text="The languages, frameworks and tools I work with day to day." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <article key={s.title} className={`reveal ${card} p-6 transition hover:-translate-y-1 hover:border-emerald-500/50 ${i === skills.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
            <s.icon className="text-emerald-600 dark:text-emerald-400" size={26} />
            <h3 className="mt-4 font-display text-xl font-extrabold">{s.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {s.items.map((it) => (
                <li key={it} className="rounded-lg bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-800 dark:text-emerald-200">{it}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
