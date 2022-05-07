const { LinkedList, Node } = require("../estructuras");
//agregar el metodo size al prototipo de LinkedList.
// Este metodo deberia retornar la cantidad de elementos de la lista
LinkedList.prototype.size = function () {
  let current = this.head;
  let size = 0;
  while (current) {
    current = current.next;
    size++;
  }
  return size;
};

// Agregar el método orderList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista enlazada de mayor a menor.
// Ejemplo:
//     Suponiendo que la lista actual es: Head --> [4] --> [5] --> [3]
//     lista.orderList();
//     Ahora la lista quedaría: Head --> [5] --> [4] --> [1]
// ACLARACIÓN: Se debe ordenar la lista original y no una nueva.
LinkedList.prototype.orderList = function () {
  // Tu código aca:
  for (let i = 1; i < this.size(); i++) {
    let current = this.head;
    for (let j = 0; j < this.size() - i; j++) {
      if (current.value < current.next.value) {
        let aux = current.next.value;
        current.next.value = current.value;
        current.value = aux;
      }
      current = current.next;
    }
  }
};

//agregar el metodo insert al prototipo de LinkedList.
// Este metodo deberia recibir una posicion y un valor
// agregar el valor en la posicion indicada
//tomar el head como posicion 1

LinkedList.prototype.insert = function (data, pos) {
  let node = new Node(data);
  let aux = this.head;
  this.head = node;
  node.next = aux;
};

module.exports = {
  LinkedList,
};
