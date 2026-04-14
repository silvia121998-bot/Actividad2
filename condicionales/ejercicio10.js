// ==========================================
// EJERCICIO 10: MÚLTIPLOS DE 5
// Entre 1 y 50
// ==========================================

// FOR
for (let i = 1; i <= 50; i++) {
  if (i % 5 === 0) {
    console.log("FOR:", i);
  }
}

// WHILE
let i1 = 1;

while (i1 <= 50) {
  if (i1 % 5 === 0) {
    console.log("WHILE:", i1);
  }
  i1++;
}

// DO-WHILE
let i2 = 1;

do {
  if (i2 % 5 === 0) {
    console.log("DO-WHILE:", i2);
  }
  i2++;
} while (i2 <= 50);