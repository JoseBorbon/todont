const chalk = require('chalk');
const todos = require('./todos');

const getMenu = () => {
  const menu = `${chalk.blue.bold(
    `Choose a todo to toggle its completeness (by entering its number) or choose an option at the bottom (by letter):`
  )}
${todos
  .map(
    ({ text, isComplete }, index) =>
      `${index + 1}: ${isComplete ? '✅' : '🆇 '} ${text}`
  )
  .join('\n')}
(n) Add new todo.
(e) Toggle a todo.
(d) Delete a todo.
(q) Quit
`;

  return menu;
};

module.exports = getMenu;
