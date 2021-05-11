const crearNavegador = (base) => {
  const navegador = document.createElement("nav");
  navegador.classList.add("direction");
  navegador.classList.add("row");
  crearItemsNavegador(navegador);
  base.appendChild(navegador);
  console.log(base);
};

const crearItemsNavegador = (navegador) => {
  const apartados = ["INICIO", "SOBRE MI", "PORTAFOLIO", "CONTACTO"];
  for (const apartado of apartados) {
    const item = document.createElement("button");
    item.textContent = apartado;
    item.classList.add("col");
    const icono = document.createElement("i");
    icono.classList.add("fa");
    switch (apartado) {
      case "INICIO":
        icono.classList.add("fa-home");
        break;
      case "SOBRE MI":
        icono.classList.add("fa-user");
        break;
      case "PORTAFOLIO":
        icono.classList.add("fa-briefcase");
        break;
      case "CONTACTO":
      default:
        icono.classList.add("fa-envelope-open");
        break;
    }
    item.appendChild(icono);
    navegador.appendChild(item);
  }
};

export default crearNavegador;
