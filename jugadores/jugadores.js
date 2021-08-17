//código referido a animaciones a fin de mostrar imagenes y utilizar el fade in.
$("#p").prepend(
  '<div class="text-center"><button id="btn1" class="btn btn-primary mt-3 mb-3">Más Info.</button></div>'
);
$("#p1").prepend(`<div style="display: none" id= "div1" class="container mt-5">
<h2 class="text-center mt-3"> Más beneficios para vos</h2>
  <div class="row mt-5">
   <div class="col-xl-4 col-lg-6 col-xs-12 p-5 tomato">
     <img src="../imagenes/figuras.jpg" width="250px" height="auto"/>
   </div>
  <div class="col-xl-8 col-lg-6 col-xs-12 pl-2 pr-3 mt-5 pt-5">
     <p class="text-white">Inscribe a los jugadores que no tienen equipo y súmalos a tu equipo.</p>
  </div>
</div>`);
//Uso toggle sobre div1 en respuesta al click del botón btn1
$("#btn1").click(() => {
  $("#div1").fadeIn(1000);
});

//código referido a mostrar los jugadores libres disponibles mediante la utilización de ajax y texto plano.
$(document).ready(function () {
  //Declaro la url del API
  const APIURL = "https://jsonplaceholder.typicode.com/posts";
  //Declaro la información a enviar
  const infoPost = {
    nombre: "Beckham",
    /*imagen: $(
      `<img src="../imagenes/beckham.jpg" width="50px" height="auto"/>`
    ),*/
    nombre2: "Bermudez",
    /*imagen: $(
      `<img src="../imagenes/bermudez.jpg" width="50px" height="auto"/>`
    ),*/
    nombre3: "Batistuta",
    /*imagen: $(`<img src="../imagenes/bati.jpg" width="50px" height="auto"/>`),*/
  };
  //Agregamos un botón con jQuery
  $("#p2").prepend(
    '<div class="text-center"><button class="btn btn-primary mt-3" id="btn2">Ver jugadores libres</button></div>'
  );
  //Escucho el evento click del botón agregado
  $("#btn2").click(() => {
    $.ajax({
      method: "POST",
      url: APIURL,
      data: infoPost,
      success: function (respuesta) {
        $("#lista").prepend(
          `<div class="text-center">${respuesta.nombre}</div>`
        );
      },
    });
    $("#btn2").click(() => {
      $.ajax({
        method: "POST",
        url: APIURL,
        data: infoPost,
        success: function (respuesta) {
          $("#lista").prepend(
            `<div class="text-center">${respuesta.nombre2}</div>`
          );
        },
      });
    });
    $("#btn2").click(() => {
      $.ajax({
        method: "POST",
        url: APIURL,
        data: infoPost,
        success: function (respuesta) {
          $("#lista").prepend(
            `<div class="text-center">${respuesta.nombre3}</div>`
          );
        },
      });
    });
  });
});
