const SCORE_TABLE = {
  0: 0,
  1: 40,
  2: 100,
  3: 300,
  4: 1200,
};

/**
 * Calculate the points earned for a single piece lock.
 * @param {number} linesCleared - Number of lines cleared (0-4).
 * @param {number} level - Current level (minimum 0).
 * @returns {number}
 */
export function calculateLockScore(linesCleared, level) {
  if (!Number.isInteger(linesCleared) || linesCleared < 0 || linesCleared > 4) {
    throw new Error('linesCleared must be an integer between 0 and 4');
  }

  if (!Number.isInteger(level) || level < 0) {
    throw new Error('level must be a non-negative integer');
  }

  return SCORE_TABLE[linesCleared] * (level + 1);
}

/**
 * Returns the next level based on total cleared lines.
 * @param {number} totalLinesCleared - Total cleared lines through the game.
 * @param {number} linesPerLevel - Number of lines required per level.
 * @returns {number}
 */
export function calculateLevel(totalLinesCleared, linesPerLevel = 10) {
  if (!Number.isInteger(totalLinesCleared) || totalLinesCleared < 0) {
    throw new Error('totalLinesCleared must be a non-negative integer');
  }

  if (!Number.isInteger(linesPerLevel) || linesPerLevel <= 0) {
    throw new Error('linesPerLevel must be a positive integer');
  }

  return Math.floor(totalLinesCleared / linesPerLevel);
}
