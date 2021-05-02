const burgerToggle = () => {
  const burger = document.querySelector(".header__burger");
  const burgerMenu = document.querySelector(".header__navLinks");
  burger.addEventListener("click", toggleMenu);

  function toggleMenu() {
    burger.classList.toggle("burger-toggled");
    burgerMenu.classList.toggle("burger-menu-toggled");
  }
};
burgerToggle();

const lazyLoadImages = () => {
  const images = document.querySelectorAll("img[data-src]");
  window.addEventListener("load", () => {
    images.forEach((image) => {
      const src = image.getAttribute("data-src");
      image.src = src;
    });
  });
};
lazyLoadImages();

const scrollToComponent = () => {
  const shop = document.querySelector(".shop");
  const contact = document.querySelector(".contact");
  const aboutus = document.querySelector(".aboutus");

  const shopLinks = document.querySelectorAll(".shop-scroll");
  const aboutusLinks = document.querySelectorAll(".aboutus-scroll");
  const contactLinks = document.querySelectorAll(".contact-scroll");

  function scrollToSection(initiators, sectionToScroll) {
    initiators.forEach((initiator) => {
      initiator.addEventListener("click", () =>
        sectionToScroll.scrollIntoView({ behavior: "smooth" })
      );
    });
  }

  scrollToSection(shopLinks, shop);
  scrollToSection(aboutusLinks, aboutus);
  scrollToSection(contactLinks, contact);
};
scrollToComponent();

const lazyLoadMap = () => {
  const map = document.querySelector("iframe[data-src]");
  window.addEventListener("load", () => {
    const src = map.getAttribute("data-src");
    map.src = src;
  });
};
lazyLoadMap();
