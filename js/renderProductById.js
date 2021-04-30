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

const wrapper = document.querySelector(".product");
const urlParams = new URLSearchParams(window.location.search);
const id = Number(urlParams.get("id"));

let productToRender;
json.forEach((product) => {
  if (product.productId !== id) return;
  productToRender = product;
});

const { imgSrc, productName, price } = productToRender;

const img = document.createElement("img");
img.src = imgSrc;

wrapper.append(img);
