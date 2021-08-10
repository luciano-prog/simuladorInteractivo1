// aquí solicito que responda si quiere ingresar al torneo y que si no escriba ESC. Todo lo pasa a mayúscula

/*let input = document.querySelector("input");
let log = document.getElementById("valores");

input.addEventListener("input", updateValue);

function updateValue(log) {
  if ((log = "SI" || "SÍ" || "si" || "sí")) {
    alert("Bienvenido al torneo 🎈⚽"); //HACER ANIMACIÓN
  } else {
    alert("Recomendanos con tus amigos🎈⚽"); //HACER ANIMACIÓN
  }
}*/

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
