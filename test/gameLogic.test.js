import test from 'node:test';
import assert from 'node:assert/strict';

import { calculateLevel, calculateLockScore } from '../src/gameLogic.js';

test('calculateLockScore uses standard tetris score table', () => {
  assert.equal(calculateLockScore(0, 0), 0);
  assert.equal(calculateLockScore(1, 0), 40);
  assert.equal(calculateLockScore(2, 1), 200);
  assert.equal(calculateLockScore(3, 2), 900);
  assert.equal(calculateLockScore(4, 3), 4800);
});

test('calculateLockScore validates inputs', () => {
  assert.throws(() => calculateLockScore(5, 0), /linesCleared/);
  assert.throws(() => calculateLockScore(-1, 0), /linesCleared/);
  assert.throws(() => calculateLockScore(1.5, 0), /linesCleared/);
  assert.throws(() => calculateLockScore(1, -1), /level/);
});

test('calculateLevel computes level progression', () => {
  assert.equal(calculateLevel(0), 0);
  assert.equal(calculateLevel(9), 0);
  assert.equal(calculateLevel(10), 1);
  assert.equal(calculateLevel(37), 3);
  assert.equal(calculateLevel(24, 8), 3);
});

test('calculateLevel validates inputs', () => {
  assert.throws(() => calculateLevel(-1), /totalLinesCleared/);
  assert.throws(() => calculateLevel(10, 0), /linesPerLevel/);
  assert.throws(() => calculateLevel(10, 2.5), /linesPerLevel/);
});
