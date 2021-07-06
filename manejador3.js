function alerta() {
  let mensaje;
  let opcion = prompt("Quiere jugar en la divisional 1");

  if (opcion == null || opcion == "") {
    mensaje = "Has cancelado o introducido el nombre vacío";
  } else if (opcion.toLowerCase() == "si" || opcion.toLowerCase() == "sí") {
    mensaje = "El precio de inscripción es de $4000";
  } else {
    mensaje = "El precio de inscripción es de $2000";
  }
  document.getElementById("ejemplo").innerHTML = mensaje;
}
alerta();

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
