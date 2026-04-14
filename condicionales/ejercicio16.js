// EJERCICIO 16: OBJETO AUTO

let auto = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2020
};

let nuevoAño = parseInt(prompt("Ingresa el nuevo año"));

if (!isNaN(nuevoAño)) {
  auto.año = nuevoAño;
}

console.log(auto);