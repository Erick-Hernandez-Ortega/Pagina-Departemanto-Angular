// Para mostrar el primer dropwmenu
const menuMas = document.querySelector("#bmas")
const menu_A_revelar = document.querySelector(".mas .menu-mas")

menuMas.addEventListener("click", (e) => {
    e.preventDefault()

    menu_A_revelar.classList.toggle("show")
})

// Para mostrar el segundo dropwmenu
const menuMas2 = document.querySelector("#bmas2")
const menu_A_revelar2 = document.querySelector(".mas2 .menu-mas2")

menuMas2.addEventListener("click", (e) => {
    e.preventDefault();

    menu_A_revelar2.classList.toggle("show")
})

// Para mostrar el boton de nav mobile
const bMenuMobile = document.querySelector("#bMenuMobile")
const bMenuMobile_revelar = document.querySelector(".mobile .linksMobile")

bMenuMobile.addEventListener("click", (e) => {
    e.preventDefault();

    bMenuMobile_revelar.classList.toggle("show")
})