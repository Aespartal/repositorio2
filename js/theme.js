let themeCheckbox = document.getElementById("flexSwitchCheckDefault");
let themeLabel = themeCheckbox.label;
let loadComponent = document.getElementById("loading");
let webContainer = document.getElementById("webContainer");

const themeWeb = {
    true: 'dark',
    false: 'light'
}

async function initTheme() {
    this.setThemeCheckbox(isDarkMode);
    this.cambiarTheme(isDarkMode);
    this.mostrarWeb();
}

function cambiarTheme(isDarkMode) {
    document.body.className = themeWeb[isDarkMode];
}

function setThemeCheckbox(isDarkMode) {
    themeCheckbox.checked = isDarkMode;
}

themeCheckbox.addEventListener("change", function () {
    const isDarkMode = themeCheckbox.checked;
    const theme = themeWeb[isDarkMode];
    themeCheckbox.labels[0].innerHTML = getTraduccion(traduccionesTheme, theme);
    setDarkModeLocalStorage(isDarkMode);
    cambiarTheme(isDarkMode);
});

function getActualTheme() {
    return isDarkMode;
}

function setDarkModeLocalStorage(isDarkMode) {
    localStorage.setItem("darkMode", isDarkMode);
}

function toBoolean(str) {
    if (str == undefined) {
        return !str;
    }
    return str.toLowerCase() === 'true';
}

function mostrarWeb() {
    webContainer.style.display = 'block';
    loadComponent.style.display = 'none';
}

