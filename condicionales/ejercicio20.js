// EJERCICIO 20: REEMPLAZO EN ARRAY

let numeros = [1, 2, 3, 4, 5];

let nuevo = parseInt(prompt("Nuevo número"));
let posicion = parseInt(prompt("Posición (0 a 4)"));

if (!isNaN(nuevo) && posicion >= 0 && posicion < numeros.length) {
  numeros[posicion] = nuevo;
}

console.log(numeros);