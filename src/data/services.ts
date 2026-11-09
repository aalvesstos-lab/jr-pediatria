export interface Service {
  id: string
  name: string
  description: string
  note?: string
  icon: string
  confirmed: boolean // só aparece publicamente se true (ou em previewMode)
}

export const services: Service[] = [
  {
    id: 'consulta',
    icon: 'stethoscope',
    name: 'Consulta pediátrica',
    description: 'Um encontro para ouvir a família, examinar a criança e tirar dúvidas.',
    confirmed: false,
  },
  {
    id: 'individualizadas',
    icon: 'clipboard',
    name: 'Orientações Individualizadas',
    description: 'Recomendações fundamentadas em evidências científicas, construídas de acordo com as necessidades de cada criança e família.',
    confirmed: false,
  },
  {
    id: 'alem-da-consulta',
    icon: 'book',
    name: 'Pediatria além da consulta',
    description: 'Materiais educativos e orientações por escrito para apoiar os pais nas dúvidas e desafios do dia a dia.',
    confirmed: false,
  },
]

export const journey: { id: string; title: string; text: string; icon: string; confirmed: boolean }[] = [
  { id: 'j1', icon: 'baby', title: 'Primeiros dias', text: 'O início de tudo, com acolhimento e orientação para a família.', confirmed: false },
  { id: 'j2', icon: 'footprints', title: 'Primeiros anos', text: 'Descobertas diárias acompanhadas de perto.', confirmed: false },
  { id: 'j3', icon: 'ruler', title: 'Crescimento', text: 'Cada etapa com atenção ao ritmo da criança.', confirmed: false },
]
