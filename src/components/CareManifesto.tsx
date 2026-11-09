import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { Compass, Ear, Heart } from 'lucide-react'
import { Blob, Mark, Reveal, SectionLabel, SplitTitle } from './shared'

export function CareManifesto() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section ref={ref} id="cuidado" className="snap-section on-dark relative overflow-hidden bg-forest text-bege-paper">
      <motion.div aria-hidden="true" style={reduce ? undefined : { y }} className="absolute inset-0">
        <Blob className="-left-24 top-10 w-80 opacity-25" color="#A8B8A0" />
        <Blob className="-right-20 bottom-0 w-96 opacity-20" color="#DCC5B5" variant={1} />
      </motion.div>
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal><SectionLabel dark icon={Heart}>Filosofia de cuidado</SectionLabel></Reveal>
          <SplitTitle delay={0.05} className="t-h2 font-medium leading-[1.08]" lines={['Cada infância', 'tem sua', <em key="e" className="italic text-sage">própria história.</em>]} />
          <Reveal delay={0.12}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-bege-paper/85 sm:text-lg">
              O cuidado pediátrico vai além de acompanhar medidas e etapas. É também <strong className="font-semibold text-bege-paper"><Mark color="bg-sage/35">ouvir, orientar e compreender</Mark></strong> as necessidades de cada criança e de sua família.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <ul className="mt-9 flex gap-7">
              {[[Ear, 'Ouvir'], [Compass, 'Orientar'], [Heart, 'Compreender']].map(([Icon, t]) => {
                const I = Icon as typeof Ear
                return (
                  <li key={t as string} className="flex flex-col items-center gap-2 text-xs tracking-wide text-bege-paper/80">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-sage/60 text-sage"><I size={22} strokeWidth={1.5} aria-hidden="true" /></span>
                    {t as string}
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </div>
        <div className="flex items-end lg:col-span-5">
          <Reveal delay={0.2}>
            <blockquote className="border-l border-sage pl-6 font-display text-2xl italic leading-snug text-sage-soft sm:text-3xl">
              Cuidar é acompanhar de perto, com atenção e respeito a cada fase.
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
