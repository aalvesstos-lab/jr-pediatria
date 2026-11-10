import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { useActiveSection } from '@/hooks/useActiveSection'
import { doctor, track, whatsappLink } from '@/data/doctor'
import { faq } from '@/data/faq'
import { services } from '@/data/services'
import { logoRatio, logoSrc } from '@/assets/logo'

const vis = (list: { confirmed: boolean }[]) => list.some((i) => i.confirmed || doctor.previewMode)

export function Signature({ height = 48, light, className }: { height?: number; light?: boolean; className?: string }) {
  return (
    <img
      src={logoSrc}
      alt={`${doctor.name}, médica pediatra`}
      width={Math.round(height * logoRatio)}
      height={height}
      decoding="async"
      style={{ height, width: 'auto', filter: light ? 'brightness(0) invert(1)' : undefined }}
      className={cn('block transition-[height] duration-500', className)}
    />
  )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => { document.documentElement.style.overflow = open ? 'hidden' : ''; return () => { document.documentElement.style.overflow = '' } }, [open])
  const active = useActiveSection()
  const navActive = ({ cuidado: 'inicio', localizacao: 'contato' } as Record<string, string>)[active] ?? active

  const links = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    ...(vis(services) ? [{ href: '#atendimento', label: 'Atendimento' }] : []),
    { href: '#agendar', label: 'Agendamento' },
    ...(vis(faq) ? [{ href: '#faq', label: 'Dúvidas frequentes' }] : []),
    { href: '#contato', label: 'Contato' },
  ]

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', esc)
    return () => window.removeEventListener('keydown', esc)
  }, [])

  return (
    <header className={cn('fixed inset-x-0 top-0 z-50 transition-all duration-500', open ? 'border-b border-areia/60 bg-bege-paper py-1.5' : scrolled ? 'border-b border-areia/60 bg-bege-paper/90 py-1.5 backdrop-blur-md' : 'bg-transparent py-4')}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#inicio" aria-label={`${doctor.name}, ir para o início`}><Signature height={scrolled || open ? 46 : 56} /></a>
        <nav aria-label="Principal" className="hidden items-center gap-6 lg:flex xl:gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="group relative whitespace-nowrap text-[13px] font-medium text-forest xl:text-sm">
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-forest/50 transition-transform duration-200 group-hover:scale-x-100" />
              {navActive === l.href.slice(1) && <motion.span layoutId="nav-underline" className="absolute -bottom-1 left-0 h-px w-full bg-forest" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}
            </a>
          ))}
          <a href={whatsappLink('header')} target="_blank" rel="noopener noreferrer" onClick={() => track('cta_whatsapp', { source: 'header' })} className="whitespace-nowrap rounded-full bg-forest px-5 py-2.5 text-[13px] font-semibold text-bege-paper transition-colors hover:bg-[#2a3a31] xl:text-sm">
            Agendar consulta
          </a>
        </nav>
        <div className="flex items-center gap-1 lg:hidden">
        {active === 'inicio' && <a href={whatsappLink('header')} target="_blank" rel="noopener noreferrer" onClick={() => track('cta_whatsapp', { source: 'header' })} className="whitespace-nowrap rounded-full bg-forest px-3.5 py-2 text-xs font-semibold text-bege-paper transition-colors hover:bg-[#2a3a31] sm:px-5 sm:py-2.5 sm:text-sm">
          Agendar consulta
        </a>}
        <button type="button" className="flex h-11 w-11 items-center justify-center rounded-full text-forest" aria-expanded={open} aria-controls="menu-mobile" aria-label={open ? 'Fechar menu' : 'Abrir menu'} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        </div>
      </div>
      <nav id="menu-mobile" aria-label="Principal (mobile)" className={cn('fixed inset-0 -z-10 h-dvh flex-col overflow-y-auto bg-bege-paper px-5 pb-8 pt-[5.5rem] lg:hidden', open ? 'flex' : 'hidden')}>
        <ul className="flex flex-col">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block border-b border-areia/50 py-[clamp(0.75rem,2.6dvh,1.25rem)] font-display text-2xl text-forest">{l.label}</a>
            </li>
          ))}
        </ul>
        <a href={whatsappLink('header-mobile')} target="_blank" rel="noopener noreferrer" onClick={() => track('cta_whatsapp', { source: 'header-mobile' })} className="mt-6 flex min-h-12 items-center justify-center rounded-full bg-forest text-sm font-semibold text-bege-paper">Agendar consulta</a>
      </nav>
    </header>
  )
}
