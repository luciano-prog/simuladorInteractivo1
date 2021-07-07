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
} //la funcion pregunta en la divisional que quiere jugar. si no elige la 1, el botón q establece en el archivo precio.html permite conocer el preico por jugar en la divisional 1 y la muestra escrita en el html.
alerta();

let baseDatos = []; //aquí hago una base de datos con array vacío de los equipos que se inscriban
function agregar() {
  baseDatos.push(nuevoEquipo);
  console.log(baseDatos);
  document.getElementById("tabla").innerHTML +=
    "<tbody><td>" +
    nuevoEquipo.nombre +
    "</td><td>" +
    nuevoEquipo.correo +
    "</td></tbody>";
} //aquí establezco la función agregar para que se escriban los equipos en la tabla.

function capturar() {
  function Equipo(nombre, correo) {
    this.nombre = nombre;
    this.correo = correo;
  }
  let nombreCapturar = document.getElementById("nombre").value; //tomo los datos escritos en la tabla

  let correoCapturar = document.getElementById("mail").value; //tomo los datos escritos en la tabla

  let nombre1 = prompt("repita el nombre de su equipo"); //realizó un prompt para confirmar los datos

  let correo1 = prompt("repita el correo electrónico"); //realizó un prompt para confirmar los datos

  nuevoEquipo = new Equipo(nombre1, correo1); //aquí creo el constructor del nuevo equipo.
  console.log(nuevoEquipo);
  agregar();
} //esta funcion permite conseguir los datos escritos en el formulario y volcarlo en la tabla.Previa pregunta para confirmar los datos.
