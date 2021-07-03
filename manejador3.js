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

/*let consulta = prompt("quiere jugar en la división 1?").toUpperCase();
let resultado = 0;

function porcentaje(num) {
  if (num > 0) {
    var resultado = num * 0.21;
    var civa = resultado + num;
    return (document.getElementById("caja 1").innerHTML =
      "<h2>El importe total con iva es de: $ " + (resultado + num));
    ("</h2>");
  } else {
    alert("ingrese un numero positivo");
  }
}
/*
let total = precio * 0.21;
alert("El precio es de: " + total);

let total = precio * 0.21;
/*let precio = (divi, iva) => {
  return divi * iva;
};
const iva = 0.21;

if (liga.toUpperCase() = "A") {
  let divi = 100;
  alert(precio);
} else {
  let divi = 50;
  alert(precio);
}*/
