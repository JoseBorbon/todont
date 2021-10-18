//(text: String) => Todo object
const makeTodo = (text) => {
  return {
    text,
    isComplete: false,
  };
};

module.exports = makeTodo;
