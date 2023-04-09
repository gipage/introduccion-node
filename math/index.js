function add(x, y) {
  return x + y;
}
function subtract(x, y) {
    return x - y;
  }

  function multiply(x, y) {
    return x * y;
  }

  function divide(x, y) {
    return x / y;
  }
  //exporto un objeto con las 4 funciones
  module.exports = {
    add,
    subtract,
    multiply,
    divide
  }
