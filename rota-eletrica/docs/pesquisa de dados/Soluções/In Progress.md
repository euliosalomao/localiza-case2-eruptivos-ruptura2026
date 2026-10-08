## O que vocês precisam arrancar dos dados da Localiza
### Primeiro descobrir onde a conversão morre
Já escrevi isso em dúvidas
### Normalizem a comparação

Essa pergunta é matadora:

> **“Quando vocês dizem que EV converte 3x menos, estão comparando leads equivalentes em faixa de preço, disponibilidade, prazo, canal e perfil?”**

Imagine:

Combustão médio = R$ 2.500/mês.  
EV médio = R$ 4.000/mês.

A diferença de conversão poderia ser quase inteiramente econômica.

Ou:

EV recebe muito clique de curioso.

A base de leads não é comparável.

Vocês precisam controlar, na medida do possível:

**faixa de mensalidade**,  
**renda/perfil**,  
**cidade**,  
**canal**,  
**modelo**,  
**prazo**,  
**disponibilidade**,  
**momento da jornada**.

Caso contrário, correm o risco de resolver “autonomia” quando a causa principal é preço.

### Classifiquem todas as respostas abertas

Se vier texto de cliente, eu criaria esta taxonomia inicial:

|Família|Exemplos|
|---|---|
|Autonomia|medo de ficar sem carga, viagens longas|
|Recarga residencial|condomínio, garagem, instalação|
|Recarga pública|poucos pontos, fila, indisponibilidade|
|Tempo de recarga|“não quero esperar”|
|Preço|mensalidade, custo-benefício|
|Bateria|durabilidade, degradação, manutenção|
|Tecnologia|desconhecimento, complexidade|
|Viagem|interior, estrada, férias|
|Experiência|nunca dirigiu / nunca carregou|
|Modelo|tamanho, porta-malas, categoria|
|Confiança|medo de novidade|
|Prazo/contrato|compromisso longo|
|Operação|disponibilidade/entrega|
|Outros|categoria residual|

Depois façam:

[ Objeção \rightarrow Abandono ]

Não apenas:

[ Objeção \rightarrow Frequência ]

A pergunta é:

> **qual objeção realmente diferencia quem converte de quem não converte?**

### Criem quatro segmentos, não um “cliente de elétrico”

Eu tentaria posicionar cada lead numa matriz:

### Criem quatro segmentos, não um “cliente de elétrico”

Eu tentaria posicionar cada lead numa matriz:

| \|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\| | Baixa ansiedade                        | Alta ansiedade         |
| -------------------------------------------------------------- | -------------------------------------- | ---------------------- |
| Alto fit operacional                                           | Converter diretamente                  | principal oportunidade |
| Baixo fit operacional                                          | explicar limites\|não forçar conversão | não forçar conversão   |
_OBS: **Fit operacional** é basicamente: **o quanto um carro elétrico encaixa na rotina real do cliente sem obrigá-lo a mudar demais a vida dele**._

Se vier texto de cliente, eu criaria esta taxonomia inicial:

O quadrante:
### **Alto fit + alta ansiedade**

é ouro.

Esse é o cara que diz:

> “acho legal, mas e se eu ficar sem bateria?”

quando, objetivamente:

> ele roda pouco, estaciona em casa e raramente viaja longe.

Ele não precisa de mais autonomia.

Ele precisa de **confiança**.

É exatamente o lead para:

**EV Fit → prova → test-drive prolongado → primeira recarga → proposta.**

### Descubram se “infraestrutura” significa quatro coisas diferentes

Quando alguém responde:

> “não tem carregador”

perguntem/segmentem:

**não tem em casa?**  
**não tem no condomínio?**  
**não tem perto?**  
**não tem na estrada que ele usa?**  
**ele não sabe que tem?**  
**ele não confia que estará funcionando?**

São seis problemas diferentes.

Não criem “infraestrutura” como uma categoria monolítica.

### Para autonomia, usem comportamento longitudinal

Dados ideais:

**km por dia**,  
**P50/P90/P95/P99**,  
**maior dia**,  
**quantos dias > 100 km**,  
**quantos > 200 km**,  
**destino desses dias**,  
**tempo em estacionamento**,  
**casa/trabalho**,  
**frequência dessas exceções**.

Uma pessoa com:

> média 35 km/dia + duas viagens de 600 km/ano

é completamente diferente de alguém com:

> 190 km diários.

