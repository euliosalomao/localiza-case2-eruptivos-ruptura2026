## Possibilidades de solução, complexidade e viabilidade

Minha avaliação hoje seria esta. Os níveis são **minha análise estratégica**, não avaliação oficial da Localiza.

| Hipótese                               | Evidência de dor         | Complexidade operacional | MVP em 8h           | Diferenciação  | Minha leitura                                   |
| -------------------------------------- | ------------------------ | ------------------------ | ------------------- | -------------- | ----------------------------------------------- |
| **EV Fit personalizado**               | Alta                     | Baixa–média              | Muito alta          | Alta           | **núcleo recomendado**                          |
| Conteúdo/chatbot educativo             | Média                    | Baixa                    | Muito alta          | Baixíssima     | evitar como proposta principal                  |
| Teste de vários dias                   | Média–alta               | Média                    | Alta como simulação | Média          | **camada importante**                           |
| Plano curto de experimentação          | Alta plausibilidade      | Baixa–média              | Muito alta          | Média          | **forte**, validar elegibilidade EV             |
| Concierge de wallbox                   | Alta                     | Média                    | Alta                | Alta           | **forte se base confirmar recarga residencial** |
| Rede parceira + créditos de recarga    | Alta                     | Média                    | Alta                | Média–alta     | **boa fase dois**                               |
| Construir eletropostos Localiza        | Contextual               | Alta                     | Baixa               | Média          | piloto seletivo, não núcleo                     |
| Planejador genérico de rotas           | Alta utilidade           | Média                    | Média               | Baixa          | feature, não produto                            |
| **Garantia para viagens excepcionais** | Evidência indireta forte | Média                    | Alta                | **Muito alta** | **eu investigaria seriamente**                  |
| Teste grátis irrestrito                | Evidência mista          | Média/alta em custo      | Alta                | Baixa          | não recomendo                                   |
| “Super app do elétrico”                | Difusa                   | Alta                     | Baixa               | Baixa          | armadilha                                       |

### EV Fit é a base mais racional

Eu faria um motor determinístico que pergunta ou recebe:

**quilometragem normal**,  
**dias de uso**,  
**distância nos dias mais longos**,  
**frequência de viagens longas**,  
**onde o carro dorme**,  
**possibilidade de tomada/wallbox**,  
**cidade/região**,  
**rotas recorrentes**,  
**modelo atual**,  
**orçamento**,  
**experiência anterior com EV**.

Para um prospect novo, vocês provavelmente **não têm telemetria dele**. Esse ponto é importantíssimo.

_OBS: Telemetria é o processo automatizado de coletar e transmitir métricas de desempenho e logs de eventos de ativos e sistemas distribuídos. Os dados coletados são enviados a diferentes sistemas, viabilizando o monitoramento e análise para diagnosticar falhas, identificar melhorias e otimizar recursos._

Então não construam a narrativa dependendo de:

> “A Localiza sabe todos os lugares para onde esse prospect vai.”

Ela talvez saiba para clientes atuais, locatários recorrentes ou mediante consentimento e integração futura, mas isso precisa ser confirmado.

#### Por que isso é importante?
**É importante justamente porque muda a arquitetura e a promessa do MVP**.

Se nós vendermos a solução como:

> “A Localiza analisa os últimos 30 dias do cliente e prova qual EV cabe na rotina dele”

isso só funciona automaticamente se a Localiza **já tiver dados daquele cliente**. Para um prospect novo — alguém que nunca alugou/assinou nada ou não autorizou uso de dados — ela provavelmente não sabe por onde ele anda, quantos km percorre, onde o carro dorme, frequência de viagens longas etc.

Então, se vocês ignorarem isso, a banca pode matar a ideia com uma pergunta simples:

> “De onde vêm esses dados?”

O ideal é projetar o MVP com **duas entradas**:

- **Cliente já conhecido pela Localiza:** usa telemetria/histórico disponível, com consentimento, para fazer diagnóstico muito mais preciso.
- **Prospect novo:** responde um diagnóstico curtíssimo, tipo 5 perguntas: km/dia, cidade, tipo de moradia/garagem, frequência de viagens longas e acesso a recarga.

A lógica de recomendação depois pode ser a mesma.

Exemplo:

**Prospect novo**

> “Rodo ~35 km/dia, moro em condomínio, viajo BH→SP 4x/ano.”

O sistema estima:

> “Seu uso cotidiano é altamente compatível com EV. Seu ponto crítico é recarga residencial e algumas viagens longas.”

**Cliente Localiza já conhecido**

> “Nos últimos 90 dias você rodou média de 37 km/dia, 96% dos dias abaixo de 80 km e fez 3 viagens acima de 300 km.”

Aí o diagnóstico é muito mais forte, porque é baseado em comportamento real.

Isso é importante para o MVP por três motivos: **viabilidade**, porque vocês não dependem de telemetria que talvez não exista; **escala**, porque funciona também para novos leads; e **credibilidade**, porque vocês mostram que sabem exatamente quais dados são reais e quais são declarados pelo usuário.

Eu desenharia o produto assim:

> **dados reais quando existem → perguntas mínimas quando não existem → perfil de mobilidade → objeção principal → resposta personalizada → EV recomendado / trial / solução de recarga**

E no pitch eu até usaria isso a favor:

> **“Não dependemos de telemetria para funcionar. Quando ela existe, aumentamos a precisão. Quando não existe, construímos o perfil em menos de um minuto.”**
#### Arquitetura
A arquitetura deve funcionar em três níveis:

**Nível básico:** questionário de dois minutos.  
**Nível intermediário:** rotas e hábitos fornecidos voluntariamente.  
**Nível avançado:** dados históricos/telemetria para clientes elegíveis e consentidos.

