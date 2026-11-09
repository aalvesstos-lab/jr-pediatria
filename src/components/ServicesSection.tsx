import { services } from '@/data/services'
import { iconMap } from '@/lib/icons'
import { IconBadge, Reveal, SectionLabel, SplitTitle, show } from './shared'

export function ServicesSection() {
  const list = services.filter((s) => show(s.confirmed))
  if (!list.length) return null
  return (
    <section id="atendimento" className="snap-section bg-bege">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-[clamp(0.75rem,3svh,2rem)] lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal><SectionLabel icon={iconMap.message}>Atendimento pediátrico</SectionLabel></Reveal>
            <SplitTitle delay={0.05} className="t-h2 max-sm:!text-[clamp(1.5rem,5.2svh,2rem)] font-medium leading-[1.1] text-forest" lines={['Um cuidado', 'pensado para', 'cada família.']} />
          </div>
          <ul className="lg:col-span-8">
            {list.map((s, i) => (
              <li key={s.id} className="border-t border-areia-deep/50 last:border-b">
                <Reveal delay={i * 0.06}>
                  <div className="grid grid-cols-[2.5rem_1fr] items-start gap-3 px-1 py-[clamp(0.5rem,1.9svh,1rem)] sm:grid-cols-[5rem_1fr] sm:gap-4 sm:px-4 sm:py-[clamp(1.1rem,3.4svh,2.5rem)]">
                    <IconBadge icon={iconMap[s.icon] ?? iconMap.stethoscope} className="h-10 w-10 bg-bege-paper sm:h-14 sm:w-14" size={24} />
                    <div>
                      <h3 className="font-display text-xl font-medium leading-tight text-forest sm:text-3xl">{s.name}</h3>
                      <p className="mt-1 max-w-lg text-sm leading-snug sm:mt-2 sm:text-base sm:leading-relaxed text-forest/75">{s.description}</p>
                      {s.note && <p className="mt-2 text-sm text-forest/60">{s.note}</p>}
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
