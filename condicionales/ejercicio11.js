// ==========================================
// EJERCICIO 11: CLAVE MAESTRA
// Pedir contraseña hasta que sea correcta
// ==========================================

// WHILE
let clave1 = "";

while (clave1 !== "SESAMO123") {
  clave1 = prompt("Ingresa la contraseña");
}

alert("Acceso concedido (WHILE)");


// DO-WHILE
let clave2;

do {
  clave2 = prompt("Ingresa la contraseña");
} while (clave2 !== "SESAMO123");

alert("Acceso concedido (DO-WHILE)");


// FOR
for (;;) {
  let clave3 = prompt("Ingresa la contraseña");

  if (clave3 === "SESAMO123") {
    alert("Acceso concedido (FOR)");
    break;
  }
}