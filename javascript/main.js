let navContactButton = document.getElementsByClassName("navContactButton")[0];
let introHelloMyNameIs = document.getElementsByClassName("introHelloMyNameIs")[0];
let navBar = document.getElementsByClassName("navBar")[0];
let body = document.body;
let LightDarkBtn = document.getElementsByClassName("navLightDarkMode")[0];
let LightDarkBtnText = document.getElementsByClassName("navLightDarkModeText")[0];

let Dark = true;

const lightmode = () => {
    navContactButton.setAttribute("id", "LightModeNavContactButton");
    introHelloMyNameIs.setAttribute("id", "LightModeIntroHelloMyNameIs");
    navBar.setAttribute("id", "LightModeNavBar");
    body.setAttribute("id", "LightModeBody");
    LightDarkBtn.setAttribute("id", "LightModeNavLightDarkMode");
    LightDarkBtnText.innerHTML = "Dark Mode";
    Dark = false;
}


const darkmode = () => {
    navContactButton.removeAttribute("id");
    introHelloMyNameIs.removeAttribute("id");
    navBar.removeAttribute("id");
    body.removeAttribute("id");
    LightDarkBtn.removeAttribute("id")
    LightDarkBtnText.innerHTML = "Light Mode";
    Dark = true;
}



const LightDarkModeSwitcher = () => {
    if(Dark) {
        lightmode();
    } else {
        darkmode();
    }
}

LightDarkBtn.addEventListener("click", LightDarkModeSwitcher)