O produto também deveria tratá-los diferente. A literatura longitudinal dá suporte claro para não olhar somente médias. 

### Dimensionem em dinheiro sem inventar dinheiro

Para o pitch:

[ Receita\ incremental = Leads_{EV} \times Conversão_{atual} \times Uplift_{piloto} \times Valor_{contrato} ]

ou:

[ Contratos\ adicionais = Leads\ elegíveis \times (\ Conversão_{nova} - Conversão_{atual}\ ) ]

Não chutem:

> “isso gera R$ 47 milhões.”

Digam:

> **“Com três variáveis internas que a Localiza já possui, o impacto pode ser calculado diretamente.”**

E mostrem quais.

Isso é mais profissional do que um TAM inventado.

## Recomendação estratégica

Minha recomendação depois da pesquisa inteira **não é fazer um app de carregadores**, **não é começar construindo eletropostos** e **não é simplesmente oferecer teste grátis**.

Eu construiria um **sistema de redução de incerteza comercial**.

Nome interno, por enquanto:

# **Localiza Electric Confidence**

A tese:

> **Identificar o medo antes da proposta, provar a compatibilidade com a vida real do cliente e oferecer uma garantia específica para aquilo que ainda não cabe.**

### O produto teria quatro camadas

#### Diagnóstico

Em aproximadamente dois minutos:

> “Um elétrico cabe na minha vida?”

Inputs simples.

O algoritmo determina:

**fit de mobilidade**,  
**fit de recarga**,  
**risco de viagem**,  
**principal objeção**,  
**modelo compatível**.

Nada de LLM fazendo matemática.

Regras transparentes.

#### Prova personalizada

Em vez de:

> “Autonomia: 300 km.”

Mostra:

> **“Na sua rotina, você utilizaria menos de 35% da autonomia na maioria dos dias.”**

Em vez de:

> “Há vários carregadores no Brasil.”

Mostra:

> **“Sua rotina pode ser sustentada predominantemente por recarga residencial; nesta viagem específica, esta parada seria necessária.”**

Em vez de:

> “carro elétrico é econômico.”

Com dados confiáveis de veículo/tarifa:

> **“Este é o cenário estimado para o seu uso.”**

A ideia é trocar **informação abstrata** por **evidência pessoal**.

#### Garantia contra a objeção

O sistema detecta a barreira e apresenta uma resposta diferente.

**Medo de autonomia:** prova baseada em rotina + planejamento das exceções.

**Sem wallbox:** concierge de instalação/parceiro.

**Sem recarga privada:** rede parceira/créditos/plano compatível.

**Nunca dirigiu EV:** experiência de vários dias.

**Medo de viagens longas:** garantia de mobilidade / acesso eventual a outro veículo.

**Compromisso:** plano de experimentação curto, se operacionalmente disponível.

Isso é a parte realmente boa:

> **não existe uma resposta genérica. Existe uma garantia correspondente ao medo.**

#### Conversão

Ao final:

> **“Agora você sabe que funciona.”**

E aí vem:

**modelo**,  
**plano**,  
**consultor**,  
**proposta**,  
**teste**,  
**assinatura**.

O produto vive **dentro do funil comercial**, não numa aba esquecida do app depois que o cliente já assinou.

### Como eu desenharia o MVP de amanhã

Uma demo impecável basta.

text

Copiar

```text
“Estou interessado num Dolphin,
mas tenho medo da autonomia.”
          ↓
      6 perguntas
          ↓
      EV FIT: 91%
          ↓
──────────────────────────────
ROTINA
92% dos seus dias cabem
confortavelmente na autonomia.

RECARGA
Seu perfil permite recarga
predominantemente residencial.

EXCEÇÕES
Você faz ~2 viagens longas/mês.
Uma exige parada de recarga.

PLANO DE CONFIANÇA
✓ Estratégia de recarga
✓ Teste de vários dias
✓ Suporte à instalação
✓ Solução para viagem excepcional
──────────────────────────────
          ↓
    [ Experimentar ]
    [ Ver proposta ]
```

Depois mostrem a segunda persona:

> **cliente sem garagem + viagens frequentes.**

E o sistema responde:

> “Para o seu perfil atual, recomendamos híbrido/combustão ou uma solução diferente.”

Isso torna o produto muito mais crível.

### Onde IA realmente cabe

IA é útil na camada de **comunicação e diagnóstico semântico**, não na física.

Ela pode:

