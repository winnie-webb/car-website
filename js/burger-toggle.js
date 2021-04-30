const burger = document.querySelector(".header__burger");
const burgerMenu = document.querySelector(".header__navLinks");
burger.addEventListener("click", toggleMenu);

function toggleMenu() {
  burger.classList.toggle("burger-toggled");
  burgerMenu.classList.toggle("burger-menu-toggled");
}
