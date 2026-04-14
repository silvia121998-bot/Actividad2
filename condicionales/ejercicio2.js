// ===============================
// EJERCICIO 2: CALCULADORA DE HELADOS
// Enunciado:
// Helado base cuesta $5. Elegir topping:
// Oreo (+2), KitKat (+3), Brownie (+4)
// ===============================

let precio = 5;
let topping = prompt("Elige topping: Oreo, KitKat o Brownie");

if (topping === null) {
  alert("Cancelado");
} else {
  topping = topping.toLowerCase();

  switch (topping) {
    case "oreo":
      precio += 2;
      break;
    case "kitkat":
      precio += 3;
      break;
    case "brownie":
      precio += 4;
      break;
    default:
      alert("Topping no válido");
      precio = 5;
  }

  alert("Total a pagar: $" + precio);
}
