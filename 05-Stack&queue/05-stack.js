const { Stack, Queue } = require("../estructuras");

// Utilizando un STACK, y dado un string, invertir el orden de las palabras.
// OJO: Para este ejercicio NO se pueden usar metodos de Array.
// Deben utilizar solo los metodos provistos por la STACK

// Parametro:
//  (String): string con un texto cargado de palabras

// Salida:
// > string con el mismo texto, el mismo orden, pero con las palabras invertidas.

// Ejemplo:
//   Colombia Argentina: aibmoloC anitnegrA
//   Mar Azulado oro : raM odaluzA oro

function efectoEspejo(str) {
  //tu codigo aqui
  let stack = new Queue();
  stack.array = str.split(" ");
  let s = "";
  while (stack.size() > 0) {
    let current = new Stack();
    current.array = stack.dequeue().split("");
    while (current.size() > 0) {
      s += current.pop();
    }
    if (stack.size()) s += " ";
  }
  return s;
}

module.exports = {
  efectoEspejo,
};
