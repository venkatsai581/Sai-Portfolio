import { useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { Section, SectionTitle, card } from './ui'
import { projects } from '../data'

// Shows the screenshot if the file exists in public/projects, otherwise the icon header.
function Cover({ p }) {
  const [failed, setFailed] = useState(false)
  if (p.image && !failed) {
    return (
      <img
        src={p.image}
        alt={`${p.title} screenshot`}
        loading="lazy"
        onError={() => setFailed(true)}
        className="aspect-video w-full border-b border-emerald-900/10 object-cover object-top dark:border-emerald-100/10"
      />
    )
  }
  return (
    <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-600">
      <p.icon size={52} className="text-white/90 transition group-hover:scale-110" strokeWidth={1.5} />
    </div>
  )
}

export default function Projects() {
  return (
    <Section id="projects">
      <SectionTitle title="Projects" text="Apps you can open and click through, with the code on GitHub." />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.title} className={`reveal ${card} group flex flex-col overflow-hidden transition hover:-translate-y-1 hover:border-emerald-500/50`}>
            <Cover p={p} />
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-xl font-extrabold">{p.title}</h3>
              <p className="mt-2 flex-1 text-ink/70 dark:text-emerald-50/70">{p.text}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => <li key={t} className="rounded-md border border-emerald-500/30 px-2 py-0.5 text-xs font-medium">{t}</li>)}
              </ul>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-emerald-700 dark:text-emerald-400">
                <a href={p.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline">
                  Open live demo <ExternalLink size={14} />
                </a>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline">
                    View code <Github size={14} />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}