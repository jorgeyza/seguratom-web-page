jQuery(document).ready(function() {
  // Función para pintar los <a> del menú cuando se visualice la página a la que apuntan
  var pathname = window.location.pathname;

  if (
    pathname.includes("/servicios.html") ||
    pathname.includes("/serviciosAreaMedica.html") ||
    pathname.includes("/serviciosAreaIndustrial.html")
  ) {
    jQuery("#servicios").attr("class", "seleccionado");
  } else if (pathname.includes("/nosotros.html")) {
    jQuery("#nosotros").attr("class", "seleccionado");
  } else if (pathname.includes("/acreditaciones.html")) {
    jQuery("#acreditaciones").attr("class", "seleccionado");
  }

  // Función para mostrar el menú de mobile
  jQuery(".hamb").click(function(e) {
    e.preventDefault();
    jQuery(this)
      .find("i")
      .toggleClass("flaticon-menu-button-of-three-lines")
      .toggleClass("flaticon-delete");
    jQuery("header .menu").toggleClass("abierto");
  });
});

jQuery(window).on("load", function() {
  // Función para quitar div de carga
  jQuery(".load-div").fadeOut();

  //Función para agregar scroll a ícono de sobre
  var altomenu = jQuery("header").innerHeight();
  
  function scrollPagina() {
    window.scrollTo(0, 0);
    var hash = window.location.hash;
    if (hash) {
      jQuery("html,body").animate(
        {
          scrollTop: jQuery(hash).offset().top - altomenu
        },
        2500,
        "linear"
      );
    }
  }

  scrollPagina();

  jQuery("#sobre").click(function(e) {
    e.preventDefault();
    var id = jQuery(this).attr("href");
    jQuery("html,body").animate(
      {
        scrollTop: jQuery(id).offset().top - altomenu
      },
      1500,
      "linear"
    );
  });
});
