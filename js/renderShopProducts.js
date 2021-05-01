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
