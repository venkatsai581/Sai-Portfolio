import { me } from '../data'
export default function Footer() {
  return (
    <footer className="border-t border-emerald-900/10 py-8 text-center text-sm text-ink/60 dark:border-emerald-100/10 dark:text-emerald-50/60">
      © {new Date().getFullYear()} {me.name}. All rights reserved. Built with React, Vite and Tailwind CSS.
    </footer>
  )
}
