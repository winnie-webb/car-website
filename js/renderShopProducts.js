const shop = document.querySelector(".shop__productWrapper");

var json = [
  {
    productId: 1,
    imgSrc: "./img/max-verstappen.jpg",
    productName: "max verstappen",
    price: "$30,000",
  },
  {
    productId: 2,
    imgSrc: "./img/audi.jpg",
    productName: "audi rs7 matte",
    price: "$42,400",
  },
  {
    productId: 3,
    imgSrc: "./img/bmw.jpg",
    productName: "bmw",
    price: "$39,305",
  },
  {
    productId: 4,
    imgSrc: "./img/porsche.jpg",
    productName: "porshe taycan",
    price: "$35,000",
  },
  {
    productId: 5,
    imgSrc: "./img/max-verstappen.jpg",
    productName: "max verstappen",
    price: "$50,000",
  },
  {
    productId: 6,
    imgSrc: "./img/hero-image-opt.jpg",
    productName: "ferari",
    price: "$41,500",
  },
];
window.addEventListener("load", () => renderShopProducts(json));

function renderShopProducts(json) {
  json.forEach((product) => {
    // Wrapper
    const figure = document.createElement("figure");
    figure.className = `shop__product shop__product-${product.productId}`;
    //

    const img = document.createElement("img");
    img.src = product.imgSrc;
    console.log(img);

    // Wrapper
    const nameAndPriceWrapper = document.createElement("div");
    nameAndPriceWrapper.className = "util-product-content";
    //

    const nameSpan = document.createElement("span");
    nameSpan.textContent = product.productName;
    nameSpan.className = "shop__product__name";

    const priceSpan = document.createElement("span");
    priceSpan.textContent = `From ${product.price}`;
    priceSpan.className = "shop__product__price";

    shop.append(figure);
    figure.append(img);
    figure.append(nameAndPriceWrapper);
    nameAndPriceWrapper.append(nameSpan);
    nameAndPriceWrapper.append(priceSpan);
  });
}
