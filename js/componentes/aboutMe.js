const base = document.querySelector(".base");

const crearCabecera = () => {
  const cabeceraInfo = document.createElement("nav");
  cabeceraInfo.classList.add("row");
  for (const element of crearElementosCabecera()) {
    cabeceraInfo.appendChild(element);
  }
  base.appendChild(cabeceraInfo);
};

const crearElementosCabecera = () => {
  const elementNombre = document.createElement("span");
  elementNombre.classList.add("col");
  elementNombre.textContent = "Alejandro Gonzalez";
  const elementTelefono = document.createElement("span");
  elementTelefono.classList.add("col");
  elementTelefono.textContent = "+34 695928717";
  const elementEmail = document.createElement("span");
  elementEmail.classList.add("col");
  elementEmail.textContent = "alexgonzanu@gmail.com";
  return [
    elementNombre,
    elementTelefono,
    elementEmail
  ];
};

export default crearCabecera;
