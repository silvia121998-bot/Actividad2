// ===============================
// EJERCICIO 5: CALCULADORA BÁSICA
// Enunciado:
// Pedir dos números y una operación
// ===============================

let num1 = parseFloat(prompt("Número 1"));
let num2 = parseFloat(prompt("Número 2"));
let operacion = prompt("Operación: suma, resta, mult, div");

if (isNaN(num1) || isNaN(num2)) {
  alert("Error: debes ingresar números válidos");
} else if (operacion === null) {
  alert("Cancelado");
} else {
  operacion = operacion.toLowerCase();

  let resultado;

  switch (operacion) {
    case "suma":
      resultado = num1 + num2;
      break;
    case "resta":
      resultado = num1 - num2;
      break;
    case "mult":
      resultado = num1 * num2;
      break;
    case "div":
      if (num2 === 0) {
        alert("No se puede dividir por cero");
        resultado = null;
      } else {
        resultado = num1 / num2;
      }
      break;
    default:
      alert("Operación inválida");
      resultado = null;
  }

  if (resultado !== null) {
    alert("Resultado: " + resultado);
  }
}