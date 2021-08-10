function mySecondFunction() {
  $("#body").prepend(
    '<p id="i9">Queda una sola vacante para anotarse y ya se está yendo</p>'
  );
  $("#i9").css("color", "red").slideUp(10000).slideDown(10000);
}

function myFunction() {
  let x = document.getElementById("frm1").target;
  if ((x = "SI" || "SÍ" || "si" || "sí")) {
    document.getElementById("demo").innerHTML = "Bienvenido al torneo 🎈⚽";
  }
}

let baseDatos = [];
//aquí hago una base de datos con array vacío de los equipos que se inscriban

//funciones
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

let nombreCapturar = document.getElementById("nombre").value; //tomo los datos escritos en la tabla

let correoCapturar = document.getElementById("mail").value; //tomo los datos escritos en la tabla

function capturar() {
  function Equipo(nombre, correo) {
    this.nombre = nombre;
    this.correo = correo;
  }

  let nombre1 = prompt("repita el nombre de su equipo"); //realizó un prompt para confirmar los datos

  let correo1 = prompt("repita el correo electrónico"); //realizó un prompt para confirmar los datos

  nuevoEquipo = new Equipo(nombre1, correo1); //aquí creo el constructor del nuevo equipo.
  console.log(nuevoEquipo);
  agregar();
} //esta funcion permite conseguir los datos escritos en el formulario y volcarlo en la tabla.Previa pregunta para confirmar los datos.
