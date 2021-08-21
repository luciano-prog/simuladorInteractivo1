//---------const de equipos-------------
const equipos = [
  { id: 1, equipo: "Misti", puntos: 20 },
  { id: 2, equipo: "Extravagancia", puntos: 18 },
  { id: 3, equipo: "Menoscherano", puntos: 15 },
  { id: 4, equipo: "Flancitos", puntos: 13 },
];

const guardarLocal = (clave, valor) => {
  localStorage.setItem(clave, valor);
};

//Almacenamos producto por producto
for (const equipo of equipos) {
  guardarLocal(equipo.id, JSON.stringify(equipo));
}
// o almacenamos el array completo
guardarLocal("listaEquipos", JSON.stringify(equipos));

//entidades
let one = document.getElementById("1");
one.insertAdjacentHTML(
  "afterend",
  "<p>1ro: River 2do: Los descalsos 3ro: Robespierre</p>"
);

let second = document.getElementById("2");
second.insertAdjacentHTML(
  "afterend",
  "<p>🥇premio un juego de camisetas🥈premio un juego de pantalones 🥉 Un botella de sidra</p>"
);

let third = document.getElementById("3");
third.insertAdjacentHTML(
  "afterend",
  "<p>1er goleador⚽:martiarena 2do goleador🥎: perez 3er goleador:🏀juanca 4to goleador:🏐kily</p>"
);

let estadisticas1 = document.querySelector("#tablaEstadisticas");
estadisticas1.style.display = "none";

let boton = document.getElementById("toca");
//variables

//funciones
function myFunction() {
  let element = document.body;
  element.classList.toggle("light-mode");
}

boton.onclick = () => {
  if (estadisticas1.style.display === "none") {
    estadisticas1.style.display = "block";
    let uno = (boton.innerText = "Quiero dejar de ver");
    //uno.parentNode.removeChild(estadisticas1);
  } else {
    boton.innerText = "Quiero ver las Estadísticas";
    estadisticas1.style.display = "none";
  }
};
