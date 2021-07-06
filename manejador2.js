let consulta = prompt(
  "quiere ingresar a nuestro torneo de futbol? sino escriba ESC"
).toUpperCase();

//alert(" Disfruta del futbol y recomendanos a tus amigos⚽");
while (consulta.toUpperCase() != "ESC") {
  switch (consulta.toUpperCase()) {
    case "SI" || "SÍ" || "si" || "sí":
      alert("Bienvenido al torneo ⚽🎈");

    case "NO" || "no":
      alert("Recomendanos con tus amigos⚽🎈");

    default:
      alert("Gracias por visitar nuestro sitio 😀😁✨");
  }
  consulta = prompt(
    "quiere ingresar a nuestro torneo de futbol? si ya respondió escriba ESC".toUpperCase()
  );
}

let baseDatos = [];
baseDatos.sort();

/*baseDatos.sort((a, b) => {
  const nombreA = a.nombre.toUpperCase();
  const nombreB = b.nombre.toUpperCase();

  if (nombreA < nombreB) {
    return -1;
  }
  if (nombreA > nombreB) {
    return 1;
  }
  return 0;
});*/

function agregar() {
  baseDatos.push(nuevoEquipo);
  console.log(baseDatos);
  document.getElementById("tabla").innerHTML +=
    "<tbody><td>" +
    nuevoEquipo.nombre +
    "</td><td>" +
    nuevoEquipo.correo +
    "</td></tbody>";
}

function capturar() {
  //console.log("capturado");
  function Equipo(nombre, correo) {
    this.nombre = nombre;
    this.correo = correo;
  }
  let nombreCapturar = document.getElementById("nombre").value;
  //console.log(nombreCapturar);
  let correoCapturar = document.getElementById("mail").value;

  let nombre1 = prompt("repita el nombre de su equipo");

  let correo1 = prompt("repita el correo electrónico");

  nuevoEquipo = new Equipo(nombre1, correo1);
  console.log(nuevoEquipo);
  agregar();
}

/*
class Equipo {
  constructor(nombre, canti, direc) {
    this.nombre = nombre;
    this.canti = canti;
    this.direc = direc;
  }
  hablar() {
    alert("Ya te contactaremos para inscribirte " + this.nombre);
  }
}
const equipo1 = new Equipo(
  prompt("escribe el nombre de tu equipo"),
  11,
  prompt("escribe la dirección de tu equipo")
);
console.log(equipo1.hablar());*/