Isso torna a ideia implantável mesmo sem uma API mágica.

### O resultado não pode ser um número bobo

Não apresentaria só:

> **EV Fit: 92/100 😎**

Mostraria **por que**.

Exemplo fictício, claramente marcado como demo:

> **Sua rotina é altamente compatível com um BEV**
> 
> 93% dos seus dias ficam abaixo da faixa de uso confortável deste modelo.  
> Você teria aproximadamente duas sessões de recarga residencial por semana.  
> Em 27 dos últimos 30 dias, nenhuma recarga pública seria necessária.  
> Em duas viagens, recomendamos uma parada.  
> Uma viagem excepcional exige estratégia alternativa.

Depois:

> **Como a Localiza resolve cada exceção**

Esse segundo quadro é onde vocês vendem.

### Não calculem apenas autonomia nominal

Com base na literatura longitudinal, eu consideraria algo como:

[ Fit = f(P95_{km/dia},\ dias\ extremos,\ recarga\ privada,\ tempo\ estacionado,\ recarga\ pública,\ viagem\ longa) ]

Não precisa colocar essa fórmula exatamente na apresentação.

Mas internamente ela é melhor que:

[ Fit = km\ médio / autonomia ]

Vocês devem mostrar que conhecem a diferença entre **média** e **cauda da distribuição**. O estudo de mobilidade longitudinal mostra exatamente por que isso importa. 

### Uma métrica que eu inventaria para diagnóstico: Anxiety Gap

Isso pode ser muito bom para a análise da base.

[ Anxiety\ Gap = Risco\ percebido - Risco\ operacional\ estimado ]

Exemplo:

Cliente diz:

> “Nunca teria elétrico porque vou ficar sem bateria.”

Mas os dados mostram:

> 95% dos seus dias < 80 km  
> carregamento residencial disponível  
> maior deslocamento recorrente = 130 km  
> modelo possui folga confortável

**Grande Anxiety Gap.**

Esse cliente é excelente para:

**prova personalizada + experiência/teste.**

Outro cliente:

> mora em condomínio sem viabilidade elétrica  
> dirige 250 km frequentemente  
> região com rede ruim

Aqui não existe ansiedade “irracional”.

Existe uma incompatibilidade operacional real.

**Não tentem convertê-lo à força.**

Aliás, isso pode impressionar a banca:

> **“Nossa solução também sabe quando não vender um elétrico.”**

Porque um assinante mal qualificado que passa meses frustrado não é conversão boa.

É churn/NPS ruim esperando para acontecer.

### Concierge de recarga é melhor que “desconto em wallbox”

Pensem:

```text
Você tem garagem?
      ↓
SIM
      ↓
Casa ou condomínio?
      ↓
Avaliação técnica
      ↓
Parceiro homologado
      ↓
Instalação
      ↓
Ativação
      ↓
Primeira carga assistida
```

A Localiza deixa de dizer:

> “Aqui tem 10% de desconto num carregador, boa sorte.”

e passa a dizer:

> **“Seu carro chega com a estratégia de recarga resolvida.”**

Isso ataca uma barreira concreta encontrada na pesquisa brasileira. 

### E se não tiver recarga residencial?

A jornada muda automaticamente:

> “Tudo bem. Para o seu perfil, existem X alternativas dentro das suas rotas.”

Aí entram rede parceira, créditos, workplace, eventualmente Localiza/PitStop.

O que eu **não faria** é recomendar automaticamente EV para todo mundo.

### “Postos Localiza” são fase três, não MVP

Do ponto de vista regulatório, não existe uma barreira federal que impeça uma empresa privada de oferecer recarga comercial: a ANEEL permite a qualquer interessado exercer atividade de recarga, inclusive comercial, com preços livremente negociados, dentro das regras elétricas aplicáveis. 

Mas isso não significa que o business case seja bom.

Um posto físico traz:

**capacidade elétrica do local**,  
**obra**,  
**equipamento**,  
**conexão**,  
**manutenção**,  
**ocupação**,  
**downtime**,  
**pagamentos**,  
**suporte**,  
**utilização baixa em horários ociosos**.

Eu **não inventaria valores de CAPEX** para a banca sem orçamento de fornecedores.

Em vez disso, apresentaria uma lógica de expansão:

[ Prioridade\ do\ ponto = Leads\ EV\ na\ região \times Clientes\ sem\ carga\ privada \times Déficit\ de\ infraestrutura \times Demanda\ de\ rota ]

Ou seja:

> **não construímos carregador porque parece futurista; construímos onde os dados provam que ele remove conversão perdida.**

Isso é muito mais Localiza.

### Minha ideia favorita para diferenciação: “os 5%”

Lembra do estudo mostrando que viagens muito longas podem ser pouco frequentes, mas psicologicamente importantes? 

Pensem numa comunicação:

> **“Seu elétrico atende 95% da sua rotina. E nos outros 5%, a Localiza atende você.”**

Caralho.

Isso é uma tese.

O produto poderia oferecer, conforme viabilidade econômica:

**X créditos/dias de aluguel por ano para viagens excepcionais**,  
ou **upgrade temporário**,  
ou **reserva facilitada de híbrido/combustão**.

A empresa de carro elétrico não tem essa vantagem.

Uma locadora integrada tem.

Isso transforma uma fraqueza aparente:

> “EV não resolve tudo.”

em:

> **“Ele não precisa resolver tudo. Sua assinatura de mobilidade resolve.”**

Essa é uma perspectiva que eu acho digna de vocês explorarem porque conecta diretamente o ativo único da empresa ao medo específico do consumidor.