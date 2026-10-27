import { ArrowDown, FileText } from 'lucide-react'
import { me, socials } from '../data'

const d = (s) => ({ animationDelay: `${s}s` })

export default function Hero() {
  return (
    <section id="home" className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-5 pb-16 pt-28 sm:px-8 md:grid-cols-[1.35fr_1fr]">
      <div>
        <p className="rise mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-700 dark:text-emerald-300" style={d(0)}>
          <span className="h-2 w-2 rounded-full bg-emerald-500" /> {me.role} at Stackly, {me.location.split(',')[0]}
        </p>
        <h1 className="rise font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl" style={d(0.1)}>
          {me.name}
        </h1>
        <p className="rise mt-6 max-w-xl text-lg text-ink/75 dark:text-emerald-50/75" style={d(0.25)}>{me.summary}</p>
        <div className="rise mt-8 flex flex-wrap items-center gap-3" style={d(0.4)}>
          <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-medium text-white transition hover:bg-emerald-500">
            View projects <ArrowDown size={16} />
          </a>
          <a href="/Resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-emerald-900/20 px-5 py-3 font-medium transition hover:bg-emerald-500/10 dark:border-emerald-100/20">
            <FileText size={16} /> Resume
          </a>
          <div className="ml-1 flex gap-1">
            {socials.map((s) => (
              <a key={s.name} href={s.href} target={s.name === 'Email' ? undefined : '_blank'} rel="noreferrer" aria-label={s.name} className="rounded-lg p-2.5 hover:bg-emerald-500/10">
                <s.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="rise relative mx-auto w-64 sm:w-72 md:w-full md:max-w-xs" style={d(0.3)}>
        <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border-2 border-emerald-500" />
        <img src="/profile.jpg" alt={`Portrait of ${me.name}`} className="relative aspect-[4/5] w-full rounded-2xl object-cover" />
      </div>
    </section>
  )
}
