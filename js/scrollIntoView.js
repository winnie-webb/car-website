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
