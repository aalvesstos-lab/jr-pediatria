import { type ReactNode, useEffect, useState } from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react'
import { useActiveSection, sectionIds } from '@/hooks/useActiveSection'
import { MessageCircle, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { dur, ease, dist } from '@/lib/motion'
import { doctor, track, whatsappLink } from '@/data/doctor'

export const show = (confirmed: boolean) => confirmed || doctor.previewMode

export function Reveal({ children, delay = 0, y = dist.md, x = 0, className }: { children: ReactNode; delay?: number; y?: number; x?: number; className?: string }) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: dur.base, ease, delay }}
    >
      {children}
    </motion.div>
  )
}

/** Foto da Dra. Jade; sem arquivo, mostra um placeholder discreto e facilmente substituível. */
export function PhotoFrame({ src, alt, position, className, eager, variant = 0, real }: { real?: boolean; src?: string; alt: string; position?: string; className?: string; eager?: boolean; variant?: 0 | 1 }) {
  return (
    <div className={cn('relative overflow-hidden bg-sage-soft', className)}>
      {src ? (
        <><img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          style={{ objectPosition: position }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        {doctor.previewMode && doctor.photos.reference && !real && (
          <span className="absolute bottom-3 left-3 right-3 rounded bg-bege-paper/85 px-2 py-1 text-center text-[10px] tracking-wide text-forest/80">Foto de referência · trocar pela foto da Dra. Jade</span>
        )}</>
      ) : (
        <div role="img" aria-label="Ilustração de referência no lugar da fotografia profissional da Dra. Jade" className="absolute inset-0">
          <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMax slice" className="h-full w-full" aria-hidden="true">
            <rect width="400" height="500" fill="#C9D4C2" />
            <circle cx={variant === 1 ? 90 : 320} cy={variant === 1 ? 120 : 100} r="130" fill="#DCC5B5" opacity=".6" />
            <circle cx={variant === 1 ? 330 : 70} cy="330" r="70" fill="#A8B8A0" opacity=".45" />
            {/* cabelo (atrás) */}
            <path d="M118 215c0-62 36-98 82-98s82 36 82 98c0 52-6 100 14 140H104c20-40 14-88 14-140z" fill="#5A3E31" />
            {/* jaleco */}
            <path d="M10 500c0-92 62-160 138-180l52 40 52-40c76 20 138 88 138 180z" fill="#FBF8F2" />
            <path d="M148 320l52 40 52-40 24 10-62 96-14 74h-0l-14-74-62-96z" fill="#EDE6D8" />
            {/* camisa em V */}
            <path d="M166 326l34 64 34-64-34 22z" fill="#5E7262" />
            {/* pescoço */}
            <path d="M178 262h44v58c-12 14-32 14-44 0z" fill="#D9A98C" />
            <path d="M178 300c14 12 30 12 44 0v14c-14 14-30 14-44 0z" fill="#C99677" opacity=".7" />
            {/* rosto */}
            <ellipse cx="200" cy="205" rx="52" ry="63" fill="#E9BEA3" />
            {/* franja lateral */}
            <path d="M148 205c-2-50 24-82 66-80 30 2 40 18 40 18-30 2-62 14-78 46-6 12-6 30-6 30-14-4-20-8-22-14z" fill="#6B4A3A" />
            <path d="M252 190c4 8 4 20 2 30 8-6 14-16 12-28-2-12-8-18-14-20z" fill="#6B4A3A" />
            {/* estetoscópio */}
            <path d="M166 326c-10 50 4 96 44 104" fill="none" stroke="#35483D" strokeWidth="5" strokeLinecap="round" />
            <path d="M234 326c8 40 0 74-24 104" fill="none" stroke="#35483D" strokeWidth="5" strokeLinecap="round" />
            <circle cx="210" cy="436" r="13" fill="#A8B8A0" stroke="#35483D" strokeWidth="4" />
            {/* bolso */}
            <rect x="262" y="410" width="46" height="52" rx="4" fill="none" stroke="#DDD4C2" strokeWidth="3" />
          </svg>
          {doctor.previewMode && (
            <span className="absolute bottom-3 left-3 right-3 rounded bg-bege-paper/85 px-2 py-1 text-center text-[10px] tracking-wide text-forest/80">
              Ilustração de referência · trocar pela foto da Dra. Jade
            </span>
          )}
        </div>
      )}
    </div>
  )
}

export function Blob({ className, color = '#A8B8A0', variant = 0 }: { className?: string; color?: string; variant?: 0 | 1 }) {
  const reduce = useReducedMotion()
  const d = variant === 0
    ? 'M421 305Q383 391 292 421T123 380Q36 311 54 216T146 65Q241 14 334 63T455 207Q459 219 421 305Z'
    : 'M400 280Q380 380 270 410T100 360Q30 290 60 190T170 60Q270 20 350 90T420 210Q420 180 400 280Z'
  return (
    <motion.svg
      viewBox="0 0 500 480"
      aria-hidden="true"
      className={cn('pointer-events-none absolute', className)}
      animate={reduce ? undefined : { rotate: [0, 4, -3, 0], scale: [1, 1.03, 0.99, 1] }}
      transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
    >
      <path d={d} fill={color} />
    </motion.svg>
  )
}

export function WhatsAppCTA({ source, children, variant = 'forest', className, event = 'cta_whatsapp', pulse }: { source: string; children: ReactNode; variant?: 'forest' | 'sage' | 'light' | 'ghost'; className?: string; event?: string; pulse?: boolean }) {
  const reduce = useReducedMotion()
  const styles = {
    forest: 'bg-forest text-bege-paper hover:bg-[#2a3a31]',
    sage: 'bg-sage text-forest hover:bg-sage-soft',
    light: 'bg-bege-paper text-forest hover:bg-white',
    ghost: 'border border-forest/40 text-forest hover:bg-forest/5',
  }[variant]
  return (
    <span className="relative inline-flex">
      {pulse && !reduce && (
        <motion.span aria-hidden="true" className="absolute inset-0 rounded-full bg-sage" animate={{ scale: [1, 1.18], opacity: [0.45, 0] }} transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }} />
      )}
    <a
      href={whatsappLink(source)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track(event, { source })}
      className={cn('relative inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold tracking-wide transition-colors duration-200', styles, className)}
    >
      <MessageCircle size={18} aria-hidden="true" />
      {children}
    </a>
    </span>
  )
}

