# Rota elétrica

**A escolha certa começa na sua rotina.**

Protótipo navegável da proposta do grupo **Eruptivos**, criada no Case 1 do Hackathon Ruptura 2026. A experiência ajuda a comparar carros por assinatura com duas informações que precisam aparecer juntas: o custo mensal de uso e a compatibilidade com a rotina.

![Demonstração de 15 segundos da Rota elétrica](docs/demo.gif)

[Ver o questionário](docs/screenshots/questionario.jpg) · [Ver a comparação](docs/screenshots/comparacao.jpg) · [Ver o catálogo](docs/screenshots/catalogo.jpg)

## Por que essa ideia existe

O grupo identificou uma lacuna na jornada de escolha: a diferença entre mensalidades aparece de imediato, enquanto a economia com energia exige que o cliente faça a conta. Ao mesmo tempo, dúvidas sobre recarga e viagens podem interromper a decisão.

A hipótese do projeto é que uma comparação transparente, acompanhada de respostas relevantes para o perfil, pode ajudar o cliente a decidir com mais clareza. O protótipo demonstra essa hipótese. Não mede aumento de conversão.

## Experimente os dois caminhos

- **Pelo perfil:** responda quatro perguntas opcionais, veja o resultado e abra a comparação recomendada.
- **Pelo catálogo:** pule o questionário, selecione um dos quatro carros e receba uma comparação ou um reforço da escolha elétrica.

O resultado respeita perfis em que a combustão faz mais sentido. A recarga incerta aparece como uma pendência, mesmo quando o cenário residencial oferece economia.

As perguntas abordam uso principal, prioridade de decisão, acesso à recarga e expectativa. O FAQ prioriza dúvidas sobre condomínio, recarga pública ou viagens conforme as respostas. Os dados ficam apenas em memória e desaparecem ao recarregar a página.

## Demonstração de 15 segundos

O GIF acima foi capturado diretamente do protótipo e já está pronto para uso no README.

Abra o app e clique em **Ver demo de 15s**, ou acesse `http://127.0.0.1:5173/?demo=1`. O modo automático percorre questionário, resultado, comparação e reforço da escolha. Ao terminar, a tela continua navegável.

Para gravar, use uma janela de aproximadamente 1440 × 1000 ou tela cheia, mantenha a página no topo e inicie a captura antes de clicar no botão. A demonstração usa a persona urbana que prioriza tecnologia e pode carregar em casa. O roteiro completo está em [docs/demonstracao.md](docs/demonstracao.md).

## Abrir sem instalar

O pacote da entrega inclui `Rota-eletrica.html`, uma versão independente com React, fotos e fontes incorporados. Abra esse arquivo no navegador para experimentar os fluxos sem instalar nada. O código abaixo permite continuar o desenvolvimento.

## Executar localmente

Requer Node.js 20.19+ ou 22.12+ e npm.

```sh
npm install
npm run dev
```

```sh
npm test
npm run build
npm run preview
```

## A conta, sem esconder a parcela

Todos os planos do exemplo consideram 24 meses e 2.000 km por mês. Os valores são **ilustrativos**. Não são preços comerciais ou medições oficiais de consumo.

| Modelo | Mensalidade | Gasolina ou energia | Total mensal |
| --- | ---: | ---: | ---: |
| Volkswagen Taos | R$ 6.129,00 | R$ 1.380,95 | R$ 7.509,95 |
| BYD Yuan Plus | R$ 7.109,00 | R$ 348,75 | R$ 7.457,75 |
| Chevrolet Onix | R$ 2.499,00 | R$ 928,00 | R$ 3.427,00 |
| BYD Dolphin Mini | R$ 2.899,00 | R$ 241,80 | R$ 3.140,80 |

As premissas estão disponíveis no próprio comparativo e em [docs/decisoes.md](docs/decisoes.md). Instalação de carregador e recarga pública não entram na conta. Benefícios de manutenção da assinatura não são contabilizados novamente como economia exclusiva do elétrico.

## Construção

React, TypeScript e Vite, com CSS responsivo e ícones Lucide. Os carros, as perguntas e as regras ficam em `src/domain.js`. A interface está em `src/App.tsx` e `src/styles.css`. Os testes cobrem a consistência financeira, os pares de categoria e as 192 combinações possíveis do questionário.

Não há backend, banco de dados, autenticação, chatbot, integração comercial ou armazenamento de respostas. A etapa final simula o encaminhamento a uma proposta e informa que a demonstração terminou.

## Do evento ao protótipo

O pitch de três minutos concentrou a apresentação na recomendação inteligente e no reforço de valor. Esta continuação transforma a proposta em uma jornada navegável, incluindo o questionário opcional e o FAQ que conectam a decisão ao perfil do cliente.

**Equipe Eruptivos, grupo 5:** Davi Rangel, Luiz Fernando, Edson Henrich, Felipe Pires, Gabriele Monteiro e Luan Miranda. Créditos transcritos do pitch fornecido.

O desenvolvimento posterior ao evento preserva o trabalho coletivo e materializa os fluxos apresentados nos materiais do grupo.

## Referências e limites

As fontes de contexto foram o prompt da ideia, o brainstorm do time, o pitch e a apresentação do Case 1 fornecidos pelo autor. Os arquivos originais não são republicados neste repositório. Estatísticas internas e resultados esperados não são apresentados como evidência pública de eficácia.

As imagens dos carros vêm de páginas oficiais de BYD e Localiza. Veja [docs/fontes.md](docs/fontes.md) para os créditos. As imagens são referências ilustrativas e podem representar versões diferentes dos modelos da simulação.

**Projeto conceitual independente, sem vínculo oficial com a Localiza.** Parcerias, descontos de wallbox e alternativas de locação são hipóteses de piloto, não serviços contratados ou garantidos. Marcas e imagens pertencem aos respectivos titulares.
