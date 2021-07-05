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
