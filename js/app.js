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