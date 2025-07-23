const { ScrabbleSolver } = require('./ScrabbleSolver');

async function main() {
  const solver = new ScrabbleSolver('./files/nsf2023.txt', './files/points.txt');

  let wordValues = await solver.findWordsAsync('testab');
  console.log(JSON.stringify(wordValues));

  /*
  wordValues = await solver.findWordsAsync('aaalollipop');
  console.log(wordValues);

  wordValues = await solver.findWordsAsync('katetleke');
  console.log(wordValues); */

}

main().catch(err => {
  console.error('Error:', err);
});
