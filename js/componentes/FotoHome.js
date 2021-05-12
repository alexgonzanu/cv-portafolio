
const crearSectionFoto = () => {
  const sectionFoto = document.createElement("section");
  sectionFoto.classList.add("sectionHomeCSS");
  sectionFoto.classList.add("col-4");
  sectionFoto.appendChild(crearFoto());
  return sectionFoto;
};

const crearFoto = () => {
  const fotoHome = document.createElement("img");
  fotoHome.src = "../../img/fotoHome.svg";
  fotoHome.alt = "Foto del Desarollador del portafolio";
  fotoHome.classList.add("fotoHomeCSS");
  return fotoHome;
}

export default crearSectionFoto;
