const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const context = vm.createContext({});
for (const file of ['data.js', 'phonetics.js']) {
  vm.runInContext(fs.readFileSync(path.join(__dirname, '../dist', file), 'utf8'), context);
}
const lessons = vm.runInContext('LESSONS', context);
test('cada situação contém as três línguas, análise e áudio textual', () => {
  assert.equal(lessons.length, 90);
  assert.equal(new Set(lessons.map(d => d.id)).size, 90);
  for (const d of lessons) {
    for (const lang of ['pt', 'en', 'zh']) {
      assert(d[lang].text.length > 2, d.id + ':' + lang);
      assert(d[lang].tokens.length > 0);
      for (const t of d[lang].tokens) assert(vm.runInContext('CLASSES', context)[t.c], t.c);
    }
    assert(d.phonetic && d.pinyin && d.natural && d.compare && d.speech && d.literal);
  }
});
test('há pelo menos 10 situações diferentes por nível e os cinco fenômenos pedidos', () => {
  for (const level of ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']) {
    assert(lessons.filter(d => d.level === level).length >= 10);
  }
  assert.equal(new Set(lessons.map(d => d.en.text)).size, 90);
  assert.equal(new Set(lessons.map(d => d.zh.text)).size, 90);
  for (const feature of ['Linking', 'Assimilation', 'Elision', 'Flapping', 'Glottalization']) {
    assert(lessons.some(d => d.features.includes(feature)), feature);
  }
});
test('todo pinyin tem apoio de leitura e marcação de tom válidos', () => {
  for (const d of lessons) {
    context.raw = d.pinyin;
    assert(vm.runInContext('pinyin(raw)', context).length > 0);
    assert(vm.runInContext('chinesePronunciation(raw)', context).length > 0);
    assert(vm.runInContext('toneNotes(raw)', context).length > 0);
  }
  assert.equal(vm.runInContext("pinyin('ni3 hao3')", context), 'nǐ hǎo');
  assert.equal(vm.runInContext("pinyin('lv4 dianr3')", context), 'lǜ diǎnr');
});

test('cada situação pertence a um assunto válido e todos os temas têm conteúdo', () => {
  const topics=vm.runInContext('TOPICS',context),groups=vm.runInContext('TOPIC_GROUPS',context);
  assert.equal(topics.length,13);
  for(const t of topics){assert(groups.some(g=>g.id===t.group));assert(lessons.filter(d=>d.topicId===t.id).length>=2,t.id);}
  for(const d of lessons)assert(topics.some(t=>t.id===d.topicId && t.label===d.topic));
  for(const id of ['hotel','food','nature','health','services','leisure'])assert(lessons.filter(d=>d.topicId===id).length>=4,id);
});

