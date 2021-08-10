//entidades
let baseDatos = []; //aquí hago una base de datos con array vacío de los equipos que se inscriban

let nombreCapturar = document.getElementById("nombre").value; //tomo los datos escritos en la tabla

let correoCapturar = document.getElementById("mail").value; //tomo los datos escritos en la tabla

//ejercicio del desafio complementario numero 9

let jugadores = "maradona";

console.log(jugadores);

let node = document.createElement("LI"); // Creo a <li> node
let textnode = document.createTextNode(jugadores); // Creo a text node
node.appendChild(textnode); // Append the text to <li>
document.getElementById("array").appendChild(node);

//funciones

function cambio() {
  let mensaje = "El precio de inscripción es de $4000";
  let node = document.createElement("p");
  let textnode = document.createTextNode(mensaje);
  node.appendChild(textnode);
  document.getElementById("ejemplo").appendChild(node);
}

document.getElementById("botón").onclick = function () {
  cambio();
};

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
  let nombre1 = prompt("repita el nombre de su equipo"); //realizó un prompt para confirmar los datos

  let correo1 = prompt("repita el correo electrónico"); //realizó un prompt para confirmar los datos
  nuevoEquipo = new Equipo(nombre1, correo1); //aquí creo el constructor del nuevo equipo.
  console.log(nuevoEquipo);
  agregar();
} //esta funcion permite conseguir los datos escritos en el formulario y volcarlo en la tabla.Previa pregunta para confirmar los datos.
