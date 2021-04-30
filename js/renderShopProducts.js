const shop = document.querySelector(".shop__productWrapper");

var json = [
  {
    productId: 1,
    imgSrc: "./img/max-verstappen-opt.jpg",
    productName: "model v",
    price: "$30,000",
  },
  {
    productId: 2,
    imgSrc: "./img/audi-opt.jpg",
    productName: "model t",
    price: "$42,400",
  },
  {
    productId: 3,
    imgSrc: "./img/bmw-opt.jpg",
    productName: "model WC",
    price: "$39,305",
  },
  {
    productId: 4,
    imgSrc: "./img/porsche-opt.jpg",
    productName: "taycan 12",
    price: "$35,000",
  },
  {
    productId: 5,
    imgSrc: "./img/new.jpg",
    productName: "model supra",
    price: "$50,000",
  },
  {
    productId: 6,
    imgSrc: "./img/hero-image-opt.jpg",
    productName: "WC forge",
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

    // Wrapper
    const productLink = document.createElement("a");
    productLink.href = `./product.html?id=${product.productId}`;
    //

    // Wrapper
    const buttonLinkWrapper = document.createElement("div");
    buttonLinkWrapper.className = "shop__product__buttonWrapper";
    //

    const buttonLink = document.createElement("div");
    buttonLink.textContent = "Purchase";
    buttonLink.className = "shop__product__button";

    shop.append(figure);
    figure.append(img);
    figure.append(nameAndPriceWrapper);
    figure.append(productLink);
    nameAndPriceWrapper.append(nameSpan);
    nameAndPriceWrapper.append(priceSpan);
    productLink.append(buttonLinkWrapper);
    buttonLinkWrapper.append(buttonLink);
  });
}
