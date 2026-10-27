import { useState } from 'react'
import { Mail, MapPin, Send } from 'lucide-react'
import { Section, SectionTitle, card } from './ui'
import { me, socials } from '../data'

const input = 'w-full rounded-xl border border-emerald-900/15 bg-white px-4 py-3 outline-none transition focus:border-emerald-500 dark:border-emerald-100/15 dark:bg-night'

export default function Contact() {
  const [f, setF] = useState({ name: '', mobile: '', email: '', subject: '', message: '' })
  const [err, setErr] = useState({})
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [failed, setFailed] = useState(false)
  const set = (k) => (e) => { setF({ ...f, [k]: e.target.value }); setSent(false) }

  const submit = async (e) => {
    e.preventDefault()
    const n = {}
    if (!f.name.trim()) n.name = 'Enter your name.'
    if (!/^\+?[\d\s-]{10,15}$/.test(f.mobile.trim())) n.mobile = 'Enter a valid mobile number (10 to 15 digits).'
    if (!/^\S+@\S+\.\S+$/.test(f.email)) n.email = 'Enter a valid email address.'
    if (!f.subject.trim()) n.subject = 'Enter a subject.'
    if (f.message.trim().length < 10) n.message = 'Write at least 10 characters.'
    setErr(n)
    if (Object.keys(n).length) return

    setSending(true)
    setFailed(false)
    try {
      const res = await fetch('https://formspree.io/f/xaeeekkr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...f, _subject: `Portfolio: ${f.subject}` }),
      })
      if (!res.ok) throw new Error('Request failed')
      setSent(true)
      setF({ name: '', mobile: '', email: '', subject: '', message: '' })
    } catch {
      setFailed(true)
    } finally {
      setSending(false)
    }
  }

  const field = (k, label, props = {}) => (
    <div>
      <label htmlFor={k} className="mb-1.5 block text-sm font-medium">{label}</label>
      {k === 'message'
        ? <textarea id={k} rows={5} value={f[k]} onChange={set(k)} className={input} aria-invalid={!!err[k]} />
        : <input id={k} value={f[k]} onChange={set(k)} className={input} aria-invalid={!!err[k]} {...props} />}
      {err[k] && <p className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">{err[k]}</p>}
    </div>
  )

  return (
    <Section id="contact">
      <SectionTitle title="Get in touch" text="Have a role, a project or a question? Send a message and I will reply by email." />
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="reveal space-y-5">
          <p className="flex items-center gap-3"><Mail className="text-emerald-600" size={20} /><a className="hover:underline" href={`mailto:${me.email}`}>{me.email}</a></p>
          <p className="flex items-center gap-3"><MapPin className="text-emerald-600" size={20} />{me.location}</p>
          <div className="flex gap-2 pt-2">
            {socials.map((s) => (
              <a key={s.name} href={s.href} target={s.name === 'Email' ? undefined : '_blank'} rel="noreferrer" aria-label={s.name}
                className="rounded-xl border border-emerald-900/15 p-3 transition hover:border-emerald-500 hover:text-emerald-600 dark:border-emerald-100/15">
                <s.icon size={20} />
              </a>
            ))}
          </div>
        </div>
        <form onSubmit={submit} noValidate className={`reveal ${card} space-y-4 p-6 sm:p-8`}>
          <div className="grid gap-4 sm:grid-cols-2">
            {field('name', 'Name', { autoComplete: 'name' })}
            {field('mobile', 'Mobile', { type: 'tel', inputMode: 'tel', autoComplete: 'tel' })}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {field('email', 'Email', { type: 'email', autoComplete: 'email' })}
            {field('subject', 'Subject')}
          </div>
          {field('message', 'Message')}
          <button type="submit" disabled={sending} className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-medium text-white transition hover:bg-emerald-500 disabled:opacity-60">
            <Send size={16} /> {sending ? 'Sending...' : 'Send message'}
          </button>
          {sent && <p className="text-sm text-emerald-700 dark:text-emerald-400" role="status">Message sent. I will reply by email soon.</p>}
          {failed && <p className="text-sm text-red-600 dark:text-red-400" role="alert">The message could not be sent. Email me directly at {me.email}.</p>}
        </form>
      </div>
    </Section>
  )
}