// Snapshot independente do compilador: não regenerar ao editar o acervo.
const ORIGINAL_IDS = {
  "A1|Pedir ajuda": "elo-001",
  "A1|Apresentar-se": "elo-002",
  "A1|Pedir uma maçã": "elo-003",
  "A1|Beber chá": "elo-004",
  "A1|Procurar o metrô": "elo-005",
  "A1|Perguntar o preço": "elo-006",
  "A1|Dizer que não entende": "elo-007",
  "A1|Agradecer": "elo-008",
  "A1|Morar aqui": "elo-009",
  "A1|Pedir dois ingressos": "elo-010",
  "A2|Preciso ir": "elo-011",
  "A2|Pedir café": "elo-012",
  "A2|Perguntar se comeu": "elo-013",
  "A2|Dizer que não é seu": "elo-014",
  "A2|Pedir repetição": "elo-015",
  "A2|Perguntar a duração": "elo-016",
  "A2|Pagar com cartão": "elo-017",
  "A2|Estar a caminho": "elo-018",
  "A2|Marcar amanhã": "elo-019",
  "A2|Escolher o menor": "elo-020",
  "B1|Estudar em casa": "elo-021",
  "B1|Receber a amostra": "elo-022",
  "B1|Um pouco melhor": "elo-023",
  "B1|Encontro na próxima semana": "elo-024",
  "B1|Já esteve em Xangai?": "elo-025",
  "B1|Explicar um atraso": "elo-026",
  "B1|Se chover, ficar em casa": "elo-027",
  "B1|Pedir que fale mais devagar": "elo-028",
  "B1|Ainda não terminou": "elo-029",
  "B1|Comparar preços": "elo-030",
  "B2|Enviar atualização": "elo-031",
  "B2|Aprovar uma amostra": "elo-032",
  "B2|Colocar a amostra aqui": "elo-033",
  "B2|Resolver apesar do problema": "elo-034",
  "B2|Queda nas vendas": "elo-035",
  "B2|Prazo até sexta-feira": "elo-036",
  "B2|Esperar confirmação": "elo-037",
  "B2|Revisar antes de enviar": "elo-038",
  "B2|Preços oscilando": "elo-039",
  "B2|Mudar o plano se necessário": "elo-040",
  "C1|Discordar com cuidado": "elo-041",
  "C1|Condição irreal no passado": "elo-042",
  "C1|Preço e qualidade": "elo-043",
  "C1|Superar expectativas": "elo-044",
  "C1|Esclarecer o objetivo": "elo-045",
  "C1|Impedir um erro": "elo-046",
  "C1|Separar correlação e causa": "elo-047",
  "C1|Reconhecer uma objeção": "elo-048",
  "C1|Condicionar a aprovação": "elo-049",
  "C1|Priorizar a precisão": "elo-050",
  "C2|Evitar uma conclusão precoce": "elo-051",
  "C2|Retomar o foco": "elo-052",
  "C2|Distinguir evidência e ausência": "elo-053",
  "C2|Evitar falsa escolha": "elo-054",
  "C2|Rever uma premissa": "elo-055",
  "C2|Concessão sem desistir": "elo-056",
  "C2|Separar hipótese e fato": "elo-057",
  "C2|Reconhecer limites": "elo-058",
  "C2|Reavaliar diante de evidências": "elo-059",
  "C2|Precisão acima da certeza": "elo-060",
  "A1|Confirmar uma reserva": "elo-061",
  "A2|Pedir outro quarto": "elo-062",
  "A2|Perguntar sobre o café da manhã": "elo-063",
  "B1|Negociar a saída": "elo-064",
  "A1|Pedir o cardápio": "elo-065",
  "A2|Pedir água": "elo-066",
  "B1|Informar uma alergia": "elo-067",
  "A2|Pedir a conta": "elo-068",
  "A1|Comentar a chuva": "elo-069",
  "A2|Passear no parque": "elo-070",
  "B1|Verificar uma trilha": "elo-071",
  "B2|Reduzir o uso de plástico": "elo-072",
  "A1|Dizer que sente dor": "elo-073",
  "A2|Procurar uma farmácia": "elo-074",
  "B1|Marcar uma consulta": "elo-075",
  "A2|Pedir ajuda urgente": "elo-076",
  "A1|Gostar de música": "elo-077",
  "A2|Convidar para o cinema": "elo-078",
  "B1|Consultar o horário do museu": "elo-079",
  "B2|Conversar sobre um filme": "elo-080",
  "A1|Pedir a senha da internet": "elo-081",
  "A2|Relatar falta de conexão": "elo-082",
  "B1|Enviar uma encomenda": "elo-083",
  "B2|Pedir confirmação por escrito": "elo-084",
  "A1|Apresentar uma amiga": "elo-085",
  "B1|Dizer que sente saudade": "elo-086",
  "A2|Pedir para abrir a janela": "elo-087",
  "B1|Combinar tarefas da casa": "elo-088",
  "A2|Pedir uma parada": "elo-089",
  "B1|Perguntar sobre um atraso": "elo-090"
};
test('snapshot: os 90 IDs originais continuam associados ao mesmo nível e título', () => {
  const map = JSON.parse(fs.readFileSync(path.join(__dirname, '../content/id_map.json'), 'utf8'));
  const byKey = new Map(lessons.map(d => [d.level + '|' + d.title, d.id]));
  for (const [key, id] of Object.entries(ORIGINAL_IDS)) {
    assert.equal(byKey.get(key), id, key);
    assert.equal(map[key], id, key);
  }
});
test('reordenar a fonte e acrescentar uma lição preserva os IDs anteriores', () => {
  const os = require('node:os'), { execFileSync } = require('node:child_process');
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'elo-ids-'));
  try {
    fs.mkdirSync(path.join(root, 'content')); fs.mkdirSync(path.join(root, 'dist'));
    for (const file of ['build_data.py', 'topics.json', 'id_map.json']) {
      fs.copyFileSync(path.join(__dirname, '../content', file), path.join(root, 'content', file));
    }
    const source = fs.readFileSync(path.join(__dirname, '../content/lessons.txt'), 'utf8').trim().split('\n');
    const extra = source[0].split('|'); extra[2] = 'Situação exclusiva do teste de IDs';
    // A fonte real não é alterada: toda a simulação ocorre em uma pasta temporária.
    fs.writeFileSync(path.join(root, 'content/lessons.txt'), [extra.join('|'), ...source.reverse()].join('\n') + '\n');
    execFileSync('python', [path.join(root, 'content/build_data.py')]);
    const c = vm.createContext({});
    vm.runInContext(fs.readFileSync(path.join(root, 'dist/data.js'), 'utf8'), c);
    const generated = vm.runInContext('LESSONS', c);
    for (const [key, id] of Object.entries(ORIGINAL_IDS)) assert.equal(generated.find(d => d.level + '|' + d.title === key).id, id);
    const next = generated.find(d => d.title === extra[2]).id;
    assert(!Object.values(ORIGINAL_IDS).includes(next));
    const persisted = JSON.parse(fs.readFileSync(path.join(root, 'content/id_map.json'), 'utf8'));
    assert.equal(persisted[extra[0] + '|' + extra[2]], next);
    execFileSync('python', [path.join(root, 'content/build_data.py')]);
    assert.equal(JSON.parse(fs.readFileSync(path.join(root, 'content/id_map.json'), 'utf8'))[extra[0] + '|' + extra[2]], next);
  } finally { fs.rmSync(root, { recursive: true, force: true }); }
});
