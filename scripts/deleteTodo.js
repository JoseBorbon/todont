const readlineSync = require('readline-sync');

const todos = require('../data/todos');

const deleteTodo = () => {
  const index = readlineSync.keyInSelect(
    todos.map(({ text }) => text),
    'Which do you want to delete?'
  );
  if (index === -1) process.exit();

  todos.splice(index, 1);
};

module.exports = deleteTodo;
