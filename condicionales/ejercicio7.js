// ===============================
// EJERCICIO 7: CONVERSOR DE MONEDA
// Enunciado:
// Convertir dólares a euros, pesos o soles
// ===============================

let dolares = parseFloat(prompt("Cantidad en dólares"));
let moneda = prompt("Convertir a: euros, pesos o soles");

if (isNaN(dolares)) {
  alert("Error: ingresa un número válido");
} else if (moneda === null) {
  alert("Cancelado");
} else {
  moneda = moneda.toLowerCase();

  let resultado;

  switch (moneda) {
    case "euros":
      resultado = dolares * 0.9;
      break;
    case "pesos":
      resultado = dolares * 4000;
      break;
    case "soles":
      resultado = dolares * 3.8;
      break;
    default:
      alert("Moneda no válida");
      resultado = null;
  }

  if (resultado !== null) {
    alert("Resultado: " + resultado);
  }
}