// scrabbleSolver.js
const fs = require('fs');
const { permutations } = require('./permutations');
const { Wordlist } = require('./Wordlist');
const points = require('./files/points.json');

class ScrabbleSolver {
  constructor(dictPath) {
    this.list = new Wordlist(dictPath);  // sync load
  }

  getScrabbleValue(word) {
  let score = 0;
  for (const c of word) {
    const p = points[c.toUpperCase()];
    score += p || 0;
  }
  return score;
}

findWords(letters) {
  const foundWords = new Set();

  for (const perm of permutations(letters.toLowerCase())) {
    const word = this.list.search(perm);
    if (word !== '') foundWords.add(word);
  }

  const wordValues = new Map();
  for (const word of foundWords) {
    const points = this.getScrabbleValue(word);
    if (!wordValues.has(points)) {
      wordValues.set(points, new Set());
    }
    wordValues.get(points).add(word);
  }

  const wordsArray = [...wordValues.entries()]
    .sort((a, b) => b[0] - a[0]) // descending
    .map(([value, words]) => ({
      value,
      words: [...words].sort()
    }));

  return wordsArray;
}


  // Async wrapper to prevent blocking
  findWordsAsync(letters) {
    return new Promise((resolve) => {
      setImmediate(() => {
        const result = this.findWords(letters);
        resolve(result);
      });
    });
  }
}

module.exports = { ScrabbleSolver };