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
  assert.equal(lessons.length, 60);
  assert.equal(new Set(lessons.map(d => d.id)).size, 60);
  for (const d of lessons) {
    for (const lang of ['pt', 'en', 'zh']) {
      assert(d[lang].text.length > 2, d.id + ':' + lang);
      assert(d[lang].tokens.length > 0);
      for (const t of d[lang].tokens) assert(vm.runInContext('CLASSES', context)[t.c], t.c);
    }
    assert(d.phonetic && d.pinyin && d.natural && d.compare && d.speech && d.literal);
  }
});
test('há 10 situações diferentes por nível e os cinco fenômenos pedidos', () => {
  for (const level of ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']) {
    assert.equal(lessons.filter(d => d.level === level).length, 10);
  }
  assert.equal(new Set(lessons.map(d => d.en.text)).size, 60);
  assert.equal(new Set(lessons.map(d => d.zh.text)).size, 60);
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
