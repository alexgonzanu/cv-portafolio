import crearNavegador from "./componentes/Navegador.js";
import crearPaginaHome from "./paginas/home.js";

const base = document.querySelector(".base");
const crearComponentesPortafolio = () => {
  crearNavegador(base);
};

const limpiarPagina = () => {
  base.innerHTML = "";
  crearComponentesPortafolio();
};

crearComponentesPortafolio();
crearPaginaHome();

const home = document.querySelector(".home");
const about = document.querySelector(".about");
const portfolio = document.querySelector(".portfolio");
const contact = document.querySelector(".contact");

/*home.addEventListener("mouseover", e => {
  e.target.style.background = "orange";
})
home.addEventListener("mouseout", e => {
  e.target.style.background = "red";
})*/
