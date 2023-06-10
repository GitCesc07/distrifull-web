// Variables Globales
let menuVisible = false;

function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("navegacion").classList = "";
    menuVisible = false;
  }
  else {
    document.getElementById("navegacion").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionarOption() {
  // Si selecciona una opcion del menú ocultamos el espacio del menú
  document.getElementById("navegacion").classList = "";
  menuVisible = false;
}


window.onscroll = function () {

  if (document.documentElement.scrollTop > 100) {
    document.querySelector(".go-top-container")
      .classList.add("show");
  }
  else {
    document.querySelector(".go-top-container")
      .classList.remove("show");
  }
}

document.querySelector(".go-top-container")
  .addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });