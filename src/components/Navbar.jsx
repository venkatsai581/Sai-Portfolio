import { useEffect, useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { nav } from '../data'

export default function Navbar({ dark, toggle }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    nav.forEach((n) => { const el = document.getElementById(n.id); el && io.observe(el) })
    return () => io.disconnect()
  }, [])

  const link = (n) => (
    <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}
      className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${active === n.id ? 'text-emerald-600 dark:text-emerald-400' : 'text-ink/70 hover:text-ink dark:text-emerald-50/70 dark:hover:text-white'}`}>
      {n.label}
    </a>
  )

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-emerald-900/10 bg-paper/80 backdrop-blur dark:border-emerald-100/10 dark:bg-night/80">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        <a href="#home" className="font-display text-lg font-extrabold">Sai Krishna<span className="text-emerald-500">.</span></a>
        <div className="hidden items-center gap-1 md:flex">{nav.map(link)}</div>
        <div className="flex items-center gap-1">
          <button onClick={toggle} aria-label="Toggle light and dark theme" className="rounded-lg p-2 hover:bg-emerald-500/10">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open} className="rounded-lg p-2 hover:bg-emerald-500/10 md:hidden">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      {open && <div className="flex flex-col border-t border-emerald-900/10 px-3 py-2 dark:border-emerald-100/10 md:hidden">{nav.map(link)}</div>}
    </header>
  )
}
