//variables

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
