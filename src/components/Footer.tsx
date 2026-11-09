import { Mail, MessageCircle, ShieldCheck } from 'lucide-react'
import { InstagramIcon } from './shared'
import { doctor, instagramUrl, track, whatsappLink } from '@/data/doctor'
import { useRef } from 'react'
import { Signature } from './Header'
import { logoRatio, logoSrc } from '@/assets/logo'

export function Footer({ embedded }: { embedded?: boolean } = {}) {
  const dlg = useRef<HTMLDialogElement>(null)
  const ig = instagramUrl()
  const place = [doctor.address, doctor.city && doctor.state ? `${doctor.city} - ${doctor.state}` : doctor.city].filter(Boolean).join(', ')
  const reg = doctor.crm && doctor.state ? `CRM-${doctor.state} ${doctor.crm}${doctor.rqe ? ` · RQE ${doctor.rqe}` : ''}` : ''
  return (
    <footer className={embedded ? 'relative w-full bg-bege pt-4 text-center text-forest sm:pt-5' : 'bg-bege py-14 text-center text-forest'}>
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-1.5 px-5 sm:px-8">
        {embedded ? (
          <img src={logoSrc} alt={`${doctor.name}, médica pediatra`} decoding="async" style={{ height: 'clamp(40px, 9svh, 92px)', width: 'auto', aspectRatio: String(logoRatio) }} className="block" />
        ) : <Signature height={84} />}
        {reg && <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-sage-deep sm:text-[13px]">{reg}</p>}
        {place && <p className="text-xs text-forest/70 sm:text-sm">{place}</p>}
        <ul className="mt-1.5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          {ig && <li><a href={ig} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 underline underline-offset-4"><InstagramIcon /> Instagram @{doctor.instagram}</a></li>}
          <li><a href={whatsappLink('footer')} target="_blank" rel="noopener noreferrer" onClick={() => track('cta_whatsapp', { source: 'footer' })} className="inline-flex items-center gap-2 underline underline-offset-4"><MessageCircle size={16} aria-hidden="true" /> WhatsApp</a></li>
          {doctor.email && <li><a href={`mailto:${doctor.email}`} className="inline-flex items-center gap-2 underline underline-offset-4"><Mail size={16} aria-hidden="true" /> {doctor.email}</a></li>}
          <li>
            <button type="button" onClick={() => dlg.current?.showModal()} className="inline-flex items-center gap-2 underline underline-offset-4"><ShieldCheck size={16} aria-hidden="true" /> Política de privacidade</button>
            <dialog ref={dlg} aria-labelledby="priv-title" onClick={(e) => e.target === dlg.current && dlg.current?.close()} className="w-[min(92vw,34rem)] rounded-2xl bg-bege-paper p-7 text-left text-forest backdrop:bg-forest/50">
              <h2 id="priv-title" className="font-display text-2xl font-medium">Política de privacidade</h2>
              <div className="mt-4 space-y-3 text-sm text-forest/80">
                <p>Esta página não possui formulários e não coleta dados pessoais diretamente.</p>
                <p>Ao clicar nos botões de WhatsApp, você será direcionado ao aplicativo para iniciar uma conversa com a equipe. Evite enviar dados clínicos da criança nesse primeiro contato.</p>
                <p>Se ferramentas de medição (como Google Analytics) forem ativadas, os eventos registram apenas cliques em seções da página, sem dados pessoais ou de saúde.</p>
                <p className="text-xs text-forest/60">Texto base a ser revisado e validado antes da publicação.</p>
              </div>
              <button type="button" onClick={() => dlg.current?.close()} className="mt-6 min-h-11 rounded-full bg-forest px-6 text-sm font-semibold text-bege-paper">Fechar</button>
            </dialog>
          </li>
        </ul>
      </div>
      <div className="mt-2 border-t border-forest/10 bg-bege px-5 py-2 sm:mt-3 sm:py-3 sm:px-8">
        <p className="mx-auto max-w-5xl text-[10px] text-forest/55 sm:text-xs">© {new Date().getFullYear()} {doctor.name}</p>
      </div>
    </footer>
  )
}
