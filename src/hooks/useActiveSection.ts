import { useEffect, useState } from 'react'

export const sectionIds = ['inicio', 'cuidado', 'sobre', 'atendimento', 'agendar', 'localizacao', 'faq', 'contato']

// Seção ativa = a última cuja borda superior já passou da metade da tela.
// Calculado pela posição de rolagem (e não por IntersectionObserver), para o indicador
// sempre acompanhar exatamente a seção visível, inclusive no topo e no fim da página.
export function useActiveSection() {
  const [active, setActive] = useState('inicio')
  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const els = sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
      if (!els.length) return
      const line = window.innerHeight * 0.5
      let current = els[0].id
      for (const el of els) {
        if (el.getBoundingClientRect().top <= line) current = el.id
      }
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      if (atBottom) current = els[els.length - 1].id
      if (window.scrollY < 4) current = els[0].id
      setActive((prev) => (prev === current ? prev : current))
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    const t = window.setTimeout(update, 600)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); window.clearTimeout(t); if (raf) cancelAnimationFrame(raf) }
  }, [])
  return active
}
