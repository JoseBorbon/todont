const makeTodo = require('../scripts/makeTodo');

const todos = [];

todos.push(makeTodo('Walk the doggy'));
todos.push(makeTodo('Make cereal'));
todos.push(makeTodo('Make bed'));
todos[2].isComplete = true;

module.exports = todos;
