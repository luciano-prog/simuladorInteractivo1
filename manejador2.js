let consulta = prompt(
  "quiere ingresar a nuestro torneo de futbol? sino escriba ESC"
).toUpperCase();

//alert(" Disfruta del futbol y recomendanos a tus amigos⚽");
while (consulta != "ESC") {
  switch (consulta.toUpperCase()) {
    case "SI" || "SÍ":
      alert("Bienvenido al torneo ⚽🎈");
      break;
    case "NO":
      alert("Recomendanos con tus amigos⚽🎈");
      break;
    default:
      alert("Gracias por visitar nuestro sitio 😀😁✨");
      break;
  }
  consulta = prompt(
    "quiere ingresar a nuestro torneo de futbol? sino escriba ESC".toUpperCase()
  );
}

let baseDatos = [];
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

  nuevoEquipo = new Equipo(nombreCapturar, correoCapturar);
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
