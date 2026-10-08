'use strict';
// Os quatro primeiros índices preservam o significado dos agendamentos antigos.
const STEPS = [1, 3, 7, 14, 30, 60];
const dayStart = (now = Date.now()) => {
  const d = new Date(now);
  d.setHours(0, 0, 0, 0);
  return d;
};
const dueFrom = (now, dias) => {
  const d = dayStart(now);
  // Avançar pelo calendário preserva a meia-noite local ao atravessar mudanças de fuso.
  d.setDate(d.getDate() + dias);
  return +d;
};
function gradeReview(reviews, id, nota, now = Date.now()) {
  if (![0, 1, 2].includes(nota)) throw new RangeError('Nota de revisão inválida.');
  const r = reviews[id] || { stage: -1, lapses: 0 };
  const stage = nota === 0 ? 0 : Math.min(r.stage + nota, STEPS.length - 1);
  // A função só atualiza o mapa recebido; armazenamento e interface ficam no app.
  reviews[id] = { stage, lapses: (r.lapses || 0) + (nota === 0 ? 1 : 0), due: dueFrom(now, STEPS[stage]) };
  return reviews[id];
}
const isDue = (r, now = Date.now()) => !!r && r.due <= now;
if (typeof module !== 'undefined') module.exports = { STEPS, dayStart, dueFrom, gradeReview, isDue };
