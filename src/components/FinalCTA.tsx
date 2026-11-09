import { Footer } from './Footer'
import { Blob, Reveal, SplitTitle, WhatsAppCTA } from './shared'

export function FinalCTA() {
  return (
    <section id="contato" className="snap-section on-dark relative overflow-hidden bg-forest text-bege-paper !pb-0">
      <Blob className="-right-20 -top-20 w-[26rem] opacity-20" color="#A8B8A0" />
      <div className="relative mx-auto grid w-full max-w-6xl flex-1 items-center gap-4 px-5 py-1 sm:px-8 lg:grid-cols-12 lg:gap-12">
        <div className="text-center lg:col-span-12">
          <SplitTitle className="t-h2 max-sm:!text-[clamp(1.5rem,5.4svh,2rem)] mx-auto max-w-3xl text-balance font-medium leading-[1.1]" lines={['Vamos conversar sobre o cuidado', <em key="e" className="italic text-sage">do seu filho?</em>]} />
          <Reveal delay={0.08}><p className="mx-auto mt-2 max-w-xl text-balance sm:mt-4 text-sm sm:text-base leading-relaxed text-bege-paper/85 sm:text-lg">Entre em contato para conhecer o atendimento e receber orientações sobre o agendamento.</p></Reveal>
          <Reveal delay={0.15} className="mt-3 flex justify-center sm:mt-7"><WhatsAppCTA source="cta-final" variant="sage" event="cta_final" pulse className="min-h-12 px-8 sm:min-h-14 sm:px-9 text-base">Agendar pelo WhatsApp</WhatsAppCTA></Reveal>
        </div>
      </div>
      <Footer embedded />
    </section>
  )
}
