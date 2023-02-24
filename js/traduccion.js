let idiomaDefault = "es";
let traduccion = null;
let checkBoxTraducido = false;
let traduccionesTheme;

async function obtenerTraduccion(idioma) {
  traduccion = await getData(idioma);
  setIdiomaLocalStorage(idioma);
  cambiarIdioma(idioma);
}

async function getData(idioma) {
    const response = await fetch(`i18/${idioma}.json`);
    const data = await response.json();
    return data;
}

function cambiarIdioma(idioma) {
  const traducciones = traduccion[idioma];
  const claves = Object.keys(traducciones);
  this.traducir(traducciones, claves);
}

function traducir(traducciones, claves) {
  for (const clave of claves) {
    const traduccion = getTraduccion(traducciones, clave);
      if (!isString(traduccion)) {
        traduccionesTheme = traduccion;
        const claveObj = Object.keys(traduccionesTheme);
        this.traducir(traduccionesTheme, claveObj);
      }
      const elemento = document.getElementById(clave);
      if (elemento) {
        elemento.innerHTML = traduccion;
      } else if (clave == 'dark' || clave == 'light'){
        themeCheckbox.labels[0].innerHTML = getActualTheme() ? getTraduccion(traduccionesTheme, 'dark') : getTraduccion(traduccionesTheme, 'light');
      }
  }
}

function getTraduccion(traducciones, clave) {
  return traducciones[clave];
}

function setIdiomaLocalStorage(idioma) {
  localStorage.setItem("idioma", idioma);
}

function isString(str) {
  return typeof str === "string";
}
