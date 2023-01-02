const botonMenu = document.querySelector("#menuNav");
const menuLinks = document.querySelector(".nav-links");

let menuBool = false;

botonMenu.addEventListener("click",() => {
    if (menuBool==false) {
        menuBool = true;
        menuLinks.classList.toggle("active");
    }
    else {
        menuBool = false;
        menuLinks.classList.toggle("active");
    }
})

