let theme = 
    localStorage.getItem('darkMode') != null && 
    localStorage.getItem('darkMode') == 'true'
    ? 'dark' 
    : 'light';

let themeCheckbox = document.getElementById("flexSwitchCheckDefault");
let themeLabel = themeCheckbox.label;

async function main() {
    await obtenerTraduccion(idioma);
    this.comprobarThemePorDefecto(theme);
    this.cambiarTheme(theme);
}

main();

themeCheckbox.addEventListener("change", function () {
    let theme = themeCheckbox.checked ? 'dark' : 'light';
    themeCheckbox.labels[0].innerHTML = getTraduccion(theme);
    localStorage.setItem('darkMode', themeCheckbox.checked);
    cambiarTheme(theme);
});

function cambiarTheme(theme) {
    document.body.className = theme;
}

function comprobarThemePorDefecto(theme) {
    console.log(theme);
    if (theme === 'dark') {
        themeCheckbox.checked = true;
        themeCheckbox.labels[0].innerHTML = getTraduccion(theme);
    }
}