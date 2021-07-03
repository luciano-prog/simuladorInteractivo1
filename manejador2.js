let consulta = prompt(
  "quiere ingresar a nuestro torneo de futbol? sino escriba ESC"
).toUpperCase();

//alert(" Disfruta del futbol y recomendanos a tus amigos⚽");
while (consulta.toUpperCase != "ESC") {
  switch (consulta.toUpperCase()) {
    case "SI" || "SÍ":
      alert("Bienvenido al torneo ⚽🎈");
      break;
    case "NO":
      alert("Recomendanos con tus amigos⚽🎈");
      break;
    default:
      alert("Gracias por visitar nuestro sitio 😀😁✨");
      break;
  }
  consulta = promt(
    "quiere ingresar a nuestro torneo de futbol? sino escriba ESC"
  ).toUpperCase();
}
