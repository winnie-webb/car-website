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
  console.log(images);

  function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src) console.log(img);
    img.src = src;
  }

  const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach((entry) => {
      console.log(entry.target);
      if (!entry.isIntersecting) return;
      console.log(entry.target);
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
    });
  });

  images.forEach((image) => {
    imgObserver.observe(image);
  });
};
lazyLoadImages();

const scrollToComponent = () => {
  const shop = document.querySelector(".shop");
  const contact = document.querySelector(".contact");
  const locations = document.querySelector("iframe");

  const shopLinks = document.querySelectorAll(".shop-scroll");
  const locationLinks = document.querySelectorAll(".locations-scroll");
  const contactLinks = document.querySelectorAll(".contact-scroll");

  function scrollToSection(initiators, sectionToScroll) {
    initiators.forEach((initiator) => {
      initiator.addEventListener("click", () =>
        sectionToScroll.scrollIntoView({ behavior: "smooth" })
      );
    });
  }

  scrollToSection(shopLinks, shop);
  scrollToSection(locationLinks, locations);
  scrollToSection(contactLinks, contact);
};
scrollToComponent();
