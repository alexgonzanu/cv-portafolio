const crearIntroHome = () => {
  const sectionIntro = document.createElement("section");
  sectionIntro.classList.add("sectionHomeCSS");
  sectionIntro.appendChild(crearH1());
  sectionIntro.appendChild(crearDescription());
  return sectionIntro;
};

const crearH1 = () => {
  const h1Intro = document.createElement("h1");
  h1Intro.innerHTML = (`Soy Alejandro González.<br/>FullStack Developer`).toUpperCase();
  return h1Intro;
}

const crearDescription = () => {
  const description = document.createElement("p");
  description.innerHTML = `Soy un Desarrollador FullStack amante de los retos y siempre dispuesto a aprender nuevas tecnologias.<br/>
  Me encanta trabajar en equipo ya que las mejores cosas ocurren juntando conocimientos.`;
  return description;
}

export default crearIntroHome;
