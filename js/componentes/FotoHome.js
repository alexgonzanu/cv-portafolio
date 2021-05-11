const base = document.querySelector(".base");

const crearFoto = () => {
  const fotoHome = document.createElement("img");
  fotoHome.src = "../../img/fotoHome.svg";
  fotoHome.alt = "Foto del Desarollador del portafolio";
  // base.appendChild(fotoHome);
};

export default crearFoto;
