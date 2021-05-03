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

const lazyLoadImages = () => {
  const images = document.querySelectorAll("[data-src]");

  const addSrc = (element) => {
    const src = element.getAttribute("data-src");
    element.src = src;
  };
  const elementsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      addSrc(entry.target);
      observer.unobserve(entry.target);
    });
  });
  images.forEach((element) => {
    elementsObserver.observe(element);
  });
};
lazyLoadImages();
