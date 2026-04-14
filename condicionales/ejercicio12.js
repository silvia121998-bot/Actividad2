// ==========================================
// EJERCICIO 12: TABLA DE POTENCIAS
// Mostrar potencias de un número
// ==========================================

let num = parseInt(prompt("Ingresa un número"));

if (isNaN(num)) {
  alert("Error: número inválido");
} else {

  // FOR
  for (let i = 1; i <= 5; i++) {
    console.log("FOR:", num ** i);
  }

  // WHILE
  let i = 1;

  while (i <= 5) {
    console.log("WHILE:", num ** i);
    i++;
  }

  // DO-WHILE
  let j = 1;

  do {
    console.log("DO-WHILE:", num ** j);
    j++;
  } while (j <= 5);
}