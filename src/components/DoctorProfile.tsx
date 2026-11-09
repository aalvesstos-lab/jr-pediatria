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
          <SplitTitle delay={0.05} className="t-h2 font-medium leading-[1.1] text-forest" lines={['Uma relação de confiança', 'começa com uma', <em key="e" className="italic text-sage-deep">boa conversa.</em>]} />
          <Reveal delay={0.1}>
            <p className="mt-4 text-sm font-semibold uppercase leading-relaxed tracking-[0.2em] text-sage-deep"><Stethoscope size={18} aria-hidden="true" className="mr-2 inline-block align-[-3px]" />
              {doctor.name} · {doctor.specialty}
              {doctor.crm && doctor.state ? ` · CRM-${doctor.state} ${doctor.crm}` : ''}
              {doctor.rqe ? ` · RQE ${doctor.rqe}` : ''}
            </p>
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
          <Reveal delay={0.35} className="mt-8"><WhatsAppCTA source="sobre">Conversar com a equipe</WhatsAppCTA></Reveal>
        </div>
      </div>
    </section>
  )
}
