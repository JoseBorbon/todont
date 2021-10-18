const chalk = require('chalk');

const addTodo = require('./addTodo');
const editTodo = require('./editTodo');
const deleteTodo = require('./deleteTodo');

const executeInput = (userInput) => {
  if (userInput === 'n' || userInput === 'N') {
    addTodo();
    console.clear();
    console.log(chalk.yellow.bold('Added New Todo!\n\n'));
  } else if (userInput === 'e' || userInput === 'E') {
    editTodo();
    console.clear();
    console.log(chalk.yellow.bold(`Updated! \n\n`));
  } else if (userInput === 'd' || userInput === 'D') {
    deleteTodo();
    console.clear();
    console.log(chalk.magenta.bold('Deleted! \n\n'));
  }
};

module.exports = executeInput;
