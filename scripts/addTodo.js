const readlineSync = require('readline-sync');
const todos = require('../data/todos');

const addTodo = () => {
  const newTodo = readlineSync.question(
    'Please type in the name of the new Todo: '
  );
  todos.push({ text: newTodo, isComplete: false });
};

module.exports = addTodo;
