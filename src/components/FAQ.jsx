import { useState } from 'react'
import { ChevronDown, Star } from 'lucide-react'
import { Section, SectionTitle, card } from './ui'
import { faqs } from '../data'

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <Section id="faq">
      <SectionTitle title="FAQs" text="Quick answers about my work, experience and availability." />
      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i
          return (
            <div key={f.q} className="reveal">
            <div className={`${card} overflow-hidden transition-colors ${isOpen ? '!border-emerald-500' : ''}`}>
              <h3>
                <button
                  id={`faq-q-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center gap-3 px-5 py-4 text-left font-medium"
                >
                  <span className="flex w-4 shrink-0 justify-center">
                    {isOpen && <Star size={16} className="fill-emerald-500 text-emerald-500" />}
                  </span>
                  <span className="flex-1">{f.q}</span>
                  <ChevronDown size={18} className={`shrink-0 transition-transform motion-reduce:transition-none ${isOpen ? 'rotate-180' : ''}`} />
                </button>
              </h3>
              <div
                id={`faq-a-${i}`}
                role="region"
                aria-labelledby={`faq-q-${i}`}
                aria-hidden={!isOpen}
                className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
              >
                <div className="overflow-hidden">
                  <div className="whitespace-pre-line bg-emerald-500/10 px-5 py-5 leading-relaxed text-ink/80 dark:text-emerald-50/80">
                    {f.a}
                    {f.cta && (
                      <a
                        href="#contact"
                        tabIndex={isOpen ? 0 : -1}
                        className="mt-4 block rounded-xl bg-emerald-600 px-5 py-3 text-center font-medium text-white transition hover:bg-emerald-500"
                      >
                        Click here
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
