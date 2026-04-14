// ==========================================
// EJERCICIO 9: SUMA ACUMULATIVA
// Sumar desde 1 hasta N
// ==========================================

let N = parseInt(prompt("Ingresa un número"));

if (isNaN(N)) {
  alert("Error: número inválido");
} else {

  // FOR
  let suma1 = 0;

  for (let i = 1; i <= N; i++) {
    suma1 += i;
  }

  console.log("FOR:", suma1);


  // WHILE
  let suma2 = 0;
  let i = 1;

  while (i <= N) {
    suma2 += i;
    i++;
  }

  console.log("WHILE:", suma2);


  // DO-WHILE
  let suma3 = 0;
  let j = 1;

  do {
    suma3 += j;
    j++;
  } while (j <= N);

  console.log("DO-WHILE:", suma3);
}