// ==========================================
// EJERCICIO 13: FILTRO DE POSITIVOS
// Termina cuando el número es negativo
// ==========================================

// DO-WHILE
let numero;

do {
  numero = parseFloat(prompt("Ingresa un número (negativo para salir)"));

  if (numero >= 0) {
    console.log("DO-WHILE:", numero);
  }

} while (numero >= 0);


// WHILE
let num2 = parseFloat(prompt("Ingresa un número"));

while (num2 >= 0) {
  console.log("WHILE:", num2);
  num2 = parseFloat(prompt("Ingresa otro número"));
}


// FOR
for (;;) {
  let num3 = parseFloat(prompt("Ingresa un número"));

  if (num3 < 0) {
    break;
  }

  console.log("FOR:", num3);
}