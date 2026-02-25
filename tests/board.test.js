import test from 'node:test';
import assert from 'node:assert/strict';

import { clearLines, collides, rotateMatrix } from '../dist/src/game/board.js';

test('rotateMatrix rotates a matrix clockwise', () => {
  const piece = [
    [1, 0],
    [1, 1],
  ];

  assert.deepEqual(rotateMatrix(piece), [
    [1, 1],
    [1, 0],
  ]);
});

test('collides returns true when piece overlaps filled board cell', () => {
  const board = [
    [0, 0, 0],
    [0, 2, 0],
    [0, 0, 0],
  ];
  const piece = [[1]];

  assert.equal(collides(board, piece, 1, 1), true);
});

test('collides returns false when position is valid', () => {
  const board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  const piece = [[1]];

  assert.equal(collides(board, piece, 1, 1), false);
});

test('clearLines clears full rows and prepends empty rows', () => {
  const board = [
    [1, 1, 1],
    [1, 0, 1],
    [2, 2, 2],
  ];

  const result = clearLines(board);

  assert.equal(result.cleared, 2);
  assert.deepEqual(result.board, [
    [0, 0, 0],
    [0, 0, 0],
    [1, 0, 1],
  ]);
});
