import { useEffect, useRef, useState, type ReactNode } from 'react';
import { ArrowRight, ArrowLeft, ArrowUpRight, Zap, Check, CircleCheck, X, Building2, House, Route, MapPin, Wallet, Sparkles, ShieldCheck, PlugZap, BatteryCharging, CircleHelp, CarFront, Coins, Volume2, Leaf, Fuel, Play, RotateCcw, ChevronDown, ChevronRight, SlidersHorizontal } from 'lucide-react';
import { cars, costs, questions, getProfile, getFaq, scenario } from './domain.js';

type Car = typeof cars[number];
type Page = 'quiz' | 'result' | 'catalog';
type Overlay = 'compare' | 'reinforce' | 'faq' | 'confirmation' | null;
const money = (n: number) => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const iconMap = { city: Building2, route: Route, road: MapPin, wallet: Wallet, sparkles: Sparkles, check: ShieldCheck, coins: Coins, home: House, building: Building2, plug: PlugZap, help: CircleHelp, battery: BatteryCharging, car: CarFront };
const benefits = [
  { icon: Volume2, title: 'Uma rotina mais silenciosa', text: 'Menos vibração do motor e mais conforto nos seus caminhos.' },
  { icon: Zap, title: 'Resposta que você sente', text: 'Torque instantâneo para uma experiência fluida ao dirigir.' },
  { icon: ShieldCheck, title: 'Tecnologia a seu favor', text: 'Conectividade e recursos de assistência, conforme a versão.' },
  { icon: Leaf, title: 'Outro jeito de se mover', text: 'Sem emissões pelo escapamento durante o uso do elétrico.' },
];

function Dialog({ children, close, wide = false }: { children: ReactNode; close: () => void; wide?: boolean }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current!;
    const previous = document.activeElement as HTMLElement | null;
    d.showModal();
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { d.close(); document.body.style.overflow = oldOverflow; previous?.focus(); };
  }, []);
  return <dialog ref={ref} className={`modal ${wide ? 'wide' : ''}`} aria-labelledby="modal-title" onCancel={e => { e.preventDefault(); close(); }} onClick={e => { if (e.target === e.currentTarget) close(); }}>
    <button className="close-button" aria-label="Fechar janela" onClick={close}><X size={20} /></button>{children}
  </dialog>;
}

function FaqList({ answers }: { answers: string[] }) {
  return <div className="faq-list">{getFaq(answers).map((faq, i) => <details key={faq.id} open={i === 0}><summary>{faq.title}<ChevronDown size={18} /></summary><p>{faq.text}</p></details>)}</div>;
}

function CostCard({ car, featured, label }: { car: Car; featured?: boolean; label: string }) {
  const c = costs(car);
  return <article className={`cost-card ${featured ? 'featured' : ''}`}>
    <div className="cost-car-top"><span className="eyebrow">{featured && <Zap size={13} />}{label}</span><img src={car.image} alt={car.name} /></div>
    <div className="cost-car-body"><h3>{car.name}</h3><p className="muted small">{car.version}</p>
      <dl><div><dt>Mensalidade</dt><dd>{money(car.monthly)}</dd></div><div><dt>{car.electric ? <PlugZap size={16} /> : <Fuel size={16} />}{car.electric ? 'Recarga residencial' : 'Gasolina estimada'}</dt><dd>{money(c.energy)}</dd></div></dl>
      <div className="cost-total"><span>Custo mensal estimado</span><strong>{money(c.total)}<small>/mês</small></strong></div>
    </div>
  </article>;
}

