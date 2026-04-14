// EJERCICIO 15: BUSCADOR DE NOMBRES

let nombres = ["juan", "ana", "luis", "maria", "carlos"];

let buscar = prompt("Ingresa un nombre").toLowerCase();

let encontrado = false;

for (let i = 0; i < nombres.length; i++) {
  if (nombres[i] === buscar) {
    encontrado = true;
  }
}

if (encontrado) {
  alert("Nombre encontrado");
} else {
  alert("No está en la lista");
}