# Backlog do Elo

Registro de propostas; nenhuma funcionalidade desta lista foi implementada na Rodada A. Estimativas em dias de trabalho são indicativas e dependem de escopo, volume de conteúdo e revisão. O app continua estático, sem dependências de execução e sem etapa de build no deploy.

## 1. Áudio pré-gerado por frase
- **Problema:** speechSynthesis escolhe a realização sonora e pode não reproduzir as reduções ensinadas.
- **Por que importa:** a divergência entre explicação e áudio enfraquece o aprendizado de Connected Speech.
- **Proposta:** comparar TTS neural e gravação humana em um lote piloto; revisar a pronúncia e associar cada arquivo à frase, variedade e versão do conteúdo. Planejar download/cache offline e controle de tamanho.
- **Esforço estimado:** 5–10 dias para o fluxo técnico; produção e revisão do acervo à parte.

## 2. Mini-diálogos de 2–3 turnos
- **Problema:** cada situação contém apenas uma frase, embora a experiência proponha uma conversa.
- **Por que importa:** respostas, intenção, cortesia e continuidade precisam de contexto.
- **Proposta:** acrescentar interlocutores e turnos curtos aos temas mais usados, com tradução e áudio por turno. Manter as frases atuais acessíveis.
- **Esforço estimado:** 4–7 dias para o piloto e interface; expansão editorial à parte.

## 3. Chunks como unidades de aprendizagem
- **Problema:** a revisão avalia frases inteiras, sem destacar os padrões reutilizáveis.
- **Por que importa:** blocos como “Can you…?”, “I'd like…” e “能不能…” podem ser usados em situações novas.
- **Proposta:** definir 5–8 blocos relevantes por situação quando houver conteúdo suficiente, com variações e revisão própria. Usar identificadores estáveis e evitar fabricar blocos apenas para atingir uma quantidade.
- **Esforço estimado:** 8–15 dias para modelo, exercícios e migração; curadoria adicional.

## 4. Lição em três camadas
- **Problema:** muitos blocos simultâneos competem pela atenção.
- **Por que importa:** a sobrecarga dificulta saber o que observar primeiro.
- **Proposta:** apresentar frases + áudio, depois gramática colorida, depois Connected Speech detalhado, com abertura progressiva e acesso previsível entre camadas.
- **Esforço estimado:** 3–5 dias, incluindo avaliação de uso no celular.

## 5. Um idioma-alvo por vez
- **Problema:** estudar três representações como metas simultâneas pode dividir a atenção.
- **Por que importa:** o apoio precisa ajudar a tarefa sem substituir o esforço de recuperação.
- **Proposta:** investigar um modo opcional de alvo único, com os outros idiomas como apoio, preservando a comparação trilingue que é central ao Elo. Validar com o usuário antes de mudar o padrão.
- **Esforço estimado:** 3–5 dias.

## 6. Exportar/importar progresso
- **Problema:** limpar o navegador ou trocar de aparelho pode perder o localStorage.
- **Por que importa:** favoritos e histórico representam investimento de estudo.
- **Proposta:** exportação JSON versionada, validação de importação, prévia das quantidades e escolha explícita de mesclar ou substituir. Preservar compatibilidade com elo-progress-v2.
- **Esforço estimado:** 2–3 dias.

## 7. Fonte de conteúdo em JSONL
- **Problema:** treze campos posicionais separados por barras são frágeis e difíceis de editar.
- **Por que importa:** omissões e separadores extras podem deslocar campos e comprometer o material.
- **Proposta:** migrar para chaves explícitas em JSONL, com validação no compilador editorial Python. Preservar IDs, saídas estáticas e deploy sem build.
- **Esforço estimado:** 3–5 dias, incluindo comparação integral do acervo.

## 8. Módulos ES nativos
- **Problema:** app.js concentra estado, áudio, exercícios, atlas e renderização.
- **Por que importa:** responsabilidades misturadas aumentam o risco de regressões.
- **Proposta:** separar state, audio, practice, srs e views em módulos nativos sem bundler; mover ATLAS para content/. Planejar compatibilidade com publicação e eventual cache offline antes da mudança.
- **Esforço estimado:** 4–7 dias.

