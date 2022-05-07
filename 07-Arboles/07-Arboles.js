const { BinarySearchTree } = require("../estructuras");

// En el prototipo de BinarySearchTree crear la funcion search que debe recibir un parametro y buscarlo en el arbol
// si lo encuentra, debe retornar el nodo. En caso contrario retornar el mensaje correspondiente.
// Ejemplo      (10)
//             /     \
//          (7)     (12)
//         /  \      /  \
//      (2)  (9)  (11)  (15)
BinarySearchTree.prototype.search = function (value) {
  if (this.value === value) return this.value;
  if (value < this.value) {
    if (!this.left) return "no se encontró el valor";
    return this.left.search(value);
  } else if (!this.right) return "no se encontró el valor";
  return this.right.search(value);
};

// En el prototipo de BinarySearchTree crear la funcion height que debe retornar la altura del mismo (cantidad de niveles)
// Ejemplo      (10)           ----> nivel 0
//             /     \
//          (7)     (12)       ----> nivel 1
//         /  \      /  \
//      (2)   (9)  (11)  (15)   ----> nivel 2

BinarySearchTree.prototype.height = function () {
  if (!this.left && !this.right) return 0;
  if (!this.left) return 1 + this.right.height();
  if (!this.right) return 1 + this.left.height();
  return 1 + Math.max(this.left.height(), this.right.height());
};

module.exports = {
  BinarySearchTree,
};
