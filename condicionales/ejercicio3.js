
// ===============================
// EJERCICIO 3: PAR O IMPAR
// Enunciado:
// Pedir número y determinar si es par o impar
// ===============================

let numero = parseInt(prompt("Ingresa un número"));

if (isNaN(numero)) {
  alert("Error: ingresa un número válido");
} else if (numero % 2 === 0) {
  alert("Es par");
} else {
  alert("Es impar");
}