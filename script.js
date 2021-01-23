// Selectores de Elementos
const body = document.getElementsByTagName("BODY")[0];
const themeSwitch = document.getElementById("themeSwitch");
const imageSwitch = document.getElementById("imageSwitch");
const home = document.getElementById("homeLink");
const suggestAcctivity = document.getElementById("suggestAcctivityLink");

// si existe el key en localStorage va a retornar su value
// si no existe el key retornará null
function getLocalStorage(key) {
    return localStorage.getItem(key);
}

function setLocalStorage(key, value) {
    return localStorage.setItem(key, value);
}

// Si no existe themSuggestActivity en local storage o es igual a 0 entonces colocar tema light
// En caso contrario colocar el tema dark
if (!getLocalStorage("themeSuggestActivity") || getLocalStorage("themeSuggestActivity") == 0) {
    body.style.backgroundColor = "white";
    imageSwitch.src = "./assets/monitor-levels.svg"
    body.style.color = "black";
    home.style.color = "black";
    suggestAcctivity.style.color = "black";

} else {
    body.style.backgroundColor = "black"
    imageSwitch.src = "./assets/moon-half-visible-face-on-light-and-half-on-darkness.svg"
    body.style.color = "white";
    home.style.color = "white";
    suggestAcctivity.style.color = "white";
}

// Este evento se aplica sobre el elemento themeSwitch
// Si es aplicado se cambian los colores y otras cosas
themeSwitch.addEventListener("click", () => {
    if (getLocalStorage("themeSuggestActivity") == 1) {
        setLocalStorage("themeSuggestActivity", "0");
        body.style.backgroundColor = "white";
        body.style.color = "black";
        imageSwitch.src = "./assets/monitor-levels.svg";
        home.style.color = "black";
        suggestAcctivity.style.color = "black";
    }
    else {
        setLocalStorage("themeSuggestActivity", "1");
        body.style.backgroundColor = "black";
        body.style.backgroundColor = "black"
        body.style.color = "white";
        imageSwitch.src = "./assets/moon-half-visible-face-on-light-and-half-on-darkness.svg";
        home.style.color = "white";
        suggestAcctivity.style.color = "white";
    }
});