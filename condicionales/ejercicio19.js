// EJERCICIO 19git config --global user.name "TuNombre": MENÚ INFINITO

let opcion;

do {
  opcion = prompt("1. Saludar\n2. Despedirse\n3. Salir");

  switch (opcion) {
    case "1":
      alert("Hola!");
      break;
    case "2":
      alert("Adiós!");
      break;
    case "3":
      alert("Saliendo...");
      break;
    default:
      alert("Opción inválida");
  }

} while (opcion !== "3");