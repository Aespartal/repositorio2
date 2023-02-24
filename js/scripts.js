let idioma = localStorage.getItem("idioma") == undefined ? idiomaDefault : localStorage.getItem("idioma");
let isDarkMode = toBoolean(localStorage.getItem('darkMode'));
obtenerTraduccion(idioma);
initTheme();