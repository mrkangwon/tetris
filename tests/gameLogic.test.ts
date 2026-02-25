import { clearLines, collides, rotateMatrixClockwise, type Matrix } from '../src/gameLogic';

describe('rotateMatrixClockwise', () => {
  it('rotates a square matrix clockwise', () => {
    const piece: Matrix = [
      [1, 0, 0],
      [1, 1, 1],
      [0, 0, 0]
    ];

    expect(rotateMatrixClockwise(piece)).toEqual([
      [0, 1, 1],
      [0, 1, 0],
      [0, 1, 0]
    ]);
  });
});

describe('collides', () => {
  it('returns false when piece fits in an empty space', () => {
    const board: Matrix = Array.from({ length: 4 }, () => [0, 0, 0, 0]);
    const piece: Matrix = [
      [1, 1],
      [1, 1]
    ];

    expect(collides(board, piece, 1, 1)).toBe(false);
  });

  it('returns true when piece overlaps filled cells', () => {
    const board: Matrix = [
      [0, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    const piece: Matrix = [
      [1, 1],
      [1, 1]
    ];

    expect(collides(board, piece, 0, 1)).toBe(true);
  });
});

describe('clearLines', () => {
  it('clears completed lines and prepends empty rows', () => {
    const board: Matrix = [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 1, 0, 1],
      [1, 1, 1, 1]
    ];

    expect(clearLines(board)).toEqual({
      board: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 1, 0, 1]
      ],
      cleared: 2
    });
  });
});
