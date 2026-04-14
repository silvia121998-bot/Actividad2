// ===============================
// EJERCICIO 4: DÍA DE LA SEMANA
// Enunciado:
// Pedir número del 1 al 7 y mostrar día
// ===============================

let dia = parseInt(prompt("Ingresa un número del 1 al 7"));

if (isNaN(dia)) {
  alert("Error: ingresa un número válido");
} else {
  switch (dia) {
    case 1:
      alert("Lunes");
      break;
    case 2:
      alert("Martes");
      break;
    case 3:
      alert("Miércoles");
      break;
    case 4:
      alert("Jueves");
      break;
    case 5:
      alert("Viernes");
      break;
    case 6:
      alert("Sábado");
      break;
    case 7:
      alert("Domingo");
      break;
    default:
      alert("Número inválido");
  }
}
