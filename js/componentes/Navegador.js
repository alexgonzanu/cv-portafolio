
const crearNavegador = (base) => {
  const navegador = document.createElement("nav");
  navegador.classList.add("direction");
  navegador.classList.add("row");
  crearItemsNavegador(navegador);
  base.appendChild(navegador);
};

const crearItemsNavegador = (navegador) => {
  const apartados = ["INICIO", "SOBRE_MI", "PORTAFOLIO", "CONTACTO"];
  for (const apartado of apartados) {
    const item = document.createElement("button");
    item.classList.add("col");
    crearIcono(item, apartado);
    navegador.appendChild(item);
  }
};

const crearIcono = (item, apartado) => {
  const icono = document.createElement("i");
  icono.classList.add("fa");
  switch (apartado) {
    case "INICIO":
      item.classList.add("home");
      icono.classList.add("fa-home");
      break;
    case "SOBRE_MI":
      item.classList.add("about");
      icono.classList.add("fa-user");
      break;
    case "PORTAFOLIO":
      item.classList.add("portfolio");
      icono.classList.add("fa-briefcase");
      break;
    case "CONTACTO":
      item.classList.add("contact");
      icono.classList.add("fa-envelope-open");
      break;
    default:
      break;
  }
  item.appendChild(icono);
};

export default crearNavegador;
