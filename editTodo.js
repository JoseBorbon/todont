const readlineSync = require('readline-sync');

const todos = require('./todos');

const editTodo = () => {
  const index = readlineSync.keyInSelect(
    todos.map(({ text }) => text),
    'Which do you want to toggle?'
  );
  if (index === -1) process.exit();

  todos[index].isComplete = !todos[index].isComplete;
};

module.exports = editTodo;
