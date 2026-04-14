// EJERCICIO 17: LISTA DE ESTUDIANTES

let estudiantes = [];

for (let i = 0; i < 3; i++) {
  let nombre = prompt("Nombre del estudiante");
  let nota = parseFloat(prompt("Nota del estudiante"));

  let estudiante = {
    nombre: nombre,
    nota: nota
  };

  estudiantes.push(estudiante);
}

console.log(estudiantes);