classificar objeções dos dados fornecidos;  
resumir feedbacks;  
interpretar linguagem natural;  
explicar o resultado do score;  
responder dúvidas usando fontes oficiais;  
adaptar o argumento do consultor ao medo identificado.

Mas autonomia, custo, quilômetros e disponibilidade deveriam vir de regras/dados.

Isso dá a vocês a oportunidade de explicar guardrails:

> **“A IA nunca inventa autonomia ou disponibilidade. Esses dados vêm da camada determinística; o modelo apenas traduz para o cliente.”**

Isso soa maduro pra caralho numa banca.

### O experimento real que eu proporia para a Localiza

Depois do hackathon:

**Grupo A:** processo atual.  
**Grupo B:** diagnóstico + prova personalizada.  
**Grupo C:** diagnóstico + prova + experiência de vários dias.

Medir:

[ Taxa\ de\ proposta ]

[ Conversão\ em\ contrato ]

[ Tempo\ até\ decisão ]

[ Motivo\ de\ abandono ]

[ Conversão\ teste \rightarrow assinatura ]

[ Cancelamento / NPS\ posterior ]

Isso é particularmente importante porque a literatura mostra que test-drive pode elevar intenção sem necessariamente produzir adoção real depois. 

Ou seja, vocês já chegam dizendo:

> **“Não presumimos que funciona. Propomos como provar.”**

Isso é excelente metodologia.

### Minha ordem de prioridade

Eu colocaria recursos e energia assim:

**Primeiro:** descobrir a causa real no dataset.

**Segundo:** EV Fit / diagnóstico personalizado.

**Terceiro:** resposta individualizada às quatro grandes incertezas.

**Quarto:** experiência/teste para o perfil certo.

**Quinto:** estratégia de recarga via parceiros e concierge.

**Sexto:** explorar seriamente a Garantia de Mobilidade para viagens excepcionais.

**Sétimo:** infraestrutura física Localiza apenas onde dados comprovarem necessidade e utilização.

Não começaria por posto.

Não começaria por chatbot.

Não começaria por Figma.

E não começaria por “vamos fazer IA”.

### A síntese que eu defenderia para o grupo

Hoje minha aposta é:

> **O Case 1 não pede que vocês resolvam eletromobilidade. Pede que descubram por que uma pessoa interessada não se sente segura para dizer sim.**

O exterior ensina que **recarga, planejamento, interoperabilidade e experiência precisam parecer simples**, não que todo mundo deva construir a própria rede. Tesla absorve a complexidade na rota; Ford agrega infraestrutura de terceiros; SIXT usa locação e recarga como experiência de produto; políticas maduras incentivam recarga justamente onde o carro permanece parado. 

Os papers ensinam que a ansiedade é real, que ela pode persistir mesmo quando a autonomia objetiva atende à necessidade, que a média diária é uma forma ruim de dimensionar fit e que experimentar um EV melhora intenção, mas **não garante sozinho a conversão real**. 

Os dados brasileiros mostram que infraestrutura está crescendo rapidamente, mas recarga, autonomia, tempo e bateria continuam presentes na cabeça do consumidor, especialmente porque muita gente gostaria de carregar privadamente e ainda não possui a infraestrutura necessária. 

E os próprios ativos da Localiza abrem uma oportunidade que uma montadora não possui: **assinatura + aluguel + frota eletrificada + rede física + assistência + possíveis parceiros de recarga + planos de diferentes durações**. A assinatura já oferece planos de 3, 6, 9, 12, 24, 36 e 48 meses; os prazos curtos existem atualmente, embora vocês devam confirmar com a empresa quais modelos elétricos são elegíveis em cada modalidade. 

Portanto, a estratégia que eu levaria para validação com os dados é:

> ### **Vender certeza, não vender autonomia.**

E a proposta de produto:

> **“A Localiza analisa sua rotina, prova se um elétrico funciona para você e resolve antecipadamente aquilo que poderia impedir sua decisão.”**

Com um diferencial final muito Localiza:

> ### **“Seu elétrico pode atender 95% da sua vida. Nos outros 5%, a Localiza também atende.”**

Essa última frase não é apenas slogan. Ela junta o problema psicológico, a evidência sobre viagens excepcionais, a natureza da assinatura e o maior ativo estratégico que vocês têm: vocês não estão tentando vender um carro isolado.

**Vocês estão numa empresa de mobilidade.**

E, para mim, **essa mudança de perspectiva é o caminho mais promissor do Case 1 antes de ver a base oficial.**

