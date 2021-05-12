import crearFoto from "../componentes/FotoHome.js";
import crearIntroHome from "../componentes/IntroHome.js";

const base = document.querySelector(".base");
const crearPaginaHome = () => {
  const mainHome = document.createElement("main");
  mainHome.classList.add("row");
  base.appendChild(mainHome).appendChild(crearFoto());
  base.appendChild(mainHome).appendChild(crearIntroHome());
};

export default crearPaginaHome;