export default function App() {
  const [page, setPage] = useState<Page>('quiz');
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [overlay, setOverlay] = useState<Overlay>(null);
  const [faqReturn, setFaqReturn] = useState<Overlay>(null);
  const [selectedId, setSelectedId] = useState('taos');
  const [filter, setFilter] = useState('Todos');
  const [demo, setDemo] = useState(false);
  const [demoProgress, setDemoProgress] = useState(0);
  const selected = cars.find(c => c.id === selectedId)!;
  const partner = cars.find(c => c.id === selected.pair)!;
  const ice = selected.electric ? partner : selected;
  const ev = selected.electric ? selected : partner;
  const savings = Math.round((costs(ice).total - costs(ev).total) * 100) / 100;
  const energySavings = Math.round((1 - costs(ev).energy / costs(ice).energy) * 100);
  const profile = getProfile(answers);
  const recommended = cars.find(c => c.id === profile.recommendedId)!;
  const noHome = answers.length === 4 && answers[2] !== 'home';

  function navigate(next: Page) { setDemo(false); setOverlay(null); setPage(next); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  function restart() { navigate('quiz'); setStep(0); setAnswers([]); }
  function choose(id: string) { setAnswers(a => { const next = [...a]; next[step] = id; return next; }); }
  function advance() { if (!answers[step]) return; if (step < 3) setStep(step + 1); else navigate('result'); }
  function openCar(car: Car) { setSelectedId(car.id); setOverlay(car.electric ? 'reinforce' : 'compare'); }
  function openFaq() { setFaqReturn(overlay); setOverlay('faq'); }
  function closeOverlay() { setDemo(false); setOverlay(null); }
  function startDemo() { setAnswers([]); setStep(0); setPage('quiz'); setOverlay(null); setSelectedId('taos'); setDemoProgress(0); setDemo(true); window.scrollTo(0, 0); }
  useEffect(() => { if (new URLSearchParams(window.location.search).get('demo') === '1') startDemo(); }, []);
  useEffect(() => {
    if (!demo) return;
    const persona = ['urban', 'tech', 'home', 'upgrade'];
    const events: Array<[number, () => void]> = [];
    for (let i = 0; i < 4; i++) {
      events.push([800 + i * 1700, () => setAnswers(persona.slice(0, i + 1))]);
      if (i < 3) events.push([1700 + i * 1700, () => setStep(i + 1)]);
    }
    events.push([7000, () => setPage('result')], [9300, () => setOverlay('compare')], [12300, () => { setSelectedId('yuan'); setOverlay('reinforce'); }], [15000, () => setDemo(false)]);
    const timers = events.map(([ms, fn]) => window.setTimeout(fn, ms));
    const began = performance.now();
    const progress = window.setInterval(() => setDemoProgress(Math.min((performance.now() - began) / 150, 100)), 100);
    return () => { timers.forEach(clearTimeout); clearInterval(progress); };
  }, [demo]);

  return <>
    {demo && <div className="demo-progress" style={{ width: `${demoProgress}%` }} />}
    <header className="site-header"><div className="header-inner">
      <button className="brand" onClick={restart} aria-label="Rota elétrica, início"><span className="brand-icon"><Zap size={22} fill="currentColor" /></span><span>rota<span className="brand-light">elétrica</span><small>uma ideia do grupo Eruptivos</small></span></button>
      <nav aria-label="Navegação principal"><button className={page !== 'catalog' ? 'active' : ''} onClick={restart}>Encontre seu caminho</button><button className={page === 'catalog' ? 'active' : ''} onClick={() => navigate('catalog')}>Explore os carros</button><button onClick={openFaq}>Tire suas dúvidas</button></nav>
      <button className="demo-button" onClick={demo ? () => setDemo(false) : startDemo}>{demo ? <X size={15} /> : <Play size={14} fill="currentColor" />}{demo ? 'Parar demo' : 'Ver demo de 15s'}</button>
    </div></header>
    <main>
      {page === 'quiz' && <div className="quiz-shell">
        <section className="quiz-content">
          <div className="section-label"><span /> SUA ROTINA. SUA PRÓXIMA ESCOLHA.</div>
          <h1>A escolha certa<br />começa <em>em você.</em></h1>
          <p className="intro">Elétrico ou combustão? Vamos entender o seu dia a dia<br className="desktop-break" /> e colocar o custo real na conversa.</p>
          <div className="quiz-progress"><div><span>SEU PERFIL</span><span>0{step + 1}<span className="muted"> / 04</span></span></div><div className="progress-tracks">{questions.map((_, i) => <span key={i} className={i <= step ? 'done' : ''} />)}</div></div>
          <div className="question" key={step}>
            <h2>{questions[step].title}</h2><p className="question-subtitle">{questions[step].subtitle}</p>
            <div className="options" role="radiogroup" aria-label={questions[step].title}>{questions[step].options.map(option => { const Icon = iconMap[option.icon as keyof typeof iconMap]; return <button key={option.id} role="radio" aria-checked={answers[step] === option.id} className={`option ${answers[step] === option.id ? 'selected' : ''}`} onClick={() => choose(option.id)}><span className="option-icon"><Icon size={21} strokeWidth={1.6} /></span><span className="option-copy"><strong>{option.label}</strong><small>{option.detail}</small></span><span className="radio-circle">{answers[step] === option.id && <Check size={13} strokeWidth={3} />}</span></button>; })}</div>
          </div>
          <div className="quiz-actions">{step > 0 && <button className="back-button" onClick={() => setStep(step - 1)} aria-label="Voltar à pergunta anterior"><ArrowLeft size={19} /></button>}<button className="button primary" disabled={!answers[step]} onClick={advance}>{step === 3 ? 'Descobrir meu caminho' : 'Continuar'}<ArrowRight size={18} /></button><button className="text-button" onClick={() => { setAnswers([]); navigate('catalog'); }}>Pular e ver os carros<ArrowUpRight size={15} /></button></div>
          <div className="quiz-footnote"><ShieldCheck size={15} /><span>4 perguntas rápidas. Opcional. Suas respostas ficam só nesta sessão.</span></div>
        </section>
        <aside className="hero-panel"><div className="hero-top"><span className="outline-badge"><Zap size={13} /> UM NOVO JEITO DE ESCOLHER</span><span className="hero-edition">RUPTURA<br /><b>2026</b></span></div>
          <div className="hero-heading"><h2>Mais clareza.<br />Mais possibilidades.</h2><p>O seu próximo carro pode entregar<br />mais do que você imagina.</p></div>
          <div className="hero-orbit" /><span className="hero-watermark">elétrico.</span><img className="hero-car" src="/images/yuan.png" alt="BYD Yuan Plus azul, SUV elétrico" />
          <div className="floating-tag"><span><Zap size={18} /></span><div><strong>O custo real vai além da parcela.</strong><small>Mensalidade + energia. Tudo às claras.</small></div></div>
          <div className="hero-bottom"><span>UMA ESCOLHA QUE FAZ SENTIDO.</span><ArrowUpRight size={26} /></div>
        </aside>
      </div>}

      {page === 'result' && <section className="result-page fade-in"><div className="section-label"><span /> UM CAMINHO PENSADO PARA VOCÊ</div><div className="result-layout"><div className="result-copy"><span className="profile-check"><Check size={30} /></span><h1>{profile.title}</h1><p className="intro">{profile.description}</p><div className="tags">{profile.tags.map(tag => <span key={tag}><CircleCheck size={14} />{tag}</span>)}</div><div className="result-reason"><span className="eyebrow">O QUE SUAS RESPOSTAS CONTAM</span><h3>{profile.level === 'high' ? 'Sua rotina aproxima você do elétrico.' : profile.level === 'medium' ? 'A recarga merece um plano.' : 'Praticidade também é valor.'}</h3><p>{profile.level === 'high' ? 'O acesso à recarga facilita o dia a dia. O comparativo traz o custo de uso para a decisão, junto do conforto que você valoriza.' : profile.level === 'medium' ? 'Não basta a conta ser atrativa. Confirme onde carregar e como planejar os trajetos antes de seguir.' : 'A recomendação respeita o seu momento. A combustão mantém a rotina conhecida, e o elétrico continua disponível para comparação.'}</p></div><div className="result-actions"><button className="button primary" onClick={() => { setSelectedId(recommended.electric ? recommended.pair : recommended.id); setOverlay('compare'); }}>Ver comparação recomendada<ArrowRight size={18} /></button><button className="text-button" onClick={restart}><RotateCcw size={15} />Refazer meu perfil</button></div></div>
        <div className="recommendation-visual"><span className="outline-badge"><Sparkles size={14} /> SEU PONTO DE PARTIDA</span><h2>{recommended.name}</h2><span className="muted">{recommended.version}</span><div className="result-ring" /><img src={recommended.image} alt={recommended.name} /><div className="visual-note"><Wallet size={20} /><div><strong>A conta completa muda a conversa.</strong><p>Compare a mensalidade e o custo de uso.</p></div></div><small className="visual-disclaimer">Perfil indicativo. A viabilidade depende das condições reais de uso.</small></div>
      </div></section>}

      {page === 'catalog' && <section className="catalog-page fade-in"><div className="catalog-heading"><div><div className="section-label"><span /> ESCOLHA COM A CONTA COMPLETA</div><h1>Seu próximo carro.<br /><em>Mais possibilidades.</em></h1><p className="intro">Escolha um modelo e descubra o que existe além da mensalidade.</p></div><button className="button secondary" onClick={restart}><SlidersHorizontal size={17} />Personalizar meu caminho</button></div><div className="catalog-toolbar"><div className="filter-tabs" role="group" aria-label="Filtrar carros">{['Todos', 'SUV', 'Hatch', 'Elétricos'].map(f => <button key={f} aria-pressed={filter === f} className={filter === f ? 'chosen' : ''} onClick={() => setFilter(f)}>{f}</button>)}</div><span className="muted small">24 meses · 2.000 km/mês · valores ilustrativos</span></div>
        <div className="car-grid">{cars.filter(c => filter === 'Todos' || (filter === 'Elétricos' ? c.electric : c.category === filter)).map(car => <article className="catalog-card" key={car.id}><div className="catalog-car-image"><span className={`engine-label ${car.electric ? 'electric' : ''}`}>{car.electric ? <Zap size={12} /> : <Fuel size={12} />}{car.electric ? '100% elétrico' : 'Combustão'}</span><img src={car.image} alt={car.name} /></div><div className="catalog-car-body"><span className="eyebrow muted">{car.category} · 5 LUGARES</span><h2>{car.name}</h2><p className="small muted">{car.version}</p><p className="car-description">{car.description}</p><div className="catalog-price"><span>Mensalidade ilustrativa</span><strong>{money(car.monthly)}<small>/mês</small></strong></div><button className="button secondary" onClick={() => openCar(car)}>Tenho interesse<ArrowRight size={17} /></button><button className="compare-link" onClick={() => { setSelectedId(car.id); setOverlay('compare'); }}><Sparkles size={14} />Comparação inteligente</button></div></article>)}</div><div className="catalog-note"><CircleHelp size={19} /><p><strong>A parcela é só o começo.</strong> Ao escolher um carro, mostramos o custo de uso de uma alternativa da mesma categoria.</p></div>
      </section>}
    </main>
    <footer className="site-footer"><span><Zap size={13} /> Ideia nascida no hackathon. Feita para ganhar a rua.</span><span>Protótipo conceitual independente · Eruptivos · 2026</span></footer>

    {overlay === 'compare' && <Dialog wide close={closeOverlay}><div className="modal-content"><span className="green-badge"><Sparkles size={13} /> COMPARAÇÃO INTELIGENTE</span><h2 id="modal-title">Mais experiência.<br /><em>Uma conta que faz sentido.</em></h2><p className="modal-intro">A mensalidade é parte da história. Veja o custo de uso de dois carros da mesma categoria.</p><div className="comparison-context"><span><Route size={14} />2.000 km/mês</span><span><House size={14} />Cenário de recarga residencial</span><span>Dados ilustrativos</span></div>
      <div className="cost-grid"><CostCard car={ice} label={selected.electric ? 'ALTERNATIVA A COMBUSTÃO' : 'SUA ESCOLHA ATUAL'} /><CostCard car={ev} featured label={selected.electric ? 'SEU ELÉTRICO' : 'ALTERNATIVA ELÉTRICA'} /></div>
      <div className="savings-banner"><span className="savings-icon"><Zap size={25} /></span><div><span>Mesmo com a parcela maior, neste cenário</span><strong>o elétrico custa {money(savings)} a menos por mês.</strong></div><div className="annual-saving"><strong>{money(savings * 12)}</strong><span>de diferença em 12 meses</span></div></div>
      {noHome && <div className="context-warning"><PlugZap size={20} /><p><strong>Sua recarga ainda precisa de confirmação.</strong> Você indicou que não tem recarga definida em casa. Esta economia usa tarifa residencial e pode mudar com a recarga pública.</p></div>}
      {profile.level === 'low' && answers.length === 4 && <div className="context-warning"><Route size={20} /><p><strong>A sua rotina vem primeiro.</strong> Mesmo com esta diferença de custo, a recomendação inicial para o seu perfil continua sendo a combustão.</p></div>}
      <div className="benefits-strip">{benefits.slice(0, 3).map(b => <div key={b.title}><b.icon size={19} /><span>{b.title}</span></div>)}</div>
      <div className="modal-actions"><button className="button primary" onClick={() => { setSelectedId(ev.id); setOverlay('reinforce'); }}>Conhecer a experiência elétrica<ArrowRight size={18} /></button><button className="button secondary" onClick={() => { setSelectedId(ice.id); setOverlay('confirmation'); }}>Continuar com {ice.id === 'taos' ? 'o Taos' : 'o Onix'}</button></div>
      <details className="assumptions"><summary>Como fizemos a conta<ChevronDown size={14} /></summary><p>Exemplo de 24 meses e {scenario.km.toLocaleString('pt-BR')} km/mês. Gasolina: {money(scenario.gasoline)}/litro. Consumo ilustrativo do {ice.name}: {ice.consumption.toLocaleString('pt-BR')} km/l. Energia residencial: {money(scenario.electricity)}/kWh. Consumo ilustrativo do {ev.name}: {ev.consumption.toLocaleString('pt-BR')} kWh/100 km. Custo de uso = distância ÷ consumo × tarifa para gasolina, ou distância ÷ 100 × consumo × tarifa para energia. Total = mensalidade + custo de uso. Valores arredondados para centavos. Instalação e tarifas públicas não incluídas. Não representa oferta comercial.</p></details>
    </div></Dialog>}

    {overlay === 'reinforce' && <Dialog wide close={closeOverlay}><div className="modal-content reinforce-content"><div className="reinforce-head"><div><span className="green-badge"><Zap size={13} /> SUA ESCOLHA, COM MAIS CLAREZA</span><h2 id="modal-title">Um elétrico no seu dia.<br /><em>Mais valor no seu caminho.</em></h2><p className="modal-intro">Veja como a economia no uso ajuda a compensar a mensalidade do {ev.name} neste cenário.</p></div><img src={ev.image} alt={ev.name} /></div>
      <div className="energy-panel"><div className="energy-heading"><span className="eyebrow">O CUSTO QUE A MENSALIDADE NÃO MOSTRA</span><strong>{energySavings}% menos com energia<small>no cenário ilustrativo de recarga residencial</small></strong></div><div className="energy-bars"><div><span><Fuel size={15} />Gasolina · {ice.name}<b>{money(costs(ice).energy)}</b></span><div className="bar-track"><i style={{ width: '100%' }} /></div></div><div className="ev-bar"><span><PlugZap size={15} />Recarga · {ev.name}<b>{money(costs(ev).energy)}</b></span><div className="bar-track"><i style={{ width: `${100 - energySavings}%` }} /></div></div><p><strong>{money(costs(ice).energy - costs(ev).energy)}</strong> a menos no uso mensal. Considerando as duas mensalidades, a diferença total é de <strong>{money(savings)}/mês.</strong></p></div></div>
      <div className="benefit-grid">{benefits.map(b => <article key={b.title}><span><b.icon size={21} /></span><div><h3>{b.title}</h3><p>{b.text}</p></div></article>)}</div>
      <div className="personalized-topic"><CircleHelp size={23} /><div><span className="eyebrow">{answers.length === 4 ? 'UMA RESPOSTA PARA O SEU PERFIL' : 'ANTES DE DECIDIR'}</span><h3>{getFaq(answers)[0].title}</h3><p>{getFaq(answers)[0].text}</p></div></div>
      <div className="modal-actions"><button className="button primary" onClick={() => { setSelectedId(ev.id); setOverlay('confirmation'); }}>Avançar com {ev.name}<ArrowRight size={18} /></button><button className="button secondary" onClick={openFaq}><CircleHelp size={17} />Dúvidas sobre recarga?</button></div><button className="compare-link centered" onClick={() => setOverlay('compare')}>Rever a comparação completa<ChevronRight size={14} /></button><p className="modal-fineprint">2.000 km/mês. Recarga residencial a R$ 0,93/kWh. Estimativas ilustrativas, sem custo de instalação. Confira todas as premissas na comparação.</p>
    </div></Dialog>}

    {overlay === 'faq' && <Dialog close={() => { setDemo(false); setOverlay(faqReturn); }}><div className="modal-content"><span className="green-badge"><CircleHelp size={14} /> MENOS INCERTEZA. MAIS CLAREZA.</span><h2 id="modal-title">Suas dúvidas<br /><em>têm espaço aqui.</em></h2><p className="modal-intro">Uma escolha boa começa com respostas que fazem sentido para a sua rotina.</p><FaqList answers={answers} /><button className="button primary full" onClick={() => setOverlay(faqReturn)}>Voltar à minha escolha<ArrowRight size={18} /></button></div></Dialog>}

    {overlay === 'confirmation' && <Dialog close={closeOverlay}><div className="modal-content confirmation"><span className="profile-check"><Check size={30} /></span><span className="eyebrow">SEU CAMINHO, SUA DECISÃO</span><h2 id="modal-title">Você escolheu<br /><em>{selected.name}.</em></h2><img src={selected.image} alt={selected.name} /><p>Aqui, a demonstração chega ao fim. Em uma jornada real, este seria o momento de confirmar as condições do plano e conversar com um consultor.</p><div className="confirmation-note"><CircleCheck size={18} />Sua escolha foi respeitada em cada etapa.</div><button className="button primary full" onClick={() => navigate('catalog')}>Explorar outras possibilidades<ArrowRight size={18} /></button><button className="text-button centered" onClick={restart}>Recomeçar meu caminho<RotateCcw size={14} /></button></div></Dialog>}
  </>;
}