export function FloatingWhatsApp({ visible }: { visible: boolean }) {
  return (
    <a
      href={whatsappLink('flutuante')}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track('cta_whatsapp_flutuante', { source: 'flutuante' })}
      aria-label="Falar com a equipe da Dra. Jade pelo WhatsApp"
      className={cn(
        'fixed bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-forest text-bege-paper shadow-md transition-all duration-300 hover:bg-[#2a3a31] sm:bottom-6 sm:right-6',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0',
      )}
    >
      <MessageCircle size={22} aria-hidden="true" />
    </a>
  )
}

export function SectionLabel({ children, dark, icon: Icon }: { children: ReactNode; dark?: boolean; icon?: LucideIcon }) {
  return (
    <p className={cn('mb-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em]', dark ? 'text-sage' : 'text-sage-deep')}>
      {Icon && <Icon size={15} strokeWidth={1.75} aria-hidden="true" />}
      {children}
    </p>
  )
}

export function IconBadge({ icon: Icon, size = 22, className }: { icon: LucideIcon; size?: number; className?: string }) {
  return (
    <span className={cn('flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage-mist text-sage-deep', className)}>
      <Icon size={size} strokeWidth={1.6} aria-hidden="true" />
    </span>
  )
}

export function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" />
    </svg>
  )
}

/** Título revelado linha a linha por máscara. O contêiner é observado; as linhas herdam o estado. */
export function SplitTitle({ lines, className, delay = 0 }: { lines: ReactNode[]; className?: string; delay?: number }) {
  const reduce = useReducedMotion()
  if (reduce) return <h2 className={className}>{lines.map((l, i) => <span key={i} className="block">{l}</span>)}</h2>
  return (
    <motion.h2 className={className} initial="hidden" whileInView="show" viewport={{ once: true, margin: '0px 0px -10% 0px' }}>
      {lines.map((l, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className="block"
            variants={{ hidden: { y: '108%' }, show: { y: 0, transition: { duration: dur.editorial, ease, delay: delay + i * 0.12 } } }}
          >
            {l}
          </motion.span>
        </span>
      ))}
    </motion.h2>
  )
}

/** Destaque tipográfico: sublinhado desenhado ao entrar na tela. */
export function Mark({ children, color = 'bg-sage/50' }: { children: ReactNode; color?: string }) {
  const reduce = useReducedMotion()
  if (reduce) return <span className="relative inline-block"><span aria-hidden="true" className={cn('absolute inset-x-0 bottom-[0.06em] h-[0.32em]', color)} /><span className="relative">{children}</span></span>
  return (
    <motion.span className="relative inline-block" initial="hidden" whileInView="show" viewport={{ once: true }}>
      <motion.span
        aria-hidden="true"
        className={cn('absolute inset-x-0 bottom-[0.06em] h-[0.32em] origin-left', color)}
        variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 1, ease, delay: 0.5 } } }}
      />
      <span className="relative">{children}</span>
    </motion.span>
  )
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.3 })
  return <motion.div aria-hidden="true" style={{ scaleX }} className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-sage-deep" />
}

const dotLabels: Record<string, string> = { inicio: 'Início', cuidado: 'Cuidado', sobre: 'Sobre', atendimento: 'Atendimento', agendar: 'Como agendar', localizacao: 'Localização', faq: 'Perguntas', contato: 'Contato' }

export function SectionDots() {
  const active = useActiveSection()
  const [ids, setIds] = useState<string[]>([])
  useEffect(() => { setIds(sectionIds.filter((id) => document.getElementById(id))) }, [])
  // Inverte o contraste conforme a seção: seções escuras recebem a barra clara e vice-versa.
  const onDark = active === 'cuidado' || active === 'contato'
  return (
    <nav
      aria-label="Seções da página"
      className={cn(
        'fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-0.5 rounded-full p-2 shadow-lg ring-1 transition-colors duration-500 lg:flex',
        onDark ? 'bg-bege-paper ring-white/50' : 'bg-forest ring-black/10',
      )}
    >
      {ids.map((id) => {
        const current = active === id
        return (
          <a key={id} href={`#${id}`} aria-label={dotLabels[id]} title={dotLabels[id]} aria-current={current ? 'true' : undefined} className="group relative flex h-6 w-6 items-center justify-center rounded-full outline-none">
            <span
              className={cn(
                'block rounded-full transition-all duration-300',
                current
                  ? onDark ? 'h-4 w-4 bg-forest ring-[3px] ring-sage-deep' : 'h-4 w-4 bg-bege-paper ring-[3px] ring-sage'
                  : onDark ? 'h-2 w-2 bg-forest/40 group-hover:bg-forest/75' : 'h-2 w-2 bg-bege-paper/60 group-hover:bg-bege-paper',
              )}
            />
            <span aria-hidden="true" className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-forest px-2.5 py-1 text-xs font-medium text-bege-paper opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">{dotLabels[id]}</span>
          </a>
        )
      })}
    </nav>
  )
}
