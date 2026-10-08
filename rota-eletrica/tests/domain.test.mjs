import test from 'node:test';
import assert from 'node:assert/strict';
import { cars, costs, getProfile, getFaq, questions } from '../src/domain.js';

test('a conta do pitch fecha com premissas consistentes', () => {
  assert.deepEqual(costs(cars.find(c => c.id === 'taos')), { energy: 1380.95, total: 7509.95 });
  assert.deepEqual(costs(cars.find(c => c.id === 'yuan')), { energy: 348.75, total: 7457.75 });
  assert.equal(Math.round((costs(cars[0]).total - costs(cars[1]).total) * 100), 5220);
});
test('comparações usam carros da mesma categoria e motores diferentes', () => {
  for (const car of cars) {
    const paired = cars.find(c => c.id === car.pair);
    assert.equal(paired.category, car.category);
    assert.notEqual(paired.electric, car.electric);
    assert.equal(paired.pair, car.id);
  }
});
test('recomendação respeita recarga e rotinas difíceis em todas as 192 combinações', () => {
  let combinations = 0;
  for (const a of questions[0].options) for (const b of questions[1].options) for (const c of questions[2].options) for (const d of questions[3].options) {
    const result = getProfile([a.id, b.id, c.id, d.id]);
    const recommended = cars.find(car => car.id === result.recommendedId);
    assert.ok(recommended);
    if (c.id !== 'home' || a.id === 'travel') assert.notEqual(result.level, 'high');
    if (result.level === 'low') assert.equal(recommended.electric, false);
    combinations++;
  }
  assert.equal(combinations, 192);
});
test('perfis contrastantes têm caminhos diferentes', () => {
  assert.equal(getProfile(['urban', 'tech', 'home', 'upgrade']).recommendedId, 'yuan');
  assert.equal(getProfile(['urban', 'economy', 'home', 'save']).recommendedId, 'dolphin');
  assert.equal(getProfile(['travel', 'price', 'none', 'traditional']).recommendedId, 'onix');
  assert.equal(getProfile(['urban', 'economy', 'apartment', 'fear']).level, 'medium');
});
test('FAQ prioriza a objeção indicada e mantém os demais tópicos', () => {
  assert.equal(getFaq(['travel', 'tech', 'home', 'upgrade'])[0].id, 'travel');
  assert.equal(getFaq(['urban', 'tech', 'apartment', 'fear'])[0].id, 'apartment');
  assert.equal(getFaq(['urban', 'price', 'none', 'fear'])[0].id, 'none');
  assert.equal(new Set(getFaq([]).map(t => t.id)).size, 6);
});
