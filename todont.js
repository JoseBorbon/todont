const readlineSync = require('readline-sync');

const getMenu = require('./scripts/getMenu');
const executeInput = require('./scripts/executeInput');

let response = readlineSync.question(getMenu());
console.clear();

while (response !== 'q' && response !== 'Q') {
  executeInput(response);
  response = readlineSync.question(getMenu());
  console.clear();
}

process.exit();
