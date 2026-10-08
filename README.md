# Elo — Laboratório de idiomas

Aplicativo estático de inglês e mandarim com interface em português. Exportação da primeira versão, em 8 de outubro de 2026.

## Arquivos

- `dist/index.html`: interface e estrutura da página.
- `dist/style.css`: estilos responsivos.
- `dist/data.js`: 24 estudos, traduções, classes gramaticais, pronúncia e exercícios.
- `dist/app.js`: filtros, navegação, áudio, exercícios, favoritos e gravação.
- `netlify.toml`: configuração de publicação.

Não exige npm, build, servidor de aplicação, banco de dados ou chave de API. Os quatro arquivos de dist são também o código-fonte editável.

## GitHub

1. Extraia o ZIP.
2. Crie um repositório no GitHub.
3. Adicione o conteúdo da pasta `elo-idiomas` à raiz do repositório: `README.md`, `netlify.toml`, `.gitignore` e a pasta `dist`.
4. Faça o commit. Envie os arquivos extraídos, não apenas o ZIP.

Opcionalmente, em um terminal dentro da pasta extraída:

```sh
git init
git add .
git commit -m "Adiciona primeira versão do Elo"
git branch -M main
git remote add origin URL_DO_SEU_REPOSITORIO
git push -u origin main
```

Substitua `URL_DO_SEU_REPOSITORIO` pela URL do seu repositório vazio.

## Netlify conectado ao GitHub

Importe o repositório do GitHub no Netlify e selecione:

- Diretório base: raiz do repositório (deixar vazio).
- Comando de build: deixar vazio.
- Diretório de publicação: `dist`.

O arquivo `netlify.toml` já informa o diretório de publicação. Nenhuma variável de ambiente é necessária. Para publicação manual, envie a pasta `dist` contendo o `index.html`.

Documentação: https://docs.netlify.com/build/configure-builds/file-based-configuration/

## Executar localmente

Com Python instalado, na raiz do projeto:

```sh
python -m http.server 8000 --directory dist
```

Abra http://localhost:8000. O servidor local facilita testar gravação e recursos do navegador; a publicação no Netlify oferece HTTPS.

## Como editar

Edite `dist/data.js` para ampliar o acervo, `dist/style.css` para o visual e `dist/app.js` para o comportamento. Preserve a assinatura da função `add` e atribua classes existentes em `CLASSES` aos tokens. Cada estudo contém três alternativas e uma explicação do exercício.

## Limites da primeira versão

- São 24 estudos, dois por nível e idioma; não é um curso completo A1–C2. Os níveis são orientativos das atividades, sem equivalência automática ao HSK.
- A pronúncia escrita para brasileiros é aproximada; pinyin, IPA e tons complementam o apoio.
- O áudio utiliza `speechSynthesis` e as vozes disponíveis no dispositivo. Pode exigir internet e não garante a realização exata de todas as reduções fonéticas indicadas. Não há gravações humanas incluídas nem pacote de áudios para download.
- Favoritos e estudos praticados ficam em `localStorage`, neste navegador e domínio. Não são sincronizados entre dispositivos e não migram automaticamente do endereço antigo para o Netlify.
- A gravação usa o microfone com permissão, é temporária e local, sem upload nem avaliação automática. Requer navegador compatível e contexto seguro (HTTPS ou localhost).
- Esta exportação não inclui autenticação. O controle de acesso da hospedagem anterior não acompanha os arquivos; o acesso no Netlify depende da configuração feita lá.
- Não foram incluídas credenciais, histórico Git ou configurações da hospedagem anterior.

## Verificação desta exportação

Os quatro arquivos do app foram preservados byte a byte em relação à cópia publicada disponível. JavaScript verificado quanto à sintaxe; ZIP verificado quanto à integridade. A publicação na sua conta Netlify será feita por você.
