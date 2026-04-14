// ===============================
// EJERCICIO 6: APROBADO O REPROBADO
// Enunciado:
// Pedir 3 notas y calcular promedio
// ===============================

let n1 = parseFloat(prompt("Nota 1"));
let n2 = parseFloat(prompt("Nota 2"));
let n3 = parseFloat(prompt("Nota 3"));

if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
  alert("Error: ingresa notas válidas");
} else {
  let promedio = (n1 + n2 + n3) / 3;

  if (promedio >= 6) {
    alert("Aprobado");
  } else {
    alert("Reprobado");
  }
}