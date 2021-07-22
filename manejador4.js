let consulta = prompt(
  "quiere conocer las estadísticas del torneo?"
).toUpperCase; //aquí consulto por medio de un prompt por la visualización de las estadisticas.

if ((consulta = "SÍ" || "SI")) {
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
} else {
  let fourth = document.getElementById("t");
  fourth.insertAdjacentHTML(
    "afterend",
    "<p>No dude en consultarnos para ingresar al torneo</p>"
  );
}
