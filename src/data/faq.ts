export interface FaqItem { q: string; a: string; icon: string; confirmed: boolean }

// Respostas sugeridas: devem ser validadas pela Dra. Jade antes da publicação.
export const faq: FaqItem[] = [
  { q: 'Como agendar uma consulta?', icon: 'calendar', a: 'Clique em um dos botões de WhatsApp da página e envie sua mensagem. A equipe responderá com as orientações sobre disponibilidade e agendamento.', confirmed: false },
  { q: 'Atende gestantes? (consulta pré-natal)', icon: 'baby', a: 'Sim. A consulta pediátrica pré-natal é feita ainda na gestação, para que os pais conheçam a pediatra antes do nascimento, tirem dúvidas sobre os primeiros dias do bebê, amamentação e cuidados em casa, e cheguem à maternidade mais tranquilos.', confirmed: false },
  { q: 'Como funciona a primeira consulta?', icon: 'stethoscope', a: 'A primeira consulta dura cerca de 50 minutos, sem pressa. É o momento de conhecer a criança e a família: gestação e nascimento, alimentação, sono, desenvolvimento, vacinas e todas as dúvidas que vocês trouxerem. Depois, a criança é examinada com calma. Ao final, vocês recebem orientações por escrito e combinamos juntos os próximos passos do acompanhamento.\nO que levar: caderneta de saúde da criança, exames e receitas anteriores, se houver.', confirmed: false },
  { q: 'Você atende por plano de saúde?', icon: 'heart', a: 'Os atendimentos são realizados de forma particular. Essa modalidade me permite oferecer consultas individualizadas, com tempo e atenção dedicados às necessidades de cada criança e família.', confirmed: false },
  { q: 'Onde fica o consultório?', icon: 'pin', a: 'O consultório fica localizado dentro da Amo Vacinas SJC.', confirmed: false },
]
