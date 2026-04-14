// ===============================
// EJERCICIO 1: VALIDADOR DE EDAD
// Enunciado:
// Pedir la edad. Si es menor de 18 → acceso denegado.
// Si es 18 o más → bienvenido. Validar que no ingresen texto.
// ===============================

let edad = parseInt(prompt("Ingresa tu edad"));

if (isNaN(edad)) {
  alert("Error: debes ingresar un número válido");
} else if (edad < 18) {
  alert("Acceso denegado");
} else {
  alert("Bienvenido");
}
