import { Clock, MapPin } from 'lucide-react'
import { doctor, track } from '@/data/doctor'
import { Reveal, SectionLabel } from './shared'

// Só aparece com dados confirmados em data/doctor.ts
export function LocationSection() {
  const { address, city, state, locationReference, hours, mapsUrl } = doctor
  if (!address && !mapsUrl) return null
  return (
    <section id="localizacao" className="snap-section bg-bege">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal><SectionLabel icon={MapPin}>Consultório e localização</SectionLabel></Reveal>
        <Reveal delay={0.05}><h2 className="t-h2 font-medium text-forest">Onde nos encontrar</h2></Reveal>
        <Reveal delay={0.1}>
          <address className="mt-8 space-y-2 not-italic text-lg text-forest/85">
            {address && <p className="flex gap-3"><MapPin size={20} className="mt-1 shrink-0 text-sage-deep" aria-hidden="true" />{address}</p>}
            {(city || state) && <p>{[city, state].filter(Boolean).join(' / ')}</p>}
            {locationReference && <p>{locationReference}</p>}
            {hours && <p className="flex gap-3"><Clock size={20} className="mt-1 shrink-0 text-sage-deep" aria-hidden="true" />{hours}</p>}
          </address>
          {mapsUrl && (
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" onClick={() => track('clique_localizacao')} className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full border border-forest/40 px-6 text-sm font-semibold text-forest hover:bg-forest/5">
              <MapPin size={16} aria-hidden="true" /> Ver no Google Maps
            </a>
          )}
        </Reveal>
      </div>
    </section>
  )
}
