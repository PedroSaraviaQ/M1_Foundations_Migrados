// Usando la recursion calcular el producto de todos los numeros de dado arreglo
// ej:
// producto([1, 2, 5]) devuelve 10

const producto = function (array) {
  //escribe aqui tu codigo
  if (array.length === 1) return array[0];
  return array.pop() * producto(array);
};

// Dado un objeto con objetos anidados utilizar la recursión para crear una función
// que devuelva true o false dependiendo si el objeto tiene o no el valor pasado por parametro
// ejemplo:
// let obj = {
//    prop2:{value:5}
//     school: {
//         hogwarts: {
//             headmaster:{
//               name: {
//                 first: "Albus",
//                 last: "Dumbledore"
//               }
//             }
//         }
//     }

const isThere = function (obj, value) {
  //escribe aqui tu codigo
  if (Object.values(obj).includes(value)) return true;
  for (let key in obj) {
    if (typeof obj[key] === "object" && isThere(obj[key], value)) return true;
  }
  return false;
};
module.exports = { producto, isThere };
