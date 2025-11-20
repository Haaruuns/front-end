const button = document.querySelector(".hamburger-button")

const menu = document.querySelector(".mobile-menu")

button.addEventListener("click", () => {
    menu.classList.toggle("active")
})