## 9. Revisão nativa de mandarim e registro
- **Problema:** equivalência gramatical não garante naturalidade em um cenário específico; pedidos de hotel como 我有预订 merecem avaliação contextual frente a alternativas como 我订了房间.
- **Por que importa:** o aluno precisa aprender formulações naturais e apropriadas ao interlocutor.
- **Proposta:** revisão por falante nativo qualificado, incluindo contexto, colocação, pinyin, segmentação, traduções e marcação formal/informal. Tratar alternativas como escolhas de contexto, não substituições automáticas.
- **Esforço estimado:** 5–10 dias por lote de 90 situações, sujeito à disponibilidade do revisor.

## 10. Reavaliar a ponte brasileira
- **Problema:** a mistura de respelling em português com símbolos fonéticos pode induzir correspondências sonoras imprecisas.
- **Por que importa:** o apoio visual pode dificultar a evolução da pronúncia se virar a referência principal.
- **Proposta:** tornar a camada opcional, testar ocultação padrão a partir do A2 e reforçar áudio/pinyin/IPA conforme o idioma. Validar a mudança com o usuário, que valoriza esse apoio.
- **Esforço estimado:** 3–5 dias para interface e piloto pedagógico; revisão do acervo à parte.

## 11. Percepção de tons antes da produção
- **Problema:** pinyin e repetição não verificam se o aluno distingue os tons ao ouvir.
- **Por que importa:** perceber contrastes ajuda a orientar a produção e a compreensão.
- **Proposta:** exercícios graduais de identificação e discriminação, com áudio validado, primeiro em sílabas e depois em palavras/frases contextualizadas; feedback específico e variação de falantes.
- **Esforço estimado:** 7–12 dias para um piloto com áudio disponível.

## 12. Métricas leves
- **Problema:** não há dados agregados para avaliar uso de áudio, prática e retorno.
- **Por que importa:** decisões de produto precisam distinguir abertura de tela de prática continuada.
- **Proposta:** avaliar Plausible/Umami; definir eventos de situação aberta, áudio tocado, nota e retenção por estágio. Não enviar gravações, frases digitadas ou o conteúdo integral do progresso; definir transparência e configuração antes da integração.
- **Esforço estimado:** 2–4 dias, além de hospedagem/configuração do serviço.

## Pedido editorial pendente

Ampliar o estoque de frases por tema e tornar as explicações de mandarim específicas: organização da frase, função dos elementos, partículas, classificadores e diferenças de sentido. Esse trabalho fica fora dos commits pontuais da Rodada A. Antes de acrescentar ou reordenar linhas, concluir o congelamento de IDs previsto no Item 11 da Rodada B.

## Histórico — encerramento da Rodada A

Itens 5–9 e 11 da Rodada B aguardam autorização após a entrega da Rodada A. Os testes de SRS do Item 10 foram antecipados por solicitação explícita do usuário, com now fixo e processos nos fusos America/New_York e America/Sao_Paulo. Na futura correção de foco, manter #show-labels como está e limitar a restauração a #favorite e #highlight.


## Pendências de publicação — PWA e compartilhamento (Rodada B, Item 9)

A pedido do usuário, estes binários estão **somente referenciados**, não foram criados nem enviados:

| Arquivo pendente | Uso e preparação |
| --- | --- |
| `dist/icons/elo-192.png` | Ícone PNG real de 192 × 192, exportado do SVG do favicon atual. |
| `dist/icons/elo-512.png` | Ícone PNG real de 512 × 512, exportado do mesmo SVG. |
| `dist/og-image.png` | Imagem social PNG, recomendação de 1200 × 630, no endereço público https://elo-idiomas.netlify.app/og-image.png. |

Sem os ícones não se considera validada a instalação no Android; sem a imagem social, a prévia de compartilhamento fica incompleta. O cache offline não depende desses arquivos pendentes. Após adicioná-los, validar instalação, prévia e cache no aparelho.

O service worker usa cache-first e versão explícita em `CACHE_NAME`. Ao modificar HTML, CSS, JS, acervo ou manifesto, atualizar essa versão no mesmo deploy. Workers atualizados aguardam as abas antigas fecharem; não há ativação forçada durante uma prática. O primeiro acesso e a conclusão do precache exigem internet. O cache do app não inclui vozes: ouvir offline exige uma voz local disponível no dispositivo.
