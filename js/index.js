import crearNavegador from "./componentes/Navegador.js";

const base = document.querySelector(".base");
const crearComponentesPortafolio = () => {
  crearNavegador(base);
};

document.body.addEventListener("click", e => {
  switch (e.target.innerText) {
    case "INICIO":
      console.log("Aqui va a ir los componentes de HOME");
      break;
    case "SOBRE MI":
      console.log("Aqui va a ir los componentes de ABOUT");
      break;
    case "PORTAFOLIO":
      console.log("Aqui va a ir los componentes de PORTAFOLIO");
      break;
    case "CONTACTO":
      console.log("Aqui va a ir los componentes de CONTACT");
      break;
    default:
      break;
  }
});

crearComponentesPortafolio();
