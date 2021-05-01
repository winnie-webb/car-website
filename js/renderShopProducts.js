const lazyLoadImages = () => {
  const images = document.querySelectorAll("[data-src]");
  console.log(images);
  const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach((entry) => {
      console.log(entry.target);
      if (!entry.isIntersecting) return;
      console.log(entry.target);
      const src = entry.target.getAttribute("data-src");
      entry.target.src = src;
      imgObserver.unobserve(entry);
    });
  });

  images.forEach((image) => {
    imgObserver.observe(image);
  });
};
lazyLoadImages();
