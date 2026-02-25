export type Cell = 0 | 1;
export type Matrix = Cell[][];

export const rotateMatrixClockwise = (matrix: Matrix): Matrix => {
  const size = matrix.length;
  return Array.from({ length: size }, (_, row) =>
    Array.from({ length: size }, (_, col) => matrix[size - col - 1][row])
  ) as Matrix;
};

export const collides = (board: Matrix, piece: Matrix, offsetX: number, offsetY: number): boolean => {
  for (let y = 0; y < piece.length; y += 1) {
    for (let x = 0; x < piece[y].length; x += 1) {
      if (piece[y][x] === 0) {
        continue;
      }

      const boardY = y + offsetY;
      const boardX = x + offsetX;

      if (boardY < 0 || boardY >= board.length || boardX < 0 || boardX >= board[0].length) {
        return true;
      }

      if (board[boardY][boardX] === 1) {
        return true;
      }
    }
  }

  return false;
};

export const clearLines = (board: Matrix): { board: Matrix; cleared: number } => {
  const width = board[0].length;
  const remaining = board.filter((row) => row.some((cell) => cell === 0));
  const cleared = board.length - remaining.length;

  const emptyRows = Array.from({ length: cleared }, () => Array.from({ length: width }, () => 0 as Cell));

  return {
    board: [...emptyRows, ...remaining],
    cleared
  };
};
