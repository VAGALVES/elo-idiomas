# Elo — três idiomas, uma conversa

Aplicativo estático para brasileiros estudarem **português, inglês e mandarim juntos**, comparando a mesma situação. Atualização de 8 de outubro de 2026.

## O que há nesta versão

- **60 situações trilingues (180 versões alinhadas)**: dez situações por nível A1, A2, B1, B2, C1 e C2.
- Português, inglês e mandarim na mesma tela. Não há seletor global que esconda um idioma.
- Palavras coloridas conforme a classe gramatical, rótulos opcionais e destaque por classe.
- Connected Speech visível em todos os exemplos ingleses: formas fracas, contrações, linking, assimilation, elision, flapping, glottalization e ritmo, conforme a frase.
- Pinyin tonal, ponte aproximada de leitura para brasileiros, notas de mudanças de tom e ordem chinesa explicada em português.
- Comparação de estrutura específica para cada situação.
- Áudio separado nos três idiomas ou sequência PT → EN → 中文, de 0,5× a 1,2×.
- Atlas comparativo de 12 classes/categorias, sempre com os três idiomas.
- Busca por português, inglês, caracteres ou pinyin; filtros por nível, tema e fenômeno.
- Prática de compreensão e ordenação de palavras em inglês e mandarim, mantendo as três referências visíveis.
- Gravação local da voz para comparação, favoritos e revisões em intervalos de 1, 3, 7 e 14 dias.

## Arquivos

- `dist/index.html`: estrutura da interface.
- `dist/style.css`: layout responsivo e cores.
- `dist/app.js`: navegação, filtros, reprodução, práticas, favoritos e revisão.
- `dist/data.js`: acervo gerado, pronto para publicação.
- `dist/phonetics.js`: pinyin, marcas tonais, notas e mapa de apoio brasileiro por sílaba.
- `content/lessons.txt`: fonte editável dos 60 estudos.
- `content/build_data.py`: compilador do acervo, sem dependências externas.
- `tests/content.test.cjs`: verificações do acervo com Node.js.
- `netlify.toml`: publica a pasta `dist`.

## Publicar no Netlify com GitHub

Importe `VAGALVES/elo-idiomas` e configure:

| Campo | Valor |
| --- | --- |
| Branch | `main` |
| Diretório base | vazio |
| Comando de build | vazio |
| Diretório de publicação | `dist` |

Não exige npm, banco, chave de API ou variáveis de ambiente. O acervo já está compilado no repositório. O script Python é usado somente ao editar o conteúdo. Um site Netlify ligado à branch main pode publicar automaticamente os novos commits, conforme a configuração da conta.

Documentação: https://docs.netlify.com/build/configure-builds/file-based-configuration/

## Executar e validar

```sh
python -m http.server 8000 --directory dist
```

Abra http://localhost:8000.

Ao editar os estudos:

```sh
python content/build_data.py
node --test tests/content.test.cjs
node --check dist/app.js
node --check dist/phonetics.js
```

Cada linha em `content/lessons.txt` possui 13 campos separados por `|`: nível, assunto, título, português anotado, inglês anotado, mandarim anotado, pinyin numérico, inglês natural, apoio de pronúncia BR, fenômenos separados por vírgula, explicação do Connected Speech, comparação gramatical e ordem chinesa em português.

Tokens usam `palavra/classe`, com pontuação após a classe: `you/pro?`. As palavras chinesas são segmentadas por unidades lexicais; elementos gramaticais como classificadores podem aparecer separados. Não atribua uma classe a cada caractere indiscriminadamente.

## Limites e critérios pedagógicos

A1–C2 orienta a complexidade da atividade, incluindo registro e argumentação; não é certificação da frase, equivalência HSK ou curso completo. Traduções preservam a intenção comunicativa e podem reorganizar ou explicitar elementos.

A ponte brasileira é aproximada. Ela não reproduz todos os sons estrangeiros. No mandarim, os números indicam tons de referência; 一 e 不 podem ter o tom contextual já anotado. As notas explicam terceiros tons consecutivos sem impor uma transformação mecânica a sequências longas. A pronúncia real depende do agrupamento prosódico.

A classificação é contextual e didática. Auxiliares são verbos. Contrações portuguesas podem conter mais de uma classe. Construções de vários elementos recebem explicação própria; classe lexical não é sinônimo de sujeito, objeto ou função adverbial.

O áudio usa `speechSynthesis` e vozes disponíveis no dispositivo. Não contém gravações humanas e não garante a realização exata de todas as reduções ensinadas. As opções de velocidade alteram a síntese, não a reprodução de uma gravação original. Algumas vozes precisam de internet. O app avisa quando um idioma não possui voz instalada.

## Privacidade e progresso

Favoritos e prática ficam em `localStorage`, no navegador e domínio utilizados, sem sincronização entre dispositivos. A gravação é temporária e local, não é enviada a um servidor e não recebe nota automática. O microfone requer HTTPS ou localhost e permissão do usuário.

A versão nova usa `elo-progress-v2`. O estado antigo `elo-progress` não é apagado. Favoritos e prática de estudos antigos com correspondência temática são migrados quando possível. Mudar do domínio Sites para Netlify não transfere o armazenamento local automaticamente.

Não há autenticação própria. O acesso depende da configuração da hospedagem.

## Verificação desta atualização

O acervo e a sintaxe JavaScript foram verificados. Testes em DOM simulado conferiram filtros por nível, caracteres e pinyin; presença simultânea dos três idiomas; favoritos; sequência de áudio com vozes simuladas; falta de voz; prática nas duas línguas; atlas e revisão. Microfone e qualidade real das vozes dependem do dispositivo e não foram validados por esses testes.
