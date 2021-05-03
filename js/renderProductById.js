var json = [
  {
    productId: 1,
    imgSrc: "./img/modelv-opt.jpg",
    productName: "model v",
    price: "$30,000",
  },
  {
    productId: 2,
    imgSrc: "./img/modelt-opt.jpg",
    productName: "model t",
    price: "$42,400",
  },
  {
    productId: 3,
    imgSrc: "./img/modelwc-opt.jpg",
    productName: "model WC",
    price: "$39,305",
  },
  {
    productId: 4,
    imgSrc: "./img/taycan12-opt.jpg",
    productName: "taycan 12",
    price: "$35,000",
  },
  {
    productId: 5,
    imgSrc: "./img/modelsupra-opt.jpg",
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

const img = document.createElement("img");

json.forEach((product) => {
  if (!product.id === id) return;

  img.src = product.imgSrc;
});

wrapper.append(img);
