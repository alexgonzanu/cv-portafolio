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

document.body.addEventListener("click", e => {
  switch (e.target.innerText) {
    case "INICIO":
      limpiarPagina();
      crearPaginaHome();
      break;
    case "SOBRE_MI":
      limpiarPagina();
      console.log("Aqui va a ir los componentes de ABOUT");
      break;
    case "PORTAFOLIO":
      limpiarPagina();
      console.log("Aqui va a ir los componentes de PORTAFOLIO");
      break;
    case "CONTACTO":
      limpiarPagina();
      console.log("Aqui va a ir los componentes de CONTACT");
      break;
    default:
      break;
  }
});

crearComponentesPortafolio();
