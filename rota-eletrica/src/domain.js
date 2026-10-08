export const scenario = { km: 2000, gasoline: 5.8, electricity: 0.93 };
export const cars = [
  { id: 'taos', name: 'Volkswagen Taos', version: '1.4 TSI · Automático', category: 'SUV', electric: false, monthly: 6129, consumption: 8.4, image: '/images/taos.png', pair: 'yuan', description: 'Espaço e conforto para a sua rotina.' },
  { id: 'yuan', name: 'BYD Yuan Plus', version: '100% elétrico · Automático', category: 'SUV', electric: true, monthly: 7109, consumption: 18.75, image: '/images/yuan.png', pair: 'taos', description: 'Uma nova experiência ao dirigir.' },
  { id: 'onix', name: 'Chevrolet Onix', version: '1.0 Flex · Manual', category: 'Hatch', electric: false, monthly: 2499, consumption: 12.5, image: '/images/onix.png', pair: 'dolphin', description: 'Praticidade para os caminhos de todo dia.' },
  { id: 'dolphin', name: 'BYD Dolphin Mini', version: '100% elétrico · Automático', category: 'Hatch', electric: true, monthly: 2899, consumption: 13, image: '/images/dolphin.png', pair: 'onix', description: 'Compacto por fora. Cheio de possibilidades.' },
];
export function costs(car) {
  const energy = Math.round((car.electric ? scenario.km / 100 * car.consumption * scenario.electricity : scenario.km / car.consumption * scenario.gasoline) * 100) / 100;
  return { energy, total: Math.round((car.monthly + energy) * 100) / 100 };
}
export const questions = [
  { title: 'Como o carro participa do seu dia?', subtitle: 'Pense nos trajetos que você faz com mais frequência.', options: [
    { id: 'urban', label: 'Na cidade, no dia a dia', detail: 'Trabalho, estudos e compromissos', icon: 'city' },
    { id: 'mixed', label: 'Um pouco de cidade e estrada', detail: 'Rotina urbana e viagens ocasionais', icon: 'route' },
    { id: 'travel', label: 'Viajo bastante ou percorro longas distâncias', detail: 'A estrada faz parte da minha rotina', icon: 'road' },
  ] },
  { title: 'O que mais importa na sua escolha?', subtitle: 'Escolha o que tem mais peso para você.', options: [
    { id: 'economy', label: 'Economia no dia a dia', detail: 'Olhar além da mensalidade', icon: 'wallet' },
    { id: 'tech', label: 'Conforto e tecnologia', detail: 'Uma experiência melhor ao dirigir', icon: 'sparkles' },
    { id: 'practical', label: 'Praticidade e tranquilidade', detail: 'Resolver tudo sem complicação', icon: 'check' },
    { id: 'price', label: 'Uma mensalidade mais baixa', detail: 'O preço de entrada vem primeiro', icon: 'coins' },
  ] },
  { title: 'Você teria onde carregar um elétrico?', subtitle: 'Tudo bem ainda não ter essa resposta.', options: [
    { id: 'home', label: 'Sim, em casa ou no trabalho', detail: 'Tenho uma vaga com possibilidade de recarga', icon: 'home' },
    { id: 'apartment', label: 'Talvez. Moro em apartamento', detail: 'Precisaria entender a instalação', icon: 'building' },
    { id: 'none', label: 'Não tenho onde carregar', detail: 'Dependeria de pontos públicos', icon: 'plug' },
    { id: 'unknown', label: 'Ainda não sei como funciona', detail: 'Quero entender antes de escolher', icon: 'help' },
  ] },
  { title: 'Qual frase mais combina com você?', subtitle: 'A última pergunta. Vamos encontrar seu caminho.', options: [
    { id: 'save', label: 'Quero gastar menos no uso mensal', detail: 'O custo total é o que conta', icon: 'wallet' },
    { id: 'upgrade', label: 'Quero mais carro pelo meu dinheiro', detail: 'Conforto e tecnologia que façam sentido', icon: 'sparkles' },
    { id: 'fear', label: 'Tenho dúvidas sobre recarga e autonomia', detail: 'Preciso de segurança para decidir', icon: 'battery' },
    { id: 'traditional', label: 'Prefiro uma rotina que já conheço', detail: 'Quero mudar no meu tempo', icon: 'car' },
  ] },
];
export function getProfile(answers) {
  const [use, priority, charging, intent] = answers;
  const score = (use === 'urban' ? 2 : use === 'mixed' ? 1 : 0) + (priority === 'economy' ? 2 : priority === 'tech' ? 1 : 0) + (charging === 'home' ? 2 : 0) + (intent === 'save' || intent === 'upgrade' ? 1 : 0);
  const obstacle = charging !== 'home' || use === 'travel';
  const level = score >= 5 && !obstacle ? 'high' : score >= 3 ? 'medium' : 'low';
  const compact = priority === 'price' || (priority === 'economy' && intent === 'save');
  const recommendedId = level === 'low' ? (compact ? 'onix' : 'taos') : (compact ? 'dolphin' : 'yuan');
  return { score, level, recommendedId, tags: [use === 'travel' ? 'Rotina na estrada' : use === 'mixed' ? 'Uso versátil' : 'Perfil urbano', priority === 'tech' || intent === 'upgrade' ? 'Conforto e tecnologia' : 'Custo real', charging === 'home' ? 'Recarga acessível' : 'Recarga a confirmar'], title: level === 'high' ? 'O elétrico combina com a sua rotina.' : level === 'medium' ? 'Seu próximo carro pode ser elétrico.' : 'Seu caminho começa com mais tranquilidade.', description: level === 'high' ? 'Seu uso e o acesso à recarga criam um bom ponto de partida. Agora, veja o que muda no bolso e na experiência.' : level === 'medium' ? 'Há valor nessa troca. Antes de decidir, vale confirmar como a recarga e os seus trajetos se encaixam.' : 'Hoje, a combustão parece uma escolha mais prática para você. Compare os custos e descubra o que precisaria mudar para considerar um elétrico.' };
}
export function getFaq(answers) {
  const topics = [
    { id: 'home', title: 'Como funciona a recarga em casa?', text: 'O carro fica conectado a um equipamento adequado enquanto está estacionado. A instalação precisa de avaliação elétrica profissional. Tempo de carga e equipamento variam por veículo. O custo de instalação não entra neste comparativo.' },
    { id: 'apartment', title: 'E se eu morar em apartamento?', text: 'É necessário avaliar a infraestrutura, a medição de energia e as regras do condomínio. A proposta do hackathon prevê encaminhar o cliente a um parceiro de instalação. Essa parceria e eventuais descontos ainda precisam de validação.' },
    { id: 'travel', title: 'Como ficam as viagens mais longas?', text: 'Planeje as paradas e confirme a disponibilidade, o funcionamento e a compatibilidade dos carregadores no trajeto. Para viagens em que isso não for viável, a ideia prevê uma alternativa de locação. Condições e descontos são propostas para um piloto.' },
    { id: 'none', title: 'Posso depender só de carregadores públicos?', text: 'Pode ser possível, mas depende dos pontos próximos, da disponibilidade e da tarifa. A conta desta tela considera recarga residencial. O custo e a conveniência mudam ao usar recarga pública. Confirme uma estratégia de recarga antes de decidir.' },
    { id: 'cost', title: 'O que está incluído nesta comparação?', text: 'Somamos mensalidade e gasto estimado de gasolina ou energia para 2.000 km por mês. Mensalidades, consumo e tarifas são dados ilustrativos. Não incluímos instalação, estacionamento, pedágios ou outros custos de uso. Não é uma cotação.' },
    { id: 'maintenance', title: 'O elétrico ainda precisa de manutenção?', text: 'Sim. Pneus, freios, suspensão e outros itens continuam exigindo cuidados. O motor elétrico dispensa itens como óleo de motor térmico. A proposta considera manutenção na assinatura dos dois carros, sem contar esse benefício duas vezes.' },
  ];
  const preferred = answers[0] === 'travel' ? 'travel' : answers[2] === 'apartment' ? 'apartment' : answers[2] === 'none' ? 'none' : 'home';
  return [...topics.filter(t => t.id === preferred), ...topics.filter(t => t.id !== preferred)];
}
