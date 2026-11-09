import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { ArrowDown } from 'lucide-react'
import { doctor } from '@/data/doctor'
import { dur, ease, dist, stagger } from '@/lib/motion'
import { photoDra } from '@/assets/dra'
import { photoOffice } from '@/assets/office'
import { Blob, PhotoFrame, WhatsAppCTA } from './shared'

const lines = ['Cuidar da infância', 'é estar presente', 'em cada descoberta.']

export function HeroSection() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
    const bgY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 30])
  const rise = (i: number, d = 0.35) => reduce ? {} : { initial: { opacity: 0, y: dist.md }, animate: { opacity: 1, y: 0 }, transition: { duration: dur.base, ease, delay: d + i * stagger } }

  return (
    <section ref={ref} id="inicio" className="snap-section relative h-dvh max-h-dvh overflow-hidden bg-bege">
      <div aria-hidden="true" className="absolute inset-0">
        <img src={photoOffice} alt="" className="h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-bege/85 via-bege/65 to-bege/80 lg:bg-gradient-to-r lg:from-bege/95 lg:via-bege/60 lg:to-bege/10" />
      </div>
      <motion.div aria-hidden="true" style={reduce ? undefined : { y: bgY }} className="absolute inset-0" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
        <Blob className="-right-32 -top-24 w-[34rem] opacity-60" color="#C9D4C2" />
        <Blob className="-bottom-40 -left-28 w-[28rem] opacity-50" color="#DCC5B5" variant={1} />
      </motion.div>

      <div className="relative mx-auto flex min-h-0 w-full max-w-7xl flex-1 flex-col gap-3 px-5 sm:px-8 lg:gap-4">
        <div className="grid min-h-0 flex-1 grid-rows-[auto_minmax(0,1fr)] gap-3 sm:gap-5 lg:grid-cols-12 lg:grid-rows-1 lg:gap-8">
          <motion.div style={reduce ? undefined : { y: textY }} className="flex flex-col justify-center lg:col-span-7 lg:pr-10">
            <motion.p {...rise(0, 0.2)} className="mb-2 hidden text-[11px] font-semibold uppercase tracking-[0.3em] text-sage-deep sm:block lg:mb-5">
              Pediatria com ciência e afeto.
            </motion.p>
            <h1 className="t-hero text-[clamp(1.75rem,7.6vw,2.6rem)] font-medium leading-[1.04] text-forest sm:text-[clamp(2.2rem,6vw,3.4rem)]">
              {lines.map((l, i) => (
                <span key={l} className="block overflow-hidden pb-0.5">
                  <motion.span className="block" initial={reduce ? false : { y: '105%' }} animate={{ y: 0 }} transition={{ duration: dur.editorial, ease, delay: 0.35 + i * 0.12 }}>
                    {i === 2 ? <em className="italic text-sage-deep">{l}</em> : l}
                  </motion.span>
                </span>
              ))}
            </h1>
            <motion.p {...rise(4, 0.5)} className="mt-2 max-w-lg text-[13px] leading-snug text-forest/80 sm:mt-4 sm:text-lg sm:leading-relaxed lg:mt-6">
              Consultas individualizadas e sem pressa. Acompanhamento longitudinal, desde o pré-natal até a adolescência.
            </motion.p>
            <motion.div {...rise(6, 0.6)} className="mt-3 flex flex-row items-center gap-3 sm:mt-5 lg:mt-8">
              <WhatsAppCTA source="hero" event="cta_principal">Agendar consulta</WhatsAppCTA>
              <a href="#sobre" className="group hidden min-h-12 items-center justify-center gap-2 px-4 text-sm font-semibold text-forest sm:inline-flex">
                Conheça a Dra. Jade
                <ArrowDown size={16} className="transition-transform duration-200 group-hover:translate-y-1" aria-hidden="true" />
              </a>
            </motion.div>
          </motion.div>

          <div className="relative flex min-h-0 flex-col items-center lg:col-span-5">
            <motion.div
              initial={reduce ? false : { clipPath: 'inset(0 0 100% 0)', scale: 1.04 }}
              animate={{ clipPath: 'inset(0 0 0% 0)', scale: 1 }}
              transition={{ duration: 1.3, ease, delay: 0.5 }}
              className="flex min-h-0 w-full flex-1 justify-center"
            >
              <PhotoFrame real src={photoDra} position="50% 18%" alt="Retrato da Dra. Jade Rodrigues, pediatra" eager className="aspect-[650/724] h-full max-h-[46rem] max-w-full rounded-3xl rounded-tr-[4rem] shadow-2xl sm:rounded-tr-[5rem] lg:rounded-tr-[8rem]" />
            </motion.div>
            <div className="mt-3 w-fit max-w-full shrink-0 rounded-2xl bg-bege-paper/85 px-4 py-2 text-center shadow-sm backdrop-blur-sm sm:px-5 sm:py-2.5">
              <p className="font-display text-lg font-semibold leading-tight text-forest sm:text-2xl">Dra. Jade Rodrigues - Pediatra</p>
              <p className="mt-0.5 text-[9.5px] font-semibold uppercase tracking-[0.1em] text-sage-deep sm:mt-1 sm:text-xs sm:tracking-[0.14em] lg:whitespace-nowrap">Atendimento Particular em São José dos Campos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
