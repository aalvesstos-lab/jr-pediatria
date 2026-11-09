export interface FaqItem { q: string; a: string; icon: string; confirmed: boolean }

// Respostas sugeridas: devem ser validadas pela Dra. Jade antes da publicação.
export const faq: FaqItem[] = [
  { q: 'Como agendar uma consulta?', icon: 'calendar', a: 'Clique em um dos botões de WhatsApp da página e envie sua mensagem. A equipe responderá com as orientações sobre disponibilidade e agendamento.', confirmed: false },
  { q: 'Como entrar em contato com a equipe?', icon: 'whatsapp', a: 'Pelo WhatsApp, usando os botões desta página. Não envie dados clínicos da criança por esse canal inicial.', confirmed: false },
  { q: 'Como funciona a primeira consulta?', icon: 'stethoscope', a: 'Informação a ser confirmada pela Dra. Jade.', confirmed: false },
  { q: 'Você atende por plano de saúde?', icon: 'heart', a: 'Os atendimentos são realizados de forma particular. Essa modalidade me permite oferecer consultas individualizadas, com tempo e atenção dedicados às necessidades de cada criança e família.', confirmed: false },
  { q: 'Onde fica o consultório?', icon: 'pin', a: 'O consultório fica localizado dentro da Amo Vacinas SJC.', confirmed: false },
]
