import { useState } from 'react'
import { MapPin, Plus } from 'lucide-react'
import { faq } from '@/data/faq'
import { doctor, track } from '@/data/doctor'
import { cn } from '@/lib/utils'
import { iconMap } from '@/lib/icons'
import { Reveal, SectionLabel, SplitTitle, show } from './shared'

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)
  const items = faq.filter((f) => show(f.confirmed))
  if (!items.length) return null
  return (
    <section id="faq" className="snap-section bg-bege-paper">
      <div className="mx-auto grid max-w-6xl gap-[clamp(0.5rem,3svh,3rem)] px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal><SectionLabel icon={iconMap.help}>Perguntas frequentes</SectionLabel></Reveal>
          <SplitTitle delay={0.05} className="t-h2 whitespace-nowrap font-medium leading-[1.1] text-forest" lines={['Dúvidas comuns']} />
          <Reveal delay={0.2}>
            <div className="mt-3 flex items-start gap-3 text-forest/85 sm:mt-8">
              <MapPin size={20} strokeWidth={1.6} className="mt-0.5 shrink-0 text-sage-deep" aria-hidden="true" />
              <div>
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-sage-deep">Endereço</p>
                <p className="text-sm leading-relaxed sm:text-base">Av. Cassiano Ricardo, 1300, Loja 4 (Dentro da Amo Vacinas)</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Av. Cassiano Ricardo, 1300, Loja 4, ${doctor.city ?? 'São José dos Campos'}, ${doctor.state ?? 'SP'}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track('cta_maps', { source: 'faq' })}
                  className="mt-2 inline-flex min-h-11 items-center gap-2 rounded-full bg-forest px-5 text-sm font-semibold text-bege-paper transition-colors hover:bg-[#2a3a31]"
                >
                  Ver no Maps
                </a>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          {items.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q} className="border-b border-areia">
                <h3>
                  <button
                    type="button"
                    id={`faq-btn-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => { setOpen(isOpen ? null : i); if (!isOpen) track('faq_interacao', { item: String(i + 1) }) }}
                    className="flex min-h-12 w-full items-center justify-between gap-4 py-[clamp(0.5rem,1.8svh,0.875rem)] text-left font-display text-lg font-medium leading-snug text-forest sm:py-[clamp(0.9rem,2.2svh,1.25rem)] sm:text-2xl"
                  >
                    <span className="flex items-center gap-3">{(() => { const I = iconMap[f.icon] ?? iconMap.help; return <I size={20} strokeWidth={1.6} className="shrink-0 text-sage-deep" aria-hidden="true" /> })()}{f.q}</span>
                    <Plus aria-hidden="true" size={20} className={cn('shrink-0 text-sage-deep transition-transform duration-300', isOpen && 'rotate-45')} />
                  </button>
                </h3>
                <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} className={cn('grid transition-[grid-template-rows] duration-300 ease-out', isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
                  <div className="overflow-hidden"><div className="space-y-2 pb-6 text-base leading-relaxed text-forest/80">{f.a.split("\n").map((t, k) => <p key={k}>{t}</p>)}</div></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
