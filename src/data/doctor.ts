// Dados editáveis da Dra. Jade. Campos vazios/indefinidos NÃO são publicados.
// previewMode=true mostra conteúdo sugerido (pendente de validação) para revisão.
// Antes de publicar: preencher os dados reais e mudar previewMode para false.

import { photoFinal, photoHero, photoProfile } from '@/assets/photos'

export interface DoctorConfig {
  previewMode: boolean
  name: string
  brandName: string
  specialty: string
  tagline: string
  crm?: string
  state?: string
  rqe?: string
  whatsapp?: string // formato: DDI+DDD+número, só dígitos. Ex.: "5511999999999"
  whatsappMessage: string
  instagram?: string
  email?: string
  address?: string
  city?: string
  locationReference?: string
  hours?: string
  mapsUrl?: string
  biography: string[]
  credentials?: { label: string; value: string }[]
  photos: { hero?: string; profile?: string; final?: string; heroPosition?: string; profilePosition?: string; finalPosition?: string; reference?: boolean }
}

export const doctor: DoctorConfig = {
  previewMode: true,
  name: 'Dra. Jade Rodrigues',
  brandName: 'JR Pediatria',
  specialty: 'Pediatria',
  tagline: 'Cuidado que acolhe. Presença que acompanha.',
  crm: '290930',
  state: 'SP',
  rqe: '154914',
  whatsapp: '5512991843003',
  whatsappMessage:
    'Olá! Gostaria de receber informações sobre o atendimento da Dra. Jade Rodrigues e agendar uma consulta.',
  instagram: 'pedevidencia',
  email: undefined,
  address: undefined,
  city: 'São José dos Campos',
  locationReference: undefined,
  hours: undefined,
  mapsUrl: undefined,
  biography: [
    'Acredito que uma boa consulta começa com escuta. Cada criança chega com uma história, e cada família com perguntas que merecem tempo e atenção.',
    'Meu compromisso é acompanhar de perto, com clareza e respeito, oferecendo orientação para que os responsáveis se sintam seguros em cada fase.',
  ],
  credentials: [],
  // Fotos de referência de banco de imagens (não são da Dra. Jade). Trocar pelas fotos reais e remover reference.
  photos: { hero: photoHero, profile: photoProfile, final: photoFinal, heroPosition: '50% 25%', profilePosition: '50% 30%', finalPosition: '34% 50%', reference: true },
}

export function whatsappLink(source: string): string {
  const text = encodeURIComponent(doctor.whatsappMessage)
  const number = (doctor.whatsapp ?? '').replace(/\D/g, '')
  const base = number ? `https://wa.me/${number}` : 'https://wa.me/'
  // utm_source identifica apenas a seção do botão; nenhum dado pessoal ou de saúde.
  return `${base}?text=${text}&utm_source=site&utm_content=${encodeURIComponent(source)}`
}

export function track(event: string, params: Record<string, string> = {}) {
  const w = window as unknown as { dataLayer?: Record<string, unknown>[] }
  w.dataLayer = w.dataLayer ?? []
  w.dataLayer.push({ event, ...params })
}

export const instagramUrl = () =>
  doctor.instagram ? `https://instagram.com/${doctor.instagram.replace('@', '')}` : undefined
