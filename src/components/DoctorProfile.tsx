import { Stethoscope } from 'lucide-react'
import { doctor } from '@/data/doctor'
import { Blob, Reveal, SectionLabel, SplitTitle, WhatsAppCTA } from './shared'

export function DoctorProfile() {
  const creds = (doctor.credentials ?? []).filter((c) => c.value)
  return (
    <section id="sobre" className="snap-section relative overflow-hidden bg-bege-paper">
      <Blob className="-right-24 top-1/3 w-[26rem] opacity-40" color="#E4EADF" />
      <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
        <div>
          <Reveal><SectionLabel icon={Stethoscope}>Conheça a Dra. Jade</SectionLabel></Reveal>
          <SplitTitle delay={0.05} className="t-h2 max-sm:!text-[clamp(1.25rem,4.3svh,1.9rem)] font-medium leading-[1.1] text-forest" lines={['Uma relação de confiança', 'começa com uma', <em key="e" className="italic text-sage-deep">boa conversa.</em>]} />
          <Reveal delay={0.1}>
            <p className="mt-3 text-[11px] font-semibold uppercase leading-snug tracking-[0.12em] min-[380px]:text-xs min-[380px]:tracking-[0.16em] sm:mt-4 sm:text-sm sm:tracking-[0.2em] text-sage-deep"><Stethoscope size={18} aria-hidden="true" className="mr-2 inline-block align-[-3px]" />
              {doctor.name} · {doctor.specialty}
              {doctor.crm && doctor.state ? ` · CRM-${doctor.state} ${doctor.crm}` : ''}
              {doctor.rqe ? ` · RQE ${doctor.rqe}` : ''}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-[clamp(0.75rem,2.6svh,1.75rem)] space-y-[clamp(0.5rem,1.6svh,1rem)] text-[13.5px] leading-[1.5] text-forest/85 max-[360px]:text-[12.5px] max-[360px]:leading-[1.4] sm:text-base sm:leading-relaxed">
              <p>Sou médica desde 2019, formada pelo Centro Universitário UniAtenas, em Paracatu (MG). Fiz residência em Pediatria no Hospital Regional de Taguatinga (DF), vinculada à Escola Superior de Ciências da Saúde (ESCS).</p>
              <p>Boa parte da minha trajetória foi construída na emergência pediátrica, onde aprendi a agir com calma e precisão nos momentos em que a família mais precisa. Hoje levo essa experiência para o consultório, com outro jeito de cuidar: consultas sem pressa, com tempo para ouvir, orientar e acompanhar cada criança de perto, desde a gestação até a adolescência.</p>
              <p>Atendo em consultório particular em São José dos Campos (SP).</p>
            </div>
          </Reveal>
          {creds.length > 0 && (
            <Reveal delay={0.3}>
              <dl className="mt-8 grid gap-4 border-t border-areia pt-6 sm:grid-cols-2">
                {creds.map((c) => (
                  <div key={c.label}><dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sage-deep">{c.label}</dt><dd className="mt-1 text-forest">{c.value}</dd></div>
                ))}
              </dl>
            </Reveal>
          )}
          <Reveal delay={0.35} className="mt-[clamp(0.75rem,2.6svh,2rem)]"><WhatsAppCTA source="sobre">Conversar com a equipe</WhatsAppCTA></Reveal>
        </div>
      </div>
    </section>
  )
}
