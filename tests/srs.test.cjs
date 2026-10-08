const test = require('node:test');
const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const { STEPS, dayStart, dueFrom, gradeReview, isDue } = require('../dist/srs.js');
// Todas as datas de referência são fixas; nenhum teste depende do relógio da execução.
const now = +new Date(2026, 9, 9, 15, 20, 0);
test('primeira nota 1 começa em um dia', () => {
  const reviews = {};
  const r = gradeReview(reviews, 'elo-011', 1, now);
  assert.deepEqual(r, { stage: 0, lapses: 0, due: dueFrom(now, 1) });
  assert.equal(reviews['elo-011'], r);
});
test('primeira nota 2 salta para três dias', () => {
  assert.deepEqual(gradeReview({}, 'elo-011', 2, now), { stage: 1, lapses: 0, due: dueFrom(now, 3) });
});
test('errar após estágio alto volta a zero e acumula lapses', () => {
  const reviews = { 'elo-011': { stage: 5, lapses: 2, due: now } };
  assert.deepEqual(gradeReview(reviews, 'elo-011', 0, now), { stage: 0, lapses: 3, due: dueFrom(now, 1) });
});
test('nota 2 avança dois estágios e respeita o teto de sessenta dias', () => {
  const reviews = { x: { stage: 1, lapses: 1, due: now } };
  assert.equal(gradeReview(reviews, 'x', 2, now).stage, 3);
  assert.equal(gradeReview(reviews, 'x', 2, now).stage, 5);
  assert.deepEqual(gradeReview(reviews, 'x', 2, now), { stage: STEPS.length - 1, lapses: 1, due: dueFrom(now, 60) });
});
test('revisões antigas sem lapses mantêm a correspondência dos estágios', () => {
  const reviews = { x: { stage: 2, due: now - 1 } };
  assert.equal(isDue(reviews.x, now), true);
  assert.deepEqual(gradeReview(reviews, 'x', 1, now), { stage: 3, lapses: 0, due: dueFrom(now, 14) });
});
test('isDue muda exatamente na virada do dia e aceita ausência de revisão', () => {
  const due = dueFrom(now, 1), r = { stage: 0, due };
  assert.equal(isDue(r, due - 1), false);
  assert.equal(isDue(r, due), true);
  assert.equal(isDue(r, due + 1), true);
  assert.equal(isDue(undefined, due), false);
  assert.equal(+dayStart(due + 12345), due);
});
// Processos isolados garantem que cada caso use seu próprio fuso, inclusive em execução paralela.
for (const [zone, hours] of [['America/New_York', 71], ['America/Sao_Paulo', 72]]) {
  test('calendário preserva 00:00 local em ' + zone, () => {
    const code = `
      const assert = require('node:assert/strict');
      const { dayStart, dueFrom, gradeReview } = require(${JSON.stringify(require.resolve('../dist/srs.js'))});
      const now = +new Date(2026, 2, 7, 15, 30);
      const due = dueFrom(now, 3), date = new Date(due);
      assert.deepEqual([date.getFullYear(),date.getMonth(),date.getDate(),date.getHours(),date.getMinutes(),date.getSeconds(),date.getMilliseconds()],[2026,2,10,0,0,0,0]);
      assert.equal((due - +dayStart(now)) / 36e5, ${hours});
      assert.equal(gradeReview({}, 'elo-011', 2, now).due, due);
    `;
    const result = spawnSync(process.execPath, ['-e', code], { env: { ...process.env, TZ: zone }, encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr || String(result.error || ''));
  });
}
test('nota inválida não modifica o progresso', () => {
  const reviews = {};
  assert.throws(() => gradeReview(reviews, 'x', 3, now), RangeError);
  assert.deepEqual(reviews, {});
});
