let idiomaDefault =
  localStorage.getItem("idioma") != null &&
  localStorage.getItem("idioma") == "es"
    ? "es"
    : "en";
let traduccion = null;

obtenerTraduccion(idiomaDefault);

async function obtenerTraduccion(idioma) {
  traduccion = await getData(idioma);
  setLocalStorage(idioma);
  cambiarIdioma(traduccion, idioma);
  return traduccion;
}

async function getData(idioma) {
    const response = await fetch(`i18/${idioma}.json`);
    const data = await response.json();
    return data;
}

function cambiarIdioma(traduccion, idioma) {
  let claves = Object.keys(traduccion[idioma]);
  for (const clave of claves) {
    if (clave == 'dark' || clave == 'light') {
        let elemento = document.getElementById('theme');
        if (elemento != null) {
            elemento.innerHTML = getTraduccion(clave);
        }
        continue;
    } 
    let elemento = document.getElementById(clave);
    if (elemento != null) {
      elemento.innerHTML = getTraduccion(clave);
    }
  }
}

function getTraduccion(clave) {
    return traduccion[localStorage.getItem("idioma")][clave];
}

function setLocalStorage(idioma) {
  localStorage.setItem("idioma", idioma);
}
