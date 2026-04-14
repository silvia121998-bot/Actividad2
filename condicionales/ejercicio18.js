// EJERCICIO 18: CARRITO CON DESCUENTO

let total = 0;
let precio;

do {
  precio = parseFloat(prompt("Ingresa precio (0 para terminar)"));

  if (!isNaN(precio) && precio > 0) {
    total += precio;
  }

} while (precio !== 0);

if (total > 100) {
  total = total * 0.9;
}

alert("Total a pagar: " + total);