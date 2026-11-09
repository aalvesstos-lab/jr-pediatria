import { iconMap } from '@/lib/icons'
import { WhatsAppCTA, SectionLabel, SplitTitle, Reveal, IconBadge } from './shared'

const steps = [
  { t: 'Clique no botão Falar com a equipe.', icon: 'click' },
  { t: 'Envie sua mensagem para a equipe.', icon: 'send' },
  { t: 'Receba as orientações sobre disponibilidade e agendamento.', icon: 'calendar' },
]

export function AppointmentSection() {
  return (
    <section id="agendar" className="snap-section bg-sage-mist">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionLabel icon={iconMap.calendar}>Como agendar</SectionLabel>
        <SplitTitle className="max-w-2xl t-h2 font-medium leading-[1.1] text-forest" lines={['Seu próximo passo', <em key="e" className="italic text-sage-deep">começa com uma conversa.</em>]} />
        <ol className="mt-[clamp(1.5rem,5svh,3rem)] grid gap-5 sm:grid-cols-3 sm:gap-8">
          {steps.map((s, i) => (
            <li key={s.t} className="border-t border-forest/30 pt-4 sm:pt-5">
              <Reveal delay={i * 0.12} y={16} className="flex items-start gap-4 sm:block">
                <div className="flex shrink-0 items-center gap-3">
                  <IconBadge icon={iconMap[s.icon]} className="bg-bege-paper" />
                  <span className="font-display text-3xl italic text-sage-deep">{i + 1}</span>
                </div>
                <p className="text-base leading-relaxed text-forest sm:mt-4">{s.t}</p>
              </Reveal>
            </li>
          ))}
        </ol>
        <div className="mt-[clamp(1.5rem,5svh,3rem)]"><WhatsAppCTA source="agendar">Falar com a equipe</WhatsAppCTA></div>
      </div>
    </section>
  )
}
